import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, Shield, Users } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <PageTemplate 
      title="How It Works" 
      description="Learn about our evaluation process, trading objectives, and scaling plan at TRFX. Get funded up to $200,000 with our proprietary trading program."
    >
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">How It Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 3-step process takes you from evaluation to fully funded trader
          </p>
        </div>

        <Tabs defaultValue="evaluation-process" className="space-y-8">
          <TabsList className="grid w-full md:w-fit grid-cols-3">
            <TabsTrigger value="evaluation-process">Evaluation Process</TabsTrigger>
            <TabsTrigger value="trading-objectives">Trading Objectives</TabsTrigger>
            <TabsTrigger value="scaling-plan">Scaling Plan</TabsTrigger>
          </TabsList>

          {/* Evaluation Process */}
          <TabsContent value="evaluation-process" className="space-y-8">
            <div id="evaluation-process">
              <h2 className="text-3xl font-bold mb-6">Our Evaluation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <CardTitle>Challenge Phase</CardTitle>
                    <CardDescription>Demonstrate your trading abilities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Reach profit target of 8% within 30 days</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Respect maximum daily drawdown of 5%</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Respect maximum total drawdown of 10%</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Trade for a minimum of 5 days</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <CardTitle>Verification Phase</CardTitle>
                    <CardDescription>Confirm your consistency</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Reach profit target of 5% within 60 days</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Same drawdown rules as Challenge Phase</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Trade for a minimum of 5 days</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Demonstrate consistent risk management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <CardTitle>Funded Account</CardTitle>
                    <CardDescription>Trade with our capital</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Receive funded account with same balance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Keep up to 80% of all profits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Regular payouts (monthly or weekly)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Opportunity for account scaling</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Trading Objectives */}
          <TabsContent value="trading-objectives" className="space-y-8">
            <div id="trading-objectives">
              <h2 className="text-3xl font-bold mb-6">Trading Objectives</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Profit Targets</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Our profit targets are designed to be challenging yet achievable for skilled traders:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Challenge Phase:</span> 8% profit target within 30 days
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Verification Phase:</span> 5% profit target within 60 days
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-sm font-bold text-primary">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Funded Account:</span> No specific profit target, but consistent profitability is expected
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management Rules</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Our risk management parameters ensure responsible trading:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Maximum Daily Drawdown:</span> 5% of account balance
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Maximum Total Drawdown:</span> 10% of account balance
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Minimum Trading Days:</span> 5 trading days in each phase
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Trading Hours:</span> Trading allowed during official market hours only
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Restricted Trading Practices</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>The following trading practices are not permitted:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-destructive mr-2"></span>
                          <span>News trading without proper risk management</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-destructive mr-2"></span>
                          <span>Martingale trading strategies</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-destructive mr-2"></span>
                          <span>Grid trading without stop losses</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-destructive mr-2"></span>
                          <span>Holding positions over weekends</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-destructive mr-2"></span>
                          <span>Excessive risk per trade (more than 2% per trade)</span>
                        </li>
                        <li className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-destructive mr-2"></span>
                          <span>Manipulative trading practices</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Scaling Plan */}
          <TabsContent value="scaling-plan" className="space-y-8">
            <div id="scaling-plan">
              <h2 className="text-3xl font-bold mb-6">Scaling Plan</h2>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Account Scaling Program</CardTitle>
                  <CardDescription>Grow your account size as you demonstrate consistent profitability</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    At TRFX, we believe in rewarding consistent performance. Our scaling program allows successful traders to increase their account size without additional evaluation fees.
                  </p>
                  
                  <div className="relative overflow-x-auto rounded-lg border">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-muted">
                        <tr>
                          <th scope="col" className="px-6 py-3">Level</th>
                          <th scope="col" className="px-6 py-3">Qualification</th>
                          <th scope="col" className="px-6 py-3">Account Increase</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-6 py-4 font-medium">Level 1</td>
                          <td className="px-6 py-4">3 consecutive profitable months</td>
                          <td className="px-6 py-4">25% increase</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-6 py-4 font-medium">Level 2</td>
                          <td className="px-6 py-4">6 consecutive profitable months</td>
                          <td className="px-6 py-4">50% increase</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">Level 3</td>
                          <td className="px-6 py-4">12 consecutive profitable months</td>
                          <td className="px-6 py-4">100% increase</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Profit Sharing Structure</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Our profit sharing structure is among the most competitive in the industry:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Standard Accounts:</span> 70% profit split to trader
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Level 1 Scaling:</span> 75% profit split to trader
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Level 2+ Scaling:</span> 80% profit split to trader
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payout Schedule</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Regular payouts ensure you receive your profits in a timely manner:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Standard Accounts:</span> Monthly payouts
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Scaled Accounts:</span> Bi-weekly payouts
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Elite Accounts ($150k+):</span> Weekly payouts available
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <span className="font-medium">Minimum Payout:</span> $100
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageTemplate>
  );
}