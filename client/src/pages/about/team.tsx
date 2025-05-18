import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Code, BarChart2, Bitcoin } from "lucide-react";
import PageTemplate from "@/components/page-template";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Svk Olo",
      role: "Lead Developer",
      bio: "Svk has over 8 years of experience in full-stack development with a focus on financial applications. He specializes in building robust trading platforms and real-time market data systems.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      skills: ["React", "Node.js", "TypeScript", "Trading Algorithms", "WebSockets"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Ghufy",
      role: "Trading Specialist",
      bio: "Ghufy brings 10+ years of experience in forex and crypto trading. With a background in financial analysis and market research, he helps design and optimize our trading challenge parameters.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["Forex", "Crypto", "Technical Analysis", "Risk Management", "Algorithmic Trading"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  return (
    <PageTemplate
      title="TRFX - Meet Our Team"
      description="Meet the talented team behind TRFX. Our experts in trading and technology work together to provide you with the best prop trading platform."
    >
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The talented individuals behind TRFX who are dedicated to helping you succeed in your trading journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden bg-card border border-border">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {member.socials.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                    )}
                    {member.socials.linkedin && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                    )}
                    {member.socials.twitter && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {member.name === "Svk Olo" && <Code className="h-5 w-5 mr-2 text-primary" />}
                  {member.name === "Ghufy" && (
                    <>
                      <BarChart2 className="h-5 w-5 mr-1 text-primary" />
                      <Bitcoin className="h-5 w-5 mr-2 text-amber-500" />
                    </>
                  )}
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
                <Button variant="default">View Projects</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Are you passionate about trading and technology? We're always looking for talented individuals to join our team.
          </p>
          <Button asChild>
            <Link href="/about/careers">View Open Positions</Link>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
}