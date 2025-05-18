import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import useAuth from "@/hooks/useAuth";
import { MainNav } from "@/components/main-nav";

export default function ChallengesPage() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");
  
  // Default plans since we don't have a backend yet
  const plans = [
    {
      id: 1,
      name: "Standard Challenge - $25,000",
      type: "standard",
      accountSize: "25000",
      price: "99",
      profitTarget1: "8",
      maxDailyDrawdown: "5",
      maxTotalDrawdown: "10",
      phase1Duration: 30,
      minTradingDays: 10,
      maxRiskPerTrade: "5",
      profitSplit: "70",
      featured: false
    },
    {
      id: 2,
      name: "Standard Challenge - $50,000",
      type: "standard",
      accountSize: "50000",
      price: "199",
      profitTarget1: "8",
      maxDailyDrawdown: "5",
      maxTotalDrawdown: "10",
      phase1Duration: 30,
      minTradingDays: 10,
      maxRiskPerTrade: "5",
      profitSplit: "80",
      featured: true
    },
    {
      id: 3,
      name: "Standard Challenge - $100,000",
      type: "standard",
      accountSize: "100000",
      price: "349",
      profitTarget1: "8",
      maxDailyDrawdown: "5",
      maxTotalDrawdown: "10",
      phase1Duration: 30,
      minTradingDays: 10,
      maxRiskPerTrade: "5",
      profitSplit: "80",
      featured: false
    },
    {
      id: 4,
      name: "Standard Challenge - $200,000",
      type: "standard",
      accountSize: "200000",
      price: "599",
      profitTarget1: "8",
      maxDailyDrawdown: "5",
      maxTotalDrawdown: "10",
      phase1Duration: 30,
      minTradingDays: 10,
      maxRiskPerTrade: "5",
      profitSplit: "80",
      featured: false
    },
    {
      id: 5,
      name: "Aggressive Challenge - $25,000",
      type: "aggressive",
      accountSize: "25000",
      price: "129",
      profitTarget1: "12",
      maxDailyDrawdown: "6",
      maxTotalDrawdown: "12",
      phase1Duration: 45,
      minTradingDays: 5,
      maxRiskPerTrade: "6",
      profitSplit: "75",
      featured: false
    },
    {
      id: 6,
      name: "Aggressive Challenge - $50,000",
      type: "aggressive",
      accountSize: "50000",
      price: "249",
      profitTarget1: "12",
      maxDailyDrawdown: "6",
      maxTotalDrawdown: "12",
      phase1Duration: 45,
      minTradingDays: 5,
      maxRiskPerTrade: "6",
      profitSplit: "85",
      featured: true
    }
  ];
  
  // Get plans by type
  const standardPlans = plans.filter(plan => plan.type === 'standard');
  const aggressivePlans = plans.filter(plan => plan.type === 'aggressive');
  const evaluationPlans = plans.filter(plan => plan.type === 'evaluation') || [];
  
  // Handle purchase button click
  const handlePurchase = (plan: any) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to purchase a challenge.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    setSelectedPlan(plan);
    setIsPaymentDialogOpen(true);
  };
  
  // Process payment
  const handleProcessPayment = async () => {
    if (!selectedPlan || !paymentMethod) {
      setError("Please select a payment method");
      return;
    }
    
    try {
      setIsProcessing(true);
      setError("");
      
      // This would be an API call in a real app
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setPaymentSuccess(true);
      
      // Show success toast
      toast({
        title: "Challenge Purchased Successfully",
        description: "Your trading account is being set up and will be available shortly.",
        duration: 5000,
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setIsPaymentDialogOpen(false);
        setSelectedPlan(null);
        setPaymentMethod("credit_card");
        setPaymentSuccess(false);
        
        // In a real app, we'd redirect to the dashboard or a confirmation page
        navigate("/dashboard");
      }, 3000);
      
    } catch (err: any) {
      setError(err.message || "Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Format currency helper
  const formatCurrency = (value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numValue);
  };
  
  // Challenge Card Component
  const ChallengeCard = ({ 
    plan,
    onPurchase 
  }: { 
    plan: any;
    onPurchase: () => void;
  }) => {
    return (
      <Card className={`flex flex-col ${plan.featured ? 'border-primary shadow-lg' : ''}`}>
        {plan.featured && (
          <div className="bg-primary text-white text-center py-1 text-sm font-medium">
            Most Popular
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl">{formatCurrency(plan.accountSize)}</CardTitle>
          <CardDescription>
            {plan.type.charAt(0).toUpperCase() + plan.type.slice(1)} Challenge
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <div className="text-3xl font-bold mb-6 text-primary">
            {formatCurrency(plan.price)}
          </div>
          <ul className="space-y-2 mb-6 flex-grow">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <span><span className="font-medium">Profit Target:</span> {plan.profitTarget1}%</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <span><span className="font-medium">Max Drawdown:</span> {plan.maxTotalDrawdown}%</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <span><span className="font-medium">Duration:</span> {plan.phase1Duration} days</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <span><span className="font-medium">Profit Split:</span> {plan.profitSplit}%</span>
            </li>
          </ul>
          <Button 
            onClick={onPurchase} 
            className="w-full mt-auto"
            variant={plan.featured ? "default" : "outline"}
          >
            Start Challenge
          </Button>
        </CardContent>
      </Card>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Include the main navigation */}
      <MainNav />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trading Challenges</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Choose a challenge that matches your trading style and risk tolerance
            </p>
          </div>
        </div>
        
        {/* Challenge Plans */}
        <Tabs defaultValue="standard" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="aggressive">Aggressive</TabsTrigger>
            <TabsTrigger value="evaluation" disabled={evaluationPlans.length === 0}>
              Evaluation Only
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="standard">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standardPlans.map(plan => (
                <ChallengeCard
                  key={plan.id}
                  plan={plan}
                  onPurchase={() => handlePurchase(plan)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="aggressive">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aggressivePlans.map(plan => (
                <ChallengeCard
                  key={plan.id}
                  plan={plan}
                  onPurchase={() => handlePurchase(plan)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="evaluation">
            {evaluationPlans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {evaluationPlans.map(plan => (
                  <ChallengeCard
                    key={plan.id}
                    plan={plan}
                    onPurchase={() => handlePurchase(plan)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                Evaluation only plans coming soon!
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        {/* Challenge Information */}
        <Card>
          <CardHeader>
            <CardTitle>Challenge Rules</CardTitle>
            <CardDescription>
              Our trading challenges are designed to identify disciplined and profitable traders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-medium mb-4">Two-Phase Evaluation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><span className="font-medium">Phase 1:</span> Achieve the profit target while respecting risk management rules within the designated timeframe.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><span className="font-medium">Phase 2:</span> Continue demonstrating consistent trading performance with similar rules but often a lower profit target.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><span className="font-medium">Funded Account:</span> After passing both phases, receive a funded account with the same trading conditions.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-4">Key Rules</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><span className="font-medium">Daily Drawdown:</span> Your account cannot lose more than the specified percentage in a single day.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><span className="font-medium">Total Drawdown:</span> Your account balance cannot drop below the specified percentage of your starting balance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><span className="font-medium">Minimum Trading Days:</span> You must trade on a minimum number of different days to ensure consistency.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><span className="font-medium">Risk Per Trade:</span> Maximum risk per trade is limited to protect against excessive position sizing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Payment Dialog */}
        <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
          <DialogContent>
            {paymentSuccess ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Payment Successful
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Your trading account is being set up and will be available shortly.
                </p>
              </div>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle>Purchase Challenge</DialogTitle>
                  <DialogDescription>
                    {selectedPlan && `Complete your payment for the ${selectedPlan.name}`}
                  </DialogDescription>
                </DialogHeader>
                
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="py-4">
                  {selectedPlan && (
                    <div className="mb-6 p-4 border rounded-md">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Order Summary</div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{selectedPlan.name}</span>
                        <span>{formatCurrency(selectedPlan.price)}</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        Account Size: {formatCurrency(selectedPlan.accountSize)}
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                        <span>Total</span>
                        <span>{formatCurrency(selectedPlan.price)}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">Payment Method</Label>
                      <RadioGroup 
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="credit_card" id="credit_card" />
                          <Label htmlFor="credit_card" className="flex items-center">
                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                              <rect width="24" height="16" rx="2" fill="#252A3C" />
                              <circle cx="8" cy="8" r="5" fill="#FF5F00" />
                              <circle cx="16" cy="8" r="5" fill="#EB001B" opacity="0.8" />
                            </svg>
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex items-center">
                            <svg className="h-5 w-8 mr-2" viewBox="0 0 24 24">
                              <path d="M20.067 8.48c.1 1.02-.248 2.11-.79 2.9-.967 1.41-2.714 1.86-4.095 1.902h-.072c-.667 0-1.238.534-1.334 1.21l-.114.618-.667 4.24c-.057.38-.39.666-.762.666h-2.77c-.477 0-.81-.42-.734-.9l1.39-8.76v-.02c.077-.487.496-.84.981-.84h3.25c1.077 0 1.942-.287 2.58-.917.638-.63.963-1.525.99-2.67.01-.372.19-.725.477-.945.315-.238.715-.315 1.087-.248a1.188 1.188 0 0 1 .582.763Z" fill="#009cde" />
                              <path d="M8.79 8.57c.057-.372.19-.725.477-.945.315-.229.715-.315 1.087-.248.333.076.6.372.582.763.1 1.03-.248 2.11-.79 2.9-.957 1.41-2.704 1.87-4.085 1.903H6c-.667 0-1.238.543-1.334 1.219l-.115.619-.667 4.239c-.057.38-.39.667-.762.667H.343c-.477 0-.81-.42-.734-.9L2.009 8.56v-.019c.076-.486.495-.838.98-.838h5.143c.23 0 .445.038.657.114v.752Z" fill="#003087" />
                            </svg>
                            PayPal
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="crypto" id="crypto" />
                          <Label htmlFor="crypto" className="flex items-center">
                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                              <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.17-1.064-.25l.53-2.12-1.32-.33-.54 2.153c-.285-.065-.565-.13-.84-.2l-1.815-.45-.35 1.407s.975.225.955.238c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.415-.614.32.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.545 2.19 1.32.33.54-2.15c.36.1.705.19 1.05.273l-.54 2.14 1.32.33.545-2.19c2.24.427 3.93.255 4.64-1.775.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.22 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z" fill="#F7931A" />
                            </svg>
                            Cryptocurrency
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsPaymentDialogOpen(false)}
                    disabled={isProcessing}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleProcessPayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>Complete Purchase</>
                    )}
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}