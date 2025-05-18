import { Link } from "wouter";
import { ArrowRight, Check, ChevronRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTemplate from "@/components/page-template";

export default function ComparePlansPage() {
  return (
    <PageTemplate
      title="TRFX - Compare Challenge Plans"
      description="Compare our different funded trading challenge plans side by side and find the perfect match for your trading style."
    >
      <TooltipProvider>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Compare Challenge Plans
            </h1>
            <p className="text-xl text-muted-foreground">
              Find the perfect challenge that matches your trading style and goals
            </p>
          </div>
        </div>
      </section>
      
      {/* Comparison Tabs */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="features">Features & Rules</TabsTrigger>
                <TabsTrigger value="accounts">Account Sizes</TabsTrigger>
              </TabsList>
              
              {/* Features Tab */}
              <TabsContent value="features" className="space-y-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 border-b border-border font-medium">Features</th>
                        <th className="text-center p-4 border-b border-border font-medium">Standard Challenge</th>
                        <th className="text-center p-4 border-b border-border font-medium">Aggressive Challenge</th>
                        <th className="text-center p-4 border-b border-border font-medium">Evaluation Program</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Profit Targets */}
                      <tr>
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Profit Target</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                The profit percentage you need to achieve to pass the challenge.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">8%</td>
                        <td className="text-center p-4 border-b border-border">12%</td>
                        <td className="text-center p-4 border-b border-border">6% per phase</td>
                      </tr>
                      
                      {/* Maximum Drawdown */}
                      <tr className="bg-muted/20">
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Maximum Drawdown</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                The maximum loss allowed from your initial balance. Exceeding this limit will fail the challenge.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">5%</td>
                        <td className="text-center p-4 border-b border-border">8%</td>
                        <td className="text-center p-4 border-b border-border">5%</td>
                      </tr>
                      
                      {/* Daily Drawdown Limit */}
                      <tr>
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Daily Drawdown Limit</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                The maximum loss allowed in a single trading day.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">4%</td>
                        <td className="text-center p-4 border-b border-border">5%</td>
                        <td className="text-center p-4 border-b border-border">4%</td>
                      </tr>
                      
                      {/* Number of Phases */}
                      <tr className="bg-muted/20">
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Number of Phases</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                How many evaluation phases you need to complete before getting funded.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">1 phase</td>
                        <td className="text-center p-4 border-b border-border">1 phase</td>
                        <td className="text-center p-4 border-b border-border">2 phases</td>
                      </tr>
                      
                      {/* Time Limit */}
                      <tr>
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Time Limit</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                The maximum time allowed to complete the challenge.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">30 days</td>
                        <td className="text-center p-4 border-b border-border">30 days</td>
                        <td className="text-center p-4 border-b border-border">30 days (Phase 1)<br />60 days (Phase 2)</td>
                      </tr>
                      
                      {/* Minimum Trading Days */}
                      <tr className="bg-muted/20">
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Minimum Trading Days</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                The minimum number of different days you must trade.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">5 days</td>
                        <td className="text-center p-4 border-b border-border">5 days</td>
                        <td className="text-center p-4 border-b border-border">5 days (Phase 1)<br />10 days (Phase 2)</td>
                      </tr>
                      
                      {/* Account Sizes */}
                      <tr>
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Available Account Sizes</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                The funded account sizes available for this challenge type.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">$10K, $50K, $100K</td>
                        <td className="text-center p-4 border-b border-border">$10K, $50K, $100K</td>
                        <td className="text-center p-4 border-b border-border">$25K, $100K, $200K</td>
                      </tr>
                      
                      {/* Profit Split */}
                      <tr className="bg-muted/20">
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Profit Split</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                The percentage of profits you receive from your funded account.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">70-80%</td>
                        <td className="text-center p-4 border-b border-border">75-85%</td>
                        <td className="text-center p-4 border-b border-border">75-85%</td>
                      </tr>
                      
                      {/* Recommended For */}
                      <tr>
                        <td className="text-left p-4 border-b border-border">
                          <div className="flex items-center">
                            <span>Recommended For</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                The type of trader who would benefit most from this challenge.
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="text-center p-4 border-b border-border">Balanced traders seeking reasonable targets with moderate risk</td>
                        <td className="text-center p-4 border-b border-border">Confident traders seeking higher returns with greater risk tolerance</td>
                        <td className="text-center p-4 border-b border-border">Methodical traders focusing on consistency over time</td>
                      </tr>
                      
                      {/* Action Buttons */}
                      <tr className="bg-muted/20">
                        <td className="text-left p-4 border-b border-border"></td>
                        <td className="text-center p-4 border-b border-border">
                          <Button asChild>
                            <Link href="/challenges/standard">
                              View Standard
                            </Link>
                          </Button>
                        </td>
                        <td className="text-center p-4 border-b border-border">
                          <Button asChild>
                            <Link href="/challenges/aggressive">
                              View Aggressive
                            </Link>
                          </Button>
                        </td>
                        <td className="text-center p-4 border-b border-border">
                          <Button asChild>
                            <Link href="/challenges/evaluation">
                              View Evaluation
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              {/* Account Sizes Tab */}
              <TabsContent value="accounts" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Standard Challenge */}
                  <Card className="border border-border/50">
                    <CardHeader>
                      <CardTitle>Standard Challenge</CardTitle>
                      <CardDescription>Balanced risk & reward</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="border rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$10,000 Account</h3>
                            <span className="text-lg font-bold">$99</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">8% profit target, 5% max drawdown</div>
                          <div className="text-sm font-medium">70% profit split</div>
                        </div>
                        
                        <div className="border-2 border-primary/50 rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors relative shadow-sm">
                          <div className="absolute -top-3 right-3 bg-primary text-primary-foreground px-2 py-0.5 text-xs font-semibold rounded">
                            POPULAR
                          </div>
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$50,000 Account</h3>
                            <span className="text-lg font-bold">$249</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">8% profit target, 5% max drawdown</div>
                          <div className="text-sm font-medium">75% profit split</div>
                        </div>
                        
                        <div className="border rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$100,000 Account</h3>
                            <span className="text-lg font-bold">$399</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">8% profit target, 5% max drawdown</div>
                          <div className="text-sm font-medium">80% profit split</div>
                        </div>
                      </div>
                      
                      <Button className="w-full" asChild>
                        <Link href="/challenges/standard">
                          View Standard Challenge
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  
                  {/* Aggressive Challenge */}
                  <Card className="border border-border/50">
                    <CardHeader>
                      <CardTitle>Aggressive Challenge</CardTitle>
                      <CardDescription>Higher targets with more risk allowance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="border rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$10,000 Account</h3>
                            <span className="text-lg font-bold">$129</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">12% profit target, 8% max drawdown</div>
                          <div className="text-sm font-medium">75% profit split</div>
                        </div>
                        
                        <div className="border-2 border-primary/50 rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors relative shadow-sm">
                          <div className="absolute -top-3 right-3 bg-primary text-primary-foreground px-2 py-0.5 text-xs font-semibold rounded">
                            POPULAR
                          </div>
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$50,000 Account</h3>
                            <span className="text-lg font-bold">$299</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">12% profit target, 8% max drawdown</div>
                          <div className="text-sm font-medium">80% profit split</div>
                        </div>
                        
                        <div className="border rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$100,000 Account</h3>
                            <span className="text-lg font-bold">$499</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">12% profit target, 8% max drawdown</div>
                          <div className="text-sm font-medium">85% profit split</div>
                        </div>
                      </div>
                      
                      <Button className="w-full" asChild>
                        <Link href="/challenges/aggressive">
                          View Aggressive Challenge
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  
                  {/* Evaluation Program */}
                  <Card className="border border-border/50">
                    <CardHeader>
                      <CardTitle>Evaluation Program</CardTitle>
                      <CardDescription>Two-phase thorough assessment</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="border rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$25,000 Account</h3>
                            <span className="text-lg font-bold">$149</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">6% profit target per phase, 5% max drawdown</div>
                          <div className="text-sm font-medium">75% profit split</div>
                        </div>
                        
                        <div className="border-2 border-primary/50 rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors relative shadow-sm">
                          <div className="absolute -top-3 right-3 bg-primary text-primary-foreground px-2 py-0.5 text-xs font-semibold rounded">
                            POPULAR
                          </div>
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$100,000 Account</h3>
                            <span className="text-lg font-bold">$349</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">6% profit target per phase, 5% max drawdown</div>
                          <div className="text-sm font-medium">80% profit split</div>
                        </div>
                        
                        <div className="border rounded-lg p-4 bg-card hover:bg-accent/10 transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">$200,000 Account</h3>
                            <span className="text-lg font-bold">$599</span>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">6% profit target per phase, 5% max drawdown</div>
                          <div className="text-sm font-medium">85% profit split</div>
                        </div>
                      </div>
                      
                      <Button className="w-full" asChild>
                        <Link href="/challenges/evaluation">
                          View Evaluation Program
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Challenge Selection Guide */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Which Challenge Is Right For You?</h2>
            <p className="text-lg text-muted-foreground">
              Find the best match based on your trading style and goals
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Standard Challenge</CardTitle>
                <CardDescription>Perfect for traders who want:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Balanced risk and reward approach</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Moderate profit targets (8%)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Reasonable risk parameters (5% max drawdown)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Single-phase evaluation for faster funding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Lower entry costs ($99 - $399)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Aggressive Challenge</CardTitle>
                <CardDescription>Ideal for traders who want:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Higher profit potential (12% target)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Greater risk allowance (8% max drawdown)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Higher daily drawdown limit (5%)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Single-phase process for experienced traders</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Premium profit splits (up to 85%)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Evaluation Program</CardTitle>
                <CardDescription>Best for traders who want:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Lower profit targets (6% per phase)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Comprehensive two-phase assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Focus on consistency over aggressive returns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Access to larger account sizes ($200K)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>Premium profit splits (up to 85%)</span>
                  </li>
                </ul>
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
              Common questions about our challenge plans
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Can I switch between challenge types?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you've purchased a challenge but haven't started trading (or have minimal trades), you can contact our support team to switch to a different challenge type by paying the price difference. If you've already failed a challenge, you'll need to purchase a new one.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Which challenge is easiest to pass?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This depends on your trading style. The Evaluation Program has the lowest profit targets (6% per phase) but requires consistency over a longer period. The Standard Challenge offers a good balance with moderate targets. The Aggressive Challenge has higher targets but more risk allowance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Do all challenges have the same trading rules?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The core trading rules (available instruments, trading hours, weekend holding restrictions, etc.) are the same across all challenge types. The main differences are in the profit targets, drawdown limits, and evaluation structure. All challenges use the same trading platforms (MT4/MT5).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Which challenge offers the best profit split?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Both the Aggressive Challenge and Evaluation Program offer up to 85% profit splits on their highest account tiers ($100K for Aggressive, $200K for Evaluation). The Standard Challenge offers up to 80% on its highest tier ($100K).
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
      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the challenge that best matches your trading style and begin your path to funded trading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/signup">
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
      </TooltipProvider>
    </PageTemplate>
  );
}