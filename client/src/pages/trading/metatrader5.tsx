import React from "react";
import { Link } from "wouter";
import { ArrowRight, Download, ChevronRight, Check, BarChart, Clock, ShieldCheck, LineChart, Smartphone, Laptop, AreaChart, Layers, Rocket } from "lucide-react";
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
              The next-generation multi-asset platform for advanced traders
            </p>
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                  <a href="https://apps.apple.com/us/app/metatrader-5/id413251709" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download for iOS
                  </a>
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-opacity" asChild>
                  <a href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download for Android
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Button size="lg" variant="default" asChild>
                  <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download for Windows
                  </a>
                </Button>
                <Button size="lg" variant="default" asChild>
                  <a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download for Mac
                  </a>
                </Button>
              </div>
              
              <Button size="lg" variant="outline" asChild>
                <Link href="/trading/metatrader4">
                  Learn About MT4
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
                  Enhanced Trading Capabilities
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  MetaTrader 5 (MT5) is an advanced multi-asset platform that offers expanded capabilities beyond MT4, including more time frames, advanced order types, and an integrated economic calendar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Multi-Asset Platform</h3>
                      <p className="text-sm text-muted-foreground">Trade forex, stocks, futures, bonds, and cryptocurrencies from a single platform</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Advanced Market Depth</h3>
                      <p className="text-sm text-muted-foreground">View complete order book data with the DOM (Depth of Market) window</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Enhanced Timeframes</h3>
                      <p className="text-sm text-muted-foreground">21 timeframes from 1-minute to monthly, including additional ones not in MT4</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium">More Technical Indicators</h3>
                      <p className="text-sm text-muted-foreground">38+ built-in technical indicators with improved customization options</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg"></div>
                <div className="relative">
                  <img 
                    src="/src/assets/mt5-platform.svg" 
                    alt="MetaTrader 5 Platform" 
                    className="rounded shadow-lg border border-border/30"
                  />
                  <div className="mt-4 text-sm text-center text-muted-foreground">
                    MetaTrader 5 with advanced multi-chart layout and Depth of Market
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Comparison */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-6">
              MT5 vs. MT4: Key Differences
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Understand the enhanced capabilities that MetaTrader 5 offers compared to its predecessor
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium">Feature</th>
                    <th className="text-center p-4 font-medium">MT5</th>
                    <th className="text-center p-4 font-medium">MT4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-muted/50">
                    <td className="p-4">Trading Assets</td>
                    <td className="p-4 text-center">Stocks, Forex, Futures, Options, Bonds, Cryptocurrencies</td>
                    <td className="p-4 text-center">Primarily Forex and CFDs</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/50">
                    <td className="p-4">Timeframes</td>
                    <td className="p-4 text-center">21 timeframes</td>
                    <td className="p-4 text-center">9 timeframes</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/50">
                    <td className="p-4">Technical Indicators</td>
                    <td className="p-4 text-center">38+ built-in indicators</td>
                    <td className="p-4 text-center">30+ built-in indicators</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/50">
                    <td className="p-4">Order Types</td>
                    <td className="p-4 text-center">6 types including Market, Limit, Stop, Stop Limit, Close By, and Multiple Close By</td>
                    <td className="p-4 text-center">4 types (Market, Pending, Stop Loss, Take Profit)</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/50">
                    <td className="p-4">Economic Calendar</td>
                    <td className="p-4 text-center">Built-in</td>
                    <td className="p-4 text-center">Not included</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/50">
                    <td className="p-4">Market Depth (DOM)</td>
                    <td className="p-4 text-center">Full Depth of Market</td>
                    <td className="p-4 text-center">Not available</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/50">
                    <td className="p-4">Strategy Tester</td>
                    <td className="p-4 text-center">Multi-currency and multi-threaded</td>
                    <td className="p-4 text-center">Single-currency and single-threaded</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-muted/50">
                    <td className="p-4">Programming Language</td>
                    <td className="p-4 text-center">MQL5 (object-oriented)</td>
                    <td className="p-4 text-center">MQL4 (procedural)</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-4">Charts Maximum</td>
                    <td className="p-4 text-center">100 charts</td>
                    <td className="p-4 text-center">99 charts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Advanced MT5 Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <AreaChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Advanced Charting</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>21 timeframes from 1-minute to monthly</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>38+ built-in technical indicators</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>44 analytical objects for in-depth analysis</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Multiple chart types including Renko and Point & Figure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Layers className="h-6 w-6" />
                  </div>
                  <CardTitle>Order Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>6 order types for precise entry and exit</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Depth of Market (DOM) visualization</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Netting and hedging position accounting</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>One-click trading from chart and DOM</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <CardTitle>Trading Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>MQL5 object-oriented programming language</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Multi-threaded strategy tester for faster backtesting</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>Support for Trading Robots and Technical Indicators</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mr-1 mt-1" />
                      <span>MQL5 Cloud Network for distributed strategy testing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* MT5 with TRFX */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-6">
              Using MT5 with Your TRFX Account
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              TRFX provides full support for MT5, offering enhanced trading conditions and additional markets
            </p>
            
            <Tabs defaultValue="setup" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="setup">Account Setup</TabsTrigger>
                <TabsTrigger value="markets">Available Markets</TabsTrigger>
                <TabsTrigger value="tools">TRFX Tools for MT5</TabsTrigger>
              </TabsList>
              
              <TabsContent value="setup">
                <Card>
                  <CardHeader>
                    <CardTitle>Setting Up Your MT5 Account</CardTitle>
                    <CardDescription>
                      Follow these steps to connect your TRFX account to MetaTrader 5
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                          1
                        </div>
                        <div className="ml-3">
                          <h3 className="text-base font-medium">Download MT5</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Download the MT5 platform from our website or directly from the MetaQuotes website. Our custom build includes pre-configured settings optimized for TRFX accounts.
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
                            Follow the installation prompts to set up MT5 on your computer. Once installed, launch the application to begin the account setup process.
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
                            When you receive your TRFX challenge or funded account, you'll get MT5 login credentials including server address, login ID, and password. Enter these details when prompted by the platform.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                          4
                        </div>
                        <div className="ml-3">
                          <h3 className="text-base font-medium">Customize Your Workspace</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Once logged in, you can customize your MT5 workspace. TRFX provides template profiles with optimized chart settings and indicators that you can import from your account dashboard.
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
                            After setup, you're ready to trade. Remember to review the trading rules and risk parameters for your specific account type to ensure compliance with TRFX requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="markets">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Markets on MT5</CardTitle>
                    <CardDescription>
                      MT5 provides access to a wider range of markets than MT4
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Foreign Exchange</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>All major, minor, and exotic forex pairs</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Spot FX with institutional spreads</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>FX crosses with competitive conditions</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Commodities & Indices</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Precious metals (Gold, Silver, Platinum)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Energy markets (Oil, Natural Gas)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Global stock indices (S&P 500, NASDAQ, DAX, etc.)</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Stocks & ETFs</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>US equities (NYSE, NASDAQ)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>European stocks</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Popular ETFs across various sectors</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Cryptocurrencies</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Bitcoin, Ethereum, and major altcoins</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Crypto crosses (crypto-to-crypto pairs)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>Cryptocurrency CFDs with adjustable leverage</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-muted/40 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Market Availability Note</h4>
                          <p className="text-xs text-muted-foreground">
                            The availability of specific instruments may vary based on your account type and challenge phase. For the most current list of tradable instruments, please refer to the Market Watch window in your MT5 platform or contact our support team. Trading hours follow standard market sessions for each instrument class.
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
                    <CardTitle>TRFX Exclusive Tools for MT5</CardTitle>
                    <CardDescription>
                      Enhance your MT5 experience with our proprietary trading tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-4 border-b border-border/30 pb-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10 text-primary">
                          <BarChart className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">TRFX Advanced Analytics Suite</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            A comprehensive set of analytical tools designed specifically for MT5 that provides in-depth market analysis, performance tracking, and portfolio analytics. Visualize your trading patterns and identify opportunities for improvement.
                          </p>
                          <Button variant="link" className="px-0 h-auto mt-2">
                            Download Tool
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4 border-b border-border/30 pb-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10 text-primary">
                          <ShieldCheck className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">TRFX Risk Guardian Pro</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            An advanced risk management tool that monitors your account in real-time to ensure compliance with TRFX trading rules. Features include daily and overall drawdown alerts, maximum position size calculations, and risk-per-trade monitoring to help you stay within account parameters.
                          </p>
                          <Button variant="link" className="px-0 h-auto mt-2">
                            Download Tool
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10 text-primary">
                          <LineChart className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">TRFX Multi-Market Scanner</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            An enhanced version of our market scanner built specifically for MT5's multi-asset capabilities. This tool simultaneously scans multiple asset classes for trading opportunities based on your custom criteria, technical patterns, and fundamental filters.
                          </p>
                          <Button variant="link" className="px-0 h-auto mt-2">
                            Download Tool
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
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Download MetaTrader 5
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <CardTitle>MT5 for Windows</CardTitle>
                  <CardDescription>
                    Full desktop trading experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Access all MT5 features including multi-asset trading, full analytical capabilities, and advanced order types on Windows.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Complete feature set and customization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Multi-chart workspace support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Advanced automated trading</span>
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
                    <Laptop className="h-6 w-6" />
                  </div>
                  <CardTitle>MT5 for macOS</CardTitle>
                  <CardDescription>
                    Native Mac trading experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Trade on your Mac with the full-featured MT5 desktop application, optimized for macOS.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Native macOS application</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Touch Bar integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Cross-device synchronization</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download for macOS
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <CardTitle>MT5 for Mobile</CardTitle>
                  <CardDescription>
                    Trade anywhere, anytime
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Access your MT5 account on the go with the mobile app for iOS and Android devices.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Full trading functionality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Interactive charts with indicators</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Push notifications for market events</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      iOS
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Android
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Should I choose MT5 or MT4 for my TRFX account?</AccordionTrigger>
                <AccordionContent>
                  Both platforms are fully supported, but MT5 offers more advanced features and access to a wider range of markets. Choose MT5 if you want to trade multiple asset classes (including stocks and futures) or need advanced features like Depth of Market and more timeframes. Choose MT4 if you prefer its simplicity, have existing MT4 EAs, or specifically focus on forex trading.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I use my existing MT5 EAs with TRFX?</AccordionTrigger>
                <AccordionContent>
                  Yes, TRFX fully supports the use of Expert Advisors (EAs) on MT5. You can use your existing MQL5-based automated trading systems or develop new ones specifically for your TRFX account. Just make sure your EAs comply with our trading rules regarding risk management, maximum positions, and trading hours.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I connect my MT5 to the TRFX server?</AccordionTrigger>
                <AccordionContent>
                  To connect MT5 to the TRFX server, launch MT5 and go to File {'>'} Open an Account. Select "Add a new broker server" and enter the server details provided in your TRFX account dashboard. Alternatively, you can download our server configuration file from the dashboard and import it directly through File {'>'} Open Data Folder {'>'} Config.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I trade stocks and futures on MT5 with TRFX?</AccordionTrigger>
                <AccordionContent>
                  Yes, TRFX offers access to stocks, ETFs, and futures markets through MT5. The specific instruments available may vary depending on your account type and challenge phase. Funded accounts have access to a broader range of instruments than challenge accounts. You can view the complete list of available instruments in the Market Watch window of your MT5 platform.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Are there any additional fees for using MT5 with TRFX?</AccordionTrigger>
                <AccordionContent>
                  No, there are no additional fees for using MT5 with your TRFX account. The platform is provided free of charge, and all trading costs are transparently disclosed in the form of spreads or commissions depending on your account type. There are no hidden fees or charges for using any MT5 features or accessing market data.
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