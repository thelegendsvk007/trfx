import { Link } from "wouter";
import { ArrowRight, CheckCircle, AlertCircle, Clock, BarChart3, Ban, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTemplate from "@/components/page-template";

export default function TradingRulesPage() {
  return (
    <PageTemplate
      title="TRFX - Trading Rules"
      description="Understand the rules and guidelines for our trading challenges and funded accounts."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Rules
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Important guidelines for challenge and funded accounts
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
      
      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Rules Overview</h2>
            <p className="text-lg text-muted-foreground">
              These rules apply to both challenge and funded accounts
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Alert className="bg-primary/10 border-primary">
              <Info className="h-4 w-4" />
              <AlertTitle>Important Note</AlertTitle>
              <AlertDescription>
                The same trading rules apply to both challenge and funded accounts. Following these rules is essential for maintaining your account in good standing and passing the challenge.
              </AlertDescription>
            </Alert>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Performance Targets</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Profit Targets</p>
                        <p className="text-sm text-muted-foreground">
                          <span className="block">Standard Challenge: 8% profit</span>
                          <span className="block">Aggressive Challenge: 12% profit</span>
                          <span className="block">Evaluation Program: 6% profit per phase</span>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Minimum Trading Days</p>
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
                        <p className="font-medium">Time Limits</p>
                        <p className="text-sm text-muted-foreground">
                          <span className="block">Standard & Aggressive: 30 calendar days</span>
                          <span className="block">Evaluation Phase 1: 30 calendar days</span>
                          <span className="block">Evaluation Phase 2: 60 calendar days</span>
                        </p>
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
                  <CardTitle className="text-xl">Risk Management Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Maximum Drawdown</p>
                        <p className="text-sm text-muted-foreground">
                          <span className="block">Standard & Evaluation: 5% max drawdown</span>
                          <span className="block">Aggressive: 8% max drawdown</span>
                          <span className="block">Never exceed these limits at any point</span>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Daily Drawdown Limits</p>
                        <p className="text-sm text-muted-foreground">
                          <span className="block">Standard & Evaluation: 4% daily max</span>
                          <span className="block">Aggressive: 5% daily max</span>
                          <span className="block">Calculated from trading day start to end</span>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Weekend Position Closure</p>
                        <p className="text-sm text-muted-foreground">
                          All positions must be closed before market close on Friday. No positions can be held over the weekend.
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
      
      {/* Trading Restrictions */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Restrictions</h2>
            <p className="text-lg text-muted-foreground">
              Prohibited practices and activities
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Ban className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Prohibited Trading Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Martingale Strategies</p>
                        <p className="text-sm text-muted-foreground">
                          Trading strategies that involve doubling down after losses to recover previous losses are prohibited.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Grid Trading</p>
                        <p className="text-sm text-muted-foreground">
                          Placing multiple buy and sell orders at preset intervals around a set price to profit from normal price movements is not allowed.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">News Trading During Major Events</p>
                        <p className="text-sm text-muted-foreground">
                          Trading during high-impact news events (e.g., NFP, rate decisions) is prohibited due to high volatility and potential slippage.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Excessive Scalping</p>
                        <p className="text-sm text-muted-foreground">
                          Trades with a duration under 1 minute are considered excessive scalping and are not permitted.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Ban className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Prohibited Trading Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Automated Trading</p>
                        <p className="text-sm text-muted-foreground">
                          Expert Advisors (EAs), bots, or any fully automated trading systems are not permitted. Semi-automated tools for trade management are allowed.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Copy Trading</p>
                        <p className="text-sm text-muted-foreground">
                          Copying trades from other traders or services, or using signals to automate trade entry and exit is prohibited.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Arbitrage</p>
                        <p className="text-sm text-muted-foreground">
                          Exploiting price differences between brokers, markets, or instruments is not allowed.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Ban className="h-5 w-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Account Sharing</p>
                        <p className="text-sm text-muted-foreground">
                          Allowing others to trade on your account or trading on behalf of others is prohibited.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-4 bg-card border border-border/50 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Maximum Lot Size Restrictions</h3>
              <p className="text-muted-foreground mb-6">
                To ensure proper risk management, maximum lot sizes are enforced based on account size:
              </p>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[150px]">Account Size</TableHead>
                      <TableHead>Forex</TableHead>
                      <TableHead>Indices</TableHead>
                      <TableHead>Gold</TableHead>
                      <TableHead>Crypto</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">$10,000</TableCell>
                      <TableCell>1.0 lot</TableCell>
                      <TableCell>5.0 lots</TableCell>
                      <TableCell>2.0 lots</TableCell>
                      <TableCell>3.0 lots</TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/20">
                      <TableCell className="font-medium">$25,000</TableCell>
                      <TableCell>2.5 lots</TableCell>
                      <TableCell>12.5 lots</TableCell>
                      <TableCell>5.0 lots</TableCell>
                      <TableCell>7.5 lots</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">$50,000</TableCell>
                      <TableCell>5.0 lots</TableCell>
                      <TableCell>25.0 lots</TableCell>
                      <TableCell>10.0 lots</TableCell>
                      <TableCell>15.0 lots</TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/20">
                      <TableCell className="font-medium">$100,000</TableCell>
                      <TableCell>10.0 lots</TableCell>
                      <TableCell>50.0 lots</TableCell>
                      <TableCell>20.0 lots</TableCell>
                      <TableCell>30.0 lots</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">$200,000</TableCell>
                      <TableCell>20.0 lots</TableCell>
                      <TableCell>100.0 lots</TableCell>
                      <TableCell>40.0 lots</TableCell>
                      <TableCell>60.0 lots</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Note: Exceeding the maximum lot size for your account will result in a rule violation and may lead to account termination.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trading Hours and Permitted Instruments */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Hours & Instruments</h2>
            <p className="text-lg text-muted-foreground">
              When you can trade and what you can trade
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border/50">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Trading Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Standard Market Hours</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Trading is permitted 24/5 during regular market hours from Monday to Friday:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="font-medium">Forex:</span>
                        <span>Sunday 5:00 PM ET - Friday 5:00 PM ET</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Indices:</span>
                        <span>Market-specific hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Commodities:</span>
                        <span>Market-specific hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Cryptocurrencies:</span>
                        <span>24/7 (subject to weekend rule)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Weekend Position Rules</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">No weekend holding:</span> All positions must be closed before market close on Friday.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Auto-close system:</span> Any positions left open will be automatically closed by our system.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Even cryptocurrencies:</span> Despite 24/7 markets, crypto positions must also be closed for weekends.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">News Trading Restrictions</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Trading is restricted during the following high-impact news events:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Non-Farm Payrolls (NFP)</li>
                      <li>• Federal Reserve rate decisions</li>
                      <li>• Major central bank announcements</li>
                      <li>• Other high-impact economic releases</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Positions should be closed or reduced 5 minutes before major news events.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Permitted Instruments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Forex Pairs</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      All major and minor currency pairs are available for trading:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <ul className="space-y-1">
                        <li>• EUR/USD</li>
                        <li>• GBP/USD</li>
                        <li>• USD/JPY</li>
                        <li>• USD/CHF</li>
                        <li>• USD/CAD</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• AUD/USD</li>
                        <li>• NZD/USD</li>
                        <li>• EUR/GBP</li>
                        <li>• EUR/JPY</li>
                        <li>• And many more</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Indices</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Major global indices are available:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• US30 (Dow Jones)</li>
                      <li>• SPX500 (S&P 500)</li>
                      <li>• NASDAQ</li>
                      <li>• UK100 (FTSE)</li>
                      <li>• GER40 (DAX)</li>
                      <li>• JPN225 (Nikkei)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Commodities</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Gold (XAU/USD)</li>
                      <li>• Silver (XAG/USD)</li>
                      <li>• Oil (Crude, Brent)</li>
                      <li>• Natural Gas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Cryptocurrencies</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Bitcoin (BTC/USD)</li>
                      <li>• Ethereum (ETH/USD)</li>
                      <li>• Other selected cryptocurrencies</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Note: Crypto trading is subject to the same weekend position closure rules.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Rule Violations and Consequences */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Rule Violations & Consequences</h2>
            <p className="text-lg text-muted-foreground">
              What happens if rules are broken
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Consequences of Rule Violations</CardTitle>
                <CardDescription>
                  Different violations carry different consequences depending on severity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-b border-border pb-4">
                    <h3 className="font-medium mb-3">Minor Violations</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                          <span className="text-xs font-medium">!</span>
                        </div>
                        <div>
                          <p className="font-medium">First-time minor rule violations</p>
                          <p className="text-sm text-muted-foreground">
                            First occurrences of accidental or minor rule violations typically result in a warning. Examples include accidentally exceeding lot size by a small amount or unintentional trades during restricted times.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                          <span className="text-xs font-medium">!</span>
                        </div>
                        <div>
                          <p className="font-medium">Self-reported violations</p>
                          <p className="text-sm text-muted-foreground">
                            Violations that you report to us before we detect them may be treated more leniently. We appreciate honest communication and understand that mistakes can happen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-border pb-4">
                    <h3 className="font-medium mb-3">Serious Violations</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0 mt-0.5">
                          <span className="text-xs font-medium">X</span>
                        </div>
                        <div>
                          <p className="font-medium">Exceeding drawdown limits</p>
                          <p className="text-sm text-muted-foreground">
                            Hitting or exceeding the maximum drawdown or daily drawdown limits will result in automatic account termination. This applies to both challenge and funded accounts.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0 mt-0.5">
                          <span className="text-xs font-medium">X</span>
                        </div>
                        <div>
                          <p className="font-medium">Repeated minor violations</p>
                          <p className="text-sm text-muted-foreground">
                            Multiple occurrences of the same minor violations may lead to account termination. Three warnings for similar violations typically result in account closure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Immediate Termination Offenses</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0 mt-0.5">
                          <span className="text-xs font-medium">X</span>
                        </div>
                        <div>
                          <p className="font-medium">Use of automated trading systems</p>
                          <p className="text-sm text-muted-foreground">
                            Any use of Expert Advisors (EAs), bots, or other automated trading systems will result in immediate account termination without warning.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0 mt-0.5">
                          <span className="text-xs font-medium">X</span>
                        </div>
                        <div>
                          <p className="font-medium">Account sharing or multiple account manipulation</p>
                          <p className="text-sm text-muted-foreground">
                            Allowing others to trade on your account, trading on behalf of others, or attempting to manipulate results by trading across multiple accounts will result in immediate termination of all associated accounts.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0 mt-0.5">
                          <span className="text-xs font-medium">X</span>
                        </div>
                        <div>
                          <p className="font-medium">Prohibited trading strategies</p>
                          <p className="text-sm text-muted-foreground">
                            Use of martingale strategies, grid trading, arbitrage, or other prohibited trading methods will result in immediate account termination.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-border pt-4">
                <div className="w-full text-sm text-muted-foreground">
                  <p className="font-medium mb-1">Appeal Process</p>
                  <p>
                    If you believe your account was terminated in error, you may submit an appeal to our support team within 7 days of termination. Include your account details and a clear explanation of why you believe the decision should be reconsidered.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Tips for Success */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Tips for Rule Compliance</h2>
            <p className="text-lg text-muted-foreground">
              How to ensure you stay within the rules
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Monitor Your Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Regularly check your account metrics, particularly your drawdown status. Our platform provides real-time monitoring of your drawdown percentage and profit progress.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Check drawdown before and after trades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Set up alerts for approaching drawdown limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Track your daily and overall profit/loss</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Position Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Implement disciplined position management to avoid rule violations:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Always use stop losses to control risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Calculate position size based on risk per trade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Close positions before weekend market closure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Avoid trading during major news events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Trading Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create a trading schedule that helps you comply with the rules:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Plan your trading days to meet minimum requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Keep a calendar of major economic releases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Set reminders for Friday position closure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Document your trades in a trading journal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Take on the Challenge?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Now that you understand the rules, start your journey to becoming a funded trader
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  Browse Challenges
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/faq">
                  View FAQs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}