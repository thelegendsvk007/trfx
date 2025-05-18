import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useStripe } from "@stripe/react-stripe-js";
import PageTemplate from "@/components/page-template";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PaymentConfirmationPage() {
  const [, navigate] = useLocation();
  const stripe = useStripe();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Extract the payment intent client secret from the URL
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      setStatus("error");
      setMessage("Could not find payment information. Please contact support.");
      return;
    }

    stripe.retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }) => {
        if (!paymentIntent) {
          throw new Error("Payment information not found");
        }

        switch (paymentIntent.status) {
          case "succeeded":
            setStatus("success");
            setMessage("Your payment was successful! Your trading challenge account will be set up shortly.");
            toast({
              title: "Payment Successful",
              description: "Thank you for your purchase!",
            });
            break;
          case "processing":
            setStatus("loading");
            setMessage("Your payment is processing. We'll update you when payment is received.");
            break;
          case "requires_payment_method":
            setStatus("error");
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setStatus("error");
            setMessage("Something went wrong with your payment. Please contact support.");
            break;
        }
      })
      .catch((err) => {
        setStatus("error");
        setMessage(err.message || "An error occurred while confirming your payment.");
      });
  }, [stripe, toast]);

  return (
    <PageTemplate
      title="TRFX - Payment Confirmation"
      description="Confirm your trading challenge payment status"
    >
      <div className="container max-w-3xl py-16">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-5">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              {status === "loading" && <Loader2 className="h-12 w-12 text-primary animate-spin" />}
              {status === "success" && <CheckCircle className="h-12 w-12 text-green-500" />}
              {status === "error" && <XCircle className="h-12 w-12 text-red-500" />}
            </div>
            <CardTitle className="text-2xl">
              {status === "loading" && "Processing Your Payment"}
              {status === "success" && "Payment Successful!"}
              {status === "error" && "Payment Issue"}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">{message}</p>
            
            {status === "success" && (
              <div className="bg-muted/40 p-4 rounded-md text-left mb-6">
                <h3 className="font-medium mb-2">What happens next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Your trading account will be set up within the next 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>You'll receive an email with your login credentials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Your challenge will begin once you make your first trade</span>
                  </li>
                </ul>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
            {status === "success" && (
              <>
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full sm:w-auto"
                  onClick={() => navigate("/dashboard")}
                >
                  Go to Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/trading")}
                >
                  Explore Trading Platforms
                </Button>
              </>
            )}
            
            {status === "error" && (
              <>
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full sm:w-auto"
                  onClick={() => navigate("/checkout/1")}
                >
                  Try Again
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/support")}
                >
                  Contact Support
                </Button>
              </>
            )}
            
            {status === "loading" && (
              <Button 
                variant="outline" 
                className="w-full sm:w-auto"
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </PageTemplate>
  );
}