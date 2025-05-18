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
                <div className="h-[400px] p-2 bg-[#131722] text-white overflow-hidden">
                  {/* Trading View Chart would be rendered here */}
                  <div className="relative h-full w-full bg-[#131722] overflow-hidden rounded-md">
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
                      <div className="flex items-center gap-1 bg-[#2A2E39] rounded px-1.5 py-1 text-xs">
                        <span>XAUUSD</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-6 h-6 flex items-center justify-center bg-[#2A2E39] rounded text-xs">1m</div>
                        <div className="w-6 h-6 flex items-center justify-center bg-[#2A2E39] rounded text-xs">5m</div>
                        <div className="w-6 h-6 flex items-center justify-center bg-[#2A2E39] rounded text-xs">15m</div>
                        <div className="w-6 h-6 flex items-center justify-center bg-[#2A2E39] rounded text-xs">1h</div>
                        <div className="w-6 h-6 flex items-center justify-center bg-[#2A2E39] rounded text-xs">1D</div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                      <div className="w-6 h-6 flex items-center justify-center bg-[#2A2E39] rounded text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7"/><path d="M15 7v10"/></svg>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center bg-[#2A2E39] rounded text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                      </div>
                    </div>
                    <img 
                      src="https://placehold.co/1200x400/131722/e5e7eb?text=Real-time+Gold+Chart+with+Price+Action" 
                      alt="Gold Trading Chart" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#131722] text-xs p-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[#d1d4dc]">
                        <div>O: <span className="text-white">3,241.785</span></div>
                        <div>H: <span className="text-white">3,252.255</span></div>
                        <div>L: <span className="text-white">3,154.300</span></div>
                        <div>C: <span className="text-white">3,204.450</span></div>
                        <div className="text-red-400">-35.520 (-1.10%)</div>
                      </div>
                      <div className="text-[#d1d4dc]">
                        Vol: <span className="text-white">519.67K</span>
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 text-xs">
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">1D</div>
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">5D</div>
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">1M</div>
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">3M</div>
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">6M</div>
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">YTD</div>
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">1Y</div>
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">5Y</div>
                      <div className="px-2 py-1 bg-[#2A2E39] rounded-sm">All</div>
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
                <Link href="/signup">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/challenges">
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