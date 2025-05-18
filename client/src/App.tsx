import { Switch, Route } from "wouter";
import { AuthProvider } from "@/components/auth-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

// Import pages
import LandingPage from "@/pages/landing-new";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import TradingPage from "@/pages/trading";
import DashboardPage from "@/pages/dashboard";
import ChallengesPage from "@/pages/challenges";
import FAQPage from "@/pages/faq";

// How it works pages
import HowItWorksPage from "@/pages/how-it-works";
import ChallengeProcessPage from "@/pages/how-it-works/challenge-process";
import EvaluationPhasePage from "@/pages/how-it-works/evaluation-phase";
import FundingRequirementsPage from "@/pages/how-it-works/funding-requirements";
import PayoutStructurePage from "@/pages/how-it-works/payout-structure";
import TradingRulesPage from "@/pages/how-it-works/trading-rules";

// Trading pages
import MetaTrader4Page from "@/pages/trading/metatrader4";
import MetaTrader5Page from "@/pages/trading/metatrader5";
import TradingProductsPage from "@/pages/trading/products";
import SpreadsLeveragePage from "@/pages/trading/spreads-leverage";

// Challenge pages
import StandardChallengePage from "@/pages/challenges/standard";
import AggressiveChallengePage from "@/pages/challenges/aggressive";
import EvaluationProgramPage from "@/pages/challenges/evaluation";
import ComparePlansPage from "@/pages/challenges/compare";

// About pages
import AboutCompanyPage from "@/pages/about/company";
import TeamPage from "@/pages/about/team";
import TestimonialsPage from "@/pages/about/testimonials";
import ContactPage from "@/pages/about/contact";

// Payment and Withdrawal pages
import PaymentPage from "@/pages/payment";
import WithdrawalPage from "@/pages/withdrawal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/trading" component={TradingPage} />
      <Route path="/challenges" component={ChallengesPage} />
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
      
      {/* About routes */}
      <Route path="/about/company" component={AboutCompanyPage} />
      <Route path="/about/team" component={TeamPage} />
      <Route path="/about/testimonials" component={TestimonialsPage} />
      <Route path="/about/contact" component={ContactPage} />
      
      {/* Payment and Withdrawal routes */}
      <Route path="/payment" component={PaymentPage} />
      <Route path="/withdrawal" component={WithdrawalPage} />
      
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