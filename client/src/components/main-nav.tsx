import { useState, useEffect } from 'react';
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
import { cn } from '@/lib/utils';

export function MainNav({ className }: { className?: string }) {
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  // Handle scroll events to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  const navItems = [
    {
      title: 'EVALUATIONS',
      path: '/evaluations',
      dropdown: [
        { name: 'Challenge Process', href: '/how-it-works/challenge-process' },
        { name: 'Evaluation Phase', href: '/how-it-works/evaluation-phase' },
        { name: 'Funding Requirements', href: '/how-it-works/funding-requirements' },
        { name: 'Payout Structure', href: '/how-it-works/payout-structure' },
        { name: 'Trading Rules', href: '/how-it-works/trading-rules' },
      ],
    },
    {
      title: 'PRICING',
      path: '/pricing',
      dropdown: [
        { name: 'Challenge Plans', href: '/pricing' },
        { name: 'Compare Plans', href: '/challenges/compare' },
        { name: 'Trading Bots', href: '/pricing/trading-bots' },
      ],
    },
    {
      title: 'TRADING',
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
      title: 'INSIGHTS',
      path: '/insights',
      dropdown: [
        { name: 'Blog', href: '/insights/blog' },
        { name: 'Market Analysis', href: '/insights/market-analysis' },
        { name: 'Trading Tips', href: '/insights/trading-tips' },
      ],
    },
    {
      title: 'AFFILIATES',
      path: '/affiliates',
      dropdown: null,
    },
    {
      title: 'ABOUT',
      path: '/about',
      dropdown: [
        { name: 'Our Company', href: '/about/company' },
        { name: 'Meet the Team', href: '/about/team' },
        { name: 'Contact Us', href: '/about/contact' },
      ],
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
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ease-in-out",
        "bg-background/80 backdrop-blur-md border-b border-border/10 shadow-sm",
        visible ? "translate-y-0" : "-translate-y-full",
        "animate-in fade-in-10 slide-in-from-top-5"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="text-2xl font-bold tracking-tighter text-white">
                  <span className="gradient-text">TRFX</span>
                  <span className="text-white">Funded</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          "text-sm font-medium tracking-wide px-3 py-2 rounded-md transition-colors",
                          isActive(item.path) 
                            ? "text-primary font-semibold bg-primary/5" 
                            : "text-white hover:bg-white/5"
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 bg-background/95 border border-border/30 shadow-2xl rounded-lg z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.name}>
                              <NavigationMenuLink asChild>
                                <Link href={dropdownItem.href}>
                                  <div className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
                      <div className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center",
                        isActive(item.path) 
                          ? "text-primary font-semibold bg-primary/5" 
                          : "text-white hover:bg-white/5"
                      )}>
                        {item.title}
                      </div>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side: language and auth buttons */}
        <div className="flex items-center space-x-1">

          
          {/* Auth buttons (desktop) */}
          <div className="hidden md:flex md:items-center">
            {isAuthenticated ? (
              <>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => logout()}
                  className="text-white hover:text-primary"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  size="sm" 
                  className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 shadow-md transition-all duration-200 hover:shadow-xl"
                  asChild
                >
                  <Link href="/login">
                    LOG IN / SIGN UP
                  </Link>
                </Button>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden text-white hover:bg-white/10 rounded-lg p-2"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md border-l border-border/30">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-white font-bold text-xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
                {/* Mobile navigation links */}
                <div className="flex flex-col space-y-2">
                  <SheetClose asChild>
                    <Link href="/">
                      <Button 
                        variant="ghost" 
                        className={cn(
                          "justify-start rounded-lg transition-colors w-full",
                          isActive('/') ? 'text-primary bg-primary/5' : 'text-white hover:bg-white/5'
                        )}
                      >
                        <Home className="mr-2 h-4 w-4" />
                        Home
                      </Button>
                    </Link>
                  </SheetClose>
                  
                  {navItems.map((item) => (
                    <div key={item.title} className="flex flex-col">
                      {item.dropdown ? (
                        <SheetClose asChild>
                          <Link href={item.path}>
                            <Button 
                              variant="ghost" 
                              className={cn(
                                "justify-start rounded-lg transition-colors w-full",
                                isActive(item.path) ? 'text-primary bg-primary/5 font-semibold' : 'text-white hover:bg-white/5 font-medium'
                              )}
                            >
                              {item.title === 'EVALUATIONS' && <Award className="mr-2 h-4 w-4" />}
                              {item.title === 'PRICING' && <DollarSign className="mr-2 h-4 w-4" />}
                              {item.title === 'TRADING' && <BarChart2 className="mr-2 h-4 w-4" />}
                              {item.title === 'INSIGHTS' && <BookOpen className="mr-2 h-4 w-4" />}
                              {item.title === 'AFFILIATES' && <Award className="mr-2 h-4 w-4" />}
                              {item.title === 'ABOUT' && <User className="mr-2 h-4 w-4" />}
                              {item.title}
                            </Button>
                          </Link>
                        </SheetClose>
                      ) : (
                        <SheetClose asChild>
                          <Link href={item.path}>
                            <Button 
                              variant="ghost" 
                              className={cn(
                                "justify-start rounded-lg transition-colors w-full",
                                isActive(item.path) ? 'text-primary bg-primary/5' : 'text-white hover:bg-white/5'
                              )}
                            >
                              {item.title}
                            </Button>
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Mobile auth buttons */}
                <div className="pt-4 border-t border-border/20 flex flex-col space-y-2">
                  {isAuthenticated ? (
                    <>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-white hover:text-primary"
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
                        <Link href="/login">
                          <Button 
                            variant="default" 
                            className="w-full justify-center bg-white text-black hover:bg-primary hover:text-white"
                          >
                            LOG IN / SIGN UP
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