import { Link } from "wouter";
import { ArrowRight, Target, BarChart3, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import PageTemplate from "@/components/page-template";

export default function EvaluationPhasePage() {
  return (
    <PageTemplate
      title="TRFX - Evaluation Phase"
      description="Learn about the TRFX evaluation process to qualify for a funded trading account."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Evaluation Phase
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our structured approach to identify skilled traders for funded accounts
            </p>
          </div>
        </div>
      </section>
      
      {/* Two-Phase Process Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Two-Phase Evaluation Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive evaluation consists of two distinct phases designed to identify traders with consistent profitability and disciplined risk management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <div className="text-lg font-bold">1</div>
                  </div>
                  <CardTitle className="text-xl">Phase 1: Initial Challenge</CardTitle>
                  <CardDescription>First step in proving your trading skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Phase 1 is your first opportunity to demonstrate trading discipline and profitability. You'll trade a simulated account with real market conditions to meet specific profit targets while adhering to risk management rules.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Profit Target: 8%</span>
                        <span className="font-medium">Required</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Maximum Drawdown: 5%</span>
                        <span className="font-medium">Limit</span>
                      </div>
                      <Progress value={50} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Duration: 30 Days</span>
                        <span className="font-medium">Maximum</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t border-border/50 flex items-center justify-between bg-muted/20">
                  <p className="text-sm text-muted-foreground">
                    Progress to Phase 2 after success
                  </p>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <div className="text-lg font-bold">2</div>
                  </div>
                  <CardTitle className="text-xl">Phase 2: Verification</CardTitle>
                  <CardDescription>Final step before funding</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Phase 2 verifies your consistency and ability to maintain profitability over time. The profit target is lower, but the focus is on sustainable trading with the same strict risk management rules.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Profit Target: 5%</span>
                        <span className="font-medium">Required</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Maximum Drawdown: 5%</span>
                        <span className="font-medium">Limit</span>
                      </div>
                      <Progress value={50} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Duration: 60 Days</span>
                        <span className="font-medium">Maximum</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t border-border/50 flex items-center justify-between bg-muted/20">
                  <p className="text-sm text-muted-foreground">
                    Receive funded account after success
                  </p>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-10">
              <Alert className="bg-muted/30 border-primary/20">
                <AlertDescription>
                  <p>
                    <strong>Fast Track Option:</strong> Traders who demonstrate exceptional skill during Phase 1 by achieving 12% profit with the same risk parameters may qualify for our Fast Track program, allowing them to skip Phase 2 and receive immediate funding.
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Rules */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Evaluation Rules & Guidelines</h2>
            <p className="text-lg text-muted-foreground">
              Key parameters and rules that apply during the evaluation phases
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Profit Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span><strong>Phase 1:</strong> 8% minimum profit target</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span><strong>Phase 2:</strong> 5% minimum profit target</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>No daily minimum profit requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Profit measured as percentage of initial account balance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Fast Track at 12%+ profit in Phase 1</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span><strong>Maximum Drawdown:</strong> 5% of account equity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span><strong>Daily Drawdown Limit:</strong> 3% of account equity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Drawdown calculated from highest equity point</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Maximum lot size: 10 standard lots per trade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Breach of any risk rule results in disqualification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Time Parameters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span><strong>Phase 1 Duration:</strong> Maximum 30 calendar days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span><strong>Phase 2 Duration:</strong> Maximum 60 calendar days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span><strong>Minimum Trading Days:</strong> 5 days in Phase 1, 10 days in Phase 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Trading allowed 24/5 during market hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    <span>Accounts expire if targets not met within timeframe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto mt-10">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Trading Instruments & Restrictions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Available Instruments</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>Major, minor and exotic forex pairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>Major stock indices (US, European, Asian)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>Metals (Gold, Silver)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>Energies (WTI Oil, Brent Oil, Natural Gas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>Selected cryptocurrencies</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">Trading Restrictions</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>No overnight holding of high-risk news events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>No martingale or grid trading strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>No fully automated trading (EAs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>No copy trading or signal following</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>No arbitrage or latency exploitation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Evaluation Plans */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Evaluation Account Options</h2>
            <p className="text-lg text-muted-foreground">
              Choose the account size that matches your trading goals and experience
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle>Standard Challenge</CardTitle>
                  <CardDescription>Balanced rules and requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">$25,000 - $200,000</div>
                      <p className="text-sm text-muted-foreground">Account Size Options</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Profit Target (Phase 1)</span>
                        <span className="font-medium">8%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Profit Target (Phase 2)</span>
                        <span className="font-medium">5%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Max Drawdown</span>
                        <span className="font-medium">5%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Daily Drawdown</span>
                        <span className="font-medium">3%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Time Limit (Phase 1)</span>
                        <span className="font-medium">30 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Time Limit (Phase 2)</span>
                        <span className="font-medium">60 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Min Trading Days</span>
                        <span className="font-medium">5 / 10 days</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border pt-4 flex justify-center">
                  <Button asChild>
                    <Link href="/challenges/standard">
                      View Standard Challenge
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50 relative bg-card/50 border-primary/50 shadow-lg">
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Aggressive Challenge</CardTitle>
                  <CardDescription>For experienced traders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">$25,000 - $200,000</div>
                      <p className="text-sm text-muted-foreground">Account Size Options</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Profit Target (Phase 1)</span>
                        <span className="font-medium">10%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Profit Target (Phase 2)</span>
                        <span className="font-medium">5%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Max Drawdown</span>
                        <span className="font-medium">8%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Daily Drawdown</span>
                        <span className="font-medium">4%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Time Limit (Phase 1)</span>
                        <span className="font-medium">30 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Time Limit (Phase 2)</span>
                        <span className="font-medium">60 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Min Trading Days</span>
                        <span className="font-medium">5 / 10 days</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border pt-4 flex justify-center">
                  <Button asChild className="bg-primary">
                    <Link href="/challenges/aggressive">
                      View Aggressive Challenge
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle>Evaluation Challenge</CardTitle>
                  <CardDescription>One-phase direct evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">$10,000 - $100,000</div>
                      <p className="text-sm text-muted-foreground">Account Size Options</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Profit Target</span>
                        <span className="font-medium">12%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Max Drawdown</span>
                        <span className="font-medium">5%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Daily Drawdown</span>
                        <span className="font-medium">3%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Time Limit</span>
                        <span className="font-medium">45 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Min Trading Days</span>
                        <span className="font-medium">10 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Phases</span>
                        <span className="font-medium">Single Phase</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Direct Funding</span>
                        <span className="font-medium">Upon Completion</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border pt-4 flex justify-center">
                  <Button asChild>
                    <Link href="/challenges/evaluation">
                      View Evaluation Challenge
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Evaluation Assessment */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">How We Evaluate Your Performance</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our evaluation process is designed to identify traders who can consistently generate profits while maintaining disciplined risk management. We look beyond just the profit target to assess your overall trading approach.
                  </p>
                  <p className="text-muted-foreground">
                    We analyze your trading patterns, risk management consistency, and ability to perform under different market conditions. These factors help us determine if you're ready to manage larger capital with the discipline required for long-term success.
                  </p>
                  <p className="text-muted-foreground">
                    All evaluations are conducted using MetaTrader 4 or MetaTrader 5 platforms with real-time market data, providing an authentic trading environment that mirrors what you'll experience after funding.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Key Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span><strong>Profit Factor:</strong> Ratio of gross profits to gross losses (target: above 1.5)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span><strong>Win Rate:</strong> Percentage of winning trades vs. total trades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span><strong>Average RRR:</strong> Risk-reward ratio across all trades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span><strong>Drawdown Control:</strong> Management of equity fluctuations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span><strong>Consistency:</strong> Regular trading activity without excessive gaps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                          <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span><strong>Risk Per Trade:</strong> Appropriate position sizing relative to account</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Automatic Monitoring Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our proprietary evaluation system continuously monitors your trading performance and provides real-time updates on your progress through your trader dashboard.
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" asChild>
                        <Link href="/trading/dashboard">
                          View Trader Dashboard
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* After Evaluation */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">After Successful Evaluation</h2>
            <p className="text-lg text-muted-foreground">
              What happens once you've successfully completed the evaluation process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <div className="text-lg font-bold">1</div>
                  </div>
                  <CardTitle className="text-xl">Account Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Upon successful completion of the evaluation phases, you'll receive access to a fully funded trading account with the same size as your challenge account. The funding process typically takes 1-3 business days.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <div className="text-lg font-bold">2</div>
                  </div>
                  <CardTitle className="text-xl">Profit Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Start trading with our capital and earn up to 80% of the profits you generate. Profit withdrawals are processed twice a month, allowing you to consistently benefit from your trading success.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <div className="text-lg font-bold">3</div>
                  </div>
                  <CardTitle className="text-xl">Scaling Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Demonstrate consistent profitability with your funded account and qualify for our scaling program, which can increase your trading capital by up to 10x your initial funded amount over time.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 bg-card border border-border/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Ongoing Requirements</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
                Funded accounts have more relaxed performance requirements, but still maintain essential risk management rules
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3 mx-auto">
                    <Target className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium mb-1">No Profit Target</h4>
                  <p className="text-sm text-muted-foreground">
                    Trade without pressure of meeting a specific profit goal
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3 mx-auto">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium mb-1">10% Max Drawdown</h4>
                  <p className="text-sm text-muted-foreground">
                    Slightly relaxed drawdown limit for funded accounts
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3 mx-auto">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium mb-1">Consistency Rules</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimum of 5 trading days every 30-day period
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3 mx-auto">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium mb-1">5% Daily Drawdown</h4>
                  <p className="text-sm text-muted-foreground">
                    Daily risk limit to ensure disciplined trading
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Prove Your Trading Skills?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take on our evaluation challenge and gain access to trading capital of up to $200,000
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  View Challenge Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/challenges/compare">
                  Compare Challenge Types
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}