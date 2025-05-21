import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Logo3D } from '@/components/3d-logo';
import { cn } from '@/lib/utils';
import {
  Menu,
  LogOut,
} from 'lucide-react';

// Define the dropdown item type
interface NavDropdownItem {
  name: string;
  href: string;
}

// Define the main nav item type
interface NavItem {
  title: string;
  path: string;
  dropdown: NavDropdownItem[] | null;
}

export function Navbar() {
  const [location] = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  // Keep track of open dropdown
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Navigation items
  const navItems: NavItem[] = [
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

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !(event.target as Element).closest('.dropdown-trigger')) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  // Toggle dropdown
  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

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
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        "bg-background/90 backdrop-blur-md border-b border-border/10 shadow-sm",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Button variant="ghost" className="p-0">
              <Logo3D />
            </Button>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex h-full">
          <ul className="flex h-full space-x-1">
            {navItems.map((item) => (
              <li key={item.title} className="relative h-full flex items-center">
                {item.dropdown ? (
                  <div className="h-full">
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className={cn(
                        "dropdown-trigger h-full px-3 flex items-center text-sm font-medium transition-colors",
                        "hover:text-primary relative",
                        isActive(item.path) ? "text-primary" : "text-white",
                        openDropdown === item.title ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary" : ""
                      )}
                    >
                      {item.title}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === item.title && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-56 bg-background border border-border/30 rounded-md shadow-lg p-1 z-50"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link 
                            key={dropdownItem.name} 
                            href={dropdownItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-primary/10 hover:text-primary rounded-sm transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.path}
                    className={cn(
                      "h-full px-3 flex items-center text-sm font-medium transition-colors",
                      "hover:text-primary",
                      isActive(item.path) ? "text-primary" : "text-white",
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth & Mobile Menu Buttons */}
        <div className="flex items-center gap-2">
          {/* Auth Button */}
          {isAuthenticated ? (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => logout()}
              className="hidden md:flex text-white hover:text-primary"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          ) : (
            <Button 
              size="sm" 
              className="hidden md:flex rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 shadow-md"
              asChild
            >
              <Link href="/login">
                LOG IN / SIGN UP
              </Link>
            </Button>
          )}
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/20 shadow-lg transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
      )}>
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link 
                  href={item.path}
                  className={cn(
                    "block text-sm font-medium py-2",
                    isActive(item.path) ? "text-primary" : "text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                
                {item.dropdown && (
                  <ul className="ml-4 mt-2 space-y-2 border-l border-border/30 pl-4">
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <Link 
                          href={dropdownItem.href}
                          className="block text-sm text-gray-300 hover:text-primary py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
            {/* Auth Button for Mobile */}
            <li className="pt-4 border-t border-border/20">
              {isAuthenticated ? (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-primary w-full justify-start"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/login" className="w-full">
                    LOG IN / SIGN UP
                  </Link>
                </Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}