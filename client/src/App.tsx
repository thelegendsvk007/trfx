import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

import LandingPage from "@/pages/landing";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import DashboardPage from "@/pages/dashboard";
import TradeHistoryPage from "@/pages/trade-history";
import AnalyticsPage from "@/pages/analytics";
import PayoutsPage from "@/pages/payouts";
import ChallengesPage from "@/pages/challenges";
import ProfilePage from "@/pages/profile";
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
      <Route path="/profile" component={ProfilePage} />
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
      <ThemeProvider defaultTheme="light" storageKey="tradefunded-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
