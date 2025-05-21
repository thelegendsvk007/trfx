import { Link } from "wouter";
import { ArrowRight, CandlestickChart, DollarSign, LineChart, TrendingDown, TrendingUp } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

import { TradingViewChart } from "@/components/tradingview-chart";

// Market data for different sections
const marketHighlights = [
  {
    id: 1,
    pair: "EUR/USD",
    symbol: "FX:EURUSD",
    trend: "up",
    price: "1.0925",
    change: "+0.35%",
    description: "Euro strengthens against the dollar as ECB signals potential rate hike pause. Recent economic data from the Eurozone shows signs of stabilization, while the US Federal Reserve maintains its cautious stance on future rate cuts.",
    support: "1.0880",
    resistance: "1.0950",
    interval: "D"
  },
  {
    id: 2,
    pair: "GBP/USD",
    symbol: "FX:GBPUSD",
    trend: "down",
    price: "1.2675",
    change: "-0.22%",
    description: "Sterling under pressure following disappointing UK retail sales data and ongoing concerns about the Bank of England's approach to monetary policy. Market participants are closely watching upcoming inflation data for further direction.",
    support: "1.2640",
    resistance: "1.2720",
    interval: "D"
  },
  {
    id: 3,
    pair: "XAU/USD",
    symbol: "OANDA:XAUUSD",
    trend: "up",
    price: "2,345.80",
    change: "+0.78%",
    description: "Gold rallies amid heightened geopolitical tensions and inflation concerns. The precious metal continues to attract safe-haven flows as investors seek protection from market volatility and currency devaluation risks.",
    support: "2,320.00",
    resistance: "2,360.00",
    interval: "D"
  }
];

const economicCalendar = [
  {
    date: "Today",
    events: [
      {
        time: "8:30 EST",
        country: "US",
        event: "Initial Jobless Claims",
        impact: "high",
        forecast: "215K",
        previous: "222K"
      },
      {
        time: "10:00 EST",
        country: "US",
        event: "Existing Home Sales",
        impact: "medium",
        forecast: "4.20M",
        previous: "4.17M"
      }
    ]
  },
  {
    date: "Tomorrow",
    events: [
      {
        time: "2:30 EST",
        country: "GER",
        event: "Manufacturing PMI",
        impact: "high",
        forecast: "48.3",
        previous: "47.8"
      },
      {
        time: "4:30 EST",
        country: "UK",
        event: "Retail Sales m/m",
        impact: "high",
        forecast: "0.3%",
        previous: "-0.2%"
      }
    ]
  }
];

const weeklyOutlook = [
  {
    id: 1,
    pair: "EUR/USD",
    symbol: "FX:EURUSD",
    outlook: "Bullish bias above 1.0850. Key events include ECB meeting minutes and EU PMI data. The pair has shown resilience despite mixed economic indicators from the eurozone.",
    keyLevels: "Support: 1.0850, 1.0800. Resistance: 1.0950, 1.1000.",
    riskFactors: "Unexpected hawkish Fed comments could reverse the trend. Watch for US retail sales data and Fed speakers this week.",
    interval: "W"
  },
  {
    id: 2,
    pair: "USD/JPY",
    symbol: "FX:USDJPY",
    outlook: "Neutral to bearish. Monitoring Japan's inflation report and BOJ commentary. Recent verbal intervention from Japanese officials has capped upside momentum.",
    keyLevels: "Support: 152.00, 151.00. Resistance: 154.00, 155.50.",
    riskFactors: "Intervention risk remains high if approaching 155.00 level. Markets are pricing in approximately 65% probability of actual intervention if the pair breaks above 155.00.",
    interval: "W"
  },
  {
    id: 3,
    pair: "GBP/USD",
    symbol: "FX:GBPUSD",
    outlook: "Cautiously bullish with UK economic data in focus. The upcoming CPI and retail sales figures will be critical for determining the Bank of England's next policy move.",
    keyLevels: "Support: 1.2640, 1.2580. Resistance: 1.2720, 1.2780.",
    riskFactors: "Watch for Bank of England rhetoric on inflation persistence. Any hawkish shift could significantly strengthen the pound against major peers.",
    interval: "W"
  }
];

export default function MarketAnalysisPage() {
  return (
    <PageTemplate
      title="Forex Market Analysis | TRFX Trading Insights"
      description="Get expert forex market analysis, price forecasts, and economic event coverage to inform your trading decisions with TRFX's team of professional analysts."
    >
      <div className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Market Analysis</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights and technical analysis on forex, commodities, and global markets
          </p>
        </div>

        {/* Market Highlights Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Market Highlights</h2>
          <div className="grid grid-cols-1 gap-6">
            {marketHighlights.map((item) => (
              <Card key={item.id} className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-background w-full" style={{ height: "450px" }}>
                    <TradingViewChart 
                      symbol={item.symbol} 
                      interval={item.interval}
                      height={450}
                      container={`tv-chart-${item.id}`}
                      theme="dark"
                    />
                  </div>
                  <div className="flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl">{item.pair}</CardTitle>
                        <div className="flex items-center">
                          <span className={`text-lg font-medium ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {item.price}
                          </span>
                          <div className={`ml-2 flex items-center ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {item.trend === 'up' ? (
                              <TrendingUp className="h-4 w-4 mr-1" />
                            ) : (
                              <TrendingDown className="h-4 w-4 mr-1" />
                            )}
                            <span className="text-sm">{item.change}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-4 text-muted-foreground">{item.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Support:</span> {item.support}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Resistance:</span> {item.resistance}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/insights/market-analysis/${item.pair.replace('/', '')}`}>
                          Detailed Analysis
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Analysis & Economic Calendar Section */}
        <div className="mb-16">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="technical">
                <CandlestickChart className="h-4 w-4 mr-2" />
                Technical Analysis
              </TabsTrigger>
              <TabsTrigger value="fundamental">
                <DollarSign className="h-4 w-4 mr-2" />
                Economic Calendar
              </TabsTrigger>
              <TabsTrigger value="weekly">
                <LineChart className="h-4 w-4 mr-2" />
                Weekly Outlook
              </TabsTrigger>
            </TabsList>
            
            {/* Technical Analysis Tab */}
            <TabsContent value="technical">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Analysis Overview</CardTitle>
                  <CardDescription>Key technical levels and patterns for major currency pairs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-muted/40 rounded-md p-4 border border-border/50">
                      <h3 className="text-lg font-semibold mb-2">EUR/USD Technical Outlook</h3>
                      <div className="bg-muted mb-4 rounded-md overflow-hidden" style={{ height: "550px" }}>
                        <TradingViewChart 
                          symbol="FX:EURUSD" 
                          interval="D"
                          height={550}
                          container="tv-chart-technical"
                          theme="dark"
                        />
                      </div>
                      <div className="space-y-4">
                        <p>
                          EUR/USD has formed a bullish ascending triangle pattern on the 4-hour chart, suggesting potential upside momentum. The pair has maintained support at the 1.0880 level with three consecutive tests.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Key Technical Levels</h4>
                            <ul className="space-y-1 text-sm">
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">Support 1:</span>
                                <span>1.0880</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">Support 2:</span>
                                <span>1.0850</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">Resistance 1:</span>
                                <span>1.0950</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">Resistance 2:</span>
                                <span>1.1000</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Technical Indicators</h4>
                            <ul className="space-y-1 text-sm">
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">RSI (14):</span>
                                <span className="text-green-500">58.2 (Bullish)</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">MACD:</span>
                                <span className="text-green-500">Bullish Crossover</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">Moving Averages:</span>
                                <span className="text-green-500">Above 50, 100 EMA</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-muted-foreground">Ichimoku Cloud:</span>
                                <span className="text-amber-500">Neutral</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button asChild>
                      <Link href="/insights/market-analysis/technical">
                        View Full Technical Analysis Report
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Economic Calendar Tab */}
            <TabsContent value="fundamental">
              <Card>
                <CardHeader>
                  <CardTitle>Economic Calendar</CardTitle>
                  <CardDescription>Upcoming high-impact economic events and releases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {economicCalendar.map((day) => (
                      <div key={day.date} className="space-y-4">
                        <h3 className="text-lg font-semibold">{day.date}</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-border/50">
                                <th className="py-2 px-3 text-left text-sm font-medium text-muted-foreground">Time</th>
                                <th className="py-2 px-3 text-left text-sm font-medium text-muted-foreground">Country</th>
                                <th className="py-2 px-3 text-left text-sm font-medium text-muted-foreground">Event</th>
                                <th className="py-2 px-3 text-left text-sm font-medium text-muted-foreground">Impact</th>
                                <th className="py-2 px-3 text-left text-sm font-medium text-muted-foreground">Forecast</th>
                                <th className="py-2 px-3 text-left text-sm font-medium text-muted-foreground">Previous</th>
                              </tr>
                            </thead>
                            <tbody>
                              {day.events.map((event, index) => (
                                <tr key={index} className="border-b border-border/30 hover:bg-muted/30">
                                  <td className="py-3 px-3 text-sm">{event.time}</td>
                                  <td className="py-3 px-3 text-sm">{event.country}</td>
                                  <td className="py-3 px-3 text-sm font-medium">{event.event}</td>
                                  <td className="py-3 px-3 text-sm">
                                    <Badge className={
                                      event.impact === 'high' 
                                        ? 'bg-red-500 hover:bg-red-600' 
                                        : event.impact === 'medium'
                                        ? 'bg-amber-500 hover:bg-amber-600'
                                        : 'bg-green-500 hover:bg-green-600'
                                    }>
                                      {event.impact}
                                    </Badge>
                                  </td>
                                  <td className="py-3 px-3 text-sm">{event.forecast}</td>
                                  <td className="py-3 px-3 text-sm">{event.previous}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                    
                    <Button asChild>
                      <Link href="/insights/market-analysis/economic-calendar">
                        View Full Economic Calendar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Weekly Outlook Tab */}
            <TabsContent value="weekly">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Market Outlook</CardTitle>
                  <CardDescription>Trading expectations and key levels for the coming week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {weeklyOutlook.map((item) => (
                      <div key={item.id} className="p-4 bg-muted/40 rounded-md border border-border/50">
                        <h3 className="text-lg font-semibold mb-2">{item.pair}</h3>
                        <div className="flex flex-col gap-4 mb-4">
                          <div className="bg-muted rounded-md overflow-hidden w-full" style={{ height: "450px" }}>
                            <TradingViewChart 
                              symbol={item.symbol} 
                              interval={item.interval}
                              height={450}
                              container={`tv-chart-weekly-${item.id}`}
                              theme="dark"
                            />
                          </div>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Outlook</h4>
                              <p>{item.outlook}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Key Levels</h4>
                              <p>{item.keyLevels}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Risk Factors</h4>
                              <p>{item.riskFactors}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <Button asChild>
                      <Link href="/insights/market-analysis/weekly-outlook">
                        Read Complete Weekly Outlook
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Analyst Picks Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Analyst Trade Picks</h2>
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Top Trade Opportunities This Week</CardTitle>
              <CardDescription>Curated trade ideas from our expert analyst team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 p-4 bg-muted/30 rounded-md border border-border/50">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="/src/assets/gbpjpy-setup.svg" 
                        alt="GBP/JPY Trade Setup"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-green-500 hover:bg-green-600">Buy Setup</Badge>
                      <span className="text-sm text-muted-foreground">Posted May 21, 2025</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">GBP/JPY Bullish Breakout Opportunity</h3>
                    <p className="text-muted-foreground mb-4">
                      GBP/JPY has broken above a key resistance level at 192.50 with strong momentum, suggesting a potential continuation of the uptrend. Recent UK economic data has been supportive of sterling strength.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Entry Point</h4>
                        <p>192.85 (current market price)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Stop Loss</h4>
                        <p>192.20 (below recent support)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Take Profit 1</h4>
                        <p>193.50 (previous resistance)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Take Profit 2</h4>
                        <p>194.20 (measured move target)</p>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <Link href="/insights/market-analysis/trade-ideas/gbpjpy">
                        View Detailed Analysis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <Button asChild>
                  <Link href="/insights/market-analysis/trade-ideas">
                    View All Trade Ideas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-border/50 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="text-center">Get Daily Market Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Subscribe to receive our expert market analysis, upcoming economic events, and trade ideas directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-2 rounded-md border border-border bg-background flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
}