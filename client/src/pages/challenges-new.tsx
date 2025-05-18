import { useState } from "react";
import { Activity, CheckCircle, ChevronRight, Shield, Zap, Award, AlertCircle } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function ChallengesPage() {
  // Sample challenge plan data
  const challengePlans = [
    {
      id: 1,
      name: "Standard Challenge",
      accountSize: "$25,000",
      price: "$99",
      profitTarget: "8%",
      maxDrawdown: "10%",
      minTradingDays: 5,
      maxTradingDays: 30,
      popular: false,
      features: [
        "Two-phase evaluation",
        "80% profit split",
        "10% max drawdown",
        "5 minimum trading days",
        "Instant funding after passing"
      ]
    },
    {
      id: 2,
      name: "Professional Challenge",
      accountSize: "$50,000",
      price: "$199",
      profitTarget: "8%",
      maxDrawdown: "10%",
      minTradingDays: 5,
      maxTradingDays: 30,
      popular: true,
      features: [
        "Two-phase evaluation",
        "80% profit split",
        "10% max drawdown",
        "5 minimum trading days",
        "Instant funding after passing",
        "Priority support"
      ]
    },
    {
      id: 3,
      name: "Expert Challenge",
      accountSize: "$100,000",
      price: "$299",
      profitTarget: "8%",
      maxDrawdown: "10%",
      minTradingDays: 5,
      maxTradingDays: 30,
      popular: false,
      features: [
        "Two-phase evaluation",
        "80% profit split",
        "10% max drawdown",
        "5 minimum trading days",
        "Instant funding after passing",
        "Priority support",
        "Weekly payouts"
      ]
    },
    {
      id: 4,
      name: "Elite Challenge",
      accountSize: "$200,000",
      price: "$599",
      profitTarget: "8%",
      maxDrawdown: "10%",
      minTradingDays: 5,
      maxTradingDays: 30,
      popular: false,
      features: [
        "Two-phase evaluation",
        "80% profit split",
        "10% max drawdown",
        "5 minimum trading days",
        "Instant funding after passing",
        "Priority support",
        "Weekly payouts",
        "Dedicated account manager"
      ]
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How does the challenge process work?",
      answer: "Our challenge process consists of two phases. In Phase 1, you need to reach a profit target of 8% while respecting the maximum drawdown limit of 10%. Once successful, you move to Phase 2 with the same account size and targets. After completing Phase 2, you receive a funded account with the same balance, keeping 80% of profits you generate."
    },
    {
      question: "What markets can I trade?",
      answer: "You can trade Forex, Indices, Commodities, Cryptocurrencies, and Stocks. We provide access to a wide range of markets to give you the freedom to trade where your expertise lies."
    },
    {
      question: "How and when do I receive payouts?",
      answer: "Payouts are processed monthly for standard accounts, and weekly for Expert and Elite accounts. You can request a payout once your profits exceed $100. Payouts are typically processed within 2-3 business days via your preferred payment method."
    },
    {
      question: "What happens if I breach the rules?",
      answer: "If you breach any rules such as exceeding the maximum drawdown, your challenge will be terminated. You can purchase a new challenge to try again. We provide detailed statistics and metrics to help you monitor your performance and avoid breaches."
    },
    {
      question: "Can I trade during major news events?",
      answer: "Yes, you can trade during major news events. However, we recommend caution as markets can be highly volatile during these periods, potentially leading to slippage and larger than expected losses."
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
            <Button variant="ghost" size="sm">
              Support
            </Button>
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero section */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/3 -left-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-70"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
        </div>
        
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Trading Challenges</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Prove your trading skills and get funded with accounts up to $200,000. Keep up to 80% of the profits with no risk of your own capital.
            </p>
          </div>
        </div>
      </section>
      
      {/* Challenge cards */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challengePlans.map((plan) => (
              <Card key={plan.id} className={cn(
                "relative overflow-hidden border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-lg",
                plan.popular ? "border-primary/50" : ""
              )}>
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-md">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <CardDescription>Account size: {plan.accountSize}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {plan.price}
                    </div>
                    <p className="text-sm text-muted-foreground">One-time fee for challenge</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Shield className="h-4 w-4 text-primary mr-2" />
                      <span>Profit Target: {plan.profitTarget}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 text-primary mr-2" />
                      <span>Max Drawdown: {plan.maxDrawdown}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 text-primary mr-2" />
                      <span>80% Profit Split</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Zap className="h-4 w-4 text-primary mr-2" />
                      <span>{plan.minTradingDays}-{plan.maxTradingDays} Trading Days</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className={cn(
                    "w-full", 
                    plan.popular 
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                      : "bg-gradient-to-r from-primary/80 to-primary hover:opacity-90 transition-opacity"
                  )}>
                    Get Started <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              All challenges include 24/7 customer support, real-time trade tracking, and detailed performance analytics.
            </p>
          </div>
        </div>
      </section>
      
      {/* Challenge explanation */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              Our two-phase challenge process is designed to identify skilled traders who can consistently generate profits while managing risk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Phase 1 Challenge</CardTitle>
                <CardDescription>Demonstrate your trading skills</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Reach 8% profit target</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Stay within 10% max drawdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Trade for minimum 5 days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Complete within 30 days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Phase 2 Verification</CardTitle>
                <CardDescription>Confirm your consistency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Same account size as Phase 1</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Reach 5% profit target</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Same maximum drawdown limits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Trade for minimum 5 days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Funded Account</CardTitle>
                <CardDescription>Trade and earn real profits</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Receive funded account</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Keep 80% of all profits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Regular profit withdrawals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span className="text-sm">Scale up to larger accounts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              Get answers to common questions about our trading challenges and funded accounts.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Still have questions? Our support team is here to help.
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="container">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-lg text-foreground/70">
              Join thousands of successful traders who have proven their skills and are now trading with our funded accounts.
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-muted/30 backdrop-blur-sm border-t border-border mt-auto py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 md:mb-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Challenges</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TradeFunded. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}