import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
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