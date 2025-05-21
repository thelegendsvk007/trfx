import { Link } from "wouter";
import { ArrowRight, CalendarIcon, Clock, Tag } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Blog post data for the page
const blogPosts = [
  {
    id: 1,
    title: "The Impact of Central Bank Policies on Forex Markets in 2025",
    excerpt: "Explore how central bank decisions are creating new opportunities and challenges for forex traders in the current global economic landscape. With major central banks adopting divergent monetary policies, volatility has increased in key currency pairs, creating ideal conditions for strategic traders.",
    date: "May 15, 2025",
    readTime: "8 min read",
    category: "Market Analysis",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Crect x='75' y='100' width='450' height='200' rx='5' fill='%23374151'/%3E%3Cpath d='M250,220 L350,220 L350,180 L450,180 L450,140 L150,140 L150,180 L250,180 Z' fill='%233b82f6'/%3E%3Cpath d='M75,320 L525,320' stroke='%23d1d5db' stroke-width='1'/%3E%3Cpath d='M75,80 L75,320' stroke='%23d1d5db' stroke-width='1'/%3E%3Ctext x='100' y='330' font-family='Arial' font-size='14' fill='%23d1d5db'%3EFED%3C/text%3E%3Ctext x='200' y='330' font-family='Arial' font-size='14' fill='%23d1d5db'%3EECB%3C/text%3E%3Ctext x='300' y='330' font-family='Arial' font-size='14' fill='%23d1d5db'%3EBOE%3C/text%3E%3Ctext x='400' y='330' font-family='Arial' font-size='14' fill='%23d1d5db'%3EBOJ%3C/text%3E%3Ctext x='500' y='330' font-family='Arial' font-size='14' fill='%23d1d5db'%3EPBOC%3C/text%3E%3Ctext x='60' y='320' font-family='Arial' font-size='14' fill='%23d1d5db' text-anchor='end'%3E0%25%3C/text%3E%3Ctext x='60' y='220' font-family='Arial' font-size='14' fill='%23d1d5db' text-anchor='end'%3E3%25%3C/text%3E%3Ctext x='60' y='120' font-family='Arial' font-size='14' fill='%23d1d5db' text-anchor='end'%3E6%25%3C/text%3E%3Ctext x='300' y='70' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3E2025 Central Bank Interest Rates%3C/text%3E%3C/svg%3E",
    author: {
      name: "Emma Roberts",
      role: "Senior Market Analyst",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3EER%3C/text%3E%3C/svg%3E"
    },
    tags: ["Central Banks", "Interest Rates", "Forex Strategy"]
  },
  {
    id: 2,
    title: "5 Risk Management Strategies Every Forex Trader Should Know",
    excerpt: "Discover essential risk management techniques that can protect your trading capital and improve your long-term profitability. From the 1% rule to correlation analysis, these strategies are used by professional traders to navigate market volatility while preserving their trading capital.",
    date: "May 10, 2025",
    readTime: "6 min read",
    category: "Trading Tips",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Ccircle cx='300' cy='200' r='150' fill='none' stroke='%23374151' stroke-width='40'/%3E%3Cpath d='M300,50 A150,150 0 0,1 450,200' fill='none' stroke='%2334d399' stroke-width='40'/%3E%3Cpath d='M450,200 A150,150 0 0,1 300,350' fill='none' stroke='%23f59e0b' stroke-width='40'/%3E%3Cpath d='M300,350 A150,150 0 0,1 150,200' fill='none' stroke='%23ef4444' stroke-width='40'/%3E%3Ccircle cx='300' cy='200' r='50' fill='%23111827' stroke='%23374151' stroke-width='2'/%3E%3Ctext x='300' y='180' font-family='Arial' font-size='30' fill='white' text-anchor='middle'%3ERisk%3C/text%3E%3Ctext x='300' y='220' font-family='Arial' font-size='30' fill='white' text-anchor='middle'%3EManagement%3C/text%3E%3Ctext x='380' y='120' font-family='Arial' font-size='20' fill='%2334d399' text-anchor='middle'%3E1%25%3C/text%3E%3Ctext x='420' y='270' font-family='Arial' font-size='20' fill='%23f59e0b' text-anchor='middle'%3E2:1%3C/text%3E%3Ctext x='200' y='270' font-family='Arial' font-size='20' fill='%23ef4444' text-anchor='middle'%3EStop Loss%3C/text%3E%3C/svg%3E",
    author: {
      name: "Michael Chen",
      role: "Risk Management Specialist",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3EMC%3C/text%3E%3C/svg%3E"
    },
    tags: ["Risk Management", "Position Sizing", "Trading Psychology"]
  },
  {
    id: 3,
    title: "Technical Analysis Deep Dive: Advanced Pattern Recognition",
    excerpt: "Learn how to identify and trade complex chart patterns that most traders miss, with real-world examples from recent market movements. This comprehensive guide covers harmonic patterns, complex corrections, and institutional order blocks to give you an edge in your technical trading.",
    date: "May 5, 2025",
    readTime: "10 min read",
    category: "Technical Analysis",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Cpath d='M50,350 L550,350' stroke='%23374151' stroke-width='2'/%3E%3Cpath d='M50,50 L50,350' stroke='%23374151' stroke-width='2'/%3E%3Cpolyline points='50,250 100,270 150,200 200,220 250,180 300,190 350,120 400,140 450,100 500,80 550,90' stroke='%238b5cf6' stroke-width='3' fill='none'/%3E%3Cpath d='M150,200 L300,190' stroke='%23f43f5e' stroke-width='2'/%3E%3Cpath d='M300,190 L450,100' stroke='%23f43f5e' stroke-width='2'/%3E%3Ccircle cx='150' cy='200' r='5' fill='%23f43f5e'/%3E%3Ccircle cx='300' cy='190' r='5' fill='%23f43f5e'/%3E%3Ccircle cx='450' cy='100' r='5' fill='%23f43f5e'/%3E%3Ctext x='100' y='150' font-family='Arial' font-size='14' fill='%23d1d5db'%3EGartley Pattern%3C/text%3E%3Cpath d='M70,140 L120,140' stroke='%23f43f5e' stroke-width='2'/%3E%3Ctext x='300' y='40' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EAdvanced Harmonic Patterns%3C/text%3E%3C/svg%3E",
    author: {
      name: "Sarah Johnson",
      role: "Technical Analyst",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3ESJ%3C/text%3E%3C/svg%3E"
    },
    tags: ["Chart Patterns", "Technical Analysis", "Trading Strategies"]
  },
  {
    id: 4,
    title: "Gold Trading: Strategies for the Current Bull Market",
    excerpt: "Expert analysis on gold price movements and effective strategies to capitalize on the ongoing precious metals bull market. With gold reaching historic highs, learn how to identify key entry points and manage risk while trading this powerful commodity trend.",
    date: "April 28, 2025",
    readTime: "7 min read",
    category: "Commodities",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Cpath d='M50,350 L550,350' stroke='%23374151' stroke-width='2'/%3E%3Cpath d='M50,50 L50,350' stroke='%23374151' stroke-width='2'/%3E%3Cpolyline points='50,300 100,280 150,290 200,270 250,250 300,220 350,230 400,210 450,180 500,150 550,110' stroke='%23fbbf24' stroke-width='3' fill='none'/%3E%3Ccircle cx='550' cy='110' r='6' fill='%23fbbf24'/%3E%3Ctext x='530' y='90' font-family='Arial' font-size='14' fill='%23fbbf24'%3E$2,450%3C/text%3E%3Cpath d='M250,350 L250,50' stroke='%23374151' stroke-width='1' stroke-dasharray='5,5'/%3E%3Cpath d='M425,350 L425,50' stroke='%23374151' stroke-width='1' stroke-dasharray='5,5'/%3E%3Ctext x='250' y='370' font-family='Arial' font-size='14' fill='%23d1d5db' text-anchor='middle'%3E2023%3C/text%3E%3Ctext x='425' y='370' font-family='Arial' font-size='14' fill='%23d1d5db' text-anchor='middle'%3E2024%3C/text%3E%3Ctext x='300' y='40' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EGold Price Trend 2023-2025%3C/text%3E%3C/svg%3E",
    author: {
      name: "David Wilson",
      role: "Commodities Expert",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3EDW%3C/text%3E%3C/svg%3E"
    },
    tags: ["Gold", "Commodities", "Bull Market"]
  },
  {
    id: 5,
    title: "Success Story: How John Transformed from Novice to Pro Trader with TRFX",
    excerpt: "Read about John's journey from struggling with consistent losses to becoming a profitable funded trader through TRFX's evaluation program. John's inspiring story shows how proper mentorship, risk management, and a structured trading approach can lead to trading success.",
    date: "April 23, 2025",
    readTime: "5 min read",
    category: "Success Stories",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Ccircle cx='150' cy='200' r='70' fill='none' stroke='%23ef4444' stroke-width='2'/%3E%3Ccircle cx='450' cy='200' r='70' fill='none' stroke='%2334d399' stroke-width='2'/%3E%3Cpath d='M220,200 L380,200' stroke='%23fbbf24' stroke-width='3' stroke-dasharray='10,5'/%3E%3Ctext x='150' y='180' font-family='Arial' font-size='16' fill='%23ef4444' text-anchor='middle'%3ENovice%3C/text%3E%3Ctext x='150' y='205' font-family='Arial' font-size='16' fill='%23ef4444' text-anchor='middle'%3ETrader%3C/text%3E%3Ctext x='150' y='230' font-family='Arial' font-size='12' fill='%23ef4444' text-anchor='middle'%3E-25%25 monthly returns%3C/text%3E%3Ctext x='450' y='180' font-family='Arial' font-size='16' fill='%2334d399' text-anchor='middle'%3EProfessional%3C/text%3E%3Ctext x='450' y='205' font-family='Arial' font-size='16' fill='%2334d399' text-anchor='middle'%3ETrader%3C/text%3E%3Ctext x='450' y='230' font-family='Arial' font-size='12' fill='%2334d399' text-anchor='middle'%3E+12%25 monthly returns%3C/text%3E%3Ctext x='300' y='180' font-family='Arial' font-size='16' fill='%23fbbf24' text-anchor='middle'%3ETRFX%3C/text%3E%3Ctext x='300' y='205' font-family='Arial' font-size='16' fill='%23fbbf24' text-anchor='middle'%3EProgram%3C/text%3E%3Ctext x='300' y='320' font-family='Arial' font-size='20' fill='white' text-anchor='middle'%3EJohn's Trading Transformation%3C/text%3E%3C/svg%3E",
    author: {
      name: "Amanda Lewis",
      role: "Content Director",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3EAL%3C/text%3E%3C/svg%3E"
    },
    tags: ["Success Story", "Funded Trading", "Trading Journey"]
  },
  {
    id: 6,
    title: "The AI Revolution in Forex Trading: Tools and Applications",
    excerpt: "Discover how artificial intelligence is transforming forex trading and how you can leverage these tools to enhance your trading strategy. From pattern recognition to sentiment analysis and automated trade execution, AI is creating powerful advantages for tech-savvy traders.",
    date: "April 18, 2025",
    readTime: "9 min read",
    category: "Technology",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Ccircle cx='300' cy='200' r='150' fill='none' stroke='%233b82f6' stroke-width='2' stroke-dasharray='5,3'/%3E%3Ccircle cx='300' cy='200' r='30' fill='%233b82f6'/%3E%3Ctext x='300' y='205' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3EAI%3C/text%3E%3Cline x1='300' y1='200' x2='380' y2='120' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='380' cy='120' r='20' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Ctext x='380' y='125' font-family='Arial' font-size='10' fill='%233b82f6' text-anchor='middle'%3EML%3C/text%3E%3Cline x1='300' y1='200' x2='420' y2='200' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='420' cy='200' r='20' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Ctext x='420' y='205' font-family='Arial' font-size='10' fill='%233b82f6' text-anchor='middle'%3ENLp%3C/text%3E%3Cline x1='300' y1='200' x2='380' y2='280' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='380' cy='280' r='20' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Ctext x='380' y='285' font-family='Arial' font-size='10' fill='%233b82f6' text-anchor='middle'%3ECV%3C/text%3E%3Cline x1='300' y1='200' x2='220' y2='280' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='220' cy='280' r='20' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Ctext x='220' y='285' font-family='Arial' font-size='10' fill='%233b82f6' text-anchor='middle'%3ERL%3C/text%3E%3Cline x1='300' y1='200' x2='180' y2='200' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='180' cy='200' r='20' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Ctext x='180' y='205' font-family='Arial' font-size='10' fill='%233b82f6' text-anchor='middle'%3ENN%3C/text%3E%3Cline x1='300' y1='200' x2='220' y2='120' stroke='%233b82f6' stroke-width='2'/%3E%3Ccircle cx='220' cy='120' r='20' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3Ctext x='220' y='125' font-family='Arial' font-size='10' fill='%233b82f6' text-anchor='middle'%3ERNN%3C/text%3E%3Ctext x='300' y='350' font-family='Arial' font-size='18' fill='white' text-anchor='middle'%3EAI Applications in Trading%3C/text%3E%3C/svg%3E",
    author: {
      name: "Ryan Thompson",
      role: "Technology Analyst",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ccircle cx='100' cy='70' r='50' fill='%23d1d5db'/%3E%3Ccircle cx='100' cy='230' r='100' fill='%23d1d5db'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='60' fill='%23374151' text-anchor='middle'%3ERT%3C/text%3E%3C/svg%3E"
    },
    tags: ["AI", "Trading Technology", "Algorithmic Trading"]
  }
];

// Categories for the blog filter
const categories = [
  "All Posts",
  "Market Analysis",
  "Trading Tips",
  "Technical Analysis",
  "Commodities",
  "Success Stories",
  "Technology"
];

export default function BlogPage() {
  return (
    <PageTemplate
      title="TRFX Blog | Forex Trading Insights and Market Analysis"
      description="Stay informed with the latest forex trading insights, market analysis, and trading tips from TRFX's team of expert analysts and professional traders."
    >
      <div className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">TRFX Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, market analysis and trading tips from our team of professional traders
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 relative">
          {categories.map((category) => {
            const isActive = category === "All Posts";
            return (
              <Button 
                key={category} 
                variant={isActive ? "default" : "outline"} 
                size="sm" 
                onClick={(e) => {
                  // Visual feedback for active filter
                  const allButtons = document.querySelectorAll(".category-filter");
                  allButtons.forEach(btn => {
                    btn.classList.remove("bg-primary", "text-primary-foreground");
                    btn.classList.add("bg-transparent", "text-foreground", "border-border");
                  });
                  
                  // Set this button as active
                  e.currentTarget.classList.remove("bg-transparent", "text-foreground", "border-border");
                  e.currentTarget.classList.add("bg-primary", "text-primary-foreground");
                  
                  // Show filtered message
                  const filterMessage = document.getElementById('blog-filter-message');
                  if (filterMessage) {
                    filterMessage.textContent = `Showing ${category.toLowerCase()} articles`;
                    filterMessage.classList.remove("opacity-0");
                    filterMessage.classList.add("opacity-100");
                    
                    // Hide after a delay
                    setTimeout(() => {
                      filterMessage.classList.remove("opacity-100");
                      filterMessage.classList.add("opacity-0");
                    }, 2000);
                  }
                }}
                className={`category-filter rounded-full ${isActive ? "bg-primary text-primary-foreground" : "bg-transparent border-border"}`}
              >
                {category}
              </Button>
            );
          })}
          <div 
            id="blog-filter-message" 
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-primary transition-opacity duration-300 opacity-0"
          >
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden border-border/50 bg-gradient-to-br from-background to-muted/50 w-full">
            <div className="flex flex-col">
              <div className="aspect-video bg-background w-full">
                <img 
                  src={blogPosts[0].imageUrl} 
                  alt={blogPosts[0].title} 
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <Badge className="bg-blue-500 hover:bg-blue-600">{blogPosts[0].category}</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  {blogPosts[0].title}
                </CardTitle>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar>
                    <AvatarImage src={blogPosts[0].author.avatar} alt={blogPosts[0].author.name} />
                    <AvatarFallback>{blogPosts[0].author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{blogPosts[0].author.name}</p>
                    <p className="text-sm text-muted-foreground">{blogPosts[0].author.role}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button asChild>
                  <Link href={`/insights/blog/${blogPosts[0].id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:border-primary/50 transition-colors w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="aspect-video bg-background">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge>{post.category}</Badge>
                      <div className="text-xs text-muted-foreground">{post.date}</div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-muted-foreground">{post.author.role} • {post.readTime}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/insights/blog/${post.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-border/50 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="text-center">Subscribe to Our Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Stay updated with the latest market insights, trading tips, and exclusive offers directly in your inbox.
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