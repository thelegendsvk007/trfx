import { Link } from "wouter";
import { 
  Activity, 
  Award, 
  Building2, 
  ChevronRight, 
  Globe, 
  GraduationCap, 
  Heart, 
  LineChart, 
  Network, 
  Shield, 
  Target, 
  Users 
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  // Team members data
  const executiveTeam = [
    {
      name: "Michael Anderson",
      role: "Founder & CEO",
      bio: "Former hedge fund trader with 15+ years experience in prop trading. Founded TRFX to democratize access to capital for skilled traders worldwide.",
      image: null,
      initials: "MA"
    },
    {
      name: "Sarah Chen",
      role: "Chief Operating Officer",
      bio: "Background in fintech operations and scaling startups. Led the expansion of TRFX across global markets and oversees daily operations.",
      image: null,
      initials: "SC"
    },
    {
      name: "David Mercer",
      role: "Chief Trading Officer",
      bio: "Professional trader with expertise in forex and futures. Manages risk assessment for all funded accounts and develops trading guidelines.",
      image: null,
      initials: "DM"
    },
    {
      name: "Elena Petrov",
      role: "Chief Technology Officer",
      bio: "Former quant developer with extensive experience building trading platforms. Leads our engineering team in developing robust trading infrastructure.",
      image: null,
      initials: "EP"
    }
  ];
  
  const tradingTeam = [
    {
      name: "James Wilson",
      role: "Head of Risk Management",
      bio: "Specializes in systematic risk assessment and has developed our proprietary risk scoring system that monitors all funded accounts.",
      image: null,
      initials: "JW"
    },
    {
      name: "Aisha Patel",
      role: "Lead Trading Coach",
      bio: "Professional trader with over 10 years of experience. Leads our trader development program and provides one-on-one coaching to elite traders.",
      image: null,
      initials: "AP"
    },
    {
      name: "Thomas Lee",
      role: "Market Analyst",
      bio: "Former institutional analyst providing daily market insights and developing educational content for our trading academy.",
      image: null,
      initials: "TL"
    },
    {
      name: "Maria Rodriguez",
      role: "Trading Performance Specialist",
      bio: "Statistical analyst who identifies patterns in trader performance and creates tailored improvement plans for funded traders.",
      image: null,
      initials: "MR"
    }
  ];
  
  // Company metrics
  const companyMetrics = [
    {
      label: "Funded Traders",
      value: "2,500+",
      description: "Active traders using our capital",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      label: "Countries Served",
      value: "120+",
      description: "Global presence and support",
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    {
      label: "Capital Deployed",
      value: "$85M+",
      description: "Trading capital for our community",
      icon: <LineChart className="h-8 w-8 text-primary" />
    },
    {
      label: "Success Rate",
      value: "24%",
      description: "Traders passing our challenges",
      icon: <Award className="h-8 w-8 text-primary" />
    }
  ];

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
              <Badge variant="outline" className="border-primary/50 text-primary">Established 2021</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  About TradeFunded
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We're revolutionizing prop trading by providing skilled traders with the capital they need to succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
              <p className="text-muted-foreground">
                TradeFunded was born from a simple but powerful observation: there are highly skilled traders worldwide who lack the capital to maximize their potential, while capital holders lack the specialized trading skills to optimize their returns.
              </p>
              <p className="text-muted-foreground">
                Founded in 2021 by Michael Anderson, a former hedge fund trader, TradeFunded set out to bridge this gap by creating a meritocratic platform that evaluates trader skill through objective challenges and funds successful traders with substantial capital.
              </p>
              <p className="text-muted-foreground">
                What began as a small team working with 50 traders has grown into a global operation funding over 2,500 traders across 120+ countries. Our team now comprises experienced traders, technologists, and financial professionals united by our mission to democratize access to trading capital.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">The TradeFunded Difference</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Objective evaluation process based solely on trading skill</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Achievable trading targets designed by professional traders</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Comprehensive educational resources and trader development</span>
                  </li>
                  <li className="flex items-start">
                    <Network className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Global community of traders sharing strategies and insights</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm p-6">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
                <div className="space-y-2">
                  <h3 className="font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To democratize access to trading capital and empower skilled traders globally by providing them with the resources they need to succeed in financial markets.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm p-6">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
                <div className="space-y-2">
                  <h3 className="font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To create the world's most meritocratic trading environment where talent and skill are the only barriers to accessing significant trading capital.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-muted/50">
                  <span className="text-4xl font-bold text-primary">3+</span>
                  <span className="text-sm text-muted-foreground text-center">Years in operation</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-muted/50">
                  <span className="text-4xl font-bold text-primary">40+</span>
                  <span className="text-sm text-muted-foreground text-center">Team members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Metrics */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">TradeFunded by the Numbers</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Our global impact in the prop trading industry
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyMetrics.map((metric) => (
              <Card key={metric.label} className="bg-background/50 backdrop-blur-sm border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base font-medium text-muted-foreground">{metric.label}</CardTitle>
                    {metric.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            <Card className="col-span-1 lg:col-span-3 bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle>Global Reach</CardTitle>
                <CardDescription>Where our funded traders are located</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive world map will render here</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                  <div className="space-y-1 text-center">
                    <div className="text-xl font-bold">32%</div>
                    <div className="text-xs text-muted-foreground">North America</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="text-xl font-bold">28%</div>
                    <div className="text-xs text-muted-foreground">Europe</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="text-xl font-bold">18%</div>
                    <div className="text-xs text-muted-foreground">Asia</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="text-xl font-bold">12%</div>
                    <div className="text-xs text-muted-foreground">South America</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="text-xl font-bold">7%</div>
                    <div className="text-xs text-muted-foreground">Africa</div>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="text-xl font-bold">3%</div>
                    <div className="text-xs text-muted-foreground">Oceania</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                The principles that guide everything we do at TradeFunded
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Meritocracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in judging traders solely on their skill and performance, not their background or connections. Our evaluation process is designed to be fair, transparent, and objective.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We operate with the highest ethical standards in all our dealings. We're transparent about our rules, fair in our evaluations, and honest with our traders about both opportunities and risks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe trading doesn't have to be solitary. We foster a supportive global community where traders can learn from each other, share insights, and grow together.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed to trader development, providing comprehensive educational resources, analytics tools, and coaching to help traders continuously improve their skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We constantly evolve our platform, evaluation process, and tools to better serve our trading community and remain at the forefront of the prop trading industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Global Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We embrace diversity of thought, background, and trading approach. Our global community brings together different perspectives that enrich our collective trading knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                The experts behind TradeFunded's success
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="executive" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="executive">Leadership Team</TabsTrigger>
              <TabsTrigger value="trading">Trading Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="executive" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {executiveTeam.map((member) => (
                  <Card key={member.name} className="bg-background/50 backdrop-blur-sm border-border/40">
                    <CardHeader className="text-center pb-2">
                      <div className="flex justify-center mb-4">
                        <Avatar className="h-24 w-24">
                          {member.image ? (
                            <AvatarImage src={member.image} alt={member.name} />
                          ) : null}
                          <AvatarFallback className="bg-primary/10 text-primary text-xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trading" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tradingTeam.map((member) => (
                  <Card key={member.name} className="bg-background/50 backdrop-blur-sm border-border/40">
                    <CardHeader className="text-center pb-2">
                      <div className="flex justify-center mb-4">
                        <Avatar className="h-24 w-24">
                          {member.image ? (
                            <AvatarImage src={member.image} alt={member.name} />
                          ) : null}
                          <AvatarFallback className="bg-primary/10 text-primary text-xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center mt-12">
            <Link href="/about/careers">
              <Button variant="outline">
                View Career Opportunities
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Global Presence</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                With offices in key financial centers, we provide support to traders worldwide
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">London, UK</CardTitle>
                </div>
                <CardDescription>Global Headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  10 Finsbury Square<br />
                  London, EC2A 1AF<br />
                  United Kingdom
                </p>
                <Separator className="my-3" />
                <p className="text-sm font-medium">
                  <span className="text-muted-foreground">Phone:</span> +44 20 7123 4567
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">New York, USA</CardTitle>
                </div>
                <CardDescription>Americas Headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  350 Fifth Avenue<br />
                  New York, NY 10118<br />
                  United States
                </p>
                <Separator className="my-3" />
                <p className="text-sm font-medium">
                  <span className="text-muted-foreground">Phone:</span> +1 212 555 1234
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Singapore</CardTitle>
                </div>
                <CardDescription>Asia Pacific Headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  One Raffles Place<br />
                  Singapore 048616<br />
                  Singapore
                </p>
                <Separator className="my-3" />
                <p className="text-sm font-medium">
                  <span className="text-muted-foreground">Phone:</span> +65 6123 4567
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Dubai, UAE</CardTitle>
                </div>
                <CardDescription>Middle East Headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dubai International Financial Centre<br />
                  Dubai, 506528<br />
                  United Arab Emirates
                </p>
                <Separator className="my-3" />
                <p className="text-sm font-medium">
                  <span className="text-muted-foreground">Phone:</span> +971 4 123 4567
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Trading Community
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Take the first step on your funded trading journey. Start a challenge, prove your skills, and gain access to our capital.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/challenges">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    View Challenges
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md border-border/40">
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                  <CardDescription>
                    Stay updated with TradeFunded news, educational content, and market insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="you@example.com"
                        />
                      </div>
                      <Button className="w-full">Subscribe</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      By subscribing, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
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