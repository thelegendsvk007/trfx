import { Link } from "wouter";
import { ArrowRight, Award, BookOpen, Check, Clock, Lightbulb, Shield, Star, TrendingUp } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Featured tips data
const featuredTips = [
  {
    id: 1,
    title: "The 3-Step Forex Risk Management Framework",
    excerpt: "A structured approach to protect your capital and ensure long-term profitability in forex trading. Learn how to implement proper position sizing, set correct stop-loss levels, and maintain appropriate risk-reward ratios.",
    category: "Risk Management",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Ccircle cx='300' cy='200' r='150' fill='none' stroke='%23374151' stroke-width='40'/%3E%3Cpath d='M300,50 A150,150 0 0,1 450,200' fill='none' stroke='%2334d399' stroke-width='40'/%3E%3Cpath d='M450,200 A150,150 0 0,1 300,350' fill='none' stroke='%23f59e0b' stroke-width='40'/%3E%3Cpath d='M300,350 A150,150 0 0,1 150,200' fill='none' stroke='%23ef4444' stroke-width='40'/%3E%3Ccircle cx='300' cy='200' r='50' fill='%23111827' stroke='%23374151' stroke-width='2'/%3E%3Ctext x='300' y='180' font-family='Arial' font-size='30' fill='white' text-anchor='middle'%3ERisk%3C/text%3E%3Ctext x='300' y='220' font-family='Arial' font-size='30' fill='white' text-anchor='middle'%3EManagement%3C/text%3E%3Ctext x='380' y='120' font-family='Arial' font-size='20' fill='%2334d399' text-anchor='middle'%3E1%25%3C/text%3E%3Ctext x='420' y='270' font-family='Arial' font-size='20' fill='%23f59e0b' text-anchor='middle'%3E2:1%3C/text%3E%3Ctext x='200' y='270' font-family='Arial' font-size='20' fill='%23ef4444' text-anchor='middle'%3EStop Loss%3C/text%3E%3C/svg%3E",
    author: {
      name: "Michael Chen",
      role: "Risk Management Specialist",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3EMC%3C/text%3E%3C/svg%3E"
    },
    date: "May 18, 2025",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "Support and Resistance Mastery: Advanced Techniques",
    excerpt: "Learn how to identify hidden support and resistance levels that most traders miss for better entry and exit points. Master dynamic levels, pivot points, and psychological price barriers to improve your trading accuracy.",
    category: "Technical Analysis",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Cpath d='M50,350 L550,350' stroke='%23374151' stroke-width='2'/%3E%3Cpath d='M50,50 L50,350' stroke='%23374151' stroke-width='2'/%3E%3Cpolyline points='50,250 100,270 150,200 200,220 250,180 300,190 350,120 400,140 450,100 500,80 550,90' stroke='%238b5cf6' stroke-width='3' fill='none'/%3E%3Cpath d='M50,140 L550,140' stroke='%23f43f5e' stroke-width='2' stroke-dasharray='6,3'/%3E%3Cpath d='M50,220 L550,220' stroke='%2310b981' stroke-width='2' stroke-dasharray='6,3'/%3E%3Ctext x='560' y='145' font-family='Arial' font-size='14' fill='%23f43f5e' text-anchor='start'%3EResistance%3C/text%3E%3Ctext x='560' y='225' font-family='Arial' font-size='14' fill='%2310b981' text-anchor='start'%3ESupport%3C/text%3E%3Ccircle cx='300' cy='190' r='5' fill='%238b5cf6'/%3E%3Ccircle cx='350' cy='120' r='5' fill='%238b5cf6'/%3E%3Crect x='100' y='30' width='300' height='40' rx='5' fill='%23374151'/%3E%3Ctext x='250' y='57' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EHidden Support and Resistance Levels%3C/text%3E%3C/svg%3E",
    author: {
      name: "Sarah Johnson",
      role: "Technical Analyst",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3ESJ%3C/text%3E%3C/svg%3E"
    },
    date: "May 15, 2025",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Trading the News: A Data-Driven Approach",
    excerpt: "How to prepare for high-impact economic events and capitalize on market volatility without getting caught on the wrong side. Learn to use economic calendars, understand market expectations, and implement strategic entry and exit plans.",
    category: "Fundamental Analysis",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Crect x='75' y='100' width='450' height='200' rx='10' fill='%23374151'/%3E%3Crect x='100' y='130' width='400' height='25' rx='5' fill='%23475569'/%3E%3Crect x='100' y='130' width='250' height='25' rx='5' fill='%233b82f6'/%3E%3Crect x='100' y='175' width='400' height='25' rx='5' fill='%23475569'/%3E%3Crect x='100' y='175' width='150' height='25' rx='5' fill='%23ef4444'/%3E%3Crect x='100' y='220' width='400' height='25' rx='5' fill='%23475569'/%3E%3Crect x='100' y='220' width='350' height='25' rx='5' fill='%2310b981'/%3E%3Ctext x='50' y='145' font-family='Arial' font-size='14' fill='white' text-anchor='end'%3EGDP%3C/text%3E%3Ctext x='50' y='190' font-family='Arial' font-size='14' fill='white' text-anchor='end'%3ECPI%3C/text%3E%3Ctext x='50' y='235' font-family='Arial' font-size='14' fill='white' text-anchor='end'%3ENFPs%3C/text%3E%3Crect x='100' y='60' width='300' height='30' rx='5' fill='%23374151'/%3E%3Ctext x='250' y='80' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EImpact of Economic Releases%3C/text%3E%3Cpath d='M300,265 L450,320' stroke='%23f59e0b' stroke-width='2' stroke-dasharray='6,3'/%3E%3Ccircle cx='450' cy='320' r='30' fill='none' stroke='%23f59e0b' stroke-width='2'/%3E%3Ctext x='450' y='325' font-family='Arial' font-size='12' fill='%23f59e0b' text-anchor='middle'%3ETrading%3C/text%3E%3Ctext x='450' y='340' font-family='Arial' font-size='12' fill='%23f59e0b' text-anchor='middle'%3EOpportunity%3C/text%3E%3C/svg%3E",
    author: {
      name: "David Wilson",
      role: "Market Strategist",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3EDW%3C/text%3E%3C/svg%3E"
    },
    date: "May 10, 2025",
    readTime: "7 min read"
  }
];

// Categories for filtering
const tipCategories = [
  "All Tips",
  "Beginner Guides",
  "Risk Management",
  "Technical Analysis",
  "Fundamental Analysis",
  "Trading Psychology",
  "Trade Execution"
];

// Tips collection for different categories
const beginnerTips = [
  {
    id: 1,
    title: "Understanding Forex Market Hours and Sessions",
    description: "Learn the optimal trading times and how market behavior changes throughout the global trading day.",
    icon: Clock
  },
  {
    id: 2,
    title: "The Basics of Reading Forex Charts",
    description: "Master the fundamentals of price action and chart interpretation for smarter trading decisions.",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "Setting Up Your First Trading Plan",
    description: "Create a structured approach to the markets with defined entry, exit and risk parameters.",
    icon: BookOpen
  },
  {
    id: 4,
    title: "Understanding Leverage: Benefits and Risks",
    description: "Learn how to use leverage responsibly to maximize returns while protecting your capital.",
    icon: Shield
  }
];

const advancedTips = [
  {
    id: 1,
    title: "Mastering Multiple Timeframe Analysis",
    description: "How to analyze currency pairs across different timeframes for confirmation and higher probability trades.",
    level: "intermediate"
  },
  {
    id: 2,
    title: "Intermarket Analysis for Forex Traders",
    description: "Understanding correlations between forex, commodities, bonds, and equities for improved trading.",
    level: "advanced"
  },
  {
    id: 3,
    title: "Order Flow Trading Techniques",
    description: "Using volume and order flow to predict institutional movements and market direction.",
    level: "advanced"
  },
  {
    id: 4,
    title: "Volatility-Based Position Sizing",
    description: "Advanced risk management that adjusts position size based on current market conditions.",
    level: "intermediate"
  }
];

export default function TradingTipsPage() {
  return (
    <PageTemplate
      title="Forex Trading Tips & Strategies | TRFX Trading Insights"
      description="Discover professional forex trading tips, strategies, and best practices from TRFX's expert traders to improve your trading skills and maximize your profit potential."
    >
      <div className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Trading Tips & Strategies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert advice to improve your trading skills and maximize your profit potential
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 relative">
          {tipCategories.map((category) => {
            const isActive = category === "All Tips";
            return (
              <Button 
                key={category} 
                variant={isActive ? "default" : "outline"} 
                size="sm" 
                onClick={(e) => {
                  // Visual feedback for active filter
                  const allButtons = document.querySelectorAll(".tip-category-filter");
                  allButtons.forEach(btn => {
                    btn.classList.remove("bg-primary", "text-primary-foreground");
                    btn.classList.add("bg-transparent", "text-foreground", "border-border");
                  });
                  
                  // Set this button as active
                  e.currentTarget.classList.remove("bg-transparent", "text-foreground", "border-border");
                  e.currentTarget.classList.add("bg-primary", "text-primary-foreground");
                  
                  // Show filtered message
                  const filterMessage = document.getElementById('tip-filter-message');
                  if (filterMessage) {
                    filterMessage.textContent = `Showing ${category.toLowerCase()} tips`;
                    filterMessage.classList.remove("opacity-0");
                    filterMessage.classList.add("opacity-100");
                    
                    // Hide after a delay
                    setTimeout(() => {
                      filterMessage.classList.remove("opacity-100");
                      filterMessage.classList.add("opacity-0");
                    }, 2000);
                  }
                }}
                className={`tip-category-filter rounded-full ${isActive ? "bg-primary text-primary-foreground" : "bg-transparent border-border"}`}
              >
                {category}
              </Button>
            );
          })}
          <div 
            id="tip-filter-message" 
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-primary transition-opacity duration-300 opacity-0"
          >
          </div>
        </div>

        {/* Featured Trading Tips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Tips</h2>
          <div className="grid grid-cols-1 gap-6">
            {featuredTips.map((tip) => (
              <Card key={tip.id} className="overflow-hidden hover:border-primary/50 transition-colors w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="aspect-video bg-background">
                    <img 
                      src={tip.imageUrl} 
                      alt={tip.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center mb-2">
                        <Badge>{tip.category}</Badge>
                        <div className="text-xs text-muted-foreground">{tip.date}</div>
                      </div>
                      <CardTitle className="text-xl">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4 flex-grow">
                      <p className="text-muted-foreground mb-4">
                        {tip.excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={tip.author.avatar} alt={tip.author.name} />
                          <AvatarFallback>{tip.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{tip.author.name}</p>
                          <p className="text-xs text-muted-foreground">{tip.author.role} • {tip.readTime}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/insights/trading-tips/${tip.id}`}>
                          Read Full Tip
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

        {/* Trading Tips Categories */}
        <div className="mb-16">
          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="beginner">
                <Star className="h-4 w-4 mr-2" />
                For Beginners
              </TabsTrigger>
              <TabsTrigger value="advanced">
                <Award className="h-4 w-4 mr-2" />
                Advanced Strategies
              </TabsTrigger>
              <TabsTrigger value="psychology">
                <Lightbulb className="h-4 w-4 mr-2" />
                Trading Psychology
              </TabsTrigger>
            </TabsList>
            
            {/* Beginner Tips Tab */}
            <TabsContent value="beginner">
              <Card>
                <CardHeader>
                  <CardTitle>Essential Tips for New Traders</CardTitle>
                  <CardDescription>Fundamentals every forex trader should master before risking real capital</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {beginnerTips.map((tip) => (
                      <div 
                        key={tip.id} 
                        className="p-4 bg-muted/30 rounded-md border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <tip.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-2">{tip.title}</h3>
                            <p className="text-sm text-muted-foreground">{tip.description}</p>
                            <Button variant="link" className="px-0 mt-2" asChild>
                              <Link href={`/insights/trading-tips/beginner/${tip.id}`}>
                                Learn More
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/insights/trading-tips/beginner">
                        View All Beginner Tips
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Advanced Strategies Tab */}
            <TabsContent value="advanced">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Trading Strategies</CardTitle>
                  <CardDescription>Sophisticated techniques for experienced traders looking to gain an edge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {advancedTips.map((tip) => (
                      <div 
                        key={tip.id} 
                        className="p-6 bg-muted/30 rounded-md border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-medium">{tip.title}</h3>
                          <Badge variant={tip.level === 'advanced' ? 'default' : 'outline'}>
                            {tip.level === 'advanced' ? 'Advanced' : 'Intermediate'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{tip.description}</p>
                        <div className="flex items-center gap-1 text-sm text-primary">
                          <Button variant="link" className="p-0 h-auto" asChild>
                            <Link href={`/insights/trading-tips/advanced/${tip.id}`}>
                              Read Strategy Guide
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <Button asChild>
                      <Link href="/insights/trading-tips/advanced">
                        View All Advanced Strategies
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Trading Psychology Tab */}
            <TabsContent value="psychology">
              <Card>
                <CardHeader>
                  <CardTitle>Trading Psychology</CardTitle>
                  <CardDescription>Mental frameworks and emotional control techniques for consistent results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 bg-muted/30 rounded-md border border-border/50 p-6">
                    <h3 className="text-xl font-medium mb-4">The Trader's Mindset: Mastering Your Psychology</h3>
                    <div className="aspect-video bg-muted mb-4 rounded-md overflow-hidden">
                      <img 
                        src="https://placehold.co/800x450/1f2937/e5e7eb?text=Trading+Psychology+Webinar" 
                        alt="Trading Psychology Webinar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Trading psychology is often the differentiating factor between consistently profitable traders and those who struggle. Our team of trading psychologists and professional traders share their insights on developing the mindset necessary for success.
                      </p>
                      <div className="space-y-1">
                        <h4 className="font-medium">In This Comprehensive Guide You'll Learn:</h4>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-green-500" />
                            </div>
                            <span>How to manage emotions during volatile market conditions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-green-500" />
                            </div>
                            <span>Techniques to overcome fear and greed - the two most destructive emotions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-green-500" />
                            </div>
                            <span>How to build discipline and stick to your trading plan under pressure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-green-500" />
                            </div>
                            <span>Methods for maintaining focus during extended trading sessions</span>
                          </li>
                        </ul>
                      </div>
                      <Button asChild>
                        <Link href="/insights/trading-tips/psychology/mindset">
                          Access Full Psychology Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/insights/trading-tips/psychology/handling-losses">
                        <Shield className="mr-2 h-4 w-4" />
                        Handling Trading Losses Effectively
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/insights/trading-tips/psychology/overconfidence">
                        <Shield className="mr-2 h-4 w-4" />
                        Avoiding Overconfidence After Winning Streaks
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/insights/trading-tips/psychology/decision-making">
                        <Shield className="mr-2 h-4 w-4" />
                        Improving Your Trading Decision Process
                      </Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/insights/trading-tips/psychology/stress-management">
                        <Shield className="mr-2 h-4 w-4" />
                        Stress Management for Active Traders
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Expert Analysis Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Expert Trading Masterclass</h2>
          <Card className="border-border/50 bg-gradient-to-br from-background to-muted/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-blue-600 hover:bg-blue-700">Premium Content</Badge>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  Price Action Trading: The Complete Framework
                </CardTitle>
                <p className="text-muted-foreground mb-6">
                  Learn how to trade profitably using only raw price action techniques without relying on lagging indicators. This masterclass covers entry triggers, exit strategies, and practical examples across multiple timeframes.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>4-hour comprehensive video tutorial</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>Downloadable trade plan templates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span>Live trading examples with professional trader</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/insights/trading-tips/masterclass/price-action">
                    Access Masterclass
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="aspect-auto md:aspect-auto bg-muted relative overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/1f2937/e5e7eb?text=Price+Action+Masterclass" 
                  alt="Price Action Masterclass" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Trader Q&A Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Trader Q&A</h2>
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Common Trading Questions Answered</CardTitle>
              <CardDescription>Our expert traders answer frequently asked questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border border-border/50 rounded-md overflow-hidden">
                  <div className="bg-muted/30 p-4 border-b border-border/50">
                    <h3 className="font-medium">How many currency pairs should a beginner trade?</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground mb-4">
                      As a beginner, it's best to focus on 2-3 major currency pairs like EUR/USD, GBP/USD, or USD/JPY. These pairs typically have:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Lower spreads (reducing trading costs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Higher liquidity (easier execution)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>More predictable behavior and technical pattern adherence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Abundant educational resources and analysis available</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-muted-foreground">
                      Once you've mastered these and developed a profitable strategy, you can gradually expand to other pairs.
                    </p>
                  </div>
                </div>
                
                <div className="border border-border/50 rounded-md overflow-hidden">
                  <div className="bg-muted/30 p-4 border-b border-border/50">
                    <h3 className="font-medium">What's the best time frame for day trading forex?</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground mb-3">
                      For day trading, the 1-hour and 4-hour charts are optimal for identifying the overall trend and key support/resistance levels, while the 5-minute and 15-minute charts are best for precise entry and exit points.
                    </p>
                    <p className="text-muted-foreground">
                      We recommend a multiple timeframe approach: analyze the higher timeframes first to identify the trend direction, then move to lower timeframes to find optimal entry points that align with the overall trend.
                    </p>
                  </div>
                </div>
                
                <Button asChild>
                  <Link href="/insights/trading-tips/faq">
                    View All Q&A
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
              <CardTitle className="text-center">Get Weekly Trading Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Subscribe to receive exclusive trading strategies, risk management tips, and market insights directly to your inbox.
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