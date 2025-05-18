import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  CheckCircle2, 
  ChevronRight, 
  Menu,
  Moon,
  Sun,
  ExternalLink,
  ArrowRight, 
  Users,
  Shield,
  BarChart,
  DollarSign,
  CreditCard,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "@/components/theme-provider";

export default function LandingPage() {
  const [location, navigate] = useLocation();
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  const handleGetStartedClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };
  
  const challengePlans = [
    {
      id: 1,
      title: "Standard Challenge - $25,000",
      accountSize: 25000,
      price: 99,
      profitTarget: 8,
      maxDrawdown: 5,
      duration: 30,
      profitSplit: 70,
      featured: false
    },
    {
      id: 2,
      title: "Standard Challenge - $50,000",
      accountSize: 50000,
      price: 199,
      profitTarget: 8,
      maxDrawdown: 5,
      duration: 30,
      profitSplit: 80,
      featured: true
    },
    {
      id: 3,
      title: "Standard Challenge - $100,000",
      accountSize: 100000,
      price: 349,
      profitTarget: 8,
      maxDrawdown: 5,
      duration: 30,
      profitSplit: 80,
      featured: false
    },
    {
      id: 4,
      title: "Standard Challenge - $200,000",
      accountSize: 200000,
      price: 599,
      profitTarget: 8,
      maxDrawdown: 5,
      duration: 30,
      profitSplit: 80,
      featured: false
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="backdrop-blur-md bg-background/70 sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <LineChart className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#features" className="border-transparent text-foreground/70 hover:text-foreground hover:border-border inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#pricing" className="border-transparent text-foreground/70 hover:text-foreground hover:border-border inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                  Pricing
                </a>
                <a href="#faq" className="border-transparent text-foreground/70 hover:text-foreground hover:border-border inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                  FAQ
                </a>
              </nav>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {user ? (
                <Button 
                  onClick={() => navigate("/dashboard")}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-colors">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleTheme}
                className="mr-2 hover:bg-muted transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="hover:bg-muted transition-colors"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile nav menu */}
        {mobileNavOpen && (
          <div className="sm:hidden relative z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md rounded-b-lg border-b border-r border-l border-border shadow-xl">
              <div className="pt-3 pb-4">
                <div className="space-y-1 px-4">
                  <a
                    href="#features"
                    className="flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors text-foreground/80 hover:text-primary hover:bg-primary/5"
                  >
                    <BarChart className="mr-3 h-5 w-5 text-primary/60" />
                    Features
                  </a>
                  <a
                    href="#pricing"
                    className="flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors text-foreground/80 hover:text-secondary hover:bg-secondary/5"
                  >
                    <CreditCard className="mr-3 h-5 w-5 text-secondary/60" />
                    Pricing
                  </a>
                  <a
                    href="#faq"
                    className="flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors text-foreground/80 hover:text-accent hover:bg-accent/5"
                  >
                    <Shield className="mr-3 h-5 w-5 text-accent/60" />
                    FAQ
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="space-y-1 px-4">
                    {user ? (
                      <a
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center px-3 py-2 text-base font-medium rounded-md bg-primary/10 text-primary"
                      >
                        <BarChart className="mr-3 h-5 w-5 text-primary" />
                        Dashboard
                      </a>
                    ) : (
                      <div className="flex flex-col space-y-2">
                        <a
                          onClick={() => navigate("/login")}
                          className="flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors text-foreground/80 hover:text-primary hover:bg-primary/5 cursor-pointer"
                        >
                          <Users className="mr-3 h-5 w-5 text-primary/70" />
                          Log in
                        </a>
                        <a
                          onClick={() => navigate("/register")}
                          className="flex items-center px-3 py-2 text-base font-medium rounded-md bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity cursor-pointer"
                        >
                          <ArrowRight className="mr-3 h-5 w-5" />
                          Sign up
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 bg-background">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/3 -left-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-24 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-70"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center rounded-full bg-muted/50 border border-border px-3 py-1 text-sm font-medium text-foreground mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-success mr-2"></span>
                  Now accepting new traders
                </div>
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                  <span className="block">Trade with</span>
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">confidence.</span>
                  <span className="block mt-1">Get</span>
                  <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">funded.</span>
                </h1>
                <p className="mt-6 text-xl text-foreground/80 max-w-lg">
                  Complete our trading challenge and get access to accounts up to 
                  <span className="font-bold text-foreground"> $200,000</span>. 
                  Keep up to <span className="font-bold text-foreground">80%</span> of the profits with no risk of your own capital.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <Button 
                    size="lg" 
                    onClick={handleGetStartedClick}
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground rounded-md px-8 py-3"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => navigate("/about")}
                    className="border-primary text-primary hover:bg-primary/10 transition-colors rounded-md px-8 py-3"
                  >
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg blur-xl -z-10"></div>
                <div className="relative z-10 bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6">
                  <div className="bg-card rounded-lg p-4 mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Account Balance</p>
                      <p className="text-2xl font-bold">$54,892.00</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-semibold text-success">+8.2%</span>
                      <span className="text-xs text-muted-foreground">This month</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-card rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Win Rate</p>
                      <p className="text-lg font-semibold">76%</p>
                    </div>
                    <div className="bg-card rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Profit/Loss</p>
                      <p className="text-lg font-semibold text-success">+$3,241</p>
                    </div>
                  </div>
                  <div className="h-40 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Trading chart preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex mb-3 bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                Why Choose Us
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Features</span> That Set Us Apart
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                We provide the tools, resources and capital to help you succeed as a trader.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 hover:bg-card/70 transition-colors group relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl group-hover:w-20 group-hover:h-20 transition-all duration-300"></div>
                
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <DollarSign className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Realistic Challenges</h3>
                <p className="text-foreground/70">
                  Our challenges are designed to identify disciplined traders with realistic profit targets and drawdown limits.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Two-phase evaluation process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">8% profit target with 5% max drawdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited trading time with no expiry</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 hover:bg-card/70 transition-colors group relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-gradient-to-br from-secondary/10 to-accent/10 blur-2xl group-hover:w-20 group-hover:h-20 transition-all duration-300"></div>
                
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 mb-6 group-hover:bg-secondary/20 transition-colors">
                  <LineChart className="text-secondary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Platform</h3>
                <p className="text-foreground/70">
                  Trade with our cutting-edge platform providing real-time data, advanced charting and analytics.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time market data and news</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Comprehensive analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom indicators and strategy tools</span>
                  </li>
                </ul>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 hover:bg-card/70 transition-colors group relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-2xl group-hover:w-20 group-hover:h-20 transition-all duration-300"></div>
                
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                  <Users className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Generous Profit Splits</h3>
                <p className="text-foreground/70">
                  Keep up to 80% of your trading profits with bi-weekly payouts directly to your account.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Up to 80% profit split</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Bi-weekly payouts with no delays</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Scale up to $1M+ accounts</span>
                  </li>
                </ul>
              </div>
              
              {/* Additional Features */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 group hover:bg-card/70 transition-colors flex items-start space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Users className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Community Support</h3>
                    <p className="mt-2 text-foreground/70">
                      Join a community of successful traders who share strategies and insights.
                    </p>
                  </div>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 group hover:bg-card/70 transition-colors flex items-start space-x-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <LineChart className="text-secondary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Detailed Reporting</h3>
                    <p className="mt-2 text-foreground/70">
                      Get comprehensive trading reports to understand your strengths and weaknesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20"></div>
            <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-40 right-1/4 w-60 h-60 bg-accent/10 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex mb-3 bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                Simple Process
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                How It <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                Our simple three-step process to get funded and start trading with our capital.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary p-[2px] relative z-10">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Choose Your Account Size</h3>
                  <p className="mt-3 text-foreground/70 max-w-xs mx-auto">
                    Select an account size that matches your trading experience and goals.
                  </p>
                </div>
                <div className="mt-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 w-full">
                  <div className="flex items-center space-x-2 text-sm text-foreground/70">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span>Four account sizes from $25K to $200K</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-accent p-[2px] relative z-10">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">2</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Complete the Challenge</h3>
                  <p className="mt-3 text-foreground/70 max-w-xs mx-auto">
                    Pass our two-phase evaluation by meeting the profit targets while following the rules.
                  </p>
                </div>
                <div className="mt-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 w-full">
                  <div className="flex items-center space-x-2 text-sm text-foreground/70">
                    <LineChart className="h-4 w-4 text-secondary" />
                    <span>Reach 8% profit target with max 5% drawdown</span>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary p-[2px] relative z-10">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">3</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold">Get Funded & Earn</h3>
                  <p className="mt-3 text-foreground/70 max-w-xs mx-auto">
                    Receive your funded account and keep up to 80% of all profits you generate.
                  </p>
                </div>
                <div className="mt-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 w-full">
                  <div className="flex items-center space-x-2 text-sm text-foreground/70">
                    <DollarSign className="h-4 w-4 text-accent" />
                    <span>Bi-weekly payouts directly to your account</span>
                  </div>
                </div>
              </div>
              
              {/* Call to action */}
              <div className="mt-16 flex justify-center">
                <Button 
                  onClick={handleGetStartedClick}
                  className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity flex items-center"
                  size="lg"
                >
                  Start Your Trading Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20"></div>
            <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex mb-3 bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                Challenge Accounts
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pricing</span> Plans
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                Choose the challenge account size that best fits your trading style and experience.
              </p>
            </div>
            
            <div className="mt-12">
              <Tabs defaultValue="standard" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-[400px] grid-cols-2">
                    <TabsTrigger value="standard">Standard Challenge</TabsTrigger>
                    <TabsTrigger value="aggressive">Aggressive Challenge</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="standard" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {challengePlans.map((plan) => (
                      <div key={plan.id} className={`bg-card/50 backdrop-blur-sm rounded-lg border ${plan.featured ? 'border-primary' : 'border-border'} overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1`}>
                        {plan.featured && (
                          <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-1 text-xs font-medium">
                            Most Popular
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-lg font-bold">${(plan.accountSize/1000).toFixed(0)}K Account</h3>
                          <div className="mt-4 flex items-end">
                            <span className="text-3xl font-extrabold">${plan.price}</span>
                            <span className="text-foreground/60 ml-2 text-sm">one-time</span>
                          </div>
                          <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                              <span>{plan.profitTarget}% Profit Target</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                              <span>{plan.maxDrawdown}% Max Drawdown</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                              <span>{plan.profitSplit}% Profit Split</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                              <span>Bi-weekly Payouts</span>
                            </li>
                          </ul>
                          <Button
                            onClick={handleGetStartedClick}
                            className={`mt-6 w-full ${plan.featured ? 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90' : 'bg-primary/10 text-primary hover:bg-primary/20'} transition-colors`}
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="aggressive" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {challengePlans.map((plan) => (
                      <div key={plan.id} className={`bg-card/50 backdrop-blur-sm rounded-lg border ${plan.id === 3 ? 'border-primary' : 'border-border'} overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1`}>
                        {plan.id === 3 && (
                          <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-1 text-xs font-medium">
                            Most Popular
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-lg font-bold">${(plan.accountSize/1000).toFixed(0)}K Account</h3>
                          <div className="mt-4 flex items-end">
                            <span className="text-3xl font-extrabold">${Math.round(plan.price * 1.4)}</span>
                            <span className="text-foreground/60 ml-2 text-sm">one-time</span>
                          </div>
                          <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                              <span>12% Profit Target</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                              <span>8% Max Drawdown</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                              <span>90% Profit Split</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                              <span>Weekly Payouts</span>
                            </li>
                          </ul>
                          <Button
                            onClick={handleGetStartedClick}
                            className={`mt-6 w-full ${plan.id === 3 ? 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90' : 'bg-primary/10 text-primary hover:bg-primary/20'} transition-colors`}
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20"></div>
            <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-40 left-1/4 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex mb-3 bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                Trader Success Stories
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                What Our <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Traders</span> Say
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                Don't just take our word for it. Hear from traders who have successfully passed our challenge.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm rounded-xl p-1 group hover:from-primary/10 hover:to-secondary/10 transition-colors">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      JD
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">John D.</h4>
                      <p className="text-sm text-foreground/60">Forex Trader</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic flex-grow">
                    "I was skeptical at first, but after passing the challenge I received my funded account within 24 hours. The platform is excellent and the bi-weekly payouts are always on time."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-foreground/60 text-sm">Funded for 8 months</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 backdrop-blur-sm rounded-xl p-1 group hover:from-secondary/10 hover:to-accent/10 transition-colors">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold text-lg">
                      SM
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Sarah M.</h4>
                      <p className="text-sm text-foreground/60">Crypto Trader</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic flex-grow">
                    "TradeFunded has the fairest rules I've seen across all prop firms. I've been trading a $100K account for over 6 months now and the support team is always responsive when I need them."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-foreground/60 text-sm">Funded for 6 months</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 backdrop-blur-sm rounded-xl p-1 group hover:from-accent/10 hover:to-primary/10 transition-colors">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold text-lg">
                      RK
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Robert K.</h4>
                      <p className="text-sm text-foreground/60">Futures Trader</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic flex-grow">
                    "I've tried several prop firms, and TradeFunded offers the best combination of challenge rules and profit splits. I passed my $50K challenge in just 2 weeks and was trading a funded account 2 days later."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-foreground/60 text-sm">Funded for 12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section id="faq" className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20"></div>
            <div className="absolute -top-40 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex mb-3 bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Common</span> Questions
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                Find answers to the most frequently asked questions about our funded trader program.
              </p>
            </div>
            
            <div className="mt-12 space-y-6">
              {/* FAQ items */}
              <div className="rounded-lg overflow-hidden">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border divide-y divide-border">
                  {/* FAQ Item 1 */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">How long does it take to get funded?</h3>
                    <p className="mt-3 text-foreground/70">
                      The time to get funded depends on your trading performance. Some traders complete our two-phase challenge in as little as a few days, while others may take several weeks. Once you pass both phases, your funded account is typically set up within 24-48 hours.
                    </p>
                  </div>
                  
                  {/* FAQ Item 2 */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">What markets can I trade?</h3>
                    <p className="mt-3 text-foreground/70">
                      You can trade a wide range of markets including Forex, Futures, Stocks, Indices, Commodities, and Cryptocurrencies. Our platform provides access to global markets with competitive spreads and low commissions.
                    </p>
                  </div>
                  
                  {/* FAQ Item 3 */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">How do payouts work?</h3>
                    <p className="mt-3 text-foreground/70">
                      We offer bi-weekly profit splits on all funded accounts. Once your trading period ends, you'll receive your share of the profits (up to 80%) directly to your preferred payment method. We support bank transfers, PayPal, and crypto transfers for maximum flexibility.
                    </p>
                  </div>
                  
                  {/* FAQ Item 4 */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">What happens if I breach account rules?</h3>
                    <p className="mt-3 text-foreground/70">
                      If you breach the maximum drawdown limit or any other trading rules, your challenge or funded account will be automatically closed. For challenge accounts, you can purchase a new challenge to try again. For funded accounts, we may offer a reset option depending on your trading history.
                    </p>
                  </div>
                  
                  {/* FAQ Item 5 */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">Can I scale my account size?</h3>
                    <p className="mt-3 text-foreground/70">
                      Yes! We offer account scaling opportunities for consistently profitable traders. After demonstrating success with your initial funded account, you can qualify for larger accounts up to $1M+ with maintained or improved profit split percentages.
                    </p>
                  </div>
                  
                  {/* FAQ Item 6 */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">Is there a time limit to complete the challenge?</h3>
                    <p className="mt-3 text-foreground/70">
                      Our standard challenges have a minimum trading period of 5 days and a maximum of 30 days for each phase. This balanced approach ensures you have sufficient time to demonstrate your trading skills without unreasonable time pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-foreground/70">
                Still have questions? Contact our support team for assistance.
              </p>
              <Button 
                variant="outline" 
                onClick={() => navigate("/contact")}
                className="mt-6 border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Ready to Start Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trading Career?</span>
                  </h2>
                  <p className="mt-4 text-lg text-foreground/70">
                    Join thousands of traders who are already trading with our capital. Start your challenge today and get funded in as little as one week.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-1" />
                      <span>No risk of your own capital</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-1" />
                      <span>Trade accounts up to $200,000</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-1" />
                      <span>Keep up to 80% of your profits</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <div className="bg-card p-8 rounded-xl border border-border max-w-md w-full">
                    <h3 className="text-2xl font-bold mb-6">
                      Start Trading Today
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-1.5">Select Account Size</label>
                        <select className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                          <option value="25000">$25,000 Standard Account - $99</option>
                          <option value="50000" selected>$50,000 Standard Account - $199</option>
                          <option value="100000">$100,000 Standard Account - $349</option>
                          <option value="200000">$200,000 Standard Account - $599</option>
                        </select>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
                        size="lg"
                        onClick={handleGetStartedClick}
                      >
                        Get Started Now
                      </Button>
                      
                      <p className="text-xs text-center text-foreground/60 mt-2">
                        By signing up, you agree to our Terms of Service and Privacy Policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/30 backdrop-blur-sm border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center">
                <LineChart className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
              </div>
              <p className="mt-4 text-foreground/70 text-sm">
                TradeFunded provides access to trading capital for skilled traders worldwide. Complete our challenge and get funded.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">News</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Trading Guide</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Trading Rules</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Support Center</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Risk Disclosure</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} TradeFunded. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-3 text-foreground/60 text-sm">
              <a href="#" className="hover:text-primary transition-colors">English</a> / 
              <a href="#" className="hover:text-primary transition-colors ml-1">USD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}