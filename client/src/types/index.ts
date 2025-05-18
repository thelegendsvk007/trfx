// Common types used across the application

export interface User {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  role: 'admin' | 'trader';
  status: 'active' | 'inactive' | 'suspended';
  profileImage?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ChallengePlan {
  id: number;
  name: string;
  type: 'standard' | 'aggressive' | 'evaluation';
  accountSize: string | number;
  price: string | number;
  profitTarget1: string | number;
  profitTarget2?: string | number;
  maxDailyDrawdown: string | number;
  maxTotalDrawdown: string | number;
  phase1Duration: number;
  phase2Duration?: number;
  minTradingDays: number;
  maxRiskPerTrade: string | number;
  profitSplit: string | number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TradingAccount {
  id: number;
  userId: number;
  planId: number;
  accountNumber: string;
  balance: string | number;
  startingBalance: string | number;
  phase: 'phase1' | 'phase2' | 'funded';
  status: 'active' | 'breached' | 'qualified' | 'completed' | 'expired';
  currentDrawdown: string | number;
  maxDrawdownReached: string | number;
  profitReached: string | number;
  startDate: string;
  endDate?: string;
  tradingDaysCompleted: number;
  breachReason?: string;
  server: string;
  leverage: string;
  createdAt?: string;
  updatedAt?: string;
  plan?: ChallengePlan | null;
}

export interface Trade {
  id: number;
  accountId: number;
  symbol: string;
  type: 'buy' | 'sell';
  entryPrice: string | number;
  exitPrice?: string | number;
  lots: string | number;
  profit?: string | number;
  openTime: string;
  closeTime?: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Payment {
  id: number;
  userId: number;
  planId: number;
  accountId?: number;
  amount: string | number;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  createdAt?: string;
  updatedAt?: string;
  plan?: ChallengePlan | null;
  account?: TradingAccount | null;
}

export interface Payout {
  id: number;
  userId: number;
  accountId: number;
  amount: string | number;
  paymentMethod: string;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  requestDate: string;
  processDate?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
  account?: TradingAccount | null;
}

export interface ActivityLog {
  id: number;
  userId?: number;
  accountId?: number;
  action: string;
  details?: string;
  createdAt: string;
  user?: Partial<User> | null;
  account?: Partial<TradingAccount> | null;
}

export interface TraderStats {
  totalTrades: number;
  winRate: number;
  averageWin: number;
  averageLoss: number;
  profitFactor: number;
  largestWin: number;
  largestLoss: number;
  averageHoldingTime: string;
  totalProfit: number;
}

export interface ChartDataPoint {
  time: number;
  value: number;
}
