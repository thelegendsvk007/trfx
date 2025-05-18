import { useState } from "react";
import { Activity, ArrowLeft, CheckCircle, CreditCard, LockKeyhole, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  // Sample challenge plan data based on the URL parameter
  // In a real application, this would be fetched from the server
  const plan = {
    id: 2,
    name: "Professional Challenge",
    accountSize: "$50,000",
    price: "$199",
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
  };
  
  // Tax and total calculation
  const priceValue = parseFloat(plan.price.replace(/[^0-9.]/g, ""));
  const tax = priceValue * 0.08; // 8% tax
  const total = priceValue + tax;
  
  const handleNextStep = () => {
    setStep(step + 1);
  };
  
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  
  const renderPaymentForm = () => {
    switch(paymentMethod) {
      case "card":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input id="cardName" placeholder="John Smith" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
          </div>
        );
      case "paypal":
        return (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">You will be redirected to PayPal to complete your purchase.</p>
            <Button className="bg-[#0070ba] hover:bg-[#005ea6] text-white">Proceed to PayPal</Button>
          </div>
        );
      case "crypto":
        return (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">You will be redirected to our crypto payment processor.</p>
            <Button className="bg-gradient-to-r from-[#f7931a] to-[#ffad60] hover:opacity-90 text-white">Pay with Crypto</Button>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
            <Button variant="ghost" size="sm">
              Support
            </Button>
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container py-12 flex flex-1">
        <div className="max-w-6xl mx-auto w-full">
          {/* Checkout steps */}
          <div className="flex justify-between mb-8">
            <div className={cn(
              "flex flex-col items-center",
              step >= 1 ? "text-primary" : "text-muted-foreground"
            )}>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2",
                step >= 1 ? "border-primary bg-primary/10" : "border-muted-foreground/30"
              )}>
                <span className="font-bold">1</span>
              </div>
              <span className="text-sm">Plan Details</span>
            </div>
            
            <div className="grow mx-4 flex items-center justify-center">
              <div className={cn(
                "h-1 w-full",
                step >= 2 ? "bg-primary" : "bg-muted"
              )}></div>
            </div>
            
            <div className={cn(
              "flex flex-col items-center",
              step >= 2 ? "text-primary" : "text-muted-foreground"
            )}>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2",
                step >= 2 ? "border-primary bg-primary/10" : "border-muted-foreground/30"
              )}>
                <span className="font-bold">2</span>
              </div>
              <span className="text-sm">Payment</span>
            </div>
            
            <div className="grow mx-4 flex items-center justify-center">
              <div className={cn(
                "h-1 w-full",
                step >= 3 ? "bg-primary" : "bg-muted"
              )}></div>
            </div>
            
            <div className={cn(
              "flex flex-col items-center",
              step >= 3 ? "text-primary" : "text-muted-foreground"
            )}>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2",
                step >= 3 ? "border-primary bg-primary/10" : "border-muted-foreground/30"
              )}>
                <span className="font-bold">3</span>
              </div>
              <span className="text-sm">Confirmation</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main checkout form */}
            <div className="md:col-span-8 space-y-6">
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Challenge Plan Details</CardTitle>
                    <CardDescription>Review your selected plan and confirm details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">Account size: {plan.accountSize}</p>
                      </div>
                      <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {plan.price}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Plan Features</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Trading Rules</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Profit Target</p>
                          <p className="font-medium">{plan.profitTarget}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Max Drawdown</p>
                          <p className="font-medium">{plan.maxDrawdown}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Min Trading Days</p>
                          <p className="font-medium">{plan.minTradingDays} days</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Max Trading Days</p>
                          <p className="font-medium">{plan.maxTradingDays} days</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={() => window.history.back()}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Plans
                    </Button>
                    <Button onClick={handleNextStep} className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Proceed to Payment
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Choose your preferred payment method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className={cn(
                          "flex items-center space-x-3 space-y-0 border rounded-md p-4 cursor-pointer",
                          paymentMethod === "card" ? "border-primary" : "border-border"
                        )}>
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center cursor-pointer">
                            <CreditCard className="h-5 w-5 mr-2" />
                            <span>Credit/Debit Card</span>
                          </Label>
                        </div>
                        
                        <div className={cn(
                          "flex items-center space-x-3 space-y-0 border rounded-md p-4 cursor-pointer",
                          paymentMethod === "paypal" ? "border-primary" : "border-border"
                        )}>
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="cursor-pointer">
                            <div className="flex items-center">
                              <span className="text-[#0070ba] font-bold mr-0.5">Pay</span>
                              <span className="text-[#0070ba] font-bold text-xs italic">Pal</span>
                            </div>
                          </Label>
                        </div>
                        
                        <div className={cn(
                          "flex items-center space-x-3 space-y-0 border rounded-md p-4 cursor-pointer",
                          paymentMethod === "crypto" ? "border-primary" : "border-border"
                        )}>
                          <RadioGroupItem value="crypto" id="crypto" />
                          <Label htmlFor="crypto" className="flex items-center cursor-pointer">
                            <span className="mr-2">₿</span>
                            <span>Cryptocurrency</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Separator />
                    
                    {renderPaymentForm()}
                    
                    <div className="bg-muted/50 p-4 rounded-md flex items-center text-sm">
                      <LockKeyhole className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-muted-foreground">All payments are securely processed. Your payment information is never stored on our servers.</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={handlePreviousStep}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={handleNextStep} className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Complete Payment
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              {step === 3 && (
                <Card>
                  <CardHeader className="text-center pb-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl">Payment Successful!</CardTitle>
                    <CardDescription>Your challenge has been purchased and is ready to start</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 pb-0 text-center">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-medium">Order Summary</h3>
                        <div className="flex justify-between max-w-xs mx-auto">
                          <span className="text-muted-foreground">Plan:</span>
                          <span>{plan.name}</span>
                        </div>
                        <div className="flex justify-between max-w-xs mx-auto">
                          <span className="text-muted-foreground">Account Size:</span>
                          <span>{plan.accountSize}</span>
                        </div>
                        <div className="flex justify-between max-w-xs mx-auto">
                          <span className="text-muted-foreground">Amount Paid:</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">What's Next?</h3>
                        <p className="text-sm text-muted-foreground max-w-md mx-auto">
                          Your trading account credentials will be sent to your email within the next 15 minutes. 
                          You can start trading as soon as you receive them.
                        </p>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded-lg max-w-md mx-auto text-sm">
                        <div className="flex items-center mb-2">
                          <ShieldCheck className="h-4 w-4 text-primary mr-2" />
                          <span className="font-medium">Important Instructions</span>
                        </div>
                        <ul className="space-y-1 text-muted-foreground text-left">
                          <li>• Remember to follow all trading rules</li>
                          <li>• Trade for at least 5 days during the challenge</li>
                          <li>• Keep your drawdown below 10%</li>
                          <li>• Reach the 8% profit target to advance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-6">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Go to Dashboard
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>
            
            {/* Order summary */}
            <div className="md:col-span-4">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{plan.name}</span>
                    <span>{plan.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <div className="pt-4">
                    <div className="bg-muted/30 p-3 rounded-md text-xs text-muted-foreground">
                      <p>By proceeding with your purchase, you agree to our Terms of Service and acknowledge that you have read our Privacy Policy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-muted/30 backdrop-blur-sm border-t border-border mt-auto py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TradeFunded. All rights reserved.
        </div>
      </footer>
    </div>
  );
}