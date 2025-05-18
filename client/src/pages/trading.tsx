import { Link } from "wouter";
import { 
  Activity, 
  BarChart3, 
  Binary, 
  ChevronRight, 
  Clock, 
  Coins, 
  Globe, 
  Laptop, 
  LineChart, 
  BarChart, 
  PieChart, 
  Server, 
  Shield,
  Terminal,
  Timer,
  Wallet
} from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TradingPage() {
  // Trading instruments
  const forexPairs = [
    { symbol: "EUR/USD", description: "Euro / US Dollar", spread: "0.1 pips", commission: "0", margin: "3.33%" },
    { symbol: "GBP/USD", description: "British Pound / US Dollar", spread: "0.2 pips", commission: "0", margin: "3.33%" },
    { symbol: "USD/JPY", description: "US Dollar / Japanese Yen", spread: "0.3 pips", commission: "0", margin: "3.33%" },
    { symbol: "USD/CHF", description: "US Dollar / Swiss Franc", spread: "0.4 pips", commission: "0", margin: "3.33%" },
    { symbol: "AUD/USD", description: "Australian Dollar / US Dollar", spread: "0.3 pips", commission: "0", margin: "3.33%" },
    { symbol: "EUR/GBP", description: "Euro / British Pound", spread: "0.5 pips", commission: "0", margin: "3.33%" },
    { symbol: "USD/CAD", description: "US Dollar / Canadian Dollar", spread: "0.5 pips", commission: "0", margin: "3.33%" },
    { symbol: "NZD/USD", description: "New Zealand Dollar / US Dollar", spread: "0.6 pips", commission: "0", margin: "3.33%" }
  ];

  const indices = [
    { symbol: "US30", description: "Dow Jones Industrial Average", spread: "1.0 point", commission: "0", margin: "5%" },
    { symbol: "SPX500", description: "S&P 500 Index", spread: "0.4 point", commission: "0", margin: "5%" },
    { symbol: "NASDAQ", description: "Nasdaq 100 Index", spread: "1.0 point", commission: "0", margin: "5%" },
    { symbol: "GER40", description: "German DAX Index", spread: "1.0 point", commission: "0", margin: "5%" },
    { symbol: "UK100", description: "FTSE 100 Index", spread: "1.0 point", commission: "0", margin: "5%" },
    { symbol: "JPN225", description: "Japan Nikkei 225 Index", spread: "5.0 points", commission: "0", margin: "5%" }
  ];

  const cryptos = [
    { symbol: "BTC/USD", description: "Bitcoin / US Dollar", spread: "25 pips", commission: "0", margin: "10%" },
    { symbol: "ETH/USD", description: "Ethereum / US Dollar", spread: "15 pips", commission: "0", margin: "10%" },
    { symbol: "LTC/USD", description: "Litecoin / US Dollar", spread: "20 pips", commission: "0", margin: "10%" },
    { symbol: "XRP/USD", description: "Ripple / US Dollar", spread: "10 pips", commission: "0", margin: "10%" }
  ];

  const commodities = [
    { symbol: "GOLD", description: "Gold", spread: "0.3 pips", commission: "0", margin: "5%" },
    { symbol: "SILVER", description: "Silver", spread: "1.0 pips", commission: "0", margin: "5%" },
    { symbol: "OIL", description: "Crude Oil", spread: "3.0 pips", commission: "0", margin: "5%" },
    { symbol: "NATGAS", description: "Natural Gas", spread: "3.0 pips", commission: "0", margin: "5%" }
  ];
  
  // Trading platforms
  const tradingPlatforms = [
    {
      name: "MetaTrader 5",
      description: "Industry-leading platform with advanced charting and automated trading capabilities",
      features: [
        "Advanced charting with 38+ technical indicators",
        "Multiple order types including stop loss and take profit",
        "Automated trading with Expert Advisors (EAs)",
        "Hedging and netting account types supported",
        "Market depth and time & sales data"
      ],
      devices: ["Windows", "Mac", "Web", "iOS", "Android"]
    },
    {
      name: "MetaTrader 4",
      description: "Classic trading platform trusted by millions of traders worldwide",
      features: [
        "30+ built-in technical indicators",
        "Multiple chart types and timeframes",
        "MQL4 programming language for custom indicators",
        "One-click trading functionality",
        "Real-time quotes and customizable interface"
      ],
      devices: ["Windows", "Mac", "Web", "iOS", "Android"]
    },
    {
      name: "cTrader",
      description: "Modern trading platform with advanced order execution and depth of market",
      features: [
        "Level II pricing with depth of market",
        "Advanced order types and execution",
        "cBots for automated trading strategies",
        "Detailed performance analytics",
        "Copy trading functionality"
      ],
      devices: ["Windows", "Web", "iOS", "Android"]
    }
  ];
  
  // Trading tools
  const tradingTools = [
    {
      name: "Economic Calendar",
      description: "Stay updated with major economic events and announcements that impact the markets",
      icon: <Clock className="h-10 w-10 text-primary" />
    },
    {
      name: "Trade Calculator",
      description: "Calculate position sizes, margins, pip values, and potential profit/loss for your trades",
      icon: <Binary className="h-10 w-10 text-primary" />
    },
    {
      name: "Correlation Matrix",
      description: "Visualize correlations between different trading instruments to diversify your portfolio",
      icon: <PieChart className="h-10 w-10 text-primary" />
    },
    {
      name: "Trading Signals",
      description: "Receive expert trading signals and ideas for potential market opportunities",
      icon: <BarChart className="h-10 w-10 text-primary" />
    },
    {
      name: "Market Sentiment",
      description: "View real-time market sentiment data to gauge trader positioning across instruments",
      icon: <BarChart3 className="h-10 w-10 text-primary" />
    },
    {
      name: "Risk Management Tool",
      description: "Plan and manage your risk parameters across multiple positions and accounts",
      icon: <Shield className="h-10 w-10 text-primary" />
    }
  ];
  
  // Trading session times
  const tradingSessions = [
    {
      name: "Sydney",
      hours: "9:00 PM - 6:00 AM GMT (10:00 PM - 7:00 AM BST)",
      description: "Opening of the trading week, lower volatility but important for Asian markets",
      currencies: ["AUD/USD", "NZD/USD", "USD/JPY", "AUD/JPY"]
    },
    {
      name: "Tokyo",
      hours: "12:00 AM - 9:00 AM GMT (1:00 AM - 10:00 AM BST)",
      description: "Major Asian session with significant liquidity for JPY, AUD, and NZD pairs",
      currencies: ["USD/JPY", "EUR/JPY", "GBP/JPY", "AUD/JPY"]
    },
    {
      name: "London",
      hours: "7:00 AM - 4:00 PM GMT (8:00 AM - 5:00 PM BST)",
      description: "Most active session accounting for approximately 35% of all forex trades",
      currencies: ["GBP/USD", "EUR/GBP", "EUR/USD", "USD/CHF"]
    },
    {
      name: "New York",
      hours: "12:00 PM - 9:00 PM GMT (1:00 PM - 10:00 PM BST)",
      description: "Second most active session, overlap with London creates highest volatility",
      currencies: ["EUR/USD", "USD/CAD", "USD/JPY", "GBP/USD"]
    }
  ];

  return (
    <PageTemplate title="Trading" description="Access a wide range of markets with professional trading conditions and state-of-the-art platforms">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Trading at TradeFunded
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Access a wide range of markets with professional trading conditions and state-of-the-art platforms
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link to="/challenges">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Instruments */}
      <section className="w-full py-12 md:py-24 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Instruments</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Access a comprehensive range of financial markets with competitive trading conditions
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="forex" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="forex">Forex</TabsTrigger>
              <TabsTrigger value="indices">Indices</TabsTrigger>
              <TabsTrigger value="crypto">Cryptocurrencies</TabsTrigger>
              <TabsTrigger value="commodities">Commodities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="forex">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Forex Pairs</CardTitle>
                      <CardDescription>Trade major, minor, and exotic currency pairs with tight spreads</CardDescription>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">48+ Pairs</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Spread From</TableHead>
                          <TableHead>Commission</TableHead>
                          <TableHead>Margin Requirement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {forexPairs.map((pair) => (
                          <TableRow key={pair.symbol}>
                            <TableCell className="font-medium">{pair.symbol}</TableCell>
                            <TableCell>{pair.description}</TableCell>
                            <TableCell>{pair.spread}</TableCell>
                            <TableCell>{pair.commission}</TableCell>
                            <TableCell>{pair.margin}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>* Spreads may vary depending on market conditions and liquidity</p>
                    <p>* Trading hours: 24/5, Sunday 22:00 - Friday 22:00 (GMT)</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">30+ additional minor and exotic pairs available</p>
                  <Link to="/trading/instruments">
                    <Button variant="outline" size="sm">
                      View All Forex Pairs
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="indices">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Global Indices</CardTitle>
                      <CardDescription>Trade the world's major stock market indices</CardDescription>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">20+ Indices</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Spread From</TableHead>
                          <TableHead>Commission</TableHead>
                          <TableHead>Margin Requirement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {indices.map((index) => (
                          <TableRow key={index.symbol}>
                            <TableCell className="font-medium">{index.symbol}</TableCell>
                            <TableCell>{index.description}</TableCell>
                            <TableCell>{index.spread}</TableCell>
                            <TableCell>{index.commission}</TableCell>
                            <TableCell>{index.margin}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>* Additional indices include FTSE China 50, India 50, HK50, and more</p>
                    <p>* Trading hours vary according to the operating hours of the respective exchanges</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Cash and Futures indices available</p>
                  <Link to="/trading/instruments">
                    <Button variant="outline" size="sm">
                      View All Indices
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="crypto">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Cryptocurrencies</CardTitle>
                      <CardDescription>Trade the leading digital currencies against USD and other major currencies</CardDescription>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">15+ Cryptos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Spread From</TableHead>
                          <TableHead>Commission</TableHead>
                          <TableHead>Margin Requirement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cryptos.map((crypto) => (
                          <TableRow key={crypto.symbol}>
                            <TableCell className="font-medium">{crypto.symbol}</TableCell>
                            <TableCell>{crypto.description}</TableCell>
                            <TableCell>{crypto.spread}</TableCell>
                            <TableCell>{crypto.commission}</TableCell>
                            <TableCell>{crypto.margin}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>* Additional cryptocurrencies include DOGE, SOL, DOT, and more</p>
                    <p>* Trading hours: 24/7 including weekends and holidays</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Trade on rising or falling prices with CFDs</p>
                  <Link to="/trading/instruments">
                    <Button variant="outline" size="sm">
                      View All Cryptocurrencies
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="commodities">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Commodities</CardTitle>
                      <CardDescription>Trade precious metals, energies, and agricultural products</CardDescription>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">10+ Commodities</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Symbol</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Spread From</TableHead>
                          <TableHead>Commission</TableHead>
                          <TableHead>Margin Requirement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {commodities.map((commodity) => (
                          <TableRow key={commodity.symbol}>
                            <TableCell className="font-medium">{commodity.symbol}</TableCell>
                            <TableCell>{commodity.description}</TableCell>
                            <TableCell>{commodity.spread}</TableCell>
                            <TableCell>{commodity.commission}</TableCell>
                            <TableCell>{commodity.margin}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>* Additional commodities include Copper, Coffee, Sugar, and more</p>
                    <p>* Trading hours vary according to the specific commodity and exchange</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Spot and futures commodities available</p>
                  <Link to="/trading/instruments">
                    <Button variant="outline" size="sm">
                      View All Commodities
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Trading Platforms */}
      <section className="w-full py-12 md:py-24 bg-accent/10 border-t border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Platforms</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Choose from industry-leading platforms with powerful features and advanced tools
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradingPlatforms.map((platform) => (
              <Card key={platform.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium mt-4 mb-2">Available On:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.devices.map((device) => (
                      <Badge key={device} variant="outline">{device}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Download {platform.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trading Tools */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Tools</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Access powerful tools to enhance your trading strategy and decision-making
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingTools.map((tool) => (
              <Card key={tool.name} className="flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {tool.icon}
                    </div>
                    <div>
                      <CardTitle>{tool.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Access Tool
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trading Sessions */}
      <section className="w-full py-12 md:py-24 bg-accent/10 border-t border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Sessions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Understand the global trading sessions and their characteristics
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradingSessions.map((session) => (
              <Card key={session.name} className="flex flex-col h-full">
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="outline" className="mb-2">{session.name}</Badge>
                  </div>
                  <CardTitle className="text-xl">{session.hours}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground mb-4">{session.description}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Most active pairs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {session.currencies.map((currency) => (
                        <Badge key={currency} variant="secondary">{currency}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Trading?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Take on our challenge, prove your skills, and get funded with accounts up to $200,000
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/challenges">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Take the Challenge
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}