import React from "react";
import { Link } from "wouter";
import { 
  Activity, 
  Award, 
  BarChart3, 
  ChevronRight, 
  Clock, 
  Coins, 
  LineChart, 
  Percent, 
  PieChart, 
  Shield, 
  Target, 
  Verified 
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary/50 text-primary">Two-Phase Evaluation</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  How It Works
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Master our trading challenges, prove your skills, and get access to our funded accounts with up to $200,000 in capital
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/challenges">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  View Our Challenges
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline">
                  Read FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="w-full py-12 md:py-24 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">The Journey to Funded Trading</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Our 3-step process is designed to identify skilled traders who can consistently generate profits with proper risk management
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="relative overflow-hidden border border-border/40 bg-background/50 backdrop-blur-sm">
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                1
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Phase 1 Challenge</CardTitle>
                <CardDescription>Demonstrate your basic trading competence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Profit Target: 8%</p>
                    <p className="text-sm text-muted-foreground">Show your ability to generate returns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Max Drawdown: 5%</p>
                    <p className="text-sm text-muted-foreground">Demonstrate proper risk management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Duration: 30 days</p>
                    <p className="text-sm text-muted-foreground">Complete the challenge within the timeframe</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: "100%" }}></div>
                </div>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden border border-border/40 bg-background/50 backdrop-blur-sm">
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                2
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Phase 2 Verification</CardTitle>
                <CardDescription>Prove your consistency and discipline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Profit Target: 5%</p>
                    <p className="text-sm text-muted-foreground">Show consistent profitability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Max Drawdown: 5%</p>
                    <p className="text-sm text-muted-foreground">Maintain disciplined risk controls</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Duration: 60 days</p>
                    <p className="text-sm text-muted-foreground">Demonstrate longer-term consistency</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: "67%" }}></div>
                </div>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm">
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                3
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Funded Account</CardTitle>
                <CardDescription>Trade our capital and earn up to 90% of profits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Coins className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Account Size: Up to $200,000</p>
                    <p className="text-sm text-muted-foreground">Trade with significant capital</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Percent className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Profit Split: Up to 90%</p>
                    <p className="text-sm text-muted-foreground">Keep the majority of your profits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Scaling Opportunities</p>
                    <p className="text-sm text-muted-foreground">Increase your account size over time</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: "33%" }}></div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Trading Objectives */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trading Objectives</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Clear, achievable targets designed to identify skilled and disciplined traders
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="standard" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="standard">Standard Challenge</TabsTrigger>
              <TabsTrigger value="aggressive">Aggressive Challenge</TabsTrigger>
              <TabsTrigger value="evaluation">Evaluation Only</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Challenge Rules</CardTitle>
                  <CardDescription>Our most popular program, ideal for the majority of traders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          <span className="font-medium">Phase 1 Profit Target</span>
                        </div>
                        <span>8%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          <span className="font-medium">Phase 2 Profit Target</span>
                        </div>
                        <span>5%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-medium">Maximum Drawdown</span>
                        </div>
                        <span>5%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-medium">Daily Drawdown Limit</span>
                        </div>
                        <span>4%</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-medium">Minimum Trading Days</span>
                        </div>
                        <span>10 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Verified className="h-5 w-5 text-primary" />
                          <span className="font-medium">Profit Split</span>
                        </div>
                        <span>Up to 80%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Percent className="h-5 w-5 text-primary" />
                          <span className="font-medium">Required Win Rate</span>
                        </div>
                        <span>None</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <span className="font-medium">Account Sizes</span>
                        </div>
                        <span>$10K to $200K</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Additional Rules:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>No holding positions over weekends</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>No news trading during high-impact events</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Maximum leverage of 1:30</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Trading window: Sunday 5 PM - Friday 4 PM ET</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/challenges">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Get Started with Standard Challenge
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="aggressive" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Aggressive Challenge Rules</CardTitle>
                  <CardDescription>For experienced traders who can handle higher profit targets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          <span className="font-medium">Phase 1 Profit Target</span>
                        </div>
                        <span>12%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          <span className="font-medium">Phase 2 Profit Target</span>
                        </div>
                        <span>8%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-medium">Maximum Drawdown</span>
                        </div>
                        <span>6%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-medium">Daily Drawdown Limit</span>
                        </div>
                        <span>5%</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-medium">Minimum Trading Days</span>
                        </div>
                        <span>8 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Verified className="h-5 w-5 text-primary" />
                          <span className="font-medium">Profit Split</span>
                        </div>
                        <span>Up to 90%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Percent className="h-5 w-5 text-primary" />
                          <span className="font-medium">Required Win Rate</span>
                        </div>
                        <span>None</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <span className="font-medium">Account Sizes</span>
                        </div>
                        <span>$25K to $200K</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Additional Rules:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>No holding positions over weekends</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>No news trading during high-impact events</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Maximum leverage of 1:20</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Trading window: Sunday 5 PM - Friday 4 PM ET</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/challenges">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Get Started with Aggressive Challenge
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="evaluation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluation Only Challenge</CardTitle>
                  <CardDescription>One-phase evaluation for experienced traders with verified track records</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          <span className="font-medium">Profit Target</span>
                        </div>
                        <span>10%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-medium">Maximum Drawdown</span>
                        </div>
                        <span>5%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-medium">Daily Drawdown Limit</span>
                        </div>
                        <span>4%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-medium">Evaluation Period</span>
                        </div>
                        <span>45 days</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-medium">Minimum Trading Days</span>
                        </div>
                        <span>12 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Verified className="h-5 w-5 text-primary" />
                          <span className="font-medium">Profit Split</span>
                        </div>
                        <span>Up to 85%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <LineChart className="h-5 w-5 text-primary" />
                          <span className="font-medium">Trading Experience</span>
                        </div>
                        <span>Required</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <span className="font-medium">Account Sizes</span>
                        </div>
                        <span>$50K to $200K</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Additional Requirements:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Prior trading experience documentation required</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Interview with our trading committee</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Maximum leverage of 1:10</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Verification of trading history may be requested</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/challenges">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Apply for Evaluation Only Challenge
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Scaling Plan */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Scaling Plan</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Grow your funded account by demonstrating consistent performance
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Level 1: Initial Funding</CardTitle>
                <CardDescription>Your first funded account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-4">
                    <span className="text-2xl font-bold text-primary">$25,000 - $200,000</span>
                    <p className="text-sm text-muted-foreground">Starting capital range</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">80% Profit Split</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Weekly Payouts Available</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">All Tradable Instruments</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Trading Dashboard Access</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">POPULAR</Badge>
                </div>
                <CardTitle>Level 2: Account Scaling</CardTitle>
                <CardDescription>After 3 months of consistent profits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-4">
                    <span className="text-2xl font-bold text-primary">Up to 2x Increase</span>
                    <p className="text-sm text-muted-foreground">Doubled account size</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">85% Profit Split</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Bi-Weekly Payouts</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Personal Account Manager</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Reduced Commission Rates</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Level 3: Mastery</CardTitle>
                <CardDescription>After 6 months of consistent profits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-4">
                    <span className="text-2xl font-bold text-primary">Up to 4x Increase</span>
                    <p className="text-sm text-muted-foreground">Quadrupled account size</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">90% Profit Split</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">On-Demand Payouts</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">One-on-One Coaching</span>
                    </li>
                    <li className="flex items-center">
                      <Verified className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Scale to $1M+ Accounts</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Scaling requirements: 10% profit with maximum 5% drawdown over a 3-month period
            </p>
            <Link href="/challenges">
              <Button>View All Challenge Options</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Common questions about our trading challenges and funded accounts
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What happens if I fail the challenge?</AccordionTrigger>
                <AccordionContent>
                  If you don't meet the objectives of your challenge, you have two options: you can purchase a new challenge at a 20% discount or upgrade to a different challenge type that might better suit your trading style. We also provide detailed feedback on what areas you need to improve.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What trading platforms do you support?</AccordionTrigger>
                <AccordionContent>
                  We support all major trading platforms including MetaTrader 4, MetaTrader 5, and cTrader. You can use your preferred platform and connect it to our system using our API or trading bridge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What instruments can I trade?</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of tradable instruments including Forex pairs, Cryptocurrencies, Indices, Commodities, and Futures. All major and minor currency pairs are available, as well as exotic pairs. The full list of tradable instruments is available in your trading dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How often can I withdraw profits?</AccordionTrigger>
                <AccordionContent>
                  Standard accounts have monthly profit withdrawals, while Elite accounts enjoy weekly profit withdrawals. All payouts are processed within 1-2 business days after request. There's a minimum withdrawal amount of $100, and you can request your payout directly from your dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is there a time limit to complete the challenge?</AccordionTrigger>
                <AccordionContent>
                  Yes, Phase 1 has a 30-day time limit, and Phase 2 has a 60-day time limit. The Evaluation Only challenge has a 45-day time limit. If you don't reach your profit target within the timeframe, you'll need to restart the challenge. Extensions are available in certain circumstances for a small fee.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you offer any training or support?</AccordionTrigger>
                <AccordionContent>
                  Yes, all traders get access to our Trading Academy with educational materials, webinars, and strategy guides. We also provide 24/5 support via chat, email, and phone. Premium account holders receive one-on-one coaching sessions with professional traders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>What are the costs involved?</AccordionTrigger>
                <AccordionContent>
                  There is a one-time fee to start the challenge, which varies depending on the account size you choose (ranging from $99 to $999). Once you pass the challenge and get funded, there are no additional fees - we simply share the profits according to the agreed profit-split ratio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Is my challenge fee refundable?</AccordionTrigger>
                <AccordionContent>
                  Yes, most of our challenge programs include a "Challenge Fee Refund" feature. Once you pass both phases and reach your first profit target on the funded account, we refund your initial challenge fee as a bonus payment added to your first payout.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 text-center">
              <Link href="/faq">
                <Button variant="outline">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Trade with Our Capital?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Take your trading to the next level with a funded account of up to $200,000. No risk, just reward.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/challenges">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    Start Your Challenge
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative bg-background/50 backdrop-blur-md p-8 rounded-lg border">
                <div className="absolute -top-4 -left-4 bg-primary/10 rounded-full p-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Our Challenge Success Rate</h3>
                    <div className="flex items-end justify-between">
                      <div className="text-5xl font-bold">24%</div>
                      <div className="flex flex-col text-sm text-right">
                        <span className="text-green-500">↗ 3.2%</span>
                        <span className="text-muted-foreground">vs last month</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Percentage of traders who successfully pass both phases</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-3xl font-bold">780+</span>
                      <span className="text-xs text-muted-foreground block">Funded traders this month</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-3xl font-bold">$2.4M</span>
                      <span className="text-xs text-muted-foreground block">Profits paid out this month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background/70 backdrop-blur-md border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/challenges">Challenges</Link></li>
                <li><Link href="/trading">Trading</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/academy">Academy</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/support">Support</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Use</Link></li>
                <li><Link href="/risk-disclosure">Risk Disclosure</Link></li>
                <li><Link href="/compliance">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TradeFunded
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 md:mt-0">
              © {new Date().getFullYear()} TradeFunded. All rights reserved. Trading involves risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}