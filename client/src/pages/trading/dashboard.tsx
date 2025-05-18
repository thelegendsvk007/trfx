import { Link } from "wouter";
import { 
  ArrowRight, 
  BarChart3, 
  LineChart, 
  Wallet, 
  Clock, 
  Target, 
  Shield, 
  Award, 
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PageTemplate from "@/components/page-template";

export default function TradingDashboardPage() {
  return (
    <PageTemplate
      title="TRFX - Trading Dashboard"
      description="Manage your trading accounts, monitor performance, and track your progress with TRFX's comprehensive trader dashboard."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Dashboard
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Powerful tools to manage and analyze your funded trading accounts
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/signup">
                Create Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Live Trading Chart */}
      <section className="py-10 bg-background border-b border-border/40">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Trading Chart</h2>
              <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-md">
                <div className="p-4 bg-muted/30 border-b border-border/50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center h-7 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Gold Spot / U.S. Dollar
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-green-500 font-medium">Live</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <select className="h-9 rounded-md border border-border bg-background px-3 py-1 text-sm">
                      <option>1 Day</option>
                      <option>1 Week</option>
                      <option>1 Month</option>
                      <option>1 Year</option>
                    </select>
                  </div>
                </div>
                <div className="h-[1000px] p-0 bg-[#131722] text-white overflow-hidden">
                  {/* Trading View Chart would be rendered here */}
                  <div className="relative h-full w-full bg-[#131722] overflow-hidden">
                    <div className="h-8 border-b border-[#2A2E39] flex items-center px-3 justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-[10px]">$</div>
                          <span className="text-sm font-medium">Gold Spot / U.S. Dollar · 1 · OANDA</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 bg-[#2A2E39] flex items-center justify-center rounded">
                            <div className="h-3 w-0.5 bg-red-500"></div>
                          </div>
                          <div className="h-5 w-7 flex items-center justify-center rounded bg-[#2A2E39]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 bg-[#2A2E39] flex items-center justify-center rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {/* Left sidebar with price scale */}
                      <div className="w-20 h-[928px] flex flex-col justify-between p-1 text-right text-xs text-[#d1d4dc] border-r border-[#2A2E39]">
                        <div>3,252.500</div>
                        <div>3,250.000</div>
                        <div>3,247.500</div>
                        <div>3,245.000</div>
                        <div>3,242.500</div>
                        <div>3,240.000</div>
                        <div>3,237.500</div>
                        <div>3,234.335</div>
                        <div>3,232.500</div>
                        <div>3,230.000</div>
                        <div>3,227.500</div>
                        <div>3,225.000</div>
                        <div>3,222.500</div>
                        <div>3,220.000</div>
                        <div>3,217.500</div>
                      </div>
                      
                      {/* Main chart area */}
                      <div className="flex-1 relative">
                        {/* Price data at top */}
                        <div className="absolute top-2 left-3 flex items-center gap-3 text-xs">
                          <div className="text-red-500">O<span className="text-[#d1d4dc] ml-1">3,187.925</span></div>
                          <div className="text-red-500">H<span className="text-[#d1d4dc] ml-1">3,188.175</span></div>
                          <div className="text-red-500">L<span className="text-[#d1d4dc] ml-1">3,187.570</span></div>
                          <div className="text-red-500">C<span className="text-[#d1d4dc] ml-1">3,187.735</span></div>
                          <div className="text-red-500">-0.185 (-0.01%)</div>
                        </div>
                        
                        {/* Buy/Sell buttons */}
                        <div className="absolute top-8 left-3 flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <div className="bg-red-500/90 text-white px-2 py-1 rounded">
                              <div className="text-xs font-bold">3,203.620</div>
                              <div className="text-[10px]">SELL</div>
                            </div>
                            <div className="text-[#d1d4dc]">166.0</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="bg-blue-500/90 text-white px-2 py-1 rounded">
                              <div className="text-xs font-bold">3,205.280</div>
                              <div className="text-[10px]">BUY</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Chart content - We'll use an image to simulate the chart */}
                        <div className="w-full h-[928px] overflow-hidden relative">
                          <div className="absolute inset-0 grid grid-cols-6 w-full h-full pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="border-r border-[#2A2E39] h-full"></div>
                            ))}
                          </div>
                          
                          <div className="absolute inset-0 grid grid-rows-6 w-full h-full pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="border-b border-[#2A2E39] w-full"></div>
                            ))}
                          </div>
                          
                          {/* Random candles to simulate chart */}
                          <div className="absolute inset-0 flex items-end">
                            <div className="flex-1 h-full relative">
                              {/* Instead of actual candles, showing a styled background that looks like a chart */}
                              <div className="absolute w-full bottom-0 h-[50%] bg-gradient-to-t from-transparent to-[#131722] opacity-30"></div>
                              
                              {/* Simulate some candles by placing divs with different heights across the width */}
                              <div className="absolute bottom-0 w-full flex justify-between px-4 items-end">
                                {[...Array(50)].map((_, i) => {
                                  const isGreen = Math.random() > 0.5;
                                  const height = 20 + Math.random() * 350;
                                  return (
                                    <div key={i} className={`w-1.5 ${isGreen ? 'bg-green-500' : 'bg-red-500'}`} style={{height: `${height}px`}}></div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          
                          {/* Trading View watermark */}
                          <div className="absolute bottom-3 left-3 flex items-center gap-1 opacity-60">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#d1d4dc">
                              <path d="M12 21.7L8.6 18.3C9.4 17.8 10.7 17.5 12 17.5C13.3 17.5 14.6 17.8 15.4 18.3L12 21.7Z"></path>
                              <path d="M12 2.3L15.4 5.7C14.6 6.2 13.3 6.5 12 6.5C10.7 6.5 9.4 6.2 8.6 5.7L12 2.3Z"></path>
                              <path d="M2.3 12L5.7 15.4C6.2 14.6 6.5 13.3 6.5 12C6.5 10.7 6.2 9.4 5.7 8.6L2.3 12Z"></path>
                              <path d="M21.7 12L18.3 8.6C17.8 9.4 17.5 10.7 17.5 12C17.5 13.3 17.8 14.6 18.3 15.4L21.7 12Z"></path>
                            </svg>
                            <span className="text-sm text-[#d1d4dc] font-medium">TradingView</span>
                          </div>
                          
                          {/* Chart interval selector */}
                          <div className="absolute bottom-0 right-3 text-xs bg-[#131722] py-1 px-2 rounded border border-[#2A2E39]">
                            <span className="text-blue-400">25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Time scale at bottom */}
                    <div className="h-10 border-t border-[#2A2E39] flex items-center justify-between px-4 text-xs text-[#d1d4dc]">
                      <div className="flex space-x-5">
                        <div>17:30</div>
                        <div>18:00</div>
                        <div className="text-white">Fri 16 May '25</div>
                        <div>18:48</div>
                        <div>19:30</div>
                        <div>20:00</div>
                        <div>20:30</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div>18</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Trading Control</h2>
            <p className="text-lg text-muted-foreground">
              Our intuitive dashboard gives you complete visibility and control over your trading journey
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Everything in One Place</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The TRFX Trading Dashboard provides a centralized platform for managing all aspects of your funded trading experience. From challenge tracking to profit withdrawals, everything you need is just a click away.
                  </p>
                  <p className="text-muted-foreground">
                    Our clean, intuitive interface makes it easy to monitor multiple accounts, analyze your performance with advanced metrics, and keep track of your funding journey through our challenge programs.
                  </p>
                  <p className="text-muted-foreground">
                    Real-time data synchronization ensures you always have the most current information about your account status, trade history, and profit performance.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg border border-border/50 p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Secure Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Two-factor authentication and advanced security protocols to keep your account safe.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Performance Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Detailed trading statistics and performance metrics to help you improve your strategy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Payout Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Streamlined withdrawal process with multiple payment methods and real-time tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-md">
              <div className="p-4 bg-muted/30 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">TRFX Trader Dashboard Preview</h3>
                  <Badge>Mock Data</Badge>
                </div>
              </div>
              
              <Tabs defaultValue="overview" className="w-full">
                <div className="border-b border-border/50">
                  <TabsList className="w-full justify-start px-4 pt-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="accounts">Trading Accounts</TabsTrigger>
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                    <TabsTrigger value="payouts">Payouts</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="overview" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="border border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Target className="h-5 w-5 mr-2 text-primary" />
                          Challenge Progress
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-1">2</div>
                        <p className="text-sm text-muted-foreground">Active challenges</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Award className="h-5 w-5 mr-2 text-primary" />
                          Funded Accounts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-1">1</div>
                        <p className="text-sm text-muted-foreground">$100,000 funded account</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border/50">
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
                    </Card>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-4">Challenge Progress</h3>
                  <div className="space-y-6 mb-6">
                    <Card className="border border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">TR100542: Standard Challenge</CardTitle>
                          <Badge className="bg-emerald-500">Active</Badge>
                        </div>
                        <CardDescription>
                          $50,000 | 22 days remaining
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Profit Target: 2.48% / 8%</span>
                              <span className="font-medium">31%</span>
                            </div>
                            <Progress value={31} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Maximum Drawdown: 0.82% / 5%</span>
                              <span className="font-medium">16%</span>
                            </div>
                            <Progress value={16} className="h-2 bg-muted" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-4">Recent Trading Activity</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-3 text-muted-foreground font-medium">Date</th>
                          <th className="text-left p-3 text-muted-foreground font-medium">Symbol</th>
                          <th className="text-left p-3 text-muted-foreground font-medium">Type</th>
                          <th className="text-right p-3 text-muted-foreground font-medium">P/L</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-3">May 18, 2025</td>
                          <td className="p-3 font-medium">EURUSD</td>
                          <td className="p-3">
                            <Badge variant="outline">BUY</Badge>
                          </td>
                          <td className="p-3 text-right font-medium text-green-500">+$217.00</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3">May 17, 2025</td>
                          <td className="p-3 font-medium">GBPUSD</td>
                          <td className="p-3">
                            <Badge variant="secondary">SELL</Badge>
                          </td>
                          <td className="p-3 text-right font-medium text-green-500">+$135.00</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3">May 16, 2025</td>
                          <td className="p-3 font-medium">US30</td>
                          <td className="p-3">
                            <Badge variant="outline">BUY</Badge>
                          </td>
                          <td className="p-3 text-right font-medium text-green-500">+$250.50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="accounts" className="p-6">
                  <p className="text-muted-foreground mb-6">
                    The Trading Accounts tab provides detailed information and management options for all your challenge and funded accounts.
                  </p>
                  <div className="space-y-6">
                    <Card className="border border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">TR100542</CardTitle>
                          <Badge className="bg-emerald-500">Active</Badge>
                        </div>
                        <CardDescription>
                          Standard Challenge | $50,000
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Balance</p>
                            <p className="font-medium">$50,000</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Equity</p>
                            <p className="font-medium">$51,240</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Profit</p>
                            <p className="font-medium text-green-500">+2.48%</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Drawdown</p>
                            <p className="font-medium text-rose-500">0.82%</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-border pt-3 flex justify-between">
                        <div className="text-sm text-muted-foreground">
                          22 days remaining
                        </div>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button size="sm" variant="default">
                            Login to MT4
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">TR500125</CardTitle>
                          <Badge className="bg-blue-500">Funded</Badge>
                        </div>
                        <CardDescription>
                          Funded Account | $100,000
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Balance</p>
                            <p className="font-medium">$100,000</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Equity</p>
                            <p className="font-medium">$102,450</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Profit</p>
                            <p className="font-medium text-green-500">+2.45%</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Drawdown</p>
                            <p className="font-medium text-rose-500">0.65%</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-border pt-3 flex justify-between">
                        <div className="text-sm text-muted-foreground">
                          Payout every 2 weeks
                        </div>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button size="sm" variant="default">
                            Login to MT4
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="performance" className="p-6">
                  <p className="text-muted-foreground mb-6">
                    The Performance tab provides comprehensive analytics tools to help you track and improve your trading results.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="font-medium text-lg mb-4">Performance Overview</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Win Rate</div>
                        <div className="text-2xl font-bold text-green-500">75%</div>
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
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium text-lg mb-4">Profit/Loss Chart</h3>
                    <div className="h-64 w-full bg-muted/30 rounded-md flex items-center justify-center">
                      <LineChart className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-4">Trade Distribution</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border border-border/50">
                        <CardHeader>
                          <CardTitle className="text-lg">Win/Loss Ratio</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-center">
                            <div className="w-36 h-36 rounded-full border-8 border-primary/30 flex items-center justify-center relative">
                              <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-8 border-l-8 border-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
                              <div className="text-2xl font-bold">75%</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center mt-4">
                            <div>
                              <div className="text-xl font-bold text-green-500">24</div>
                              <div className="text-sm text-muted-foreground">Winning Trades</div>
                            </div>
                            <div>
                              <div className="text-xl font-bold text-rose-500">8</div>
                              <div className="text-sm text-muted-foreground">Losing Trades</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-border/50">
                        <CardHeader>
                          <CardTitle className="text-lg">Instrument Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>EURUSD</span>
                                <span className="font-medium text-green-500">+$342.50</span>
                              </div>
                              <Progress value={70} className="h-2 bg-muted" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>GBPUSD</span>
                                <span className="font-medium text-green-500">+$135.00</span>
                              </div>
                              <Progress value={30} className="h-2 bg-muted" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>US30</span>
                                <span className="font-medium text-green-500">+$250.50</span>
                              </div>
                              <Progress value={40} className="h-2 bg-muted" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-1 text-sm">
                                <span>XAUUSD</span>
                                <span className="font-medium text-rose-500">-$203.00</span>
                              </div>
                              <Progress value={20} className="h-2 bg-muted" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="payouts" className="p-6">
                  <p className="text-muted-foreground mb-6">
                    The Payouts tab allows you to manage your profit withdrawals and track your payment history.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="border border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Available Balance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-1">$1,245.60</div>
                        <p className="text-sm text-muted-foreground">From funded account earnings</p>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="w-full">Request Payout</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Next Payout Date</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-1">May 31, 2025</div>
                        <p className="text-sm text-muted-foreground">End of month payout schedule</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Total Withdrawn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-1">$3,850.25</div>
                        <p className="text-sm text-muted-foreground">Since account funding</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-4">Payout History</h3>
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
                            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
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
                            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
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
                            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                              Completed
                            </Badge>
                          </td>
                          <td className="p-3 text-right font-medium">$875.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Trades Section */}
      <section className="py-12 bg-background border-b border-border/40">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Recent Trades</h2>
            <div className="bg-card border border-border/50 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-muted/30 border-b border-border/50 flex justify-between items-center">
                <div className="text-lg font-medium">View your latest trading activity</div>
                
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm" className="text-sm h-8 px-3 rounded-l-md rounded-r-none bg-background">
                    Open Positions
                  </Button>
                  <Button variant="ghost" size="sm" className="text-sm h-8 px-3 bg-muted/30">
                    Closed Positions
                  </Button>
                  <Button variant="ghost" size="sm" className="text-sm h-8 px-3 rounded-r-md rounded-l-none">
                    Pending Orders
                  </Button>
                </div>
              </div>
              
              <div className="p-8 flex flex-col items-center justify-center min-h-[200px] text-center">
                <div className="rounded-full bg-muted/70 p-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M7.5 4.27h9c3.51 0 5 1.53 5 4.96v2.04m0 0c-.51-.31-1.17-.5-2-.5a4 4 0 0 0-4 4c0 1.5.8 2.77 2 3.5.41.23.87.38 1.35.43H8.04c-3.03 0-4.04-1.04-4.04-4.07v-2.89m0 0A2.5 2.5 0 0 1 4 10V6.31a2 2 0 0 1 2-2.04"></path><path d="M12 4.27c-1.13 0-7.5 5.95-7.5 8.77a4.5 4.5 0 0 0 9 0c0-2.82-6.37-8.77-7.5-8.77Z"></path></svg>
                </div>
                <h3 className="text-lg font-medium mb-2">No open trades found</h3>
                <p className="text-muted-foreground max-w-md">
                  Start trading to see your positions here. You can place trades through MetaTrader 4/5 or our web platform.
                </p>
                <div className="mt-6">
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    Place New Trade
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Overview Section */}
      <section className="py-12 bg-muted/20 border-b border-border/40">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Market Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-lg border border-border/50 p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-medium">EUR/USD</div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    +0.15%
                  </Badge>
                </div>
                <div className="text-2xl font-bold mb-1">1.0825</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1"><path d="m17 7-9.1 9.1-3.4-3.4a1 1 0 0 0-1.4 1.4l4 4a1 1 0 0 0 1.4 0l10-10a1 1 0 0 0-1.4-1.4z"></path></svg>
                  +0.0016 today
                </div>
              </div>
              <div className="bg-card rounded-lg border border-border/50 p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-medium">Gold</div>
                  <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                    -1.10%
                  </Badge>
                </div>
                <div className="text-2xl font-bold mb-1">3,204.45</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-1"><path d="m3 3 18 18"></path><path d="M10.5 10.5 20 6"></path><path d="m6 16 13.5-13.5"></path><path d="M16 10s0 .5-1 1.5c-.826.826-1.5 1-1.5 1L8 17"></path><path d="M8.5 12.5 6 13s-.5 0-1.5-1C3.5 11 4 10 4 10"></path></svg>
                  -35.52 today
                </div>
              </div>
              <div className="bg-card rounded-lg border border-border/50 p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="font-medium">US30</div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    +0.28%
                  </Badge>
                </div>
                <div className="text-2xl font-bold mb-1">39,250</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1"><path d="m17 7-9.1 9.1-3.4-3.4a1 1 0 0 0-1.4 1.4l4 4a1 1 0 0 0 1.4 0l10-10a1 1 0 0 0-1.4-1.4z"></path></svg>
                  +109.5 today
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-muted/30 border-b border-border/50 flex justify-between items-center">
                <div className="text-lg font-medium">Economic Calendar</div>
                <Button variant="outline" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M12 19V9"></path><path d="m9 12 3-3 3 3"></path><path d="M14.5 2H9.5C8.67 2 8 2.67 8 3.5v3.378A2.5 2.5 0 0 0 10.5 9.5h3c.398 0 .779-.079 1.125-.22l3.303 1.323a.5.5 0 0 0 .675-.458l-.101-4.067a.5.5 0 0 0-.192-.392L14.5 2Z"></path></svg>
                  Export
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-muted-foreground font-medium">Time</th>
                      <th className="text-left p-3 text-muted-foreground font-medium">Currency</th>
                      <th className="text-left p-3 text-muted-foreground font-medium">Event</th>
                      <th className="text-center p-3 text-muted-foreground font-medium">Impact</th>
                      <th className="text-right p-3 text-muted-foreground font-medium">Actual</th>
                      <th className="text-right p-3 text-muted-foreground font-medium">Forecast</th>
                      <th className="text-right p-3 text-muted-foreground font-medium">Previous</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 text-sm">15:30</td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-[#0a47a9] text-white text-xs flex items-center justify-center mr-1.5">$</div>
                          USD
                        </div>
                      </td>
                      <td className="p-3 font-medium">Non-Farm Payrolls</td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 mr-0.5"><circle cx="12" cy="12" r="11" /></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 mr-0.5"><circle cx="12" cy="12" r="11" /></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500"><circle cx="12" cy="12" r="11" /></svg>
                        </div>
                      </td>
                      <td className="p-3 text-right text-green-500 font-medium">175K</td>
                      <td className="p-3 text-right">150K</td>
                      <td className="p-3 text-right">142K</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 text-sm">14:15</td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-[#005CA5] text-white text-xs flex items-center justify-center mr-1.5">€</div>
                          EUR
                        </div>
                      </td>
                      <td className="p-3 font-medium">ECB Interest Rate Decision</td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 mr-0.5"><circle cx="12" cy="12" r="11" /></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 mr-0.5"><circle cx="12" cy="12" r="11" /></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500"><circle cx="12" cy="12" r="11" /></svg>
                        </div>
                      </td>
                      <td className="p-3 text-right font-medium">4.25%</td>
                      <td className="p-3 text-right">4.25%</td>
                      <td className="p-3 text-right">4.25%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 text-sm">09:30</td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-[#00247D] text-white text-xs flex items-center justify-center mr-1.5">£</div>
                          GBP
                        </div>
                      </td>
                      <td className="p-3 font-medium">Manufacturing PMI</td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 mr-0.5"><circle cx="12" cy="12" r="11" /></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500"><circle cx="12" cy="12" r="11" /></svg>
                        </div>
                      </td>
                      <td className="p-3 text-right text-red-500 font-medium">48.8</td>
                      <td className="p-3 text-right">49.5</td>
                      <td className="p-3 text-right">49.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Features */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Key Dashboard Features</h2>
            <p className="text-lg text-muted-foreground">
              Designed to give you full control over your TRFX trading journey
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Real-Time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Monitor your trading accounts in real-time with instant updates on balance, equity, margin, and drawdown metrics.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Live progress toward profit targets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Automatic drawdown monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Challenge time remaining indicators</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced analytics tools to help you understand and improve your trading performance with detailed metrics and visualizations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Win/loss ratio and profit factor analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Instrument performance breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Historical equity and drawdown charts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Wallet className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Payout Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Seamless profit withdrawal system with multiple payment options and complete transaction history tracking.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>One-click withdrawal requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Multiple payment method options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Complete payout history and tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Mobile Access */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Access Anywhere</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The TRFX Dashboard is fully responsive and accessible from any device, allowing you to stay connected to your trading accounts wherever you go.
                  </p>
                  <p className="text-muted-foreground">
                    Monitor your account performance, check challenge progress, and even request withdrawals from your smartphone or tablet with our mobile-optimized interface.
                  </p>
                  <p className="text-muted-foreground">
                    Real-time notifications keep you informed about important events, from trade executions to payout approvals, ensuring you never miss critical updates.
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/signup">
                      Start Trading Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-96 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 opacity-50">
                    <rect width="7" height="16" x="13" y="4" rx="1" />
                    <rect width="7" height="16" x="4" y="4" rx="1" />
                    <path d="M17 20h4" />
                    <path d="M17 8h4" />
                    <path d="M8 20h4" />
                    <path d="M8 8h4" />
                  </svg>
                  <p>Mobile Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Seamless Integration</h2>
            <p className="text-lg text-muted-foreground">
              The TRFX Dashboard integrates directly with your trading platforms
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">MetaTrader 4 Connection</CardTitle>
                  <CardDescription>
                    Direct integration with the world's most popular trading platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our dashboard connects directly to your MT4 account, pulling trade data, account metrics, and performance statistics in real-time for seamless monitoring.
                  </p>
                  <div className="flex justify-end">
                    <Button variant="outline" asChild>
                      <Link href="/trading/metatrader4">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">MetaTrader 5 Support</CardTitle>
                  <CardDescription>
                    Full compatibility with the next-generation platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For traders who prefer MT5's advanced features, our dashboard provides complete integration, allowing you to monitor your performance with the same detailed metrics.
                  </p>
                  <div className="flex justify-end">
                    <Button variant="outline" asChild>
                      <Link href="/trading/metatrader5">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Take Control of Your Trading Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create an account today to access our comprehensive dashboard and start your path to funded trading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/login">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/compare-plans">
                  View Challenges
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}