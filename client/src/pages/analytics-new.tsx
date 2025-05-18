import { useState } from "react";
import { 
  Activity, 
  ArrowDownRight, 
  ArrowUpRight, 
  Calendar, 
  ChevronDown, 
  Clock, 
  Layers, 
  LineChart, 
  BarChart as BarChartIcon, 
  PieChart as PieChartIcon
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function AnalyticsPage() {
  const [accountFilter, setAccountFilter] = useState("all");
  const [timeframeFilter, setTimeframeFilter] = useState("30d");
  
  // Sample account data
  const accounts = [
    { id: "a1", name: "A1283946 - $100,000 Phase 1" },
    { id: "a2", name: "A1275831 - $50,000 Phase 2" },
    { id: "a3", name: "A1254789 - $25,000 Funded" },
  ];
  
  // Sample performance metrics
  const performanceMetrics = {
    totalProfit: "$4,827.45",
    totalProfitPercentage: "+8.2%",
    winRate: "71.3%",
    profitFactor: "2.3",
    averageWin: "$342.50",
    averageLoss: "$168.24",
    largestWin: "$978.25",
    largestLoss: "$421.80",
    maxDrawdown: "4.3%",
    sharpeRatio: "1.8",
    tradingDays: 14,
    totalTrades: 52,
    longTrades: 28,
    shortTrades: 24,
    profitableTrades: 37,
    losingTrades: 15
  };
  
  // Sample trading pairs data for pie chart
  const tradingPairs = [
    { name: "EUR/USD", value: 32, color: "hsl(210, 100%, 50%)" },
    { name: "GBP/USD", value: 18, color: "hsl(260, 100%, 50%)" },
    { name: "USD/JPY", value: 15, color: "hsl(310, 100%, 50%)" },
    { name: "GBP/JPY", value: 12, color: "hsl(10, 100%, 50%)" },
    { name: "EUR/GBP", value: 10, color: "hsl(160, 100%, 50%)" },
    { name: "Others", value: 13, color: "hsl(60, 5%, 70%)" }
  ];
  
  // Sample trading session data
  const tradingSessions = [
    { name: "London", trades: 23, profitPercentage: 58, color: "hsl(210, 100%, 50%)" },
    { name: "New York", trades: 18, profitPercentage: 42, color: "hsl(260, 100%, 50%)" },
    { name: "Tokyo", trades: 7, profitPercentage: -15, color: "hsl(10, 100%, 50%)" },
    { name: "Sydney", trades: 4, profitPercentage: 15, color: "hsl(160, 100%, 50%)" }
  ];
  
  // Sample trade durations
  const tradeDurations = [
    { name: "< 1 hour", trades: 12, profit: 820.50 },
    { name: "1-4 hours", trades: 18, profit: 1240.25 },
    { name: "4-8 hours", trades: 8, profit: 650.80 },
    { name: "8-24 hours", trades: 10, profit: 1580.30 },
    { name: "1-3 days", trades: 4, profit: 535.60 }
  ];
  
  // Sample profit by day of week
  const profitByDayOfWeek = [
    { name: "Monday", trades: 8, profit: 740.20 },
    { name: "Tuesday", trades: 12, profit: 950.50 },
    { name: "Wednesday", trades: 10, profit: 1240.30 },
    { name: "Thursday", trades: 11, profit: 850.75 },
    { name: "Friday", trades: 11, profit: 1045.70 }
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
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Activity className="h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Layers className="h-4 w-4" />
                    <span>Trading Accounts</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <LineChart className="h-4 w-4" />
                    <span>Trade History</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm bg-primary/10 text-primary">
                    <BarChartIcon className="h-4 w-4" />
                    <span>Analytics</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Calendar className="h-4 w-4" />
                    <span>Payouts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="col-span-12 lg:col-span-9 xl:col-span-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">Trading Analytics</h1>
              <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
                <Select value={accountFilter} onValueChange={setAccountFilter}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Select Account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Accounts</SelectItem>
                    {accounts.map(account => (
                      <SelectItem key={account.id} value={account.id}>{account.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={timeframeFilter} onValueChange={setTimeframeFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select Timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                    <SelectItem value="90d">Last 90 Days</SelectItem>
                    <SelectItem value="ytd">Year to Date</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Performance Metrics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Total Profit/Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-500">{performanceMetrics.totalProfit}</div>
                      <div className="flex items-center text-sm mt-1">
                        <ArrowUpRight className="h-4 w-4 mr-1 text-green-500" />
                        <span className="text-green-500">{performanceMetrics.totalProfitPercentage}</span>
                      </div>
                    </div>
                    <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                      <LineChart className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Win Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold">{performanceMetrics.winRate}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {performanceMetrics.profitableTrades}/{performanceMetrics.totalTrades} trades
                      </div>
                    </div>
                    <div className="h-16 w-16 rounded-md overflow-hidden">
                      <div className="h-full w-full bg-muted relative">
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-green-500" 
                          style={{ height: `${parseFloat(performanceMetrics.winRate)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Profit Factor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold">{performanceMetrics.profitFactor}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Gross profit / gross loss
                      </div>
                    </div>
                    <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                      <div className="text-lg font-bold text-primary">×{performanceMetrics.profitFactor}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Max Drawdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold">{performanceMetrics.maxDrawdown}</div>
                      <div className="flex items-center text-sm mt-1">
                        <ArrowDownRight className="h-4 w-4 mr-1 text-amber-500" />
                        <span className="text-amber-500">Peak to trough decline</span>
                      </div>
                    </div>
                    <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                      <LineChart className="h-8 w-8 text-amber-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Chart Sections */}
            <Tabs defaultValue="performance" className="w-full">
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="instruments">Instruments</TabsTrigger>
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                <TabsTrigger value="durations">Trade Duration</TabsTrigger>
                <TabsTrigger value="patterns">Patterns</TabsTrigger>
              </TabsList>
              
              {/* Performance Tab */}
              <TabsContent value="performance" className="space-y-6">
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>Cumulative Performance</CardTitle>
                    <CardDescription>Your account growth over the selected period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 w-full bg-muted rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Performance chart will render here with real data</p>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle>Trade Distribution</CardTitle>
                      <CardDescription>Win/loss ratio and trade types</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Winning Trades</span>
                            <span className="font-medium">{performanceMetrics.profitableTrades}</span>
                          </div>
                          <Progress value={Math.round(performanceMetrics.profitableTrades / performanceMetrics.totalTrades * 100)} className="h-2 bg-muted" indicatorClassName="bg-green-500" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Losing Trades</span>
                            <span className="font-medium">{performanceMetrics.losingTrades}</span>
                          </div>
                          <Progress value={Math.round(performanceMetrics.losingTrades / performanceMetrics.totalTrades * 100)} className="h-2 bg-muted" indicatorClassName="bg-red-500" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Long Trades</span>
                            <span className="font-medium">{performanceMetrics.longTrades}</span>
                          </div>
                          <Progress value={Math.round(performanceMetrics.longTrades / performanceMetrics.totalTrades * 100)} className="h-2 bg-muted" indicatorClassName="bg-blue-500" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Short Trades</span>
                            <span className="font-medium">{performanceMetrics.shortTrades}</span>
                          </div>
                          <Progress value={Math.round(performanceMetrics.shortTrades / performanceMetrics.totalTrades * 100)} className="h-2 bg-muted" indicatorClassName="bg-purple-500" />
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-sm font-medium mb-2">Trade Metrics</h4>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Average Win</span>
                            <span className="font-medium text-green-500">{performanceMetrics.averageWin}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Average Loss</span>
                            <span className="font-medium text-red-500">{performanceMetrics.averageLoss}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Largest Win</span>
                            <span className="font-medium text-green-500">{performanceMetrics.largestWin}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Largest Loss</span>
                            <span className="font-medium text-red-500">{performanceMetrics.largestLoss}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Trades</span>
                            <span className="font-medium">{performanceMetrics.totalTrades}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Trading Days</span>
                            <span className="font-medium">{performanceMetrics.tradingDays}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle>Daily Profit/Loss</CardTitle>
                      <CardDescription>Your profit/loss for each trading day</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 w-full bg-muted rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">Daily P/L chart will render here with real data</p>
                      </div>
                      
                      <div className="mt-6 space-y-4">
                        <h4 className="text-sm font-medium">Profit by Day of Week</h4>
                        <div className="space-y-3">
                          {profitByDayOfWeek.map((day) => (
                            <div key={day.name} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">{day.name}</span>
                                <span className="font-medium text-green-500">${day.profit.toFixed(2)}</span>
                              </div>
                              <Progress 
                                value={Math.round((day.profit / 1240.30) * 100)} 
                                className="h-2 bg-muted" 
                                indicatorClassName="bg-gradient-to-r from-primary to-secondary" 
                              />
                              <div className="text-xs text-muted-foreground">
                                {day.trades} trades
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Instruments Tab */}
              <TabsContent value="instruments" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle>Trading Pairs Distribution</CardTitle>
                      <CardDescription>Breakdown of instruments traded</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center mb-6">
                        <div className="h-64 w-64 relative rounded-full overflow-hidden bg-muted flex items-center justify-center">
                          <PieChartIcon className="h-8 w-8 text-muted-foreground/50" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-lg font-medium">{performanceMetrics.totalTrades}</div>
                            <div className="text-xs ml-1">trades</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {tradingPairs.map((pair) => (
                          <div key={pair.name} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div 
                                className="h-3 w-3 rounded-full mr-2" 
                                style={{ backgroundColor: pair.color }}
                              ></div>
                              <span className="text-sm">{pair.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-muted-foreground">{pair.value} trades</span>
                              <span className="text-sm font-medium">{Math.round(pair.value / performanceMetrics.totalTrades * 100)}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border/40">
                    <CardHeader>
                      <CardTitle>Performance by Instrument</CardTitle>
                      <CardDescription>Win rate and profit by trading pair</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 w-full bg-muted rounded-md mb-6 flex items-center justify-center">
                        <p className="text-muted-foreground">Instrument performance chart will render here with real data</p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Top Performing Pairs</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                              <span className="text-sm">EUR/USD</span>
                            </div>
                            <div className="text-sm text-green-500">+$1,842.30</div>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                              <span className="text-sm">GBP/USD</span>
                            </div>
                            <div className="text-sm text-green-500">+$1,245.80</div>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                              <span className="text-sm">USD/JPY</span>
                            </div>
                            <div className="text-sm text-green-500">+$978.45</div>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                              <span className="text-sm">GBP/JPY</span>
                            </div>
                            <div className="text-sm text-red-500">-$350.30</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Sessions Tab */}
              <TabsContent value="sessions" className="space-y-6">
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>Trading Sessions Performance</CardTitle>
                    <CardDescription>Performance analysis by market session</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-64 w-full bg-muted rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">Sessions profit chart will render here with real data</p>
                      </div>
                      
                      <div className="space-y-6">
                        <h4 className="text-sm font-medium">Performance by Session</h4>
                        <div className="space-y-4">
                          {tradingSessions.map((session) => (
                            <div key={session.name} className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>{session.name} Session</span>
                                <span className={session.profitPercentage >= 0 ? "text-green-500" : "text-red-500"}>
                                  {session.profitPercentage >= 0 ? "+" : ""}{session.profitPercentage}%
                                </span>
                              </div>
                              <Progress 
                                value={Math.abs(session.profitPercentage)} 
                                max={100}
                                className="h-2 bg-muted" 
                                indicatorClassName={
                                  session.profitPercentage >= 0 
                                    ? "bg-green-500" 
                                    : "bg-red-500"
                                } 
                              />
                              <div className="text-xs text-muted-foreground">
                                {session.trades} trades
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-sm font-medium mb-4">Session Trading Tips</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <h5 className="font-medium text-sm">Best Trading Hours</h5>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Your most profitable trading occurs during London/New York session overlap (8:00 - 12:00 EST). Consider focusing your activity during these hours.
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <ArrowUpRight className="h-4 w-4 text-green-500" />
                            <h5 className="font-medium text-sm">Volatility Management</h5>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Your Tokyo session trades show higher loss rates. Consider reducing position sizes during Asian sessions or trading different instruments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Trade Duration Tab */}
              <TabsContent value="durations" className="space-y-6">
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>Trade Duration Analysis</CardTitle>
                    <CardDescription>Performance by how long you hold trades</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-64 w-full bg-muted rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">Duration profit chart will render here with real data</p>
                      </div>
                      
                      <div className="space-y-6">
                        <h4 className="text-sm font-medium">Performance by Duration</h4>
                        <div className="space-y-4">
                          {tradeDurations.map((duration) => (
                            <div key={duration.name} className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>{duration.name}</span>
                                <span className="text-green-500">
                                  +${duration.profit.toFixed(2)}
                                </span>
                              </div>
                              <Progress 
                                value={Math.round((duration.profit / 1580.30) * 100)} 
                                max={100}
                                className="h-2 bg-muted" 
                                indicatorClassName="bg-gradient-to-r from-primary to-secondary" 
                              />
                              <div className="text-xs text-muted-foreground">
                                {duration.trades} trades
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-sm font-medium mb-4">Duration Insights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <ChevronDown className="h-4 w-4 text-primary" />
                            <h5 className="font-medium text-sm">Your Trading Style</h5>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Your most profitable trades tend to be held for 8-24 hours, suggesting your strategy works best with swing trading approaches.
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <ArrowUpRight className="h-4 w-4 text-green-500" />
                            <h5 className="font-medium text-sm">Optimization Opportunity</h5>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Short-duration trades (less than 1 hour) have lower profit rates. Consider extending your holding periods or revising your short-term strategy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Patterns Tab */}
              <TabsContent value="patterns" className="space-y-6">
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle>Trading Patterns</CardTitle>
                    <CardDescription>Identify recurring patterns in your trading behavior</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Entry Patterns</h4>
                        <div className="space-y-2">
                          <div className="p-3 rounded-md bg-muted/70 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Breakout Entries</span>
                              <span className="text-sm text-green-500">78% win rate</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              15 trades with average profit of $245.30
                            </p>
                          </div>
                          
                          <div className="p-3 rounded-md bg-muted/70 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Pullback Entries</span>
                              <span className="text-sm text-green-500">65% win rate</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              22 trades with average profit of $178.75
                            </p>
                          </div>
                          
                          <div className="p-3 rounded-md bg-muted/70 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Range Bounce Entries</span>
                              <span className="text-sm text-red-500">42% win rate</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              12 trades with average loss of $85.40
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Exit Patterns</h4>
                        <div className="space-y-2">
                          <div className="p-3 rounded-md bg-muted/70 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Take Profit Exits</span>
                              <span className="text-sm">28 trades</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Average profit of $312.60 per trade
                            </p>
                          </div>
                          
                          <div className="p-3 rounded-md bg-muted/70 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Stop Loss Exits</span>
                              <span className="text-sm">15 trades</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Average loss of $168.24 per trade
                            </p>
                          </div>
                          
                          <div className="p-3 rounded-md bg-muted/70 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Manual Exits</span>
                              <span className="text-sm">9 trades</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Mixed results, average profit of $86.75
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-sm font-medium mb-4">Pattern Insights</h4>
                      <div className="space-y-3">
                        <div className="p-3 rounded-md bg-green-500/10 border border-green-500/20 space-y-1">
                          <div className="flex items-start gap-2">
                            <ArrowUpRight className="h-4 w-4 mt-0.5 text-green-500" />
                            <div>
                              <h5 className="text-sm font-medium">Strength: Breakout Trading</h5>
                              <p className="text-xs text-muted-foreground">
                                You excel at identifying and executing breakout trades, especially during the London session. These have been your most profitable pattern.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20 space-y-1">
                          <div className="flex items-start gap-2">
                            <ArrowDownRight className="h-4 w-4 mt-0.5 text-red-500" />
                            <div>
                              <h5 className="text-sm font-medium">Weakness: Range Trading</h5>
                              <p className="text-xs text-muted-foreground">
                                Range bounce trades have been consistently less profitable. Consider avoiding range markets or developing a specialized approach.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-md bg-blue-500/10 border border-blue-500/20 space-y-1">
                          <div className="flex items-start gap-2">
                            <LineChart className="h-4 w-4 mt-0.5 text-blue-500" />
                            <div>
                              <h5 className="text-sm font-medium">Opportunity: Improve Take Profit Strategy</h5>
                              <p className="text-xs text-muted-foreground">
                                Your take profit exits show good results, but your R:R ratio could be improved. Consider implementing trailing stops on strongly trending trades.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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