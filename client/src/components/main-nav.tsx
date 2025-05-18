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

export function MainNav({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-6">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TRFX</span>
        </div>
      </Link>
      
      <NavigationMenu className={cn("hidden md:flex", className)}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/how-it-works">
                <div className={navigationMenuTriggerStyle()}>
                  How it works
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/challenges">
                <div className={navigationMenuTriggerStyle()}>
                  Challenges
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/trading">
                <div className={navigationMenuTriggerStyle()}>
                  Trading
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">
                <div className={navigationMenuTriggerStyle()}>
                  About
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/faq">
                <div className={navigationMenuTriggerStyle()}>
                  FAQ
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact">
                <div className={navigationMenuTriggerStyle()}>
                  Contact
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="hidden md:flex items-center gap-2 ml-auto">
        <Link href="/login">
          <div>
            <Button variant="ghost" size="sm">Login</Button>
          </div>
        </Link>
        <Link href="/register">
          <div>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}