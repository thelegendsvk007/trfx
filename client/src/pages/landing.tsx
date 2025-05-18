import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChallengeCard } from "@/components/challenges/challenge-card";
import { useTheme } from "@/components/theme-provider";
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
import { ThemeToggle } from "@/components/theme-toggle";

export default function LandingPage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
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
                
                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4">
                  <div className="bg-muted/40 backdrop-blur-sm border border-border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$5M+</div>
                    <div className="text-sm text-foreground/70">Trader Payouts</div>
                  </div>
                  <div className="bg-muted/40 backdrop-blur-sm border border-border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">10,000+</div>
                    <div className="text-sm text-foreground/70">Active Traders</div>
                  </div>
                  <div className="bg-muted/40 backdrop-blur-sm border border-border rounded-lg p-4 flex flex-col items-center text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">24/7</div>
                    <div className="text-sm text-foreground/70">Support</div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-3 scale-105"></div>
                <div className="rounded-xl border border-border overflow-hidden shadow-xl bg-card/50 backdrop-blur-sm p-1 transform rotate-1">
                  <img 
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3" 
                    alt="Professional trading setup with multiple screens showing charts" 
                    className="rounded-lg object-cover w-full max-h-[480px]"
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute -right-4 -bottom-4 bg-muted/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg transform -rotate-2">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute -left-4 top-1/4 bg-muted/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg transform rotate-2">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-24">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex mb-3 bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                Platform Features
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>?
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                Our platform is designed for serious traders who want to scale their trading capacity without risking personal capital.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-70 blur transition duration-300"></div>
                  <div className="relative bg-card backdrop-blur-sm rounded-lg border border-border p-8 h-full">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                      <DollarSign className="text-primary h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold">
                      High Profit Splits
                    </h3>
                    <p className="mt-3 text-foreground/70">
                      Keep up to <span className="font-semibold text-foreground">80%</span> of your trading profits with no risk to your own capital.
                    </p>
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-70 blur transition duration-300"></div>
                  <div className="relative bg-card backdrop-blur-sm rounded-lg border border-border p-8 h-full">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary/10 mb-5 group-hover:bg-secondary/20 transition-colors">
                      <Shield className="text-secondary h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold">
                      Fair Evaluation
                    </h3>
                    <p className="mt-3 text-foreground/70">
                      Realistic trading rules that allow you to demonstrate your edge without unnecessary restrictions.
                    </p>
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center">
                        <ChevronRight className="h-5 w-5 text-secondary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-70 blur transition duration-300"></div>
                  <div className="relative bg-card backdrop-blur-sm rounded-lg border border-border p-8 h-full">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/10 mb-5 group-hover:bg-accent/20 transition-colors">
                      <BarChart className="text-accent h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold">
                      Advanced Analytics
                    </h3>
                    <p className="mt-3 text-foreground/70">
                      Track your performance with detailed analytics and statistics to improve your trading.
                    </p>
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-8 w-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <ChevronRight className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
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

            <div className="mt-20 relative">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Step 1 */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary p-[2px] relative z-10">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">1</span>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold">Purchase a Challenge</h3>
                    <p className="mt-3 text-foreground/70 max-w-xs mx-auto">
                      Choose an account size that matches your trading goals and purchase a challenge.
                    </p>
                  </div>
                  <div className="mt-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 w-full">
                    <div className="flex items-center space-x-2 text-sm text-foreground/70">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span>Select from $25K to $200K account size</span>
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
                    <h3 className="text-xl font-bold">Pass the Evaluation</h3>
                    <p className="mt-3 text-foreground/70 max-w-xs mx-auto">
                      Demonstrate your trading skills by meeting profit targets while respecting risk rules.
                    </p>
                  </div>
                  <div className="mt-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 w-full">
                    <div className="flex items-center space-x-2 text-sm text-foreground/70">
                      <BarChart className="h-4 w-4 text-secondary" />
                      <span>Achieve 8% profit with max 5% drawdown</span>
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
                Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Trading Size</span>
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                Select the account size that matches your trading strategy and performance goals.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-lg">
              <Tabs defaultValue="standard" className="w-full">
                <div className="flex justify-center mb-6">
                  <TabsList className="grid grid-cols-3 bg-muted/50 backdrop-blur-sm p-1 rounded-lg">
                    <TabsTrigger 
                      value="standard"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:text-primary rounded-md transition-all duration-200"
                    >
                      Standard
                    </TabsTrigger>
                    <TabsTrigger 
                      value="aggressive"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary/20 data-[state=active]:to-secondary/10 data-[state=active]:text-secondary rounded-md transition-all duration-200"
                    >
                      Aggressive
                    </TabsTrigger>
                    <TabsTrigger 
                      value="evaluation"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent/20 data-[state=active]:to-accent/10 data-[state=active]:text-accent rounded-md transition-all duration-200"
                    >
                      Evaluation Only
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="standard" className="mt-6 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {challengePlans.map(plan => (
                      <div key={plan.id} className={`group relative ${plan.featured ? 'md:-mt-6 transform transition-transform duration-300 hover:-translate-y-2' : 'transform transition-transform duration-300 hover:-translate-y-2'}`}>
                        {plan.featured && (
                          <div className="absolute -top-5 inset-x-0 flex justify-center">
                            <span className="bg-gradient-to-r from-secondary to-accent px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg">
                              Most Popular
                            </span>
                          </div>
                        )}
                        
                        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-70 blur transition duration-300 group-hover:duration-200"></div>
                        
                        <div className={`relative h-full rounded-lg ${plan.featured ? 'border-2 border-secondary' : 'border border-border'} bg-card/50 backdrop-blur-sm p-6 flex flex-col transition-all duration-200 ${plan.featured ? 'shadow-lg shadow-secondary/10' : ''}`}>
                          <div className="mb-5">
                            <h3 className="text-2xl font-bold">${plan.accountSize.toLocaleString()}</h3>
                            <p className="text-sm text-foreground/70">{plan.title}</p>
                          </div>
                          
                          <div className="mb-6">
                            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                              ${plan.price}
                            </div>
                            <p className="text-sm text-foreground/70">One-time fee</p>
                          </div>
                          
                          <div className="space-y-3 mb-8 flex-grow">
                            <div className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                              <span className="text-sm">{plan.profitTarget}% Profit Target</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                              <span className="text-sm">{plan.maxDrawdown}% Max Drawdown</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                              <span className="text-sm">{plan.duration} Day Timeframe</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                              <span className="text-sm">{plan.profitSplit}% Profit Split</span>
                            </div>
                          </div>
                          
                          <Button 
                            onClick={() => navigate(`/register?plan=${plan.id}`)}
                            className={`w-full ${plan.featured 
                              ? 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90' 
                              : 'bg-gradient-to-r from-primary/80 to-primary text-white hover:opacity-90'} 
                              transition-all duration-200`}
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-muted/40 backdrop-blur-sm rounded-lg border border-border p-4 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Challenge Rules</h4>
                        <p className="text-sm text-foreground/70 mt-1">
                          All standard challenges follow the same trading rules: 8% profit target, maximum 5% drawdown, and 30 days to complete. Accounts that pass the challenge move to Phase 2, which has the same rules. After passing both phases, you get a funded account with up to 80% profit share.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="aggressive" className="mt-6">
                  <div className="rounded-lg border border-border bg-card/30 backdrop-blur-sm p-12 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                      <LineChart className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Aggressive Challenge Plans</h3>
                    <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                      For experienced traders who want higher profit targets with increased risk tolerance. Coming soon!
                    </p>
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                      Join Waitlist
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="evaluation" className="mt-6">
                  <div className="rounded-lg border border-border bg-card/30 backdrop-blur-sm p-12 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                      <BarChart className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Evaluation-Only Plans</h3>
                    <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                      Test your trading skills with our evaluation-only accounts. Ideal for traders looking to practice without commitment to the funded phase.
                    </p>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                      Join Waitlist
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* FAQ Quick Links */}
            <div className="mt-16 text-center">
              <p className="text-foreground/70 mb-4">Have questions about our challenge plans?</p>
              <a href="#faq" className="inline-flex items-center text-primary hover:underline">
                Check out our FAQ <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70 transform -translate-y-1/2"></div>
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex mb-3 bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                Success Stories
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                What Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Traders Say</span>
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                Hear from successful traders who have passed our challenges and are now trading with our capital.
              </p>
            </div>

            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-70 blur transition duration-300"></div>
                  <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-lg border border-border p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">M</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Michael R.</h3>
                        <p className="text-sm text-foreground/60">Forex Trader</p>
                      </div>
                      <div className="ml-auto">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="h-4 w-4 text-primary" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-0 text-6xl text-primary/10 font-serif">"</div>
                      <p className="relative pl-4 text-foreground/80 italic">
                        I passed the $50K challenge in just 12 days and now I'm trading with a funded account. The platform is reliable and the rules are fair. Highly recommended!
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/40">
                      <div className="flex items-center text-sm text-foreground/60">
                        <DollarSign className="h-4 w-4 mr-1 text-primary" />
                        <span>Trading $50,000 Account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-70 blur transition duration-300"></div>
                  <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-lg border border-border p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-bold">S</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Sarah K.</h3>
                        <p className="text-sm text-foreground/60">Indices Trader</p>
                      </div>
                      <div className="ml-auto">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="h-4 w-4 text-secondary" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-0 text-6xl text-secondary/10 font-serif">"</div>
                      <p className="relative pl-4 text-foreground/80 italic">
                        The analytics tools have helped me improve my strategy significantly. I've been funded for 3 months now and the bi-weekly payouts are always on time.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/40">
                      <div className="flex items-center text-sm text-foreground/60">
                        <BarChart className="h-4 w-4 mr-1 text-secondary" />
                        <span>Trading $100,000 Account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-70 blur transition duration-300"></div>
                  <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-lg border border-border p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold">J</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">James T.</h3>
                        <p className="text-sm text-foreground/60">Crypto Trader</p>
                      </div>
                      <div className="ml-auto">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="h-4 w-4 text-accent" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 top-0 text-6xl text-accent/10 font-serif">"</div>
                      <p className="relative pl-4 text-foreground/80 italic">
                        After failing twice, I finally passed the $100K challenge. The team was supportive throughout my journey and the dashboard makes tracking progress easy.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/40">
                      <div className="flex items-center text-sm text-foreground/60">
                        <LineChart className="h-4 w-4 mr-1 text-accent" />
                        <span>Trading $100,000 Account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View More Testimonials */}
            <div className="mt-12 text-center">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 group transition-colors"
              >
                More Success Stories <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
          </div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex mb-3 bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border">
                Questions & Answers
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                Frequently Asked <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="mt-4 text-xl text-foreground/70 max-w-3xl mx-auto">
                Get answers to the most common questions about our funded trading program.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 transition-all duration-200 group-hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-lg">Q</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">What is a funded trading account?</h3>
                      <p className="mt-3 text-foreground/80">
                        A funded trading account allows you to trade with our capital after proving your skills through a challenge. You keep a significant portion of the profits without risking your own money.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 transition-all duration-200 group-hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary font-bold text-lg">Q</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">How do I pass the challenge?</h3>
                      <p className="mt-3 text-foreground/80">
                        To pass the challenge, you need to reach the profit target (typically 8%) within the specified timeframe while following our trading rules, which include maximum drawdown limits and minimum trading days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 transition-all duration-200 group-hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-lg">Q</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">When do I receive payouts?</h3>
                      <p className="mt-3 text-foreground/80">
                        Once you're trading with a funded account, you can request payouts bi-weekly. The funds are typically processed within 2-3 business days and sent to your preferred payment method.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 transition-all duration-200 group-hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-lg">Q</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">What if I fail the challenge?</h3>
                      <p className="mt-3 text-foreground/80">
                        If you fail the challenge, you can purchase another one and try again. Many successful traders needed multiple attempts before passing. We also provide detailed analytics to help you improve your strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm rounded-lg border border-border p-6 transition-all duration-200 group-hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary font-bold text-lg">Q</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">What trading platforms do you support?</h3>
                      <p className="mt-3 text-foreground/80">
                        We currently support MetaTrader 5 (MT5) for all our funded accounts. We provide full integration with our trading dashboard for real-time monitoring of your performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ CTA */}
              <div className="mt-12 text-center">
                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                  <p className="text-foreground/80 mb-6">
                    Our support team is available 24/7 to answer any questions you may have about our funded trading program.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20"></div>
          </div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-xl p-12 shadow-xl">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold tracking-tight">
                  Ready to Trade with <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Our Capital?</span>
                </h2>
                <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto">
                  Join thousands of successful traders who have proven their skills and are now trading with our funds.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg"
                    onClick={handleGetStartedClick}
                    className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg font-medium rounded-md"
                  >
                    Start Your Challenge <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 transition-all px-8 py-6 text-lg font-medium rounded-md"
                  >
                    Explore Plans
                  </Button>
                </div>
                
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    <span className="text-foreground/80">Risk-free trading</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    <span className="text-foreground/80">Up to 80% profit split</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    <span className="text-foreground/80">Bi-weekly payouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border bg-card/40 backdrop-blur-sm">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between mb-12">
            {/* Brand and description */}
            <div className="mb-10 lg:mb-0 lg:max-w-xs">
              <div className="flex items-center">
                <BarChart className="h-8 w-8 text-primary mr-2" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
              </div>
              <p className="mt-4 text-foreground/70">
                Empowering traders with funded accounts. Prove your skills and trade with our capital.
              </p>
              <div className="mt-6 flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-muted/60 hover:bg-primary/10 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-muted/60 hover:bg-primary/10 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-muted/60 hover:bg-primary/10 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-muted/60 hover:bg-primary/10 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
            
            {/* Navigation links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-secondary transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-secondary transition-colors">
                      Trading Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-secondary transition-colors">
                      Rules
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#faq" className="text-foreground/70 hover:text-accent transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} TradeFunded. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <ThemeToggle />
              <div className="text-sm text-foreground/60">
                <a href="#" className="hover:text-primary transition-colors">English</a> / 
                <a href="#" className="hover:text-primary transition-colors ml-1">USD</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
