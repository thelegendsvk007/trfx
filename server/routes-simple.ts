import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
// Import commented out for now to simplify demo
// import { setupAuth, isAuthenticated } from "./replitAuth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware commented out for demo
  // await setupAuth(app);

  // Simplified auth route for demo
  app.get('/api/auth/user', async (req: any, res) => {
    try {
      // Return mock user for demo
      res.json({
        id: 1,
        email: "demo@trfx.com",
        username: "demouser",
        firstName: "Demo",
        lastName: "User",
        role: "trader",
        status: "active"
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Public routes - simplified for demo
  app.get('/api/challenge-plans', async (req, res) => {
    try {
      const plans = [
        {
          id: "1",
          name: "Standard Challenge",
          price: "99.99",
          accountSize: "25000",
          description: "Our entry-level funded account challenge.",
          details: {
            maxDrawdown: "10%",
            profitTarget: "8%",
            minTradingDays: 5,
            maxTradingDays: 30
          }
        },
        {
          id: "2",
          name: "Professional Challenge",
          price: "199.99",
          accountSize: "50000",
          description: "Mid-tier challenge with higher account size.",
          details: {
            maxDrawdown: "10%",
            profitTarget: "8%", 
            minTradingDays: 5,
            maxTradingDays: 30
          }
        },
        {
          id: "3",
          name: "Expert Challenge",
          price: "299.99",
          accountSize: "100000",
          description: "Advanced challenge for experienced traders.",
          details: {
            maxDrawdown: "10%",
            profitTarget: "8%",
            minTradingDays: 5,
            maxTradingDays: 30
          }
        },
        {
          id: "4",
          name: "Elite Challenge",
          price: "599.99",
          accountSize: "200000",
          description: "Our highest tier with maximum potential.",
          details: {
            maxDrawdown: "10%",
            profitTarget: "8%",
            minTradingDays: 5,
            maxTradingDays: 30
          }
        }
      ];
      
      res.json(plans);
    } catch (error) {
      console.error("Error fetching challenge plans:", error);
      res.status(500).json({ message: "Failed to fetch challenge plans" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}