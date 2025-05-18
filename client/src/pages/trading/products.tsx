import React from "react";
import { ArrowRight, DollarSign, LineChart, Globe, TrendingUp, Info } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TradingProductsPage() {
  return (
    <PageTemplate
      title="TRFX - Trading Products"
      description="Explore the range of trading instruments available on TRFX including forex and gold."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the range of markets and instruments available for trading
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <a href="/challenges/compare">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Forex Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Forex Trading</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Trade the world's largest financial market with tight spreads and exceptional execution.
                </p>
                
                <div className="space-y-5">
                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3">Major Forex Pairs</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="font-medium">EUR/USD</span>
                        <span className="text-sm text-muted-foreground">Spread from 0.1 pips</span>
                      </li>
                      <Separator />
                      <li className="flex items-center justify-between">
                        <span className="font-medium">GBP/USD</span>
                        <span className="text-sm text-muted-foreground">Spread from 0.3 pips</span>
                      </li>
                      <Separator />
                      <li className="flex items-center justify-between">
                        <span className="font-medium">USD/JPY</span>
                        <span className="text-sm text-muted-foreground">Spread from 0.3 pips</span>
                      </li>
                      <Separator />
                      <li className="flex items-center justify-between">
                        <span className="font-medium">AUD/USD</span>
                        <span className="text-sm text-muted-foreground">Spread from 0.4 pips</span>
                      </li>
                      <Separator />
                      <li className="flex items-center justify-between">
                        <span className="font-medium">USD/CHF</span>
                        <span className="text-sm text-muted-foreground">Spread from 0.4 pips</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3">Cross Currency Pairs</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="font-medium">EUR/GBP</span>
                        <span className="text-sm text-muted-foreground">Spread from 0.5 pips</span>
                      </li>
                      <Separator />
                      <li className="flex items-center justify-between">
                        <span className="font-medium">EUR/JPY</span>
                        <span className="text-sm text-muted-foreground">Spread from 0.7 pips</span>
                      </li>
                      <Separator />
                      <li className="flex items-center justify-between">
                        <span className="font-medium">GBP/JPY</span>
                        <span className="text-sm text-muted-foreground">Spread from 0.8 pips</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle>Forex Trading Benefits</CardTitle>
                    <CardDescription>
                      Trade the world's largest financial market with over $6 trillion daily volume
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                          <DollarSign className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Competitive Spreads</p>
                          <p className="text-sm text-muted-foreground">
                            Trade major forex pairs with spreads starting from just 0.1 pips, providing exceptional value for active traders.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                          <TrendingUp className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Flexible Leverage</p>
                          <p className="text-sm text-muted-foreground">
                            Access up to 1:100 leverage on forex pairs in our challenge accounts, allowing you to maximize your position sizing.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                          <LineChart className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Advanced Execution</p>
                          <p className="text-sm text-muted-foreground">
                            Benefit from lightning-fast execution with no requotes and minimal slippage on market orders.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                          <Globe className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">24/5 Market Access</p>
                          <p className="text-sm text-muted-foreground">
                            Trade forex around the clock during market hours, from Sunday evening through Friday afternoon.
                          </p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-6 bg-muted/40 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <p className="text-sm">
                          TRFX offers over 45 forex pairs with competitive trading conditions. All pairs are available for trading in both challenge and funded accounts.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Trading Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Gold Trading (XAU/USD)</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trade the world's most prestigious precious metal with exceptional conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle>Gold Trading Features</CardTitle>
                  <CardDescription>
                    Trade gold (XAU/USD) with competitive trading conditions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">Symbol</span>
                      <span>XAUUSD (Gold)</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">Trading Hours</span>
                      <span>23:00 Sun - 22:00 Fri</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">Min. Spread</span>
                      <span>From 0.3 points</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">Contract Size</span>
                      <span>100 oz.</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">Min. Volume</span>
                      <span>0.01 lot</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Max. Leverage</span>
                      <span>1:50</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-muted/40 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <p className="text-sm">
                        Gold offers excellent liquidity and volatility, making it ideal for traders looking to diversify beyond currency pairs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle>Why Trade Gold with TRFX</CardTitle>
                  <CardDescription>
                    Benefits of trading gold on our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <DollarSign className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Safe-Haven Asset</p>
                        <p className="text-sm text-muted-foreground">
                          Gold serves as a traditional safe-haven asset, often moving inversely to stock markets during economic uncertainty.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <LineChart className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">High Liquidity</p>
                        <p className="text-sm text-muted-foreground">
                          Benefit from high liquidity in gold markets, allowing for easy entry and exit of positions even during volatile periods.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Trading Opportunities</p>
                        <p className="text-sm text-muted-foreground">
                          Gold provides excellent trading opportunities around key economic releases, inflation data, and central bank announcements.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <Globe className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Portfolio Diversification</p>
                        <p className="text-sm text-muted-foreground">
                          Add gold to your trading portfolio to diversify risk and reduce overall exposure to currency fluctuations.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Trading?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take on a TRFX challenge and prove your trading skills with our diverse range of instruments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <a href="/challenges/compare">
                  Explore Challenge Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="/trading/platform">
                  Learn About Our Platform
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}