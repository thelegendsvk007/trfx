import { Link } from "wouter";
import { ArrowRight, TrendingUp, Scale, CreditCard, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PageTemplate from "@/components/page-template";

export default function SpreadsLeveragePage() {
  return (
    <PageTemplate
      title="TRFX - Spreads & Leverage"
      description="Learn about the spreads and leverage options available for TRFX funded trading accounts and challenge programs."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Spreads & Leverage
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent trading conditions designed to help you succeed
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Competitive Trading Conditions</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At TRFX, we understand that tight spreads and appropriate leverage are essential for profitable trading. We provide institutional-grade trading conditions across all our funded accounts and challenge programs.
                  </p>
                  <p className="text-muted-foreground">
                    Our spreads are consistently tight across major currency pairs and other instruments, while our leverage options allow for flexibility without encouraging excessive risk-taking.
                  </p>
                  <p className="text-muted-foreground">
                    All our trading conditions are designed to replicate real institutional trading environments, ensuring your strategies can be effectively implemented in both challenge and funded account phases.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-6">Key Advantages</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Tight Spreads</h4>
                      <p className="text-sm text-muted-foreground">
                        Raw institutional spreads with minimal markup, allowing for efficient execution and tighter trade management.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <Scale className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Flexible Leverage</h4>
                      <p className="text-sm text-muted-foreground">
                        Options from 1:10 to 1:100 to accommodate different trading styles while promoting responsible risk management.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">No Trading Commissions</h4>
                      <p className="text-sm text-muted-foreground">
                        Trade without additional per-lot fees, with all costs incorporated into our competitive spreads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spreads */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Competitive Spreads</h2>
            <p className="text-lg text-muted-foreground">
              We offer some of the tightest spreads in the funded trading industry
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Forex Pairs</CardTitle>
                  <CardDescription>
                    Typical average spreads during standard market hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pair</TableHead>
                        <TableHead>Avg. Spread</TableHead>
                        <TableHead>Min. Spread</TableHead>
                        <TableHead>Lot Size</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">EUR/USD</TableCell>
                        <TableCell>0.2 pips</TableCell>
                        <TableCell>0.1 pips</TableCell>
                        <TableCell>100,000 units</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">GBP/USD</TableCell>
                        <TableCell>0.5 pips</TableCell>
                        <TableCell>0.3 pips</TableCell>
                        <TableCell>100,000 units</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">USD/JPY</TableCell>
                        <TableCell>0.4 pips</TableCell>
                        <TableCell>0.2 pips</TableCell>
                        <TableCell>100,000 units</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">USD/CHF</TableCell>
                        <TableCell>0.6 pips</TableCell>
                        <TableCell>0.4 pips</TableCell>
                        <TableCell>100,000 units</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">AUD/USD</TableCell>
                        <TableCell>0.5 pips</TableCell>
                        <TableCell>0.3 pips</TableCell>
                        <TableCell>100,000 units</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">USD/CAD</TableCell>
                        <TableCell>0.7 pips</TableCell>
                        <TableCell>0.5 pips</TableCell>
                        <TableCell>100,000 units</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">NZD/USD</TableCell>
                        <TableCell>0.8 pips</TableCell>
                        <TableCell>0.6 pips</TableCell>
                        <TableCell>100,000 units</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="bg-muted/20 p-4 border-t border-border text-sm text-muted-foreground">
                  <p>
                    Note: Spreads may widen during volatile market conditions, major news events, and outside standard market hours.
                  </p>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Indices & Commodities</CardTitle>
                  <CardDescription>
                    Typical average spreads for popular indices and commodities
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Instrument</TableHead>
                        <TableHead>Avg. Spread</TableHead>
                        <TableHead>Lot Size</TableHead>
                        <TableHead>Margin Requirement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">US30 (Dow Jones)</TableCell>
                        <TableCell>1.8 points</TableCell>
                        <TableCell>1 contract</TableCell>
                        <TableCell>Varies by account</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">SPX500 (S&P 500)</TableCell>
                        <TableCell>0.4 points</TableCell>
                        <TableCell>1 contract</TableCell>
                        <TableCell>Varies by account</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">NAS100 (Nasdaq)</TableCell>
                        <TableCell>1.2 points</TableCell>
                        <TableCell>1 contract</TableCell>
                        <TableCell>Varies by account</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">GER40 (DAX)</TableCell>
                        <TableCell>1.0 points</TableCell>
                        <TableCell>1 contract</TableCell>
                        <TableCell>Varies by account</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XAUUSD (Gold)</TableCell>
                        <TableCell>0.3 points</TableCell>
                        <TableCell>100 oz</TableCell>
                        <TableCell>Varies by account</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XAGUSD (Silver)</TableCell>
                        <TableCell>0.03 points</TableCell>
                        <TableCell>5000 oz</TableCell>
                        <TableCell>Varies by account</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">USOIL (WTI Crude)</TableCell>
                        <TableCell>0.03 points</TableCell>
                        <TableCell>1000 barrels</TableCell>
                        <TableCell>Varies by account</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="bg-muted/20 p-4 border-t border-border text-sm text-muted-foreground">
                  <p>
                    Note: Liquidity for non-forex instruments may vary, particularly outside of primary market hours for the respective exchanges.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leverage Options */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Leverage Options</h2>
            <p className="text-lg text-muted-foreground">
              Tailored leverage choices for different trading styles and risk preferences
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Conservative</CardTitle>
                <CardDescription>1:10 Leverage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our lowest leverage option, designed for conservative traders focusing on long-term position trades with minimal overnight exposure.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Capital Efficiency</span>
                    <span>Low</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "33%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Risk Level</span>
                    <span>Low</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "33%" }}></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/20 border-t border-border pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Best for:</strong> Swing traders and position traders with larger stop losses.
                </p>
              </CardFooter>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Balanced</CardTitle>
                <CardDescription>1:30 Leverage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our recommended leverage for most traders, providing a balance between capital efficiency and risk management.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Capital Efficiency</span>
                    <span>Medium</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "66%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Risk Level</span>
                    <span>Medium</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "66%" }}></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/20 border-t border-border pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Best for:</strong> Day traders and active traders with moderate risk tolerance.
                </p>
              </CardFooter>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Aggressive</CardTitle>
                <CardDescription>1:100 Leverage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our highest leverage option, providing maximum capital efficiency for experienced scalpers and short-term traders.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Capital Efficiency</span>
                    <span>High</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Risk Level</span>
                    <span>High</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/20 border-t border-border pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Best for:</strong> Scalpers and experienced traders with strict risk management.
                </p>
              </CardFooter>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto mt-10">
            <Alert className="bg-amber-500/10 border-amber-500/30 text-amber-500">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Leverage Risk Warning</AlertTitle>
              <AlertDescription className="text-amber-500/90">
                <p className="mt-2">
                  Trading with leverage amplifies both potential profits and losses. Higher leverage increases the risk of rapid account depletion during adverse market movements. Always use appropriate position sizing and risk management when trading with leverage.
                </p>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
      
      {/* Comparison with Retail Brokers */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Institutional vs. Retail Conditions</h2>
            <p className="text-lg text-muted-foreground">
              How TRFX's trading conditions compare to standard retail brokers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead>TRFX Funded Accounts</TableHead>
                      <TableHead>Typical Retail Brokers</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">EUR/USD Spread</TableCell>
                      <TableCell className="text-green-500">0.2 pips average</TableCell>
                      <TableCell>1.0-1.8 pips average</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Commission Structure</TableCell>
                      <TableCell className="text-green-500">No commission</TableCell>
                      <TableCell>Often $7-10 per lot (ECN accounts)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Overnight Swaps</TableCell>
                      <TableCell className="text-green-500">Institutional rates</TableCell>
                      <TableCell>Higher retail rates</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Execution Quality</TableCell>
                      <TableCell className="text-green-500">Direct market access</TableCell>
                      <TableCell>Often with dealer intervention</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Requotes</TableCell>
                      <TableCell className="text-green-500">Minimal to none</TableCell>
                      <TableCell>Common during volatility</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Stop Hunting</TableCell>
                      <TableCell className="text-green-500">No dealer intervention</TableCell>
                      <TableCell>Can occur with market maker brokers</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Trading Restrictions</TableCell>
                      <TableCell>Trading rules apply</TableCell>
                      <TableCell>Fewer restrictions</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                With TRFX, you get access to institutional-grade trading conditions that most retail traders never experience, allowing you to execute your strategies with minimal friction costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Frequently Asked Questions */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our spreads and leverage options
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Can I change my leverage?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can choose your preferred leverage at the start of each challenge or funded account. However, once a challenge or funded account has started, the leverage cannot be changed for that specific account.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Do spreads widen during news?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, spreads may temporarily widen during major economic news releases and periods of unusual market volatility. This is standard practice across all brokers due to reduced market liquidity during these events.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">What about overnight swaps?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All positions held open overnight are subject to swap rates based on the interest rate differential between the two currencies in the pair. Our swap rates are competitive and based on institutional interbank rates.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Are there trading commissions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, TRFX does not charge separate commissions on trades. All costs are incorporated into our competitive spreads, making it easier to calculate your trading costs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer fixed spreads?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No, we offer variable spreads that reflect real market conditions. Fixed spreads are typically wider on average and don't represent true market conditions that institutional traders experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">What's the minimum lot size?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The minimum lot size for forex pairs is 0.01 lots (micro lot), equivalent to 1,000 units of the base currency. For indices and commodities, minimum lot sizes vary by instrument.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Experience Institutional Trading Conditions</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take advantage of our industry-leading spreads and flexible leverage options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  Start Trading Challenge
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works/trading-rules">
                  View Trading Rules
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}