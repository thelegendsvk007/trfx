import { Link } from "wouter";
import { ArrowRight, Download, Check, Laptop, Cpu, Zap, BarChart4, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PageTemplate from "@/components/page-template";

export default function MetaTrader5Page() {
  return (
    <PageTemplate
      title="TRFX - MetaTrader 5"
      description="Learn about the MetaTrader 5 trading platform and how to use it with your TRFX funded account."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              MetaTrader 5
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The next-generation multi-asset trading platform for your funded account
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Download className="mr-2 h-5 w-5" />
                Download MT5
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
      
      {/* Why MT5 Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose MetaTrader 5</h2>
            <p className="text-lg text-muted-foreground">
              Advanced features and capabilities beyond MT4 for serious traders
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Cpu className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Enhanced Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built on 64-bit architecture, MT5 offers improved speed and processing power, handling complex calculations and large datasets more efficiently than MT4.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BarChart4 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Advanced Charting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access 21 timeframes (compared to MT4's 9), enhanced technical indicators, and improved analytical tools with more sophisticated graphical objects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Multi-Asset Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trade across multiple asset classes including forex, stocks, commodities, indices, and cryptocurrencies all from a single platform with integrated tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* MT5 vs MT4 Comparison */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">MT5 vs. MT4: Key Differences</h2>
            <p className="text-lg text-muted-foreground">
              Understanding what sets MetaTrader 5 apart from its predecessor
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Technical Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-muted/30">
                      <tr className="border-b border-border">
                        <th className="text-left p-4">Feature</th>
                        <th className="text-center p-4">MetaTrader 4</th>
                        <th className="text-center p-4">MetaTrader 5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Architecture</td>
                        <td className="p-4 text-center">32-bit</td>
                        <td className="p-4 text-center">64-bit</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Timeframes</td>
                        <td className="p-4 text-center">9 timeframes</td>
                        <td className="p-4 text-center">21 timeframes</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Technical Indicators</td>
                        <td className="p-4 text-center">30+</td>
                        <td className="p-4 text-center">38+</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Graphical Objects</td>
                        <td className="p-4 text-center">31</td>
                        <td className="p-4 text-center">44</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Programming Language</td>
                        <td className="p-4 text-center">MQL4</td>
                        <td className="p-4 text-center">MQL5 (more advanced)</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Economic Calendar</td>
                        <td className="p-4 text-center">No</td>
                        <td className="p-4 text-center">Yes (built-in)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Market Depth</td>
                        <td className="p-4 text-center">No</td>
                        <td className="p-4 text-center">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Trading Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-muted/30">
                      <tr className="border-b border-border">
                        <th className="text-left p-4">Feature</th>
                        <th className="text-center p-4">MetaTrader 4</th>
                        <th className="text-center p-4">MetaTrader 5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Order Types</td>
                        <td className="p-4 text-center">2 (Market & Pending)</td>
                        <td className="p-4 text-center">6 (Advanced options)</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Order Execution Models</td>
                        <td className="p-4 text-center">Dealing Desk</td>
                        <td className="p-4 text-center">Exchange, Market, Request</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Hedging</td>
                        <td className="p-4 text-center">Yes</td>
                        <td className="p-4 text-center">Yes (account-dependent)</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-medium">Netting</td>
                        <td className="p-4 text-center">No</td>
                        <td className="p-4 text-center">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Asset Classes</td>
                        <td className="p-4 text-center">Primarily Forex</td>
                        <td className="p-4 text-center">Multi-asset capability</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
                <CardFooter className="bg-muted/20 p-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-1"><strong>Note:</strong> Both platforms are supported for TRFX funded accounts. Choose the platform that best suits your trading style and strategy.</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Setup Guide */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Setting Up MT5 for Your TRFX Account</h2>
            <p className="text-lg text-muted-foreground">
              Follow these steps to get started with your funded account on MetaTrader 5
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold">1</div>
                    <CardTitle>Download and Install MT5</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Download the MetaTrader 5 platform from our website or directly from the MetaQuotes website. Follow the installation instructions for your operating system.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Windows Version
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Mac Version
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Mobile Apps
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold">2</div>
                    <CardTitle>Connect to Your Account</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    After passing a challenge or during a challenge, you'll receive MT5 login credentials. Launch MT5 and select "File" &gt; "Login to Trading Account" to enter your details.
                  </p>
                  <Alert className="bg-muted/30 border-primary/20">
                    <AlertTitle className="text-primary">Required Information</AlertTitle>
                    <AlertDescription>
                      <ul className="space-y-1 mt-2">
                        <li>• Account Login ID (provided by TRFX)</li>
                        <li>• Password</li>
                        <li>• Server name (provided in your welcome email)</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold">3</div>
                    <CardTitle>Configure Your Workspace</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Set up your trading environment by adding charts, configuring indicators, and customizing the interface to match your trading preferences.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Chart Setup</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Right-click on Market Watch to add instruments</li>
                        <li>• Double-click an instrument to open its chart</li>
                        <li>• Right-click on chart to change timeframe</li>
                        <li>• Press F8 to access chart properties</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Trading Settings</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Configure trade settings under "Tools" &gt; "Options"</li>
                        <li>• Set default trade sizes and risk parameters</li>
                        <li>• Enable one-click trading for faster execution</li>
                        <li>• Set up alerts for price levels</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold">4</div>
                    <CardTitle>Start Trading</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    With your MT5 platform configured, you're ready to begin trading. Remember to follow all TRFX trading rules and risk management guidelines for your funded account.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/how-it-works/trading-rules">
                        Trading Rules
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/challenges">
                        View Challenges
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Advanced MT5 Features</h2>
            <p className="text-lg text-muted-foreground">
              Powerful tools available in MetaTrader 5 to enhance your trading
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Trading & Analysis</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Economic Calendar</h4>
                    <p className="text-sm text-muted-foreground">
                      Built-in economic calendar showing upcoming financial events and their expected impact, helping you plan your trading around major announcements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Market Depth</h4>
                    <p className="text-sm text-muted-foreground">
                      View the order book showing pending buy and sell orders at different price levels, giving insight into market liquidity and potential support/resistance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Strategy Tester</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced backtesting with multi-currency testing capabilities and support for tick data, allowing for more accurate strategy validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Custom Development</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">MQL5 Programming</h4>
                    <p className="text-sm text-muted-foreground">
                      Create custom indicators and trading strategies using the powerful MQL5 language, which supports object-oriented programming and complex algorithms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">MetaEditor</h4>
                    <p className="text-sm text-muted-foreground">
                      Enhanced development environment with code completion, debugging tools, and a more intuitive interface for creating custom tools.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">MQL5 Community</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to a marketplace of ready-made trading robots, indicators, and scripts, plus the ability to hire professional developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 p-5 bg-card border border-border/50 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-center">TRFX Trading Rules Reminder</h3>
            <p className="text-muted-foreground mb-4">
              While MT5 offers powerful automated trading capabilities, please remember that for TRFX funded accounts:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Fully automated trading using Expert Advisors is not permitted</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Semi-automated tools for trade management (like trailing stops) are allowed</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Custom indicators for analysis are permitted and encouraged</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* System Requirements */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">System Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Windows Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Operating System: Windows 7/8/10/11 (64-bit recommended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Processor: 2.0 GHz or higher</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>RAM: 2 GB or higher (4 GB recommended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Hard Drive Space: 500 MB free space</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Internet Connection: Stable broadband connection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Mac & Mobile Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>macOS: macOS 10.15 or later (via web platform or emulation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>iOS: iOS 12.0 or later for iPhone and iPad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Android: Android 7.0 or later</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Screen Resolution: 320x480 minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Internet Connection: Wi-Fi or mobile data connection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-4 bg-muted/30 rounded-md border border-border/50 text-sm text-muted-foreground">
              <p className="mb-2"><strong>Note for Mac Users:</strong> MetaTrader 5 doesn't have a native macOS application. Mac users can access MT5 through:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>MT5 WebTerminal through a web browser</li>
                <li>Virtual machines like Parallels or VirtualBox running Windows</li>
                <li>Wine compatibility layer</li>
                <li>Boot Camp to dual-boot Windows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Trading with MT5?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take on our trading challenge and gain access to our capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  View Challenge Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download MT5
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}