import { Link } from "wouter";
import { ArrowRight, ChevronRight, BarChart4, CheckCircle, AlertCircle, Medal, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTemplate from "@/components/page-template";

export default function EvaluationPhasePage() {
  return (
    <PageTemplate
      title="TRFX - Evaluation Phase"
      description="Learn about the evaluation phases and their requirements for TRFX's funded trading program."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Evaluation Phase
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding our two-phase evaluation process
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/challenges/evaluation">
                View Evaluation Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Phase Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Two-Phase Approach</h2>
            <p className="text-lg text-muted-foreground">
              Our Evaluation Program consists of two distinct phases to thoroughly assess your trading consistency
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Phase 1 */}
              <Card className="border border-border/50 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-20 w-20 bg-primary/10 rounded-full"></div>
                <div className="absolute -right-8 -top-8 h-16 w-16 bg-primary/10 rounded-full"></div>
                <div className="absolute right-6 top-6 h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Phase 1: Initial Assessment</CardTitle>
                  <CardDescription>Your first step toward funding</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Profit Target</span>
                      <span>6%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Maximum Drawdown</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Daily Drawdown Limit</span>
                      <span>4%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Minimum Trading Days</span>
                      <span>5 days</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Maximum Duration</span>
                      <span>30 calendar days</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">Key Objectives</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Demonstrate basic trading proficiency by reaching the 6% profit target</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Show risk management discipline by staying within drawdown limits</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Trade on at least 5 different calendar days to show consistency</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <div className="text-sm text-muted-foreground mb-2">After successful completion</div>
                    <div className="p-3 bg-muted/30 rounded-md text-sm">
                      <p className="font-medium">You'll automatically advance to Phase 2</p>
                      <p className="text-muted-foreground mt-1">Your Phase 2 account will be set up within 24 hours with the same account size</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              
              {/* Phase 2 */}
              <Card className="border border-border/50 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 h-20 w-20 bg-primary/10 rounded-full"></div>
                <div className="absolute -right-8 -top-8 h-16 w-16 bg-primary/10 rounded-full"></div>
                <div className="absolute right-6 top-6 h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Phase 2: Extended Verification</CardTitle>
                  <CardDescription>Proving long-term consistency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Profit Target</span>
                      <span>6%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Maximum Drawdown</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Daily Drawdown Limit</span>
                      <span>4%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Minimum Trading Days</span>
                      <span>10 days</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium">Maximum Duration</span>
                      <span>60 calendar days</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">Key Objectives</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Verify trading consistency over a longer timeframe</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Demonstrate sustainable trading strategies with the 10-day minimum</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Maintain consistent risk management discipline</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <div className="text-sm text-muted-foreground mb-2">After successful completion</div>
                    <div className="p-3 bg-muted/30 rounded-md text-sm">
                      <p className="font-medium">You'll receive a funded trading account</p>
                      <p className="text-muted-foreground mt-1">Your funded account will be set up within 1-3 business days with up to 85% profit split</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Available Account Sizes */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Available Account Sizes</h2>
            <p className="text-lg text-muted-foreground">
              Choose from three account sizes in our Evaluation Program
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-border/50 bg-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[250px]">Account Size</TableHead>
                  <TableHead>Challenge Fee</TableHead>
                  <TableHead>Profit Split</TableHead>
                  <TableHead>Targets & Limits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">$25,000</TableCell>
                  <TableCell>$149</TableCell>
                  <TableCell>75% to trader</TableCell>
                  <TableCell>
                    <span className="block">6% profit target per phase</span>
                    <span className="block text-sm text-muted-foreground">5% max drawdown</span>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">$100,000</TableCell>
                  <TableCell>$349</TableCell>
                  <TableCell>80% to trader</TableCell>
                  <TableCell>
                    <span className="block">6% profit target per phase</span>
                    <span className="block text-sm text-muted-foreground">5% max drawdown</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">$200,000</TableCell>
                  <TableCell>$599</TableCell>
                  <TableCell>85% to trader</TableCell>
                  <TableCell>
                    <span className="block">6% profit target per phase</span>
                    <span className="block text-sm text-muted-foreground">5% max drawdown</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/challenges/evaluation">
                View Evaluation Program Details
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Key Differences */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Key Benefits of the Two-Phase Approach</h2>
            <p className="text-lg text-muted-foreground">
              Why some traders prefer our Evaluation Program over single-phase challenges
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Lower Profit Target</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With a 6% profit target per phase (compared to 8-12% for single-phase challenges), our evaluation offers more achievable goals for methodical traders who prefer steady, consistent growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Extended Timeframe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With 30 days for Phase 1 and 60 days for Phase 2, you have more time to implement your trading strategy without rushing. This reduces pressure and allows for a more natural trading approach.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Medal className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Proven Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By requiring trading on 5 days in Phase 1 and 10 days in Phase 2, we ensure funded traders have demonstrated consistent performance over time, not just short-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Tips for Success */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Tips for Success</h2>
            <p className="text-lg text-muted-foreground">
              Strategies to help you complete both evaluation phases successfully
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Focus on Consistency, Not Speed</h3>
                  <p className="text-muted-foreground">
                    The evaluation is designed to identify consistent traders, not those who take excessive risks for quick gains. Aim for steady progress toward the profit target rather than trying to achieve it in the minimum number of days.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Plan Your Trading Days</h3>
                  <p className="text-muted-foreground">
                    With minimum trading day requirements (5 for Phase 1, 10 for Phase 2), plan your schedule to ensure you meet these requirements. Consider trading smaller positions on some days to avoid unnecessary risk while fulfilling the trading day requirement.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Respect Daily Drawdown Limits</h3>
                  <p className="text-muted-foreground">
                    Remember that the 4% daily drawdown limit is separate from the 5% maximum overall drawdown. If you have a bad day approaching the daily limit, consider closing your positions and continuing fresh the next day.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Use Phase 1 as Practice</h3>
                  <p className="text-muted-foreground">
                    Consider Phase 1 as not just a test but also preparation for Phase 2. Use it to refine your strategy and risk management approach so you're fully prepared for the longer Phase 2 evaluation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                  <span className="font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Manage Position Sizes Carefully</h3>
                  <p className="text-muted-foreground">
                    Adjust your position sizes based on market volatility and your distance from profit targets or drawdown limits. As you get closer to either, consider reducing position sizes to protect your progress.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                  <span className="font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Keep a Trading Journal</h3>
                  <p className="text-muted-foreground">
                    Document your trades, strategies, and lessons learned throughout both phases. This not only helps you improve but also provides valuable insights when you transition to trading with the funded account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our evaluation phases
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Is there a waiting period between phases?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, there is no waiting period between Phase 1 and Phase 2. Once you successfully complete Phase 1, your Phase 2 account will be set up within 24 hours, allowing you to continue your evaluation process without interruption.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What if I fail one of the phases?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you fail either Phase 1 or Phase 2, your evaluation will end. You can purchase a new Evaluation Program or use our Reset option, which allows you to restart the failed phase for a reduced fee (typically 25-35% of the original program price).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Can I trade any instruments during the evaluation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can trade forex pairs, indices, commodities, and selected cryptocurrencies. The same instruments are available in both Phase 1 and Phase 2, as well as in the funded account once you successfully complete the evaluation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Why choose the two-phase evaluation over a single-phase challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The two-phase evaluation offers lower profit targets per phase (6% vs 8-12% for single-phase challenges), making it more suitable for traders who prefer a methodical, lower-risk approach. While it takes longer to complete, many traders find the two-phase process easier to pass overall.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Begin Your Evaluation?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey to becoming a funded trader with our thorough evaluation process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges/evaluation">
                  View Evaluation Program
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