import { Link } from "wouter";
import { ArrowRight, Info, Scale, TrendingUp, LineChart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PageTemplate from "@/components/page-template";

export default function SpreadsAndLeveragePage() {
  return (
    <PageTemplate
      title="TRFX - Spreads & Leverage"
      description="Learn about our competitive spreads and flexible leverage options for funded trading accounts at TRFX."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Spreads & Leverage
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent pricing and flexible leverage for all funded accounts
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/challenges">
                View Challenges
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Competitive Trading Conditions</h2>
            <p className="text-lg text-muted-foreground">
              Trade with institutional-grade conditions on all funded accounts
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Scale className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Tight Spreads</CardTitle>
                <CardDescription>Starting from 0.5 pips</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trade with institutional-grade spreads across all our instruments. Our pricing is transparent with no hidden markups or fees on top of the raw spreads.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Flexible Leverage</CardTitle>
                <CardDescription>Up to 1:100 leverage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose the leverage that suits your trading style, from conservative 1:10 up to 1:100 for more aggressive strategies. Customize your risk settings on each trade.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">No Commissions</CardTitle>
                <CardDescription>0% commission trading</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trade with zero commissions on all instruments. Our revenue comes from the small spread markup, providing you with predictable trading costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Spreads Tables */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Detailed Spread Information</h2>
            <p className="text-lg text-muted-foreground">
              Transparent pricing across all instrument categories
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="forex" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="forex">Forex</TabsTrigger>
                  <TabsTrigger value="indices">Indices</TabsTrigger>
                  <TabsTrigger value="commodities">Commodities</TabsTrigger>
                  <TabsTrigger value="crypto">Cryptocurrencies</TabsTrigger>
                </TabsList>
              </div>
              
              {/* Forex Tab */}
              <TabsContent value="forex">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Forex Spreads</CardTitle>
                    <CardDescription>
                      Competitive spreads on major, minor, and exotic currency pairs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead>Pair</TableHead>
                          <TableHead>Minimum Spread</TableHead>
                          <TableHead>Average Spread</TableHead>
                          <TableHead className="text-right">Max Leverage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">EUR/USD</TableCell>
                          <TableCell>0.5 pips</TableCell>
                          <TableCell>0.8 pips</TableCell>
                          <TableCell className="text-right">1:100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">GBP/USD</TableCell>
                          <TableCell>0.8 pips</TableCell>
                          <TableCell>1.1 pips</TableCell>
                          <TableCell className="text-right">1:100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">USD/JPY</TableCell>
                          <TableCell>0.6 pips</TableCell>
                          <TableCell>0.9 pips</TableCell>
                          <TableCell className="text-right">1:100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">USD/CHF</TableCell>
                          <TableCell>0.9 pips</TableCell>
                          <TableCell>1.2 pips</TableCell>
                          <TableCell className="text-right">1:100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">AUD/USD</TableCell>
                          <TableCell>0.8 pips</TableCell>
                          <TableCell>1.1 pips</TableCell>
                          <TableCell className="text-right">1:100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">EUR/GBP</TableCell>
                          <TableCell>0.9 pips</TableCell>
                          <TableCell>1.2 pips</TableCell>
                          <TableCell className="text-right">1:100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">EUR/JPY</TableCell>
                          <TableCell>0.9 pips</TableCell>
                          <TableCell>1.3 pips</TableCell>
                          <TableCell className="text-right">1:100</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">GBP/JPY</TableCell>
                          <TableCell>1.2 pips</TableCell>
                          <TableCell>1.6 pips</TableCell>
                          <TableCell className="text-right">1:100</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="bg-muted/20 px-6 py-3">
                    <p className="text-xs text-muted-foreground">
                      Spreads are variable and subject to market conditions. During high volatility, spreads may widen.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Indices Tab */}
              <TabsContent value="indices">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Indices Spreads</CardTitle>
                    <CardDescription>
                      Competitive spreads on major global indices
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead>Index</TableHead>
                          <TableHead>Minimum Spread</TableHead>
                          <TableHead>Average Spread</TableHead>
                          <TableHead className="text-right">Max Leverage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">US30 (Dow Jones)</TableCell>
                          <TableCell>1.5 points</TableCell>
                          <TableCell>2.0 points</TableCell>
                          <TableCell className="text-right">1:50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">SPX500 (S&P 500)</TableCell>
                          <TableCell>0.9 points</TableCell>
                          <TableCell>1.2 points</TableCell>
                          <TableCell className="text-right">1:50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">NASDAQ</TableCell>
                          <TableCell>1.0 points</TableCell>
                          <TableCell>1.5 points</TableCell>
                          <TableCell className="text-right">1:50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">GER40 (DAX)</TableCell>
                          <TableCell>1.2 points</TableCell>
                          <TableCell>1.6 points</TableCell>
                          <TableCell className="text-right">1:30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">UK100 (FTSE)</TableCell>
                          <TableCell>1.0 points</TableCell>
                          <TableCell>1.5 points</TableCell>
                          <TableCell className="text-right">1:30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">FRA40 (CAC 40)</TableCell>
                          <TableCell>1.3 points</TableCell>
                          <TableCell>1.8 points</TableCell>
                          <TableCell className="text-right">1:30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">JPN225 (Nikkei)</TableCell>
                          <TableCell>5.0 points</TableCell>
                          <TableCell>7.0 points</TableCell>
                          <TableCell className="text-right">1:30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">AUS200 (ASX 200)</TableCell>
                          <TableCell>1.5 points</TableCell>
                          <TableCell>2.0 points</TableCell>
                          <TableCell className="text-right">1:30</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="bg-muted/20 px-6 py-3">
                    <p className="text-xs text-muted-foreground">
                      Spreads are variable and subject to market conditions. During high volatility or outside main market hours, spreads may widen.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Commodities Tab */}
              <TabsContent value="commodities">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Commodities Spreads</CardTitle>
                    <CardDescription>
                      Competitive spreads on metals, energy, and agricultural commodities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead>Commodity</TableHead>
                          <TableHead>Minimum Spread</TableHead>
                          <TableHead>Average Spread</TableHead>
                          <TableHead className="text-right">Max Leverage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">XAUUSD (Gold)</TableCell>
                          <TableCell>25 cents</TableCell>
                          <TableCell>35 cents</TableCell>
                          <TableCell className="text-right">1:50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">XAGUSD (Silver)</TableCell>
                          <TableCell>2.0 cents</TableCell>
                          <TableCell>3.0 cents</TableCell>
                          <TableCell className="text-right">1:50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">XPTUSD (Platinum)</TableCell>
                          <TableCell>35 cents</TableCell>
                          <TableCell>50 cents</TableCell>
                          <TableCell className="text-right">1:40</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">OIL.WTI (Crude Oil)</TableCell>
                          <TableCell>3.0 cents</TableCell>
                          <TableCell>4.0 cents</TableCell>
                          <TableCell className="text-right">1:30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">OIL.BRENT (Brent)</TableCell>
                          <TableCell>3.5 cents</TableCell>
                          <TableCell>4.5 cents</TableCell>
                          <TableCell className="text-right">1:30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">NATGAS (Natural Gas)</TableCell>
                          <TableCell>0.0035 points</TableCell>
                          <TableCell>0.0050 points</TableCell>
                          <TableCell className="text-right">1:20</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">COPPER</TableCell>
                          <TableCell>0.0003 points</TableCell>
                          <TableCell>0.0005 points</TableCell>
                          <TableCell className="text-right">1:20</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="bg-muted/20 px-6 py-3">
                    <p className="text-xs text-muted-foreground">
                      Spreads are variable and subject to market conditions. During rollover periods or high volatility events, spreads may widen significantly.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Crypto Tab */}
              <TabsContent value="crypto">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Cryptocurrency Spreads</CardTitle>
                    <CardDescription>
                      Competitive spreads on major cryptocurrencies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead>Cryptocurrency</TableHead>
                          <TableHead>Minimum Spread</TableHead>
                          <TableHead>Average Spread</TableHead>
                          <TableHead className="text-right">Max Leverage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">BTC/USD (Bitcoin)</TableCell>
                          <TableCell>30.0 points</TableCell>
                          <TableCell>45.0 points</TableCell>
                          <TableCell className="text-right">1:10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">ETH/USD (Ethereum)</TableCell>
                          <TableCell>2.5 points</TableCell>
                          <TableCell>3.5 points</TableCell>
                          <TableCell className="text-right">1:10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">XRP/USD (Ripple)</TableCell>
                          <TableCell>0.002 points</TableCell>
                          <TableCell>0.003 points</TableCell>
                          <TableCell className="text-right">1:10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">LTC/USD (Litecoin)</TableCell>
                          <TableCell>0.12 points</TableCell>
                          <TableCell>0.18 points</TableCell>
                          <TableCell className="text-right">1:10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">BCH/USD (Bitcoin Cash)</TableCell>
                          <TableCell>1.5 points</TableCell>
                          <TableCell>2.2 points</TableCell>
                          <TableCell className="text-right">1:10</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">ADA/USD (Cardano)</TableCell>
                          <TableCell>0.003 points</TableCell>
                          <TableCell>0.005 points</TableCell>
                          <TableCell className="text-right">1:10</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="bg-muted/20 px-6 py-3">
                    <p className="text-xs text-muted-foreground">
                      Cryptocurrency spreads can vary significantly based on market volatility. During high volatility periods, spreads may widen considerably.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Leverage Information */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Understanding Leverage</h2>
            <p className="text-lg text-muted-foreground">
              TRFX offers flexible leverage options to match your trading strategy
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">What is Leverage?</h3>
                <p className="text-muted-foreground mb-4">
                  Leverage allows you to control a larger position with a small amount of capital. For example, with 1:100 leverage, you can control $100,000 in the market with just $1,000 of your trading capital.
                </p>
                <p className="text-muted-foreground">
                  While leverage amplifies potential profits, it also increases risk. We recommend using leverage responsibly and implementing proper risk management techniques.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Leverage by Asset Class</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                    <span>Forex</span>
                    <span className="font-medium">Up to 1:100</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                    <span>Indices</span>
                    <span className="font-medium">Up to 1:50</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                    <span>Commodities</span>
                    <span className="font-medium">Up to 1:50</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                    <span>Cryptocurrencies</span>
                    <span className="font-medium">Up to 1:10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Alert className="bg-muted/30 border-primary/20">
              <Info className="h-4 w-4" />
              <AlertTitle>Important Information about Leverage</AlertTitle>
              <AlertDescription>
                <p className="mb-2">
                  You can adjust your leverage at any time through your trading platform, up to the maximum allowed for each instrument category. Lower leverage reduces risk but requires more capital to open positions.
                </p>
                <p>
                  We recommend new traders start with lower leverage (1:10 to 1:20) until they gain more experience with risk management. Remember that leverage amplifies both profits and losses.
                </p>
              </AlertDescription>
            </Alert>
            
            <div className="border border-border/50 rounded-lg overflow-hidden">
              <div className="bg-muted/20 p-4">
                <h3 className="text-xl font-bold">Leverage and Margin Requirements</h3>
              </div>
              <div className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Leverage</TableHead>
                      <TableHead>Margin Requirement</TableHead>
                      <TableHead>Capital Required for $100,000 Position</TableHead>
                      <TableHead className="text-right">Risk Level</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1:10</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>$10,000</TableCell>
                      <TableCell className="text-right">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-600">Low</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1:20</TableCell>
                      <TableCell>5%</TableCell>
                      <TableCell>$5,000</TableCell>
                      <TableCell className="text-right">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-600">Low</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1:30</TableCell>
                      <TableCell>3.33%</TableCell>
                      <TableCell>$3,333</TableCell>
                      <TableCell className="text-right">
                        <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-600">Medium</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1:50</TableCell>
                      <TableCell>2%</TableCell>
                      <TableCell>$2,000</TableCell>
                      <TableCell className="text-right">
                        <span className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-600">Medium</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1:100</TableCell>
                      <TableCell>1%</TableCell>
                      <TableCell>$1,000</TableCell>
                      <TableCell className="text-right">
                        <span className="px-2 py-1 text-xs rounded-full bg-rose-500/10 text-rose-600">High</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Risk Management */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Risk Management</h2>
            <p className="text-lg text-muted-foreground">
              Tools and strategies to manage risk while trading with leverage
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Stop Loss Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Use stop loss orders to automatically close positions when the market moves against you, limiting potential losses to a predetermined amount.
                </p>
                <p className="text-muted-foreground">
                  We recommend setting stop losses for all positions, especially when trading with high leverage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Scale className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Position Sizing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Adjust your position size based on your risk tolerance. A common rule is to risk no more than 1-2% of your account on any single trade.
                </p>
                <p className="text-muted-foreground">
                  Lower leverage can help maintain appropriate position sizes relative to your account.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Risk/Reward Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Aim for a positive risk/reward ratio, such as 1:2 or 1:3, where potential profit is 2-3 times greater than potential loss on each trade.
                </p>
                <p className="text-muted-foreground">
                  This approach can lead to overall profitability even with a win rate below 50%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Trading?</h2>
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
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}