import { useState } from "react";
import { Link } from "wouter";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Calendar,
  ChevronDown,
  Clock,
  Download,
  FileText,
  Filter,
  LineChart,
  PieChart,
  RefreshCw,
  TrendingUp
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, formatCurrency, formatPercent } from "@/lib/utils";

import {
  Area,
  AreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data for charts
const performanceData = [
  { date: "Jan", profit: 2100, drawdown: 450 },
  { date: "Feb", profit: 1800, drawdown: 320 },
  { date: "Mar", profit: 2800, drawdown: 510 },
  { date: "Apr", profit: 3900, drawdown: 650 },
  { date: "May", profit: 3100, drawdown: 520 },
  { date: "Jun", profit: 4500, drawdown: 820 },
  { date: "Jul", profit: 5200, drawdown: 950 },
  { date: "Aug", profit: 4800, drawdown: 870 },
  { date: "Sep", profit: 5900, drawdown: 1050 },
  { date: "Oct", profit: 6500, drawdown: 1150 },
  { date: "Nov", profit: 7200, drawdown: 1280 },
  { date: "Dec", profit: 7800, drawdown: 1350 },
];

const tradingActivityData = [
  { date: "Mon", trades: 8, wins: 5, losses: 3 },
  { date: "Tue", trades: 12, wins: 7, losses: 5 },
  { date: "Wed", trades: 10, wins: 8, losses: 2 },
  { date: "Thu", trades: 15, wins: 9, losses: 6 },
  { date: "Fri", trades: 9, wins: 6, losses: 3 },
];

const instrumentPerformanceData = [
  { name: "EUR/USD", profit: 3250, trades: 28, winRate: 68 },
  { name: "GBP/USD", profit: 1890, trades: 22, winRate: 59 },
  { name: "USD/JPY", profit: 4120, trades: 32, winRate: 72 },
  { name: "AUD/USD", profit: 1540, trades: 18, winRate: 55 },
  { name: "USD/CAD", profit: 2780, trades: 24, winRate: 63 },
  { name: "EUR/GBP", profit: 1920, trades: 20, winRate: 60 },
  { name: "USD/CHF", profit: 2150, trades: 19, winRate: 58 },
];

const tradingSessionData = [
  { name: "London", profit: 3850, percentage: 35 },
  { name: "New York", profit: 4200, percentage: 38 },
  { name: "Asia", profit: 1650, percentage: 15 },
  { name: "Overlaps", profit: 1320, percentage: 12 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const strategyPerformanceData = [
  { name: "Trend Following", profit: 4200, trades: 38, winRate: 72 },
  { name: "Breakout", profit: 2800, trades: 25, winRate: 64 },
  { name: "Range Trading", profit: 1950, trades: 22, winRate: 59 },
  { name: "Scalping", profit: 3100, trades: 85, winRate: 51 },
  { name: "News Trading", profit: 1750, trades: 12, winRate: 67 },
];

const riskMetricsData = [
  { metric: "Win Rate", value: "64%", change: "+2.5%", status: "positive" },
  { metric: "Profit Factor", value: "2.8", change: "+0.3", status: "positive" },
  { metric: "Average Win/Loss", value: "1.6", change: "-0.1", status: "negative" },
  { metric: "Sharpe Ratio", value: "1.94", change: "+0.12", status: "positive" },
  { metric: "Max Drawdown", value: "5.2%", change: "-0.8%", status: "positive" },
  { metric: "Recovery Factor", value: "3.5", change: "+0.4", status: "positive" },
];

export default function AnalyticsPage() {
  const [selectedAccount, setSelectedAccount] = useState("account1");
  const [dateRange, setDateRange] = useState("90d");

  const accountsData = [
    { id: "account1", name: "Challenge Phase 1 - $100K", balance: "$112,840.00", profit: "+12.84%", status: "active" },
    { id: "account2", name: "Challenge Phase 2 - $50K", balance: "$57,250.00", profit: "+14.50%", status: "active" },
    { id: "account3", name: "Funded Account - $200K", balance: "$215,680.00", profit: "+7.84%", status: "active" },
  ];

  const selectedAccountData = accountsData.find(account => account.id === selectedAccount);

  const renderPerformanceChart = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={performanceData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="drawdownGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(15, 23, 42, 0.9)", 
              borderColor: "rgba(100, 116, 139, 0.2)",
              borderRadius: "8px",
              color: "#e2e8f0"
            }} 
          />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="profit" 
            stroke="#22c55e" 
            fillOpacity={1} 
            fill="url(#profitGradient)" 
            name="Profit ($)"
          />
          <Area 
            type="monotone" 
            dataKey="drawdown" 
            stroke="#ef4444" 
            fillOpacity={1} 
            fill="url(#drawdownGradient)" 
            name="Drawdown ($)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  const renderTradingActivityChart = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart
          data={tradingActivityData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(15, 23, 42, 0.9)", 
              borderColor: "rgba(100, 116, 139, 0.2)",
              borderRadius: "8px",
              color: "#e2e8f0"
            }} 
          />
          <Legend />
          <Bar dataKey="trades" fill="#3b82f6" name="Total Trades" />
          <Bar dataKey="wins" fill="#22c55e" name="Winning Trades" />
          <Bar dataKey="losses" fill="#ef4444" name="Losing Trades" />
        </RechartsBarChart>
      </ResponsiveContainer>
    );
  };

  const renderInstrumentPerformanceChart = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart
          data={instrumentPerformanceData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(15, 23, 42, 0.9)", 
              borderColor: "rgba(100, 116, 139, 0.2)",
              borderRadius: "8px",
              color: "#e2e8f0"
            }}
          />
          <Legend />
          <Bar dataKey="profit" fill="#8884d8" name="Profit ($)" />
        </RechartsBarChart>
      </ResponsiveContainer>
    );
  };

  const renderSessionDistributionChart = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={tradingSessionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="profit"
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {tradingSessionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(15, 23, 42, 0.9)", 
              borderColor: "rgba(100, 116, 139, 0.2)",
              borderRadius: "8px",
              color: "#e2e8f0"
            }}
            formatter={(value, name, props) => [`${formatCurrency(value)}`, 'Profit']}
          />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container py-6">
          {/* Page header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Analytics & Reporting
              </h1>
              <p className="text-muted-foreground">
                Comprehensive insights into your trading performance
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[160px]">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                  <SelectItem value="90d">Last 90 Days</SelectItem>
                  <SelectItem value="1y">Last Year</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Export Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    Export to PDF
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    Export to CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    Export to Excel
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Account selector */}
          <div className="mb-6">
            <Select value={selectedAccount} onValueChange={setSelectedAccount}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Account" />
              </SelectTrigger>
              <SelectContent>
                {accountsData.map((account) => (
                  <SelectItem key={account.id} value={account.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{account.name}</span>
                      <span className={cn(
                        "ml-4 font-medium",
                        account.profit.startsWith("+") ? "text-green-500" : "text-red-500"
                      )}>
                        {account.profit}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Account Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Balance</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{selectedAccountData?.balance}</div>
                <p className="text-xs text-muted-foreground">
                  Current account balance
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profit/Loss</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={cn(
                  "text-2xl font-bold",
                  selectedAccountData?.profit.startsWith("+") ? "text-green-500" : "text-red-500"
                )}>
                  {selectedAccountData?.profit}
                </div>
                <p className="text-xs text-muted-foreground">
                  Total profit/loss percentage
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.5%</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  <span>2.5% from previous period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.2%</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowDown className="mr-1 h-3 w-3" />
                  <span>0.8% improvement</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Risk Metrics */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Key Risk Metrics</h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
              {riskMetricsData.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-1">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className={cn(
                      "flex items-center text-xs",
                      metric.status === "positive" ? "text-green-500" : "text-red-500"
                    )}>
                      {metric.status === "positive" ? 
                        <ArrowUp className="mr-1 h-3 w-3" /> : 
                        <ArrowDown className="mr-1 h-3 w-3" />
                      }
                      <span>{metric.change} from previous</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Performance and Activity Charts */}
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Profit & Drawdown</CardTitle>
                <CardDescription>
                  Monthly profit and drawdown over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderPerformanceChart()}
              </CardContent>
              <CardFooter className="border-t px-6 py-3">
                <Button variant="ghost" className="h-8 px-2 text-xs">
                  <Clock className="mr-2 h-3 w-3" />
                  View Historical Data
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trading Activity</CardTitle>
                <CardDescription>
                  Recent trading activity breakdown
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderTradingActivityChart()}
              </CardContent>
              <CardFooter className="border-t px-6 py-3">
                <Button variant="ghost" className="h-8 px-2 text-xs">
                  <Clock className="mr-2 h-3 w-3" />
                  View All Trading Days
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Advanced Analytics Tabs */}
          <div className="mb-6">
            <Tabs defaultValue="instruments">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Advanced Analytics</h2>
                <TabsList>
                  <TabsTrigger value="instruments">Instruments</TabsTrigger>
                  <TabsTrigger value="sessions">Sessions</TabsTrigger>
                  <TabsTrigger value="strategies">Strategies</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="instruments">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Instrument Performance</CardTitle>
                      <CardDescription>
                        Profit by currency pair
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {renderInstrumentPerformanceChart()}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Instrument Details</CardTitle>
                        <CardDescription>
                          Performance metrics by instrument
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Filter className="h-3.5 w-3.5" />
                        Filter
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Instrument</TableHead>
                              <TableHead>Profit</TableHead>
                              <TableHead>Trades</TableHead>
                              <TableHead>Win Rate</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {instrumentPerformanceData.map((item) => (
                              <TableRow key={item.name}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell className={cn(
                                  item.profit >= 0 ? "text-green-500" : "text-red-500"
                                )}>
                                  {formatCurrency(item.profit)}
                                </TableCell>
                                <TableCell>{item.trades}</TableCell>
                                <TableCell>{formatPercent(item.winRate / 100)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sessions">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Session Distribution</CardTitle>
                      <CardDescription>
                        Profit by trading session
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {renderSessionDistributionChart()}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Session Analysis</CardTitle>
                      <CardDescription>
                        Key metrics by trading session
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Session</TableHead>
                              <TableHead>Profit</TableHead>
                              <TableHead>% of Total</TableHead>
                              <TableHead>Avg Profit/Trade</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {tradingSessionData.map((item) => (
                              <TableRow key={item.name}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell className="text-green-500">
                                  {formatCurrency(item.profit)}
                                </TableCell>
                                <TableCell>{formatPercent(item.percentage / 100)}</TableCell>
                                <TableCell className="text-green-500">
                                  {formatCurrency(item.profit / Math.floor(Math.random() * 20 + 10))}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="strategies">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Strategy Performance</CardTitle>
                      <CardDescription>
                        Profit by trading strategy
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <RechartsBarChart
                          data={strategyPerformanceData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: "rgba(15, 23, 42, 0.9)", 
                              borderColor: "rgba(100, 116, 139, 0.2)",
                              borderRadius: "8px",
                              color: "#e2e8f0"
                            }}
                          />
                          <Legend />
                          <Bar dataKey="profit" fill="#8884d8" name="Profit ($)" />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Strategy Analysis</CardTitle>
                      <CardDescription>
                        Key metrics by trading strategy
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Strategy</TableHead>
                              <TableHead>Profit</TableHead>
                              <TableHead>Trades</TableHead>
                              <TableHead>Win Rate</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {strategyPerformanceData.map((item) => (
                              <TableRow key={item.name}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell className="text-green-500">
                                  {formatCurrency(item.profit)}
                                </TableCell>
                                <TableCell>{item.trades}</TableCell>
                                <TableCell>{formatPercent(item.winRate / 100)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Custom Reports */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Custom Reports</h2>
              <Button variant="default">
                <FileText className="mr-2 h-4 w-4" />
                Generate New Report
              </Button>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border border-dashed hover:bg-accent/10 cursor-pointer transition-colors">
                    <CardHeader>
                      <CardTitle className="text-base">Monthly Performance Report</CardTitle>
                      <CardDescription>
                        Detailed breakdown of monthly trading performance
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t flex justify-between py-2">
                      <span className="text-xs text-muted-foreground">Last generated: 2 days ago</span>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </CardFooter>
                  </Card>

                  <Card className="border border-dashed hover:bg-accent/10 cursor-pointer transition-colors">
                    <CardHeader>
                      <CardTitle className="text-base">Trading Journal Export</CardTitle>
                      <CardDescription>
                        Comprehensive export of all trades with annotations
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t flex justify-between py-2">
                      <span className="text-xs text-muted-foreground">Last generated: 1 week ago</span>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </CardFooter>
                  </Card>

                  <Card className="border border-dashed hover:bg-accent/10 cursor-pointer transition-colors">
                    <CardHeader>
                      <CardTitle className="text-base">Strategy Evaluation</CardTitle>
                      <CardDescription>
                        In-depth strategy performance analysis
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t flex justify-between py-2">
                      <span className="text-xs text-muted-foreground">Last generated: 3 days ago</span>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights */}
          <div>
            <h2 className="text-xl font-bold mb-4">AI Trading Insights</h2>
            <Card className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20">
              <CardHeader>
                <CardTitle>Trade Optimization Recommendations</CardTitle>
                <CardDescription>
                  AI-powered insights based on your trading history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Optimal Trading Sessions</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Your win rate is 76% during the London-New York overlap (1:00 PM - 4:00 PM GMT). 
                          Consider focusing more trades during this period to increase overall profitability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <PieChart className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Position Sizing Optimization</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Analysis shows your most profitable trades occur when position sizes are between 2-3% of account equity.
                          Current average position size is 4.2% which may be contributing to higher drawdowns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Instrument Selection</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          EUR/USD and USD/JPY account for 68% of your total profit. Consider increasing exposure to these pairs
                          while reducing trades in AUD/USD where your win rate is only 42%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <Button variant="default" className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                  Generate Detailed AI Analysis
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/50 backdrop-blur-sm">
        <div className="container flex h-14 items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TRFX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}