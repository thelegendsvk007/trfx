import { Link } from "wouter";
import { ArrowRight, Award, BarChart, Globe, UsersRound, Zap, Building, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageTemplate from "@/components/page-template";

export default function CompanyPage() {
  return (
    <PageTemplate
      title="TRFX - Our Company"
      description="Learn about TRFX, our mission, vision, and the team behind our innovative funded trading program."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Company
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empowering traders worldwide with access to professional capital
            </p>
          </div>
        </div>
      </section>
      
      {/* About TRFX */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">About TRFX</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Founded in 2020, TRFX has quickly established itself as a leading provider of funded trading accounts in the forex and futures markets. We give talented traders access to substantial trading capital without requiring them to risk their own money.
                  </p>
                  <p className="text-muted-foreground">
                    Our innovative challenge-based evaluation system identifies skilled traders who can consistently generate profits while maintaining disciplined risk management. Those who demonstrate trading excellence gain access to our capital and earn a significant share of the profits they generate.
                  </p>
                  <p className="text-muted-foreground">
                    Based in London with offices in New York and Singapore, TRFX now supports over 10,000 traders across more than 150 countries, with over $50 million in trading capital allocated to successful participants in our program.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-6">TRFX by the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                    <div className="text-sm text-muted-foreground">Active Traders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
                    <div className="text-sm text-muted-foreground">Capital Allocated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$2.5M+</div>
                    <div className="text-sm text-muted-foreground">Monthly Payouts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our business and shape our trader relationships
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 mb-12 rounded-lg border border-border/50 text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                To democratize access to professional trading capital by identifying and funding skilled traders worldwide, regardless of their background or financial resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Merit-Based Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe trading skill should be the only barrier to accessing professional capital. Our evaluation process focuses purely on performance and risk management, not your background or financial status.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Financial Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain robust financial controls and segregated accounts to ensure the security of both trader and company funds. Our transparent profit-sharing model aligns our interests with our traders' success.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Global Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We embrace diversity in our trading community, recognizing that talent exists everywhere. We provide equal opportunity and support to traders from all countries, cultures, and backgrounds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experienced professionals behind TRFX
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square rounded-md bg-muted/50 mb-4"></div>
              <h3 className="text-xl font-bold">OLO</h3>
              <p className="text-muted-foreground mb-2">CEO & Founder</p>
              <p className="text-sm text-muted-foreground">
                Former head of FX trading at a leading investment bank with 15+ years of trading experience. MSc in Financial Engineering from MIT.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-md bg-muted/50 mb-4"></div>
              <h3 className="text-xl font-bold">SVK</h3>
              <p className="text-muted-foreground mb-2">CEO & Founder</p>
              <p className="text-sm text-muted-foreground">
                Over 12 years of risk management experience at major financial institutions. Previously managed $2B+ portfolios and trading operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-md bg-muted/50 mb-4"></div>
              <h3 className="text-xl font-bold">Ghufy</h3>
              <p className="text-muted-foreground mb-2">CEO & Founder</p>
              <p className="text-sm text-muted-foreground">
                Veteran trader with 10+ years of proprietary trading experience. Specializes in developing evaluation programs and trader analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Culture */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Company Culture</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At TRFX, we're passionate about creating a culture that blends the precision of financial expertise with the innovation of a technology company. Our team combines professionals from trading, fintech, data science, and customer support backgrounds.
                  </p>
                  <p className="text-muted-foreground">
                    We foster an environment of continuous learning and improvement, encouraging both our team members and funded traders to constantly develop their skills and knowledge. We believe that by investing in people, we create a stronger, more resilient business.
                  </p>
                  <p className="text-muted-foreground">
                    Our offices reflect our values: open, collaborative spaces that encourage interaction while providing quiet zones for focused analysis and trading. Regular knowledge-sharing sessions, workshops, and social events build camaraderie among our global teams.
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/about/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="space-y-6">
                  <div className="p-4 bg-card rounded-lg border border-border/50">
                    <div className="flex gap-3 items-center mb-3">
                      <UsersRound className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Team-Focused</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We work collaboratively, supporting each other to achieve our shared mission of empowering traders worldwide.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border/50">
                    <div className="flex gap-3 items-center mb-3">
                      <Zap className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Innovation-Driven</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We continuously improve our platform, challenge assessment, and trader support through technology and data analytics.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border/50">
                    <div className="flex gap-3 items-center mb-3">
                      <Building className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Globally Distributed</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      With team members across multiple countries, we embrace diverse perspectives while maintaining a unified company culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Regulatory Information */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Regulatory Information</h2>
            
            <div className="bg-card p-6 rounded-lg border border-border/50 mb-8">
              <h3 className="text-lg font-medium mb-3">Corporate Structure</h3>
              <p className="text-muted-foreground mb-4">
                TRFX is operated by TradingFunds Ltd., a company registered in the United Kingdom (Company No. 12345678). Our registered office is located at 123 Financial Street, London, EC1A 1BB, United Kingdom.
              </p>
              <p className="text-muted-foreground">
                We maintain additional operational offices in New York and Singapore to serve our global trader community and provide support across all major time zones.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border/50">
              <h3 className="text-lg font-medium mb-3">Compliance & Legal</h3>
              <p className="text-muted-foreground mb-4">
                TRFX operates as a proprietary trading firm that provides capital allocation services. We are not a regulated broker, investment advisor, or asset manager. We do not offer financial advice or investment management services to the public.
              </p>
              <p className="text-muted-foreground">
                Our funded trader program involves traders using our capital to trade financial markets, with profits shared according to pre-agreed terms. All trading activities through our program are conducted on regulated brokers and exchanges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Growing Community</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards trading with our capital and becoming part of the TRFX family
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  View Challenges
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}