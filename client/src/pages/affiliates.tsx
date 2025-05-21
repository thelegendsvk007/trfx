import { Link } from "wouter";
import { ArrowRight, Check, Coins, DollarSign, Gift, Globe, LineChart, Users } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function AffiliatesPage() {
  return (
    <PageTemplate
      title="TRFX Affiliate Program | Earn Commissions Referring Traders"
      description="Join the TRFX affiliate program and earn generous commissions by referring traders to our funded trading programs and educational resources."
    >
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 z-10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                <Users className="h-6 w-6 text-primary mr-2" />
                <span className="font-medium text-primary">Partner With Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Earn While Helping Others Succeed in Trading
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join the TRFX Affiliate Program and earn competitive commissions by referring traders to our funded trading challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                  <Link href="/affiliates/signup">
                    Become an Affiliate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#affiliate-faq">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Commission Structure */}
        <section className="relative py-16 bg-muted/30 border-y border-border/50 z-10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Industry-Leading</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Generous Commission Structure</h2>
              <p className="text-lg text-muted-foreground">
                Earn substantial rewards for every trader you refer to our platform
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>Standard Plan</CardTitle>
                      <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                    <CardDescription>For new affiliates</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="mb-4">
                      <div className="text-4xl font-bold">15%</div>
                      <p className="text-muted-foreground">Commission Rate</p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Commissions on all referred challenge purchases</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>30-day cookie duration</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Access to affiliate dashboard</span>
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-md text-sm">
                      <p><span className="font-medium">Example:</span> Refer a $1,000 challenge purchase = <span className="font-medium text-green-500">$150 commission</span></p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 hover:border-primary/30 transition-colors relative bg-gradient-to-b from-background to-muted/30 border-primary/20">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-lg"></div>
                  <Badge className="absolute -top-3 right-4 bg-primary hover:bg-primary">Most Popular</Badge>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>Premium Plan</CardTitle>
                      <div className="h-10 w-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                        <Coins className="h-5 w-5 text-violet-500" />
                      </div>
                    </div>
                    <CardDescription>For established affiliates (10+ referrals)</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="mb-4">
                      <div className="text-4xl font-bold">25%</div>
                      <p className="text-muted-foreground">Commission Rate</p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Higher commission rate on all purchases</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>45-day cookie duration</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Priority payment processing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Custom marketing materials</span>
                      </div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-md text-sm">
                      <p><span className="font-medium">Example:</span> Refer a $1,000 challenge purchase = <span className="font-medium text-green-500">$250 commission</span></p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>Elite Plan</CardTitle>
                      <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Gift className="h-5 w-5 text-amber-500" />
                      </div>
                    </div>
                    <CardDescription>For top-performing affiliates (50+ referrals)</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="mb-4">
                      <div className="text-4xl font-bold">35%</div>
                      <p className="text-muted-foreground">Commission Rate</p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Maximum commission rate available</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>60-day cookie duration</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Dedicated affiliate manager</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Exclusive promotions for your audience</span>
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-md text-sm">
                      <p><span className="font-medium">Example:</span> Refer a $1,000 challenge purchase = <span className="font-medium text-green-500">$350 commission</span></p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-muted-foreground mb-6">
                  Commissions are paid on all successful referrals with no caps on earnings.
                  Payments are processed monthly via bank transfer, PayPal, or cryptocurrency.
                </p>
                <Button size="lg" asChild>
                  <Link href="/affiliates/commission-calculator">
                    Calculate Your Potential Earnings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="relative py-16 z-10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Become a TRFX Affiliate?</h2>
              <p className="text-lg text-muted-foreground">
                Our affiliate program is designed to reward you generously for your promotional efforts
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl">High-Value Commissions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Earn substantial commissions on every referred trader who purchases a trading challenge. With challenge prices ranging from $500 to $2,000+, your earnings can add up quickly.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                      <LineChart className="h-6 w-6 text-green-500" />
                    </div>
                    <CardTitle className="text-xl">Real-Time Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Access our comprehensive affiliate dashboard to track clicks, conversions, and commissions in real-time. Our transparent reporting ensures you always know your performance stats.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-purple-500" />
                    </div>
                    <CardTitle className="text-xl">Global Audience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Promote to traders worldwide with our geographically unrestricted program. We accept traders from most countries, expanding your potential audience and commission opportunities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                      <Gift className="h-6 w-6 text-amber-500" />
                    </div>
                    <CardTitle className="text-xl">Marketing Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We provide professional marketing materials including banners, email templates, promotional content, and product details to help you effectively promote our trading challenges.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle className="text-xl">Dedicated Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Get personalized assistance from our affiliate team to optimize your campaigns and maximize earnings. Premium and Elite affiliates receive dedicated account managers.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                      <Coins className="h-6 w-6 text-cyan-500" />
                    </div>
                    <CardTitle className="text-xl">Timely Payments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enjoy reliable monthly payments with multiple payout options including bank transfer, PayPal, and various cryptocurrencies. No minimum threshold for Elite affiliates.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="relative py-16 bg-muted/30 border-y border-border/50 z-10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">How Our Affiliate Program Works</h2>
              <p className="text-lg text-muted-foreground">
                Start earning in just a few simple steps
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border/50 relative">
                  <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">1</div>
                  <h3 className="text-lg font-medium mb-3 mt-2">Sign Up</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete our simple affiliate registration form and agree to our terms and conditions.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/affiliates/signup">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border/50 relative">
                  <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">2</div>
                  <h3 className="text-lg font-medium mb-3 mt-2">Get Your Links</h3>
                  <p className="text-muted-foreground mb-4">
                    Access your personal tracking links and promotional materials from your affiliate dashboard.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/affiliates/resources">
                      View Resources
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border/50 relative">
                  <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">3</div>
                  <h3 className="text-lg font-medium mb-3 mt-2">Promote TRFX</h3>
                  <p className="text-muted-foreground mb-4">
                    Share your affiliate links on your website, social media, YouTube channel, or email list.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/affiliates/promotion-tips">
                      Promotion Tips
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border/50 relative">
                  <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">4</div>
                  <h3 className="text-lg font-medium mb-3 mt-2">Earn Commissions</h3>
                  <p className="text-muted-foreground mb-4">
                    Get paid for every referred trader who purchases a trading challenge through your link.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/affiliates/payment-options">
                      Payment Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="relative py-16 z-10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Affiliate Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Hear from successful affiliates who are earning substantial income with TRFX
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-border/50">
                  <CardContent className="pt-8">
                    <div className="flex flex-col items-center text-center mb-6">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src="https://placehold.co/400/1f2937/e5e7eb?text=MH" alt="Michael Harrison" />
                        <AvatarFallback>MH</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-medium">Michael Harrison</h3>
                        <p className="text-muted-foreground">Trading Educator & YouTuber</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 text-center italic">
                      "As a trading educator with a YouTube channel, TRFX's affiliate program has been a perfect fit. My audience is looking for legitimate funding opportunities, and I've been able to earn over $5,000 monthly by promoting TRFX challenges. Their conversion rates are exceptional because their program genuinely delivers value to traders."
                    </p>
                    <div className="text-center text-sm text-muted-foreground">
                      <span className="font-medium">Results:</span> $5,000+ monthly commission | 200+ referred traders
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50">
                  <CardContent className="pt-8">
                    <div className="flex flex-col items-center text-center mb-6">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src="https://placehold.co/400/1f2937/e5e7eb?text=JS" alt="Jennifer Smith" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-medium">Jennifer Smith</h3>
                        <p className="text-muted-foreground">Financial Blogger</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 text-center italic">
                      "I started promoting TRFX on my financial blog as a side project, and it's now become one of my primary income sources. The high-ticket nature of their challenges means I earn substantial commissions from each referral. Their marketing materials are professional and convert extremely well."
                    </p>
                    <div className="text-center text-sm text-muted-foreground">
                      <span className="font-medium">Results:</span> $3,200 average monthly commission | 120+ referred traders
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="/affiliates/case-studies">
                    Read More Success Stories
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="affiliate-faq" className="relative py-16 bg-muted/30 border-y border-border/50 z-10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our affiliate program
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="bg-background rounded-lg border border-border/50 overflow-hidden">
                  <div className="p-4 font-medium">Who can join the TRFX affiliate program?</div>
                  <div className="px-4 pb-4 text-muted-foreground">
                    Anyone with a platform to promote our services can join, including trading educators, financial bloggers, YouTubers, social media influencers, and website owners focused on trading, finance, or investment content.
                  </div>
                </div>
                
                <div className="bg-background rounded-lg border border-border/50 overflow-hidden">
                  <div className="p-4 font-medium">How much can I earn as an affiliate?</div>
                  <div className="px-4 pb-4 text-muted-foreground">
                    Your earnings depend on your promotional reach and effectiveness. With commissions ranging from 15% to 35% on challenge purchases ($500-$2,000+), affiliates can earn anywhere from a few hundred to several thousand dollars monthly.
                  </div>
                </div>
                
                <div className="bg-background rounded-lg border border-border/50 overflow-hidden">
                  <div className="p-4 font-medium">When and how are commissions paid?</div>
                  <div className="px-4 pb-4 text-muted-foreground">
                    Commissions are paid monthly for the previous month's earnings. We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency. The minimum payout threshold is $100 for Standard affiliates, $50 for Premium, and no minimum for Elite affiliates.
                  </div>
                </div>
                
                <div className="bg-background rounded-lg border border-border/50 overflow-hidden">
                  <div className="p-4 font-medium">What marketing materials do you provide?</div>
                  <div className="px-4 pb-4 text-muted-foreground">
                    We provide a comprehensive range of marketing assets including banners in various sizes, email templates, product descriptions, promotional videos, comparison tables, and exclusive promotional offers for your audience.
                  </div>
                </div>
                
                <div className="bg-background rounded-lg border border-border/50 overflow-hidden">
                  <div className="p-4 font-medium">How long do cookies last?</div>
                  <div className="px-4 pb-4 text-muted-foreground">
                    Cookie duration depends on your affiliate level: 30 days for Standard affiliates, 45 days for Premium affiliates, and 60 days for Elite affiliates. This means you'll earn a commission if the referred user makes a purchase within that timeframe.
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/affiliates/faq">
                    View All FAQs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-16 z-10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="border-border/50 bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">Ready to Start Earning?</CardTitle>
                  <CardDescription className="text-lg">
                    Join the TRFX Affiliate Program today and turn your audience into income
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Registration is quick, free, and gives you immediate access to our affiliate dashboard and marketing materials.
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                    <Link href="/affiliates/signup">
                      Become an Affiliate Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground border-t border-border/30 flex justify-center">
                  Have questions? <Button variant="link" size="sm" className="h-auto p-0 ml-1">Contact our affiliate team</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}