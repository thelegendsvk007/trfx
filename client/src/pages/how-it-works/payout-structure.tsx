import { Link } from "wouter";
import { ArrowRight, Wallet, Calendar, DollarSign, ArrowUpRight, Clock, ShieldCheck, PercentIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import PageTemplate from "@/components/page-template";

export default function PayoutStructurePage() {
  return (
    <PageTemplate
      title="TRFX - Payout Structure"
      description="Learn about TRFX's profit sharing model and payout structure for funded traders."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Payout Structure
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              How we share profits and process withdrawals for funded traders
            </p>
          </div>
        </div>
      </section>
      
      {/* Profit Sharing Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Profit Sharing Model</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At TRFX, we believe in rewarding skilled traders generously. Our profit-sharing model is designed to provide you with a significant portion of the profits you generate while trading with our capital.
                  </p>
                  <p className="text-muted-foreground">
                    Once you've successfully completed our evaluation process and received a funded account, you'll earn up to 80% of the net profits you generate, with no hidden fees or deductions. This industry-leading split ensures your hard work and trading skill are properly rewarded.
                  </p>
                  <p className="text-muted-foreground">
                    Our transparent payout system allows you to withdraw your earnings twice a month, providing consistent income for successful traders while maintaining the security and sustainability of our funding program.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <PercentIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Up to 80% Profit Split</h4>
                      <p className="text-sm text-muted-foreground">
                        Earn up to 80% of the net profits you generate with your funded account.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Bi-Monthly Payouts</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular withdrawals on the 15th and last day of each month.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Scaling Program</h4>
                      <p className="text-sm text-muted-foreground">
                        Increase your account size through consistent performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Profit Split Details */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Profit Split Structure</h2>
            <p className="text-lg text-muted-foreground">
              How your profit percentage is calculated and distributed
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="standard">Standard Program</TabsTrigger>
                <TabsTrigger value="express">Express Program</TabsTrigger>
                <TabsTrigger value="scaling">Scaling Program</TabsTrigger>
              </TabsList>
              
              <TabsContent value="standard" className="space-y-8">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Standard Profit Split</CardTitle>
                    <CardDescription>
                      For traders who complete the two-phase evaluation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Account Size</TableHead>
                          <TableHead>Initial Profit Split</TableHead>
                          <TableHead>After 3 Months</TableHead>
                          <TableHead>After 6 Months</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">$25,000</TableCell>
                          <TableCell>70%</TableCell>
                          <TableCell>75%</TableCell>
                          <TableCell>80%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$50,000</TableCell>
                          <TableCell>70%</TableCell>
                          <TableCell>75%</TableCell>
                          <TableCell>80%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$100,000</TableCell>
                          <TableCell>70%</TableCell>
                          <TableCell>75%</TableCell>
                          <TableCell>80%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$200,000</TableCell>
                          <TableCell>70%</TableCell>
                          <TableCell>75%</TableCell>
                          <TableCell>80%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="bg-muted/20 p-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Profit splits increase over time as you demonstrate consistent performance with your funded account.
                    </p>
                  </CardFooter>
                </Card>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Standard Program Details</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Initial 70% Split:</strong> You'll start with a 70% profit share immediately after receiving your funded account.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>3-Month Increase:</strong> After 3 months of active trading with consistent profits and no rule violations, your profit share increases to 75%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>6-Month Maximum:</strong> After 6 months of continued successful trading, you'll receive the maximum 80% profit share.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Eligibility Requirements:</strong> Must maintain a consistently profitable account and adhere to all trading rules to qualify for increases.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="express" className="space-y-8">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Express Program Profit Split</CardTitle>
                    <CardDescription>
                      For traders who complete the one-phase evaluation challenge
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Account Size</TableHead>
                          <TableHead>Initial Profit Split</TableHead>
                          <TableHead>After 4 Months</TableHead>
                          <TableHead>After 8 Months</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">$10,000</TableCell>
                          <TableCell>65%</TableCell>
                          <TableCell>70%</TableCell>
                          <TableCell>75%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$25,000</TableCell>
                          <TableCell>65%</TableCell>
                          <TableCell>70%</TableCell>
                          <TableCell>75%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$50,000</TableCell>
                          <TableCell>65%</TableCell>
                          <TableCell>70%</TableCell>
                          <TableCell>75%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$100,000</TableCell>
                          <TableCell>65%</TableCell>
                          <TableCell>70%</TableCell>
                          <TableCell>75%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="bg-muted/20 p-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      The Express Program offers a slightly lower profit split but provides faster access to a funded account through a single evaluation phase.
                    </p>
                  </CardFooter>
                </Card>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Express Program Details</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Initial 65% Split:</strong> Start with a 65% profit share after completing the single-phase evaluation challenge.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>4-Month Increase:</strong> After 4 months of consistent trading and profitability, your share increases to 70%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>8-Month Maximum:</strong> After 8 months, you can reach the maximum 75% profit share for Express Program accounts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Upgrade Option:</strong> After 6 months, traders can elect to move to the Standard Program structure with higher profit splits.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="scaling" className="space-y-8">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Scaling Program</CardTitle>
                    <CardDescription>
                      Increase your account size with consistent performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-6 bg-muted/30 rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Account Scaling Milestones</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                            <div className="text-sm font-bold">1</div>
                          </div>
                          <div>
                            <p className="font-medium mb-1">25% Account Growth</p>
                            <p className="text-sm text-muted-foreground">After reaching 25% profit on your initial account size, you'll qualify for a 25% increase in your trading capital.</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start gap-3">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                            <div className="text-sm font-bold">2</div>
                          </div>
                          <div>
                            <p className="font-medium mb-1">50% Account Growth</p>
                            <p className="text-sm text-muted-foreground">After achieving 50% profit on your initial account size, your account will be increased by 50% of the original amount.</p>
                          </div>
                        </li>
                        
                        <li className="flex items-start gap-3">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                            <div className="text-sm font-bold">3</div>
                          </div>
                          <div>
                            <p className="font-medium mb-1">100% Account Growth</p>
                            <p className="text-sm text-muted-foreground">Reaching 100% profit on your initial account will double your trading capital.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Scaling Program Rules</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </div>
                          <span><strong>Profit Calculation:</strong> Scaling milestones are based on closed profits from your trading activity.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </div>
                          <span><strong>Drawdown Reset:</strong> When your account is scaled, drawdown limits are recalculated based on the new account size.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </div>
                          <span><strong>Maximum Scaling:</strong> Accounts can be scaled up to 10x their original size through consistent profitability.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </div>
                          <span><strong>No Fee for Scaling:</strong> There are no additional fees to participate in the account scaling program.</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Alert className="bg-muted/30 border-primary/20">
                  <AlertDescription>
                    <p className="font-medium">Example Scaling Scenario:</p>
                    <p className="mt-2">
                      A trader starts with a $50,000 funded account. After generating $12,500 in profits (25% of initial size), the account is increased to $62,500. After earning another $12,500 (reaching 50% of initial account size), the account grows to $75,000. Upon reaching $50,000 in total profits (100% of initial size), the account doubles to $100,000.
                    </p>
                  </AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Payout Process */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Payout Process</h2>
            <p className="text-lg text-muted-foreground">
              How withdrawals are processed and paid to funded traders
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Payout Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Payouts are processed twice a month on the 15th and the last day of each month. Any profits generated during the payout period become available for withdrawal on these dates.
                  </p>
                  <div className="p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Payout Dates:</p>
                    <ul className="space-y-1">
                      <li>• 15th of each month</li>
                      <li>• Last day of each month</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Withdrawal Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We offer multiple withdrawal methods to ensure you can receive your profits quickly and securely, regardless of your location.
                  </p>
                  <div className="p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Available Methods:</p>
                    <ul className="space-y-1">
                      <li>• Bank Transfer (SEPA/ACH/Wire)</li>
                      <li>• PayPal</li>
                      <li>• Skrill</li>
                      <li>• Cryptocurrency (BTC, ETH, USDT)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Processing Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We process all withdrawal requests promptly to ensure you receive your profits as quickly as possible after the payout date.
                  </p>
                  <div className="p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Typical Processing Times:</p>
                    <ul className="space-y-1">
                      <li>• Cryptocurrency: 1-2 business days</li>
                      <li>• E-wallets: 1-3 business days</li>
                      <li>• Bank Transfers: 3-5 business days</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Payout Process Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <div className="text-sm font-bold">1</div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Profit Calculation</p>
                      <p className="text-muted-foreground">
                        At the end of each payout period, we calculate your net profits based on closed positions. This includes both realized profits and any fees or charges incurred during trading.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <div className="text-sm font-bold">2</div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Withdrawal Request</p>
                      <p className="text-muted-foreground">
                        Log into your TRFX dashboard and submit a withdrawal request for your available profits. You can request any amount up to your total available balance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <div className="text-sm font-bold">3</div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Verification & Approval</p>
                      <p className="text-muted-foreground">
                        Our finance team verifies your request against account activity and trading compliance. First-time withdrawals undergo additional verification to ensure security.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <div className="text-sm font-bold">4</div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Funds Transfer</p>
                      <p className="text-muted-foreground">
                        Once approved, we process your payment via your chosen method. You'll receive confirmation when the funds are sent, along with any relevant tracking information.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Payout Requirements */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Payout Requirements & Policies</h2>
            <p className="text-lg text-muted-foreground">
              Important information about withdrawal eligibility and restrictions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Eligibility Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Account Compliance:</strong> Your trading account must be in compliance with all trading rules and risk parameters.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Minimum Amount:</strong> Minimum withdrawal amount is $100 or equivalent in other currencies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Verified Identity:</strong> Completed KYC verification is required for all withdrawals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Trading Activity:</strong> Minimum of 5 trading days in the current month to be eligible for that month's payouts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Account Status:</strong> Your account must not be under review or suspended at the time of withdrawal.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Important Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">No Profit Threshold</p>
                        <p className="text-sm">
                          Unlike some programs, we don't require you to reach a certain profit threshold before withdrawing. All profits are eligible for withdrawal during the scheduled payout periods.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Account Balancing</p>
                        <p className="text-sm">
                          After a withdrawal, your account balance is reset to the initial funded amount, ensuring consistency in trading conditions and risk parameters.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Tax Considerations</p>
                        <p className="text-sm">
                          Traders are responsible for their own tax obligations. We provide annual statements for your tax reporting purposes, but do not withhold taxes from payouts.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Fees & Charges</p>
                        <p className="text-sm">
                          TRFX covers the transaction fees for most withdrawal methods. For certain payment options or expedited processing, nominal fees may apply and will be clearly displayed before confirmation.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-2">What happens if I have a losing month?</h3>
                      <p className="text-sm text-muted-foreground">
                        There are no negative balance consequences. If you have a losing month, you simply won't have profits available for withdrawal. Your account continues with the same initial balance, and you can begin generating new profits for the next payout period.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Can I reinvest my profits instead of withdrawing?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, you have the option to leave profits in your account to potentially increase future earnings. However, this does not change your maximum drawdown limits, which remain based on your initial account size.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">What if I miss a withdrawal deadline?</h3>
                      <p className="text-sm text-muted-foreground">
                        If you do not submit a withdrawal request before a payout date, your profits remain in your account and become available for the next scheduled payout period.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Is there a maximum withdrawal amount?</h3>
                      <p className="text-sm text-muted-foreground">
                        There is no cap on withdrawal amounts as long as they represent actual trading profits. You can withdraw your full profit share during each payout period.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Example Calculation */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Example Payout Calculation</h2>
            <p className="text-lg text-muted-foreground">
              See how profit sharing works in practice with a real-world example
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">$100,000 Funded Account Example</CardTitle>
                <CardDescription>
                  A month-by-month breakdown of profits and payouts
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead>Account Performance</TableHead>
                      <TableHead>Net Profit</TableHead>
                      <TableHead>Profit Split</TableHead>
                      <TableHead className="text-right">Trader Payout</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Month 1</TableCell>
                      <TableCell>+8% ($8,000)</TableCell>
                      <TableCell>$8,000</TableCell>
                      <TableCell>70%</TableCell>
                      <TableCell className="text-right font-medium">$5,600</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Month 2</TableCell>
                      <TableCell>+5% ($5,000)</TableCell>
                      <TableCell>$5,000</TableCell>
                      <TableCell>70%</TableCell>
                      <TableCell className="text-right font-medium">$3,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Month 3</TableCell>
                      <TableCell>-2% (-$2,000)</TableCell>
                      <TableCell>-$2,000</TableCell>
                      <TableCell>70%</TableCell>
                      <TableCell className="text-right font-medium">$0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Month 4</TableCell>
                      <TableCell>+10% ($10,000)</TableCell>
                      <TableCell>$10,000</TableCell>
                      <TableCell>75%</TableCell>
                      <TableCell className="text-right font-medium">$7,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Month 5</TableCell>
                      <TableCell>+7% ($7,000)</TableCell>
                      <TableCell>$7,000</TableCell>
                      <TableCell>75%</TableCell>
                      <TableCell className="text-right font-medium">$5,250</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Month 6</TableCell>
                      <TableCell>+6% ($6,000)</TableCell>
                      <TableCell>$6,000</TableCell>
                      <TableCell>75%</TableCell>
                      <TableCell className="text-right font-medium">$4,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Month 7</TableCell>
                      <TableCell>+9% ($9,000)</TableCell>
                      <TableCell>$9,000</TableCell>
                      <TableCell>80%</TableCell>
                      <TableCell className="text-right font-medium">$7,200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium font-bold">6-Month Total</TableCell>
                      <TableCell className="font-bold">+43% ($43,000)</TableCell>
                      <TableCell className="font-bold">$43,000</TableCell>
                      <TableCell className="font-bold">-</TableCell>
                      <TableCell className="text-right font-medium font-bold">$33,550</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="bg-muted/20 p-4 border-t border-border">
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    This example shows how profit sharing increases over time as the trader demonstrates consistent performance.
                  </p>
                  <div className="shrink-0">
                    <p className="text-sm"><strong>Average Monthly Payout:</strong> $4,792</p>
                    <p className="text-sm"><strong>Effective Profit Share:</strong> 78%</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border/50">
              <h3 className="text-xl font-bold mb-4 text-center">Key Insights from the Example</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p>
                          Even with a losing month, the trader earned over $33,000 in six months without risking any personal capital.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p>
                          The profit share increased from 70% to 80% over time, rewarding consistent performance.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p>
                          After each payout, the account balance returned to $100,000, maintaining consistent trading conditions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p>
                          With consistent performance, this account would qualify for scaling, potentially increasing both capital and earnings.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Earning?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step toward trading with our capital and earning substantial profits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  View Challenge Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works/trading-rules">
                  Learn About Trading Rules
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}