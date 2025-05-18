import { Link } from "wouter";
import { ArrowRight, ChevronRight, BanknoteIcon, CalendarDays, BarChart, DollarSign, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTemplate from "@/components/page-template";

export default function PayoutStructurePage() {
  return (
    <PageTemplate
      title="TRFX - Payout Structure"
      description="Learn about our profit-sharing model for funded traders at TRFX."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Payout Structure
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our profit-sharing model for funded traders
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
      
      {/* Profit Split Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Profit Split Overview</h2>
            <p className="text-lg text-muted-foreground">
              Understanding how our profit sharing works after you're funded
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[250px]">Account Size</TableHead>
                    <TableHead className="text-center">Standard Challenge</TableHead>
                    <TableHead className="text-center">Aggressive Challenge</TableHead>
                    <TableHead className="text-center">Evaluation Program</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">$10,000</TableCell>
                    <TableCell className="text-center">70% to trader</TableCell>
                    <TableCell className="text-center">75% to trader</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/20">
                    <TableCell className="font-medium">$25,000</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">75% to trader</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">$50,000</TableCell>
                    <TableCell className="text-center">75% to trader</TableCell>
                    <TableCell className="text-center">80% to trader</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/20">
                    <TableCell className="font-medium">$100,000</TableCell>
                    <TableCell className="text-center">80% to trader</TableCell>
                    <TableCell className="text-center">85% to trader</TableCell>
                    <TableCell className="text-center">80% to trader</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">$200,000</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">85% to trader</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8 p-5 rounded-lg border border-border/50 bg-card">
              <h3 className="text-lg font-bold mb-3 text-center">How Our Profit Splits Work</h3>
              <p className="text-muted-foreground mb-4">
                Our profit-sharing model is simple and transparent. After becoming a funded trader, you'll receive the percentage of profits shown above, based on your account size and the challenge type you completed. TRFX retains the remaining percentage to cover operational costs and capital allocation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">No hidden fees or charges</span> - The profit split percentage is all-inclusive.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Profits calculated on a cash basis</span> - Based on closed trades only.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Consistent split regardless of performance</span> - Your percentage doesn't change based on profit amount.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">No performance fees</span> - We don't take additional fees beyond the stated profit split.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Payout Schedule */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Payout Schedule</h2>
            <p className="text-lg text-muted-foreground">
              When and how you receive your profits
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Bi-Weekly Payouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We process payouts twice a month on the following schedule:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-medium">1</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Mid-month payout:</span> For profits accrued from the 1st to the 15th of the month.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-medium">2</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">End-month payout:</span> For profits accrued from the 16th to the last day of the month.
                    </p>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Payout requests are processed within 3 business days after each period ends.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BanknoteIcon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We offer multiple secure payment methods for your convenience:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-medium">B</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Bank Transfer:</span> Direct deposit to your bank account (available worldwide).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-medium">P</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">PayPal:</span> Fast and convenient electronic payments.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-medium">C</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Cryptocurrency:</span> BTC, ETH, and USDT options available.
                    </p>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  You can select and change your preferred payment method in your account settings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <DollarSign className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Payout Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The payout process is straightforward and user-friendly:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-medium">1</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Request:</span> Submit a payout request through your dashboard.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-medium">2</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Verification:</span> Our team verifies your trading activity and profit calculation.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="text-xs font-medium">3</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">Processing:</span> Your payment is processed via your chosen method.
                    </p>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  You'll receive email notifications at each step of the payout process.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-xl mx-auto mt-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-center text-muted-foreground text-sm">
              <span className="font-medium">Note:</span> There is no minimum profit requirement for withdrawals. You can withdraw any amount of profit you've generated during the payout period.
            </p>
          </div>
        </div>
      </section>
      
      {/* Profit Calculation */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How Profits Are Calculated</h2>
            <p className="text-lg text-muted-foreground">
              Understanding the profit calculation for your funded account
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto border border-border/50 rounded-lg overflow-hidden">
            <div className="bg-muted/20 p-6">
              <h3 className="text-lg font-bold mb-3">Profit Calculation Example</h3>
              <p className="text-muted-foreground mb-6">
                Let's look at an example of profit calculation and profit split for a $100,000 funded account with an 80% profit split:
              </p>
              
              <div className="space-y-6">
                <div className="bg-card p-4 rounded-md border border-border/50">
                  <h4 className="font-medium mb-2">Scenario: Two-Week Period</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center border-b border-border/30 pb-2">
                      <span>Starting Balance:</span>
                      <span className="font-medium">$100,000</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-border/30 pb-2">
                      <span>Trading Profit (Closed Positions):</span>
                      <span className="font-medium text-green-500">+$5,000</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-border/30 pb-2">
                      <span>Ending Balance:</span>
                      <span className="font-medium">$105,000</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-border/30 pb-2">
                      <span>Net Profit:</span>
                      <span className="font-medium text-green-500">$5,000</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-border/30 pb-2">
                      <span>Your Share (80%):</span>
                      <span className="font-medium text-green-500">$4,000</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>TRFX Share (20%):</span>
                      <span className="font-medium">$1,000</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card p-4 rounded-md border border-border/50">
                  <h4 className="font-medium mb-2">Important Notes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p>Only closed positions are counted toward profit calculations.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p>Open positions are not included in profit calculations until they are closed.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p>The profit split is applied to the net profit for the payout period, not the cumulative account balance.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p>After a payout, your account balance is reset to its original funded amount (e.g., $100,000) for the next trading period.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border/50 p-6">
              <h3 className="text-lg font-bold mb-3">Trading Account Balance</h3>
              <p className="text-muted-foreground mb-4">
                After each payout, your funded trading account balance is reset to its original amount:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <span className="text-xs font-medium">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Trading Period</p>
                    <p className="text-sm text-muted-foreground">You trade with your funded account (e.g., $100,000) and generate profits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <span className="text-xs font-medium">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Profit Calculation</p>
                    <p className="text-sm text-muted-foreground">At the end of the payout period, we calculate your net profit from closed positions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <span className="text-xs font-medium">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Profit Distribution</p>
                    <p className="text-sm text-muted-foreground">You receive your share of the profits (e.g., 80% of $5,000 = $4,000).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                    <span className="text-xs font-medium">4</span>
                  </div>
                  <div>
                    <p className="font-medium">Account Reset</p>
                    <p className="text-sm text-muted-foreground">Your account balance is reset to the original funded amount (e.g., back to $100,000) for the next trading period.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Account Scaling */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Account Scaling Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              How to increase your account size and earning potential
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BarChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Scaling Program</CardTitle>
                <CardDescription>Grow your account size based on performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our scaling program rewards consistent profitability by increasing your account size, allowing you to trade with more capital and earn larger profits. Here's how it works:
                </p>
                
                <div className="space-y-6">
                  <div className="border border-border/50 rounded-md p-4">
                    <h3 className="font-medium mb-3">Scaling Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Initial Scale-Up</p>
                          <p className="text-sm text-muted-foreground">Achieve 10% profit on your funded account to qualify for your first 25% account size increase.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Subsequent Scale-Ups</p>
                          <p className="text-sm text-muted-foreground">After the first scale-up, each additional 5% profit makes you eligible for another 25% account size increase.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Maximum Account Size</p>
                          <p className="text-sm text-muted-foreground">You can continue scaling up to a maximum of $2,000,000 in account size.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-border/50 rounded-md p-4">
                    <h3 className="font-medium mb-3">Example Scaling Path</h3>
                    <p className="text-sm text-muted-foreground mb-4">Here's an example of how a $100,000 account could scale over time:</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <span className="text-xs font-medium">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Initial Funded Account: $100,000</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <span className="text-xs font-medium">2</span>
                        </div>
                        <div>
                          <p className="font-medium">After 10% profit: $125,000</p>
                          <p className="text-sm text-muted-foreground">(25% increase)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <span className="text-xs font-medium">3</span>
                        </div>
                        <div>
                          <p className="font-medium">After additional 5% profit: $156,250</p>
                          <p className="text-sm text-muted-foreground">(Another 25% increase)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <span className="text-xs font-medium">4</span>
                        </div>
                        <div>
                          <p className="font-medium">After additional 5% profit: $195,313</p>
                          <p className="text-sm text-muted-foreground">(Another 25% increase)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-border/50 rounded-md p-4">
                    <h3 className="font-medium mb-3">Benefits of Scaling</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Increased earning potential</span> - Larger account size means larger absolute profits with the same percentage returns.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Same profit split percentage</span> - Your profit split remains the same as you scale up.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">No additional fees</span> - Scaling up is a free benefit for successful traders.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full text-center">
                  <Button variant="outline" asChild>
                    <Link href="/faq">
                      View Scaling FAQ
                    </Link>
                  </Button>
                </div>
              </CardFooter>
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
              Frequently asked questions about our payout structure
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Is there a minimum withdrawal amount?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, there is no minimum withdrawal amount. You can withdraw any amount of profit you've generated during the payout period, regardless of how small. We believe you should have access to all of your earnings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">How long do payouts take to process?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Payout requests are processed within 3 business days after each payout period ends. The time to receive funds depends on your chosen payment method: bank transfers typically take 2-5 business days, PayPal is usually 1-2 business days, and cryptocurrency transfers are typically completed within 24 hours.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Are there any fees for withdrawals?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TRFX does not charge any fees for processing withdrawals. However, your payment provider (bank, PayPal, etc.) may charge their standard transaction fees. These fees vary by provider and are not controlled by TRFX. Cryptocurrency withdrawals may include network transaction fees.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What happens to open positions during payout?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Open positions are not affected by the payout process and remain open in your account. Only closed positions contribute to the profit calculation for payouts. After a payout, your account balance is reset to its original funded amount, but your open positions continue as they were.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Start Earning?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the challenge today and begin your journey to earning profits with our capital
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