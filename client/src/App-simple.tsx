import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Switch } from "wouter";
import SimpleApp from "@/components/simple-app";
import HowItWorksPage from "@/pages/how-it-works";
import TradingPage from "@/pages/trading";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import FAQPage from "@/pages/faq";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="tradefunded-theme">
        <Toaster />
        <Switch>
          <Route path="/" component={SimpleApp} />
          <Route path="/how-it-works" component={HowItWorksPage} />
          <Route path="/trading" component={TradingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FAQPage} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;