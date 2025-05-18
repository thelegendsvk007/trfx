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
import { MainNav } from "@/components/main-nav";
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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>

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
              <Link href="/challenges">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/how-it-works">
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
                  <Link href="/trading/instruments">
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
                  <Link href="/trading/instruments">
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
                    <p>* All crypto positions are CFDs and do not involve owning the underlying asset</p>
                    <p>* Trading hours: 24/7 with scheduled maintenance periods</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Additional altcoins and crypto crosses available</p>
                  <Link href="/trading/instruments">
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
                      <CardDescription>Trade precious metals, energy products, and agricultural commodities</CardDescription>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">12+ Commodities</Badge>
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
                    <p>* Additional commodities include Coffee, Wheat, Corn, Cotton, and more</p>
                    <p>* Trading hours vary based on the respective commodity exchanges</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Spot and Futures contracts available</p>
                  <Link href="/trading/instruments">
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
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Platforms</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Choose from industry-leading platforms with advanced features and seamless execution
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradingPlatforms.map((platform) => (
              <Card key={platform.name} className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{platform.name}</CardTitle>
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Laptop className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {platform.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Available On</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.devices.map((device) => (
                        <Badge key={device} variant="outline" className="border-primary/20">
                          {device}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/trading/platforms/${platform.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/trading/platforms">
              <Button variant="outline">
                Compare All Platforms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trading Tools */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Tools & Resources</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Enhance your trading with our suite of professional tools and resources
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingTools.map((tool) => (
              <Card key={tool.name} className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    {tool.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/trading/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                    <Button variant="outline" className="w-full">Access Tool</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-6 border rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-2">
                <h3 className="text-xl font-bold tracking-tight">Trading Academy</h3>
                <p className="text-muted-foreground">Our comprehensive educational platform to help you develop and enhance your trading skills, with courses ranging from beginner to advanced levels.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline">Video Tutorials</Badge>
                  <Badge variant="outline">Trading Webinars</Badge>
                  <Badge variant="outline">Strategy Guides</Badge>
                  <Badge variant="outline">Market Analysis</Badge>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link href="/academy">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    Explore Academy
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Sessions */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Sessions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Understanding global market hours and the best times to trade
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle>Global Market Hours</CardTitle>
                <CardDescription>The forex market operates 24 hours a day, 5 days a week through different global sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] w-full bg-muted rounded-md flex items-center justify-center mb-4">
                  <Globe className="h-16 w-16 text-muted-foreground/30" />
                  <div className="absolute top-0 left-0 w-full h-full p-4">
                    <p className="text-center text-muted-foreground">Interactive world clock/map will render here</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {tradingSessions.map((session) => (
                    <div key={session.name} className="space-y-2">
                      <div className="flex items-center">
                        <Timer className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-medium">{session.name} Session</h3>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{session.hours}</p>
                      <p className="text-sm text-muted-foreground">{session.description}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {session.currencies.map((currency) => (
                          <Badge key={currency} variant="outline" className="border-primary/20">
                            {currency}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>Session Overlaps</CardTitle>
                  <CardDescription>The most active and volatile trading periods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-1">London/New York Overlap (1:00 PM - 4:00 PM GMT)</h3>
                      <p className="text-sm text-muted-foreground">The most liquid and volatile period in the forex market, offering the best trading opportunities, especially for EUR/USD, GBP/USD, and USD/CHF pairs.</p>
                    </div>
                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-1">Tokyo/London Overlap (7:00 AM - 9:00 AM GMT)</h3>
                      <p className="text-sm text-muted-foreground">Increased liquidity for EUR/JPY, GBP/JPY, and other yen crosses as European traders enter the market while Tokyo is still active.</p>
                    </div>
                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-1">Sydney/Tokyo Overlap (12:00 AM - 2:00 AM GMT)</h3>
                      <p className="text-sm text-muted-foreground">Less volatile but important for AUD/JPY, NZD/JPY trading with opportunities as Asian markets become fully active.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>Trading Considerations</CardTitle>
                  <CardDescription>Important factors to consider when trading during different sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <LineChart className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Liquidity Variations</p>
                        <p className="text-sm text-muted-foreground">Spreads may widen during less liquid periods and narrow during session overlaps.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Server className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Server Time</p>
                        <p className="text-sm text-muted-foreground">Our platform operates on GMT+0 time, with automatic adjustments for daylight saving time.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Terminal className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Market-Specific Trading Hours</p>
                        <p className="text-sm text-muted-foreground">Stock indices and commodities have specific trading hours based on their respective exchanges.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Wallet className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Weekend Trading</p>
                        <p className="text-sm text-muted-foreground">Forex markets close on Friday at 22:00 GMT and reopen on Sunday at 22:00 GMT. Cryptocurrencies trade 24/7.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Conditions */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Conditions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Professional trading environment with competitive conditions for all traders
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Account Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Standard Accounts</h3>
                  <p className="text-sm text-muted-foreground">
                    Account sizes from $10,000 to $100,000 with an 80% profit split for traders who pass our evaluation process.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-medium">Professional Accounts</h3>
                  <p className="text-sm text-muted-foreground">
                    Account sizes from $50,000 to $200,000 with an 85% profit split for experienced traders.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-medium">Elite Accounts</h3>
                  <p className="text-sm text-muted-foreground">
                    Invitation-only accounts starting at $200,000 with a 90% profit split for top-performing traders.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/challenges">
                  <Button className="w-full">View Account Options</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Trading Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Position Holding</h3>
                  <p className="text-sm text-muted-foreground">
                    No overnight holding restrictions for forex and crypto. Indices and commodities must follow exchange hours.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-medium">Leverage and Margin</h3>
                  <p className="text-sm text-muted-foreground">
                    Up to 1:30 leverage for forex, 1:20 for indices and commodities, and 1:10 for cryptocurrencies.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-medium">Risk Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Maximum drawdown of 5% on account balance. Daily loss limit of 4% to protect capital.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/trading/rules">
                  <Button className="w-full">View Full Trading Rules</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Execution Quality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Execution Speed</h3>
                  <p className="text-sm text-muted-foreground">
                    Average execution speed of &lt;50ms with dedicated trading servers in New York, London, and Tokyo.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-medium">Liquidity Providers</h3>
                  <p className="text-sm text-muted-foreground">
                    We partner with Tier-1 banks and ECNs to provide institutional-grade liquidity and tight spreads.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-medium">Order Types</h3>
                  <p className="text-sm text-muted-foreground">
                    Support for market, limit, stop, OCO, trailing stops, and other advanced order types.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/trading/execution">
                  <Button className="w-full">Learn About Our Execution</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Trading?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Take the challenge, prove your trading skills, and gain access to our funded accounts with up to $200,000 in capital.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/challenges">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Sign Up for a Free Demo</CardTitle>
                  <CardDescription>Try our trading platforms with a demo account loaded with $100,000 in virtual funds</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Full Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="you@example.com"
                        />
                      </div>
                      <Button>Create Free Demo Account</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background/70 backdrop-blur-md border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/challenges">Challenges</Link></li>
                <li><Link href="/trading">Trading</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/academy">Academy</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/support">Support</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Use</Link></li>
                <li><Link href="/risk-disclosure">Risk Disclosure</Link></li>
                <li><Link href="/compliance">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TradeFunded
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 md:mt-0">
              © {new Date().getFullYear()} TradeFunded. All rights reserved. Trading involves risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}