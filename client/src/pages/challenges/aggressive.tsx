import { Link } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle, AlertCircle, Zap, Trophy, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import PageTemplate from "@/components/page-template";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AggressiveChallengePage() {
  return (
    <PageTemplate
      title="TRFX - Aggressive Trading Challenge"
      description="Our advanced trading challenge designed for traders seeking higher returns. Take on higher targets with greater risk tolerance and earn up to 85% profit splits."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                HIGHER REWARD
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Aggressive Trading Challenge
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              For confident traders seeking higher returns with greater risk tolerance
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/signup">
                Start Your Challenge
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Account Options */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Choose Your Account Size</h2>
            <p className="text-lg text-muted-foreground">
              Select the account size that matches your ambition and experience level
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* $10,000 Account */}
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
                    <span>75% profit split</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/payment?plan=aggressive-10k">
                    Choose Plan
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* $50,000 Account */}
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
                    <span>80% profit split</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                  <Link href="/payment?plan=aggressive-50k">
                    Choose Plan
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* $100,000 Account */}
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
                    <span>85% profit split</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/payment?plan=aggressive-100k">
                    Choose Plan
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Challenge Rules */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Challenge Rules</h2>
            <p className="text-lg text-muted-foreground">
              Key guidelines for successfully completing the Aggressive Challenge
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Success Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">12% Profit Target</p>
                      <p className="text-sm text-muted-foreground">Reach a minimum of 12% profit to pass the challenge.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">30 Day Time Limit</p>
                      <p className="text-sm text-muted-foreground">Complete the challenge within 30 calendar days.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">Minimum 5 Trading Days</p>
                      <p className="text-sm text-muted-foreground">Trade on at least 5 different calendar days.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">Trading Hours Compliance</p>
                      <p className="text-sm text-muted-foreground">Trade only during allowed market hours.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">8% Maximum Drawdown</p>
                      <p className="text-sm text-muted-foreground">Never exceed 8% drawdown from initial balance.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">5% Daily Drawdown Limit</p>
                      <p className="text-sm text-muted-foreground">Maximum 5% loss in a single trading day.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">Lot Size Restrictions</p>
                      <p className="text-sm text-muted-foreground">Maximum lot size based on account (details in full rules).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">No Weekend Holding</p>
                      <p className="text-sm text-muted-foreground">All positions must be closed before weekend market closure.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-xl mx-auto mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              For a comprehensive understanding of our trading rules and guidelines, please review our complete documentation.
            </p>
            <Button variant="outline" asChild>
              <Link href="/how-it-works/trading-rules">
                View Complete Trading Rules
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Standard vs Aggressive Comparison */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Standard vs. Aggressive Challenge</h2>
            <p className="text-lg text-muted-foreground">
              Understanding the key differences between our challenge types
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 border-b border-border"></th>
                    <th className="text-center p-4 border-b border-border">
                      <div className="font-medium">Standard Challenge</div>
                    </th>
                    <th className="text-center p-4 border-b border-border bg-primary/5">
                      <div className="font-medium">Aggressive Challenge</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Profit Target</td>
                    <td className="text-center p-4 border-b border-border">8%</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">12%</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Maximum Drawdown</td>
                    <td className="text-center p-4 border-b border-border">5%</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">8%</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Daily Drawdown Limit</td>
                    <td className="text-center p-4 border-b border-border">4%</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">5%</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Time Limit</td>
                    <td className="text-center p-4 border-b border-border">30 days</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">30 days</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Min. Trading Days</td>
                    <td className="text-center p-4 border-b border-border">5 days</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">5 days</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Profit Split</td>
                    <td className="text-center p-4 border-b border-border">Up to 80%</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">Up to 85%</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Ideal For</td>
                    <td className="text-center p-4 border-b border-border">Conservative traders</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">Confident traders</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/challenges/compare">
                  Compare All Challenge Types
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose the Aggressive Challenge</h2>
            <p className="text-lg text-muted-foreground">
              Greater rewards for traders confident in their abilities
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Higher Profit Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With a profit target of 12%, the Aggressive Challenge pushes you to achieve greater returns, preparing you for high-performance trading on funded accounts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Trophy className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Premium Profit Split</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn our highest profit split of up to 85% when trading with the Aggressive Challenge $100K account, maximizing your earnings on every profitable trade.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BarChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Greater Risk Allowance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With an 8% maximum drawdown limit, you have more room to execute your trading strategy, allowing for more flexibility during volatile market conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from traders who conquered our Aggressive Challenge
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    RL
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Robert L.</p>
                    <p className="text-sm text-muted-foreground">$100,000 Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The Aggressive Challenge was perfect for my trading style. I needed the extra room that the 8% drawdown provides, and the 12% target pushed me to be more selective with my trades. Passed in 21 days and now managing a $100K account with an 85% profit split."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    AK
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Alex K.</p>
                    <p className="text-sm text-muted-foreground">$50,000 Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I started with a Standard Challenge but failed due to hitting the 5% drawdown. Switched to the Aggressive Challenge and the extra 3% drawdown allowance made all the difference. The higher profit target actually improved my discipline. Now trading a funded account for 5 months."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our Aggressive Challenge
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is the Aggressive Challenge harder to pass?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Aggressive Challenge has a higher profit target (12% vs 8%) but also provides more risk allowance (8% vs 5% drawdown). It's designed for traders who need more flexibility and are confident in their ability to generate higher returns. Whether it's harder depends on your trading style - some traders find the extra drawdown allowance makes it easier despite the higher profit target.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I switch from Standard to Aggressive Challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, if you've purchased a Standard Challenge but haven't yet started trading or have minimal trades, you can contact our support team to upgrade to an Aggressive Challenge by paying the difference in price. If you've already failed a Standard Challenge, purchasing a new Aggressive Challenge is often a good option if you need the higher drawdown allowance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Does the Aggressive Challenge have the same instruments available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, both Standard and Aggressive Challenges offer the same range of tradable instruments, including forex pairs, indices, commodities, and selected cryptocurrencies. The difference is in the profit targets and risk parameters, not the available markets or products.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why is the Aggressive Challenge more expensive?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Aggressive Challenge costs more because it provides greater risk allowance (8% vs 5% drawdown) and offers higher profit splits (up to 85% vs 80%). The higher price reflects the increased risk we take on by allowing a larger drawdown and the premium profit-sharing terms provided to successful traders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready for the Challenge?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take your trading to the next level with our Aggressive Challenge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/signup">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/challenges/compare">
                  Compare All Challenges
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}