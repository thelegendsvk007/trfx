import { Link } from "wouter";
import { ArrowRight, AlertTriangle, ShieldAlert, Clock, Ban, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTemplate from "@/components/page-template";

export default function TradingRulesPage() {
  return (
    <PageTemplate
      title="TRFX - Trading Rules"
      description="Learn about the trading rules and guidelines for TRFX funded accounts and evaluation challenges."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Rules
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Guidelines and regulations for successful trading with TRFX
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Why We Have Trading Rules</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At TRFX, our trading rules are designed to promote sustainable, responsible trading practices and ensure the long-term success of both our traders and our funding program.
                  </p>
                  <p className="text-muted-foreground">
                    These rules mimic the risk management practices used by professional trading firms and institutional investors, preparing you for success not just in our program, but in the broader trading industry.
                  </p>
                  <p className="text-muted-foreground">
                    Understanding and adhering to these rules is essential for both passing the evaluation challenges and maintaining your funded account. Violations of any critical rule can result in immediate disqualification or account termination.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-6">Rule Categories</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-rose-500/10 text-rose-500 shrink-0 mt-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Critical Rules</h4>
                      <p className="text-sm text-muted-foreground">
                        Violations result in immediate disqualification or account termination.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500/10 text-amber-500 shrink-0 mt-1">
                      <ShieldAlert className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Risk Management Rules</h4>
                      <p className="text-sm text-muted-foreground">
                        Govern position sizing, drawdown limits, and exposure.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500/10 text-blue-500 shrink-0 mt-1">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Trading Activity Rules</h4>
                      <p className="text-sm text-muted-foreground">
                        Define minimum trading requirements and time restrictions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Alert className="mt-12 bg-amber-500/10 border-amber-500/30">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <AlertTitle className="text-amber-500">Important</AlertTitle>
              <AlertDescription className="text-amber-500/90">
                <p className="mt-2">
                  All trading accounts are continuously monitored by our automated systems and periodically reviewed by our risk management team. Rule violations are detected in real-time and may result in immediate action without prior notice.
                </p>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
      
      {/* Critical Rules */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Critical Trading Rules</h2>
            <p className="text-lg text-muted-foreground">
              Non-negotiable rules that must be followed at all times
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50 mb-10">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[350px]">Rule</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="w-[120px] text-center">Challenge</TableHead>
                      <TableHead className="w-[120px] text-center">Funded</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Maximum Drawdown Limit</TableCell>
                      <TableCell>Account equity must never drop below the maximum drawdown threshold from the highest achieved equity point.</TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Daily Drawdown Limit</TableCell>
                      <TableCell>Account equity must not drop more than the specified percentage within a single trading day (reset at 5:00 PM EST).</TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Weekend Position Closure</TableCell>
                      <TableCell>All positions must be closed before market closure on Friday at 5:00 PM EST. No weekend holding is permitted.</TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">No Automated Trading</TableCell>
                      <TableCell>Fully automated trading using Expert Advisors (EAs) is prohibited. Semi-automated tools for trade management are allowed.</TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">No Prohibited Strategies</TableCell>
                      <TableCell>Martingale, grid trading, arbitrage, and latency exploitation strategies are strictly prohibited.</TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">High-Impact News Restrictions</TableCell>
                      <TableCell>No holding positions through scheduled high-impact news events (FOMC, NFP, etc.).</TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <XCircle className="h-5 w-5 text-rose-500" />
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="bg-muted/20 p-4 border-t border-border">
                <div className="space-x-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <XCircle className="h-4 w-4 text-rose-500" />
                    <span>= Rule violation results in disqualification/termination</span>
                  </span>
                </div>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Drawdown Rules in Detail</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Ban className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Maximum Drawdown Calculation</p>
                        <p className="text-sm">
                          The maximum drawdown is calculated from the highest equity point reached in your account, not from the starting balance. Once your equity reaches a new high, that becomes your new reference point for drawdown calculation.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Daily Drawdown Resets</p>
                        <p className="text-sm">
                          Daily drawdown limits reset at 5:00 PM EST each trading day. The daily drawdown is calculated based on the highest equity point during that specific trading day.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Floating vs. Realized Drawdown</p>
                        <p className="text-sm">
                          Both floating (unrealized) and realized drawdown are considered in the calculation. Open positions that create drawdown beyond limits will lead to disqualification even if not closed.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Program-Specific Limits</p>
                        <p className="text-sm">
                          <strong>Standard Challenge:</strong> 5% maximum drawdown, 3% daily drawdown<br />
                          <strong>Aggressive Challenge:</strong> 8% maximum drawdown, 4% daily drawdown<br />
                          <strong>Funded Accounts:</strong> 10% maximum drawdown, 5% daily drawdown
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Prohibited Strategies Explained</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Ban className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Martingale Strategy</p>
                        <p className="text-sm">
                          Progressively increasing position sizes after losing trades to recover losses. This creates exponentially increasing risk and can lead to catastrophic losses.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Grid Trading</p>
                        <p className="text-sm">
                          Opening multiple positions at predetermined intervals without proper risk management. This can lead to excessive exposure and uncontrolled drawdown.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Arbitrage & Latency Exploitation</p>
                        <p className="text-sm">
                          Taking advantage of price discrepancies between different brokers or attempting to exploit latency in price feeds. These strategies don't represent genuine trading skill.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Ban className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Fully Automated Trading</p>
                        <p className="text-sm">
                          Using Expert Advisors (EAs) or other software to fully automate trading without human intervention is prohibited. We fund skilled traders, not algorithms.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Risk Management Rules */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Risk Management Rules</h2>
            <p className="text-lg text-muted-foreground">
              Guidelines to maintain appropriate risk levels and exposure
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="position-sizing" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="position-sizing">Position Sizing</TabsTrigger>
                <TabsTrigger value="exposure">Market Exposure</TabsTrigger>
                <TabsTrigger value="correlation">Correlation Limits</TabsTrigger>
              </TabsList>
              
              <TabsContent value="position-sizing" className="space-y-8">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Maximum Position Size Rules</CardTitle>
                    <CardDescription>
                      Limits on trade sizes to maintain appropriate risk
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Account Size</TableHead>
                          <TableHead>Maximum Lot Size per Trade</TableHead>
                          <TableHead>Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">$10,000</TableCell>
                          <TableCell>2 standard lots (200,000 units)</TableCell>
                          <TableCell rowSpan={3}>
                            <p className="text-sm text-muted-foreground">
                              For forex pairs, 1 standard lot = 100,000 units<br />
                              For indices and commodities, limits vary by instrument
                            </p>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$25,000</TableCell>
                          <TableCell>5 standard lots (500,000 units)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$50,000</TableCell>
                          <TableCell>10 standard lots (1,000,000 units)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$100,000</TableCell>
                          <TableCell>20 standard lots (2,000,000 units)</TableCell>
                          <TableCell rowSpan={2}>
                            <p className="text-sm text-muted-foreground">
                              Positions exceeding these limits will result in account review and possible warning
                            </p>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">$200,000</TableCell>
                          <TableCell>40 standard lots (4,000,000 units)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="bg-muted/20 p-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Note: These limits apply to individual trades. The cumulative position size across multiple trades should also remain within reasonable risk parameters.
                    </p>
                  </CardFooter>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Position Sizing Best Practices</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <p>
                            <strong>1-2% Risk Per Trade:</strong> Risking no more than 1-2% of account equity on any single trade is considered optimal risk management.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <p>
                            <strong>Consistent Position Sizing:</strong> Maintain relatively consistent position sizes across similar setups rather than drastically changing sizes.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <p>
                            <strong>Account for Volatility:</strong> Reduce position sizes during high-volatility periods or when trading more volatile instruments.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Position Sizing Red Flags</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <p>
                            <strong>Inconsistent Sizing:</strong> Dramatically increasing position sizes after losing trades (possible martingale strategy).
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <p>
                            <strong>Excessive Risk:</strong> Regularly risking more than 5% of account equity on individual trades.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <p>
                            <strong>Last-Minute Oversizing:</strong> Using excessively large positions near the end of the evaluation period to reach profit targets.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="exposure" className="space-y-8">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Market Exposure Limits</CardTitle>
                    <CardDescription>
                      Rules governing overall market exposure across all positions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-2">Maximum Open Exposure</h3>
                        <p className="text-muted-foreground mb-4">
                          The total exposure across all open positions should not exceed the following limits at any time:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span><strong>Challenge Accounts:</strong> 20% of account balance in margin utilization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span><strong>Funded Accounts:</strong> 30% of account balance in margin utilization</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Single Instrument Exposure</h3>
                        <p className="text-muted-foreground mb-4">
                          Maximum exposure to any single trading instrument:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span><strong>All Accounts:</strong> No more than 10% of account equity in margin for a single instrument</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Overnight Exposure</h3>
                        <p className="text-muted-foreground mb-4">
                          Positions held overnight should have reduced exposure:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span><strong>All Accounts:</strong> Maximum 15% of account equity in margin for all overnight positions combined</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/20 p-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Excessive exposure may trigger a warning or account review. Repeated violations could lead to account termination.
                    </p>
                  </CardFooter>
                </Card>
                
                <Alert className="bg-muted/30 border-primary/20">
                  <AlertDescription>
                    <p className="font-medium">Margin Utilization vs. Leverage</p>
                    <p className="mt-2 text-muted-foreground">
                      While your account may offer leverage of up to 1:100, we strongly recommend using much lower effective leverage through proper position sizing. The margin utilization limits above are designed to prevent excessive leverage usage that could lead to account blowups during volatile market conditions.
                    </p>
                  </AlertDescription>
                </Alert>
              </TabsContent>
              
              <TabsContent value="correlation" className="space-y-8">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Correlation Risk Management</CardTitle>
                    <CardDescription>
                      Guidelines for managing highly correlated positions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">
                        When trading multiple correlated instruments, special attention must be paid to the combined risk exposure. Correlated markets move in similar directions, which can multiply both profits and losses.
                      </p>
                      
                      <div>
                        <h3 className="font-medium mb-2">Correlated Currency Pairs</h3>
                        <p className="text-muted-foreground mb-4">
                          The following currency pairs are considered highly correlated:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span>EUR/USD and GBP/USD (positive correlation)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span>USD/CHF and USD/JPY (positive correlation)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span>EUR/USD and USD/CHF (negative correlation)</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Correlation Management Rules</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span><strong>Same Direction Trades:</strong> When trading multiple positively correlated pairs in the same direction, reduce position sizes to account for increased risk exposure.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span><strong>Combined Exposure:</strong> The combined lot size for highly correlated instruments should not exceed the maximum allowed for a single instrument.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                            <span><strong>Risk Calculation:</strong> When calculating your per-trade risk, consider the combined risk of all correlated positions.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/20 p-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      This is not a hard rule but a strong recommendation. Proper correlation management is essential for sustainable trading success.
                    </p>
                  </CardFooter>
                </Card>
                
                <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                  <h3 className="text-xl font-bold mb-4">Example of Correlation Risk</h3>
                  <p className="text-muted-foreground mb-4">
                    A trader with a $100,000 account takes the following positions:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• Buy 5 lots of EUR/USD</li>
                    <li>• Buy 5 lots of GBP/USD</li>
                    <li>• Buy 5 lots of AUD/USD</li>
                  </ul>
                  <p className="text-muted-foreground mb-4">
                    While each position individually might seem within risk limits, these three pairs are all positively correlated with each other due to the USD component. If USD strengthens, all three positions will lose money simultaneously, potentially creating a much larger drawdown than anticipated.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Better Approach:</strong> Reduce the position size in each pair to 2-3 lots to account for the correlation, or diversify by trading pairs with different base currencies and varying correlations.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Trading Activity Rules */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Activity Requirements</h2>
            <p className="text-lg text-muted-foreground">
              Rules governing minimum trading activity and time restrictions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Minimum Trading Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">5 / 10</div>
                      <p className="text-sm text-muted-foreground">Phase 1 / Phase 2</p>
                    </div>
                    <p className="text-muted-foreground">
                      You must actively trade on at least 5 different calendar days in Phase 1 and 10 different calendar days in Phase 2. The Evaluation Challenge requires a minimum of 10 trading days.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border pt-4 bg-muted/20">
                  <p className="text-sm text-muted-foreground">
                    A trading day is defined as a day with at least one opened and closed position.
                  </p>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Maximum Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">30 / 60</div>
                      <p className="text-sm text-muted-foreground">Days (Phase 1 / Phase 2)</p>
                    </div>
                    <p className="text-muted-foreground">
                      Phase 1 must be completed within 30 calendar days, and Phase 2 within 60 calendar days. The Evaluation Challenge has a 45-day time limit.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border pt-4 bg-muted/20">
                  <p className="text-sm text-muted-foreground">
                    Accounts expire automatically if profit targets are not met within these timeframes.
                  </p>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Funded Account Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">5</div>
                      <p className="text-sm text-muted-foreground">Days per Month</p>
                    </div>
                    <p className="text-muted-foreground">
                      Funded traders must maintain active trading on at least 5 different days per calendar month to keep their account in good standing.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border pt-4 bg-muted/20">
                  <p className="text-sm text-muted-foreground">
                    Extended periods of inactivity may result in account review or potential termination.
                  </p>
                </CardFooter>
              </Card>
            </div>
            
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Trading Hours & Restrictions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Trading Hours</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span><strong>Forex Markets:</strong> Trading allowed 24/5 from Sunday 5:00 PM EST to Friday 5:00 PM EST</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span><strong>Indices:</strong> Trading hours vary by index, following their respective exchange hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span><strong>Commodities:</strong> Trading hours follow their respective market sessions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">Time Restrictions</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Weekend Trading:</strong> No positions can be held over the weekend (must close by Friday 5:00 PM EST)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>High-Impact News:</strong> No holding through major economic releases like FOMC, NFP, etc.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Ban className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Maximum Hold Time:</strong> No position can be held for more than 7 consecutive calendar days</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">News Event Guidelines</h3>
                  <p className="text-muted-foreground mb-4">
                    The following high-impact news events require special attention:
                  </p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>News Event</TableHead>
                        <TableHead>Affected Instruments</TableHead>
                        <TableHead>Restriction</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">FOMC Meetings & Rate Decisions</TableCell>
                        <TableCell>All USD pairs, US indices</TableCell>
                        <TableCell>Close positions 1 hour before, can reopen 30 minutes after</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Non-Farm Payrolls (NFP)</TableCell>
                        <TableCell>All USD pairs, US indices</TableCell>
                        <TableCell>Close positions 1 hour before, can reopen 30 minutes after</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Central Bank Rate Decisions</TableCell>
                        <TableCell>Related currency pairs</TableCell>
                        <TableCell>Close positions 1 hour before, can reopen 30 minutes after</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">GDP Releases</TableCell>
                        <TableCell>Related currency pairs</TableCell>
                        <TableCell>Reduce position size or close before announcement</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/20 p-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Trading through high-impact news events can lead to extreme volatility, slippage, and potential violation of drawdown rules. We strongly recommend avoiding these situations.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Account Monitoring */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Account Monitoring</h2>
            <p className="text-lg text-muted-foreground">
              How we track compliance with trading rules
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Automated Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Real-time Monitoring:</strong> Our systems continuously monitor all trading accounts for rule violations, with immediate notification of critical issues.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Drawdown Tracking:</strong> Maximum and daily drawdown limits are tracked in real-time with automatic alerts when approaching thresholds.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Trading Pattern Analysis:</strong> Algorithmic detection of prohibited strategies like martingale and grid trading.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Activity Monitoring:</strong> Tracking of minimum trading days and consistent activity requirements.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Manual Review Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Challenge Completion Review:</strong> Before progression to the next phase or funding, our trading specialists perform a comprehensive review of the account's trading history.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Suspicious Activity Investigation:</strong> Accounts flagged by our automated systems undergo detailed manual review by our risk management team.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Payout Verification:</strong> Before processing withdrawal requests, accounts are reviewed for rule compliance during the profit-generating period.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                        <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </div>
                      <span><strong>Regular Audits:</strong> Periodic comprehensive reviews of funded accounts to ensure ongoing compliance with all trading rules.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border/50">
              <h3 className="text-xl font-bold mb-4 text-center">Rule Violation Consequences</h3>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Violation Type</TableHead>
                    <TableHead>First Occurrence</TableHead>
                    <TableHead>Repeated Violations</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Critical Rule Violations<br />(Drawdown breaches, weekend holdings, etc.)</TableCell>
                    <TableCell>Immediate disqualification or account termination</TableCell>
                    <TableCell>N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Risk Management Violations<br />(Excessive position sizing, exposure, etc.)</TableCell>
                    <TableCell>Warning and account review</TableCell>
                    <TableCell>Account suspension or termination</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Trading Activity Violations<br />(Insufficient trading days, etc.)</TableCell>
                    <TableCell>Warning with 30-day correction period</TableCell>
                    <TableCell>Account suspension or termination</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Suspicious Trading Patterns<br />(Possible prohibited strategies)</TableCell>
                    <TableCell>Account review and potential warning</TableCell>
                    <TableCell>Account termination</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our trading rules
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Can I use stop-loss EAs or semi-automated tools?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, semi-automated tools for trade management are permitted. This includes trailing stop-loss EAs, break-even scripts, and partial take-profit automation. What's prohibited is fully automated trading that makes entry decisions without human intervention.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">What happens if there's a major news event I wasn't aware of?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide an economic calendar with highlighted high-impact events in your dashboard. However, if you unintentionally hold through a news event, we evaluate the situation case-by-case. Consistent pattern of "accidental" news trading will still be considered a violation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">What if I'm close to violating drawdown, but the market recovers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As long as your account equity never breaches the maximum or daily drawdown thresholds, you're still in compliance. Close calls are not rule violations, but they indicate a need to reassess your risk management approach.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Can I trade cryptocurrency pairs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer trading on major cryptocurrency pairs. However, due to higher volatility, we recommend using smaller position sizes when trading crypto. The same drawdown rules apply to crypto trading as with other instruments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">What if I need to take a break from trading?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For funded accounts, you can request a trading pause of up to 30 days per calendar year without affecting your account status. For challenge accounts, the evaluation period continues regardless of whether you're actively trading, so plan accordingly.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Are there any restrictions on trading strategies?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Besides the prohibited strategies mentioned (martingale, grid trading, etc.), you're free to use any legitimate trading approach. Day trading, swing trading, position trading, and scalping are all permitted as long as they adhere to the risk management rules.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Trade with Clear Rules?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the challenge and demonstrate your ability to follow professional trading practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges/compare">
                  View Challenge Plans
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