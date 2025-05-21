import { ArrowLeft, ArrowRight, Calendar, TrendingDown, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for trade ideas
const tradeIdeas = [
  {
    id: 1,
    title: "GBP/JPY Bullish Breakout Opportunity",
    slug: "gbpjpy",
    description: "GBP/JPY has broken above a key resistance level at 192.50 with strong momentum, suggesting a potential continuation of the uptrend. Recent UK economic data has been supportive of sterling strength.",
    date: "May 21, 2025",
    image: "https://placehold.co/600x300/1f2937/e5e7eb?text=GBP/JPY+Setup",
    trend: "up",
    type: "breakout",
    pair: "GBP/JPY",
    category: "forex"
  },
  {
    id: 2,
    title: "EUR/USD: Potential Reversal at Key Support",
    slug: "eurusd",
    description: "EUR/USD approaching long-term support at 1.0750 with positive RSI divergence. The ECB's hawkish stance compared to the Fed's recent dovish shift could trigger a reversal.",
    date: "May 18, 2025",
    image: "https://placehold.co/600x300/1f2937/e5e7eb?text=EUR/USD+Setup",
    trend: "up",
    type: "reversal",
    pair: "EUR/USD",
    category: "forex"
  },
  {
    id: 3,
    title: "USD/JPY: Range Trading Opportunity",
    slug: "usdjpy",
    description: "USD/JPY has established a well-defined range between 151.80 and 155.20. With multiple tests of both boundaries, this range presents excellent swing trading opportunities.",
    date: "May 15, 2025",
    image: "https://placehold.co/600x300/1f2937/e5e7eb?text=USD/JPY+Setup",
    trend: "neutral",
    type: "range",
    pair: "USD/JPY",
    category: "forex"
  },
  {
    id: 4,
    title: "Gold: Bullish Breakout After Consolidation",
    slug: "xauusd",
    description: "Gold has broken out of a three-week consolidation pattern, signaling potential for continued upside. Ongoing geopolitical tensions and inflation concerns support the bullish thesis.",
    date: "May 12, 2025",
    image: "https://placehold.co/600x300/1f2937/e5e7eb?text=Gold+Setup",
    trend: "up",
    type: "breakout",
    pair: "XAU/USD",
    category: "commodities"
  },
  {
    id: 5,
    title: "AUD/USD: Bearish Continuation Pattern",
    slug: "audusd",
    description: "AUD/USD has formed a bear flag pattern after breaking below key support. Weakening commodity prices and China's economic slowdown continue to pressure the Australian dollar.",
    date: "May 9, 2025",
    image: "https://placehold.co/600x300/1f2937/e5e7eb?text=AUD/USD+Setup",
    trend: "down",
    type: "continuation",
    pair: "AUD/USD",
    category: "forex"
  },
  {
    id: 6,
    title: "USD/CAD: Double Top Formation",
    slug: "usdcad",
    description: "USD/CAD has formed a double top at 1.3650, suggesting potential for a bearish reversal. Rising oil prices continue to support the Canadian dollar against its US counterpart.",
    date: "May 7, 2025",
    image: "https://placehold.co/600x300/1f2937/e5e7eb?text=USD/CAD+Setup",
    trend: "down",
    type: "reversal",
    pair: "USD/CAD",
    category: "forex"
  },
  {
    id: 7,
    title: "Silver: Cup and Handle Pattern",
    slug: "xagusd",
    description: "Silver has formed a classic cup and handle pattern on the daily chart, signaling potential for a bullish breakout. Industrial demand and inflation hedging continue to support prices.",
    date: "May 5, 2025",
    image: "https://placehold.co/600x300/1f2937/e5e7eb?text=Silver+Setup",
    trend: "up",
    type: "breakout",
    pair: "XAG/USD",
    category: "commodities"
  },
  {
    id: 8,
    title: "EUR/GBP: Head and Shoulders Pattern",
    slug: "eurgbp",
    description: "EUR/GBP has completed a head and shoulders pattern, suggesting potential for continued downside. Diverging monetary policy between the ECB and BOE continues to pressure the pair.",
    date: "May 2, 2025",
    image: "https://placehold.co/600x300/1f2937/e5e7eb?text=EUR/GBP+Setup",
    trend: "down",
    type: "reversal",
    pair: "EUR/GBP",
    category: "forex"
  }
];

const categories = ["All", "Forex", "Commodities", "Indices", "Cryptocurrencies"];
const patterns = ["All Patterns", "Breakout", "Reversal", "Continuation", "Range"];
const directions = ["All Directions", "Bullish", "Bearish", "Neutral"];

export default function TradeIdeasPage() {
  return (
    <PageTemplate
      title="Trade Ideas | TRFX Market Analysis"
      description="Curated trade ideas and setups from our team of professional forex analysts to help you find high-probability trading opportunities."
    >
      <div className="container py-10">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/insights/market-analysis">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Market Analysis
            </Link>
          </Button>
        </div>
        
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-3">Trade Ideas</h1>
          <p className="text-lg text-muted-foreground">
            Curated trade setups and opportunities from our expert analyst team
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8">
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All Ideas</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="recent">Most Recent</TabsTrigger>
                <TabsTrigger value="performing">Best Performing</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Date Range
                </Button>
              </div>
            </div>
            
            <div className="space-y-4 bg-muted/30 p-4 rounded-md border border-border/50 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Market Category</label>
                  <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                    {categories.map((category) => (
                      <option key={category} value={category.toLowerCase()}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Chart Pattern</label>
                  <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                    {patterns.map((pattern) => (
                      <option key={pattern} value={pattern.toLowerCase().replace(' ', '-')}>{pattern}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Direction</label>
                  <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                    {directions.map((direction) => (
                      <option key={direction} value={direction.toLowerCase().replace(' ', '-')}>{direction}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Apply Filters</Button>
              </div>
            </div>
            
            {/* Trade Ideas Grid */}
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tradeIdeas.map((idea) => (
                  <Card key={idea.id} className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 bg-muted h-full">
                        <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`} className="block h-full">
                          <img 
                            src={idea.image} 
                            alt={idea.title}
                            className="w-full h-full object-cover aspect-square md:aspect-auto"
                          />
                        </Link>
                      </div>
                      <div className="md:col-span-3">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start mb-2">
                            <Badge className={
                              idea.trend === 'up' 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : idea.trend === 'down'
                                ? 'bg-red-500 hover:bg-red-600'
                                : 'bg-blue-500 hover:bg-blue-600'
                            }>
                              {idea.trend === 'up' ? 'Buy Setup' : idea.trend === 'down' ? 'Sell Setup' : 'Range Setup'}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{idea.date}</span>
                          </div>
                          <CardTitle className="text-lg">
                            <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`} className="hover:text-primary transition-colors">
                              {idea.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{idea.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm font-medium mr-2">{idea.pair}</span>
                              {idea.trend === 'up' ? (
                                <TrendingUp className="h-4 w-4 text-green-500" />
                              ) : idea.trend === 'down' ? (
                                <TrendingDown className="h-4 w-4 text-red-500" />
                              ) : null}
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`}>
                                View Details
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tradeIdeas.slice(0, 4).map((idea) => (
                  <Card key={idea.id} className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 bg-muted h-full">
                        <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`} className="block h-full">
                          <img 
                            src={idea.image} 
                            alt={idea.title}
                            className="w-full h-full object-cover aspect-square md:aspect-auto"
                          />
                        </Link>
                      </div>
                      <div className="md:col-span-3">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start mb-2">
                            <Badge className={
                              idea.trend === 'up' 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : idea.trend === 'down'
                                ? 'bg-red-500 hover:bg-red-600'
                                : 'bg-blue-500 hover:bg-blue-600'
                            }>
                              {idea.trend === 'up' ? 'Buy Setup' : idea.trend === 'down' ? 'Sell Setup' : 'Range Setup'}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{idea.date}</span>
                          </div>
                          <CardTitle className="text-lg">
                            <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`} className="hover:text-primary transition-colors">
                              {idea.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{idea.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm font-medium mr-2">{idea.pair}</span>
                              {idea.trend === 'up' ? (
                                <TrendingUp className="h-4 w-4 text-green-500" />
                              ) : idea.trend === 'down' ? (
                                <TrendingDown className="h-4 w-4 text-red-500" />
                              ) : null}
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`}>
                                View Details
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tradeIdeas.slice(0, 6).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((idea) => (
                  <Card key={idea.id} className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 bg-muted h-full">
                        <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`} className="block h-full">
                          <img 
                            src={idea.image} 
                            alt={idea.title}
                            className="w-full h-full object-cover aspect-square md:aspect-auto"
                          />
                        </Link>
                      </div>
                      <div className="md:col-span-3">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start mb-2">
                            <Badge className={
                              idea.trend === 'up' 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : idea.trend === 'down'
                                ? 'bg-red-500 hover:bg-red-600'
                                : 'bg-blue-500 hover:bg-blue-600'
                            }>
                              {idea.trend === 'up' ? 'Buy Setup' : idea.trend === 'down' ? 'Sell Setup' : 'Range Setup'}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{idea.date}</span>
                          </div>
                          <CardTitle className="text-lg">
                            <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`} className="hover:text-primary transition-colors">
                              {idea.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{idea.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm font-medium mr-2">{idea.pair}</span>
                              {idea.trend === 'up' ? (
                                <TrendingUp className="h-4 w-4 text-green-500" />
                              ) : idea.trend === 'down' ? (
                                <TrendingDown className="h-4 w-4 text-red-500" />
                              ) : null}
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`}>
                                View Details
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="performing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tradeIdeas.filter(idea => idea.trend === 'up').slice(0, 4).map((idea) => (
                  <Card key={idea.id} className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 bg-muted h-full">
                        <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`} className="block h-full">
                          <img 
                            src={idea.image} 
                            alt={idea.title}
                            className="w-full h-full object-cover aspect-square md:aspect-auto"
                          />
                        </Link>
                      </div>
                      <div className="md:col-span-3">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start mb-2">
                            <Badge className="bg-green-500 hover:bg-green-600">
                              Buy Setup
                            </Badge>
                            <span className="text-xs text-muted-foreground">{idea.date}</span>
                          </div>
                          <CardTitle className="text-lg">
                            <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`} className="hover:text-primary transition-colors">
                              {idea.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{idea.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm font-medium mr-2">{idea.pair}</span>
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/insights/market-analysis/trade-ideas/${idea.slug}`}>
                                View Details
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageTemplate>
  );
}