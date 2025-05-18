import React from "react";
import { Link } from "wouter";
import { ArrowRight, BarChart2, LineChart, Globe, Clock, BarChart4, PieChart, HelpCircle } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TradingPage() {
  return (
    <PageTemplate
      title="TRFX - Trading Platforms and Tools"
      description="Access our suite of professional trading platforms, tools, and real-time market data to enhance your trading experience with TRFX."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Platforms & Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access professional trading platforms and real-time market data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/trading/dashboard">
                  Access Trading Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/challenges">
                  View Available Challenges
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platforms Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Platforms</h2>
            <p className="text-lg text-muted-foreground">
              We offer industry-standard platforms optimized for serious traders
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">MetaTrader 4</CardTitle>
                      <CardDescription>The world's most popular forex trading platform</CardDescription>
                    </div>
                    <Badge variant="outline">Most Popular</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://placehold.co/600x340/1f2937/e5e7eb?text=MT4+Platform+Screenshot" 
                      alt="MetaTrader 4 Platform" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      MetaTrader 4 (MT4) is the industry standard for forex trading, offering powerful charting capabilities, automated trading through Expert Advisors, and a user-friendly interface.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">30+ indicators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">9 timeframes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-primary" />
                        <span className="text-sm">Automated trading</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span className="text-sm">Multi-device</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/30 pt-4 flex justify-end">
                  <Button asChild>
                    <Link href="/trading/metatrader4">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">MetaTrader 5</CardTitle>
                      <CardDescription>Next-generation multi-asset trading platform</CardDescription>
                    </div>
                    <Badge className="bg-blue-600">Advanced</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://placehold.co/600x340/1f2937/e5e7eb?text=MT5+Platform+Screenshot" 
                      alt="MetaTrader 5 Platform" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      MetaTrader 5 (MT5) expands on MT4's capabilities with support for more asset classes, additional timeframes, and an enhanced market depth display for superior trade execution.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">38+ indicators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">21 timeframes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-primary" />
                        <span className="text-sm">Economic calendar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span className="text-sm">Depth of Market</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/30 pt-4 flex justify-end">
                  <Button asChild>
                    <Link href="/trading/metatrader5">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Available Products */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Available Trading Products</h2>
            <p className="text-lg text-muted-foreground">
              Access a wide range of financial instruments with competitive conditions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto rounded-lg border border-border/50 bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Category</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead className="text-right">Typical Spread</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Forex Pairs</TableCell>
                    <TableCell>
                      <p>50+ currency pairs including majors, minors, and exotics</p>
                      <p className="text-sm text-muted-foreground mt-1">EUR/USD, GBP/USD, USD/JPY, AUD/USD, EUR/GBP, USD/CAD, etc.</p>
                    </TableCell>
                    <TableCell className="text-right">0.1-1.2 pips</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Commodities</TableCell>
                    <TableCell>
                      <p>Precious metals, energy, and agricultural products</p>
                      <p className="text-sm text-muted-foreground mt-1">Gold, Silver, Crude Oil, Natural Gas, Platinum, Coffee, etc.</p>
                    </TableCell>
                    <TableCell className="text-right">1.5-5.0 pips</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Indices</TableCell>
                    <TableCell>
                      <p>Major global stock indices and custom index baskets</p>
                      <p className="text-sm text-muted-foreground mt-1">S&P 500, NASDAQ, Dow Jones, DAX 40, FTSE 100, Nikkei 225, etc.</p>
                    </TableCell>
                    <TableCell className="text-right">0.4-2.0 points</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cryptocurrencies</TableCell>
                    <TableCell>
                      <p>Major digital currencies as CFD products</p>
                      <p className="text-sm text-muted-foreground mt-1">BTC/USD, ETH/USD, LTC/USD, XRP/USD, BCH/USD, etc.</p>
                    </TableCell>
                    <TableCell className="text-right">20-80 points</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/trading/products">
                  View All Trading Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trading Tools */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Advanced Trading Tools</h2>
            <p className="text-lg text-muted-foreground">
              Premium tools to help improve your trading performance
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <BarChart4 className="h-6 w-6" />
                  </div>
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>Track and analyze your trading performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Detailed performance metrics and statistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Win/loss ratio tracking and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Risk-adjusted return calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Detailed trade journals with insights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Real-Time Market Data</CardTitle>
                  <CardDescription>Stay informed with up-to-date information</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Live price feeds with minimal latency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Economic calendar with event notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Market news integration and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Sentiment indicators and market heat maps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Risk Management</CardTitle>
                  <CardDescription>Tools to protect and grow your capital</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Position size calculator with risk parameters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Drawdown alerts and notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Correlation matrix for portfolio diversification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full h-1.5 w-1.5 bg-primary mt-2" />
                      <span>Trading rule violation prevention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spreads & Leverage Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Conditions</h2>
            <p className="text-lg text-muted-foreground">
              Experience institutional-grade trading conditions designed for serious traders
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Competitive Spreads</CardTitle>
                <CardDescription>Trade with minimal cost barriers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between border-b border-border/30 pb-2">
                    <span>EUR/USD</span>
                    <span className="font-medium">From 0.1 pips</span>
                  </li>
                  <li className="flex justify-between border-b border-border/30 pb-2">
                    <span>GBP/USD</span>
                    <span className="font-medium">From 0.3 pips</span>
                  </li>
                  <li className="flex justify-between border-b border-border/30 pb-2">
                    <span>Gold (XAU/USD)</span>
                    <span className="font-medium">From 1.5 pips</span>
                  </li>
                  <li className="flex justify-between border-b border-border/30 pb-2">
                    <span>S&P 500 (US500)</span>
                    <span className="font-medium">From 0.4 points</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bitcoin (BTC/USD)</span>
                    <span className="font-medium">From 20 points</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="border-t border-border/30 pt-4">
                <Button variant="link" className="px-0" asChild>
                  <Link href="/trading/spreads-leverage">
                    View Complete Spread Table
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Flexible Leverage</CardTitle>
                <CardDescription>Customize your capital efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between border-b border-border/30 pb-2">
                    <span>Forex Major Pairs</span>
                    <span className="font-medium">Up to 1:100</span>
                  </li>
                  <li className="flex justify-between border-b border-border/30 pb-2">
                    <span>Forex Minor Pairs</span>
                    <span className="font-medium">Up to 1:50</span>
                  </li>
                  <li className="flex justify-between border-b border-border/30 pb-2">
                    <span>Gold & Silver</span>
                    <span className="font-medium">Up to 1:50</span>
                  </li>
                  <li className="flex justify-between border-b border-border/30 pb-2">
                    <span>Indices</span>
                    <span className="font-medium">Up to 1:20</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cryptocurrencies</span>
                    <span className="font-medium">Up to 1:5</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="border-t border-border/30 pt-4">
                <Button variant="link" className="px-0" asChild>
                  <Link href="/trading/spreads-leverage">
                    Learn More About Leverage
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Support Banner */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border/50 rounded-lg p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <HelpCircle className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Need Help Getting Started?</h3>
                <p className="text-muted-foreground mb-4">
                  Our support team is available 24/5 to help you with platform setup, technical issues, or questions about your account.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <Link href="/about/contact">
                      Contact Support
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/faq">
                      View FAQ
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}