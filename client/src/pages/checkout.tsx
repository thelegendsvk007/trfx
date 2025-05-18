import React, { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, CheckCircle, LockKeyhole } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

// Make sure to call loadStripe outside of a component's render to avoid recreating the Stripe object on every render
// Make sure to check if the key exists to avoid empty string errors
const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
if (!stripeKey) {
  console.error("Missing Stripe publishable key! Check your environment variables.");
}
const stripePromise = loadStripe(stripeKey || "pk_test_placeholder");

// Step 1: Plan Summary component
const PlanSummary = ({ plan, handleNextStep }: { 
  plan: any; 
  handleNextStep: () => void;
}) => {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Confirm Your Plan</CardTitle>
        <CardDescription>Review the details of your selected challenge plan</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between p-4 bg-muted/50 rounded-lg">
          <div>
            <h3 className="font-bold text-xl">{plan.name}</h3>
            <p className="text-muted-foreground">Account Size: {plan.accountSize}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-2xl font-bold">{plan.price}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold">Challenge Details</h4>
          <div className="grid grid-cols-2 gap-y-3">
            <div className="text-muted-foreground">Profit Target:</div>
            <div>{plan.profitTarget}</div>
            
            <div className="text-muted-foreground">Max Drawdown:</div>
            <div>{plan.maxDrawdown}</div>
            
            <div className="text-muted-foreground">Min Trading Days:</div>
            <div>{plan.minTradingDays} days</div>
            
            <div className="text-muted-foreground">Max Duration:</div>
            <div>{plan.maxTradingDays} days</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">What's Included</h4>
          <ul className="space-y-2">
            {plan.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{plan.price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button 
          onClick={handleNextStep}
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          Proceed to Payment
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

// Step 2: Payment component with Stripe Elements integration
const CheckoutForm = ({ planId, amount, onSuccess }: { 
  planId: number;
  amount: number; 
  onSuccess: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState<string | null>(null);
  
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  
  // Create payment intent when component mounts
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setIsLoading(true);
        const response = await apiRequest("POST", "/api/create-payment-intent", {
          planId,
          amount,
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || "Failed to create payment");
        }
        
        setClientSecret(data.clientSecret);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
        toast({
          title: "Error",
          description: err.message || "Failed to initiate payment process",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    createPaymentIntent();
  }, [planId, amount, toast]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error: submitError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + "/payment-confirmation",
        },
        redirect: "if_required",
      });
      
      if (submitError) {
        throw new Error(submitError.message || "Payment failed");
      }
      
      // If we got here, payment was successful without a redirect
      toast({
        title: "Payment Successful",
        description: "Your challenge plan has been purchased successfully",
      });
      
      onSuccess();
    } catch (err: any) {
      setError(err.message || "Payment failed");
      toast({
        title: "Payment Failed",
        description: err.message || "There was an error processing your payment",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-destructive mb-4">{error}</p>
        <Button 
          variant="outline" 
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </div>
    );
  }
  
  if (isLoading || !clientSecret) {
    return (
      <div className="p-10 text-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-muted-foreground">Preparing your payment...</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      
      <div className="bg-muted/50 p-4 rounded-md flex items-center text-sm">
        <LockKeyhole className="h-4 w-4 text-muted-foreground mr-2" />
        <span className="text-muted-foreground">
          All payments are securely processed using Stripe. Your card information is encrypted and never stored on our servers.
        </span>
      </div>
      
      <div className="flex justify-end">
        <Button 
          type="submit"
          disabled={!stripe || !elements || isLoading}
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          {isLoading ? (
            <span className="flex items-center">
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
              Processing...
            </span>
          ) : (
            <span>Complete Payment</span>
          )}
        </Button>
      </div>
    </form>
  );
};

// Step 3: Confirmation component
const ConfirmationStep = () => {
  const [, navigate] = useLocation();
  
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg text-center">
      <CardHeader>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <CardTitle className="text-2xl">Payment Successful!</CardTitle>
        <CardDescription>Your challenge plan has been activated</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-center">
          Thank you for your purchase. You can now start your trading challenge. 
          Our team will review your payment and set up your trading account.
        </p>
        
        <div className="bg-muted/50 p-4 rounded-md">
          <p className="text-muted-foreground">
            You will receive an email confirmation with details about your challenge 
            and instructions on how to access your trading platform.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <Button 
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity w-full"
          onClick={() => navigate("/trading/dashboard")}
        >
          Go to Dashboard
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate("/trading")}
        >
          Explore Trading Platforms
        </Button>
      </CardFooter>
    </Card>
  );
};

// Main Checkout Page component
export default function CheckoutPage() {
  const [match, params] = useRoute<{ planId: string }>("/checkout/:planId");
  const [step, setStep] = useState(1);
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  // Sample challenge plan data - in a real app, this would be fetched from the server
  // based on the plan ID from the URL
  const plans = [
    {
      id: 1,
      name: "Standard Challenge",
      accountSize: "$25,000",
      price: "$99",
      amount: 99,
      profitTarget: "8%",
      maxDrawdown: "10%",
      minTradingDays: 5,
      maxTradingDays: 30,
      features: [
        "Two-phase evaluation",
        "80% profit split",
        "10% max drawdown",
        "5 minimum trading days",
        "Instant funding after passing"
      ]
    },
    {
      id: 2,
      name: "Professional Challenge",
      accountSize: "$50,000",
      price: "$199",
      amount: 199,
      profitTarget: "8%",
      maxDrawdown: "10%",
      minTradingDays: 5,
      maxTradingDays: 30,
      features: [
        "Two-phase evaluation",
        "80% profit split",
        "10% max drawdown",
        "5 minimum trading days",
        "Instant funding after passing",
        "Priority support"
      ]
    },
    {
      id: 3,
      name: "Expert Challenge",
      accountSize: "$100,000",
      price: "$299",
      amount: 299,
      profitTarget: "8%",
      maxDrawdown: "10%",
      minTradingDays: 5,
      maxTradingDays: 30,
      features: [
        "Two-phase evaluation",
        "80% profit split",
        "10% max drawdown",
        "5 minimum trading days",
        "Instant funding after passing",
        "Priority support",
        "Weekly payouts"
      ]
    },
    {
      id: 4,
      name: "Elite Challenge",
      accountSize: "$200,000",
      price: "$599",
      amount: 599,
      profitTarget: "8%",
      maxDrawdown: "10%",
      minTradingDays: 5,
      maxTradingDays: 30,
      features: [
        "Two-phase evaluation",
        "80% profit split",
        "10% max drawdown",
        "5 minimum trading days",
        "Instant funding after passing",
        "Priority support",
        "Weekly payouts",
        "One-on-one mentorship"
      ]
    }
  ];
  
  const planId = params?.planId ? parseInt(params.planId) : 1;
  const selectedPlan = plans.find(p => p.id === planId) || plans[0];
  
  useEffect(() => {
    // If the URL doesn't contain a valid plan ID, redirect to the first plan
    if (!match) {
      navigate(`/checkout/1`);
    }
  }, [match, navigate]);
  
  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };
  
  const handlePreviousStep = () => {
    setStep(prevStep => prevStep - 1);
  };
  
  const handlePaymentSuccess = () => {
    setStep(3);
  };
  
  return (
    <PageTemplate
      title={`TRFX - ${selectedPlan.name} Checkout`}
      description="Complete your purchase to start your trading challenge"
    >
      <div className="container py-12">
        {/* Checkout progress */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-between items-center mb-2 relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-muted transform -translate-y-1/2 z-0"></div>
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-primary transform -translate-y-1/2 z-0" style={{
              width: `${((step - 1) / 2) * 100}%`
            }}></div>
            
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {stepNumber}
                </div>
                <span className="text-xs mt-1 text-muted-foreground">
                  {stepNumber === 1 ? 'Plan' : stepNumber === 2 ? 'Payment' : 'Confirmation'}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Step content */}
        <div className="mb-10">
          {step === 1 && (
            <PlanSummary 
              plan={selectedPlan} 
              handleNextStep={handleNextStep} 
            />
          )}
          
          {step === 2 && (
            <Card className="w-full max-w-3xl mx-auto shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Payment Details</CardTitle>
                <CardDescription>Secure payment for {selectedPlan.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between pb-4 border-b">
                    <span className="font-medium">{selectedPlan.name}</span>
                    <span>{selectedPlan.price}</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <Elements stripe={stripePromise} options={{
                  appearance: {
                    theme: 'night',
                    variables: {
                      colorPrimary: '#0070f3',
                      colorBackground: '#1f2937',
                      colorText: '#ffffff',
                      colorDanger: '#ef4444',
                      fontFamily: 'Inter, sans-serif',
                    },
                  },
                  mode: 'payment',
                  currency: 'usd',
                  amount: selectedPlan.amount * 100, // Stripe amounts are in cents
                }}>
                  <CheckoutForm 
                    planId={selectedPlan.id}
                    amount={selectedPlan.amount}
                    onSuccess={handlePaymentSuccess}
                  />
                </Elements>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={handlePreviousStep}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {step === 3 && <ConfirmationStep />}
        </div>
      </div>
    </PageTemplate>
  );
}