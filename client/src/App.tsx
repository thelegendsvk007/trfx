import { Switch, Route } from "wouter";
import { AuthProvider } from "@/components/auth-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";

// Import the pages we've already created
import MetaTrader4Page from "@/pages/trading/metatrader4";
import MetaTrader5Page from "@/pages/trading/metatrader5";
import TeamPage from "@/pages/about/team";

// Placeholder component for pages we haven't created yet
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container py-12">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-3">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        This page is under construction. Please check back soon!
      </p>
    </div>
  </div>
);

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Landing page */}
        <Route path="/">
          <PlaceholderPage title="Welcome to TRFX" />
        </Route>
        
        {/* Auth routes */}
        <Route path="/login">
          <PlaceholderPage title="Login" />
        </Route>
        <Route path="/signup">
          <PlaceholderPage title="Sign Up" />
        </Route>
        
        {/* Main section routes */}
        <Route path="/dashboard">
          <PlaceholderPage title="Dashboard" />
        </Route>
        <Route path="/trading">
          <PlaceholderPage title="Trading" />
        </Route>
        <Route path="/challenges">
          <PlaceholderPage title="Challenges" />
        </Route>
        <Route path="/faq">
          <PlaceholderPage title="Frequently Asked Questions" />
        </Route>
        
        {/* How it works routes */}
        <Route path="/how-it-works">
          <PlaceholderPage title="How It Works" />
        </Route>
        
        {/* Trading routes that we've implemented */}
        <Route path="/trading/metatrader4" component={MetaTrader4Page} />
        <Route path="/trading/metatrader5" component={MetaTrader5Page} />
        
        {/* About routes */}
        <Route path="/about/team" component={TeamPage} />
        
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