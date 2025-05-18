import React from "react";
import { Link } from "wouter";
import { ArrowRight, Download, ChevronRight, Check, BarChart, Clock, ShieldCheck, LineChart, Smartphone, Laptop } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

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
              The industry-standard trading platform for forex and CFD traders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Download className="mr-2 h-5 w-5" />
                Download MT4
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/trading/metatrader5">
                  Learn About MT5
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  The World's Most Popular Trading Platform
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  MetaTrader 4 (MT4) is the most widely used electronic trading platform for forex, CFDs, and futures markets. It offers a powerful combination of analytical tools and trading functionalities that make it the preferred choice for millions of traders worldwide.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Intuitive Interface</h3>
                      <p className="text-sm text-muted-foreground">User-friendly design that's easy to navigate even for beginners</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Advanced Charting</h3>
                      <p className="text-sm text-muted-foreground">9 timeframes, 30+ built-in indicators, and custom indicator support</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Automated Trading</h3>
                      <p className="text-sm text-muted-foreground">Use Expert Advisors (EAs) to automate your trading strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Mobile Trading</h3>
                      <p className="text-sm text-muted-foreground">Trade on the go with iOS and Android mobile applications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg"></div>
                <div className="relative">
                  <img 
                    src="https://placehold.co/800x600/1f2937/e5e7eb?text=MT4+Platform+Screenshot" 
                    alt="MetaTrader 4 Platform" 
                    className="rounded shadow-lg border border-border/30"
                  />
                  <div className="mt-4 text-sm text-center text-muted-foreground">
                    MetaTrader 4 with multi-chart layout and technical analysis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Key MT4 Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Advanced Charting</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>9 timeframes from 1-minute to monthly</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>30+ built-in technical indicators</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>24 analytical objects including trendlines and Fibonacci</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Custom indicator support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Trading Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>MQL4 programming language for EAs</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Strategy Tester for EA optimization</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Visual backtesting capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Access to thousands of free and paid EAs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <CardTitle>Security & Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>128-bit encryption for data protection</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Stable and reliable platform architecture</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Low resource usage on your computer</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Regular updates and maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* MT4 with TRFX */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-6">
              Using MT4 with Your TRFX Account
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              TRFX provides seamless integration with MetaTrader 4, offering institutional-grade trading conditions for both challenge and funded accounts
            </p>
            
            <Tabs defaultValue="setup" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="setup">Account Setup</TabsTrigger>
                <TabsTrigger value="conditions">Trading Conditions</TabsTrigger>
                <TabsTrigger value="tools">Additional Tools</TabsTrigger>
              </TabsList>
              
              <TabsContent value="setup">
                <Card>
                  <CardHeader>
                    <CardTitle>Setting Up Your MT4 Account</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your TRFX account to MetaTrader 4
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                          1
                        </div>
                        <div className="ml-3">
                          <h3 className="text-base font-medium">Download MT4</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Download the MT4 platform from our website or directly from the MetaQuotes website. We recommend using our custom build for optimal integration with TRFX services.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                          2
                        </div>
                        <div className="ml-3">
                          <h3 className="text-base font-medium">Install and Launch</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Run the installation file and follow the on-screen instructions. Once installed, launch the MT4 platform.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                          3
                        </div>
                        <div className="ml-3">
                          <h3 className="text-base font-medium">Enter Login Credentials</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            When you receive your challenge or funded account, you'll be provided with a server name, login ID, and password. Enter these in the login window that appears when you first launch MT4.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                          4
                        </div>
                        <div className="ml-3">
                          <h3 className="text-base font-medium">Configure Settings</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            TRFX provides a set of recommended settings for optimal performance. These settings can be imported via a profile file available in your account dashboard.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                          5
                        </div>
                        <div className="ml-3">
                          <h3 className="text-base font-medium">Start Trading</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Once connected, you can begin trading immediately. Remember to follow all trading rules for your challenge or funded account as specified in your agreement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="conditions">
                <Card>
                  <CardHeader>
                    <CardTitle>TRFX Trading Conditions on MT4</CardTitle>
                    <CardDescription>
                      We provide institutional-grade trading conditions for all our traders
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Execution Quality</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Ultra-low latency execution (average 40ms)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>No requotes on market orders</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>99.9% order execution rate</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Deep liquidity from tier-1 providers</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Trading Parameters</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Spreads starting from 0.1 pips on major pairs</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Leverage up to 1:100 on funded accounts</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Minimum lot size: 0.01 (micro lot)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Maximum lot size: Varies by account size</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-muted/40 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Trading Hours</h4>
                          <p className="text-xs text-muted-foreground">
                            Forex: 24/5 from Sunday 5:00 PM ET to Friday 5:00 PM ET<br />
                            Indices: Varies by instrument (check specifications in platform)<br />
                            Commodities: Varies by instrument (check specifications in platform)<br />
                            Crypto CFDs: 24/7 with maintenance periods
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tools">
                <Card>
                  <CardHeader>
                    <CardTitle>TRFX Exclusive Tools for MT4</CardTitle>
                    <CardDescription>
                      Enhance your MT4 experience with these exclusive TRFX tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-4 border-b border-border/30 pb-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10 text-primary">
                          <BarChart className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">TRFX Trade Analytics</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Our custom MT4 plugin that provides detailed trading statistics, performance metrics, and risk analysis. The Analytics tool helps you identify strengths and weaknesses in your trading strategy.
                          </p>
                          <Button variant="link" className="px-0 h-auto mt-2">
                            Download Plugin
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4 border-b border-border/30 pb-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10 text-primary">
                          <ShieldCheck className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">TRFX Risk Manager</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            An advanced risk management tool that helps you stay within the trading rules of your challenge or funded account. Features include maximum drawdown alerts, position sizing calculator, and risk-per-trade monitoring.
                          </p>
                          <Button variant="link" className="px-0 h-auto mt-2">
                            Download Plugin
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10 text-primary">
                          <LineChart className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">TRFX Market Scanner</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            A powerful market scanning tool that identifies potential trading opportunities based on technical and fundamental factors. The scanner can be customized to match your trading strategy and preferences.
                          </p>
                          <Button variant="link" className="px-0 h-auto mt-2">
                            Download Plugin
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Download Options */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Download MetaTrader 4
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <CardTitle>MT4 for Windows</CardTitle>
                  <CardDescription>
                    The complete desktop trading platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Get the full MetaTrader 4 experience with advanced charting, automated trading, and all features unlocked.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Full set of analytical tools</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Expert Advisor support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Multi-chart capabilities</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Windows
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <CardTitle>MT4 for iOS</CardTitle>
                  <CardDescription>
                    Trade on your iPhone or iPad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Experience the power of MetaTrader 4 on your iOS device with real-time quotes and trading capabilities.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>30+ technical indicators</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Financial news integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Push notifications</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download for iOS
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <CardTitle>MT4 for Android</CardTitle>
                  <CardDescription>
                    Trade on your Android device
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Stay connected to the markets with the MetaTrader 4 Android app, offering comprehensive trading functionality.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Full charting capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Multiple order types</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Trade history analysis</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Android
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is MetaTrader 4 free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, MetaTrader 4 is completely free to download and use. There are no licensing fees or subscription costs. The platform is provided to traders by brokers and proprietary trading firms like TRFX.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I use custom indicators and Expert Advisors with TRFX?</AccordionTrigger>
                <AccordionContent>
                  Yes, TRFX fully supports the use of custom indicators and Expert Advisors (EAs) on both challenge and funded accounts. You can develop your own or use third-party tools. However, we recommend testing any EA thoroughly before using it on a live account.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I add TRFX server to my existing MT4 installation?</AccordionTrigger>
                <AccordionContent>
                  To add the TRFX server to your existing MT4 installation, open MT4 and go to File {'>'} Open an Account. Click on "Scan" and enter the server details provided in your account dashboard. Alternatively, you can download our server configuration file from the dashboard and import it directly.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Does MT4 have any limitations compared to MT5?</AccordionTrigger>
                <AccordionContent>
                  MT4 has some limitations compared to MT5, including fewer timeframes (9 vs. 21), fewer technical indicators (30+ vs. 38+), and no economic calendar integration. MT4 also lacks some advanced features like Market Depth and a multi-threaded strategy tester. However, MT4 is often preferred for its simplicity, reliability, and extensive community support.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I trade all instruments on MT4 with TRFX?</AccordionTrigger>
                <AccordionContent>
                  TRFX offers a wide range of trading instruments on MT4, including forex pairs, commodities, indices, and cryptocurrency CFDs. However, some specific instruments may only be available on MT5. You can view the complete list of available instruments for each platform in your account dashboard or contact our support team for more information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-10">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  Start Your Challenge
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}