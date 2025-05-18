import React from "react";
import { Link } from "wouter";
import { ArrowRight, Quote, Star } from "lucide-react";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      title: "Professional Forex Trader",
      location: "Singapore",
      image: null,
      initials: "MC",
      content: "I've been with several funded trader programs, but TRFX stands out from the rest. Their platform is intuitive, the challenge rules are fair, and most importantly, their payouts are always on time. I've been trading with a $100K funded account for over 6 months now, and it's been a game-changer for my trading career.",
      rating: 5,
      accountSize: "$100,000",
      tradingStyle: "Swing Trading",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Former Bank Trader",
      location: "London, UK",
      image: null,
      initials: "SJ",
      content: "After leaving my position at a major bank, I was looking for a way to continue trading without the stress of the trading floor. TRFX provided exactly what I needed - institutional-grade conditions, excellent execution, and the opportunity to scale my account. The challenge was rigorous but fair, and I appreciated the transparency throughout the entire process.",
      rating: 5,
      accountSize: "$200,000",
      tradingStyle: "Position Trading",
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      title: "Full-time Trader",
      location: "Madrid, Spain",
      image: null,
      initials: "CR",
      content: "The TRFX evaluation process is demanding but reasonable. It tests real trading skills rather than encouraging risky behavior. What impressed me most was how responsive their support team was when I had questions about the platform. Now that I'm funded, I appreciate the weekly performance reviews that help me continue improving.",
      rating: 4,
      accountSize: "$50,000",
      tradingStyle: "Day Trading",
    },
    {
      id: 4,
      name: "Aisha Patel",
      title: "Part-time Trader",
      location: "Dubai, UAE",
      image: null,
      initials: "AP",
      content: "As someone who trades part-time while maintaining another career, I was concerned about meeting the challenge requirements. TRFX's flexible timeframes allowed me to pass both phases without rushing my trades. Their platform integrates seamlessly with my preferred charting tools, and the funding process was smooth and professional.",
      rating: 5,
      accountSize: "$25,000",
      tradingStyle: "Scalping",
    },
    {
      id: 5,
      name: "David Kowalski",
      title: "Veteran FX Trader",
      location: "Warsaw, Poland",
      image: null,
      initials: "DK",
      content: "After trading for over 15 years, I've seen many prop firms come and go. TRFX has proven to be one of the most reliable. Their MetaTrader integration is flawless, and their spread conditions are genuinely competitive. What sets them apart is the scaling program that has allowed me to grow my initial $50K account to $150K based on consistent performance.",
      rating: 5,
      accountSize: "$150,000",
      tradingStyle: "Multi-strategy",
    },
    {
      id: 6,
      name: "Emma Wilson",
      title: "Commodity Specialist",
      location: "Sydney, Australia",
      image: null,
      initials: "EW",
      content: "I primarily trade gold and oil, so I needed a funded account that offered excellent conditions for commodities. TRFX delivers exactly that with tight spreads and reliable execution even during volatile market conditions. The challenge was tough but fair, and the ongoing support as a funded trader has been excellent.",
      rating: 4,
      accountSize: "$75,000",
      tradingStyle: "Swing Trading",
    },
  ];

  const featuredTestimonials = testimonials.slice(0, 3);
  const regularTestimonials = testimonials.slice(3);

  return (
    <PageTemplate
      title="TRFX - Trader Testimonials"
      description="Read authentic testimonials from TRFX funded traders about their experiences with our proprietary trading firm."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trader Success Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hear from real traders who have passed our challenge and are trading with TRFX funding
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
              <Link href="/challenges">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonials */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Featured Trader Testimonials
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-start mb-4">
                      <div className="mr-4">
                        <Avatar className="h-14 w-14 border-2 border-primary/20">
                          {testimonial.image ? (
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          ) : (
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                              {testimonial.initials}
                            </AvatarFallback>
                          )}
                        </Avatar>
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {testimonial.title}
                          <br />
                          {testimonial.location}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Quote className="absolute top-0 left-0 h-6 w-6 text-primary/20 -translate-x-2 -translate-y-2" />
                      <p className="text-muted-foreground relative z-10 pl-2">
                        {testimonial.content}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t border-border/30 pt-4">
                    <Badge variant="outline" className="text-xs font-normal">
                      Account: {testimonial.accountSize}
                    </Badge>
                    <Badge variant="outline" className="text-xs font-normal">
                      {testimonial.tradingStyle}
                    </Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* More Testimonials */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              More Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border border-border/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          {testimonial.image ? (
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          ) : (
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {testimonial.initials}
                            </AvatarFallback>
                          )}
                        </Avatar>
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{testimonial.name}</CardTitle>
                        <CardDescription className="text-xs">
                          {testimonial.title}, {testimonial.location}
                        </CardDescription>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.content}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t border-border/30 pt-3">
                    <Badge variant="outline" className="text-xs font-normal">
                      Account: {testimonial.accountSize}
                    </Badge>
                    <Badge variant="outline" className="text-xs font-normal">
                      {testimonial.tradingStyle}
                    </Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of traders who have transformed their trading career with TRFX funding
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/challenges">
                  View Challenge Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}