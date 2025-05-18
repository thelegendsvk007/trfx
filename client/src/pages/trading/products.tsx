import { Link } from "wouter";
import { ArrowRight, Check, ChevronsUpDown, DollarSign, BarChart4, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTemplate from "@/components/page-template";

export default function TradingProductsPage() {
  return (
    <PageTemplate
      title="TRFX - Trading Products"
      description="Explore our wide range of trading instruments including forex pairs, indices, commodities, and cryptocurrencies."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access a diverse range of global markets with competitive spreads
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/signup">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <Tabs defaultValue="forex" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="forex" className="px-6">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Forex
                </TabsTrigger>
                <TabsTrigger value="indices" className="px-6">
                  <BarChart4 className="mr-2 h-4 w-4" />
                  Indices
                </TabsTrigger>
                <TabsTrigger value="commodities" className="px-6">
                  <Globe className="mr-2 h-4 w-4" />
                  Commodities
                </TabsTrigger>
                <TabsTrigger value="crypto" className="px-6">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2v-2zm0-8h2v6h-2V6z" fill="currentColor"/>
                  </svg>
                  Crypto
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Forex Tab */}
            <TabsContent value="forex">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">Forex Pairs</h2>
                    <p className="text-muted-foreground mb-6">
                      Trade major, minor, and exotic currency pairs with tight spreads and fast execution. Our forex offering includes 50+ currency pairs across all major global regions.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Competitive Spreads</p>
                          <p className="text-sm text-muted-foreground">Starting from 0.5 pips on major pairs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">24/5 Market Access</p>
                          <p className="text-sm text-muted-foreground">Trade from Sunday evening to Friday evening</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Major, Minor & Exotic Pairs</p>
                          <p className="text-sm text-muted-foreground">50+ currency pairs available</p>
                        </div>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/challenges">
                        View Forex Challenges
                      </Link>
                    </Button>
                  </div>
                  
                  <Card className="w-full md:w-2/5 border border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Popular Forex Pairs</CardTitle>
                      <CardDescription>Most traded currency pairs with competitive spreads</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead>Symbol</TableHead>
                            <TableHead className="text-right">Spread from</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">EUR/USD</TableCell>
                            <TableCell className="text-right">0.5 pips</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">GBP/USD</TableCell>
                            <TableCell className="text-right">0.8 pips</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">USD/JPY</TableCell>
                            <TableCell className="text-right">0.6 pips</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">USD/CHF</TableCell>
                            <TableCell className="text-right">0.9 pips</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">AUD/USD</TableCell>
                            <TableCell className="text-right">0.8 pips</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">EUR/GBP</TableCell>
                            <TableCell className="text-right">0.9 pips</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="bg-muted/20 px-6 py-3">
                      <p className="text-xs text-muted-foreground">
                        Spreads shown are indicative and may vary based on market conditions.
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Indices Tab */}
            <TabsContent value="indices">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">Global Indices</h2>
                    <p className="text-muted-foreground mb-6">
                      Trade the world's most popular stock indices including US30, S&P 500, NASDAQ, and other major global markets with tight spreads and low commissions.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Major Global Indices</p>
                          <p className="text-sm text-muted-foreground">US, European, and Asian markets</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Extended Hours Trading</p>
                          <p className="text-sm text-muted-foreground">Access pre-market and after-hours movements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Low Commissions</p>
                          <p className="text-sm text-muted-foreground">Competitive pricing on all index products</p>
                        </div>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/challenges">
                        View Index Challenges
                      </Link>
                    </Button>
                  </div>
                  
                  <Card className="w-full md:w-2/5 border border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Popular Indices</CardTitle>
                      <CardDescription>Major stock index markets around the world</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead>Symbol</TableHead>
                            <TableHead className="text-right">Spread from</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">US30 (Dow Jones)</TableCell>
                            <TableCell className="text-right">1.5 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">SPX500 (S&P 500)</TableCell>
                            <TableCell className="text-right">0.9 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">NASDAQ</TableCell>
                            <TableCell className="text-right">1.0 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">GER40 (DAX)</TableCell>
                            <TableCell className="text-right">1.2 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">UK100 (FTSE)</TableCell>
                            <TableCell className="text-right">1.0 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">JPN225 (Nikkei)</TableCell>
                            <TableCell className="text-right">5.0 points</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="bg-muted/20 px-6 py-3">
                      <p className="text-xs text-muted-foreground">
                        Spreads shown are indicative and may vary based on market conditions.
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Commodities Tab */}
            <TabsContent value="commodities">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">Commodities</h2>
                    <p className="text-muted-foreground mb-6">
                      Trade a diverse range of commodities including precious metals, energy products, and agricultural commodities. Gain exposure to these essential markets with competitive spreads.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Precious Metals</p>
                          <p className="text-sm text-muted-foreground">Gold, Silver, Platinum, Palladium</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Energy Products</p>
                          <p className="text-sm text-muted-foreground">Crude Oil, Brent Oil, Natural Gas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Agricultural Commodities</p>
                          <p className="text-sm text-muted-foreground">Coffee, Sugar, Wheat, Cotton</p>
                        </div>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/challenges">
                        View Commodity Challenges
                      </Link>
                    </Button>
                  </div>
                  
                  <Card className="w-full md:w-2/5 border border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Popular Commodities</CardTitle>
                      <CardDescription>Most traded commodity markets</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead>Symbol</TableHead>
                            <TableHead className="text-right">Spread from</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">XAUUSD (Gold)</TableCell>
                            <TableCell className="text-right">25 cents</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">XAGUSD (Silver)</TableCell>
                            <TableCell className="text-right">2.0 cents</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">OIL.WTI (Crude Oil)</TableCell>
                            <TableCell className="text-right">3.0 cents</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">OIL.BRENT (Brent)</TableCell>
                            <TableCell className="text-right">3.5 cents</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">NATGAS (Natural Gas)</TableCell>
                            <TableCell className="text-right">0.0035 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">COPPER</TableCell>
                            <TableCell className="text-right">0.0003 points</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="bg-muted/20 px-6 py-3">
                      <p className="text-xs text-muted-foreground">
                        Spreads shown are indicative and may vary based on market conditions.
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Crypto Tab */}
            <TabsContent value="crypto">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">Cryptocurrencies</h2>
                    <p className="text-muted-foreground mb-6">
                      Trade the most popular cryptocurrencies against USD and other major currencies. Access Bitcoin, Ethereum, and other leading digital assets with competitive pricing.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Major Cryptocurrencies</p>
                          <p className="text-sm text-muted-foreground">Bitcoin, Ethereum, and other leading tokens</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Cryptocurrency Crosses</p>
                          <p className="text-sm text-muted-foreground">Crypto vs USD and other major currencies</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Competitive Pricing</p>
                          <p className="text-sm text-muted-foreground">Trade crypto with low spreads</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-md border border-border/50 mb-6">
                      <p className="text-sm text-muted-foreground">
                        <strong>Important Note:</strong> While crypto markets are available 24/7, our funding program requires all positions to be closed before weekend market closure on Friday.
                      </p>
                    </div>
                    <Button asChild>
                      <Link href="/challenges">
                        View Crypto Challenges
                      </Link>
                    </Button>
                  </div>
                  
                  <Card className="w-full md:w-2/5 border border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Popular Cryptocurrencies</CardTitle>
                      <CardDescription>Major cryptocurrencies available for trading</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead>Symbol</TableHead>
                            <TableHead className="text-right">Spread from</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">BTC/USD (Bitcoin)</TableCell>
                            <TableCell className="text-right">30.0 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">ETH/USD (Ethereum)</TableCell>
                            <TableCell className="text-right">2.5 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">XRP/USD (Ripple)</TableCell>
                            <TableCell className="text-right">0.002 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">LTC/USD (Litecoin)</TableCell>
                            <TableCell className="text-right">0.12 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">BCH/USD (Bitcoin Cash)</TableCell>
                            <TableCell className="text-right">1.5 points</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">ADA/USD (Cardano)</TableCell>
                            <TableCell className="text-right">0.003 points</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="bg-muted/20 px-6 py-3">
                      <p className="text-xs text-muted-foreground">
                        Spreads shown are indicative and may vary based on market conditions.
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Trading Instruments Count */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Comprehensive Market Access
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <Card className="border border-border/50 bg-card/50">
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                  <div className="text-lg font-medium">Forex Pairs</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Major, minor, and exotic currency pairs
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50 bg-card/50">
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
                  <div className="text-lg font-medium">Global Indices</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Major stock indices worldwide
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50 bg-card/50">
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                  <div className="text-lg font-medium">Commodities</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Precious metals, energy, and more
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50 bg-card/50">
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                  <div className="text-lg font-medium">Cryptocurrencies</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Major digital assets and tokens
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trading Hours */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Hours</h2>
            <p className="text-lg text-muted-foreground">
              Our trading hours follow standard market timing for each instrument category
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Market</TableHead>
                      <TableHead>Trading Hours (GMT)</TableHead>
                      <TableHead className="text-right">Weekly Schedule</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Forex</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>Sunday 22:00 - Friday 22:00</p>
                          <p className="text-xs text-muted-foreground">24/5 continuous trading</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">5 days</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Indices</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>Varies by exchange (US, EU, Asia)</p>
                          <p className="text-xs text-muted-foreground">Extended hours available for most indices</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">5 days</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Commodities</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>Metals: 24/5 (Sunday 22:00 - Friday 22:00)</p>
                          <p>Energy: Based on exchange hours</p>
                          <p className="text-xs text-muted-foreground">Some gaps may occur during session changes</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">5 days</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cryptocurrencies</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>24/7 markets</p>
                          <p className="text-xs text-muted-foreground text-rose-500">Note: Positions must be closed by Friday 22:00 GMT for TRFX accounts</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">7 days*</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-muted/20 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  * While cryptocurrency markets are available 24/7, please note that all TRFX trading accounts require positions to be closed before weekend market closure on Friday at 22:00 GMT. Any open positions will be automatically closed at market price.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
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