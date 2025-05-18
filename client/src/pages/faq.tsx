import { Link } from "wouter";
import { 
  Activity, 
  ChevronRight, 
  Clock, 
  CreditCard, 
  Headphones, 
  Search,
  Shield, 
  Target, 
  Wallet,
  AlertCircle,
  RefreshCw,
  BarChart,
  LineChart
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // FAQ categories and questions
  const generalFAQs = [
    {
      question: "What is TradeFunded?",
      answer: "TradeFunded is a proprietary trading firm that provides funding to skilled traders who pass our evaluation process. We offer trading capital ranging from $10,000 to $200,000 to successful traders, allowing them to trade our capital while keeping up to 90% of the profits they generate."
    },
    {
      question: "How does the evaluation process work?",
      answer: "Our evaluation process consists of two phases. In Phase 1, traders must achieve an 8% profit target while adhering to our risk management rules. In Phase 2, traders must demonstrate consistency by achieving a 5% profit target over a longer period. Upon successfully completing both phases, traders receive a funded account."
    },
    {
      question: "What is the profit split?",
      answer: "Our standard profit split is 80% for the trader and 20% for TradeFunded. Top performers in our Professional and Elite programs can earn up to 90% of their trading profits. The profit split percentage depends on the account type and your track record with us."
    },
    {
      question: "Do you offer refunds on the challenge fee?",
      answer: "Yes, most of our challenge programs include a 'Challenge Fee Refund' feature. Once you pass both phases and reach your first profit target on the funded account, we refund your initial challenge fee as a bonus payment added to your first payout."
    },
    {
      question: "How quickly can I get funded?",
      answer: "The timeframe depends on your trading performance. Some traders complete Phase 1 in as little as a few days, while others take the full 30-day period. Similarly, Phase 2 can be completed in a minimum of 5 trading days (assuming you meet the minimum trading days requirement) or up to the full 60-day period."
    }
  ];
  
  const challengeFAQs = [
    {
      question: "What are the trading rules for the challenge?",
      answer: "The main trading rules include: a maximum drawdown limit of 5% on account balance, a daily loss limit of 4%, a minimum of 10 trading days for Phase 1 and 10 trading days for Phase 2, no weekend holding of positions, and adherence to our instrument-specific leverage restrictions. All rules are outlined in detail upon registration."
    },
    {
      question: "Can I trade during major news events?",
      answer: "Yes, you can trade during news events, but we advise caution as volatility can be extreme. For high-impact economic releases, we recommend reducing position sizes or temporarily closing positions to avoid unexpected losses due to price spikes and widened spreads."
    },
    {
      question: "What happens if I breach one of the trading rules?",
      answer: "If you breach a rule during the challenge (such as exceeding the maximum drawdown), your challenge account will be automatically terminated, and you'll need to purchase a new challenge to try again. We offer a 20% discount on your next attempt."
    },
    {
      question: "Can I trade using Expert Advisors (EAs) or automated systems?",
      answer: "Yes, we allow the use of Expert Advisors (EAs), scripts, and automated trading systems as long as they comply with our trading rules. However, certain high-frequency trading strategies and arbitrage-based systems may be restricted. Contact support to verify if your EA is permitted."
    },
    {
      question: "Do you offer extensions on the challenge time limits?",
      answer: "Yes, we offer 30-day extensions for both Phase 1 and Phase 2 challenges at a nominal fee. Extensions must be purchased before the original challenge period expires. Contact our support team to request an extension."
    },
    {
      question: "What challenge sizes do you offer?",
      answer: "We offer challenge account sizes of $10,000, $25,000, $50,000, $100,000, and $200,000. The larger the account size, the higher the challenge fee, but we maintain consistent profit targets and risk parameters across all account sizes."
    }
  ];
  
  const tradingFAQs = [
    {
      question: "What financial instruments can I trade?",
      answer: "We offer a comprehensive range of instruments, including 48+ forex pairs, 20+ global stock indices, 15+ cryptocurrencies, and 12+ commodities. You can view the complete list of tradable instruments and their specifications on our Trading page."
    },
    {
      question: "What trading platforms do you support?",
      answer: "We support MetaTrader 4, MetaTrader 5, and cTrader platforms. All platforms are available on desktop (Windows, Mac), web browsers, and mobile devices (iOS, Android), ensuring you can trade from anywhere."
    },
    {
      question: "What are your trading hours?",
      answer: "For forex pairs, we offer 24/5 trading from Sunday 22:00 GMT to Friday 22:00 GMT. Cryptocurrency trading is available 24/7. Stock indices and commodities follow their respective exchange trading hours. Check our Trading Sessions section for detailed information."
    },
    {
      question: "What leverage do you offer?",
      answer: "We offer up to 1:30 leverage for forex pairs, 1:20 for indices and commodities, and 1:10 for cryptocurrencies. These leverage limits are designed to provide sufficient trading flexibility while ensuring proper risk management."
    },
    {
      question: "What are your spreads and commissions?",
      answer: "We offer competitive spreads starting from 0.1 pips on major forex pairs with zero commissions. For detailed information on spreads for all instruments, please visit our Trading Conditions page."
    }
  ];
  
  const payoutFAQs = [
    {
      question: "How often can I withdraw profits?",
      answer: "Standard accounts have monthly profit withdrawals, while Elite accounts enjoy weekly profit withdrawals. All payouts are processed within 1-2 business days after request. There's a minimum withdrawal amount of $100."
    },
    {
      question: "What payment methods do you support for withdrawals?",
      answer: "We support multiple withdrawal methods including bank transfers, PayPal, Skrill, Neteller, and cryptocurrencies (Bitcoin, Ethereum, USDT). The available methods may vary based on your country of residence."
    },
    {
      question: "Is there a minimum withdrawal amount?",
      answer: "Yes, the minimum withdrawal amount is $100. Any profit below this threshold will roll over to the next payout period. This minimum helps reduce transaction fees and ensures efficient processing."
    },
    {
      question: "How are taxes handled on my profits?",
      answer: "TradeFunded does not withhold taxes on your profits. You are responsible for reporting and paying any applicable taxes in your jurisdiction. We provide statements of your trading activity and earnings for your tax reporting purposes."
    },
    {
      question: "What happens to my profits if I breach a rule after being funded?",
      answer: "If you breach a trading rule on your funded account (such as exceeding the maximum drawdown), your account may be suspended or terminated. Any profits earned up to that point will be calculated and paid out in accordance with our profit-sharing agreement, minus any losses incurred."
    }
  ];
  
  const accountFAQs = [
    {
      question: "Can I have multiple funded accounts?",
      answer: "Yes, you can have multiple funded accounts simultaneously. Many of our traders maintain several accounts with different trading strategies or instrument focus. Each account is separate and has its own balance, profit targets, and risk parameters."
    },
    {
      question: "How does account scaling work?",
      answer: "Our scaling program allows you to increase your account size by demonstrating consistent performance. After 3 months of profitable trading with a maximum drawdown of 5%, you can double your account size. After 6 months of continued success, you can quadruple your original account size."
    },
    {
      question: "Do you offer demo accounts?",
      answer: "Yes, we offer free demo accounts loaded with $100,000 in virtual funds. This allows you to practice with our platforms and test your strategies before purchasing a challenge. Demo accounts have the same conditions as our real challenge accounts."
    },
    {
      question: "What happens if I have a technical issue with my account?",
      answer: "Our technical support team is available 24/5 to assist with any platform issues, connection problems, or account-related technical difficulties. Contact us through live chat, email, or phone for immediate assistance."
    },
    {
      question: "Can I trade from any country?",
      answer: "We accept traders from most countries worldwide. However, due to regulatory restrictions, we currently do not provide services to residents of certain jurisdictions. Please check our Terms of Service or contact support to confirm eligibility for your country."
    }
  ];
  
  // Popular FAQs for the quick links section
  const popularFAQs = [
    {
      category: "General",
      question: "What is TradeFunded?",
      answer: generalFAQs[0].answer
    },
    {
      category: "Challenge",
      question: "What are the trading rules for the challenge?",
      answer: challengeFAQs[0].answer
    },
    {
      category: "Trading",
      question: "What financial instruments can I trade?",
      answer: tradingFAQs[0].answer
    },
    {
      category: "Payouts",
      question: "How often can I withdraw profits?",
      answer: payoutFAQs[0].answer
    },
    {
      category: "Account",
      question: "How does account scaling work?",
      answer: accountFAQs[1].answer
    }
  ];
  
  // Function to filter FAQs based on search query
  const filterFAQs = (faqs: any[], query: string) => {
    if (!query) return faqs;
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(query.toLowerCase()) || 
      faq.answer.toLowerCase().includes(query.toLowerCase())
    );
  };
  
  // Combined FAQs for search functionality
  const allFAQs = [
    ...generalFAQs.map(faq => ({ ...faq, category: "General" })),
    ...challengeFAQs.map(faq => ({ ...faq, category: "Challenge" })),
    ...tradingFAQs.map(faq => ({ ...faq, category: "Trading" })),
    ...payoutFAQs.map(faq => ({ ...faq, category: "Payouts" })),
    ...accountFAQs.map(faq => ({ ...faq, category: "Account" }))
  ];
  
  const filteredFAQs = filterFAQs(allFAQs, searchQuery);

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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our funded trading program
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full max-w-2xl mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search for answers..." 
                  className="pl-10 pr-4 py-6 rounded-full border-border/40 bg-background/50 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      {!searchQuery && (
        <section className="w-full py-12 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Common Questions</h2>
              <p className="text-muted-foreground">Quick answers to our most frequently asked questions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularFAQs.map((faq, index) => (
                <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/40">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">{faq.category}</Badge>
                    </div>
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{faq.answer}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="text-primary" asChild>
                      <Link href={`#${faq.category.toLowerCase()}`}>
                        Read more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search Results */}
      {searchQuery && (
        <section className="w-full py-12 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Search Results</h2>
              <p className="text-muted-foreground">Found {filteredFAQs.length} results for "{searchQuery}"</p>
            </div>
            
            {filteredFAQs.length > 0 ? (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/40">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">{faq.category}</Badge>
                      </div>
                      <CardTitle className="text-base">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">We couldn't find any FAQs matching your search query.</p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Categories with Tabbed Interface */}
      {!searchQuery && (
        <section className="w-full py-12 md:py-24 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Browse by Category</h2>
              <p className="text-muted-foreground">
                Find answers organized by topic to help you get the information you need
              </p>
            </div>
            
            <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="general" id="general">General</TabsTrigger>
                <TabsTrigger value="challenge" id="challenge">Challenge</TabsTrigger>
                <TabsTrigger value="trading" id="trading">Trading</TabsTrigger>
                <TabsTrigger value="payouts" id="payouts">Payouts</TabsTrigger>
                <TabsTrigger value="account" id="account">Account</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>General Questions</CardTitle>
                        <CardDescription>Information about TradeFunded and our services</CardDescription>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Activity className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {generalFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`general-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="challenge">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Challenge Questions</CardTitle>
                        <CardDescription>Details about our evaluation process and rules</CardDescription>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {challengeFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`challenge-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="trading">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Trading Questions</CardTitle>
                        <CardDescription>Information about instruments, platforms, and conditions</CardDescription>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <LineChart className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {tradingFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`trading-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="payouts">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Payout Questions</CardTitle>
                        <CardDescription>Information about profit withdrawals and payment methods</CardDescription>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {payoutFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`payouts-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Account Questions</CardTitle>
                        <CardDescription>Information about funded accounts and management</CardDescription>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {accountFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`account-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {/* Still Have Questions */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Still Have Questions?</h2>
                <p className="mt-4 text-muted-foreground">
                  If you couldn't find the answer you were looking for, our support team is ready to help with any questions you might have about our funded trading program.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Headphones className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">24/5 Live Support</h3>
                    <p className="text-sm text-muted-foreground">Our support team is available 24/5 to assist you with any inquiries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Quick Response Time</h3>
                    <p className="text-sm text-muted-foreground">We respond to most inquiries within 2 hours during business days.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Expert Assistance</h3>
                    <p className="text-sm text-muted-foreground">Get help from trading professionals who understand your needs.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    Contact Support
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/support">
                  <Button variant="outline">
                    Browse Knowledge Base
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 lg:mt-0">
              <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle className="text-xl">Community Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Join our trading community to connect with other funded traders, share experiences, and get peer-to-peer support.
                  </p>
                  <Link href="/community">
                    <Button variant="outline" className="w-full">
                      Visit Community Forum
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle className="text-xl">Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Watch step-by-step video guides explaining our challenge process, platform features, and trading conditions.
                  </p>
                  <Link href="/academy/tutorials">
                    <Button variant="outline" className="w-full">
                      Watch Tutorials
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Help Articles</h2>
            <p className="text-muted-foreground">
              Detailed guides to help you get the most out of your trading experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Challenge Reset Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Learn how our challenge reset policy works, including eligibility criteria for resets, discount options, and how to request a reset.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/support/challenge-reset-policy">
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Calculating Profit Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  A comprehensive guide to understanding how profit targets are calculated, including examples and strategies to achieve them efficiently.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/support/calculating-profit-targets">
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Setting Up Your Trading Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Step-by-step instructions for downloading, installing, and configuring your preferred trading platform to connect with your TradeFunded account.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/support/platform-setup-guide">
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </Link>
              </CardFooter>
            </Card>
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