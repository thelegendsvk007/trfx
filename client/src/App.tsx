import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

import LandingPage from "@/pages/landing-new";
import DashboardPage from "@/pages/dashboard-new";
import TradeHistoryPage from "@/pages/trade-history-new";
import ChallengesPage from "@/pages/challenges-new";
import CheckoutPage from "@/pages/checkout-new";
import AnalyticsPage from "@/pages/analytics-new";
import PayoutsPage from "@/pages/payouts-new";
import ProfilePage from "@/pages/profile-new";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import HowItWorksPage from "@/pages/how-it-works";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import TradingPage from "@/pages/trading";
import FAQPage from "@/pages/faq";
import AdminDashboardPage from "@/pages/admin/dashboard";
import AdminTradersPage from "@/pages/admin/traders";
import AdminAccountsPage from "@/pages/admin/accounts";
import AdminPayoutsPage from "@/pages/admin/payouts";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/trade-history" component={TradeHistoryPage} />
      <Route path="/analytics" component={AnalyticsPage} />
      <Route path="/payouts" component={PayoutsPage} />
      <Route path="/challenges" component={ChallengesPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/trading" component={TradingPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/admin" component={AdminDashboardPage} />
      <Route path="/admin/traders" component={AdminTradersPage} />
      <Route path="/admin/accounts" component={AdminAccountsPage} />
      <Route path="/admin/payouts" component={AdminPayoutsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="trfx-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
