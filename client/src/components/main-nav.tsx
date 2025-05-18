import * as React from "react";
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";

const howItWorksItems = [
  {
    title: "Evaluation Process",
    href: "/how-it-works#evaluation-process",
    description: "Learn about our 3-step process to become a funded trader.",
  },
  {
    title: "Trading Objectives",
    href: "/how-it-works#trading-objectives",
    description: "Understand the targets and rules for each evaluation phase.",
  },
  {
    title: "Scaling Plan",
    href: "/how-it-works#scaling-plan",
    description: "See how you can increase your account size over time.",
  },
];

const tradingItems = [
  {
    title: "Trading Conditions",
    href: "/trading/conditions",
    description: "Review our trading hours, instruments, and leverage options.",
  },
  {
    title: "Trading Platform",
    href: "/trading/platform",
    description: "Explore our powerful trading platform and tools.",
  },
  {
    title: "Trading Rules",
    href: "/trading/rules",
    description: "Understand the guidelines and restrictions for trading.",
  },
];

const aboutUsItems = [
  {
    title: "Our Story",
    href: "/about/story",
    description: "Learn about our mission and vision as a company.",
  },
  {
    title: "Team",
    href: "/about/team",
    description: "Meet the team behind TRFX.",
  },
  {
    title: "Careers",
    href: "/about/careers",
    description: "Join our growing team of professionals.",
  },
  {
    title: "Contact Us",
    href: "/about/contact",
    description: "Get in touch with our support team.",
  },
];

export function MainNav({ className }: { className?: string }) {
  const isMobile = useIsMobile();

  const NavMenuContent = () => (
    <NavigationMenuList className="gap-2">
      <NavigationMenuItem>
        <NavigationMenuTrigger>How It Works</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {howItWorksItems.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                href={item.href}
              >
                {item.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Trading</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {tradingItems.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                href={item.href}
              >
                {item.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/challenges">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Challenges
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <Link href="/faq">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            FAQ
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {aboutUsItems.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                href={item.href}
              >
                {item.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  const authButtons = (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <Link href="/login">
        <Button variant="outline" size="sm">
          Login
        </Button>
      </Link>
      <Link href="/signup">
        <Button size="sm">
          Sign Up
        </Button>
      </Link>
    </div>
  );

  return (
    <div className={cn("container z-40", className)}>
      <div className="flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <span className="hidden text-xl font-bold sm:inline-block">
              TRFX
            </span>
          </Link>

          {isMobile ? (
            <div className="flex items-center justify-between w-full">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold">TRFX</span>
              </Link>
              
              <div className="flex items-center gap-2">
                <ThemeToggle />
                
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="grid gap-2 py-6">
                      <Link href="/">
                        <Button variant="ghost" className="w-full justify-start" size="sm">
                          Home
                        </Button>
                      </Link>
                      <Link href="/how-it-works">
                        <Button variant="ghost" className="w-full justify-start" size="sm">
                          How It Works
                        </Button>
                      </Link>
                      {howItWorksItems.map((item, i) => (
                        <Link href={item.href} key={i}>
                          <Button variant="ghost" className="w-full justify-start pl-8" size="sm">
                            {item.title}
                          </Button>
                        </Link>
                      ))}
                      <Link href="/trading">
                        <Button variant="ghost" className="w-full justify-start" size="sm">
                          Trading
                        </Button>
                      </Link>
                      {tradingItems.map((item, i) => (
                        <Link href={item.href} key={i}>
                          <Button variant="ghost" className="w-full justify-start pl-8" size="sm">
                            {item.title}
                          </Button>
                        </Link>
                      ))}
                      <Link href="/challenges">
                        <Button variant="ghost" className="w-full justify-start" size="sm">
                          Challenges
                        </Button>
                      </Link>
                      <Link href="/faq">
                        <Button variant="ghost" className="w-full justify-start" size="sm">
                          FAQ
                        </Button>
                      </Link>
                      <Link href="/about">
                        <Button variant="ghost" className="w-full justify-start" size="sm">
                          About Us
                        </Button>
                      </Link>
                      {aboutUsItems.map((item, i) => (
                        <Link href={item.href} key={i}>
                          <Button variant="ghost" className="w-full justify-start pl-8" size="sm">
                            {item.title}
                          </Button>
                        </Link>
                      ))}
                      <div className="flex flex-col gap-2 mt-4">
                        <Link href="/login">
                          <Button variant="outline" className="w-full">
                            Login
                          </Button>
                        </Link>
                        <Link href="/signup">
                          <Button className="w-full">
                            Sign Up
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          ) : (
            <>
              <NavigationMenu>
                <NavMenuContent />
              </NavigationMenu>
              
              {authButtons}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});