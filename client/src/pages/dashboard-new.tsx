import { useState } from "react";
import { LineChart, BarChart, PieChart, Activity, ArrowUpRight, ArrowDownRight, DollarSign, Users, Calendar, BarChart2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample data for charts and metrics
  const accountMetrics = [
    {
      name: "Account Balance",
      value: "$54,892.00",
      change: "+8.2%",
      status: "positive"
    },
    {
      name: "Profit/Loss",
      value: "$3,241.50",
      change: "+12.5%",
      status: "positive"
    },
    {
      name: "Drawdown",
      value: "4.3%",
      change: "-0.7%",
      status: "positive"
    },
    {
      name: "Win Rate",
      value: "76%",
      change: "+2.1%",
      status: "positive"
    }
  ];
  
  const recentTrades = [
    {
      id: 1,
      symbol: "EUR/USD",
      type: "buy",
      entryPrice: 1.08642,
      exitPrice: 1.09128,
      profit: "+$243.20",
      status: "positive",
      time: "Today, 10:45 AM"
    },
    {
      id: 2,
      symbol: "GOLD",
      type: "sell",
      entryPrice: 2304.75,
      exitPrice: 2289.50,
      profit: "+$327.80",
      status: "positive",
      time: "Today, 9:12 AM"
    },
    {
      id: 3,
      symbol: "NAS100",
      type: "buy",
      entryPrice: 17245.75,
      exitPrice: 17189.25,
      profit: "-$168.40",
      status: "negative",
      time: "Yesterday, 3:45 PM"
    },
    {
      id: 4,
      symbol: "GBP/JPY",
      type: "sell",
      entryPrice: 186.425,
      exitPrice: 185.870,
      profit: "+$178.60",
      status: "positive",
      time: "Yesterday, 2:30 PM"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
            <Button variant="ghost" size="sm">
              Support
            </Button>
            <Button variant="outline" size="sm">
              Log Out
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container py-6 flex flex-1">
        <div className="grid grid-cols-12 gap-6 w-full">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3 xl:col-span-2">
            <Card className="sticky top-20">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div 
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      activeTab === "overview" 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted cursor-pointer"
                    )}
                    onClick={() => setActiveTab("overview")}
                  >
                    <BarChart2 className="h-4 w-4" />
                    <span>Overview</span>
                  </div>
                  
                  <div 
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      activeTab === "trades" 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted cursor-pointer"
                    )}
                    onClick={() => setActiveTab("trades")}
                  >
                    <Activity className="h-4 w-4" />
                    <span>Trades</span>
                  </div>
                  
                  <div 
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      activeTab === "accounts" 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted cursor-pointer"
                    )}
                    onClick={() => setActiveTab("accounts")}
                  >
                    <DollarSign className="h-4 w-4" />
                    <span>Accounts</span>
                  </div>
                  
                  <div 
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      activeTab === "challenges" 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted cursor-pointer"
                    )}
                    onClick={() => setActiveTab("challenges")}
                  >
                    <Users className="h-4 w-4" />
                    <span>Challenges</span>
                  </div>
                  
                  <div 
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      activeTab === "payouts" 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted cursor-pointer"
                    )}
                    onClick={() => setActiveTab("payouts")}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Payouts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="col-span-12 lg:col-span-9 xl:col-span-10 space-y-6">
            {/* Page title */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">Trader Dashboard</h1>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm">Refresh Data</Button>
                <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  New Challenge
                </Button>
              </div>
            </div>
            
            {/* Metrics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {accountMetrics.map((metric, index) => (
                <Card key={index} className="border-border/40 hover:border-border/80 transition-colors duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium text-muted-foreground">{metric.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className={cn(
                      "text-sm flex items-center mt-1",
                      metric.status === "positive" ? "text-green-500" : "text-red-500"
                    )}>
                      {metric.status === "positive" ? 
                        <ArrowUpRight className="h-4 w-4 mr-1" /> : 
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      }
                      {metric.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Charts and trade history */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <Card className="col-span-1 lg:col-span-8 border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Performance Overview</CardTitle>
                  <CardDescription>Your trading performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <p className="text-muted-foreground">Charts will appear here with real data</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 lg:col-span-4 border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Trades</CardTitle>
                  <CardDescription>Your last 4 trades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTrades.map((trade) => (
                      <div key={trade.id} className="flex justify-between items-center border-b pb-2 border-border/40 last:border-0 last:pb-0">
                        <div>
                          <div className="font-medium flex items-center">
                            {trade.symbol}
                            <span className={cn(
                              "ml-2 text-xs px-1.5 py-0.5 rounded-full",
                              trade.type === "buy" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                            )}>
                              {trade.type.toUpperCase()}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">{trade.time}</div>
                        </div>
                        <div className={cn(
                          "font-medium",
                          trade.status === "positive" ? "text-green-500" : "text-red-500"
                        )}>
                          {trade.profit}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-1">
                  <Button variant="ghost" size="sm" className="ml-auto">
                    View All Trades
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Active accounts section */}
            <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Your Trading Accounts</CardTitle>
                <CardDescription>Active and completed challenge accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Account</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Size</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Balance</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Profit/Loss</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">A1283946</div>
                          <div className="text-xs text-muted-foreground">Started: May 10, 2025</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500">Phase 1</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">$100,000</td>
                        <td className="px-6 py-4 whitespace-nowrap">$103,241.50</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-500">+3.24%</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">Active</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">A1275831</div>
                          <div className="text-xs text-muted-foreground">Started: Apr 22, 2025</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-500">Phase 2</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">$50,000</td>
                        <td className="px-6 py-4 whitespace-nowrap">$52,892.75</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-500">+5.79%</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">Active</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">A1254789</div>
                          <div className="text-xs text-muted-foreground">Started: Mar 15, 2025</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500">Funded</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">$25,000</td>
                        <td className="px-6 py-4 whitespace-nowrap">$27,142.30</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-500">+8.57%</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">Active</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <footer className="bg-muted/30 backdrop-blur-sm border-t border-border mt-auto py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TradeFunded. All rights reserved.
        </div>
      </footer>
    </div>
  );
}