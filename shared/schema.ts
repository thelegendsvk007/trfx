import { pgTable, text, serial, integer, boolean, timestamp, decimal, pgEnum, unique, foreignKey } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User roles enum
export const roleEnum = pgEnum('role', ['admin', 'trader']);

// User status enum
export const userStatusEnum = pgEnum('user_status', ['active', 'inactive', 'suspended']);

// Account status enum
export const accountStatusEnum = pgEnum('account_status', ['active', 'breached', 'qualified', 'completed', 'expired']);

// Challenge phase enum
export const challengePhaseEnum = pgEnum('challenge_phase', ['phase1', 'phase2', 'funded']);

// Challenge type enum
export const challengeTypeEnum = pgEnum('challenge_type', ['standard', 'aggressive', 'evaluation']);

// Payment status enum
export const paymentStatusEnum = pgEnum('payment_status', ['pending', 'completed', 'failed', 'refunded']);

// Payout status enum
export const payoutStatusEnum = pgEnum('payout_status', ['pending', 'processing', 'completed', 'rejected']);

// Trade type enum
export const tradeTypeEnum = pgEnum('trade_type', ['buy', 'sell']);

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  role: roleEnum("role").notNull().default('trader'),
  status: userStatusEnum("status").notNull().default('active'),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Challenge plan table
export const challengePlans = pgTable("challenge_plans", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: challengeTypeEnum("type").notNull().default('standard'),
  accountSize: decimal("account_size", { precision: 10, scale: 2 }).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  profitTarget1: decimal("profit_target_1", { precision: 5, scale: 2 }).notNull(), // e.g., 8.00 for 8%
  profitTarget2: decimal("profit_target_2", { precision: 5, scale: 2 }),
  maxDailyDrawdown: decimal("max_daily_drawdown", { precision: 5, scale: 2 }).notNull(),
  maxTotalDrawdown: decimal("max_total_drawdown", { precision: 5, scale: 2 }).notNull(),
  phase1Duration: integer("phase1_duration").notNull(), // in days
  phase2Duration: integer("phase2_duration"),
  minTradingDays: integer("min_trading_days").notNull(),
  maxRiskPerTrade: decimal("max_risk_per_trade", { precision: 5, scale: 2 }).notNull(),
  profitSplit: decimal("profit_split", { precision: 5, scale: 2 }).notNull(), // e.g., 80.00 for 80%
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Trading accounts table
export const tradingAccounts = pgTable("trading_accounts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  planId: integer("plan_id").notNull().references(() => challengePlans.id),
  accountNumber: text("account_number").notNull().unique(),
  balance: decimal("balance", { precision: 15, scale: 2 }).notNull(),
  startingBalance: decimal("starting_balance", { precision: 15, scale: 2 }).notNull(),
  phase: challengePhaseEnum("phase").notNull().default('phase1'),
  status: accountStatusEnum("status").notNull().default('active'),
  currentDrawdown: decimal("current_drawdown", { precision: 5, scale: 2 }).notNull().default('0'),
  maxDrawdownReached: decimal("max_drawdown_reached", { precision: 5, scale: 2 }).notNull().default('0'),
  profitReached: decimal("profit_reached", { precision: 5, scale: 2 }).notNull().default('0'),
  startDate: timestamp("start_date").notNull().defaultNow(),
  endDate: timestamp("end_date"), // null until completed or expired
  tradingDaysCompleted: integer("trading_days_completed").notNull().default(0),
  breachReason: text("breach_reason"),
  server: text("server").notNull(),
  leverage: text("leverage").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Trades table
export const trades = pgTable("trades", {
  id: serial("id").primaryKey(),
  accountId: integer("account_id").notNull().references(() => tradingAccounts.id),
  symbol: text("symbol").notNull(),
  type: tradeTypeEnum("type").notNull(),
  entryPrice: decimal("entry_price", { precision: 15, scale: 5 }).notNull(),
  exitPrice: decimal("exit_price", { precision: 15, scale: 5 }),
  lots: decimal("lots", { precision: 10, scale: 2 }).notNull(),
  profit: decimal("profit", { precision: 15, scale: 2 }),
  openTime: timestamp("open_time").notNull(),
  closeTime: timestamp("close_time"),
  status: text("status").notNull().default('open'),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Payments table
export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  planId: integer("plan_id").notNull().references(() => challengePlans.id),
  accountId: integer("account_id").references(() => tradingAccounts.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: text("payment_method").notNull(),
  status: paymentStatusEnum("status").notNull().default('pending'),
  transactionId: text("transaction_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Payouts table
export const payouts = pgTable("payouts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  accountId: integer("account_id").notNull().references(() => tradingAccounts.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: text("payment_method").notNull(),
  status: payoutStatusEnum("status").notNull().default('pending'),
  requestDate: timestamp("request_date").notNull().defaultNow(),
  processDate: timestamp("process_date"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Activity logs table
export const activityLogs = pgTable("activity_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  accountId: integer("account_id").references(() => tradingAccounts.id),
  action: text("action").notNull(),
  details: text("details"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertChallengePlanSchema = createInsertSchema(challengePlans).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertTradingAccountSchema = createInsertSchema(tradingAccounts).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertTradeSchema = createInsertSchema(trades).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertPaymentSchema = createInsertSchema(payments).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertPayoutSchema = createInsertSchema(payouts).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const insertActivityLogSchema = createInsertSchema(activityLogs).omit({
  id: true,
  createdAt: true
});

// Create types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type ChallengePlan = typeof challengePlans.$inferSelect;
export type InsertChallengePlan = z.infer<typeof insertChallengePlanSchema>;

export type TradingAccount = typeof tradingAccounts.$inferSelect;
export type InsertTradingAccount = z.infer<typeof insertTradingAccountSchema>;

export type Trade = typeof trades.$inferSelect;
export type InsertTrade = z.infer<typeof insertTradeSchema>;

export type Payment = typeof payments.$inferSelect;
export type InsertPayment = z.infer<typeof insertPaymentSchema>;

export type Payout = typeof payouts.$inferSelect;
export type InsertPayout = z.infer<typeof insertPayoutSchema>;

export type ActivityLog = typeof activityLogs.$inferSelect;
export type InsertActivityLog = z.infer<typeof insertActivityLogSchema>;
