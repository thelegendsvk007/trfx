import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import SimpleApp from "@/components/simple-app";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="tradefunded-theme">
        <Toaster />
        <SimpleApp />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;