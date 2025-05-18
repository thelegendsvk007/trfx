import { Link } from "wouter";
import { ArrowRight, Zap, Award, BarChart4, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTemplate from "@/components/page-template";

export default function ChallengesPage() {
  return (
    <PageTemplate
      title="TRFX - Trading Challenges"
      description="Prove your trading skills and get funded with our trading challenges. Choose from Standard, Aggressive, or our comprehensive Evaluation Program."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Challenges
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Prove your trading skills and get funded with up to $200,000
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
      
      {/* Challenge Types */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Choose Your Challenge</h2>
            <p className="text-lg text-muted-foreground">
              Select the challenge that best matches your trading style and goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Standard Challenge */}
            <Card className="border border-border/50 overflow-hidden flex flex-col">
              <div className="border-b border-border/50 bg-muted/20 p-3 text-center">
                <span className="text-sm font-medium">Balanced Approach</span>
              </div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle>Standard Challenge</CardTitle>
                <CardDescription>Moderate targets with reasonable risk</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">8% profit target</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">5% maximum drawdown</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">Single-phase process</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">Up to 80% profit split</span>
                  </li>
                </ul>
                <div className="text-center text-sm text-muted-foreground mb-4">
                  <p>Starting at</p>
                  <p className="text-2xl font-bold text-foreground">$99</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/challenges/standard">
                    View Standard Challenge
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Aggressive Challenge */}
            <Card className="border border-border/50 overflow-hidden flex flex-col">
              <div className="border-b border-border/50 bg-primary/10 p-3 text-center">
                <span className="text-sm font-medium">Higher Risk & Reward</span>
              </div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Aggressive Challenge</CardTitle>
                <CardDescription>Higher targets with more risk allowance</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">12% profit target</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">8% maximum drawdown</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">Single-phase process</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">Up to 85% profit split</span>
                  </li>
                </ul>
                <div className="text-center text-sm text-muted-foreground mb-4">
                  <p>Starting at</p>
                  <p className="text-2xl font-bold text-foreground">$129</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/challenges/aggressive">
                    View Aggressive Challenge
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Evaluation Program */}
            <Card className="border border-border/50 overflow-hidden flex flex-col">
              <div className="border-b border-border/50 bg-muted/20 p-3 text-center">
                <span className="text-sm font-medium">Two-Phase Process</span>
              </div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BarChart4 className="h-6 w-6" />
                </div>
                <CardTitle>Evaluation Program</CardTitle>
                <CardDescription>Thorough assessment for consistent traders</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">6% profit target per phase</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">5% maximum drawdown</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">Two-phase evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span className="text-sm">Up to 85% profit split</span>
                  </li>
                </ul>
                <div className="text-center text-sm text-muted-foreground mb-4">
                  <p>Starting at</p>
                  <p className="text-2xl font-bold text-foreground">$149</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/challenges/evaluation">
                    View Evaluation Program
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="max-w-xl mx-auto text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/challenges/compare">
                Compare All Challenge Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Account Sizes */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Available Account Sizes</h2>
            <p className="text-lg text-muted-foreground">
              Choose the account size that fits your trading ambitions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Account Size</TableHead>
                  <TableHead className="text-center font-medium">Standard</TableHead>
                  <TableHead className="text-center font-medium">Aggressive</TableHead>
                  <TableHead className="text-center font-medium">Evaluation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">$10,000</TableCell>
                  <TableCell className="text-center">$99</TableCell>
                  <TableCell className="text-center">$129</TableCell>
                  <TableCell className="text-center">-</TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">$25,000</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">$149</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">$50,000</TableCell>
                  <TableCell className="text-center">$249</TableCell>
                  <TableCell className="text-center">$299</TableCell>
                  <TableCell className="text-center">-</TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">$100,000</TableCell>
                  <TableCell className="text-center">$399</TableCell>
                  <TableCell className="text-center">$499</TableCell>
                  <TableCell className="text-center">$349</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">$200,000</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">-</TableCell>
                  <TableCell className="text-center">$599</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose TRFX</h2>
            <p className="text-lg text-muted-foreground">
              Our challenges are designed to set you up for success
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">High Profit Splits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn up to 85% of the profits you generate on funded accounts. Our generous profit-sharing model ensures you get the majority of your trading success.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Bi-Weekly Payouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive your profits every two weeks with our regular payout schedule. Fast processing ensures you get your earnings quickly and reliably.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Multiple Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trade on your preferred platform with full support for both MetaTrader 4 and MetaTrader 5. Our platforms are optimized for reliable execution and real-time tracking.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Scaling Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scale your account size as you demonstrate consistent profitability. With each successful milestone, you can increase your trading capital and earning potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our trading challenges
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">How do I get started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply create an account, choose your preferred challenge and account size, complete the purchase, and you'll receive your challenge account credentials within 24 hours to begin trading.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What instruments can I trade?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can trade a wide range of instruments including forex pairs, indices, commodities, and selected cryptocurrencies across all our challenge types.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What if I fail a challenge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you fail a challenge, you can purchase a new one or use our Reset option to restart your existing challenge for a reduced fee (typically 20-30% of the original price).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">How do I receive payouts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We process payouts bi-weekly through multiple payment methods including bank transfer, PayPal, and cryptocurrency options with no minimum profit requirement.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Prove Your Trading Skills?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey to funded trading today with TRFX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/login">
                  Create Account
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
        </div>
      </section>
    </PageTemplate>
  );
}