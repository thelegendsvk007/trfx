import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import PageTemplate from '@/components/page-template';
import { Link } from 'wouter';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("standard");

  return (
    <PageTemplate
      title="Pricing | TRFX Funded Trading"
      description="Choose the account size that matches your trading ambitions. Start your funded trading journey with TRFX."
    >
      <section className="py-20 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Choose the account size that matches your trading ambitions</h1>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Challenge Type Tabs */}
            <Tabs 
              defaultValue="standard" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="bg-background/30 backdrop-blur-sm p-1 rounded-lg mb-8 max-w-3xl mx-auto">
                <TabsList className="w-full bg-transparent grid grid-cols-3">
                  <TabsTrigger 
                    value="standard" 
                    className={`rounded-md py-3 text-sm ${activeTab === "standard" ? "bg-background text-foreground shadow-sm" : "text-foreground/60"}`}
                  >
                    Standard Challenge
                  </TabsTrigger>
                  <TabsTrigger 
                    value="aggressive" 
                    className={`rounded-md py-3 text-sm ${activeTab === "aggressive" ? "bg-background text-foreground shadow-sm" : "text-foreground/60"}`}
                  >
                    Aggressive Challenge
                  </TabsTrigger>
                  <TabsTrigger 
                    value="evaluation" 
                    className={`rounded-md py-3 text-sm ${activeTab === "evaluation" ? "bg-background text-foreground shadow-sm" : "text-foreground/60"}`}
                  >
                    Evaluation Program
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Standard Challenge */}
              <TabsContent value="standard" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$10,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">Our entry-level funded account</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$99</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$10,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">8% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">5% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 70%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                  
                  <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-2.5 py-1">
                      POPULAR
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$50,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">Our most popular funded account</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$249</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$50,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">8% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">5% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 75%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                  
                  <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$100,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">For experienced traders</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$399</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$100,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">8% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">5% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 80%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Aggressive Challenge */}
              <TabsContent value="aggressive" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$10,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">Aggressive trading style</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$149</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$10,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">12% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">8% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 70%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                  
                  <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-2.5 py-1">
                      POPULAR
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$50,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">High rewards for skilled traders</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$349</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$50,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">12% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">8% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 75%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                  
                  <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$100,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">For advanced traders</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$599</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$100,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">12% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">8% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 80%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Evaluation Program */}
              <TabsContent value="evaluation" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative rounded-lg border border-gray-700 bg-gray-900/70 transition-all duration-300 hover:border-purple-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-blue-800/0 opacity-0 group-hover:opacity-100 animate-pulse rounded-lg"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$25,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">Single-phase evaluation</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$199</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$25,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">10% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">10% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 75%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden relative">
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-2.5 py-1">
                      POPULAR
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$100,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">Our premium evaluation option</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$499</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$100,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">10% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">10% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 80%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">$200,000 Account</h3>
                      <p className="text-sm text-white/60 mb-4">For elite traders</p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">$799</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">$200,000 funded account after passing</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">10% profit target</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">10% maximum drawdown</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm text-white/80">Profit split up to 85%</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">Start Your Challenge</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Compare All Plans Button */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="border-border/40 hover:border-border/60" asChild>
                <Link href="/challenges/compare">
                  Compare All Challenge Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features of Our Challenge Programs</h2>
            <p className="text-gray-400">Designed to help you prove your trading skills and gain access to significant trading capital</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/40 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Evaluation</h3>
              <p className="text-gray-400">Our challenge programs are designed to efficiently evaluate your trading skills with clear metrics and objectives.</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/40 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Profit Sharing</h3>
              <p className="text-gray-400">Keep up to 80% of the profits you generate with no risk to your own capital after passing our challenge.</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/40 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p className="text-gray-400">Our challenges emphasize proper risk management techniques that are essential for long-term trading success.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-black/50 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about our funded trading challenges</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">How do the trading challenges work?</h3>
              <p className="text-gray-400">Our trading challenges are designed to identify disciplined and skilled traders. You'll need to achieve a profit target while adhering to specific risk management rules. Once you pass the challenge phases, you'll receive a funded trading account where you can keep up to 80% of the profits you generate.</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">What's the difference between Standard, Aggressive, and Evaluation programs?</h3>
              <p className="text-gray-400">The Standard Challenge has a balanced 8% profit target with a 5% maximum drawdown. The Aggressive Challenge has a higher 12% profit target with an 8% maximum drawdown, ideal for traders with a more active style. The Evaluation Program offers a single-phase evaluation with adjusted targets and faster funding for experienced traders.</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">How long do I have to complete the challenge?</h3>
              <p className="text-gray-400">Standard and Aggressive challenges have a 30-day timeframe for Phase 1 and 60 days for Phase 2. The Evaluation Program has a single phase with a 30-day timeframe. Time extensions are available if needed for an additional fee.</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">What happens if I fail the challenge?</h3>
              <p className="text-gray-400">If you fail to meet the challenge requirements, you can retry by purchasing a new challenge at a discounted rate. We offer a 20% discount on your next attempt if you reach at least 50% of the profit target in your failed attempt.</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">How do withdrawals work once I'm funded?</h3>
              <p className="text-gray-400">After passing the challenge and receiving your funded account, you can request withdrawals of your profit share bi-weekly. Withdrawals are processed within 2-3 business days and sent to your preferred payment method.</p>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}