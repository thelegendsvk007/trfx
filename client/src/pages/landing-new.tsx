import { useState } from "react";
import { Activity, ArrowRight, CheckCircle, ChevronRight, LineChart, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import PageTemplate from "@/components/page-template";

export default function LandingPage() {
  // Sample testimonials data
  const testimonials = [
    {
      quote: "TRFX helped me turn my trading passion into a full-time career. I passed the challenge in 12 days and now trade with a $100k funded account.",
      author: "Michael T.",
      role: "Forex Trader",
      location: "London, UK"
    },
    {
      quote: "The platform is incredibly transparent and the payouts are always on time. I've been with them for 6 months and have already received over $25,000 in profits.",
      author: "Sarah J.",
      role: "Index Trader",
      location: "Toronto, Canada"
    },
    {
      quote: "What I love about TRFX is how they actually want you to succeed. Their analytics tools and support team are top-notch.",
      author: "David L.",
      role: "Commodity Trader",
      location: "Sydney, Australia"
    }
  ];
  
  // Sample FAQ data
  const faqs = [
    {
      question: "How does the funding process work?",
      answer: "Our funding process is straightforward: First, you purchase a challenge with your preferred account size. Next, complete the two-phase evaluation by meeting the profit targets while respecting the trading rules. Once successful, you receive a funded account where you keep up to 80% of the profits you generate."
    },
    {
      question: "What markets can I trade?",
      answer: "We offer access to a wide range of markets including Forex, Indices, Commodities, Cryptocurrencies, and Stocks. This gives you the flexibility to trade in markets where you have expertise and see the most opportunity."
    },
    {
      question: "How often are profits paid out?",
      answer: "For standard accounts, payouts are processed monthly. Elite and Expert account holders enjoy weekly payouts. You can request a payout once your profits exceed $100, and they are typically processed within 2-3 business days."
    },
    {
      question: "Are there any restrictions on trading styles?",
      answer: "We support various trading styles including day trading, swing trading, and position trading. However, we prohibit certain high-risk strategies such as martingale and grid trading without proper risk management. All trading must adhere to our maximum drawdown rules."
    }
  ];
  
  return (
    <PageTemplate 
      title="TRFX - Get Funded to Trade Like a Pro" 
      description="Prove your trading skills and get funded with accounts up to $200,000. Keep up to 80% of the profits with no risk of your own capital."
    >
      {/* Hero section */}
      <section className="relative py-20 md:py-32 bg-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-70"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
        </div>
        
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                  Get <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Funded</span> to Trade Like a Pro
                </h1>
                <p className="text-xl text-muted-foreground">
                  Prove your trading skills and get funded with accounts up to $200,000. Keep up to 80% of the profits with no risk of your own capital.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" asChild>
                  <Link to="/register">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">
                    Learn More
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Instant Funding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">80% Profit Split</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Fast Payouts</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-background/70 backdrop-blur-sm border rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Trading Account</h3>
                    <p className="text-sm text-muted-foreground">Professional Challenge</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Account Size</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$50,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Balance</p>
                      <p className="text-2xl font-bold">$53,841</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Profit</p>
                      <p className="text-lg font-medium text-green-500">+$3,841 (+7.68%)</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Drawdown</p>
                      <p className="text-lg font-medium">2.4% / 10%</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="h-24 w-full bg-muted rounded-md flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">Trading chart visualization</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Start Trading Now
                  </Button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Our simple 3-step process to get you trading with our capital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <Card className="h-full border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg relative z-10">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle>Purchase a Challenge</CardTitle>
                  <CardDescription>Choose an account size that matches your trading goals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Select from our range of account sizes from $25,000 to $200,000. Pay a one-time fee for the challenge with no recurring charges.
                  </p>
                  <div className="pt-2">
                    <Button variant="secondary" size="sm" className="w-full">
                      View Challenges
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 z-0">
                <ArrowRight className="h-8 w-24 text-muted-foreground/30" />
              </div>
            </div>
            
            <div className="relative">
              <Card className="h-full border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg relative z-10">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle>Pass the Evaluation</CardTitle>
                  <CardDescription>Demonstrate your trading skill in two phases</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Achieve profit targets while respecting drawdown limits and trading rules. Trade for a minimum number of days to show consistency.
                  </p>
                  <div className="pt-2">
                    <Button variant="secondary" size="sm" className="w-full">
                      View Trading Rules
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 z-0">
                <ArrowRight className="h-8 w-24 text-muted-foreground/30" />
              </div>
            </div>
            
            <div>
              <Card className="h-full border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle>Get Funded & Earn</CardTitle>
                  <CardDescription>Trade with our capital and keep the profits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Receive a funded account with the same balance. Keep up to 80% of all profits you generate and enjoy regular payouts.
                  </p>
                  <div className="pt-2">
                    <Button variant="secondary" size="sm" className="w-full">
                      Payout Structure
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured challenges section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Challenges</h2>
            <p className="text-lg text-muted-foreground">
              Select the perfect challenge for your trading style and experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Standard Challenge</CardTitle>
                <CardDescription>Account size: $25,000</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold">$99</p>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>8% profit target</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>10% maximum drawdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>70% profit split</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monthly payouts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Select Challenge</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-primary relative overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-0 inset-x-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="pt-10">
                <CardTitle>Standard Challenge</CardTitle>
                <CardDescription>Account size: $50,000</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold">$199</p>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>8% profit target</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>10% maximum drawdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>80% profit split</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monthly payouts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Select Challenge</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Standard Challenge</CardTitle>
                <CardDescription>Account size: $100,000</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold">$349</p>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>8% profit target</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>10% maximum drawdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>80% profit split</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weekly payouts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Select Challenge</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/challenges">
                View All Challenges
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Traders Say</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of successful traders who have earned with TRFX
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 text-muted-foreground">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="inline-block h-5 w-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="italic text-muted-foreground mb-4">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <span className="text-sm font-bold text-primary">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our funding program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-6 text-lg">Have more questions? We're here to help.</p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/faq">
                View All FAQs
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Start Your Trading Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of traders who have already taken the challenge and now trade with our capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link to="/login">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/challenges">
                  View Challenges
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}