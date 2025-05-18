import { Link } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle, AlertCircle, LineChart, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import PageTemplate from "@/components/page-template";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StandardChallengePage() {
  return (
    <PageTemplate
      title="TRFX - Standard Trading Challenge"
      description="Our balanced trading challenge designed for consistent traders. Complete the challenge and get funded with up to $200,000 capital."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Standard Trading Challenge
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our most popular challenge designed for balanced risk and consistent performance
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
              Select the account size that aligns with your trading goals and experience
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* $10,000 Account */}
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
                    <span>70% profit split</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/payment?plan=standard-10k">
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
                    <span>75% profit split</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                  <Link href="/payment?plan=standard-50k">
                    Choose Plan
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* $100,000 Account */}
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
                    <span>80% profit split</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/payment?plan=standard-100k">
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
              Clear guidelines for successfully completing the Standard Challenge
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
                      <p className="font-medium">8% Profit Target</p>
                      <p className="text-sm text-muted-foreground">Reach a minimum of 8% profit to pass the challenge.</p>
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
                      <p className="font-medium">5% Maximum Drawdown</p>
                      <p className="text-sm text-muted-foreground">Never exceed 5% drawdown from initial balance.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium">4% Daily Drawdown Limit</p>
                      <p className="text-sm text-muted-foreground">Maximum 4% loss in a single trading day.</p>
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
      
      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose the Standard Challenge</h2>
            <p className="text-lg text-muted-foreground">
              The perfect balance of achievable targets and strong risk management
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Balanced Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Standard Challenge offers achievable profit targets with reasonable risk parameters, making it ideal for traders who value consistency over aggressive profits.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Single-Phase Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get funded faster with our streamlined single-phase challenge. Demonstrate your trading ability once and move directly to a funded account without additional evaluation steps.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Strong Profit Split</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive up to 80% of the profits you generate on our funded accounts, with no hidden fees or charges. Our competitive profit-sharing model rewards your success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from traders who passed our Standard Challenge
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    MS
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Michael S.</p>
                    <p className="text-sm text-muted-foreground">$50,000 Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The Standard Challenge was perfect for my trading style. I was able to pass in 18 days with a disciplined approach to risk management. The 8% target was challenging but achievable without taking excessive risks."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    JT
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Jessica T.</p>
                    <p className="text-sm text-muted-foreground">$100,000 Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I tried other prop firms before finding TRFX. Their Standard Challenge has the most reasonable rules and the best overall package. After passing, I've been trading a funded account for over 8 months and withdrawing profits regularly."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our Standard Challenge
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="general">General Questions</TabsTrigger>
                <TabsTrigger value="technical">Technical Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How long do I have to complete the challenge?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You have up to 30 calendar days to complete the Standard Challenge. There's no minimum time requirement - if you reach the 8% profit target while following all trading rules, you can pass immediately.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What happens if I fail the challenge?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      If you fail the challenge, you can purchase a new one to try again. We also offer reset options that allow you to restart your challenge for a smaller fee than purchasing a new one (typically 20-30% of the original price).
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How quickly will I get funded after passing?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Once you successfully pass the challenge, your funded account is typically set up within 1-3 business days. You'll receive an email with your funded account login credentials and can start trading immediately.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="technical" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What platforms can I use for trading?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our Standard Challenge is available on MetaTrader 4 and MetaTrader 5. You can choose your preferred platform during the purchase process. All account metrics, including profit targets and drawdown limits, are tracked in real-time on both platforms.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What instruments can I trade?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You can trade forex pairs, indices, commodities, and selected cryptocurrencies. The complete list of available instruments is provided after purchase, but includes all major and minor forex pairs, major indices (US30, NASDAQ, S&P 500, etc.), and commodities like gold, silver, and oil.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Are there any trading style restrictions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We allow most legitimate trading styles, but prohibit martingale strategies, excessive scalping (trades under 1 minute), arbitrage, and trade copying. News trading during major economic releases is also not permitted. Swing trading, day trading, and position trading are all acceptable approaches.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/faq">
                  View All FAQs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Take the Challenge?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey to becoming a funded trader with our Standard Challenge
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