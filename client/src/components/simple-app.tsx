import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { Moon, Sun, LineChart, ArrowRight, Users, ChevronRight } from "lucide-react";

export default function SimpleApp() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <ThemeProvider defaultTheme={theme} storageKey="tradefunded-theme">
      <div className={theme}>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
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
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={toggleTheme}
                    className="hover:bg-muted transition-colors"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10 transition-colors"
                  >
                    Log in
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
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
                        className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground rounded-md px-8 py-3"
                      >
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary/10 transition-colors rounded-md px-8 py-3"
                      >
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
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
          </main>

          <footer className="bg-muted/30 backdrop-blur-sm border-t border-border mt-auto py-4">
            <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} TradeFunded. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}