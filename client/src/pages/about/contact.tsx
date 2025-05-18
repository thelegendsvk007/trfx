import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageSquare, HelpCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PageTemplate from "@/components/page-template";

export default function ContactPage() {
  return (
    <PageTemplate
      title="TRFX - Contact Us"
      description="Get in touch with our support team for any questions or assistance with your funded trading account."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is ready to assist you with any questions
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Email Support</CardTitle>
                  <CardDescription>Fastest response method</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-sm text-muted-foreground">info@trfx.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Trader Support</p>
                      <p className="text-sm text-muted-foreground">support@trfx.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Billing & Payments</p>
                      <p className="text-sm text-muted-foreground">billing@trfx.com</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Phone Support</CardTitle>
                  <CardDescription>For urgent issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">International</p>
                      <p className="text-sm text-muted-foreground">+44 20 1234 5678</p>
                    </div>
                    <div>
                      <p className="font-medium">US & Canada (Toll-free)</p>
                      <p className="text-sm text-muted-foreground">+1 (888) 123-4567</p>
                    </div>
                    <div>
                      <p className="font-medium">Asia Pacific</p>
                      <p className="text-sm text-muted-foreground">+65 6123 4567</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Live Chat</CardTitle>
                  <CardDescription>Instant assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Our live chat support is available during business hours to provide immediate assistance with your questions and concerns.
                    </p>
                    <div className="pt-2">
                      <p className="font-medium">Live Chat Hours</p>
                      <p className="text-sm text-muted-foreground">Monday to Friday</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 11:00 PM GMT</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Start Chat
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Office Locations</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">London (Headquarters)</h3>
                      <p className="text-muted-foreground">123 Financial Street</p>
                      <p className="text-muted-foreground">London, EC1A 1BB</p>
                      <p className="text-muted-foreground">United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">New York</h3>
                      <p className="text-muted-foreground">555 Trading Avenue, Suite 200</p>
                      <p className="text-muted-foreground">New York, NY 10022</p>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Singapore</h3>
                      <p className="text-muted-foreground">88 Market Street, #25-01</p>
                      <p className="text-muted-foreground">Singapore 048948</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex gap-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary shrink-0 mt-1">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Customer Support available 24/5</p>
                      <p className="text-muted-foreground">Office Hours: 9:00 AM - 6:00 PM (Local time)</p>
                      <p className="text-muted-foreground">Monday to Friday</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Send Us a Message</h2>
                <Card className="border border-border/50">
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="inquiry-type">Inquiry Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing & Payments</SelectItem>
                            <SelectItem value="account">Account Management</SelectItem>
                            <SelectItem value="challenge">Challenge Questions</SelectItem>
                            <SelectItem value="payout">Payout Issues</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Are you an existing customer?</Label>
                        <RadioGroup defaultValue="no" className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className="cursor-pointer">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className="cursor-pointer">No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea id="message" placeholder="Please describe your inquiry in detail..." rows={5} />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common inquiries
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <CardTitle className="text-lg">How quickly can I expect a response?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We aim to respond to all email inquiries within 24 hours during business days. Live chat support typically provides immediate assistance during operating hours, and phone support wait times are usually under 5 minutes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <CardTitle className="text-lg">Who should I contact for payout issues?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For questions about payouts, please email billing@trfx.com with your account details and specific inquiry. For urgent payout matters, you can use our live chat or call our direct support line.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <CardTitle className="text-lg">How do I schedule a call with a trading advisor?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Funded traders can schedule one-on-one consultations with our trading advisors through the dashboard. Navigate to "Support" → "Schedule Consultation" and select your preferred time slot.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <CardTitle className="text-lg">Do you provide technical support for MT4/MT5?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer technical support for MetaTrader platforms. For platform-specific issues, please contact support@trfx.com with details of your problem, including screenshots if possible.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/faq">
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnerships Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">Partnership Opportunities</h2>
                <p className="text-muted-foreground mb-4">
                  TRFX is open to strategic partnerships with broker firms, educational platforms, trading communities, and content creators in the financial industry.
                </p>
                <p className="text-muted-foreground mb-6">
                  If you're interested in exploring partnership opportunities, please reach out to our business development team with your proposal.
                </p>
                <Button asChild>
                  <Link href="mailto:partnerships@trfx.com">
                    <Building2 className="mr-2 h-4 w-4" />
                    Contact Partnership Team
                  </Link>
                </Button>
              </div>
              <div className="bg-muted/30 rounded-lg border border-border/50 p-6">
                <h3 className="text-xl font-bold mb-4">Partnership Inquiries</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">partnerships@trfx.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+44 20 1234 5689</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Building2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Contact Person</p>
                      <p className="text-muted-foreground">James Wilson, Director of Business Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Trading Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards trading with our capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  View Challenges
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/signup">
                  Create Account
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}