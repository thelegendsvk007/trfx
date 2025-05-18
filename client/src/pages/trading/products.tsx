import React from "react";
import { Link } from "wouter";
import { ArrowRight, Settings, Info, BarChart, CreditCard, LineChart, Sparkles } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function TradingProductsPage() {
  return (
    <PageTemplate
      title="TRFX - Trading Products"
      description="Explore the wide range of trading instruments available on the TRFX platform including forex, commodities, indices, and cryptocurrencies."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Trade a diverse range of financial instruments with competitive conditions
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/challenges">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Products Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
              Our Trading Instruments
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Access global markets with over 170 tradable instruments across multiple asset classes
            </p>
            
            <Tabs defaultValue="forex" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="forex">Forex</TabsTrigger>
                <TabsTrigger value="commodities">Commodities</TabsTrigger>
                <TabsTrigger value="indices">Indices</TabsTrigger>
                <TabsTrigger value="crypto">Cryptocurrencies</TabsTrigger>
              </TabsList>
              
              {/* Forex Tab */}
              <TabsContent value="forex">
                <Card>
                  <CardHeader>
                    <CardTitle>Forex Pairs</CardTitle>
                    <CardDescription>
                      Trade major, minor, and exotic currency pairs with tight spreads starting from 0.1 pips
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Major Pairs</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Symbol</TableHead>
                              <TableHead>Description</TableHead>
                              <TableHead>Min Spread</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>EUR/USD</TableCell>
                              <TableCell>Euro / US Dollar</TableCell>
                              <TableCell>0.1 pips</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>GBP/USD</TableCell>
                              <TableCell>British Pound / US Dollar</TableCell>
                              <TableCell>0.3 pips</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>USD/JPY</TableCell>
                              <TableCell>US Dollar / Japanese Yen</TableCell>
                              <TableCell>0.3 pips</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>USD/CHF</TableCell>
                              <TableCell>US Dollar / Swiss Franc</TableCell>
                              <TableCell>0.4 pips</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>AUD/USD</TableCell>
                              <TableCell>Australian Dollar / US Dollar</TableCell>
                              <TableCell>0.3 pips</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Cross Pairs</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Symbol</TableHead>
                              <TableHead>Description</TableHead>
                              <TableHead>Min Spread</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>EUR/GBP</TableCell>
                              <TableCell>Euro / British Pound</TableCell>
                              <TableCell>0.5 pips</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>EUR/JPY</TableCell>
                              <TableCell>Euro / Japanese Yen</TableCell>
                              <TableCell>0.7 pips</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>GBP/JPY</TableCell>
                              <TableCell>British Pound / Japanese Yen</TableCell>
                              <TableCell>0.8 pips</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>AUD/CAD</TableCell>
                              <TableCell>Australian Dollar / Canadian Dollar</TableCell>
                              <TableCell>0.9 pips</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>NZD/USD</TableCell>
                              <TableCell>New Zealand Dollar / US Dollar</TableCell>
                              <TableCell>0.6 pips</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-muted/40 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <p className="text-sm">
                          TRFX offers over 45 forex pairs with competitive spreads and leverage up to 1:100. All pairs are available 24/5 during market hours. Trading conditions may vary between challenge and funded accounts.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Commodities Tab */}
              <TabsContent value="commodities">
                <Card>
                  <CardHeader>
                    <CardTitle>Commodities</CardTitle>
                    <CardDescription>
                      Trade precious metals, energy products, and agricultural commodities with competitive conditions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Metals & Energy</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Symbol</TableHead>
                              <TableHead>Description</TableHead>
                              <TableHead>Trading Hours</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>XAUUSD</TableCell>
                              <TableCell>Gold / US Dollar</TableCell>
                              <TableCell>23:00 Sun - 22:00 Fri</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>XAGUSD</TableCell>
                              <TableCell>Silver / US Dollar</TableCell>
                              <TableCell>23:00 Sun - 22:00 Fri</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>USOIL</TableCell>
                              <TableCell>US Crude Oil</TableCell>
                              <TableCell>23:00 Sun - 22:00 Fri</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>UKOIL</TableCell>
                              <TableCell>Brent Crude Oil</TableCell>
                              <TableCell>01:00 Mon - 23:00 Fri</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>NGAS</TableCell>
                              <TableCell>Natural Gas</TableCell>
                              <TableCell>23:00 Sun - 22:00 Fri</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Agricultural & Others</h3>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Symbol</TableHead>
                              <TableHead>Description</TableHead>
                              <TableHead>Contract Size</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>CORN</TableCell>
                              <TableCell>Corn Futures</TableCell>
                              <TableCell>1 lot = 50 bushels</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>SOYBEAN</TableCell>
                              <TableCell>Soybean Futures</TableCell>
                              <TableCell>1 lot = 50 bushels</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>WHEAT</TableCell>
                              <TableCell>Wheat Futures</TableCell>
                              <TableCell>1 lot = 50 bushels</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>COTTON</TableCell>
                              <TableCell>Cotton Futures</TableCell>
                              <TableCell>1 lot = 50,000 lbs</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>COFFEE</TableCell>
                              <TableCell>Coffee Futures</TableCell>
                              <TableCell>1 lot = 37,500 lbs</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-muted/40 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <p className="text-sm">
                          Commodity contracts may be subject to increased margin requirements during periods of high volatility or upcoming major economic releases. Please refer to the platform for current trading conditions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Indices Tab */}
              <TabsContent value="indices">
                <Card>
                  <CardHeader>
                    <CardTitle>Global Indices</CardTitle>
                    <CardDescription>
                      Trade major stock indices from the US, Europe, Asia, and beyond
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Region</TableHead>
                          <TableHead>Trading Hours (GMT)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>US30</TableCell>
                          <TableCell>Dow Jones Industrial Average</TableCell>
                          <TableCell>North America</TableCell>
                          <TableCell>00:00 - 23:00 Mon-Fri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>NAS100</TableCell>
                          <TableCell>Nasdaq 100 Index</TableCell>
                          <TableCell>North America</TableCell>
                          <TableCell>00:00 - 23:00 Mon-Fri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>SPX500</TableCell>
                          <TableCell>S&P 500 Index</TableCell>
                          <TableCell>North America</TableCell>
                          <TableCell>00:00 - 23:00 Mon-Fri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>GER40</TableCell>
                          <TableCell>DAX 40 Index</TableCell>
                          <TableCell>Europe</TableCell>
                          <TableCell>08:00 - 22:00 Mon-Fri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>UK100</TableCell>
                          <TableCell>FTSE 100 Index</TableCell>
                          <TableCell>Europe</TableCell>
                          <TableCell>08:00 - 16:30 Mon-Fri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>FRA40</TableCell>
                          <TableCell>CAC 40 Index</TableCell>
                          <TableCell>Europe</TableCell>
                          <TableCell>08:00 - 16:30 Mon-Fri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>JPN225</TableCell>
                          <TableCell>Nikkei 225 Index</TableCell>
                          <TableCell>Asia</TableCell>
                          <TableCell>00:00 - 06:00, 07:00 - 14:00 Mon-Fri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>AUS200</TableCell>
                          <TableCell>ASX 200 Index</TableCell>
                          <TableCell>Asia-Pacific</TableCell>
                          <TableCell>00:00 - 06:00, 07:00 - 14:00 Mon-Fri</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    
                    <div className="mt-6 bg-muted/40 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <p className="text-sm">
                          Index trading hours may vary during daylight saving time changes and holidays. Overnight positions in indices may be subject to additional swap charges. Please refer to the economic calendar for market hours adjustments.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Cryptocurrencies Tab */}
              <TabsContent value="crypto">
                <Card>
                  <CardHeader>
                    <CardTitle>Cryptocurrencies</CardTitle>
                    <CardDescription>
                      Trade the world's leading cryptocurrencies as CFDs with leverage
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Min. Lot Size</TableHead>
                          <TableHead>Max Leverage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>BTCUSD</TableCell>
                          <TableCell>Bitcoin / US Dollar</TableCell>
                          <TableCell>0.01</TableCell>
                          <TableCell>1:5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>ETHUSD</TableCell>
                          <TableCell>Ethereum / US Dollar</TableCell>
                          <TableCell>0.1</TableCell>
                          <TableCell>1:5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>LTCUSD</TableCell>
                          <TableCell>Litecoin / US Dollar</TableCell>
                          <TableCell>0.1</TableCell>
                          <TableCell>1:5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>XRPUSD</TableCell>
                          <TableCell>Ripple / US Dollar</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell>1:5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>BCHUSD</TableCell>
                          <TableCell>Bitcoin Cash / US Dollar</TableCell>
                          <TableCell>0.1</TableCell>
                          <TableCell>1:5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>ADAUSD</TableCell>
                          <TableCell>Cardano / US Dollar</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell>1:5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>DOTUSD</TableCell>
                          <TableCell>Polkadot / US Dollar</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell>1:5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>SOLUSD</TableCell>
                          <TableCell>Solana / US Dollar</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell>1:5</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                      <div className="bg-muted/30 p-5 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <Sparkles className="h-5 w-5 text-primary mr-2" />
                          Benefits of Crypto CFD Trading
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center shrink-0">
                              <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </div>
                            <span>Trade both rising and falling markets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center shrink-0">
                              <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </div>
                            <span>No need for cryptocurrency wallets or exchanges</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center shrink-0">
                              <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </div>
                            <span>Enhanced security without direct exposure to crypto exchanges</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center shrink-0">
                              <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </div>
                            <span>Lower capital requirements through leverage</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/30 p-5 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2 flex items-center">
                          <Info className="h-5 w-5 text-primary mr-2" />
                          Trading Conditions
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center shrink-0">
                              <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </div>
                            <span>Available 24/7, including weekends</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center shrink-0">
                              <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </div>
                            <span>Floating spreads that reflect market conditions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center shrink-0">
                              <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </div>
                            <span>Lower leverage (1:5) to manage volatility risk</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 flex items-center justify-center shrink-0">
                              <span className="block h-1.5 w-1.5 rounded-full bg-primary"></span>
                            </div>
                            <span>Zero commission on all crypto trades</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-muted/40 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <p className="text-sm">
                          Cryptocurrency CFDs are available 24/7, including weekends. Due to the volatile nature of cryptocurrencies, spreads may widen during periods of high market volatility. Reduced leverage is applied to crypto trading compared to other instruments to manage risk.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Trading Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Real-Time Quotes</CardTitle>
                  <CardDescription>
                    Access accurate, real-time price feeds across all instruments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our platform provides institutional-grade price feeds with minimal latency, ensuring you can execute trades at the prices you see on your chart.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <CardTitle>Advanced Execution</CardTitle>
                  <CardDescription>
                    Lightning-fast trade execution with no requotes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experience superior trade execution with average speeds below 100ms. Our system is designed to handle high-frequency trading with no slippage on limit orders.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <CardTitle>Competitive Pricing</CardTitle>
                  <CardDescription>
                    Trade with tight spreads and zero commissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Benefit from institutional-grade pricing with spreads starting from 0.1 pips on major pairs and competitive pricing across all asset classes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trading Education */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
              Trading Education & Resources
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Enhance your trading knowledge and skills with our comprehensive educational resources
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/50 bg-card/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Market Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Access daily market analysis, technical insights, and fundamental news to inform your trading decisions across all asset classes.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/education/market-analysis">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50 bg-card/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <CardTitle>Trading Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Discover proven trading strategies for different market conditions, from day trading techniques to long-term position management.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/education/strategies">
                      Explore Strategies
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50 bg-card/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <CardTitle>Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn essential risk management principles to protect your capital and maximize your potential in the markets.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/education/risk-management">
                      Master Risk
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Trading?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take on a TRFX challenge and prove your trading skills with our diverse range of instruments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges/compare">
                  Explore Challenges
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/trading/spreads-leverage">
                  View Spreads & Leverage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}