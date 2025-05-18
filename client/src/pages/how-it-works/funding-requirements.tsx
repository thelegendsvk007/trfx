import { Link } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle, AlertCircle, ShieldCheck, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTemplate from "@/components/page-template";

export default function FundingRequirementsPage() {
  return (
    <PageTemplate
      title="TRFX - Funding Requirements"
      description="Understand what you need to achieve to receive a funded account with TRFX."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Funding Requirements
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              What you need to achieve to receive a funded account
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
      
      {/* Core Requirements */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Funding Requirements</h2>
            <p className="text-lg text-muted-foreground">
              The essential criteria you must meet to receive a funded account
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Success Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Reach Profit Target</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="block">Standard Challenge: 8% profit</span>
                        <span className="block">Aggressive Challenge: 12% profit</span>
                        <span className="block">Evaluation Program: 6% profit in each phase</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Complete Within Time Limit</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="block">Standard & Aggressive: 30 calendar days</span>
                        <span className="block">Evaluation Phase 1: 30 calendar days</span>
                        <span className="block">Evaluation Phase 2: 60 calendar days</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Meet Minimum Trading Days</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="block">Standard & Aggressive: 5 trading days</span>
                        <span className="block">Evaluation Phase 1: 5 trading days</span>
                        <span className="block">Evaluation Phase 2: 10 trading days</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Follow Trading Hours</p>
                      <p className="text-sm text-muted-foreground">Trade only during allowed market hours. Close all positions before weekend market closure.</p>
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
                <CardTitle className="text-xl">Risk Management Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Maintain Maximum Drawdown</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="block">Standard & Evaluation: 5% max drawdown</span>
                        <span className="block">Aggressive: 8% max drawdown</span>
                        <span className="block">Never exceed these limits at any point during the challenge</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Respect Daily Drawdown Limits</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="block">Standard & Evaluation: 4% daily max drawdown</span>
                        <span className="block">Aggressive: 5% daily max drawdown</span>
                        <span className="block">This is calculated from the start to end of each trading day</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Adhere to Lot Size Restrictions</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="block">Maximum lot sizes are scaled to account size</span>
                        <span className="block">Details provided with your challenge account</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">No Prohibited Trading Practices</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="block">No news trading during major economic releases</span>
                        <span className="block">No martingale strategies, grid trading, or arbitrage</span>
                        <span className="block">No trade copying or use of automated systems</span>
                      </p>
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
      
      {/* Requirements Comparison */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Challenge Requirements Comparison</h2>
            <p className="text-lg text-muted-foreground">
              Compare the funding requirements across our different challenge types
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[200px]">Requirement</TableHead>
                  <TableHead>Standard Challenge</TableHead>
                  <TableHead>Aggressive Challenge</TableHead>
                  <TableHead>Evaluation Program</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Profit Target</TableCell>
                  <TableCell>8%</TableCell>
                  <TableCell>12%</TableCell>
                  <TableCell>6% per phase (total 12%)</TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">Maximum Drawdown</TableCell>
                  <TableCell>5%</TableCell>
                  <TableCell>8%</TableCell>
                  <TableCell>5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Daily Drawdown Limit</TableCell>
                  <TableCell>4%</TableCell>
                  <TableCell>5%</TableCell>
                  <TableCell>4%</TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">Time Limit</TableCell>
                  <TableCell>30 days</TableCell>
                  <TableCell>30 days</TableCell>
                  <TableCell>30 days + 60 days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Minimum Trading Days</TableCell>
                  <TableCell>5 days</TableCell>
                  <TableCell>5 days</TableCell>
                  <TableCell>5 days + 10 days</TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">Number of Phases</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/challenges/compare">
                Compare All Challenge Plans
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Verification Process */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Verification & Funding Process</h2>
            <p className="text-lg text-muted-foreground">
              What happens after you meet all requirements
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="relative pl-10 pb-6 border-l border-border">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">Automatic Detection</h3>
                <p className="text-muted-foreground mb-3">
                  Our system automatically detects when you've met all the requirements for funding. You don't need to manually notify us when you think you've passed.
                </p>
              </div>
              
              <div className="relative pl-10 pb-6 border-l border-border">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">Trading Review</h3>
                <p className="text-muted-foreground mb-3">
                  Our team conducts a quick review of your trading history to verify compliance with all trading rules and requirements. This is to ensure there were no rule violations during your challenge.
                </p>
              </div>
              
              <div className="relative pl-10 pb-6 border-l border-border">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">Account Setup</h3>
                <p className="text-muted-foreground mb-3">
                  After verification is complete, we set up your funded account with the same size as your challenge account. This process typically takes 1-3 business days from the completion of your challenge.
                </p>
              </div>
              
              <div className="relative pl-10 pb-6 border-l border-border">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">Login Credentials</h3>
                <p className="text-muted-foreground mb-3">
                  You'll receive an email with your funded account login credentials, including server information, login ID, and password. These details will allow you to access your funded MetaTrader account.
                </p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">Start Trading</h3>
                <p className="text-muted-foreground mb-3">
                  Once you receive your credentials, you can immediately begin trading with our capital. The same trading rules regarding drawdown limits and prohibited practices apply to your funded account.
                </p>
              </div>
            </div>
            
            <div className="mt-10 p-4 bg-muted/30 rounded-lg border border-border/50">
              <p className="text-center text-muted-foreground">
                <span className="font-medium">Typical timeline:</span> 1-3 business days from challenge completion to funded account access
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits of Meeting Requirements */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Benefits of Meeting Our Requirements</h2>
            <p className="text-lg text-muted-foreground">
              What you gain from successfully completing our challenge
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Trade Our Capital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access a funded account with up to $200,000 of our capital. Trade without risking your own money beyond the initial challenge fee, removing personal financial risk from your trading.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Keep Majority of Profits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoy generous profit splits of up to 85%, depending on your account size and challenge type. Our bi-weekly payout system ensures you receive your earnings regularly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Scale Your Account</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Opportunity to scale your account size over time. After consistent profitability, you may qualify for our scaling program, increasing your account size and earning potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground">
              Frequently asked questions about our funding requirements
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What happens if I almost meet the requirements?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  There's no partial credit or exceptions to our funding requirements. You must meet all criteria exactly as specified to receive a funded account. If you come close but don't fully meet the requirements, you'll need to start a new challenge or use our Reset option.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Can I request verification before reaching the profit target?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, verification only begins after you've reached all required targets, including the specified profit percentage. Our system automatically detects when you've met all requirements and initiates the verification process.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Are the funded account requirements the same?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, the same risk management rules (maximum drawdown, daily drawdown limits, etc.) apply to both challenge and funded accounts. The primary difference is that you'll be trading with our capital in the funded account and will receive your share of the profits.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What if I need more time to complete the challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you're approaching the time limit but haven't yet reached your profit target, you can use our Extension option (if available for your challenge type) or purchase a new challenge after the current one expires. The Extension option provides additional time for an extra fee.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Take On the Challenge?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose your challenge and begin your journey to becoming a funded trader
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