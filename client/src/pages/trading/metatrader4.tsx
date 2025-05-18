import { Link } from "wouter";
import { ArrowRight, Download, Check, Laptop, Clock, Zap, BarChart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import PageTemplate from "@/components/page-template";

export default function MetaTrader4Page() {
  return (
    <PageTemplate
      title="TRFX - MetaTrader 4"
      description="Learn about the MetaTrader 4 trading platform and how to use it with your TRFX funded account."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              MetaTrader 4
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The industry-standard forex trading platform for your funded account
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Download className="mr-2 h-5 w-5" />
                Download MT4
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
      
      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Traders Choose MetaTrader 4</h2>
            <p className="text-lg text-muted-foreground">
              Experience the power and flexibility of the world's most popular trading platform
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Laptop className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">User-Friendly Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intuitive and easy-to-navigate interface suitable for both beginners and professional traders. The customizable workspace allows you to arrange charts and tools to suit your trading style.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BarChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Advanced Charting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access 30+ built-in technical indicators, 24 analytical objects, and 9 timeframes from 1-minute to 1-month charts. Create custom indicators for specialized analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Fast Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Execute trades with just a few clicks. The platform's efficient architecture ensures rapid order processing, essential for day traders and scalpers who need speed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Comparison */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Comprehensive Trading Tools</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">One-Click Trading</h3>
                      <p className="text-sm text-muted-foreground">
                        Execute trades directly from the chart with a single click, increasing your trading efficiency.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Multiple Order Types</h3>
                      <p className="text-sm text-muted-foreground">
                        Market, limit, stop, and trailing stop orders give you flexibility in how you enter and exit trades.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Expert Advisors (EAs)</h3>
                      <p className="text-sm text-muted-foreground">
                        Create or use custom trading robots to automate your trading strategies (note: fully automated trading is not permitted for TRFX funded accounts).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Customizable Indicators</h3>
                      <p className="text-sm text-muted-foreground">
                        Create custom indicators using the MQL4 programming language to fit your specific trading needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Multi-Platform Accessibility</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Desktop Platform</h3>
                      <p className="text-sm text-muted-foreground">
                        Available for Windows and Mac OS (via emulation), providing the full range of trading features and tools.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mobile Trading</h3>
                      <p className="text-sm text-muted-foreground">
                        iOS and Android apps allow you to trade and monitor positions on the go with a streamlined interface.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Web Terminal</h3>
                      <p className="text-sm text-muted-foreground">
                        Access your account from any web browser without downloading software, perfect for trading from public or work computers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Multi-Terminal</h3>
                      <p className="text-sm text-muted-foreground">
                        Professional version allows management of multiple accounts simultaneously, ideal for monitoring multiple TRFX challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Download className="mr-2 h-5 w-5" />
                Download MT4
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Setup Guide */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Setting Up MT4 for Your TRFX Account</h2>
            <p className="text-lg text-muted-foreground">
              Follow these steps to get started with your funded account on MetaTrader 4
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold">1</div>
                    <CardTitle>Download and Install MT4</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Download MetaTrader 4 from our website or directly from the MetaQuotes website. Install the application following the on-screen instructions.
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
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold">2</div>
                    <CardTitle>Enter Your Login Credentials</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    After successfully passing a challenge or during a challenge, you'll receive your MT4 login details via email. Open MT4 and select "File" &gt; "Login to Trade Account".
                  </p>
                  <div className="p-4 bg-muted/20 rounded-md">
                    <h4 className="font-medium mb-2">You'll need to enter:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Login ID (provided by TRFX)</li>
                      <li>• Password (provided by TRFX)</li>
                      <li>• Server (depending on your account type)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold">3</div>
                    <CardTitle>Customize Your Platform</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Set up your charts, indicators, and workspaces to suit your trading strategy. MT4 allows extensive customization of colors, chart types, and workspace layouts.
                  </p>
                  <div className="p-4 bg-muted/20 rounded-md">
                    <h4 className="font-medium mb-2">Recommended setup steps:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Add your preferred currency pairs to the Market Watch window</li>
                      <li>• Set up your most-used chart timeframes</li>
                      <li>• Add essential indicators for your trading strategy</li>
                      <li>• Save your workspace for future sessions</li>
                    </ul>
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
                    You're now ready to begin trading. Remember to follow TRFX's trading rules, including maximum drawdown limits and prohibited trading practices.
                  </p>
                  <div className="mt-2">
                    <Button asChild>
                      <Link href="/how-it-works/trading-rules">
                        View Trading Rules
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Resources */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Additional Resources</h2>
            <p className="text-lg text-muted-foreground">
              Helpful guides and tools to enhance your MT4 trading experience
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">MT4 User Guide</CardTitle>
                <CardDescription>Comprehensive platform documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Access the complete MetaTrader 4 user manual covering all features, functions, and customization options in detail.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download Guide</Button>
              </CardFooter>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Video Tutorials</CardTitle>
                <CardDescription>Step-by-step visual instructions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Watch our collection of video tutorials covering platform navigation, chart setup, order placement, and risk management.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Tutorials</Button>
              </CardFooter>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Indicator Pack</CardTitle>
                <CardDescription>Custom TRFX trading indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download our exclusive pack of custom indicators optimized for forex and commodity trading to enhance your analysis.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download Pack</Button>
              </CardFooter>
            </Card>
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
                      <span>Operating System: Windows 7/8/10/11</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Processor: 1.5 GHz or higher</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>RAM: 1 GB or higher (2 GB recommended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Hard Drive Space: 200 MB free space</span>
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
                  <CardTitle className="text-lg">Mobile Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>iOS: iOS 11.0 or later (iPhone, iPad, iPod touch)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Android: Android 5.0 or later</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Screen Resolution: 320x480 minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Internet Connection: Wi-Fi or mobile data connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Storage: 30 MB free space</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-4 bg-muted/30 rounded-md border border-border/50 text-sm text-muted-foreground">
              <p className="mb-2"><strong>Note for Mac Users:</strong> MetaTrader 4 doesn't have a native macOS version. Mac users can run MT4 using:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Virtual machines like Parallels or VirtualBox running Windows</li>
                <li>Wine compatibility layer</li>
                <li>Boot Camp to dual-boot Windows</li>
                <li>MT4 WebTrader through a browser</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Trading with MT4?</h2>
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
                Download MT4
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}