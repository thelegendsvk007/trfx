import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, LineChart, BarChart, Clock, Award, TrendingUp, ChevronRight, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PageTemplate from "@/components/page-template";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  const [tab, setTab] = useState("standard");
  
  return (
    <PageTemplate
      title="TRFX - Funded Trading Platform"
      description="Get funded to trade the markets with our proprietary capital. Complete our trading challenge and receive up to $200,000 in funding."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-background/90 overflow-hidden border-b border-border/40">
        <div className="container px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Trade Our Capital,
              </span>{" "}
              Keep Your Profits
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get funded with up to $200,000 of our proprietary capital. Prove your trading skills and earn up to 80% of the profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/login">
                  Start Challenge Now
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
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">10,000+</p>
                    <p className="text-sm text-muted-foreground">Active Traders</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">$25M+</p>
                    <p className="text-sm text-muted-foreground">In Capital</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">$5.8M+</p>
                    <p className="text-sm text-muted-foreground">Profits Paid</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-sm text-muted-foreground">Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How TRFX Works</h2>
            <p className="text-xl text-muted-foreground">
              Our simple 3-step process to get you funded and trading with our capital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">1. Take the Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose your account size and pass our trading challenge by meeting the profit targets while following the trading rules.
                </p>
                <Button variant="link" className="mt-4 px-0" asChild>
                  <Link href="/challenges">
                    Choose Challenge <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">2. Get Funded</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Once you successfully pass the challenge, receive access to a funded account with real capital to trade in the markets.
                </p>
                <Button variant="link" className="mt-4 px-0" asChild>
                  <Link href="/how-it-works/funding-requirements">
                    Funding Requirements <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">3. Earn Profits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trade with our capital and take home up to 80% of the profits through our bi-weekly payout system.
                </p>
                <Button variant="link" className="mt-4 px-0" asChild>
                  <Link href="/how-it-works/payout-structure">
                    Payout Details <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Challenge Plans Section */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trading Challenge Plans</h2>
            <p className="text-xl text-muted-foreground">
              Choose the account size that matches your trading ambitions
            </p>
          </div>
          
          <Tabs 
            value={tab} 
            onValueChange={setTab}
            className="max-w-5xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="standard">Standard Challenge</TabsTrigger>
              <TabsTrigger value="aggressive">Aggressive Challenge</TabsTrigger>
              <TabsTrigger value="evaluation">Evaluation Program</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle>$10,000 Account</CardTitle>
                    <CardDescription>Our entry-level funded account</CardDescription>
                    <p className="text-3xl font-bold mt-4">$99</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>$10,000 funded account after passing</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>8% profit target</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>5% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 70%</span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/standard">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-primary/50 shadow-md relative">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-md">
                    POPULAR
                  </div>
                  <CardHeader>
                    <CardTitle>$50,000 Account</CardTitle>
                    <CardDescription>Our most popular funded account</CardDescription>
                    <p className="text-3xl font-bold mt-4">$249</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>$50,000 funded account after passing</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>8% profit target</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>5% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 75%</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                      <Link href="/challenges/standard">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle>$100,000 Account</CardTitle>
                    <CardDescription>For experienced traders</CardDescription>
                    <p className="text-3xl font-bold mt-4">$399</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>$100,000 funded account after passing</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>8% profit target</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>5% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 80%</span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/standard">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="aggressive">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle>$10,000 Account</CardTitle>
                    <CardDescription>Higher reward, higher risk</CardDescription>
                    <p className="text-3xl font-bold mt-4">$129</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>$10,000 funded account after passing</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>12% profit target</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>8% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 75%</span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/aggressive">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-primary/50 shadow-md relative">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-md">
                    POPULAR
                  </div>
                  <CardHeader>
                    <CardTitle>$50,000 Account</CardTitle>
                    <CardDescription>For confident traders</CardDescription>
                    <p className="text-3xl font-bold mt-4">$299</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>$50,000 funded account after passing</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>12% profit target</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>8% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 80%</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                      <Link href="/challenges/aggressive">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle>$100,000 Account</CardTitle>
                    <CardDescription>For expert traders</CardDescription>
                    <p className="text-3xl font-bold mt-4">$499</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>$100,000 funded account after passing</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>12% profit target</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>8% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 85%</span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/aggressive">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="evaluation">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle>$25,000 Account</CardTitle>
                    <CardDescription>Two-phase evaluation process</CardDescription>
                    <p className="text-3xl font-bold mt-4">$149</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Two evaluation phases</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>6% profit target per phase</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>5% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 75%</span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/evaluation">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-primary/50 shadow-md relative">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-md">
                    POPULAR
                  </div>
                  <CardHeader>
                    <CardTitle>$100,000 Account</CardTitle>
                    <CardDescription>Professional evaluation</CardDescription>
                    <p className="text-3xl font-bold mt-4">$349</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Two evaluation phases</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>6% profit target per phase</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>5% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 80%</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                      <Link href="/challenges/evaluation">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle>$200,000 Account</CardTitle>
                    <CardDescription>For elite traders</CardDescription>
                    <p className="text-3xl font-bold mt-4">$599</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Two evaluation phases</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>6% profit target per phase</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>5% maximum drawdown</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>Profit split up to 85%</span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/challenges/evaluation">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link href="/challenges/compare">
                Compare All Challenge Plans
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Traders Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied traders who have been funded by TRFX
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    JD
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">John D.</p>
                    <p className="text-sm text-muted-foreground">Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've tried several prop firms, but TRFX offers the most reasonable trading rules and the best profit split. I passed the $50K challenge in just 12 days and now trade with their capital full-time."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    SM
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The payouts are consistently on time, and their support team is always available to help. I've been trading with a funded $100K account for six months now and have withdrawn over $18,000 in profits."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    RL
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Robert L.</p>
                    <p className="text-sm text-muted-foreground">Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "TRFX's evaluation program is tough but fair. It really tests your discipline and risk management skills. After passing both phases, I now manage a $200K account and couldn't be happier with the opportunity."
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/about/testimonials">
                Read More Testimonials
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
                <Link href="/signup">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/challenges/compare">
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