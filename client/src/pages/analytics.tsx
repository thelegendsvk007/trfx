import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { useAuth } from "@/hooks/use-auth";
import { useTradingAccounts } from "@/hooks/use-trading-accounts";
import { formatCurrency, getProfitColor } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

// Mock data for the performance chart
const generatePerformanceData = (days: number, startBalance: number, volatility: number = 0.005) => {
  const data = [];
  let balance = startBalance;
  const now = new Date().getTime();
  
  for (let i = days; i >= 0; i--) {
    const time = now - (i * 24 * 60 * 60 * 1000);
    const change = 1 + (Math.random() * volatility * 2 - volatility);
    balance = balance * change;
    data.push({ time, value: balance });
  }
  
  return data;
};

// Generate daily profit/loss data
const generateDailyPnlData = (days: number) => {
  const data = [];
  const now = new Date();
  
  for (let i = days; i > 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    const pnl = Math.random() * 1000 * (Math.random() > 0.3 ? 1 : -1);
    data.push({
      date: date.toISOString().split('T')[0],
      pnl: pnl
    });
  }
  
  return data;
};

// Generate trade metrics by symbol data
const generateTradesBySymbolData = () => [
  { symbol: "EURUSD", trades: 15, winRate: 73, totalProfit: 1250 },
  { symbol: "GBPUSD", trades: 12, winRate: 58, totalProfit: 720 },
  { symbol: "USDJPY", trades: 9, winRate: 44, totalProfit: -350 },
  { symbol: "XAUUSD", trades: 7, winRate: 85, totalProfit: 2100 },
  { symbol: "US30", trades: 5, winRate: 60, totalProfit: 450 }
];

// Generate trade time distribution data
const generateTradeTimeData = () => {
  const data = [];
  for (let hour = 0; hour < 24; hour++) {
    data.push({
      hour: `${hour}:00`,
      trades: Math.floor(Math.random() * 10) + (hour >= 8 && hour <= 16 ? 5 : 0)
    });
  }
  return data;
};

// Generate trade outcome by day data
const generateTradeOutcomesByDay = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return days.map(day => ({
    day,
    wins: Math.floor(Math.random() * 15) + 5,
    losses: Math.floor(Math.random() * 10) + 1
  }));
};

export default function AnalyticsPage() {
  const { user } = useAuth();
  const { accounts, isLoading: isLoadingAccounts } = useTradingAccounts();
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState("1M");
  
  // Set the first account as selected when accounts are loaded
  useEffect(() => {
    if (accounts && accounts.length > 0 && !selectedAccountId) {
      setSelectedAccountId(accounts[0].id.toString());
    }
  }, [accounts, selectedAccountId]);
  
  // Get the selected account
  const selectedAccount = accounts?.find(acc => acc.id.toString() === selectedAccountId);
  
  // Fetch trades for the selected account
  const { data: tradesData, isLoading: isLoadingTrades } = useQuery({
    queryKey: [selectedAccountId ? `/api/trading-accounts/${selectedAccountId}/trades` : null, { limit: 100 }],
    enabled: !!selectedAccountId,
  });
  
  const isLoading = isLoadingAccounts || isLoadingTrades;
  
  // Generate performance data based on the selected account
  const performanceData = selectedAccount 
    ? generatePerformanceData(30, parseFloat(selectedAccount.startingBalance.toString()))
    : [];
  
  // Generate additional analytics data
  const dailyPnlData = generateDailyPnlData(14);
  const tradesBySymbolData = generateTradesBySymbolData();
  const tradeTimeData = generateTradeTimeData();
  const tradeOutcomesByDayData = generateTradeOutcomesByDay();
  
  // Calculate trade statistics
  const calculateTradeStats = () => {
    if (!tradesData?.trades || tradesData.trades.length === 0) {
      return {
        totalTrades: 0,
        winRate: 0,
        profitFactor: 0,
        averageWin: 0,
        averageLoss: 0,
        largestWin: 0,
        largestLoss: 0,
      };
    }
    
    const trades = tradesData.trades;
    const totalTrades = trades.length;
    const winningTrades = trades.filter(t => Number(t.profit) > 0);
    const losingTrades = trades.filter(t => Number(t.profit) < 0);
    
    const winRate = (winningTrades.length / totalTrades) * 100;
    
    const totalProfit = winningTrades.reduce((sum, t) => sum + Number(t.profit), 0);
    const totalLoss = Math.abs(losingTrades.reduce((sum, t) => sum + Number(t.profit), 0));
    
    const profitFactor = totalLoss === 0 ? totalProfit : totalProfit / totalLoss;
    
    const averageWin = winningTrades.length ? totalProfit / winningTrades.length : 0;
    const averageLoss = losingTrades.length ? totalLoss / losingTrades.length : 0;
    
    const profits = trades.map(t => Number(t.profit));
    const largestWin = Math.max(0, ...profits);
    const largestLoss = Math.abs(Math.min(0, ...profits));
    
    return {
      totalTrades,
      winRate,
      profitFactor,
      averageWin,
      averageLoss,
      largestWin,
      largestLoss,
    };
  };
  
  const tradeStats = calculateTradeStats();
  
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6', '#64748B'];
  
  if (isLoadingAccounts) {
    return (
      <DashboardLayout user={user || undefined}>
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-12 w-12 animate-spin text-primary-500" />
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout user={user || undefined}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trading Analytics</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Detailed statistics and insights about your trading performance
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Select 
            value={selectedAccountId || ''}
            onValueChange={(value) => setSelectedAccountId(value)}
          >
            <SelectTrigger className="w-full sm:w-[240px]">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              {accounts?.map(account => (
                <SelectItem key={account.id} value={account.id.toString()}>
                  Account #{account.accountNumber}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
        </div>
      ) : selectedAccount ? (
        <>
          {/* Trade Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Trades
                </div>
                <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {tradeStats.totalTrades}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Win Rate
                </div>
                <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {tradeStats.winRate.toFixed(1)}%
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Profit Factor
                </div>
                <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {tradeStats.profitFactor.toFixed(2)}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Average Win/Loss
                </div>
                <div className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(tradeStats.averageWin)}/{formatCurrency(tradeStats.averageLoss)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Tabs */}
          <Tabs defaultValue="performance" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="dailyPnL">Daily P&L</TabsTrigger>
              <TabsTrigger value="symbols">Trade by Symbol</TabsTrigger>
              <TabsTrigger value="timing">Time Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Account Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <PerformanceChart data={performanceData} title="" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="dailyPnL">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Profit and Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dailyPnlData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value: number) => formatCurrency(value)}
                          labelFormatter={(label) => `Date: ${label}`}
                        />
                        <Legend />
                        <Bar dataKey="pnl" name="Profit/Loss">
                          {dailyPnlData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.pnl >= 0 ? '#10B981' : '#EF4444'} 
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="symbols">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trades by Symbol</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={tradesBySymbolData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="trades"
                          >
                            {tradesBySymbolData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value: number) => value}
                            labelFormatter={(label) => `Symbol: ${label}`}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Profit by Symbol</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={tradesBySymbolData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="symbol" />
                          <YAxis />
                          <Tooltip 
                            formatter={(value: number) => formatCurrency(value)}
                            labelFormatter={(label) => `Symbol: ${label}`}
                          />
                          <Legend />
                          <Bar 
                            dataKey="totalProfit" 
                            name="Profit/Loss" 
                            fill="#3B82F6"
                          >
                            {tradesBySymbolData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={entry.totalProfit >= 0 ? '#10B981' : '#EF4444'} 
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="timing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trade Distribution by Hour</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={tradeTimeData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="hour" />
                          <YAxis />
                          <Tooltip />
                          <Area 
                            type="monotone" 
                            dataKey="trades" 
                            name="Number of Trades" 
                            stroke="#3B82F6" 
                            fill="#3B82F680" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Wins and Losses by Day</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={tradeOutcomesByDayData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="day" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="wins" name="Winning Trades" fill="#10B981" />
                          <Bar dataKey="losses" name="Losing Trades" fill="#EF4444" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Trade Metrics Table */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Trading Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Win Rate</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{tradeStats.winRate.toFixed(1)}%</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Profit Factor</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{tradeStats.profitFactor.toFixed(2)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Average Win</h3>
                  <p className="mt-1 text-2xl font-bold text-green-500">{formatCurrency(tradeStats.averageWin)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Average Loss</h3>
                  <p className="mt-1 text-2xl font-bold text-red-500">{formatCurrency(tradeStats.averageLoss)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Largest Win</h3>
                  <p className="mt-1 text-2xl font-bold text-green-500">{formatCurrency(tradeStats.largestWin)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Largest Loss</h3>
                  <p className="mt-1 text-2xl font-bold text-red-500">{formatCurrency(tradeStats.largestLoss)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Trades</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{tradeStats.totalTrades}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Risk-Reward Ratio</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    {tradeStats.averageLoss > 0 ? (tradeStats.averageWin / tradeStats.averageLoss).toFixed(2) : "N/A"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No trading accounts found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            You need to purchase a challenge to view analytics
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}
