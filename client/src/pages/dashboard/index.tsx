import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowUpRight, BarChart3, ChevronRight, Clock, DollarSign, 
  LineChart, PieChart, RefreshCw, Shield, Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import PageTemplate from "@/components/page-template";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  // In a real app, this would come from an API call using useQuery
  const tradingAccounts = [
    {
      id: 1,
      accountNumber: "TR100542",
      type: "Standard Challenge",
      status: "active",
      balance: 50000,
      equity: 51240,
      profitTarget: 8,
      currentProfit: 2.48,
      maxDrawdown: 5,
      currentDrawdown: 0.82,
      daysRemaining: 22,
      phase: null,
    },
    {
      id: 2,
      accountNumber: "TR200389",
      type: "Evaluation Program",
      status: "qualified",
      balance: 100000,
      equity: 106820,
      profitTarget: 6,
      currentProfit: 6.82,
      maxDrawdown: 5,
      currentDrawdown: 1.24,
      daysRemaining: 0,
      phase: "phase1",
    },
    {
      id: 3,
      accountNumber: "TR500125",
      type: "Funded Account",
      status: "funded",
      balance: 100000,
      equity: 102450,
      profitTarget: null,
      currentProfit: 2.45,
      maxDrawdown: 5,
      currentDrawdown: 0.65,
      daysRemaining: null,
      phase: null,
    }
  ];

  // Mock recent trades for demonstration
  const recentTrades = [
    {
      id: 1,
      symbol: "EURUSD",
      type: "buy",
      openTime: "2025-05-18 10:24:15",
      closeTime: "2025-05-18 14:46:32",
      openPrice: 1.09245,
      closePrice: 1.09462,
      profit: 217,
      pips: 21.7,
      accountId: 3
    },
    {
      id: 2,
      symbol: "GBPUSD",
      type: "sell",
      openTime: "2025-05-17 09:15:30",
      closeTime: "2025-05-17 16:25:10",
      openPrice: 1.26780,
      closePrice: 1.26645,
      profit: 135,
      pips: 13.5,
      accountId: 3
    },
    {
      id: 3,
      symbol: "US30",
      type: "buy",
      openTime: "2025-05-16 14:30:22",
      closeTime: "2025-05-16 17:45:18",
      openPrice: 38450.25,
      closePrice: 38575.50,
      profit: 250.5,
      pips: 125.25,
      accountId: 3
    },
    {
      id: 4,
      symbol: "XAUUSD",
      type: "sell",
      openTime: "2025-05-15 11:10:45",
      closeTime: "2025-05-15 13:20:30",
      openPrice: 2342.65,
      closePrice: 2352.80,
      profit: -203,
      pips: -10.15,
      accountId: 3
    },
    {
      id: 5,
      symbol: "EURUSD",
      type: "sell",
      openTime: "2025-05-14 08:05:12",
      closeTime: "2025-05-14 15:40:28",
      openPrice: 1.08950,
      closePrice: 1.08785,
      profit: 165,
      pips: 16.5,
      accountId: 3
    }
  ];

  // Mock profit history for chart display
  const profitHistory = {
    days: [
      "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"
    ],
    values: [
      0, 165, -38, 212.5, 347.5, 564.5
    ]
  };

  return (
    <PageTemplate
      title="TRFX - Trader Dashboard"
      description="Manage your trading accounts, monitor performance, and track your progress towards funding."
    >
      {/* Dashboard Header */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Trader Dashboard
              </h1>
              <p className="text-muted-foreground">
                Monitor your challenges, track performance, and manage your accounts
              </p>
            </div>
            <div className="mt-4 md:mt-0 space-x-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Data
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <DollarSign className="mr-2 h-4 w-4" />
                Request Payout
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Dashboard Content */}
      <section className="py-8">
        <div className="container px-4">
          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
            <div className="border-b mb-6">
              <TabsList className="w-full sm:w-auto justify-start">
                <TabsTrigger value="overview" className="flex-1 sm:flex-none">Overview</TabsTrigger>
                <TabsTrigger value="accounts" className="flex-1 sm:flex-none">Trading Accounts</TabsTrigger>
                <TabsTrigger value="performance" className="flex-1 sm:flex-none">Performance</TabsTrigger>
                <TabsTrigger value="payouts" className="flex-1 sm:flex-none">Payouts</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Account Summary */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-primary" />
                        Active Challenges
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-1">2</div>
                      <p className="text-sm text-muted-foreground">1 Standard Challenge, 1 Evaluation</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/dashboard/accounts">
                          View Accounts
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        Funded Accounts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-1">1</div>
                      <p className="text-sm text-muted-foreground">$100,000 funded account</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/dashboard/accounts">
                          Manage Account
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-primary" />
                        Available Profits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-1">$1,245.60</div>
                      <p className="text-sm text-muted-foreground">Next payout: May 31, 2025</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/dashboard/payouts">
                          Request Payout
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              
              {/* Active Challenges Progress */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Challenge Progress</h2>
                <div className="space-y-6">
                  {tradingAccounts.filter(account => account.status !== 'funded').map(account => (
                    <Card key={account.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{account.accountNumber}: {account.type}</CardTitle>
                          <Badge className={
                            account.status === 'active' ? "bg-emerald-500" : 
                            account.status === 'qualified' ? "bg-amber-500" : 
                            "bg-rose-500"
                          }>
                            {account.status === 'active' ? "Active" : 
                             account.status === 'qualified' ? "Qualified" : 
                             "Breached"}
                          </Badge>
                        </div>
                        <CardDescription>
                          ${account.balance.toLocaleString()} {account.phase && `| Phase ${account.phase === 'phase1' ? '1' : '2'}`}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Profit Target: {account.currentProfit}% / {account.profitTarget}%</span>
                              <span className="font-medium">{Math.round((account.currentProfit / account.profitTarget) * 100)}%</span>
                            </div>
                            <Progress value={(account.currentProfit / account.profitTarget) * 100} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Maximum Drawdown: {account.currentDrawdown}% / {account.maxDrawdown}%</span>
                              <span className="font-medium">{Math.round((account.currentDrawdown / account.maxDrawdown) * 100)}%</span>
                            </div>
                            <Progress value={(account.currentDrawdown / account.maxDrawdown) * 100} className="h-2 bg-muted" 
                              indicatorClassName="bg-rose-500" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="w-full flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {account.daysRemaining > 0 ? `${account.daysRemaining} days remaining` : "Ready for next phase"}
                          </span>
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/dashboard/accounts/${account.id}`}>
                              View Details
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Recent Activity */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Recent Trades</h2>
                <Card>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-3 text-muted-foreground font-medium">Symbol</th>
                          <th className="text-left p-3 text-muted-foreground font-medium">Type</th>
                          <th className="text-left p-3 text-muted-foreground font-medium">Open/Close</th>
                          <th className="text-right p-3 text-muted-foreground font-medium">P/L</th>
                          <th className="text-right p-3 text-muted-foreground font-medium">Pips</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentTrades.map(trade => (
                          <tr key={trade.id} className="border-b border-border">
                            <td className="p-3 font-medium">{trade.symbol}</td>
                            <td className="p-3">
                              <Badge variant={trade.type === 'buy' ? 'outline' : 'secondary'}>
                                {trade.type.toUpperCase()}
                              </Badge>
                            </td>
                            <td className="p-3 text-sm">
                              <div>{new Date(trade.openTime).toLocaleString([], { hour: '2-digit', minute: '2-digit' })}</div>
                              <div className="text-muted-foreground">{new Date(trade.closeTime).toLocaleString([], { hour: '2-digit', minute: '2-digit' })}</div>
                            </td>
                            <td className={`p-3 text-right font-medium ${trade.profit >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                              ${Math.abs(trade.profit).toFixed(2)}
                            </td>
                            <td className={`p-3 text-right font-medium ${trade.pips >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                              {trade.pips >= 0 ? '+' : ''}{trade.pips.toFixed(1)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-3 text-center border-t border-border">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard/performance">
                        View All Trades
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            {/* Trading Accounts Tab */}
            <TabsContent value="accounts" className="space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Your Trading Accounts</h2>
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Link href="/challenges">
                    Start New Challenge
                  </Link>
                </Button>
              </div>
              
              <div className="space-y-6">
                {tradingAccounts.map(account => (
                  <Card key={account.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{account.accountNumber}</CardTitle>
                        <Badge className={
                          account.status === 'active' ? "bg-emerald-500" : 
                          account.status === 'qualified' ? "bg-amber-500" :
                          account.status === 'funded' ? "bg-blue-500" : 
                          "bg-rose-500"
                        }>
                          {account.status === 'active' ? "Active" : 
                           account.status === 'qualified' ? "Qualified" :
                           account.status === 'funded' ? "Funded" : 
                           "Breached"}
                        </Badge>
                      </div>
                      <CardDescription>
                        {account.type} {account.phase && `| Phase ${account.phase === 'phase1' ? '1' : '2'}`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Balance</p>
                          <p className="font-medium">${account.balance.toLocaleString()}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Equity</p>
                          <p className="font-medium">${account.equity.toLocaleString()}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Profit</p>
                          <p className={`font-medium ${account.currentProfit >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {account.currentProfit >= 0 ? '+' : ''}{account.currentProfit}%
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Drawdown</p>
                          <p className="font-medium text-rose-500">{account.currentDrawdown}%</p>
                        </div>
                      </div>
                      
                      {account.status !== 'funded' && account.profitTarget && (
                        <div className="mt-4 space-y-3">
                          <div>
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Profit Target Progress</span>
                              <span>{account.currentProfit}% / {account.profitTarget}%</span>
                            </div>
                            <Progress value={(account.currentProfit / account.profitTarget) * 100} className="h-2" />
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t border-border pt-3 flex justify-between">
                      <div className="text-sm text-muted-foreground">
                        {account.daysRemaining ? `${account.daysRemaining} days remaining` : 
                         account.status === 'funded' ? "Payout every 2 weeks" : "Ready for next phase"}
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dashboard/accounts/${account.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button size="sm" variant="default" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            Login to MT4
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Performance Analytics</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Daily</Button>
                  <Button variant="outline" size="sm">Weekly</Button>
                  <Button variant="secondary" size="sm">Monthly</Button>
                  <Button variant="outline" size="sm">All Time</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <LineChart className="h-5 w-5 mr-2 text-primary" />
                      Profit/Loss Chart
                    </CardTitle>
                    <CardDescription>
                      Your cumulative P/L for the past week
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-72 w-full bg-muted/30 rounded-md flex items-center justify-center">
                      {/* In a real app, this would be a chart component */}
                      <div className="text-center text-muted-foreground">
                        <LineChart className="h-10 w-10 mx-auto mb-2 opacity-50" />
                        <p>P/L Chart Data Visualization</p>
                        <p className="text-sm">Last 7 days: +$564.50</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <PieChart className="h-5 w-5 mr-2 text-primary" />
                      Trade Analysis
                    </CardTitle>
                    <CardDescription>
                      Win/loss ratio and trade distribution
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="h-36 mx-auto mb-2 flex items-center justify-center">
                          {/* In a real app, this would be a chart component */}
                          <div className="w-36 h-36 rounded-full border-8 border-primary/30 flex items-center justify-center relative">
                            <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-8 border-l-8 border-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
                            <div className="text-2xl font-bold">75%</div>
                          </div>
                        </div>
                        <div className="font-medium">Win Rate</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xl font-bold text-emerald-500">24</div>
                          <div className="text-sm text-muted-foreground">Winning Trades</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-rose-500">8</div>
                          <div className="text-sm text-muted-foreground">Losing Trades</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold">$32.50</div>
                          <div className="text-sm text-muted-foreground">Avg. Win</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold">$18.75</div>
                          <div className="text-sm text-muted-foreground">Avg. Loss</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Trading Statistics
                  </CardTitle>
                  <CardDescription>
                    Detailed metrics about your trading performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Total Trades</div>
                      <div className="text-2xl font-bold">32</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Profit Factor</div>
                      <div className="text-2xl font-bold">1.73</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Average RRR</div>
                      <div className="text-2xl font-bold">1.8:1</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Max Drawdown</div>
                      <div className="text-2xl font-bold">2.45%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Avg. Holding Time</div>
                      <div className="text-2xl font-bold">3h 42m</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Best Trade</div>
                      <div className="text-2xl font-bold text-emerald-500">+$250.50</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Worst Trade</div>
                      <div className="text-2xl font-bold text-rose-500">-$203.00</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Net Profit</div>
                      <div className="text-2xl font-bold text-emerald-500">+$564.50</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Trades</CardTitle>
                </CardHeader>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-muted-foreground font-medium">Date</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Symbol</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Type</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Entry</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Exit</th>
                        <th className="text-right p-3 text-muted-foreground font-medium">Pips</th>
                        <th className="text-right p-3 text-muted-foreground font-medium">P/L</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTrades.map(trade => (
                        <tr key={trade.id} className="border-b border-border">
                          <td className="p-3 text-sm">
                            {new Date(trade.openTime).toLocaleDateString()}
                          </td>
                          <td className="p-3 font-medium">{trade.symbol}</td>
                          <td className="p-3">
                            <Badge variant={trade.type === 'buy' ? 'outline' : 'secondary'}>
                              {trade.type.toUpperCase()}
                            </Badge>
                          </td>
                          <td className="p-3">{trade.openPrice}</td>
                          <td className="p-3">{trade.closePrice}</td>
                          <td className={`p-3 text-right font-medium ${trade.pips >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {trade.pips >= 0 ? '+' : ''}{trade.pips.toFixed(1)}
                          </td>
                          <td className={`p-3 text-right font-medium ${trade.profit >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 flex justify-center border-t border-border">
                  <Button variant="outline" size="sm">
                    Load More Trades
                  </Button>
                </div>
              </Card>
            </TabsContent>
            
            {/* Payouts Tab */}
            <TabsContent value="payouts" className="space-y-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">Payout Management</h2>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  Request Payout
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Available Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">$1,245.60</div>
                    <p className="text-sm text-muted-foreground">From funded account earnings</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Next Payout Period</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">May 31, 2025</div>
                    <p className="text-sm text-muted-foreground">End of month payout schedule</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Total Withdrawn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">$3,850.25</div>
                    <p className="text-sm text-muted-foreground">Since account funding</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payout Settings</CardTitle>
                  <CardDescription>
                    Manage your payout preferences and payment methods
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="font-medium">Preferred Payment Method</h3>
                      <Button variant="outline" className="w-full justify-start">
                        <Wallet className="mr-2 h-4 w-4" />
                        <span>Bank Transfer (Default)</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                        <DollarSign className="mr-2 h-4 w-4" />
                        <span>PayPal</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.64 14.9l-1.17-3.88c.03-.23.05-.46.05-.7v-.09c0-3.36-2.72-6.07-6.08-6.07-1.45 0-2.77.51-3.81 1.35C11.58 4.02 10.28 3.2 8.8 3.2c-2.78 0-5.03 2.24-5.03 5.01 0 .38.07.76.16 1.12-.2-.02-.41-.03-.62-.03C1.48 9.3 0 10.78 0 12.6c0 1.84 1.48 3.32 3.31 3.32h.62c.36 1.17 1.46 2.03 2.77 2.03.58 0 1.09-.19 1.55-.46 1.08 1.12 2.59 1.83 4.28 1.83 1.96 0 3.69-.96 4.76-2.41.84.75 1.97 1.22 3.18 1.22 2.65 0 4.79-2.14 4.79-4.79 0-.77-.21-1.52-.56-2.18l-1.06 3.74z" fill="currentColor"/>
                        </svg>
                        <span>Bitcoin</span>
                      </Button>
                      <div className="py-2">
                        <Button variant="link" size="sm" className="px-0">
                          + Add Payment Method
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-medium">Payout Schedule</h3>
                      <div className="space-x-2">
                        <Button variant="secondary" size="sm">Bi-weekly</Button>
                        <Button variant="outline" size="sm">Monthly</Button>
                      </div>
                      
                      <div className="pt-4">
                        <h3 className="font-medium">Minimum Payout Amount</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Payouts will be processed when your balance exceeds this amount
                        </p>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">$50</Button>
                          <Button variant="secondary" size="sm">$100</Button>
                          <Button variant="outline" size="sm">$250</Button>
                          <Button variant="outline" size="sm">$500</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payout History</CardTitle>
                </CardHeader>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-muted-foreground font-medium">Date</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Transaction ID</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Method</th>
                        <th className="text-left p-3 text-muted-foreground font-medium">Status</th>
                        <th className="text-right p-3 text-muted-foreground font-medium">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3">May 1, 2025</td>
                        <td className="p-3 font-mono text-sm">TRX-48291-ADFN</td>
                        <td className="p-3">Bank Transfer</td>
                        <td className="p-3">
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                            Completed
                          </Badge>
                        </td>
                        <td className="p-3 text-right font-medium">$1,250.00</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Apr 15, 2025</td>
                        <td className="p-3 font-mono text-sm">TRX-39185-BSEO</td>
                        <td className="p-3">Bank Transfer</td>
                        <td className="p-3">
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                            Completed
                          </Badge>
                        </td>
                        <td className="p-3 text-right font-medium">$950.00</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Apr 1, 2025</td>
                        <td className="p-3 font-mono text-sm">TRX-28753-CXNV</td>
                        <td className="p-3">PayPal</td>
                        <td className="p-3">
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                            Completed
                          </Badge>
                        </td>
                        <td className="p-3 text-right font-medium">$875.00</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Mar 15, 2025</td>
                        <td className="p-3 font-mono text-sm">TRX-19365-DEFG</td>
                        <td className="p-3">Bitcoin</td>
                        <td className="p-3">
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                            Completed
                          </Badge>
                        </td>
                        <td className="p-3 text-right font-medium">$775.25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-3 flex justify-center border-t border-border">
                  <Button variant="outline" size="sm">
                    View All Transactions
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageTemplate>
  );
}