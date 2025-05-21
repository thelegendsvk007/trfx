import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, Monitor } from "lucide-react";
import PageTemplate from '@/components/page-template';
import { Link } from 'wouter';
import { Badge } from "@/components/ui/badge";

export default function TradingBotsPage() {
  const [botType, setBotType] = useState("premium"); // Default to premium as shown in screenshot
  const [duration, setDuration] = useState("3months"); // Default to 3 months as shown in screenshot

  const handleBotTypeChange = (type: string) => {
    setBotType(type);
  };

  const handleDurationChange = (newDuration: string) => {
    setDuration(newDuration);
  };
  
  // Calculate price multipliers based on duration
  const getDurationMultiplier = () => {
    switch(duration) {
      case "1month": return 1;
      case "3months": return 2.5; // 3 months at a discount
      case "lifetime": return 10; // Lifetime price
      default: return 1;
    }
  };

  return (
    <PageTemplate
      title="Trading Bots | TRFX Funded Trading"
      description="Take advantage of market opportunities 24/7 with our advanced trading bots. Choose between standard and premium reliability options tailored to your trading needs."
    >
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-purple-700/10 blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-16 h-16 bg-purple-900/40 rounded-full flex items-center justify-center mb-6">
              <Monitor className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Automated Trading Bots</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Take advantage of market opportunities 24/7 with our advanced trading bots. Choose 
              between standard and premium reliability options tailored to your trading needs.
            </p>
          </div>

          {/* Bot type selection */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex rounded-lg border border-gray-700 p-1">
              <button
                className={`flex-1 flex items-center justify-center gap-2 rounded-md py-3 px-4 text-sm font-medium ${
                  botType === "standard" ? "bg-gray-800" : "text-gray-400"
                }`}
                onClick={() => handleBotTypeChange("standard")}
              >
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="8" y="7" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Standard Bots</span>
                <Badge className="bg-purple-700 hover:bg-purple-600 text-xs">95% Reliable</Badge>
              </button>
              <button
                className={`flex-1 flex items-center justify-center gap-2 rounded-md py-3 px-4 text-sm font-medium ${
                  botType === "premium" ? "bg-gray-800" : "text-gray-400"
                }`}
                onClick={() => handleBotTypeChange("premium")}
              >
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Premium Bots</span>
                <Badge className="bg-blue-600 hover:bg-blue-500 text-xs">99.9% Reliable</Badge>
              </button>
            </div>
          </div>

          {/* Duration selection */}
          <div className="max-w-xs mx-auto mb-16">
            <div className="flex justify-center space-x-2">
              <button
                className={`rounded-md py-2 px-6 text-sm font-medium transition-colors ${
                  duration === "1month" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => handleDurationChange("1month")}
              >
                1 Month
              </button>
              <button
                className={`rounded-md py-2 px-6 text-sm font-medium transition-colors ${
                  duration === "3months" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => handleDurationChange("3months")}
              >
                3 Months
              </button>
              <button
                className={`rounded-md py-2 px-6 text-sm font-medium transition-colors ${
                  duration === "lifetime" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => handleDurationChange("lifetime")}
              >
                Lifetime
              </button>
            </div>
          </div>

          {/* Bot pricing cards */}
          {botType === "standard" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Single Account */}
              <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 p-6 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                <Badge className="bg-green-600 mb-3">95% Reliable</Badge>
                <h3 className="text-xl font-bold mb-1">Single Account</h3>
                <p className="text-sm text-gray-400 mb-4">Perfect for traders with a single trading account</p>
                
                <div className="mt-4 mb-4">
                  <span className="text-4xl font-bold">${500 * getDurationMultiplier()}</span>
                  <span className="text-gray-400 ml-2">
                    {duration === "1month" && "/month"}
                    {duration === "3months" && "/quarter"}
                    {duration === "lifetime" && " one time fee"}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    1 trading account
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Pre-configured trading strategies</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Real-time trade monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Risk management controls</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">24/7 automated trading</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Performance analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Email & SMS notifications</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Multi Account */}
              <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 p-6 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                <Badge className="bg-green-600 mb-3">95% Reliable</Badge>
                <h3 className="text-xl font-bold mb-1">Multi Account</h3>
                <p className="text-sm text-gray-400 mb-4">Ideal for traders with multiple accounts</p>
                
                <div className="mt-4 mb-4">
                  <span className="text-4xl font-bold">${1000 * getDurationMultiplier()}</span>
                  <span className="text-gray-400 ml-2">
                    {duration === "1month" && "/month"}
                    {duration === "3months" && "/quarter"}
                    {duration === "lifetime" && " one time fee"}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    2-3 trading accounts
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">All Single Account features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Synchronize trading across accounts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Individual account settings</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Priority support assistance</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Extended strategy library</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Advanced customization options</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Professional */}
              <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 p-6 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                <div className="absolute -top-1 right-4">
                  <Badge className="bg-purple-600 px-3 py-1">Popular</Badge>
                </div>
                <Badge className="bg-green-600 mb-3">95% Reliable</Badge>
                <h3 className="text-xl font-bold mb-1">Professional</h3>
                <p className="text-sm text-gray-400 mb-4">For professional traders managing multiple accounts</p>
                
                <div className="mt-4 mb-4">
                  <span className="text-4xl font-bold">$1500</span>
                  <span className="text-gray-400 ml-2">
                    {duration === "1month" && "/month"}
                    {duration === "3months" && "/quarter"}
                    {duration === "lifetime" && " one time fee"}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">3-5 trading accounts</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">All Multi Account features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">VIP customer support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Strategy backtesting tools</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Advanced risk parameters</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Custom strategy implementation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          {/* Premium bot pricing cards */}
          {botType === "premium" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Premium Single */}
              <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 p-6 transition-all duration-300 hover:border-blue-500/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/0 via-blue-800/5 to-purple-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                <Badge className="bg-blue-600 mb-3">99.9% Reliable</Badge>
                <h3 className="text-xl font-bold mb-1">Premium Single</h3>
                <p className="text-sm text-gray-400 mb-4">Enterprise-grade reliability for a single account</p>
                
                <div className="mt-4 mb-4">
                  <span className="text-4xl font-bold">${5000 * getDurationMultiplier()}</span>
                  <span className="text-gray-400 ml-2">
                    {duration === "1month" && "/month"}
                    {duration === "3months" && "/quarter"}
                    {duration === "lifetime" && " one time fee"}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    1 trading account
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">High-frequency trading capability</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Advanced AI market analysis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Proprietary predictive algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Ultra-low latency execution</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Institutional-grade security</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">24/7 dedicated support team</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Premium Multi */}
              <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 p-6 transition-all duration-300 hover:border-blue-500/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/0 via-blue-800/5 to-purple-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                <Badge className="bg-blue-600 mb-3">99.9% Reliable</Badge>
                <h3 className="text-xl font-bold mb-1">Premium Multi</h3>
                <p className="text-sm text-gray-400 mb-4">Enterprise solution for multiple accounts</p>
                
                <div className="mt-4 mb-4">
                  <span className="text-4xl font-bold">${15000 * getDurationMultiplier()}</span>
                  <span className="text-gray-400 ml-2">
                    {duration === "1month" && "/month"}
                    {duration === "3months" && "/quarter"}
                    {duration === "lifetime" && " one time fee"}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    2-3 trading accounts
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">All Premium Single features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Multi-account correlation protection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Custom API integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Advanced portfolio management</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Risk diversification algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Quarterly strategy consultation</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Premium Enterprise */}
              <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 p-6 transition-all duration-300 hover:border-blue-500/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/0 via-blue-800/5 to-purple-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                <div className="absolute -top-1 right-4">
                  <Badge className="bg-purple-600 px-3 py-1">Popular</Badge>
                </div>
                <Badge className="bg-blue-600 mb-3">99.9% Reliable</Badge>
                <h3 className="text-xl font-bold mb-1">Premium Enterprise</h3>
                <p className="text-sm text-gray-400 mb-4">Complete solution for professional trading firms</p>
                
                <div className="mt-4 mb-4">
                  <span className="text-4xl font-bold">${25000 * getDurationMultiplier()}</span>
                  <span className="text-gray-400 ml-2">
                    {duration === "1month" && "/month"}
                    {duration === "3months" && "/quarter"}
                    {duration === "lifetime" && " one time fee"}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    3-5 trading accounts
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">All Premium Multi features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Custom algorithm development</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">On-demand strategy adjustments</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">White-glove onboarding service</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Proprietary signal generation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">Enterprise-level data security</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Trading bot features section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Trading Bot Features</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Our trading bots come packed with powerful features to optimize your trading experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-6 rounded-lg border border-border/50 bg-background/10 backdrop-blur-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Operation</h3>
                <p className="text-foreground/70">
                  Our bots operate around the clock, monitoring markets and executing trades automatically without needing your supervision.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-background/10 backdrop-blur-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customizable Strategies</h3>
                <p className="text-foreground/70">
                  Choose from multiple pre-configured trading strategies or customize parameters to match your trading style and risk appetite.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-background/10 backdrop-blur-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Risk Management</h3>
                <p className="text-foreground/70">
                  Sophisticated risk controls including stop-loss, take-profit, and maximum drawdown limits to protect your capital.
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Learn more about our trading bots and how they can help optimize your trading
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 rounded-lg border border-gray-700 bg-gray-900/50">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                  What does bot reliability percentage mean?
                </h3>
                <p className="text-gray-300">
                  The reliability percentage refers to the bot's uptime and execution accuracy. Our 95% reliable bots maintain consistent performance with occasional updates required, while 99.9% reliable bots offer enterprise-grade stability with advanced failover systems and redundancy.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-700 bg-gray-900/50">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                  Do I need programming knowledge to use these bots?
                </h3>
                <p className="text-gray-300">
                  No programming knowledge is required. Our bots come with a user-friendly interface for configuration. For advanced users, we do offer options to customize strategies through our visual strategy builder or direct code access in premium tiers.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-700 bg-gray-900/50">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                  What markets can I trade with these bots?
                </h3>
                <p className="text-gray-300">
                  Our trading bots support all major forex pairs, commodities like gold and oil, major indices, and select cryptocurrencies. Premium bots offer expanded market access including exotic pairs and additional cryptocurrency options with specialized trading algorithms for each market type.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-700 bg-gray-900/50">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                  How are the trading strategies developed?
                </h3>
                <p className="text-gray-300">
                  Our strategies are developed by a team of professional traders and quants with decades of market experience. Each strategy undergoes rigorous backtesting against 10+ years of historical data and is continuously optimized using machine learning algorithms to adapt to changing market conditions.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-700 bg-gray-900/50">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                  Can I use these bots with any broker?
                </h3>
                <p className="text-gray-300">
                  Yes, our bots integrate with most major brokers that support MetaTrader 4, MetaTrader 5, or offer API access. For Premium tier subscribers, we offer enhanced connectivity with institutional-grade brokers and custom integrations with proprietary trading platforms. We maintain a list of recommended brokers optimized for our bot performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}