import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/hooks/use-auth';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  ChevronDown,
  Menu,
  LogIn,
  LogOut,
  User,
  DollarSign,
  BookOpen,
  Award,
  HelpCircle,
  UserPlus,
  Home,
  BarChart2,
} from 'lucide-react';

export function MainNav({ className }: { className?: string }) {
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define navigation items
  const navItems = [
    {
      title: 'How It Works',
      path: '/how-it-works',
      dropdown: [
        { name: 'Challenge Process', href: '/how-it-works/challenge-process' },
        { name: 'Evaluation Phase', href: '/how-it-works/evaluation-phase' },
        { name: 'Funding Requirements', href: '/how-it-works/funding-requirements' },
        { name: 'Payout Structure', href: '/how-it-works/payout-structure' },
        { name: 'Trading Rules', href: '/how-it-works/trading-rules' },
      ],
    },
    {
      title: 'Trading',
      path: '/trading',
      dropdown: [
        { name: 'Trading Dashboard', href: '/trading/dashboard' },
        { name: 'MetaTrader 4', href: '/trading/metatrader4' },
        { name: 'MetaTrader 5', href: '/trading/metatrader5' },
        { name: 'Trading Products', href: '/trading/products' },
        { name: 'Spreads & Leverage', href: '/trading/spreads-leverage' },
      ],
    },
    {
      title: 'Challenges',
      path: '/challenges',
      dropdown: [
        { name: 'Standard Challenge', href: '/challenges/standard' },
        { name: 'Aggressive Challenge', href: '/challenges/aggressive' },
        { name: 'Evaluation Program', href: '/challenges/evaluation' },
        { name: 'Compare Plans', href: '/challenges/compare' },
      ],
    },
    {
      title: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'Our Company', href: '/about/company' },
        { name: 'Meet the Team', href: '/about/team' },
        { name: 'Contact Us', href: '/about/contact' },
      ],
    },
    {
      title: 'FAQ',
      path: '/faq',
      dropdown: null,
    },
  ];

  // Check if a path matches the current location
  const isActive = (path: string) => {
    if (path === '/') {
      return location === path;
    }
    return location.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="animate-pulse flex items-center">
                <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  TRFX
                </div>
                <div className="ml-1 relative h-6 w-6 overflow-hidden">
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M3 3v18h18"></path>
                      <path d="M13 17V7h4"></path>
                      <path d="M13 7l-6 5"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger 
                        className={isActive(item.path) ? 'text-primary' : ''}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.name}>
                              <NavigationMenuLink asChild>
                                <Link href={dropdownItem.href}>
                                  <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium leading-none">
                                      {dropdownItem.name}
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.path}>
                      <NavigationMenuLink className={navigationMenuTriggerStyle({
                        className: isActive(item.path) ? 'text-primary' : ''
                      })}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side: theme toggle and auth buttons */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Auth buttons (desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {isAuthenticated ? (
              <>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => logout()}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/signup">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up
                  </Link>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link href="/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Link>
                </Button>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                {/* Mobile navigation links */}
                <div className="flex flex-col space-y-2">
                  <SheetClose asChild>
                    <Link href="/">
                      <Button 
                        variant="ghost" 
                        className={`justify-start ${isActive('/') ? 'text-primary' : ''}`}
                      >
                        <Home className="mr-2 h-4 w-4" />
                        Home
                      </Button>
                    </Link>
                  </SheetClose>
                  
                  {navItems.map((item) => (
                    <div key={item.title} className="flex flex-col">
                      {item.dropdown ? (
                        <div className="flex flex-col">
                          <div className="flex items-center px-3 py-2">
                            {item.title === 'How It Works' && <BookOpen className="mr-2 h-4 w-4" />}
                            {item.title === 'Trading' && <BarChart2 className="mr-2 h-4 w-4" />}
                            {item.title === 'Challenges' && <Award className="mr-2 h-4 w-4" />}
                            {item.title === 'About Us' && <User className="mr-2 h-4 w-4" />}
                            {item.title === 'FAQ' && <HelpCircle className="mr-2 h-4 w-4" />}
                            <span className="font-semibold">{item.title}</span>
                          </div>
                          <div className="ml-8 flex flex-col space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <SheetClose key={dropdownItem.name} asChild>
                                <Link href={dropdownItem.href}>
                                  <Button variant="ghost" className="justify-start text-sm h-8">
                                    {dropdownItem.name}
                                  </Button>
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <SheetClose asChild>
                          <Link href={item.path}>
                            <Button 
                              variant="ghost" 
                              className={`justify-start ${isActive(item.path) ? 'text-primary' : ''}`}
                            >
                              {item.title === 'FAQ' && <HelpCircle className="mr-2 h-4 w-4" />}
                              {item.title}
                            </Button>
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Mobile auth buttons */}
                <div className="pt-4 border-t flex flex-col space-y-2">
                  {isAuthenticated ? (
                    <>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start"
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Link href="/signup">
                          <Button variant="outline" className="w-full justify-start">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Sign Up
                          </Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/login">
                          <Button variant="default" className="w-full justify-start">
                            <LogIn className="mr-2 h-4 w-4" />
                            Login
                          </Button>
                        </Link>
                      </SheetClose>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}