import { useState } from "react";
import { Link } from "wouter";
import { 
  Activity, 
  Building2, 
  ChevronRight, 
  Clock, 
  Globe, 
  Headphones, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Phone, 
  ShieldCheck 
} from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    topic: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to your backend
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          topic: "",
          message: ""
        });
      }, 5000);
    }, 1000);
  };
  
  // Office locations
  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      address: "10 Finsbury Square, London, EC2A 1AF",
      phone: "+44 20 7123 4567",
      email: "london@tradefunded.com",
      hours: "Mon-Fri: 9am-6pm GMT"
    },
    {
      city: "New York",
      country: "United States",
      address: "350 Fifth Avenue, New York, NY 10118",
      phone: "+1 212 555 1234",
      email: "nyc@tradefunded.com",
      hours: "Mon-Fri: 9am-6pm EST"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "One Raffles Place, Singapore 048616",
      phone: "+65 6123 4567",
      email: "singapore@tradefunded.com",
      hours: "Mon-Fri: 9am-6pm SGT"
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Dubai International Financial Centre, Dubai, 506528",
      phone: "+971 4 123 4567",
      email: "dubai@tradefunded.com",
      hours: "Sun-Thu: 9am-6pm GST"
    }
  ];
  
  // Support topics
  const supportTopics = [
    {
      title: "Trading Challenges",
      description: "Questions about our trading challenges, rules, or requirements.",
      items: [
        "Challenge registration process",
        "Trading rules and objectives",
        "Phase 1 and Phase 2 verification",
        "Challenge extension requests",
        "Challenge fee refunds"
      ]
    },
    {
      title: "Account Management",
      description: "Help with your trading accounts or dashboard.",
      items: [
        "Account activation issues",
        "Dashboard access problems",
        "Trading platform connections",
        "Account scaling requests",
        "Performance metrics questions"
      ]
    },
    {
      title: "Billing & Payments",
      description: "Assistance with payments, invoices, or billing issues.",
      items: [
        "Payment methods",
        "Invoice requests",
        "Subscription questions",
        "Payment failures",
        "Refund requests"
      ]
    },
    {
      title: "Profit Withdrawals",
      description: "Help with profit payouts and withdrawal processes.",
      items: [
        "Payout scheduling",
        "Withdrawal methods",
        "Withdrawal delays",
        "Tax documentation",
        "Profit split calculations"
      ]
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our global team is here to answer your questions and provide the support you need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="w-full py-12 md:py-24 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Chat with our support team in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Get immediate assistance with your questions through our live chat service, available during business hours.
                </p>
                <div className="flex items-center text-sm mb-1">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>24/5 Support (Sun 5pm - Fri 4pm ET)</span>
                </div>
                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>Available in multiple languages</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Start Live Chat
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Email our support team for more complex inquiries or if you need to share specific details about your issue.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">General Inquiries:</span><br />
                    <a href="mailto:support@tradefunded.com" className="text-primary hover:underline">support@tradefunded.com</a>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Billing Questions:</span><br />
                    <a href="mailto:billing@tradefunded.com" className="text-primary hover:underline">billing@tradefunded.com</a>
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Send Email
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>Speak directly with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  For urgent issues or when you prefer to talk directly, our phone support team is ready to help.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">North America:</span><br />
                    <a href="tel:+12125551234" className="text-primary hover:underline">+1 (212) 555-1234</a>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Europe & UK:</span><br />
                    <a href="tel:+442071234567" className="text-primary hover:underline">+44 20 7123 4567</a>
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Call Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Contact Form */}
            <div>
              <div className="space-y-2 mb-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>
              
              <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardContent className="pt-6">
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-8">
                      <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                        <ShieldCheck className="h-6 w-6 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-4">
                        Thank you for reaching out. We've received your message and will respond shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input 
                            id="name" 
                            name="name"
                            placeholder="John Doe" 
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email" 
                            placeholder="you@example.com" 
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input 
                            id="subject" 
                            name="subject"
                            placeholder="Brief subject of your inquiry" 
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="topic">Topic</Label>
                          <Select 
                            value={formData.topic} 
                            onValueChange={(value) => handleSelectChange("topic", value)}
                          >
                            <SelectTrigger id="topic">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="challenge">Trading Challenge</SelectItem>
                              <SelectItem value="account">Account Management</SelectItem>
                              <SelectItem value="billing">Billing & Payments</SelectItem>
                              <SelectItem value="payout">Profit Withdrawals</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          placeholder="Provide details about your inquiry or issue..." 
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          id="privacy" 
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" 
                          required
                        />
                        <Label htmlFor="privacy" className="text-sm font-normal">
                          I agree to the <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and consent to being contacted about my inquiry.
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Office Locations */}
            <div>
              <div className="space-y-2 mb-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Offices</h2>
                <p className="text-muted-foreground">
                  Visit us at one of our global locations
                </p>
              </div>
              
              <Tabs defaultValue="london" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  {offices.map((office) => (
                    <TabsTrigger key={office.city.toLowerCase()} value={office.city.toLowerCase()}>
                      {office.city}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {offices.map((office) => (
                  <TabsContent key={office.city.toLowerCase()} value={office.city.toLowerCase()} className="mt-6">
                    <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          <CardTitle>{office.city}, {office.country}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium">Address</h4>
                            <p className="text-sm text-muted-foreground">{office.address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium">Phone</h4>
                            <p className="text-sm text-muted-foreground">{office.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium">Email</h4>
                            <p className="text-sm text-muted-foreground">{office.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium">Business Hours</h4>
                            <p className="text-sm text-muted-foreground">{office.hours}</p>
                          </div>
                        </div>
                        
                        <div className="h-[200px] w-full bg-muted rounded-md mt-2 flex items-center justify-center">
                          <p className="text-sm text-muted-foreground">Interactive map will render here</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Get Directions
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Common Support Topics</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Explore these categories to find the information you need
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {supportTopics.map((topic) => (
              <Card key={topic.title} className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/support">
                    <Button variant="outline" className="w-full">
                      View {topic.title} Help
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support Options */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Additional Support</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                More ways to get help with your TradeFunded account
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-3">
                <CardTitle>Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our comprehensive help center articles, tutorials, and FAQs to find answers to common questions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Popular</Badge>
                    <span className="text-sm">Challenge Rules & Guidelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Popular</Badge>
                    <span className="text-sm">Profit Withdrawal Process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Popular</Badge>
                    <span className="text-sm">Account Scaling Requirements</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/support">
                  <Button className="w-full">Visit Knowledge Base</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-3">
                <CardTitle>Community Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with other TradeFunded traders to share experiences, strategies, and get peer-to-peer support.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">Active</Badge>
                    <span className="text-sm">Trading Strategy Discussions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">Active</Badge>
                    <span className="text-sm">Challenge Success Stories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">Active</Badge>
                    <span className="text-sm">Market Analysis & Trading Ideas</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/community">
                  <Button className="w-full">Join Community</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader className="pb-3">
                <CardTitle>Trading Academy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access our educational resources, webinars, and training materials to improve your trading skills.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20">Free</Badge>
                    <span className="text-sm">Risk Management Essentials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20">Free</Badge>
                    <span className="text-sm">Technical Analysis Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20">Premium</Badge>
                    <span className="text-sm">Advanced Trading Psychology</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/academy">
                  <Button className="w-full">Explore Academy</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Trading?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Take the challenge, pass the evaluation, and start trading with our capital
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/challenges">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline">
                  Learn More
                </Button>
              </Link>
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