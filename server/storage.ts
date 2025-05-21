import { 
  users, type User, type InsertUser,
  challengePlans, type ChallengePlan, type InsertChallengePlan,
  tradingAccounts, type TradingAccount, type InsertTradingAccount,
  trades, type Trade, type InsertTrade,
  payments, type Payment, type InsertPayment,
  payouts, type Payout, type InsertPayout,
  activityLogs, type ActivityLog, type InsertActivityLog
} from "@shared/schema";
import { db } from "./db";
import { eq, and, gte, desc, like, sql, lt, lte, not, or, between, isNull, isNotNull, asc } from "drizzle-orm";
import { hash, compare } from "bcrypt";

export interface IStorage {

  getUser(id: string): Promise<User | undefined>;
  upsertUser(userData: { id: string, email: string | null, firstName: string | null, lastName: string | null, profileImageUrl: string | null }): Promise<User>;
  
  // Additional user operations
  getUserByEmail(email: string): Promise<User | undefined>;
  updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User | undefined>;
  getAllUsers(page: number, limit: number): Promise<{users: User[], count: number}>;
  
  // Challenge plan operations
  createChallengePlan(plan: InsertChallengePlan): Promise<ChallengePlan>;
  getChallengePlan(id: string): Promise<ChallengePlan | undefined>;
  updateChallengePlan(id: string, data: Partial<InsertChallengePlan>): Promise<ChallengePlan | undefined>;
  getAllChallengePlans(): Promise<ChallengePlan[]>;
  getActiveChallengePlans(): Promise<ChallengePlan[]>;
  
  // Trading account operations
  createTradingAccount(account: InsertTradingAccount): Promise<TradingAccount>;
  getTradingAccount(id: string): Promise<TradingAccount | undefined>;
  getTradingAccountByNumber(accountNumber: string): Promise<TradingAccount | undefined>;
  getUserTradingAccounts(userId: string): Promise<TradingAccount[]>;
  updateTradingAccount(id: string, data: Partial<InsertTradingAccount>): Promise<TradingAccount | undefined>;
  getAllTradingAccounts(page: number, limit: number): Promise<{accounts: TradingAccount[], count: number}>;
  
  // Trade operations
  createTrade(trade: InsertTrade): Promise<Trade>;
  getTrade(id: string): Promise<Trade | undefined>;
  getAccountTrades(accountId: string, page: number, limit: number): Promise<{trades: Trade[], count: number}>;
  updateTrade(id: string, data: Partial<InsertTrade>): Promise<Trade | undefined>;
  
  // Payment operations
  createPayment(payment: InsertPayment): Promise<Payment>;
  getPayment(id: string): Promise<Payment | undefined>;
  getUserPayments(userId: string): Promise<Payment[]>;
  updatePayment(id: string, data: Partial<InsertPayment>): Promise<Payment | undefined>;
  
  // Payout operations
  createPayout(payout: InsertPayout): Promise<Payout>;
  getPayout(id: string): Promise<Payout | undefined>;
  getUserPayouts(userId: string): Promise<Payout[]>;
  updatePayout(id: string, data: Partial<InsertPayout>): Promise<Payout | undefined>;
  getAllPendingPayouts(): Promise<Payout[]>;
  
  // Activity log operations
  createActivityLog(log: InsertActivityLog): Promise<ActivityLog>;
  getUserActivityLogs(userId: string, page: number, limit: number): Promise<{logs: ActivityLog[], count: number}>;
  getAccountActivityLogs(accountId: string, page: number, limit: number): Promise<{logs: ActivityLog[], count: number}>;
  getRecentActivityLogs(limit: number): Promise<ActivityLog[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  
  async upsertUser(userData: { id: string, email: string | null, firstName: string | null, lastName: string | null, profileImageUrl: string | null }): Promise<User> {
    const { id, email, firstName, lastName, profileImageUrl } = userData;
    
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.id, id));
      
    if (existingUser) {
      // Update existing user
      const [updatedUser] = await db
        .update(users)
        .set({
          email: email || existingUser.email,
          firstName: firstName || existingUser.firstName,
          lastName: lastName || existingUser.lastName,
          profileImageUrl: profileImageUrl || existingUser.profileImageUrl,
          updatedAt: new Date()
        })
        .where(eq(users.id, id))
        .returning();
        
      return updatedUser;
    } else {
      // Create new user
      const [newUser] = await db
        .insert(users)
        .values({
          id,
          email: email || null,
          firstName: firstName || null,
          lastName: lastName || null,
          profileImageUrl: profileImageUrl || null,
          role: 'trader',
          status: 'active'
        })
        .returning();
        
      return newUser;
    }
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(userData: InsertUser): Promise<User> {
    const hashedPassword = await hash(userData.password, 10);
    const [user] = await db
      .insert(users)
      .values({
        ...userData,
        password: hashedPassword,
      })
      .returning();
    return user;
  }

  async updateUser(id: number, data: Partial<InsertUser>): Promise<User | undefined> {
    if (data.password) {
      data.password = await hash(data.password, 10);
    }
    
    const [updatedUser] = await db
      .update(users)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(users.id, id))
      .returning();
    
    return updatedUser;
  }

  async getAllUsers(page: number, limit: number): Promise<{users: User[], count: number}> {
    const offset = (page - 1) * limit;
    const usersList = await db.select().from(users).limit(limit).offset(offset);
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(users);
    
    return { users: usersList, count };
  }

  // Challenge plan operations
  async createChallengePlan(plan: InsertChallengePlan): Promise<ChallengePlan> {
    const [newPlan] = await db
      .insert(challengePlans)
      .values(plan)
      .returning();
    
    return newPlan;
  }

  async getChallengePlan(id: number): Promise<ChallengePlan | undefined> {
    const [plan] = await db
      .select()
      .from(challengePlans)
      .where(eq(challengePlans.id, id));
    
    return plan;
  }

  async updateChallengePlan(id: number, data: Partial<InsertChallengePlan>): Promise<ChallengePlan | undefined> {
    const [updatedPlan] = await db
      .update(challengePlans)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(challengePlans.id, id))
      .returning();
    
    return updatedPlan;
  }

  async getAllChallengePlans(): Promise<ChallengePlan[]> {
    return db.select().from(challengePlans);
  }

  async getActiveChallengePlans(): Promise<ChallengePlan[]> {
    return db
      .select()
      .from(challengePlans)
      .where(eq(challengePlans.isActive, true));
  }

  // Trading account operations
  async createTradingAccount(account: InsertTradingAccount): Promise<TradingAccount> {
    const [newAccount] = await db
      .insert(tradingAccounts)
      .values(account)
      .returning();
    
    return newAccount;
  }

  async getTradingAccount(id: number): Promise<TradingAccount | undefined> {
    const [account] = await db
      .select()
      .from(tradingAccounts)
      .where(eq(tradingAccounts.id, id));
    
    return account;
  }

  async getTradingAccountByNumber(accountNumber: string): Promise<TradingAccount | undefined> {
    const [account] = await db
      .select()
      .from(tradingAccounts)
      .where(eq(tradingAccounts.accountNumber, accountNumber));
    
    return account;
  }

  async getUserTradingAccounts(userId: number): Promise<TradingAccount[]> {
    return db
      .select()
      .from(tradingAccounts)
      .where(eq(tradingAccounts.userId, userId));
  }

  async updateTradingAccount(id: number, data: Partial<InsertTradingAccount>): Promise<TradingAccount | undefined> {
    const [updatedAccount] = await db
      .update(tradingAccounts)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(tradingAccounts.id, id))
      .returning();
    
    return updatedAccount;
  }

  async getAllTradingAccounts(page: number, limit: number): Promise<{accounts: TradingAccount[], count: number}> {
    const offset = (page - 1) * limit;
    const accountsList = await db
      .select()
      .from(tradingAccounts)
      .limit(limit)
      .offset(offset);
    
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(tradingAccounts);
    
    return { accounts: accountsList, count };
  }

  // Trade operations
  async createTrade(trade: InsertTrade): Promise<Trade> {
    const [newTrade] = await db
      .insert(trades)
      .values(trade)
      .returning();
    
    return newTrade;
  }

  async getTrade(id: number): Promise<Trade | undefined> {
    const [trade] = await db
      .select()
      .from(trades)
      .where(eq(trades.id, id));
    
    return trade;
  }

  async getAccountTrades(accountId: number, page: number, limit: number): Promise<{trades: Trade[], count: number}> {
    const offset = (page - 1) * limit;
    const tradesList = await db
      .select()
      .from(trades)
      .where(eq(trades.accountId, accountId))
      .orderBy(desc(trades.openTime))
      .limit(limit)
      .offset(offset);
    
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(trades)
      .where(eq(trades.accountId, accountId));
    
    return { trades: tradesList, count };
  }

  async updateTrade(id: number, data: Partial<InsertTrade>): Promise<Trade | undefined> {
    const [updatedTrade] = await db
      .update(trades)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(trades.id, id))
      .returning();
    
    return updatedTrade;
  }

  // Payment operations
  async createPayment(payment: InsertPayment): Promise<Payment> {
    const [newPayment] = await db
      .insert(payments)
      .values(payment)
      .returning();
    
    return newPayment;
  }

  async getPayment(id: number): Promise<Payment | undefined> {
    const [payment] = await db
      .select()
      .from(payments)
      .where(eq(payments.id, id));
    
    return payment;
  }

  async getUserPayments(userId: number): Promise<Payment[]> {
    return db
      .select()
      .from(payments)
      .where(eq(payments.userId, userId))
      .orderBy(desc(payments.createdAt));
  }

  async updatePayment(id: number, data: Partial<InsertPayment>): Promise<Payment | undefined> {
    const [updatedPayment] = await db
      .update(payments)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(payments.id, id))
      .returning();
    
    return updatedPayment;
  }

  // Payout operations
  async createPayout(payout: InsertPayout): Promise<Payout> {
    const [newPayout] = await db
      .insert(payouts)
      .values(payout)
      .returning();
    
    return newPayout;
  }

  async getPayout(id: number): Promise<Payout | undefined> {
    const [payout] = await db
      .select()
      .from(payouts)
      .where(eq(payouts.id, id));
    
    return payout;
  }

  async getUserPayouts(userId: number): Promise<Payout[]> {
    return db
      .select()
      .from(payouts)
      .where(eq(payouts.userId, userId))
      .orderBy(desc(payouts.requestDate));
  }

  async updatePayout(id: number, data: Partial<InsertPayout>): Promise<Payout | undefined> {
    const [updatedPayout] = await db
      .update(payouts)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(payouts.id, id))
      .returning();
    
    return updatedPayout;
  }

  async getAllPendingPayouts(): Promise<Payout[]> {
    return db
      .select()
      .from(payouts)
      .where(eq(payouts.status, 'pending'))
      .orderBy(asc(payouts.requestDate));
  }

  // Activity log operations
  async createActivityLog(log: InsertActivityLog): Promise<ActivityLog> {
    const [newLog] = await db
      .insert(activityLogs)
      .values(log)
      .returning();
    
    return newLog;
  }

  async getUserActivityLogs(userId: number, page: number, limit: number): Promise<{logs: ActivityLog[], count: number}> {
    const offset = (page - 1) * limit;
    const logsList = await db
      .select()
      .from(activityLogs)
      .where(eq(activityLogs.userId, userId))
      .orderBy(desc(activityLogs.createdAt))
      .limit(limit)
      .offset(offset);
    
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(activityLogs)
      .where(eq(activityLogs.userId, userId));
    
    return { logs: logsList, count };
  }

  async getAccountActivityLogs(accountId: number, page: number, limit: number): Promise<{logs: ActivityLog[], count: number}> {
    const offset = (page - 1) * limit;
    const logsList = await db
      .select()
      .from(activityLogs)
      .where(eq(activityLogs.accountId, accountId))
      .orderBy(desc(activityLogs.createdAt))
      .limit(limit)
      .offset(offset);
    
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(activityLogs)
      .where(eq(activityLogs.accountId, accountId));
    
    return { logs: logsList, count };
  }

  async getRecentActivityLogs(limit: number): Promise<ActivityLog[]> {
    return db
      .select()
      .from(activityLogs)
      .orderBy(desc(activityLogs.createdAt))
      .limit(limit);
  }
}

export const storage = new DatabaseStorage();
