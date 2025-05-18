import { Link } from "wouter";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const howItWorksItems = [
  {
    title: "Evaluation Process",
    href: "/how-it-works/evaluation-process",
    description: "Learn about our two-phase evaluation process for traders."
  },
  {
    title: "Trading Objectives",
    href: "/how-it-works/trading-objectives",
    description: "Understand the profit targets and rules for our challenges."
  },
  {
    title: "Scaling Plan",
    href: "/how-it-works/scaling-plan",
    description: "See how you can scale up to larger funded accounts."
  }
];

const tradingItems = [
  {
    title: "Trading Updates",
    href: "/trading/updates",
    description: "Stay updated with the latest trading news and analysis."
  },
  {
    title: "Tools & Services",
    href: "/trading/tools",
    description: "Explore our suite of trading tools and services."
  },
  {
    title: "Trading Platforms",
    href: "/trading/platforms",
    description: "Learn about the trading platforms we support."
  },
  {
    title: "Premium Programme",
    href: "/trading/premium",
    description: "Discover our premium trading program benefits."
  },
  {
    title: "Symbols",
    href: "/trading/symbols",
    description: "Check which symbols and markets are available to trade."
  },
  {
    title: "Leaderboard",
    href: "/trading/leaderboard",
    description: "See the top-performing traders in our community."
  },
  {
    title: "Economic Calendar",
    href: "/trading/economic-calendar",
    description: "Keep track of important economic events and announcements."
  },
  {
    title: "FTMO Free Trial",
    href: "/trading/free-trial",
    description: "Try our challenge process for free before committing."
  },
  {
    title: "Performance Coaches",
    href: "/trading/coaches",
    description: "Work with expert performance coaches to improve your trading."
  }
];

const aboutItems = [
  {
    title: "Our Story",
    href: "/about/story",
    description: "Learn about our company history and mission."
  },
  {
    title: "Our Team",
    href: "/about/team",
    description: "Meet the dedicated professionals behind TradeFunded."
  },
  {
    title: "Careers",
    href: "/about/careers",
    description: "Join our growing team of trading professionals."
  },
  {
    title: "Press & Media",
    href: "/about/press",
    description: "Access our media resources and press releases."
  }
];

export function MainNav({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-6">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
        </div>
      </Link>
      
      <NavigationMenu className={cn("hidden md:flex", className)}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>How it works</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {howItWorksItems.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/faq">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQ
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/testimonials">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Testimonials
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trading</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {tradingItems.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>About us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {aboutItems.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/academy">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Academy
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link href="/contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="hidden md:flex items-center gap-2 ml-auto">
        <Link href="/login">
          <Button variant="ghost" size="sm">Login</Button>
        </Link>
        <Link href="/register">
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}