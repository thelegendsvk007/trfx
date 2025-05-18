import { Switch, Route, Link } from "wouter";
import { AuthProvider } from "@/components/auth-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, BarChart2, Clock, Globe, LineChart } from "lucide-react";

// Import the pages we've already created
import HomePage from "@/pages/home";
import MetaTrader4Page from "@/pages/trading/metatrader4";
import MetaTrader5Page from "@/pages/trading/metatrader5";
import TeamPage from "@/pages/about/team";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import HowItWorksPage from "@/pages/how-it-works";
import FAQPage from "@/pages/faq";
import ChallengesPage from "@/pages/challenges";

// Import challenge pages 
import StandardChallengePage from "@/pages/challenges/standard";
import AggressiveChallengePage from "@/pages/challenges/aggressive";
import EvaluationProgramPage from "@/pages/challenges/evaluation";
import ComparePlansPage from "@/pages/challenges/compare";

// Import How It Works pages
import ChallengeProcessPage from "@/pages/how-it-works/challenge-process";
import EvaluationPhasePage from "@/pages/how-it-works/evaluation-phase";
import FundingRequirementsPage from "@/pages/how-it-works/funding-requirements";
import PayoutStructurePage from "@/pages/how-it-works/payout-structure";
import TradingRulesPage from "@/pages/how-it-works/trading-rules";

// Import Trading pages
import TradingPage from "@/pages/trading";
import TradingDashboardPage from "@/pages/trading/dashboard";
import TradingProductsPage from "@/pages/trading/products";
import SpreadsLeveragePage from "@/pages/trading/spreads-leverage";

// Import Checkout pages
import CheckoutPage from "@/pages/checkout";
import PaymentConfirmationPage from "@/pages/payment-confirmation";

// Import About pages
import CompanyPage from "@/pages/about/company";
import ContactPage from "@/pages/about/contact";

// Placeholder component for pages we haven't created yet
const PlaceholderPage = ({ title, description }: { title: string, description?: string }) => (
  <div className="container py-12">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-3">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {description || "This page is under construction. Please check back soon!"}
      </p>
    </div>
  </div>
);

// Trading Main Page Component
const TradingMainPage = () => {
  return (
    <PageTemplate
      title="TRFX - Trading Platforms and Tools"
      description="Access our suite of professional trading platforms, tools, and real-time market data to enhance your trading experience with TRFX."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/90 border-b border-border/40 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Platforms & Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access professional trading platforms and real-time market data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" asChild>
                <Link href="/trading/dashboard">
                  Access Trading Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/challenges">
                  View Available Challenges
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platforms Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trading Platforms</h2>
            <p className="text-lg text-muted-foreground">
              We offer industry-standard platforms optimized for serious traders
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">MetaTrader 4</CardTitle>
                      <CardDescription>The world's most popular forex trading platform</CardDescription>
                    </div>
                    <Badge variant="outline">Most Popular</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://placehold.co/600x340/1f2937/e5e7eb?text=MT4+Platform+Screenshot" 
                      alt="MetaTrader 4 Platform" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      MetaTrader 4 (MT4) is the industry standard for forex trading, offering powerful charting capabilities, automated trading through Expert Advisors, and a user-friendly interface.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">30+ indicators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">9 timeframes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-primary" />
                        <span className="text-sm">Automated trading</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span className="text-sm">Multi-device</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/30 pt-4 flex justify-end">
                  <Button asChild>
                    <Link href="/trading/metatrader4">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">MetaTrader 5</CardTitle>
                      <CardDescription>Next-generation multi-asset trading platform</CardDescription>
                    </div>
                    <Badge className="bg-blue-600">Advanced</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://placehold.co/600x340/1f2937/e5e7eb?text=MT5+Platform+Screenshot" 
                      alt="MetaTrader 5 Platform" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      MetaTrader 5 (MT5) expands on MT4's capabilities with support for more asset classes, additional timeframes, and an enhanced market depth display for superior trade execution.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">38+ indicators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">21 timeframes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-primary" />
                        <span className="text-sm">Economic calendar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span className="text-sm">Depth of Market</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/30 pt-4 flex justify-end">
                  <Button asChild>
                    <Link href="/trading/metatrader5">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Available Products */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Available Trading Products</h2>
            <p className="text-lg text-muted-foreground">
              Access a wide range of financial instruments with competitive conditions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto rounded-lg border border-border/50 bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Category</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead className="text-right">Typical Spread</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Forex Pairs</TableCell>
                    <TableCell>
                      <p>50+ currency pairs including majors, minors, and exotics</p>
                      <p className="text-sm text-muted-foreground mt-1">EUR/USD, GBP/USD, USD/JPY, AUD/USD, EUR/GBP, USD/CAD, etc.</p>
                    </TableCell>
                    <TableCell className="text-right">0.1-1.2 pips</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Commodities</TableCell>
                    <TableCell>
                      <p>Precious metals, energy, and agricultural products</p>
                      <p className="text-sm text-muted-foreground mt-1">Gold, Silver, Crude Oil, Natural Gas, Platinum, Coffee, etc.</p>
                    </TableCell>
                    <TableCell className="text-right">1.5-5.0 pips</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Indices</TableCell>
                    <TableCell>
                      <p>Major global stock indices and custom index baskets</p>
                      <p className="text-sm text-muted-foreground mt-1">S&P 500, NASDAQ, Dow Jones, DAX 40, FTSE 100, Nikkei 225, etc.</p>
                    </TableCell>
                    <TableCell className="text-right">0.4-2.0 points</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cryptocurrencies</TableCell>
                    <TableCell>
                      <p>Major digital currencies as CFD products</p>
                      <p className="text-sm text-muted-foreground mt-1">BTC/USD, ETH/USD, LTC/USD, XRP/USD, BCH/USD, etc.</p>
                    </TableCell>
                    <TableCell className="text-right">20-80 points</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/trading/products">
                  View All Trading Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Landing page */}
        <Route path="/" component={HomePage} />
        
        {/* Auth routes */}
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        
        {/* Main section routes */}
        <Route path="/trading" component={TradingPage} />
        <Route path="/trading/dashboard" component={TradingDashboardPage} />
        <Route path="/challenges">
          {/* Redirect to challenges compare page */}
          <Route path="/challenges/compare" component={ComparePlansPage} />
          <Route>
            {() => {
              window.location.href = "/challenges/compare";
              return null;
            }}
          </Route>
        </Route>
        <Route path="/faq" component={FAQPage} />
        
        {/* How it works routes */}
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/how-it-works/challenge-process" component={ChallengeProcessPage} />
        <Route path="/how-it-works/evaluation-phase" component={EvaluationPhasePage} />
        <Route path="/how-it-works/funding-requirements" component={FundingRequirementsPage} />
        <Route path="/how-it-works/payout-structure" component={PayoutStructurePage} />
        <Route path="/how-it-works/trading-rules" component={TradingRulesPage} />
        
        {/* Trading routes */}
        <Route path="/trading/metatrader4" component={MetaTrader4Page} />
        <Route path="/trading/metatrader5" component={MetaTrader5Page} />
        <Route path="/trading/products" component={TradingProductsPage} />
        <Route path="/trading/spreads-leverage" component={SpreadsLeveragePage} />
        
        {/* Challenge routes */}
        <Route path="/challenges/standard" component={StandardChallengePage} />
        <Route path="/challenges/aggressive" component={AggressiveChallengePage} />
        <Route path="/challenges/evaluation" component={EvaluationProgramPage} />
        <Route path="/challenges/compare" component={ComparePlansPage} />
        
        {/* Checkout routes */}
        <Route path="/checkout/:planId" component={CheckoutPage} />
        <Route path="/payment-confirmation" component={PaymentConfirmationPage} />
        
        {/* About routes */}
        <Route path="/about/company" component={CompanyPage} />
        <Route path="/about/team" component={TeamPage} />

        <Route path="/about/contact" component={ContactPage} />
        
        {/* Payment and Withdrawal routes */}
        <Route path="/payment">
          <PlaceholderPage title="Payment" description="Securely purchase your trading challenge." />
        </Route>
        <Route path="/withdrawal">
          <PlaceholderPage title="Withdrawal" description="Request withdrawals from your funded trading account." />
        </Route>
        
        {/* Fallback route */}
        <Route>
          <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The page you are looking for does not exist.
            </p>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="trfx-theme">
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;