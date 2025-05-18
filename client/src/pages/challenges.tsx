import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { ChallengeCard } from "@/components/challenges/challenge-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import useAuth from "@/hooks/useAuth";
import { useTradingAccounts } from "@/hooks/use-trading-accounts";
import { useQuery } from "@tanstack/react-query";
import { formatCurrency } from "@/lib/utils";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ChallengesPage() {
  const { user } = useAuth();
  const { purchaseChallenge } = useTradingAccounts();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");
  
  // Fetch challenge plans
  const { data: plans, isLoading } = useQuery({
    queryKey: ['/api/challenge-plans'],
  });
  
  // Get plans by type
  const standardPlans = plans?.filter(plan => plan.type === 'standard') || [];
  const aggressivePlans = plans?.filter(plan => plan.type === 'aggressive') || [];
  const evaluationPlans = plans?.filter(plan => plan.type === 'evaluation') || [];
  
  // Handle purchase button click
  const handlePurchase = (plan: any) => {
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
      
      await purchaseChallenge.mutateAsync({
        planId: selectedPlan.id,
        paymentMethod,
        amount: parseFloat(selectedPlan.price.toString())
      });
      
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
      }, 3000);
      
    } catch (err: any) {
      setError(err.message || "Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  // If no plans are defined, use these defaults
  const defaultPlans = [
    {
      id: 1,
      name: "Standard Challenge - $25,000",
      type: "standard",
      accountSize: 25000,
      price: 99,
      profitTarget1: 8,
      maxDailyDrawdown: 5,
      maxTotalDrawdown: 10,
      phase1Duration: 30,
      minTradingDays: 10,
      maxRiskPerTrade: 5,
      profitSplit: 70,
      featured: false
    },
    {
      id: 2,
      name: "Standard Challenge - $50,000",
      type: "standard",
      accountSize: 50000,
      price: 199,
      profitTarget1: 8,
      maxDailyDrawdown: 5,
      maxTotalDrawdown: 10,
      phase1Duration: 30,
      minTradingDays: 10,
      maxRiskPerTrade: 5,
      profitSplit: 80,
      featured: true
    },
    {
      id: 3,
      name: "Standard Challenge - $100,000",
      type: "standard",
      accountSize: 100000,
      price: 349,
      profitTarget1: 8,
      maxDailyDrawdown: 5,
      maxTotalDrawdown: 10,
      phase1Duration: 30,
      minTradingDays: 10,
      maxRiskPerTrade: 5,
      profitSplit: 80,
      featured: false
    },
    {
      id: 4,
      name: "Standard Challenge - $200,000",
      type: "standard",
      accountSize: 200000,
      price: 599,
      profitTarget1: 8,
      maxDailyDrawdown: 5,
      maxTotalDrawdown: 10,
      phase1Duration: 30,
      minTradingDays: 10,
      maxRiskPerTrade: 5,
      profitSplit: 80,
      featured: false
    }
  ];
  
  // Use default plans if no plans are loaded from API
  const displayPlans = {
    standard: standardPlans.length > 0 ? standardPlans : defaultPlans,
    aggressive: aggressivePlans.length > 0 ? aggressivePlans : [],
    evaluation: evaluationPlans.length > 0 ? evaluationPlans : []
  };
  
  return (
    <DashboardLayout user={user || undefined}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trading Challenges</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Choose a challenge that matches your trading style and risk tolerance
          </p>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-12 w-12 animate-spin text-primary-500" />
        </div>
      ) : (
        <>
          {/* Challenge Plans */}
          <Tabs defaultValue="standard" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="aggressive" disabled={displayPlans.aggressive.length === 0}>
                Aggressive
              </TabsTrigger>
              <TabsTrigger value="evaluation" disabled={displayPlans.evaluation.length === 0}>
                Evaluation Only
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayPlans.standard.map(plan => (
                  <ChallengeCard
                    key={plan.id}
                    title={plan.name}
                    accountSize={parseFloat(plan.accountSize.toString())}
                    price={parseFloat(plan.price.toString())}
                    profitTarget={parseFloat(plan.profitTarget1.toString())}
                    maxDrawdown={parseFloat(plan.maxTotalDrawdown.toString())}
                    duration={plan.phase1Duration}
                    profitSplit={parseFloat(plan.profitSplit.toString())}
                    featured={plan.id === 2} // $50K plan is featured
                    onPurchase={() => handlePurchase(plan)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="aggressive">
              {displayPlans.aggressive.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {displayPlans.aggressive.map(plan => (
                    <ChallengeCard
                      key={plan.id}
                      title={plan.name}
                      accountSize={parseFloat(plan.accountSize.toString())}
                      price={parseFloat(plan.price.toString())}
                      profitTarget={parseFloat(plan.profitTarget1.toString())}
                      maxDrawdown={parseFloat(plan.maxTotalDrawdown.toString())}
                      duration={plan.phase1Duration}
                      profitSplit={parseFloat(plan.profitSplit.toString())}
                      featured={false}
                      onPurchase={() => handlePurchase(plan)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  Aggressive challenge plans coming soon!
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="evaluation">
              {displayPlans.evaluation.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {displayPlans.evaluation.map(plan => (
                    <ChallengeCard
                      key={plan.id}
                      title={plan.name}
                      accountSize={parseFloat(plan.accountSize.toString())}
                      price={parseFloat(plan.price.toString())}
                      profitTarget={parseFloat(plan.profitTarget1.toString())}
                      maxDrawdown={parseFloat(plan.maxTotalDrawdown.toString())}
                      duration={plan.phase1Duration}
                      profitSplit={parseFloat(plan.profitSplit.toString())}
                      featured={false}
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
                              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <path fill="white" d="M4 8h16v2H4z" />
                                <path fill="white" d="M7 14h2v2H7z" />
                              </svg>
                              Credit/Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="flex items-center">
                              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#00457C">
                                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.384a.78.78 0 0 1 .772-.644h6.649c2.059 0 3.726.544 4.867 1.579.523.486.9 1.057 1.12 1.711.23.686.257 1.457.087 2.349l-.024.124v.397c-.32 1.657-1.135 3.125-2.427 4.15-1.272 1.003-2.936 1.521-4.928 1.521h-1.662c-.71 0-1.314.498-1.465 1.176l-.02.096-.878 5.486-.042.215z" />
                                <path d="M19.611 7.792c-.161.73-.463 1.325-.888 1.785a5.579 5.579 0 0 1-1.364 1.146c-1.272 1.003-2.936 1.521-4.928 1.521h-1.662c-.71 0-1.314.498-1.465 1.176l-.989 6.186-1.451.209L4.156 5.22l6.541-1.931h2.23c1.882 0 3.424.472 4.463 1.423a3.638 3.638 0 0 1 1.107 1.601c.227.682.258 1.464.088 2.364l-.24.114z" fill="#2790C3" />
                              </svg>
                              PayPal
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="crypto" id="crypto" />
                            <Label htmlFor="crypto" className="flex items-center">
                              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#F7931A">
                                <path d="M11.953 1.938a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.473 15.356c-2.97 0-5.383-2.414-5.383-5.385 0-2.97 2.413-5.384 5.383-5.384s5.384 2.414 5.384 5.384c0 2.971-2.414 5.385-5.384 5.385z" fill="#FFDD17" />
                                <path d="M13.267 8.672c.22.926-.566 1.423-1.53 1.755l.313 1.258-765-.191-.313-1.257-.611.153.313 1.256-.611.153-.313-1.257-1.147.286.161.65a.424.424 0 0 1-.233.553l-.004.001h-.001a.425.425 0 0 1-.553-.233l-.201-.802.857-.213v-.002l-1.199.299c-.009.24.051 1.298.051 1.298.355.088.28.143.627.057l-.052-1.061 1.145-.286.313 1.256.612-.153-.313-1.257.611-.152.313 1.257.764-.191-.309-1.242c.211-.054 1.188-.304 1.312-1.336.1-.827-.502-1.28-1.077-1.407.77-.176.653-.83.172-1.309-.62-.619-1.684-.587-2.162-.478l-.263-1.053-.765.191.262 1.048-.61.153-.262-1.048-.612.152.262 1.05-1.145.286.33 1.32s.485-.138.478-.126c.267-.067.395.044.512.15l.296 1.183 1.093-.273" fill="#F7931A" />
                              </svg>
                              Cryptocurrency
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {/* Mock payment form - in a real app this would be replaced with actual payment processor UI */}
                      <div className="space-y-2 border-t pt-4 mt-4">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="4242 4242 4242 4242" disabled={paymentMethod !== 'credit_card'} />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" disabled={paymentMethod !== 'credit_card'} />
                          </div>
                          <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" disabled={paymentMethod !== 'credit_card'} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsPaymentDialogOpen(false)}>
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
                        `Pay ${selectedPlan ? formatCurrency(selectedPlan.price) : ''}`
                      )}
                    </Button>
                  </DialogFooter>
                </>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </DashboardLayout>
  );
}
