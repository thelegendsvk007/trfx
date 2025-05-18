import * as React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { LineChart } from "lucide-react";

export function MainNav({ className }: { className?: string }) {
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="border-b">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-8">
          <LineChart className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold text-primary">TRFX</span>
        </Link>

        {/* Main Navigation */}
        <nav className="flex items-center space-x-4 lg:space-x-6 hidden md:flex">
          {/* How It Works Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={location.startsWith("/how-it-works") ? "default" : "ghost"} 
                size="sm"
                className="flex items-center"
              >
                How it works <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/how-it-works#evaluation-process">Evaluation Process</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/how-it-works#trading-objectives">Trading Objectives</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/how-it-works#scaling-plan">Scaling Plan</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* FAQ */}
          <Button 
            variant={location === "/faq" ? "default" : "ghost"} 
            size="sm"
            asChild
          >
            <Link href="/faq">
              FAQ
            </Link>
          </Button>

          {/* Testimonials */}
          <Button 
            variant={location === "/testimonials" ? "default" : "ghost"} 
            size="sm"
            asChild
          >
            <Link href="/testimonials">
              Testimonials
            </Link>
          </Button>

          {/* Trading Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={location.startsWith("/trading") ? "default" : "ghost"} 
                size="sm"
                className="flex items-center"
              >
                Trading <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/blog">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/updates">Trading Updates</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/tools">Tools & Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/platforms">Trading Platforms</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/premium">Premium Programme</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/symbols">Symbols</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/leaderboard">Leaderboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/economic-calendar">Economic Calendar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/app-suite">App Suite</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/ftmo-trial">FTMO Free Trial</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/trading/coaches">Performance Coaches</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About Us Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={location.startsWith("/about") ? "default" : "ghost"} 
                size="sm"
                className="flex items-center"
              >
                About us <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/about">About TRFX</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/about/team">Our Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/about/careers">Careers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/contact">Contact Us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Academy */}
          <Button 
            variant={location === "/academy" ? "default" : "ghost"} 
            size="sm"
            asChild
          >
            <Link href="/academy">
              Academy
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle (simplified for now) */}
        <div className="md:hidden ml-auto">
          <Button variant="outline" size="sm">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>

        {/* Right Side - Auth/Client Area */}
        <div className="hidden md:flex ml-auto">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Button variant="default" size="sm" asChild>
                <Link href="/client-area">
                  Client Area
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={() => logout()}>
                Log out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  Sign in
                </Link>
              </Button>
              <Button variant="default" size="sm" asChild>
                <Link href="/register">
                  Get Started
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}