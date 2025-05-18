import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageTemplate from "@/components/page-template";

export default function FAQPage() {
  return (
    <PageTemplate
      title="TRFX - Frequently Asked Questions"
      description="Find answers to common questions about TRFX's funded trading challenges, evaluation process, payout structure, and trading rules."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about TRFX's funded trading program
            </p>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-md">
                <div className="text-center w-full">
                  <a href="#challenges" className="no-underline">
                    <h3 className="text-lg font-medium mb-2">Trading Challenges</h3>
                  </a>
                  <p className="text-sm text-muted-foreground px-2">
                    Questions about our challenge programs
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-md">
                <div className="text-center w-full">
                  <a href="#funding" className="no-underline">
                    <h3 className="text-lg font-medium mb-2">Funding & Payouts</h3>
                  </a>
                  <p className="text-sm text-muted-foreground px-2">
                    Questions about funding and profit payouts
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-md">
                <div className="text-center w-full">
                  <a href="#rules" className="no-underline">
                    <h3 className="text-lg font-medium mb-2">Trading Rules</h3>
                  </a>
                  <p className="text-sm text-muted-foreground px-2">
                    Questions about trading rules and restrictions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Sections */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            
            {/* Trading Challenges */}
            <div id="challenges" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Trading Challenges
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is a trading challenge?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">A trading challenge is an evaluation process designed to assess your trading skills and discipline. It allows you to demonstrate your ability to generate consistent profits while managing risk effectively.</p>
                      <p>Upon successfully completing a challenge, you're given access to a funded trading account with our capital, enabling you to trade without risking your own money while earning a significant percentage of the profits you generate.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What are the different types of challenges offered?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">We offer three main types of challenges:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li><strong>Standard Challenge:</strong> 8% profit target with 5% maximum drawdown.</li>
                        <li><strong>Aggressive Challenge:</strong> 12% profit target with 8% maximum drawdown.</li>
                        <li><strong>Evaluation Program:</strong> Two-phase process with 6% profit target in each phase and 5% maximum drawdown.</li>
                      </ul>
                      <p>Each challenge type is available with different account sizes ranging from $10,000 to $200,000.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How long do I have to complete a challenge?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">The time allowed varies by challenge type:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li><strong>Standard & Aggressive Challenges:</strong> You have up to 30 calendar days.</li>
                        <li><strong>Evaluation Program Phase 1:</strong> You have up to 30 calendar days.</li>
                        <li><strong>Evaluation Program Phase 2:</strong> You have up to 60 calendar days.</li>
                      </ul>
                      <p>There's no minimum time requirement for Standard and Aggressive challenges - if you reach your profit target while following all rules, you can pass immediately. The Evaluation Program requires a minimum of 5 trading days for Phase 1 and 10 trading days for Phase 2.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>What happens if I fail a challenge?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">If you fail a challenge, your account will be closed. You have several options:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>Purchase a new challenge to start over.</li>
                        <li>Use our Reset option to restart your existing challenge for a discounted fee (typically 20-30% of the full challenge price).</li>
                        <li>Try a different challenge type that might better match your trading style.</li>
                      </ul>
                      <p>We don't limit the number of attempts - many successful funded traders failed their first challenge but learned from the experience and succeeded on subsequent attempts.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I trade any instruments during the challenge?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">You can trade:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>All major and minor forex pairs</li>
                        <li>Major indices (US30, NASDAQ, S&P 500, etc.)</li>
                        <li>Commodities (Gold, Silver, Oil, etc.)</li>
                        <li>Selected cryptocurrencies</li>
                      </ul>
                      <p>However, there are some restrictions on exotic pairs and trading during major market news events. We provide a complete list of available instruments upon challenge purchase.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Do I need to trade daily during the challenge?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">For Standard and Aggressive challenges, there is no minimum trading day requirement. You can complete the challenge in a single day if you meet the profit target while following all the rules.</p>
                      <p className="mb-2">For the Evaluation Program:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Phase 1 requires at least 5 trading days.</li>
                        <li>Phase 2 requires at least 10 trading days.</li>
                      </ul>
                      <p>In all cases, we recommend focusing on quality trades rather than frequent trading. Consistently applying your strategy is more important than trading every day.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Funding & Payouts */}
            <div id="funding" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Funding & Payouts
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-7">
                  <AccordionTrigger>How quickly will I get funded after passing a challenge?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">Once you successfully pass a challenge or both phases of the Evaluation Program, your funded account is typically set up within 1-3 business days. You'll receive an email with your funded account login credentials and can start trading immediately.</p>
                      <p>For the Evaluation Program, you'll move to Phase 2 immediately after passing Phase 1, with no delays in between the phases.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger>What is the profit split on funded accounts?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">Our profit split ranges from 70% to 85% in your favor, depending on the account size and challenge type:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li><strong>$10,000 accounts:</strong> 70% to you, 30% to TRFX</li>
                        <li><strong>$50,000 accounts:</strong> 75% to you, 25% to TRFX</li>
                        <li><strong>$100,000 accounts:</strong> 80% to you, 20% to TRFX</li>
                        <li><strong>$200,000 accounts:</strong> 85% to you, 15% to TRFX</li>
                      </ul>
                      <p>The profit split applies to the net profits generated in your funded account. There are no additional fees or charges beyond this split.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-9">
                  <AccordionTrigger>How often are profits paid out?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">We process payouts on a bi-weekly schedule. Here's how it works:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>The payout period ends on the 15th and last day of each month.</li>
                        <li>Payout requests are processed within 3 business days.</li>
                        <li>Funds are typically received within 1-5 business days after processing, depending on your chosen payment method.</li>
                      </ul>
                      <p>There is no minimum profit requirement for payouts - you can withdraw any amount of profit you've generated during the payout period.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-10">
                  <AccordionTrigger>What payment methods are available for payouts?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">We offer several payment methods for receiving your profits:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li><strong>Bank Transfer:</strong> Direct deposit to your bank account (available worldwide).</li>
                        <li><strong>PayPal:</strong> Fast and convenient for most countries.</li>
                        <li><strong>Cryptocurrency:</strong> BTC, ETH, and USDT options for those preferring crypto payments.</li>
                        <li><strong>Wise (formerly TransferWise):</strong> For international payments with lower fees.</li>
                      </ul>
                      <p>All payment methods are secure, and we don't charge processing fees. However, your payment provider might apply their standard fees.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-11">
                  <AccordionTrigger>Can I scale up my account size over time?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">Yes, we offer a scaling program for funded traders who demonstrate consistent profitability. Here's how it works:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>After achieving a 10% profit in your funded account, you become eligible for a 25% account size increase.</li>
                        <li>After the first scale-up, each additional 5% profit makes you eligible for another 25% increase.</li>
                        <li>You can continue scaling up until reaching a maximum of $2,000,000 in account size.</li>
                      </ul>
                      <p>The profit split remains the same throughout the scaling process, ensuring you continue to receive the same percentage of profits as your account grows.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-12">
                  <AccordionTrigger>What happens if I lose money in a funded account?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">Funded accounts have the same maximum drawdown limits as challenges:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>Standard accounts and Evaluation Program: 5% maximum drawdown</li>
                        <li>Aggressive accounts: 8% maximum drawdown</li>
                      </ul>
                      <p className="mb-2">If you hit the maximum drawdown, your funded account will be closed. You have two options:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Purchase a new challenge at the regular price.</li>
                        <li>Use our Funded Reset program to restart your funded account for a discounted fee (typically 40-50% of the original challenge price).</li>
                      </ul>
                      <p>It's important to note that you never owe us money for losses - you're trading with our capital, so the financial risk is entirely ours.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Trading Rules */}
            <div id="rules">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Trading Rules
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-13">
                  <AccordionTrigger>What are the key trading rules I need to follow?</AccordionTrigger>
                  <AccordionContent className="break-words">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-2">Here are the key trading rules for all challenge and funded accounts:</p>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li><strong>Maximum Drawdown:</strong> 5% for Standard/Evaluation accounts, 8% for Aggressive accounts.</li>
                        <li><strong>Daily Drawdown Limit:</strong> 4% maximum daily drawdown for all account types.</li>
                        <li><strong>Profit Targets:</strong> 8% for Standard, 12% for Aggressive, 6% per phase for Evaluation.</li>
                        <li><strong>Trading Hours:</strong> 24/5 market hours, but no holding positions over weekends.</li>
                        <li><strong>News Trading:</strong> No trading during high-impact economic news events.</li>
                        <li><strong>Risk Management:</strong> Maximum lot size limits based on account size.</li>
                      </ul>
                      <p>These rules are in place to encourage responsible trading and risk management. They apply equally to challenge and funded accounts.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-14">
                  <AccordionTrigger>Can I hold positions overnight and over weekends?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">You can hold positions overnight during regular trading days (Monday to Thursday), but you cannot hold positions over weekends. All positions must be closed by the market close on Friday.</p>
                    <p className="mb-2">We have this rule because:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Weekend gaps can cause significant losses beyond your control.</li>
                      <li>It helps maintain proper risk management.</li>
                      <li>It reduces exposure to unpredictable weekend news events.</li>
                    </ul>
                    <p>Any positions left open at market close on Friday will be automatically closed by our system, which may result in unwanted outcomes for your trading strategy.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-15">
                  <AccordionTrigger>Can I use expert advisors (EAs) or automated trading systems?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">We restrict fully automated trading and have the following rules regarding EAs and automation:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>No fully automated trading systems or bots.</li>
                      <li>You may use semi-automated tools for trade execution if you're making the trading decisions.</li>
                      <li>Trade copiers, signal services, and mirror trading are not permitted.</li>
                      <li>Risk management EAs that don't make trading decisions are allowed (e.g., trailing stop EAs).</li>
                    </ul>
                    <p>Our program is designed to fund skilled human traders who make discretionary trading decisions. We monitor trading patterns and may investigate suspicious activity that appears to be automated.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-16">
                  <AccordionTrigger>Are there restrictions on trading styles or strategies?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">We allow most legitimate trading styles but have restrictions on certain approaches:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>No martingale or grid trading strategies.</li>
                      <li>No news trading during major economic releases.</li>
                      <li>No arbitrage or latency exploitation.</li>
                      <li>No excessive scalping (trades under 1 minute).</li>
                      <li>No hedging between multiple accounts.</li>
                    </ul>
                    <p>We support day trading, swing trading, trend following, breakout trading, and most technical and fundamental analysis approaches. The focus should be on consistent, sustainable trading rather than high-risk strategies.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-17">
                  <AccordionTrigger>Can I trade from multiple devices or locations?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Yes, you can trade from multiple devices (desktop, laptop, mobile) and different locations, with some guidelines:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>Your account should only be accessed by you, not shared with other traders.</li>
                      <li>Significant changes in location (different countries) should be communicated to our support team in advance.</li>
                      <li>Using VPNs is permitted but may trigger security checks if patterns appear suspicious.</li>
                    </ul>
                    <p>We use security monitoring to prevent account sharing and ensure the same trader is consistently managing the account, regardless of device or location changes.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-18">
                  <AccordionTrigger>What happens if I accidentally break a trading rule?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">We understand that mistakes can happen. Here's how we handle rule violations:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>First-time minor violations typically result in a warning.</li>
                      <li>Repeated violations may lead to account closure.</li>
                      <li>Clear intentional violations (like using automated systems) result in immediate account termination.</li>
                      <li>Major violations that put capital at excessive risk may result in account closure.</li>
                    </ul>
                    <p>If you realize you've accidentally broken a rule, contact our support team immediately. We're more understanding when traders proactively report their own mistakes rather than trying to hide them.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is ready to help with any other questions you might have
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/about/contact">
                  Contact Support
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/how-it-works">
                  Learn How It Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}