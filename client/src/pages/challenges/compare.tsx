import React from 'react';
import { Link } from "wouter";
import { Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTemplate from '@/components/page-template';

export default function ComparePlans() {
  return (
    <PageTemplate
      title="Compare Challenge Plans | TRFX Funded Trading"
      description="Compare all our funded trading account plans side by side. Choose the account size that matches your trading style and ambitions."
    >
      <section className="py-20 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute left-1/4 top-1/3 w-4 h-4 rounded-full bg-blue-500/30"></div>
          <div className="absolute right-1/3 bottom-1/4 w-3 h-3 rounded-full bg-purple-500/20"></div>
          <div className="absolute left-1/5 top-1/4 w-3 h-3 rounded-full bg-green-500/30"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Challenge Plans Comparison</h1>
            <p className="text-lg text-white/70">
              Compare our different challenge plans to find the one that suits your trading style and objectives.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto bg-background/30 backdrop-blur-sm rounded-lg border border-border/30 shadow-xl">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">Standard Challenge</th>
                  <th className="p-4 text-center">Aggressive Challenge</th>
                  <th className="p-4 text-center">Evaluation Program</th>
                </tr>
              </thead>
              <tbody>
                {/* Account Sizes */}
                <tr className="border-b border-border/30 bg-black/20">
                  <td className="p-4 font-medium">Account Sizes</td>
                  <td className="p-4 text-center">$10K - $200K</td>
                  <td className="p-4 text-center">$10K - $200K</td>
                  <td className="p-4 text-center">$25K - $200K</td>
                </tr>
                
                {/* Evaluation Phases */}
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium">Evaluation Phases</td>
                  <td className="p-4 text-center">2 Phases</td>
                  <td className="p-4 text-center">2 Phases</td>
                  <td className="p-4 text-center">1 Phase</td>
                </tr>
                
                {/* Profit Target (Phase 1) */}
                <tr className="border-b border-border/30 bg-black/20">
                  <td className="p-4 font-medium">Profit Target (Phase 1)</td>
                  <td className="p-4 text-center">8%</td>
                  <td className="p-4 text-center">12%</td>
                  <td className="p-4 text-center">10%</td>
                </tr>
                
                {/* Profit Target (Phase 2) */}
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium">Profit Target (Phase 2)</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center">8%</td>
                  <td className="p-4 text-center">N/A</td>
                </tr>
                
                {/* Maximum Drawdown */}
                <tr className="border-b border-border/30 bg-black/20">
                  <td className="p-4 font-medium">Maximum Drawdown</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center">8%</td>
                  <td className="p-4 text-center">10%</td>
                </tr>
                
                {/* Daily Drawdown */}
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium">Daily Drawdown</td>
                  <td className="p-4 text-center">3%</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center">5%</td>
                </tr>
                
                {/* Minimum Trading Days */}
                <tr className="border-b border-border/30 bg-black/20">
                  <td className="p-4 font-medium">Minimum Trading Days</td>
                  <td className="p-4 text-center">10 days</td>
                  <td className="p-4 text-center">10 days</td>
                  <td className="p-4 text-center">15 days</td>
                </tr>
                
                {/* Time Limit */}
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium">Time Limit</td>
                  <td className="p-4 text-center">30 days per phase</td>
                  <td className="p-4 text-center">30 days per phase</td>
                  <td className="p-4 text-center">45 days</td>
                </tr>
                
                {/* Profit Split */}
                <tr className="border-b border-border/30 bg-black/20">
                  <td className="p-4 font-medium">Profit Split</td>
                  <td className="p-4 text-center">Up to 80%</td>
                  <td className="p-4 text-center">Up to 80%</td>
                  <td className="p-4 text-center">Up to 85%</td>
                </tr>
                
                {/* Scaling Opportunities */}
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium">Scaling Opportunities</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                {/* Refundable Fee */}
                <tr className="border-b border-border/30 bg-black/20">
                  <td className="p-4 font-medium">Refundable Fee</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                {/* Difficulty Level */}
                <tr className="border-b border-border/30">
                  <td className="p-4 font-medium">Difficulty Level</td>
                  <td className="p-4 text-center">Medium</td>
                  <td className="p-4 text-center">Hard</td>
                  <td className="p-4 text-center">Hard</td>
                </tr>
                
                {/* Price Range */}
                <tr className="border-b border-border/30 bg-black/20">
                  <td className="p-4 font-medium">Price Range</td>
                  <td className="p-4 text-center">$99 - $799</td>
                  <td className="p-4 text-center">$149 - $999</td>
                  <td className="p-4 text-center">$199 - $1,199</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-background/30 backdrop-blur-sm border border-border/30 p-4 rounded-lg inline-flex items-center mb-6">
              <AlertCircle className="h-5 w-5 text-amber-400 mr-2" />
              <p className="text-sm text-white/80">
                All challenge types are designed to identify consistent and disciplined traders.
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90" size="lg" asChild>
              <Link href="/pricing">View Pricing Details</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}