import { useState, useEffect } from 'react';
import { ArrowRight, Calculator, DollarSign, Users, TrendingUp } from 'lucide-react';
import PageTemplate from '@/components/page-template';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CommissionCalculatorPage() {
  // State for the calculator
  const [tier, setTier] = useState('standard');
  const [referrals, setReferrals] = useState(10);
  const [avgPurchase, setAvgPurchase] = useState(1000);
  const [monthly, setMonthly] = useState(true);
  
  // Commission rates based on tier
  const commissionRates = {
    standard: 0.15,
    premium: 0.25,
    elite: 0.35
  };
  
  // Calculate total commissions
  const calculateCommission = () => {
    const rate = commissionRates[tier as keyof typeof commissionRates];
    const totalPurchaseValue = referrals * avgPurchase;
    return totalPurchaseValue * rate;
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };
  
  return (
    <PageTemplate 
      title="TRFX Affiliate Commission Calculator | Calculate Your Potential Earnings"
      description="Use our commission calculator to estimate your potential earnings as a TRFX affiliate based on your referrals and commission tier."
    >
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Header Section */}
        <section className="relative py-16 md:py-24 z-10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                <Calculator className="h-6 w-6 text-primary mr-2" />
                <span className="font-medium text-primary">Affiliate Earnings</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Commission Calculator
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Calculate your potential earnings as a TRFX affiliate.
              </p>
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="relative py-10 md:py-16 z-10">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="border border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Estimate Your Affiliate Earnings</CardTitle>
                  <CardDescription>
                    Adjust the parameters below to see your potential commission earnings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-8">
                      {/* Affiliate Tier */}
                      <div className="space-y-4">
                        <Label className="text-base font-medium">Select Your Affiliate Tier</Label>
                        <RadioGroup 
                          value={tier} 
                          onValueChange={setTier}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          <div className="flex items-center space-x-2 border border-border/50 p-4 rounded-md hover:border-primary/50 transition-colors">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard" className="flex flex-col">
                              <span className="font-medium">Standard</span>
                              <span className="text-sm text-muted-foreground">15% Commission</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border border-border/50 p-4 rounded-md hover:border-primary/50 transition-colors">
                            <RadioGroupItem value="premium" id="premium" />
                            <Label htmlFor="premium" className="flex flex-col">
                              <span className="font-medium">Premium</span>
                              <span className="text-sm text-muted-foreground">25% Commission</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border border-border/50 p-4 rounded-md hover:border-primary/50 transition-colors">
                            <RadioGroupItem value="elite" id="elite" />
                            <Label htmlFor="elite" className="flex flex-col">
                              <span className="font-medium">Elite</span>
                              <span className="text-sm text-muted-foreground">35% Commission</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {/* Number of Referrals */}
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <Label className="text-base font-medium">Number of Referrals</Label>
                          <span className="font-medium">{referrals} {monthly ? 'per month' : 'total'}</span>
                        </div>
                        <Slider
                          value={[referrals]}
                          min={1}
                          max={100}
                          step={1}
                          onValueChange={(value) => setReferrals(value[0])}
                          className="py-4"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>1</span>
                          <span>50</span>
                          <span>100</span>
                        </div>
                        <div className="pt-2">
                          <RadioGroup 
                            value={monthly ? 'monthly' : 'total'} 
                            onValueChange={(value) => setMonthly(value === 'monthly')}
                            className="flex space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="monthly" id="monthly" />
                              <Label htmlFor="monthly">Monthly</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="total" id="total" />
                              <Label htmlFor="total">One-time</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      
                      {/* Average Purchase Value */}
                      <div className="space-y-4">
                        <Label htmlFor="avgPurchase" className="text-base font-medium">Average Purchase Value</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="avgPurchase"
                            type="number"
                            value={avgPurchase}
                            onChange={(e) => setAvgPurchase(parseInt(e.target.value) || 0)}
                            className="pl-9"
                            min={0}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Our challenge plans range from $500 to $2,000 per purchase
                        </p>
                      </div>
                    </div>
                    
                    {/* Results Card */}
                    <div className="bg-muted/30 rounded-xl p-6 border border-border/50 flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold mb-2">Your Estimated Earnings</h3>
                        <p className="text-muted-foreground">Based on your selections</p>
                      </div>
                      
                      <div className="space-y-6 flex-grow">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-background p-4 rounded-lg border border-border/50 text-center">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mx-auto mb-2">
                              <DollarSign className="h-5 w-5" />
                            </div>
                            <div className="text-sm text-muted-foreground mb-1">
                              Commission Rate
                            </div>
                            <div className="text-2xl font-bold">
                              {(commissionRates[tier as keyof typeof commissionRates] * 100)}%
                            </div>
                          </div>
                          
                          <div className="bg-background p-4 rounded-lg border border-border/50 text-center">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mx-auto mb-2">
                              <Users className="h-5 w-5" />
                            </div>
                            <div className="text-sm text-muted-foreground mb-1">
                              Total Referrals
                            </div>
                            <div className="text-2xl font-bold">
                              {referrals}
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-background p-6 rounded-lg border border-border/50">
                          <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-muted-foreground">
                              Total Purchase Value:
                            </div>
                            <div className="font-medium">
                              {formatCurrency(referrals * avgPurchase)}
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="font-medium">Your Commission:</div>
                            <div className="text-2xl font-bold text-primary">
                              {formatCurrency(calculateCommission())}
                            </div>
                          </div>
                          
                          {monthly && (
                            <div className="mt-4 text-muted-foreground text-sm">
                              That's {formatCurrency(calculateCommission() * 12)} per year!
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                          Become an Affiliate
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-12 p-6 border border-border/50 rounded-lg bg-muted/30">
                <h3 className="text-xl font-semibold mb-4">How Your Earnings Can Grow</h3>
                
                <div className="space-y-6">
                  <p>
                    As your performance improves, you can advance through our affiliate tiers to earn higher commission rates:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-background p-4 rounded-lg border border-border/50">
                      <h4 className="font-medium mb-2">Standard Tier</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 15% commission rate</li>
                        <li>• New affiliates</li>
                        <li>• 30-day cookie duration</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border border-border/50">
                      <h4 className="font-medium mb-2">Premium Tier</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 25% commission rate</li>
                        <li>• After 10+ successful referrals</li>
                        <li>• 45-day cookie duration</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border border-border/50">
                      <h4 className="font-medium mb-2">Elite Tier</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 35% commission rate</li>
                        <li>• After 50+ successful referrals</li>
                        <li>• 60-day cookie duration</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Commissions are paid monthly for all completed referrals. A referral is considered complete when a trader purchases any TRFX challenge plan through your affiliate link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}