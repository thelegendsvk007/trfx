import { Link } from "wouter";
import { ArrowRight, ChevronRight, LineChart, Award, TrendingUp, CheckCircle, Timer, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import PageTemplate from "@/components/page-template";

export default function ChallengeProcessPage() {
  return (
    <PageTemplate
      title="TRFX - Challenge Process"
      description="Understand the steps to complete our trading challenge and get funded with TRFX."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Challenge Process
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your step-by-step journey from challenge to funded trader
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/challenges">
                View Challenges
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">The Challenge Journey</h2>
            <p className="text-lg text-muted-foreground">
              Follow these steps to become a funded trader with TRFX
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-24 left-1/2 h-[calc(100%-140px)] w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-24 relative">
              {/* Step 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="text-sm font-medium text-muted-foreground mb-2">STEP 1</div>
                  <h3 className="text-2xl font-bold mb-3">Choose Your Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    Select the challenge type and account size that best fits your trading style and goals. We offer Standard, Aggressive, and Evaluation Program options with account sizes ranging from $10,000 to $200,000.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center md:justify-end gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Multiple challenge types available</span>
                    </div>
                    <div className="flex items-center md:justify-end gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Various account sizes to choose from</span>
                    </div>
                    <div className="flex items-center md:justify-end gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">One-time payment with no monthly fees</span>
                    </div>
                  </div>
                </div>
                <div className="md:pl-8 order-1 md:order-2 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 hidden md:flex">1</div>
                  <Card className="border border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                        <LineChart className="h-6 w-6" />
                      </div>
                      <CardTitle>Select Your Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Create an account, browse our challenge options, and make your selection. Once your payment is processed, we'll set up your challenge account within 24 hours.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/challenges/compare">
                          Compare Plans
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:pr-8 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -right-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 hidden md:flex">2</div>
                  <Card className="border border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                        <Target className="h-6 w-6" />
                      </div>
                      <CardTitle>Complete the Challenge</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Trade with the demo account following our trading rules. Reach your profit target while staying within the drawdown limits to pass the challenge.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/how-it-works/trading-rules">
                          Trading Rules
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">STEP 2</div>
                  <h3 className="text-2xl font-bold mb-3">Trade and Meet Targets</h3>
                  <p className="text-muted-foreground mb-4">
                    Trade using your MetaTrader 4 or 5 platform, aiming to reach the profit target while adhering to our risk management rules. You'll need to demonstrate consistent profitability without exceeding the maximum drawdown limits.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Trade with MetaTrader 4 or 5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Real-time tracking of your progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Trade on your own schedule (24/5)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="text-sm font-medium text-muted-foreground mb-2">STEP 3</div>
                  <h3 className="text-2xl font-bold mb-3">Get Funded</h3>
                  <p className="text-muted-foreground mb-4">
                    Once you successfully meet all challenge requirements, we'll review your performance and set up your funded account. This typically takes 1-3 business days after challenge completion.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center md:justify-end gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Fast verification process</span>
                    </div>
                    <div className="flex items-center md:justify-end gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Trade with our capital</span>
                    </div>
                    <div className="flex items-center md:justify-end gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">No personal risk beyond challenge fee</span>
                    </div>
                  </div>
                </div>
                <div className="md:pl-8 order-1 md:order-2 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 hidden md:flex">3</div>
                  <Card className="border border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                        <Award className="h-6 w-6" />
                      </div>
                      <CardTitle>Receive Funding</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Access your funded account credentials and start trading with our capital. The account size will match what you selected during the challenge phase.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/how-it-works/funding-requirements">
                          Funding Requirements
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:pr-8 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -right-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 hidden md:flex">4</div>
                  <Card className="border border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <CardTitle>Earn Profits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Trade profitably and receive your share of the profits on a bi-weekly basis. Continue to follow our trading rules while managing the funded account.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/how-it-works/payout-structure">
                          Payout Structure
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">STEP 4</div>
                  <h3 className="text-2xl font-bold mb-3">Withdraw Your Profits</h3>
                  <p className="text-muted-foreground mb-4">
                    Enjoy bi-weekly profit payments with up to 85% profit split depending on your account type. We offer multiple payout methods including bank transfer, PayPal, and cryptocurrency options.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Bi-weekly profit payouts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Up to 85% profit split</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">Multiple payout methods</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Typical Timeline</h2>
            <p className="text-lg text-muted-foreground">
              How long the process usually takes from challenge to funding
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-3">
                    <Timer className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Challenge Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Time: 1-24 hours</span><br />
                    After purchase, your challenge account is typically set up within a few hours during business days, or by the next business day for weekend purchases.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-3">
                    <Timer className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Challenge Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Time: 5-30 days (average)</span><br />
                    Typical challenge completion times range from 1-4 weeks depending on your trading style and the challenge type. You have up to 30 days (or more for Evaluation Phase 2).
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-3">
                    <Timer className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Funding Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Time: 1-3 business days</span><br />
                    Once you've passed the challenge, our team reviews your performance and sets up your funded account within 1-3 business days. You'll receive login details via email.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-6 text-muted-foreground text-sm">
              <p>
                <span className="font-medium">Total time from start to funding:</span> As little as 1 week (for fast traders) to 4+ weeks (for most traders)
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Common Questions */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground">
              Frequently asked questions about our challenge process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What happens if I fail the challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you fail to meet the challenge requirements (exceeding drawdown limits or not meeting profit targets within the time limit), your challenge account will be closed. You can purchase a new challenge or use our Reset option to restart your existing challenge for a discounted fee.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Can I hold positions over the weekend?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, all positions must be closed before market close on Friday. This rule applies to both challenge and funded accounts. Weekend gap risk is significant, and this policy helps protect both you and our capital from unpredictable weekend market movements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Is there a time limit for the challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, Standard and Aggressive challenges have a 30-day time limit. For the Evaluation Program, Phase 1 has a 30-day limit, and Phase 2 has a 60-day limit. However, there's no minimum time - you can pass as soon as you reach your profit target while following all rules.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Do I need to trade every day?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, you don't need to trade daily during Standard and Aggressive challenges. For the Evaluation Program, you need to trade on at least 5 different days in Phase 1 and 10 different days in Phase 2. Quality of trades is more important than frequency.
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
      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Start Your Challenge?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards becoming a funded trader with TRFX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  View Challenges
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