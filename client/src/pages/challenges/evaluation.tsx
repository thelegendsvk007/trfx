import { Link } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle, AlertCircle, BarChart4, Medal, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import PageTemplate from "@/components/page-template";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EvaluationProgramPage() {
  return (
    <PageTemplate
      title="TRFX - Evaluation Program"
      description="Our comprehensive two-phase evaluation program for traders seeking a thorough assessment of trading consistency and discipline before funding."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                TWO-PHASE PROGRAM
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Evaluation Program
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our most comprehensive evaluation process for serious traders
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/signup">
                Start Your Evaluation
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
              Select the account size that matches your trading experience and capital needs
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* $25,000 Account */}
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
                    <span>$25,000 funded account after passing both phases</span>
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
                    <span>75% profit split</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/payment?plan=evaluation-25k">
                    Choose Plan
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* $100,000 Account */}
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
                    <span>$100,000 funded account after passing both phases</span>
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
                    <span>80% profit split</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                  <Link href="/payment?plan=evaluation-100k">
                    Choose Plan
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* $200,000 Account */}
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
                    <span>$200,000 funded account after passing both phases</span>
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
                    <span>85% profit split</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/payment?plan=evaluation-200k">
                    Choose Plan
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Two-Phase Process */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Two-Phase Evaluation Process</h2>
            <p className="text-lg text-muted-foreground">
              A thorough assessment of your trading consistency and discipline
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="phase1">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="phase1">Phase 1</TabsTrigger>
                <TabsTrigger value="phase2">Phase 2</TabsTrigger>
              </TabsList>
              
              <TabsContent value="phase1" className="space-y-6">
                <Card className="border border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                      <BarChart4 className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">Phase 1: Initial Evaluation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h3 className="font-medium text-lg">Success Criteria</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                              <div>
                                <p className="font-medium">6% Profit Target</p>
                                <p className="text-sm text-muted-foreground">Reach a minimum of 6% profit.</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                              <div>
                                <p className="font-medium">Minimum 5 Trading Days</p>
                                <p className="text-sm text-muted-foreground">Trade on at least 5 different days.</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                              <div>
                                <p className="font-medium">30 Day Time Limit</p>
                                <p className="text-sm text-muted-foreground">Complete within 30 calendar days.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-medium text-lg">Risk Limits</h3>
                          <ul className="space-y-2">
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
                                <p className="font-medium">No Weekend Holding</p>
                                <p className="text-sm text-muted-foreground">All positions must be closed before weekend.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border-t border-border pt-6">
                        <h3 className="font-medium text-lg mb-3">Phase 1 Overview</h3>
                        <p className="text-muted-foreground mb-3">
                          Phase 1 tests your initial trading capabilities with a focus on achieving consistent profits while managing risk. This phase establishes if you can implement a trading strategy that generates returns within our risk parameters.
                        </p>
                        <p className="text-muted-foreground">
                          Upon successfully completing Phase 1, you will immediately progress to Phase 2 without any delays or additional fees.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="phase2" className="space-y-6">
                <Card className="border border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                      <Medal className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">Phase 2: Advanced Evaluation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h3 className="font-medium text-lg">Success Criteria</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                              <div>
                                <p className="font-medium">6% Profit Target</p>
                                <p className="text-sm text-muted-foreground">Reach a minimum of 6% profit.</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                              <div>
                                <p className="font-medium">Minimum 10 Trading Days</p>
                                <p className="text-sm text-muted-foreground">Trade on at least 10 different days.</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                              <div>
                                <p className="font-medium">60 Day Time Limit</p>
                                <p className="text-sm text-muted-foreground">Complete within 60 calendar days.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-medium text-lg">Risk Limits</h3>
                          <ul className="space-y-2">
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
                                <p className="font-medium">Consistent Performance</p>
                                <p className="text-sm text-muted-foreground">More focus on trading consistency.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border-t border-border pt-6">
                        <h3 className="font-medium text-lg mb-3">Phase 2 Overview</h3>
                        <p className="text-muted-foreground mb-3">
                          Phase 2 extends the evaluation period to verify your consistency over a longer timeframe. With a minimum requirement of 10 trading days, this phase assesses your ability to maintain discipline and consistent performance over time.
                        </p>
                        <p className="text-muted-foreground">
                          After successfully completing Phase 2, you'll receive a funded account with real capital within 1-3 business days, with a profit split of up to 85% depending on your account size.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose the Evaluation Program</h2>
            <p className="text-lg text-muted-foreground">
              The most thorough assessment for serious traders seeking long-term funding
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Scale className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Lower Profit Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With a 6% profit target per phase (compared to 8-12% for other challenges), our Evaluation Program offers more achievable goals, focusing on consistency rather than aggressive returns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BarChart4 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Thorough Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The two-phase approach evaluates your trading across different timeframes, ensuring you have the discipline and consistency needed for successful long-term trading with our capital.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Medal className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Premium Profit Splits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn up to 85% of your profits with our largest accounts. The two-phase process builds trust, allowing us to offer our most competitive profit-sharing terms to successful traders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Program Comparison</h2>
            <p className="text-lg text-muted-foreground">
              See how our Evaluation Program compares to our other challenges
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 border-b border-border"></th>
                    <th className="text-center p-4 border-b border-border">Standard</th>
                    <th className="text-center p-4 border-b border-border">Aggressive</th>
                    <th className="text-center p-4 border-b border-border bg-primary/5">Evaluation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Number of Phases</td>
                    <td className="text-center p-4 border-b border-border">1</td>
                    <td className="text-center p-4 border-b border-border">1</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">2</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Profit Target</td>
                    <td className="text-center p-4 border-b border-border">8%</td>
                    <td className="text-center p-4 border-b border-border">12%</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">6% per phase</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Maximum Drawdown</td>
                    <td className="text-center p-4 border-b border-border">5%</td>
                    <td className="text-center p-4 border-b border-border">8%</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">5%</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Time Limit</td>
                    <td className="text-center p-4 border-b border-border">30 days</td>
                    <td className="text-center p-4 border-b border-border">30 days</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">30 + 60 days</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Min. Trading Days</td>
                    <td className="text-center p-4 border-b border-border">5 days</td>
                    <td className="text-center p-4 border-b border-border">5 days</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">5 + 10 days</td>
                  </tr>
                  <tr>
                    <td className="text-left p-4 border-b border-border font-medium">Ideal For</td>
                    <td className="text-center p-4 border-b border-border">Balanced traders</td>
                    <td className="text-center p-4 border-b border-border">Risk-tolerant traders</td>
                    <td className="text-center p-4 border-b border-border bg-primary/5">Consistent traders</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/challenges/compare">
                  View Full Comparison
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from traders who completed our Evaluation Program
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    DM
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">David M.</p>
                    <p className="text-sm text-muted-foreground">$200,000 Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The two-phase approach really helped me develop as a trader. I could focus on consistency rather than aggressive returns, which actually improved my overall performance. Now managing a $200K account with an 85% profit split - it's been life-changing."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    KL
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Karen L.</p>
                    <p className="text-sm text-muted-foreground">$100,000 Funded Trader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I failed several one-phase challenges with other firms before trying TRFX's Evaluation Program. The lower 6% profit target per phase was much more achievable for my trading style. Completed both phases in about 60 days total and have been trading funded for 7 months now."
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
              Common questions about our Evaluation Program
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why does the Evaluation Program have two phases?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The two-phase approach allows us to thoroughly assess your trading consistency across different timeframes. Phase 1 establishes your basic trading capabilities, while Phase 2 verifies your ability to maintain discipline and consistent performance over a longer period. This approach helps identify traders who can generate sustainable returns rather than those who might achieve a single profit target through luck or excessive risk.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a wait time between Phase 1 and Phase 2?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, there is no waiting period between phases. Once you successfully complete Phase 1, you will immediately be moved to Phase 2 without any delays. Your Phase 2 account will be ready within 24 hours of passing Phase 1, allowing you to continue your evaluation process without interruption.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens if I fail one of the phases?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you fail either Phase 1 or Phase 2, your evaluation will end. You'll have the option to purchase a new Evaluation Program or use our Reset option, which allows you to restart the failed phase for a reduced fee (typically 25-35% of the original price). Many successful funded traders failed at least once before passing, so we encourage persistence and learning from each attempt.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why choose the Evaluation Program over a single-phase challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Evaluation Program offers lower profit targets per phase (6% vs 8-12% for single-phase challenges), making it more suitable for traders who prefer a methodical, lower-risk approach. While it takes longer to complete than single-phase challenges, many traders find the two-phase process actually easier to pass overall due to the more achievable targets. It's ideal for traders focused on long-term consistency rather than short-term aggressive profits.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Begin Your Evaluation?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey to a funded trading account with our comprehensive Evaluation Program
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