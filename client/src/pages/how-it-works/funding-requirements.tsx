import { Link } from "wouter";
import { ArrowRight, CheckCircle, XCircle, ClipboardCheck, CreditCard, BarChart4, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PageTemplate from "@/components/page-template";

export default function FundingRequirementsPage() {
  return (
    <PageTemplate
      title="TRFX - Funding Requirements"
      description="Learn about the requirements to qualify for a funded trading account with TRFX."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Funding Requirements
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The path to trading with our capital and achieving financial independence
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Pathway to Funding</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At TRFX, we provide serious traders with the opportunity to access substantial trading capital without risking their own money. Our funding process is designed to identify skilled traders who can consistently generate profits while maintaining disciplined risk management.
                  </p>
                  <p className="text-muted-foreground">
                    The funding requirements outlined on this page apply to all of our challenge programs and represent the consistent standards we use to evaluate trader performance. Meeting these requirements demonstrates your ability to trade professionally and responsibly with our capital.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you're pursuing our Standard, Aggressive, or Evaluation Challenge, understanding these requirements is essential to your success in obtaining a funded trading account.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-6">Key Requirements</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <ClipboardCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Performance Metrics</h4>
                      <p className="text-sm text-muted-foreground">
                        Meet profit targets while staying within drawdown limits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <CalendarClock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Consistency Requirements</h4>
                      <p className="text-sm text-muted-foreground">
                        Demonstrate consistent trading activity over the evaluation period.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                      <BarChart4 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Trading Rules Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        Adhere to all trading rules and risk management guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Performance Requirements */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Performance Requirements</h2>
            <p className="text-lg text-muted-foreground">
              Key metrics you need to achieve to qualify for funding
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50 mb-10">
              <CardHeader>
                <CardTitle className="text-xl">Profit & Drawdown Requirements</CardTitle>
                <CardDescription>
                  Requirements by challenge type and phase
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Challenge Type</TableHead>
                      <TableHead>Phase</TableHead>
                      <TableHead>Profit Target</TableHead>
                      <TableHead>Max Drawdown</TableHead>
                      <TableHead>Daily Drawdown</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell rowSpan={2} className="font-medium">Standard Challenge</TableCell>
                      <TableCell>Phase 1</TableCell>
                      <TableCell>8%</TableCell>
                      <TableCell>5%</TableCell>
                      <TableCell>3%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Phase 2</TableCell>
                      <TableCell>5%</TableCell>
                      <TableCell>5%</TableCell>
                      <TableCell>3%</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell rowSpan={2} className="font-medium">Aggressive Challenge</TableCell>
                      <TableCell>Phase 1</TableCell>
                      <TableCell>10%</TableCell>
                      <TableCell>8%</TableCell>
                      <TableCell>4%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Phase 2</TableCell>
                      <TableCell>5%</TableCell>
                      <TableCell>8%</TableCell>
                      <TableCell>4%</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell rowSpan={1} className="font-medium">Evaluation Challenge</TableCell>
                      <TableCell>Single Phase</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>5%</TableCell>
                      <TableCell>3%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="bg-muted/20 p-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Drawdown percentages are calculated from the highest equity point reached in the account. Breaching any drawdown limit results in automatic disqualification.
                </p>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Profit Target Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>Profit Calculation:</strong> Profit is calculated as a percentage of the initial account balance, not the current equity.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>No Daily Requirements:</strong> There are no daily profit requirements—only the overall profit target for the phase.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>Fast Track Option:</strong> Achieving 12% or more profit in Phase 1 of Standard or Aggressive challenges may qualify you for Fast Track funding (subject to risk rule compliance).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>Consistency Factor:</strong> We value consistent profitability over erratic large wins, as this demonstrates a sustainable trading approach.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Drawdown Explanations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>Maximum Drawdown:</strong> The highest allowed decline from the peak equity during the entire evaluation phase. Exceeding this at any point results in failure.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>Daily Drawdown:</strong> The maximum allowed decline within a single trading day (reset at 5 PM EST). Exceeding this on any day results in failure.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>Floating vs. Realized:</strong> Both floating (unrealized) and realized drawdown are considered. Open positions that create drawdown beyond limits will lead to disqualification.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>No Reset Option:</strong> There are no options to reset drawdown counters during an evaluation phase.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consistency Requirements */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Consistency Requirements</h2>
            <p className="text-lg text-muted-foreground">
              Trading activity requirements that demonstrate sustainable performance
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Minimum Trading Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">5 / 10</div>
                      <p className="text-sm text-muted-foreground">Phase 1 / Phase 2</p>
                    </div>
                    <p className="text-muted-foreground">
                      You must actively trade on at least 5 different calendar days in Phase 1 and 10 different calendar days in Phase 2. The Evaluation Challenge requires 10 trading days.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Time Limits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">30 / 60</div>
                      <p className="text-sm text-muted-foreground">Days for Phase 1 / Phase 2</p>
                    </div>
                    <p className="text-muted-foreground">
                      The maximum calendar days allowed to complete each phase. After these periods expire, the challenge is considered failed if the profit target hasn't been met.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Trading Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">24/5</div>
                      <p className="text-sm text-muted-foreground">Trading Window</p>
                    </div>
                    <p className="text-muted-foreground">
                      Trading is allowed 24 hours a day, 5 days a week during market hours. Weekend trading is not permitted, and positions should be closed before the weekend.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Trading Activity Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Healthy Trading Patterns</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>Regular trading activity throughout the evaluation period</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>Consistent position sizing appropriate to account size</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>Trading across different market conditions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>Reasonable mix of winning and losing trades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>Logical entry and exit points based on observable patterns</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Patterns Raising Concerns</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>Minimal trading activity until the final days of the period</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>Extremely large position sizes relative to account balance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>Trading only during specific news events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>Unusual winning streaks without logical explanation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>Trading patterns indicating use of prohibited strategies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/20 p-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Note: Our trading specialists review account activity for patterns that may indicate manipulation or unsustainable strategies. Accounts with suspicious trading patterns may be subject to additional review before funding.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Trading Rules */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Rules Compliance</h2>
            <p className="text-lg text-muted-foreground">
              Key rules that must be followed during the evaluation process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-10 bg-amber-500/10 border-amber-500/30">
              <AlertTitle className="text-amber-500">Important Note on Trading Rules</AlertTitle>
              <AlertDescription className="text-amber-500/90">
                <p className="mt-2">
                  Violation of any of the trading rules below will result in immediate disqualification from the challenge, regardless of profit performance. All trading rules are enforced by our automated monitoring systems and manual reviews.
                </p>
              </AlertDescription>
            </Alert>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Position Management Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Maximum Lot Size Limitations</p>
                        <p className="text-sm">
                          Maximum position size is limited to 10 standard lots per trade for accounts up to $100,000 and 20 standard lots for larger accounts.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Weekend Position Closure</p>
                        <p className="text-sm">
                          All positions must be closed before the weekend market closure (Friday 5 PM EST). Positions left open over the weekend will result in disqualification.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">News Event Restrictions</p>
                        <p className="text-sm">
                          Holding positions through high-impact news events (such as FOMC, NFP) is prohibited due to the extreme volatility and gap risk.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Holding Period Limits</p>
                        <p className="text-sm">
                          Each position can be held for a maximum of 7 consecutive calendar days. Positions held longer will be subject to review and possible disqualification.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Prohibited Trading Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Automated Trading</p>
                        <p className="text-sm">
                          Fully automated trading using Expert Advisors (EAs) is prohibited. Semi-automated tools for trade management are permitted.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Martingale Strategies</p>
                        <p className="text-sm">
                          Martingale or anti-martingale strategies that involve increasing position sizes after losses or wins are strictly prohibited.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Grid Trading</p>
                        <p className="text-sm">
                          Grid trading systems that open multiple positions at predetermined intervals without proper risk management are not allowed.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Arbitrage & Latency Exploitation</p>
                        <p className="text-sm">
                          Trading strategies that exploit price latency, arbitrage opportunities, or broker feed imperfections are prohibited.
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
                  <CardTitle className="text-xl">Account Management Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Account Sharing</p>
                            <p className="text-sm">
                              Trading accounts must not be shared with or traded by anyone other than the registered account holder.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Copy Trading</p>
                            <p className="text-sm">
                              Copy trading, signal following, or mirroring trades from other sources is not permitted during evaluation.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Multiple Challenges</p>
                            <p className="text-sm">
                              Trading identical strategies across multiple challenge accounts simultaneously is prohibited.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">VPN/Proxy Usage</p>
                            <p className="text-sm">
                              Use of VPNs, proxies, or IP masking tools to disguise location or circumvent restrictions is prohibited.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Platform Manipulation</p>
                            <p className="text-sm">
                              Any attempt to manipulate the trading platform, exploit bugs, or interfere with performance monitoring is prohibited.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Communication Devices</p>
                            <p className="text-sm">
                              Using communication devices to coordinate trades across accounts or with other traders is prohibited.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/20 p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    For a complete list of trading rules and detailed explanations, please visit our <Link href="/how-it-works/trading-rules" className="text-primary underline underline-offset-2">Trading Rules</Link> page.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Verification Process */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Verification Process</h2>
            <p className="text-lg text-muted-foreground">
              What happens after you meet the funding requirements
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <div className="text-lg font-bold">1</div>
                  </div>
                  <CardTitle className="text-xl">Automated Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Once you achieve your profit target, our automated system conducts an initial verification of your account performance against all requirements and rules.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Timeframe: Immediate
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <div className="text-lg font-bold">2</div>
                  </div>
                  <CardTitle className="text-xl">Manual Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our trading analysts perform a thorough review of your trading patterns, position sizing, and overall consistency to verify compliance with all rules.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Timeframe: 1-2 business days
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <div className="text-lg font-bold">3</div>
                  </div>
                  <CardTitle className="text-xl">Account Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    After successful verification, you'll receive login credentials for your funded trading account with the same size as your challenge account.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Timeframe: 1-3 business days after approval
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4 text-center">Identity Verification</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
                Before receiving access to your funded account, you'll need to complete identity verification
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Required Documentation</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CreditCard className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Valid government-issued photo ID (passport, driver's license)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CreditCard className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Proof of address (utility bill, bank statement, less than 3 months old)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CreditCard className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Selfie holding your ID document</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CreditCard className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Signed trader agreement (provided after challenge completion)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Verification Process</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span>Submit documents through your secure TRFX dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span>Verification is typically completed within 24-48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span>You'll receive an email confirmation once verified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span>Funded account credentials are provided immediately after verification</span>
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Take the Challenge?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Now that you understand the funding requirements, take the first step towards trading with our capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  View Challenge Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works/payout-structure">
                  Learn About Payouts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}