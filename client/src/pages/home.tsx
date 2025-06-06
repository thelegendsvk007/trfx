import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, LineChart, BarChart, Clock, Award, TrendingUp, ChevronRight, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PageTemplate from "@/components/page-template";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/theme-provider";
import { TradingDashboard } from "@/components/trading-dashboard-updated";

export default function HomePage() {
  const [tab, setTab] = useState("standard");
  const { setTheme } = useTheme();
  
 
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);
  
  return (
    <PageTemplate
      title="TRFX Funded Trading | Trade Forex with Our Capital"
      description="TRFX is a forex funded account provider offering traders the opportunity to trade our capital. Join our trading platform to earn profits without risking your own money."
    >
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute left-1/4 top-1/2 w-2 h-2 rounded-full bg-blue-500/40"></div>
          <div className="absolute right-1/4 top-1/3 w-3 h-3 rounded-full bg-purple-500/40"></div>
          <div className="absolute left-2/3 top-1/4 w-2 h-2 rounded-full bg-green-500/40"></div>
          <div className="absolute right-1/5 bottom-1/3 w-4 h-4 rounded-full bg-pink-500/30"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Trade</span> with Our Capital,
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500"> Keep the Profits</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              TRFX provides funded trading accounts up to $200,000 for skilled traders. Pass our evaluation and trade with our capital while keeping up to 85% of the profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-8 py-6" size="lg" asChild>
                <Link href="/pricing">Get Started</Link>
              </Button>
              <Button variant="ghost" className="border border-border hover:bg-background/50 px-8 py-6" size="lg" asChild>
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-900/20 to-gray-900/0"></div>
          <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
          <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">New Way</span> to Grow Your Trading Career
            </h2>
            <p className="text-white/70">
              We provide the capital, you provide the skills. No need to risk your own money while building your trading career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background/40 backdrop-blur-sm border-border/40 shadow-xl">
              <CardHeader>
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle>Evaluation Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">Our two-phase evaluation process identifies skilled traders who can consistently achieve profits while managing risk.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-sm border-border/40 shadow-xl">
              <CardHeader>
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                  <LineChart className="h-5 w-5 text-blue-400" />
                </div>
                <CardTitle>Trade Real Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">Trade on over 100 instruments including forex, gold, indices, and crypto with institutional-grade liquidity and tight spreads.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-sm border-border/40 shadow-xl">
              <CardHeader>
                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                </div>
                <CardTitle>Keep Your Profits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">Receive up to 85% of your trading profits with bi-weekly withdrawals once you become a funded trader.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Trading Platform Section with floating cards */}
      <section className="py-24 relative">
        <div className="w-full px-0 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Trading Platform</span>
            </h2>
            <p className="text-white/70">
              Our proprietary platform gives you all the tools you need to analyze markets and execute trades with precision.
            </p>
          </div>
          
          <div className="w-full relative px-0 mx-0">
            <TradingDashboard />
            
            {/* Decorative lights */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-green-400/10 blur-3xl"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute -top-10 right-1/4 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl"></div>
          </div>
        </div>
      </section>
      
      {/* How it Works / Process Section */}
      <section className="py-24 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-900/20 to-gray-900/0"></div>
          <div className="absolute -left-40 bottom-20 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
          <div className="absolute right-1/3 top-1/4 w-80 h-80 rounded-full bg-green-500/5 blur-3xl"></div>
          <div className="absolute left-1/4 top-1/3 w-3 h-3 rounded-full bg-blue-500/30"></div>
          <div className="absolute right-1/5 bottom-1/4 w-2 h-2 rounded-full bg-purple-500/30"></div>
          <div className="absolute left-2/5 top-1/5 w-2 h-2 rounded-full bg-green-500/30"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Works</span>
            </h2>
            <p className="text-white/70">
              Follow our simple three-step process to become a funded trader and start trading with our capital.
            </p>
          </div>
          
          <div className="mt-12">
            {/* Step cards with animated numbered indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="step-card relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-70 animate-pulse-slow"></div>
                    <div className="relative h-20 w-20 rounded-full bg-purple-800 border-2 border-purple-400 flex items-center justify-center text-3xl font-bold text-white">1</div>
                  </div>
                </div>
                
                <div className="relative flex flex-col bg-black/70 border border-border/30 rounded-lg p-6 pt-14">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-3">Choose Your Level</h3>
                    <p className="text-white/70 mb-4">
                      Pick an evaluation account to trade in a simulated environment and build your skills before handling live funds.
                    </p>
                    
                    {/* Account sizes */}
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">$10k</div>
                        <div className="text-xs text-white/50">Starter</div>
                      </div>
                      <div className="text-center bg-purple-900/20 py-1 px-2 rounded">
                        <div className="text-lg font-semibold text-white">$25k</div>
                        <div className="text-xs text-white/80">Popular</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white">$50k</div>
                        <div className="text-xs text-white/50">Advanced</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="step-card relative mt-8 md:mt-0">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-70 animate-pulse-slow"></div>
                    <div className="relative h-20 w-20 rounded-full bg-blue-800 border-2 border-blue-400 flex items-center justify-center text-3xl font-bold text-white">2</div>
                  </div>
                </div>
                
                <div className="relative flex flex-col bg-black/70 border border-border/30 rounded-lg p-6 pt-14">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-3">Pass the Challenge</h3>
                    <p className="text-white/70 mb-4">
                      Meet the profit target and follow our risk management rules to prove your trading skills and expertise.
                    </p>
                    
                    {/* Challenge phases */}
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center justify-between py-2 px-4 rounded bg-black/80 border border-blue-500/20">
                        <span className="text-sm font-medium">Phase 1</span>
                        <span className="text-sm text-white/80">8% profit target</span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-4 rounded bg-black/80 border border-blue-500/20">
                        <span className="text-sm font-medium">Phase 2</span>
                        <span className="text-sm text-white/80">5% profit target</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="step-card relative mt-8 md:mt-0">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-lime-500 blur-lg opacity-70 animate-pulse-slow"></div>
                    <div className="relative h-20 w-20 rounded-full bg-green-800 border-2 border-green-400 flex items-center justify-center text-3xl font-bold text-white">3</div>
                  </div>
                </div>
                
                <div className="relative flex flex-col bg-black/70 border border-border/30 rounded-lg p-6 pt-14">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-3">Get Funded</h3>
                    <p className="text-white/70 mb-4">
                      Once you pass the challenge, you'll receive a funded account. Trade with our capital and earn profits.
                    </p>
                    
                    {/* Profit splits */}
                    <div className="mt-4 space-y-4">
                      <div className="py-2 px-4 rounded bg-green-900/30 border border-green-500/30">
                        <div className="text-lg font-semibold">Up to 80%</div>
                        <div className="text-sm text-white/80">Profit Split</div>
                      </div>
                      <div className="py-2 px-4 rounded bg-black/80 border border-green-500/20">
                        <div className="text-lg font-semibold">Bi-weekly Payouts</div>
                        <div className="text-sm text-white/80">Fast & Reliable</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90" size="lg" asChild>
                <Link href="/pricing">Start Your Challenge</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-green-400/10 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Questions</span>
            </h2>
            <p className="text-white/70">
              Everything you need to know about TRFX funded trading accounts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-background/40 backdrop-blur-sm border-border/40 shadow-xl">
              <CardHeader>
                <CardTitle>What is a funded trading account?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">A funded trading account is a trading account where our company provides the capital, and you get to keep a percentage of the profits you generate.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-sm border-border/40 shadow-xl">
              <CardHeader>
                <CardTitle>How do I qualify for a funded account?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">You need to pass our evaluation process, which consists of two phases designed to assess your trading skills, risk management, and consistency.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-sm border-border/40 shadow-xl">
              <CardHeader>
                <CardTitle>What's the profit split ratio?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">Traders receive up to 85% of profits, depending on your account tier and performance history. Payouts are processed bi-weekly.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/40 backdrop-blur-sm border-border/40 shadow-xl">
              <CardHeader>
                <CardTitle>Which platforms do you support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">We support the industry-standard MetaTrader 4 and MetaTrader 5 platforms, giving you the flexibility to trade on your preferred interface.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="ghost" className="border border-border hover:bg-background/50" asChild>
              <Link href="/faqs">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900/30 rounded-3xl"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto bg-background/20 backdrop-blur-sm border border-border/40 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Trade with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Our Capital?</span>
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already trading with our capital and keeping the profits. Start your funded trading journey today.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-8" size="lg" asChild>
              <Link href="/pricing">Start Your Challenge</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}