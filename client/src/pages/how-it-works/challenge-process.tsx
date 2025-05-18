import React from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, BarChart2, Zap, Calendar, AlertTriangle } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ChallengeProcessPage() {
  return (
    <PageTemplate
      title="TRFX - Challenge Process"
      description="Learn about the TRFX challenge process and how to become a funded trader."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              The TRFX Challenge Process
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your step-by-step journey from applicant to fully funded trader
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/challenges">
                Start Your Challenge
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Process Timeline */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Your Journey to Becoming a Funded Trader
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border md:before:mx-auto md:before:translate-x-0 before:block">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between md:space-x-4">
                <div className="flex items-center mb-4 md:mb-0 md:w-1/2 md:justify-end md:pr-8">
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="ml-4 md:ml-0 md:mr-4">
                    <h3 className="text-xl font-semibold">Choose Your Challenge</h3>
                    <p className="text-muted-foreground mt-1">
                      Select an account size and challenge type that matches your trading style and goals
                    </p>
                  </div>
                </div>
                <Card className="md:w-1/2 md:pl-8 border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Account sizes from $10,000 to $200,000</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Standard, Aggressive, and Evaluation options available</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>One-time fee with no monthly subscriptions</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between md:space-x-4">
                <div className="flex items-center mb-4 md:mb-0 md:w-1/2 md:justify-end md:order-last md:pl-8">
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="ml-4 md:ml-4">
                    <h3 className="text-xl font-semibold">Phase 1 Challenge</h3>
                    <p className="text-muted-foreground mt-1">
                      Demonstrate your trading skills by achieving the profit target
                    </p>
                  </div>
                </div>
                <Card className="md:w-1/2 md:pr-8 border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start">
                        <BarChart2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Profit target: 8% for Standard, 12% for Aggressive</span>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Time limit: 30 days for Standard, 45 days for Aggressive</span>
                      </div>
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Maximum daily drawdown: 5%, maximum total drawdown: 10%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between md:space-x-4">
                <div className="flex items-center mb-4 md:mb-0 md:w-1/2 md:justify-end md:pr-8">
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="ml-4 md:ml-0 md:mr-4">
                    <h3 className="text-xl font-semibold">Phase 2 Verification</h3>
                    <p className="text-muted-foreground mt-1">
                      Confirm your consistency by meeting a reduced profit target
                    </p>
                  </div>
                </div>
                <Card className="md:w-1/2 md:pl-8 border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start">
                        <BarChart2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Profit target: 5% for Standard, 8% for Aggressive</span>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Same time limits as Phase 1</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Same trading rules and risk parameters apply</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between md:space-x-4">
                <div className="flex items-center mb-4 md:mb-0 md:w-1/2 md:justify-end md:order-last md:pl-8">
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="ml-4 md:ml-4">
                    <h3 className="text-xl font-semibold">Funded Account</h3>
                    <p className="text-muted-foreground mt-1">
                      Receive a funded trading account and start earning real profits
                    </p>
                  </div>
                </div>
                <Card className="md:w-1/2 md:pr-8 border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start">
                        <Zap className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Trade with our capital in a live funded account</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Keep up to 90% of the profits you generate</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Bi-weekly payouts available for consistent performers</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground">
              Frequently asked questions about our challenge process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What happens if I fail a challenge phase?</AccordionTrigger>
                <AccordionContent>
                  If you fail a challenge phase by breaking any of the trading rules or not meeting the profit target within the time limit, you can purchase a reset to restart the phase for a reduced fee, or you can purchase a new challenge.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I trade any instruments during the challenge?</AccordionTrigger>
                <AccordionContent>
                  You can trade all available forex pairs, commodities, indices, and cryptocurrencies that we offer. However, there are restrictions on holding positions during major news events and weekend holds. Please refer to our Trading Rules page for complete details.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How quickly can I complete the challenge?</AccordionTrigger>
                <AccordionContent>
                  Each phase has a minimum trading day requirement (typically 5-10 trading days depending on the challenge type) to ensure consistent performance rather than lucky trades. Beyond these minimum days, you can complete the challenge as quickly as you can achieve the profit targets while following the trading rules.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need to maintain the profit target after reaching it?</AccordionTrigger>
                <AccordionContent>
                  Once you reach the profit target for a phase, you need to maintain your account above the maximum drawdown limits until the phase is officially completed. You don't need to continue trading after reaching the target, but if you do, you must still follow all trading rules.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I have multiple TRFX accounts?</AccordionTrigger>
                <AccordionContent>
                  Yes, traders can have multiple challenge and funded accounts. This allows you to employ different strategies and risk levels across various account sizes. Each account is evaluated independently.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/challenges">
                Start Your Challenge
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}