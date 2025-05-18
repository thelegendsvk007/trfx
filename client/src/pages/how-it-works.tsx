import { Link } from "wouter";
import { ArrowRight, ChevronRight, LineChart, Award, TrendingUp, Clock, Target, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PageTemplate from "@/components/page-template";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HowItWorksPage() {
  return (
    <PageTemplate
      title="TRFX - How It Works"
      description="Learn how TRFX's funded trading program works, from challenge to payout."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How TRFX Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From challenge to funded trader in a simple, transparent process
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Steps */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Step 1: Take the Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose your account size and pass our trading challenge by meeting the profit targets while following the trading rules. This phase tests your ability to generate consistent returns.
                  </p>
                  <Button variant="link" className="mt-4 px-0" asChild>
                    <Link href="/how-it-works/challenge-process">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Step 2: Get Funded</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Once you successfully pass the challenge, receive access to a funded account with real capital to trade in the markets. This means trading with our money, not yours.
                  </p>
                  <Button variant="link" className="mt-4 px-0" asChild>
                    <Link href="/how-it-works/funding-requirements">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Step 3: Earn Profits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Trade with our capital and take home up to 80% of the profits. We offer bi-weekly payouts with fast processing to ensure you get your earnings quickly.
                  </p>
                  <Button variant="link" className="mt-4 px-0" asChild>
                    <Link href="/how-it-works/payout-structure">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Process */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Detailed Process</h2>
            <p className="text-lg text-muted-foreground">
              Understanding the complete journey from challenge to funded trader
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="challenge">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="challenge">Challenge Phase</TabsTrigger>
                <TabsTrigger value="evaluation">Evaluation Process</TabsTrigger>
                <TabsTrigger value="funded">Funded Trading</TabsTrigger>
              </TabsList>
              
              <TabsContent value="challenge" className="space-y-6">
                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="text-2xl font-bold mb-4">The Challenge Phase</h3>
                  <p className="text-muted-foreground mb-4">
                    The challenge phase is your opportunity to demonstrate your trading skills and discipline. Here's what you need to know:
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Target className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Profit Targets</h4>
                        <p className="text-muted-foreground">
                          Depending on your challenge type, you'll need to reach a profit target of 8-12% to pass. This demonstrates your ability to generate returns consistently.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Risk Management</h4>
                        <p className="text-muted-foreground">
                          You must maintain a maximum drawdown of 5-8% (depending on challenge type). This ensures you can manage risk effectively.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">Time Frames</h4>
                        <p className="text-muted-foreground">
                          You have up to 30 days to complete the challenge. There's no minimum day requirement - if you reach your profit target while following all rules, you can pass immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/how-it-works/challenge-process">
                        See Challenge Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="evaluation" className="space-y-6">
                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="text-2xl font-bold mb-4">The Evaluation Process</h3>
                  <p className="text-muted-foreground mb-4">
                    For our Evaluation Program, you'll go through a two-phase process to ensure consistent trading performance:
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div className="border rounded-lg p-4 bg-accent/10">
                      <h4 className="font-medium mb-2">Phase 1 Evaluation</h4>
                      <p className="text-sm text-muted-foreground">
                        The first phase tests your initial trading capabilities with these requirements:
                      </p>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>6% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>5% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Minimum 5 trading days</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Maximum 30 calendar days to complete</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-accent/10">
                      <h4 className="font-medium mb-2">Phase 2 Evaluation</h4>
                      <p className="text-sm text-muted-foreground">
                        The second phase verifies your consistency with similar requirements:
                      </p>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>6% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>5% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Minimum 10 trading days</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Maximum 60 calendar days to complete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/how-it-works/evaluation-phase">
                        See Evaluation Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="funded" className="space-y-6">
                <div className="border rounded-lg p-6 bg-card">
                  <h3 className="text-2xl font-bold mb-4">Funded Trading & Payouts</h3>
                  <p className="text-muted-foreground mb-4">
                    Once you pass the challenge or evaluation phases, you'll receive a funded account. Here's what happens next:
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div className="border rounded-lg p-4 bg-accent/10">
                      <h4 className="font-medium mb-2">Trading with Our Capital</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        As a funded trader, you'll enjoy these benefits:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Trade with our capital, not yours</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>No personal risk beyond the challenge fee</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Access to professional trading tools</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Opportunity to scale your account size over time</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-accent/10">
                      <h4 className="font-medium mb-2">Profit Splits & Payouts</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Enjoy generous profit sharing and reliable payouts:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Up to 85% profit split (depending on account type)</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Bi-weekly payout schedule</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Multiple payout methods available</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>Fast processing times (1-3 business days)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/how-it-works/payout-structure">
                        See Payout Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Trading Rules */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Rules Overview</h2>
            <p className="text-lg text-muted-foreground">
              Important guidelines to follow during your challenge and funded trading
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">General Rules</CardTitle>
                <CardDescription>Core rules that apply to all traders</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Maximum daily drawdown of 4%</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Maximum overall drawdown of 5-8%</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>Trading hours: 24/5 except holidays</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>No trading during major news events</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>One challenge attempt per person at a time</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Trading Restrictions</CardTitle>
                <CardDescription>Prohibited trading practices</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>No overnight holding on weekends</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>No excessive risk or martingale strategies</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>No copy trading or automated bots</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>No manipulation or arbitrage</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>No hedging between multiple accounts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/how-it-works/trading-rules">
                See Complete Trading Rules
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our funded trading program
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">What happens if I fail the challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you fail the challenge, you can purchase a new one and try again. We also offer reset options that allow you to restart your challenge for a smaller fee than purchasing a new one.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">How long does it take to get funded?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The time to funding depends on how quickly you pass the challenge or evaluation phases. Some traders get funded in as little as 1-2 weeks, while others may take the full allowed time (30 days for standard challenges, or up to 90 days for the full evaluation program).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Can I trade any instruments?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can trade forex pairs, indices, commodities, and selected cryptocurrencies. However, there are some restrictions on certain exotic pairs and during major market news events. See our trading rules for complete details.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">How do I receive my payouts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We process payouts bi-weekly. You can receive your profits via bank transfer, PayPal, or crypto payments. Processing typically takes 1-3 business days after the payout is approved.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/faq">
                View All FAQs
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose your challenge and begin your journey to becoming a funded trader today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  Browse Challenges
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/signup">
                  Create Account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}