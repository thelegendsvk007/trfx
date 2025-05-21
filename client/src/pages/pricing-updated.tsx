import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import PageTemplate from '@/components/page-template';

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
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden">
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
                  
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden relative">
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
                  
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden">
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
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden">
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
                  
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden relative">
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
                  
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden">
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
                  <div className="rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm overflow-hidden">
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
              <Button variant="outline" className="border-border/40 hover:border-border/60">
                Compare All Challenge Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}