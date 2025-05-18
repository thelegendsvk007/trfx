import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, LogIn } from "lucide-react";
import { Link } from "wouter";
import { FaGoogle, FaMicrosoft, FaApple, FaGithub } from "react-icons/fa";
import PageTemplate from "@/components/page-template";

// Validation schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login, error: authError } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false
    }
  });
  
  // Form submission handler
  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      await login(values.username, values.password);
      
      // Successful login is handled by the auth provider which redirects to the dashboard
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: authError || "Invalid username or password",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Provider login handlers
  const handleProviderLogin = (provider: string) => {
    toast({
      title: `${provider} Login`,
      description: `${provider} authentication is not yet implemented.`,
    });
  };
  
  return (
    <PageTemplate
      title="TRFX - Sign In"
      description="Sign in to your TRFX account to access your trading dashboard and account details."
    >
      <div className="bg-background min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Logo and Heading */}
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-6">
              <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TRFX
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Sign in to your account</h1>
            <p className="text-muted-foreground">
              Or start your trading challenge
            </p>
          </div>
          
          {/* Chart Image */}
          <div className="overflow-hidden rounded-lg border border-border/60 w-full">
            <img 
              src="/chart-background.png" 
              alt="Trading Chart" 
              className="w-full h-[120px] object-cover"
              onError={(e) => {
                // Fallback to a gradient if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(to right, #1f2937, #111827)';
                (e.target as HTMLImageElement).parentElement!.style.height = '120px';
              }}
            />
          </div>
          
          {/* Login Form */}
          <div className="bg-card border rounded-lg shadow-sm p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Remember me</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign In
                    </>
                  )}
                </Button>
              </form>
            </Form>
            
            {/* Social Logins Divider */}
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border"></span>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            {/* Social Login Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" type="button" onClick={() => handleProviderLogin("Google")}>
                <FaGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" type="button" onClick={() => handleProviderLogin("Microsoft")}>
                <FaMicrosoft className="mr-2 h-4 w-4" />
                Microsoft
              </Button>
              <Button variant="outline" type="button" onClick={() => handleProviderLogin("Apple")}>
                <FaApple className="mr-2 h-4 w-4" />
                Apple
              </Button>
              <Button variant="outline" type="button" onClick={() => handleProviderLogin("GitHub")}>
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
          
          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}