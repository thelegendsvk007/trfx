import { Switch, Route } from "wouter";
import { AuthProvider } from "@/components/auth-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";

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
import TradingDashboardPage from "@/pages/trading/dashboard";
import SpreadsLeveragePage from "@/pages/trading/spreads-leverage";

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
        <Route path="/dashboard" component={TradingDashboardPage} />
        <Route path="/trading">
          <PlaceholderPage title="Trading" description="Access your trading platforms and real-time market data." />
        </Route>
        <Route path="/challenges">
          <PlaceholderPage title="Trading Challenges" description="Prove your trading skills and get funded with our trading challenges." />
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
        <Route path="/trading/products">
          <PlaceholderPage title="Trading Products" description="Explore the range of markets and instruments available for trading." />
        </Route>
        <Route path="/trading/spreads-leverage" component={SpreadsLeveragePage} />
        
        {/* Challenge routes */}
        <Route path="/challenges/standard" component={StandardChallengePage} />
        <Route path="/challenges/aggressive" component={AggressiveChallengePage} />
        <Route path="/challenges/evaluation" component={EvaluationProgramPage} />
        <Route path="/challenges/compare" component={ComparePlansPage} />
        
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