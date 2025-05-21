import React from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AuthTabs() {
  const [location] = useLocation();
  const isLogin = location === "/login";
  const isSignup = location === "/signup";

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-border/20 p-1 flex">
        <Link href="/login">
          <div
            className={cn(
              "relative px-8 py-3 rounded-md transition-all",
              isLogin ? "text-white" : "text-white/60 hover:text-white/80"
            )}
          >
            {isLogin && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-md"
                layoutId="auth-tab-background"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">Login</span>
          </div>
        </Link>
        <Link href="/signup">
          <div
            className={cn(
              "relative px-8 py-3 rounded-md transition-all",
              isSignup ? "text-white" : "text-white/60 hover:text-white/80"
            )}
          >
            {isSignup && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-md"
                layoutId="auth-tab-background"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">Sign Up</span>
          </div>
        </Link>
      </div>
    </div>
  );
}