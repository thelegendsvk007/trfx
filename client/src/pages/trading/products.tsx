import React from "react";
import { ArrowRight } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
              <a href="/challenges/compare">Start Trading Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Forex Trading */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Forex Trading</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Major Forex Pairs</CardTitle>
                  <CardDescription>
                    Trade the most popular forex currency pairs with tight spreads
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">EUR/USD</span>
                      <span>Spread from 0.1 pips</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">GBP/USD</span>
                      <span>Spread from 0.3 pips</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">USD/JPY</span>
                      <span>Spread from 0.3 pips</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">AUD/USD</span>
                      <span>Spread from 0.4 pips</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">USD/CHF</span>
                      <span>Spread from 0.4 pips</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Forex Trading Features</CardTitle>
                  <CardDescription>
                    Benefits of trading forex with TRFX
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Competitive Spreads</h3>
                      <p className="text-sm text-muted-foreground">
                        Trade major pairs with spreads starting from just 0.1 pips
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Flexible Leverage</h3>
                      <p className="text-sm text-muted-foreground">
                        Access up to 1:100 leverage on forex pairs
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Advanced Execution</h3>
                      <p className="text-sm text-muted-foreground">
                        Benefit from lightning-fast execution with no requotes
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">24/5 Market Access</h3>
                      <p className="text-sm text-muted-foreground">
                        Trade around the clock from Sunday evening through Friday
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Trading */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Gold Trading (XAU/USD)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Gold Trading Features</CardTitle>
                  <CardDescription>
                    Trade gold with competitive conditions
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
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Max. Leverage</span>
                      <span>1:50</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Why Trade Gold</CardTitle>
                  <CardDescription>
                    Benefits of trading gold on our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Safe-Haven Asset</h3>
                      <p className="text-sm text-muted-foreground">
                        Gold often moves inversely to stock markets during economic uncertainty
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">High Liquidity</h3>
                      <p className="text-sm text-muted-foreground">
                        Easily enter and exit positions even during volatile periods
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Trading Opportunities</h3>
                      <p className="text-sm text-muted-foreground">
                        Great opportunities around economic releases and central bank announcements
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Portfolio Diversification</h3>
                      <p className="text-sm text-muted-foreground">
                        Diversify risk and reduce exposure to currency fluctuations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Commodities */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Commodities Trading</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Available Commodities</CardTitle>
                  <CardDescription>
                    Trade a variety of commodities with competitive spreads
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">XAGUSD (Silver)</span>
                      <span>Spread from 0.4 points</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">USOIL (WTI Oil)</span>
                      <span>Spread from 0.3 points</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/40">
                      <span className="font-medium">UKOIL (Brent Oil)</span>
                      <span>Spread from 0.3 points</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">NGAS (Natural Gas)</span>
                      <span>Spread from 0.5 points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Why Trade Commodities</CardTitle>
                  <CardDescription>
                    Benefits of trading commodities on TRFX
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Diversification</h3>
                      <p className="text-sm text-muted-foreground">
                        Commodities often move independently of stock markets, providing diversification
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Inflation Hedge</h3>
                      <p className="text-sm text-muted-foreground">
                        Commodities like gold and silver can provide protection against inflation
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Global Market Events</h3>
                      <p className="text-sm text-muted-foreground">
                        Take advantage of price movements triggered by global events and supply-demand changes
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">24-Hour Trading</h3>
                      <p className="text-sm text-muted-foreground">
                        Access commodity markets around the clock for trading opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Platforms */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Trading Platforms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>MetaTrader 5</CardTitle>
                  <CardDescription>
                    The world's most popular professional trading platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Advanced Charting</h3>
                      <p className="text-sm text-muted-foreground">
                        Access 38 built-in technical indicators, 44 analytical objects, and multiple timeframes
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Expert Advisors (EAs)</h3>
                      <p className="text-sm text-muted-foreground">
                        Automate your trading with custom algorithms and trading robots
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Market Depth</h3>
                      <p className="text-sm text-muted-foreground">
                        View real-time bids and asks for precise order placement
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Multi-Device Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Available on desktop (Windows, macOS via emulation) and mobile (iOS, Android)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>WebTrader Platform</CardTitle>
                  <CardDescription>
                    Trade directly from your browser without downloads
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Instant Access</h3>
                      <p className="text-sm text-muted-foreground">
                        Trade immediately from any browser with no installation required
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">Interactive Charts</h3>
                      <p className="text-sm text-muted-foreground">
                        Multiple chart types with over 30 popular technical indicators
                      </p>
                    </div>
                    <div className="pb-2 border-b border-border/40">
                      <h3 className="font-medium mb-1">One-Click Trading</h3>
                      <p className="text-sm text-muted-foreground">
                        Execute trades with a single click for lightning-fast entries
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Cross-Platform Compatibility</h3>
                      <p className="text-sm text-muted-foreground">
                        Works on all operating systems including Windows, macOS, and Linux
                      </p>
                    </div>
                  </div>
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
              Take on a TRFX challenge and prove your trading skills
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <a href="/challenges/compare">Explore Challenge Plans</a>
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}