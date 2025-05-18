import type { Express, Request as ExpressRequest, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { WebSocketServer, WebSocket } from "ws";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import Stripe from "stripe";
import { 
  insertUserSchema, 
  insertChallengePlanSchema, 
  insertTradingAccountSchema,
  insertTradeSchema,
  insertPaymentSchema,
  insertPayoutSchema,
  insertActivityLogSchema,
  User
} from "@shared/schema";
import { z } from "zod";

// Initialize Stripe
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Extend the Request type to include user
interface Request extends ExpressRequest {
  user?: User;
}

// JWT secret - should be in env vars
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = "7d";

// Authentication middleware
const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token is invalid or expired" });
      }

      req.user = user as any;
      next();
    });
  } else {
    res.status(401).json({ message: "Authentication token required" });
  }
};

// Role-based authorization middleware
const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!roles.includes((req.user as any).role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }

    next();
  };
};

// Add Stripe payment routes
async function addStripeRoutes(app: Express) {
  // Create a payment intent for challenge purchase
  app.post('/api/create-payment-intent', authenticateJWT, async (req: Request, res: Response) => {
    try {
      const { planId, amount } = req.body;
      
      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      // Validate the plan exists
      const plan = await storage.getChallengePlan(parseInt(planId));
      if (!plan) {
        return res.status(404).json({ message: "Challenge plan not found" });
      }
      
      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        metadata: {
          userId: req.user.id.toString(),
          planId: planId,
          planName: plan.name,
        },
      });
      
      // Create a payment record in the database
      await storage.createPayment({
        userId: req.user.id,
        amount: amount,
        currency: "USD",
        status: "pending",
        paymentMethod: "stripe",
        paymentIntentId: paymentIntent.id,
        description: `Challenge purchase: ${plan.name}`,
      });
      
      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error: any) {
      console.error('Payment intent creation error:', error);
      res.status(500).json({ message: "Failed to create payment intent", error: error.message });
    }
  });
  
  // Webhook to handle Stripe events
  app.post('/api/webhook/stripe', async (req, res) => {
    const sig = req.headers['stripe-signature'] as string;
    let event;
    
    try {
      // This will throw an error if the signature is invalid
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET || ''
      );
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        
        // Update payment status in database
        const payment = await storage.getPaymentByIntentId(paymentIntent.id);
        if (payment) {
          await storage.updatePayment(payment.id, { status: "completed" });
          
          // Create trading account for the user
          const userId = parseInt(paymentIntent.metadata.userId);
          const planId = parseInt(paymentIntent.metadata.planId);
          const plan = await storage.getChallengePlan(planId);
          
          if (plan) {
            // Generate account number
            const accountNumber = `TR${Date.now().toString().substring(3)}`;
            
            // Create the trading account
            const newAccount = await storage.createTradingAccount({
              userId: userId,
              planId: planId,
              accountNumber: accountNumber,
              balance: plan.accountSize,
              equity: plan.accountSize,
              phase: "phase1",
              status: "active",
              targetProfit: plan.phase1Target,
              maxDrawdown: plan.maxDrawdown,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
            
            // Log activity
            await storage.createActivityLog({
              userId: userId,
              accountId: newAccount.id,
              action: 'account_created',
              details: `Trading account #${accountNumber} created after successful payment`,
            });
          }
        }
        break;
        
      case 'payment_intent.payment_failed':
        const failedPaymentIntent = event.data.object;
        
        // Update payment status in database
        const failedPayment = await storage.getPaymentByIntentId(failedPaymentIntent.id);
        if (failedPayment) {
          await storage.updatePayment(failedPayment.id, { status: "failed" });
          
          // Log activity
          await storage.createActivityLog({
            userId: failedPayment.userId,
            action: 'payment_failed',
            details: `Payment failed for ${failedPayment.description}`,
          });
        }
        break;
        
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    
    res.json({ received: true });
  });
  
  // Initiate a withdrawal
  app.post('/api/withdrawals/request', authenticateJWT, async (req: Request, res: Response) => {
    try {
      const { amount, accountId } = req.body;
      
      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      // Check if amount is valid
      if (!amount || amount <= 0) {
        return res.status(400).json({ message: "Invalid withdrawal amount" });
      }
      
      // Get the trading account
      const account = await storage.getTradingAccount(parseInt(accountId));
      if (!account) {
        return res.status(404).json({ message: "Trading account not found" });
      }
      
      // Verify account belongs to user
      if (account.userId !== req.user.id) {
        return res.status(403).json({ message: "You do not have permission to withdraw from this account" });
      }
      
      // Verify account is in funded phase
      if (account.phase !== "funded") {
        return res.status(400).json({ message: "Withdrawals are only available for funded accounts" });
      }
      
      // Check if account has enough balance
      if (account.balance - amount < account.accountSize) {
        return res.status(400).json({ message: "Insufficient funds for withdrawal. Only profits can be withdrawn." });
      }
      
      // Create payout request
      const payout = await storage.createPayout({
        userId: req.user.id,
        accountId: account.id,
        amount: amount,
        status: "pending",
        paymentMethod: req.body.paymentMethod || "bank_transfer",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      // Update account balance
      await storage.updateTradingAccount(account.id, {
        balance: account.balance - amount,
        equity: account.equity - amount,
      });
      
      // Log activity
      await storage.createActivityLog({
        userId: req.user.id,
        accountId: account.id,
        action: 'withdrawal_requested',
        details: `Withdrawal request of $${amount} submitted`,
      });
      
      res.status(201).json({
        message: "Withdrawal request submitted successfully",
        payout: payout
      });
    } catch (error: any) {
      console.error('Withdrawal request error:', error);
      res.status(500).json({ message: "Failed to process withdrawal request", error: error.message });
    }
  });
  
  // Admin approve/reject withdrawal
  app.post('/api/admin/withdrawals/:id/process', authenticateJWT, authorize(['admin']), async (req: Request, res: Response) => {
    try {
      const payoutId = parseInt(req.params.id);
      const { action, reason } = req.body;
      
      if (!['approve', 'reject'].includes(action)) {
        return res.status(400).json({ message: "Invalid action. Must be 'approve' or 'reject'" });
      }
      
      const payout = await storage.getPayout(payoutId);
      if (!payout) {
        return res.status(404).json({ message: "Payout request not found" });
      }
      
      if (payout.status !== "pending") {
        return res.status(400).json({ message: `This payout has already been ${payout.status}` });
      }
      
      if (action === 'approve') {
        // Update payout status
        await storage.updatePayout(payoutId, {
          status: "completed",
          processedAt: new Date(),
        });
        
        // Log activity
        await storage.createActivityLog({
          userId: payout.userId,
          accountId: payout.accountId,
          action: 'withdrawal_approved',
          details: `Withdrawal of $${payout.amount} approved by admin`,
        });
        
      } else {
        // Reject payout
        await storage.updatePayout(payoutId, {
          status: "rejected",
          rejectionReason: reason,
          processedAt: new Date(),
        });
        
        // Refund the amount to the account
        const account = await storage.getTradingAccount(payout.accountId);
        if (account) {
          await storage.updateTradingAccount(account.id, {
            balance: account.balance + payout.amount,
            equity: account.equity + payout.amount,
          });
        }
        
        // Log activity
        await storage.createActivityLog({
          userId: payout.userId,
          accountId: payout.accountId,
          action: 'withdrawal_rejected',
          details: `Withdrawal of $${payout.amount} rejected. Reason: ${reason}`,
        });
      }
      
      res.json({
        message: `Payout ${action === 'approve' ? 'approved' : 'rejected'} successfully`,
      });
      
    } catch (error: any) {
      console.error('Process withdrawal error:', error);
      res.status(500).json({ message: "Failed to process withdrawal", error: error.message });
    }
  });
}

// Market data functions
async function addMarketDataRoutes(app: Express) {
  // Base prices for market simulation
  const marketPrices = {
    "EUR/USD": { base: 1.0945, volatility: 0.0005 },
    "GBP/USD": { base: 1.2648, volatility: 0.0007 },
    "USD/JPY": { base: 156.75, volatility: 0.05 },
    "XAU/USD": { base: 2374.68, volatility: 1.2 },
    "USOIL": { base: 76.28, volatility: 0.3 },
    "XAGUSD": { base: 28.45, volatility: 0.15 }
  };
  
  // Keep track of last prices to create realistic movements
  const lastPrices: Record<string, number> = {};
  
  // Initialize last prices
  Object.entries(marketPrices).forEach(([symbol, data]) => {
    lastPrices[symbol] = data.base;
  });
  
  // API endpoint for market data
  app.get('/api/market-data', (req, res) => {
    try {
      const { symbol } = req.query;
      
      // Validate symbol parameter
      if (!symbol || typeof symbol !== 'string') {
        return res.status(400).json({ message: "Symbol parameter is required" });
      }
      
      // Check if symbol exists in our pricing data
      if (!marketPrices[symbol as keyof typeof marketPrices]) {
        return res.status(404).json({ message: "Symbol not found" });
      }
      
      // Generate realistic market movement
      const priceInfo = marketPrices[symbol as keyof typeof marketPrices];
      const lastPrice = lastPrices[symbol] || priceInfo.base;
      
      // Random direction (slightly biased toward momentum)
      const direction = lastPrice > priceInfo.base 
        ? (Math.random() > 0.45 ? 1 : -1) 
        : (Math.random() > 0.55 ? 1 : -1);
        
      // Random movement based on volatility
      const change = direction * priceInfo.volatility * Math.random();
      const newPrice = lastPrice + change;
      
      // Store the current price for next time
      lastPrices[symbol] = newPrice;
      
      // Send the price data
      res.json({ price: newPrice });
    } catch (error) {
      console.error('Market data error:', error);
      res.status(500).json({ message: "Server error" });
    }
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);
  
  // Add payment, withdrawal and MetaTrader integration routes
  await addStripeRoutes(app);
  await addMarketDataRoutes(app);
  
  // WebSocket server for real-time updates
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });
  
  // Track connected clients with their user IDs
  const connectedClients = new Map<string, WebSocket>();

  wss.on('connection', (ws, req) => {
    let userId: string | null = null;
    
    // Authentication for WebSocket connections
    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        
        // Handle authentication message
        if (data.type === 'auth') {
          try {
            const decoded = jwt.verify(data.token, JWT_SECRET) as any;
            userId = decoded.id.toString();
            connectedClients.set(userId, ws);
            
            // Send confirmation
            ws.send(JSON.stringify({
              type: 'auth_success',
              userId: userId
            }));
            
            console.log(`WebSocket client authenticated: User ${userId}`);
          } catch (err) {
            ws.send(JSON.stringify({
              type: 'auth_error',
              message: 'Invalid authentication token'
            }));
          }
          return;
        }
        
        // Handle trading data subscriptions
        if (data.type === 'subscribe') {
          if (!userId) {
            ws.send(JSON.stringify({
              type: 'error',
              message: 'Authentication required'
            }));
            return;
          }
          
          if (data.channel === 'accounts') {
            ws.send(JSON.stringify({
              type: 'subscription_success',
              channel: 'accounts'
            }));
            
            // Send initial data
            sendUserAccountsData(userId, ws);
          }
          
          if (data.channel === 'market_data') {
            ws.send(JSON.stringify({
              type: 'subscription_success',
              channel: 'market_data',
              symbol: data.symbol || 'XAUUSD'
            }));
            
            // Start sending periodic market data updates
            startMarketDataUpdates(ws, data.symbol || 'XAUUSD');
          }
        }
        
      } catch (error) {
        console.error('WebSocket message error:', error);
      }
    });
    
    // Handle client disconnect
    ws.on('close', () => {
      if (userId) {
        connectedClients.delete(userId);
        console.log(`WebSocket client disconnected: User ${userId}`);
      }
    });
  });

  // Send user accounts data
  async function sendUserAccountsData(userId: string, ws: WebSocket) {
    try {
      const accounts = await storage.getUserTradingAccounts(parseInt(userId));
      
      ws.send(JSON.stringify({
        type: 'accounts_update',
        accounts: accounts
      }));
    } catch (error) {
      console.error('Error sending account data via WebSocket:', error);
    }
  }
  
  // Mock market data updates
  function startMarketDataUpdates(ws: WebSocket, symbol: string) {
    // Initial price points based on symbol
    let basePrice = symbol === 'XAUUSD' ? 2380.45 : 1.25;
    let volatility = symbol === 'XAUUSD' ? 5.0 : 0.005;
    
    // Send initial data
    ws.send(JSON.stringify({
      type: 'market_data',
      symbol: symbol,
      price: basePrice,
      timestamp: Date.now()
    }));
    
    // Simulate price updates every second
    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        const change = (Math.random() - 0.5) * volatility;
        basePrice += change;
        
        ws.send(JSON.stringify({
          type: 'market_data',
          symbol: symbol,
          price: basePrice,
          change: change,
          timestamp: Date.now()
        }));
      } else {
        clearInterval(interval);
      }
    }, 1000);
    
    // Clear interval on client disconnect
    ws.on('close', () => clearInterval(interval));
  }

  // Broadcast to all connected clients
  const broadcast = (data: any) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  };
  
  // Send notification to specific user
  const notifyUser = (userId: number, data: any) => {
    const userIdStr = userId.toString();
    const client = connectedClients.get(userIdStr);
    
    if (client && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  };

  // Auth routes
  app.post('/api/auth/register', async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(userData.email);
      if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists" });
      }

      const existingUsername = await storage.getUserByUsername(userData.username);
      if (existingUsername) {
        return res.status(400).json({ message: "Username is already taken" });
      }

      // Create new user
      const newUser = await storage.createUser(userData);
      
      // Create activity log
      await storage.createActivityLog({
        userId: newUser.id,
        action: 'user_registered',
        details: `User ${newUser.username} registered`,
      });

      // Generate token
      const token = jwt.sign({ 
        id: newUser.id, 
        email: newUser.email,
        username: newUser.username,
        role: newUser.role
      }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

      res.status(201).json({ 
        message: "User registered successfully", 
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          role: newUser.role
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error('Registration error:', error);
      res.status(500).json({ message: "Failed to register user" });
    }
  });

  app.post('/api/auth/login', async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }

      // Find user by username
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Verify password
      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Create activity log
      await storage.createActivityLog({
        userId: user.id,
        action: 'user_login',
        details: `User ${user.username} logged in`,
      });

      // Generate token
      const token = jwt.sign({ 
        id: user.id, 
        email: user.email,
        username: user.username,
        role: user.role
      }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

      res.json({ 
        message: "Login successful", 
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: "Login failed" });
    }
  });

  // User routes
  app.get('/api/users/me', authenticateJWT, async (req, res) => {
    try {
      const userId = (req.user as any).id;
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        status: user.status,
        createdAt: user.createdAt
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ message: "Failed to fetch user data" });
    }
  });

  app.patch('/api/users/me', authenticateJWT, async (req, res) => {
    try {
      const userId = (req.user as any).id;
      const updateData = req.body;
      
      // Remove sensitive fields that shouldn't be updated directly
      delete updateData.id;
      delete updateData.role;
      delete updateData.status;
      delete updateData.createdAt;
      delete updateData.updatedAt;

      const updatedUser = await storage.updateUser(userId, updateData);
      
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({
        id: updatedUser.id,
        email: updatedUser.email,
        username: updatedUser.username,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        role: updatedUser.role,
        status: updatedUser.status,
        updatedAt: updatedUser.updatedAt
      });
    } catch (error) {
      console.error('Update user error:', error);
      res.status(500).json({ message: "Failed to update user data" });
    }
  });

  // Admin user routes
  app.get('/api/admin/users', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      
      const { users, count } = await storage.getAllUsers(page, limit);
      
      res.json({
        users: users.map(user => ({
          id: user.id,
          email: user.email,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          status: user.status,
          createdAt: user.createdAt
        })),
        pagination: {
          total: count,
          page,
          limit,
          pages: Math.ceil(count / limit)
        }
      });
    } catch (error) {
      console.error('Get users error:', error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });

  // Challenge plan routes
  app.get('/api/challenge-plans', async (req, res) => {
    try {
      const plans = await storage.getActiveChallengePlans();
      res.json(plans);
    } catch (error) {
      console.error('Get challenge plans error:', error);
      res.status(500).json({ message: "Failed to fetch challenge plans" });
    }
  });

  app.post('/api/admin/challenge-plans', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const planData = insertChallengePlanSchema.parse(req.body);
      const newPlan = await storage.createChallengePlan(planData);
      
      // Create activity log
      await storage.createActivityLog({
        userId: (req.user as any).id,
        action: 'challenge_plan_created',
        details: `Admin created new challenge plan: ${newPlan.name}`,
      });

      res.status(201).json(newPlan);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error('Create challenge plan error:', error);
      res.status(500).json({ message: "Failed to create challenge plan" });
    }
  });

  app.patch('/api/admin/challenge-plans/:id', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const planId = parseInt(req.params.id);
      const updateData = req.body;
      
      const updatedPlan = await storage.updateChallengePlan(planId, updateData);
      
      if (!updatedPlan) {
        return res.status(404).json({ message: "Challenge plan not found" });
      }

      // Create activity log
      await storage.createActivityLog({
        userId: (req.user as any).id,
        action: 'challenge_plan_updated',
        details: `Admin updated challenge plan: ${updatedPlan.name}`,
      });

      res.json(updatedPlan);
    } catch (error) {
      console.error('Update challenge plan error:', error);
      res.status(500).json({ message: "Failed to update challenge plan" });
    }
  });

  // Trading account routes
  app.get('/api/trading-accounts', authenticateJWT, async (req, res) => {
    try {
      const userId = (req.user as any).id;
      const accounts = await storage.getUserTradingAccounts(userId);
      
      // Get challenge plan details for each account
      const accountsWithPlanDetails = await Promise.all(accounts.map(async (account) => {
        const plan = await storage.getChallengePlan(account.planId);
        return {
          ...account,
          plan: plan || null
        };
      }));
      
      res.json(accountsWithPlanDetails);
    } catch (error) {
      console.error('Get trading accounts error:', error);
      res.status(500).json({ message: "Failed to fetch trading accounts" });
    }
  });

  app.get('/api/trading-accounts/:id', authenticateJWT, async (req, res) => {
    try {
      const accountId = parseInt(req.params.id);
      const account = await storage.getTradingAccount(accountId);
      
      if (!account) {
        return res.status(404).json({ message: "Trading account not found" });
      }
      
      // Check if user owns this account or is an admin
      if (account.userId !== (req.user as any).id && (req.user as any).role !== 'admin') {
        return res.status(403).json({ message: "You don't have permission to access this account" });
      }
      
      // Get challenge plan details
      const plan = await storage.getChallengePlan(account.planId);
      
      res.json({
        ...account,
        plan: plan || null
      });
    } catch (error) {
      console.error('Get trading account error:', error);
      res.status(500).json({ message: "Failed to fetch trading account" });
    }
  });

  app.post('/api/admin/trading-accounts', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const accountData = insertTradingAccountSchema.parse(req.body);
      const newAccount = await storage.createTradingAccount(accountData);
      
      // Create activity log
      await storage.createActivityLog({
        userId: (req.user as any).id,
        accountId: newAccount.id,
        action: 'trading_account_created',
        details: `Admin created new trading account #${newAccount.accountNumber}`,
      });

      res.status(201).json(newAccount);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error('Create trading account error:', error);
      res.status(500).json({ message: "Failed to create trading account" });
    }
  });

  app.patch('/api/admin/trading-accounts/:id', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const accountId = parseInt(req.params.id);
      const updateData = req.body;
      
      const updatedAccount = await storage.updateTradingAccount(accountId, updateData);
      
      if (!updatedAccount) {
        return res.status(404).json({ message: "Trading account not found" });
      }

      // Create activity log
      await storage.createActivityLog({
        userId: (req.user as any).id,
        accountId: updatedAccount.id,
        action: 'trading_account_updated',
        details: `Admin updated trading account #${updatedAccount.accountNumber}`,
      });

      // If account status changed to breached, add specific log
      if (updateData.status === 'breached') {
        await storage.createActivityLog({
          userId: updatedAccount.userId,
          accountId: updatedAccount.id,
          action: 'account_breached',
          details: `Account #${updatedAccount.accountNumber} breached: ${updateData.breachReason || 'Reason not specified'}`,
        });

        // Notify connected clients via WebSocket
        broadcast({
          type: 'account_breached',
          accountId: updatedAccount.id,
          userId: updatedAccount.userId,
          accountNumber: updatedAccount.accountNumber,
          reason: updateData.breachReason
        });
      }

      // If account phase changed, add specific log
      if (updateData.phase && updateData.phase !== updatedAccount.phase) {
        await storage.createActivityLog({
          userId: updatedAccount.userId,
          accountId: updatedAccount.id,
          action: 'phase_changed',
          details: `Account #${updatedAccount.accountNumber} moved to ${updateData.phase}`,
        });

        // Notify connected clients via WebSocket
        broadcast({
          type: 'phase_changed',
          accountId: updatedAccount.id,
          userId: updatedAccount.userId,
          accountNumber: updatedAccount.accountNumber,
          phase: updateData.phase
        });
      }

      res.json(updatedAccount);
    } catch (error) {
      console.error('Update trading account error:', error);
      res.status(500).json({ message: "Failed to update trading account" });
    }
  });

  app.get('/api/admin/trading-accounts', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      
      const { accounts, count } = await storage.getAllTradingAccounts(page, limit);
      
      // Get user and plan details for each account
      const accountsWithDetails = await Promise.all(accounts.map(async (account) => {
        const user = await storage.getUser(account.userId);
        const plan = await storage.getChallengePlan(account.planId);
        return {
          ...account,
          user: user ? {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          } : null,
          plan: plan || null
        };
      }));
      
      res.json({
        accounts: accountsWithDetails,
        pagination: {
          total: count,
          page,
          limit,
          pages: Math.ceil(count / limit)
        }
      });
    } catch (error) {
      console.error('Get all trading accounts error:', error);
      res.status(500).json({ message: "Failed to fetch trading accounts" });
    }
  });

  // Trade routes
  app.get('/api/trading-accounts/:accountId/trades', authenticateJWT, async (req, res) => {
    try {
      const accountId = parseInt(req.params.accountId);
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      
      const account = await storage.getTradingAccount(accountId);
      
      if (!account) {
        return res.status(404).json({ message: "Trading account not found" });
      }
      
      // Check if user owns this account or is an admin
      if (account.userId !== (req.user as any).id && (req.user as any).role !== 'admin') {
        return res.status(403).json({ message: "You don't have permission to access this account's trades" });
      }
      
      const { trades, count } = await storage.getAccountTrades(accountId, page, limit);
      
      res.json({
        trades,
        pagination: {
          total: count,
          page,
          limit,
          pages: Math.ceil(count / limit)
        }
      });
    } catch (error) {
      console.error('Get account trades error:', error);
      res.status(500).json({ message: "Failed to fetch account trades" });
    }
  });

  app.post('/api/trading-accounts/:accountId/trades', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const accountId = parseInt(req.params.accountId);
      const tradeData = insertTradeSchema.parse({ ...req.body, accountId });
      
      const account = await storage.getTradingAccount(accountId);
      if (!account) {
        return res.status(404).json({ message: "Trading account not found" });
      }
      
      const newTrade = await storage.createTrade(tradeData);
      
      // Calculate profit/loss and update account balance if trade is closed
      if (newTrade.status === 'closed' && newTrade.profit !== null) {
        const newBalance = Number(account.balance) + Number(newTrade.profit);
        const profitPercentage = (Number(newTrade.profit) / Number(account.startingBalance)) * 100;
        
        await storage.updateTradingAccount(accountId, {
          balance: newBalance.toString(),
          currentDrawdown: profitPercentage < 0 ? (-profitPercentage).toString() : account.currentDrawdown,
          maxDrawdownReached: profitPercentage < 0 && Math.abs(profitPercentage) > Number(account.maxDrawdownReached) 
            ? (-profitPercentage).toString() 
            : account.maxDrawdownReached,
          profitReached: profitPercentage > 0 && profitPercentage > Number(account.profitReached)
            ? profitPercentage.toString()
            : account.profitReached
        });
        
        // Create activity log
        await storage.createActivityLog({
          userId: account.userId,
          accountId: account.id,
          action: 'trade_closed',
          details: `Trade closed on ${newTrade.symbol} with profit of ${newTrade.profit}`,
        });

        // Check for rule breaches
        const plan = await storage.getChallengePlan(account.planId);
        if (plan) {
          // Check max daily drawdown
          if (profitPercentage < 0 && Math.abs(profitPercentage) > Number(plan.maxDailyDrawdown)) {
            await storage.updateTradingAccount(accountId, {
              status: 'breached',
              breachReason: `Daily drawdown exceeded: ${Math.abs(profitPercentage).toFixed(2)}% (limit: ${plan.maxDailyDrawdown}%)`
            });
            
            // Create breach activity log
            await storage.createActivityLog({
              userId: account.userId,
              accountId: account.id,
              action: 'account_breached',
              details: `Daily drawdown exceeded: ${Math.abs(profitPercentage).toFixed(2)}% (limit: ${plan.maxDailyDrawdown}%)`,
            });
            
            // Notify connected clients via WebSocket
            broadcast({
              type: 'account_breached',
              accountId: account.id,
              userId: account.userId,
              accountNumber: account.accountNumber,
              reason: `Daily drawdown exceeded: ${Math.abs(profitPercentage).toFixed(2)}% (limit: ${plan.maxDailyDrawdown}%)`
            });
          }
          
          // Check max total drawdown
          if (profitPercentage < 0 && Math.abs(profitPercentage) > Number(plan.maxTotalDrawdown)) {
            await storage.updateTradingAccount(accountId, {
              status: 'breached',
              breachReason: `Total drawdown exceeded: ${Math.abs(profitPercentage).toFixed(2)}% (limit: ${plan.maxTotalDrawdown}%)`
            });
            
            // Create breach activity log
            await storage.createActivityLog({
              userId: account.userId,
              accountId: account.id,
              action: 'account_breached',
              details: `Total drawdown exceeded: ${Math.abs(profitPercentage).toFixed(2)}% (limit: ${plan.maxTotalDrawdown}%)`,
            });
            
            // Notify connected clients via WebSocket
            broadcast({
              type: 'account_breached',
              accountId: account.id,
              userId: account.userId,
              accountNumber: account.accountNumber,
              reason: `Total drawdown exceeded: ${Math.abs(profitPercentage).toFixed(2)}% (limit: ${plan.maxTotalDrawdown}%)`
            });
          }
          
          // Check profit target for phase completion
          if (account.phase === 'phase1' && profitPercentage >= Number(plan.profitTarget1)) {
            await storage.updateTradingAccount(accountId, {
              phase: 'phase2',
              status: 'qualified'
            });
            
            // Create phase completion activity log
            await storage.createActivityLog({
              userId: account.userId,
              accountId: account.id,
              action: 'phase_completed',
              details: `Phase 1 completed with profit of ${profitPercentage.toFixed(2)}%`,
            });
            
            // Notify connected clients via WebSocket
            broadcast({
              type: 'phase_completed',
              accountId: account.id,
              userId: account.userId,
              accountNumber: account.accountNumber,
              phase: 'phase1',
              nextPhase: 'phase2'
            });
          } else if (account.phase === 'phase2' && plan.profitTarget2 && profitPercentage >= Number(plan.profitTarget2)) {
            await storage.updateTradingAccount(accountId, {
              phase: 'funded',
              status: 'qualified'
            });
            
            // Create phase completion activity log
            await storage.createActivityLog({
              userId: account.userId,
              accountId: account.id,
              action: 'phase_completed',
              details: `Phase 2 completed with profit of ${profitPercentage.toFixed(2)}%. Account is now funded!`,
            });
            
            // Notify connected clients via WebSocket
            broadcast({
              type: 'phase_completed',
              accountId: account.id,
              userId: account.userId,
              accountNumber: account.accountNumber,
              phase: 'phase2',
              nextPhase: 'funded'
            });
          }
        }
      }
      
      res.status(201).json(newTrade);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error('Create trade error:', error);
      res.status(500).json({ message: "Failed to create trade" });
    }
  });

  // Payment routes
  app.post('/api/payments', authenticateJWT, async (req, res) => {
    try {
      const userId = (req.user as any).id;
      const paymentData = insertPaymentSchema.parse({ ...req.body, userId });
      
      // Check if challenge plan exists
      const plan = await storage.getChallengePlan(paymentData.planId);
      if (!plan || !plan.isActive) {
        return res.status(404).json({ message: "Challenge plan not found or inactive" });
      }
      
      // Create payment record
      const newPayment = await storage.createPayment(paymentData);
      
      // Create activity log
      await storage.createActivityLog({
        userId,
        action: 'payment_created',
        details: `Payment of ${newPayment.amount} created for ${plan.name} challenge`,
      });
      
      // For demo purposes, automatically complete the payment and create an account
      if (process.env.NODE_ENV === 'development') {
        // Update payment status
        await storage.updatePayment(newPayment.id, {
          status: 'completed',
          transactionId: `demo-${Date.now()}`
        });
        
        // Generate random account number
        const accountNumber = Math.floor(1000000 + Math.random() * 9000000).toString();
        
        // Create trading account
        const newAccount = await storage.createTradingAccount({
          userId,
          planId: paymentData.planId,
          accountNumber,
          balance: plan.accountSize.toString(),
          startingBalance: plan.accountSize.toString(),
          phase: 'phase1',
          status: 'active',
          currentDrawdown: '0',
          maxDrawdownReached: '0',
          profitReached: '0',
          startDate: new Date(),
          tradingDaysCompleted: 0,
          server: 'TradeFunded-Live1',
          leverage: '1:100'
        });
        
        // Update payment with account reference
        await storage.updatePayment(newPayment.id, {
          accountId: newAccount.id
        });
        
        // Create activity log
        await storage.createActivityLog({
          userId,
          accountId: newAccount.id,
          action: 'account_created',
          details: `Trading account #${accountNumber} created for ${plan.name} challenge`,
        });
        
        return res.status(201).json({
          payment: { ...newPayment, status: 'completed', accountId: newAccount.id },
          account: newAccount
        });
      }
      
      res.status(201).json(newPayment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error('Create payment error:', error);
      res.status(500).json({ message: "Failed to process payment" });
    }
  });

  app.get('/api/payments', authenticateJWT, async (req, res) => {
    try {
      const userId = (req.user as any).id;
      const payments = await storage.getUserPayments(userId);
      
      // Get challenge plan details for each payment
      const paymentsWithDetails = await Promise.all(payments.map(async (payment) => {
        const plan = await storage.getChallengePlan(payment.planId);
        let account = null;
        if (payment.accountId) {
          account = await storage.getTradingAccount(payment.accountId);
        }
        return {
          ...payment,
          plan: plan || null,
          account: account ? {
            id: account.id,
            accountNumber: account.accountNumber,
            balance: account.balance,
            phase: account.phase,
            status: account.status
          } : null
        };
      }));
      
      res.json(paymentsWithDetails);
    } catch (error) {
      console.error('Get payments error:', error);
      res.status(500).json({ message: "Failed to fetch payments" });
    }
  });

  // Payout routes
  app.post('/api/payouts', authenticateJWT, async (req, res) => {
    try {
      const userId = (req.user as any).id;
      const payoutData = insertPayoutSchema.parse({ ...req.body, userId });
      
      // Check if account exists and belongs to user
      const account = await storage.getTradingAccount(payoutData.accountId);
      if (!account) {
        return res.status(404).json({ message: "Trading account not found" });
      }
      
      if (account.userId !== userId) {
        return res.status(403).json({ message: "You don't have permission to request a payout for this account" });
      }
      
      // Check if account is funded and has profit
      if (account.phase !== 'funded') {
        return res.status(400).json({ message: "Account is not in funded phase" });
      }
      
      if (Number(account.balance) <= Number(account.startingBalance)) {
        return res.status(400).json({ message: "Account has no profit to withdraw" });
      }
      
      // Create payout record
      const newPayout = await storage.createPayout(payoutData);
      
      // Create activity log
      await storage.createActivityLog({
        userId,
        accountId: account.id,
        action: 'payout_requested',
        details: `Payout of ${newPayout.amount} requested for account #${account.accountNumber}`,
      });

      // Notify admin via WebSocket
      broadcast({
        type: 'payout_requested',
        payoutId: newPayout.id,
        userId,
        accountId: account.id,
        accountNumber: account.accountNumber,
        amount: newPayout.amount
      });
      
      res.status(201).json(newPayout);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error('Create payout error:', error);
      res.status(500).json({ message: "Failed to create payout request" });
    }
  });

  app.get('/api/payouts', authenticateJWT, async (req, res) => {
    try {
      const userId = (req.user as any).id;
      const payouts = await storage.getUserPayouts(userId);
      
      // Get account details for each payout
      const payoutsWithDetails = await Promise.all(payouts.map(async (payout) => {
        const account = await storage.getTradingAccount(payout.accountId);
        return {
          ...payout,
          account: account ? {
            id: account.id,
            accountNumber: account.accountNumber,
            balance: account.balance,
            phase: account.phase,
            status: account.status
          } : null
        };
      }));
      
      res.json(payoutsWithDetails);
    } catch (error) {
      console.error('Get payouts error:', error);
      res.status(500).json({ message: "Failed to fetch payouts" });
    }
  });

  app.get('/api/admin/payouts', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const pendingPayouts = await storage.getAllPendingPayouts();
      
      // Get user and account details for each payout
      const payoutsWithDetails = await Promise.all(pendingPayouts.map(async (payout) => {
        const user = await storage.getUser(payout.userId);
        const account = await storage.getTradingAccount(payout.accountId);
        return {
          ...payout,
          user: user ? {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          } : null,
          account: account ? {
            id: account.id,
            accountNumber: account.accountNumber,
            balance: account.balance,
            phase: account.phase,
            status: account.status
          } : null
        };
      }));
      
      res.json(payoutsWithDetails);
    } catch (error) {
      console.error('Get pending payouts error:', error);
      res.status(500).json({ message: "Failed to fetch pending payouts" });
    }
  });

  app.patch('/api/admin/payouts/:id', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const payoutId = parseInt(req.params.id);
      const { status, notes } = req.body;
      
      if (!status || !['processing', 'completed', 'rejected'].includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
      }
      
      const payout = await storage.getPayout(payoutId);
      if (!payout) {
        return res.status(404).json({ message: "Payout not found" });
      }
      
      const updateData: Partial<InsertPayout> = { status };
      
      if (notes) {
        updateData.notes = notes;
      }
      
      if (status === 'completed' || status === 'processing') {
        updateData.processDate = new Date();
      }
      
      const updatedPayout = await storage.updatePayout(payoutId, updateData);
      
      // Create activity log
      await storage.createActivityLog({
        userId: (req.user as any).id,
        accountId: payout.accountId,
        action: `payout_${status}`,
        details: `Payout of ${payout.amount} for account #${payout.accountId} ${status}`,
      });
      
      // Notify user via WebSocket
      broadcast({
        type: `payout_${status}`,
        payoutId: payout.id,
        userId: payout.userId,
        accountId: payout.accountId,
        amount: payout.amount,
        status
      });
      
      res.json(updatedPayout);
    } catch (error) {
      console.error('Update payout error:', error);
      res.status(500).json({ message: "Failed to update payout status" });
    }
  });

  // Activity log routes
  app.get('/api/activity-logs', authenticateJWT, async (req, res) => {
    try {
      const userId = (req.user as any).id;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      
      const { logs, count } = await storage.getUserActivityLogs(userId, page, limit);
      
      res.json({
        logs,
        pagination: {
          total: count,
          page,
          limit,
          pages: Math.ceil(count / limit)
        }
      });
    } catch (error) {
      console.error('Get activity logs error:', error);
      res.status(500).json({ message: "Failed to fetch activity logs" });
    }
  });

  app.get('/api/trading-accounts/:accountId/activity-logs', authenticateJWT, async (req, res) => {
    try {
      const accountId = parseInt(req.params.accountId);
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      
      const account = await storage.getTradingAccount(accountId);
      
      if (!account) {
        return res.status(404).json({ message: "Trading account not found" });
      }
      
      // Check if user owns this account or is an admin
      if (account.userId !== (req.user as any).id && (req.user as any).role !== 'admin') {
        return res.status(403).json({ message: "You don't have permission to access this account's logs" });
      }
      
      const { logs, count } = await storage.getAccountActivityLogs(accountId, page, limit);
      
      res.json({
        logs,
        pagination: {
          total: count,
          page,
          limit,
          pages: Math.ceil(count / limit)
        }
      });
    } catch (error) {
      console.error('Get account activity logs error:', error);
      res.status(500).json({ message: "Failed to fetch account activity logs" });
    }
  });

  app.get('/api/admin/activity-logs', authenticateJWT, authorize(['admin']), async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const logs = await storage.getRecentActivityLogs(limit);
      
      // Get user and account details for each log
      const logsWithDetails = await Promise.all(logs.map(async (log) => {
        let user = null;
        let account = null;
        
        if (log.userId) {
          user = await storage.getUser(log.userId);
        }
        
        if (log.accountId) {
          account = await storage.getTradingAccount(log.accountId);
        }
        
        return {
          ...log,
          user: user ? {
            id: user.id,
            username: user.username,
            email: user.email
          } : null,
          account: account ? {
            id: account.id,
            accountNumber: account.accountNumber
          } : null
        };
      }));
      
      res.json(logsWithDetails);
    } catch (error) {
      console.error('Get admin activity logs error:', error);
      res.status(500).json({ message: "Failed to fetch activity logs" });
    }
  });

  return httpServer;
}
