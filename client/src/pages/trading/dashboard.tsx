import React, { useState } from "react";
import { Link } from "wouter";
import PageTemplate from "@/components/page-template";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  Activity, 
  ArrowRight, 
  ArrowUpRight, 
  ArrowDownRight, 
  BarChart3, 
  Bell, 
  BookOpen,
  Calculator,
  Calendar, 
  ChevronRight, 
  CreditCard, 
  Lightbulb,
  LineChart as LineChartIcon,
  MonitorSmartphone,
  PieChart as PieChartIcon,
  Settings,
  TrendingDown,
  TrendingUp
} from "lucide-react";

// Import our trading components
import MarketDataFeed from "@/components/trading/market-data-feed";
import RiskCalculator from "@/components/trading/risk-calculator";
import EconomicCalendar from "@/components/trading/economic-calendar";
import TradingJournal from "@/components/trading/trading-journal";

// Mock data for account performance chart
const performanceData = [
  { day: 'Mon', balance: 10000 },
  { day: 'Tue', balance: 10250 },
  { day: 'Wed', balance: 10180 },
  { day: 'Thu', balance: 10350 },
  { day: 'Fri', balance: 10500 },
  { day: 'Mon', balance: 10450 },
  { day: 'Tue', balance: 10600 },
  { day: 'Wed', balance: 10720 },
  { day: 'Thu', balance: 10680 },
  { day: 'Fri', balance: 10800 },
  { day: 'Mon', balance: 10950 },
  { day: 'Tue', balance: 11100 },
  { day: 'Wed', balance: 11050 },
  { day: 'Thu', balance: 11200 },
  { day: 'Fri', balance: 11350 },
];

// Mock data for trading stats
const statsData = {
  totalProfit: 1350,
  winRate: 68,
  bestTrade: 420,
  worstTrade: -180,
  tradesThisMonth: 24,
  averageTradeSize: 0.35
};

// Mock data for recent notifications
const recentNotifications = [
  {
    id: 1,
    type: 'news',
    title: 'Fed Interest Rate Decision',
    message: 'Fed raises interest rates by 25 basis points.',
    time: '1 hour ago'
  },
  {
    id: 2,
    type: 'signal',
    title: 'EUR/USD Buy Signal',
    message: 'Price broke above key resistance level at 1.0950.',
    time: '3 hours ago'
  },
  {
    id: 3,
    type: 'account',
    title: 'Deposit Confirmed',
    message: 'Your deposit of $500 has been processed successfully.',
    time: '1 day ago'
  },
  {
    id: 4,
    type: 'economic',
    title: 'US GDP Data Due',
    message: 'US GDP data release scheduled for tomorrow at 8:30 AM EST.',
    time: '1 day ago'
  }
];

// Mock data for performance by symbol
const symbolPerformance = [
  { name: 'EUR/USD', value: 520, color: '#4ade80' },
  { name: 'GBP/USD', value: 280, color: '#60a5fa' },
  { name: 'USD/JPY', value: -120, color: '#f87171' },
  { name: 'XAU/USD', value: 540, color: '#facc15' },
  { name: 'Others', value: 130, color: '#8b5cf6' }
];

// Mock trading accounts data
const tradingAccounts = [
  {
    id: 'acc-1',
    name: 'Standard Challenge',
    accountNumber: 'TR202536489',
    balance: 25000,
    equity: 25350.20,
    openTrades: 2,
    profit: 350.20,
    status: 'active',
    progress: 58
  },
  {
    id: 'acc-2',
    name: 'Aggressive Challenge',
    accountNumber: 'TR201578942',
    balance: 50000,
    equity: 51280.45,
    openTrades: 3,
    profit: 1280.45,
    status: 'active',
    progress: 32
  }
];

export default function TradingDashboardPage() {
  const [dashboardTab, setDashboardTab] = useState("overview");
  
  return (
    <PageTemplate
      title="TRFX - Trading Dashboard"
      description="Monitor your trading performance, market data, and account information in one place."
    >
      <div className="container py-6">
        {/* Dashboard Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Trading Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your trading accounts, performance, and market data
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
              <Badge className="ml-2 bg-primary text-primary-foreground" variant="secondary">3</Badge>
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Dashboard Tabs */}
        <Tabs value={dashboardTab} onValueChange={setDashboardTab} className="space-y-6">
          <div className="border-b">
            <TabsList className="bg-transparent border-b-0 mb-[-1px]">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="marketData" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Market Data
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger 
                value="calendar" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Economic Calendar
              </TabsTrigger>
              <TabsTrigger 
                value="tools" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Trading Tools
              </TabsTrigger>
              <TabsTrigger 
                value="journal" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Journal
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Trading Accounts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tradingAccounts.map(account => (
                <Card key={account.id} className="relative overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{account.name}</CardTitle>
                        <CardDescription>{account.accountNumber}</CardDescription>
                      </div>
                      <Badge className="capitalize" variant={account.status === 'active' ? 'default' : 'outline'}>
                        {account.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Balance</p>
                        <p className="text-2xl font-bold">${account.balance.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Equity</p>
                        <p className="text-2xl font-bold">${account.equity.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Open Trades</p>
                        <p className="text-xl font-semibold">{account.openTrades}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Profit/Loss</p>
                        <p className={`text-xl font-semibold ${account.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {account.profit >= 0 ? '+' : ''}{account.profit.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Challenge Progress</span>
                        <span>{account.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: `${account.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="ghost" size="sm">Trade</Button>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Performance and Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Performance Chart */}
              <Card className="md:col-span-2">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Performance</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">1W</Button>
                      <Button variant="ghost" size="sm" className="text-primary">2W</Button>
                      <Button variant="ghost" size="sm">1M</Button>
                      <Button variant="ghost" size="sm">3M</Button>
                    </div>
                  </div>
                  <CardDescription>Account balance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={performanceData}>
                        <defs>
                          <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="day" stroke="#6B7280" />
                        <YAxis 
                          stroke="#6B7280"
                          tickFormatter={(value) => `$${value}`}
                          domain={['dataMin - 500', 'dataMax + 500']}
                        />
                        <Tooltip 
                          formatter={(value) => [`$${value}`, "Balance"]}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="balance" 
                          stroke="#8884d8" 
                          fillOpacity={1} 
                          fill="url(#colorBalance)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Trading Stats */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 h-5 w-5" />
                    Trading Stats
                  </CardTitle>
                  <CardDescription>Your trading performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Total Profit</div>
                    <div className="text-lg font-bold text-green-500">+${statsData.totalProfit}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                    <div className="text-lg font-bold">{statsData.winRate}%</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Best Trade</div>
                    <div className="text-lg font-bold text-green-500">+${statsData.bestTrade}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Worst Trade</div>
                    <div className="text-lg font-bold text-red-500">${statsData.worstTrade}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Trades This Month</div>
                    <div className="text-lg font-bold">{statsData.tradesThisMonth}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Avg. Size</div>
                    <div className="text-lg font-bold">{statsData.averageTradeSize} lots</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Market Data and Notifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MarketDataFeed className="md:col-span-2" showChart={true} />
              
              {/* Notifications */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    Notifications
                  </CardTitle>
                  <CardDescription>Recent alerts and updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentNotifications.map(notification => (
                    <div key={notification.id} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className={
                          notification.type === 'news' ? 'bg-blue-500' :
                          notification.type === 'signal' ? 'bg-green-500' :
                          notification.type === 'account' ? 'bg-purple-500' :
                          'bg-amber-500'
                        }>
                          {notification.type === 'news' && 'N'}
                          {notification.type === 'signal' && 'S'}
                          {notification.type === 'account' && 'A'}
                          {notification.type === 'economic' && 'E'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">{notification.title}</h4>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Notifications
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Market Data Tab */}
          <TabsContent value="marketData" className="space-y-6">
            <MarketDataFeed className="w-full" showChart={true} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trading Signals</CardTitle>
                  <CardDescription>Recent market signals based on technical analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-green-500">Buy</Badge>
                        <div>
                          <h4 className="font-medium">EUR/USD</h4>
                          <p className="text-sm text-muted-foreground">RSI Divergence</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">1.0945</div>
                        <div className="text-sm text-muted-foreground">10 mins ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-green-500">Buy</Badge>
                        <div>
                          <h4 className="font-medium">XAU/USD</h4>
                          <p className="text-sm text-muted-foreground">Support Bounce</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">2374.80</div>
                        <div className="text-sm text-muted-foreground">35 mins ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-red-500">Sell</Badge>
                        <div>
                          <h4 className="font-medium">USD/JPY</h4>
                          <p className="text-sm text-muted-foreground">Resistance Hit</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">156.75</div>
                        <div className="text-sm text-muted-foreground">1 hour ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-red-500">Sell</Badge>
                        <div>
                          <h4 className="font-medium">GBP/USD</h4>
                          <p className="text-sm text-muted-foreground">Double Top</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">1.2650</div>
                        <div className="text-sm text-muted-foreground">3 hours ago</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Signals
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Market News</CardTitle>
                  <CardDescription>Latest financial news that may impact the markets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Fed Raises Interest Rates by 25bps</h4>
                        <Badge>High Impact</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        The Federal Reserve raised its benchmark interest rate by 25 basis points, 
                        as widely expected, bringing the target range to 5.25%-5.50%.
                      </p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 hour ago</span>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Read More
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">ECB Signals Potential Rate Hike in July</h4>
                        <Badge>Medium Impact</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        European Central Bank officials hinted at the possibility of another interest rate 
                        increase in July as inflation remains above target levels.
                      </p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>3 hours ago</span>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Read More
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Oil Prices Rise on Supply Concerns</h4>
                        <Badge>Low Impact</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Crude oil prices climbed more than 2% today amid growing concerns about 
                        potential supply disruptions in the Middle East.
                      </p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>5 hours ago</span>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View All News
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChartIcon className="mr-2 h-5 w-5" />
                    Performance by Symbol
                  </CardTitle>
                  <CardDescription>Your profit/loss across different currency pairs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={symbolPerformance}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {symbolPerformance.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`$${Math.abs(value)}`, "P&L"]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Win/Loss Analysis
                  </CardTitle>
                  <CardDescription>Your winning and losing trades by day of week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { day: 'Mon', wins: 3, losses: 1 },
                          { day: 'Tue', wins: 5, losses: 2 },
                          { day: 'Wed', wins: 2, losses: 3 },
                          { day: 'Thu', wins: 4, losses: 1 },
                          { day: 'Fri', wins: 6, losses: 2 }
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="day" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" />
                        <Tooltip />
                        <Bar dataKey="wins" name="Winning Trades" fill="#4ade80" />
                        <Bar dataKey="losses" name="Losing Trades" fill="#f87171" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChartIcon className="mr-2 h-5 w-5" />
                    Trading Performance History
                  </CardTitle>
                  <CardDescription>Your cumulative profit/loss over the past 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={[...Array(30)].map((_, i) => ({
                          day: i + 1,
                          profit: Math.floor(1000 * Math.sin(i / 5) + i * 50 + Math.random() * 200)
                        }))}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="day" stroke="#6B7280" label={{ value: 'Day', position: 'insideBottom', offset: -5 }} />
                        <YAxis 
                          stroke="#6B7280" 
                          label={{ value: 'Profit/Loss ($)', angle: -90, position: 'insideLeft' }}
                          tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip formatter={(value) => [`$${value}`, "P&L"]} />
                        <Line 
                          type="monotone" 
                          dataKey="profit" 
                          stroke="#60a5fa" 
                          strokeWidth={2}
                          dot={{ r: 3 }} 
                          activeDot={{ r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Economic Calendar Tab */}
          <TabsContent value="calendar">
            <EconomicCalendar />
          </TabsContent>
          
          {/* Trading Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RiskCalculator />
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Trading Ideas
                  </CardTitle>
                  <CardDescription>Custom trading setups and ideas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                          <h4 className="font-medium">EUR/USD Breakout Strategy</h4>
                        </div>
                        <Badge>Buy Setup</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Look for breakout above 1.0950 resistance with increased volume.
                        Set take profit at 1.1000 and stop loss at 1.0925.
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Added today</span>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          View Details
                        </Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <TrendingDown className="h-5 w-5 text-red-500 mr-2" />
                          <h4 className="font-medium">GBP/USD Bearish Pattern</h4>
                        </div>
                        <Badge variant="destructive">Sell Setup</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Double top formation near 1.2675 resistance.
                        Look for confirmation with break below 1.2630 neckline.
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Added yesterday</span>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          View Details
                        </Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                          <h4 className="font-medium">Gold Support Zone</h4>
                        </div>
                        <Badge>Buy Setup</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Looking for long entries near the $2350-2360 support zone.
                        Watch for bullish candlestick patterns on the 4-hour chart.
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Added 2 days ago</span>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Trading Ideas
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Educational Resources
                  </CardTitle>
                  <CardDescription>Learn trading strategies and improve your skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-lg border overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <MonitorSmartphone className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium mb-1">Mastering Risk Management</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Learn how to protect your capital and manage risk effectively.
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <MonitorSmartphone className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium mb-1">Technical Analysis Fundamentals</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Understanding chart patterns and indicators for better trades.
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <MonitorSmartphone className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium mb-1">Trading Psychology Secrets</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Master the mental aspects of trading for consistent results.
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    Browse Educational Library
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Journal Tab */}
          <TabsContent value="journal">
            <TradingJournal />
          </TabsContent>
        </Tabs>
      </div>
    </PageTemplate>
  );
}