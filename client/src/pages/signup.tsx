import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { UserPlus } from "lucide-react";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const [, setLocation] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    setError("");
    setIsLoading(true);

    try {
      await register({ 
        firstName, 
        lastName, 
        username, 
        email, 
        password 
      });
      setLocation("/dashboard");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute left-1/4 top-1/2 w-2 h-2 rounded-full bg-blue-500/40"></div>
        <div className="absolute right-1/4 top-1/3 w-3 h-3 rounded-full bg-purple-500/40"></div>
        <div className="absolute left-2/3 top-1/4 w-2 h-2 rounded-full bg-green-500/40"></div>
        <div className="absolute right-1/5 bottom-1/3 w-4 h-4 rounded-full bg-pink-500/30"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-md px-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Create an Account</h1>
            <p className="text-gray-400">Join TRFX and start your journey to funded trading</p>
          </div>
          
          {/* Gradient tagline box */}
          <div className="mb-8 p-6 bg-black/30 backdrop-blur-sm border border-border/20 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Trade</span> with Our Capital,
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500"> Keep the Profits</span>
            </h2>
          </div>
          
          {/* Auth Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-border/20 p-1 flex">
              <Link href="/login">
                <div className="relative px-8 py-3 rounded-md transition-all text-white/60 hover:text-white/80">
                  <span className="relative z-10">Login</span>
                </div>
              </Link>
              <Link href="/signup">
                <div className="relative px-8 py-3 rounded-md transition-all text-white">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-md"></div>
                  <span className="relative z-10">Sign Up</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 shadow-lg shadow-purple-500/5">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-black/50 border-purple-500/30 text-white focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-black/50 border-purple-500/30 text-white focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="text-white">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-black/50 border-purple-500/30 text-white focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 border-purple-500/30 text-white focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/50 border-purple-500/30 text-white focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-black/50 border-purple-500/30 text-white focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/20"
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-purple-400 hover:text-purple-300">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}