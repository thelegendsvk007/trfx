import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, ArrowRightLeft, DollarSign, PercentIcon } from "lucide-react";

interface RiskCalculatorProps {
  className?: string;
  defaultAccountSize?: number;
}

const RiskCalculator = ({ className = "", defaultAccountSize = 10000 }: RiskCalculatorProps) => {
  const [accountSize, setAccountSize] = useState<number>(defaultAccountSize);
  const [riskPercentage, setRiskPercentage] = useState<number>(1);
  const [entryPrice, setEntryPrice] = useState<number>(1.1000);
  const [stopLossPrice, setStopLossPrice] = useState<number>(1.0950);
  const [pipValue, setPipValue] = useState<number>(10);
  const [tradeDirection, setTradeDirection] = useState<"buy" | "sell">("buy");
  const [lotSize, setLotSize] = useState<number>(0);
  const [riskAmount, setRiskAmount] = useState<number>(0);
  const [pipDistance, setPipDistance] = useState<number>(0);
  const [isForex, setIsForex] = useState<boolean>(true);

  // Calculate everything when inputs change
  useEffect(() => {
    // Calculate risk amount based on account size and risk percentage
    const calculatedRiskAmount = (accountSize * riskPercentage) / 100;
    
    // Calculate pip distance between entry and stop loss
    let calculatedPipDistance: number;
    
    if (isForex) {
      calculatedPipDistance = tradeDirection === "buy"
        ? (entryPrice - stopLossPrice) * 10000
        : (stopLossPrice - entryPrice) * 10000;
    } else {
      calculatedPipDistance = tradeDirection === "buy"
        ? entryPrice - stopLossPrice
        : stopLossPrice - entryPrice;
    }
    
    // Ensure pip distance is always positive
    calculatedPipDistance = Math.abs(calculatedPipDistance);
    
    // Calculate lot size
    const calculatedLotSize = calculatedPipDistance > 0
      ? calculatedRiskAmount / (calculatedPipDistance * pipValue)
      : 0;
    
    setRiskAmount(calculatedRiskAmount);
    setPipDistance(calculatedPipDistance);
    setLotSize(calculatedLotSize);
  }, [accountSize, riskPercentage, entryPrice, stopLossPrice, pipValue, tradeDirection, isForex]);

  // Handle account size change
  const handleAccountSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAccountSize(isNaN(value) ? 0 : value);
  };

  // Handle entry price change
  const handleEntryPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setEntryPrice(isNaN(value) ? 0 : value);
  };

  // Handle stop loss price change
  const handleStopLossPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setStopLossPrice(isNaN(value) ? 0 : value);
  };

  // Handle pip value change
  const handlePipValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setPipValue(isNaN(value) ? 0 : value);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5" />
          <span>Risk Management Calculator</span>
        </CardTitle>
        <CardDescription>Calculate position size, risk, and reward</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Account and Risk Section */}
          <div className="grid gap-4">
            <div>
              <Label htmlFor="accountSize" className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                Account Size
              </Label>
              <div className="mt-1">
                <Input 
                  id="accountSize" 
                  type="number" 
                  value={accountSize} 
                  onChange={handleAccountSizeChange}
                  min={0}
                  step={1000}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="riskPercentage" className="flex items-center">
                <PercentIcon className="h-4 w-4 mr-1" />
                Risk Percentage: {riskPercentage}%
              </Label>
              <div className="mt-2">
                <Slider 
                  id="riskPercentage"
                  value={[riskPercentage]} 
                  onValueChange={(value) => setRiskPercentage(value[0])} 
                  min={0.1} 
                  max={5} 
                  step={0.1}
                />
              </div>
            </div>
          </div>
          
          {/* Instrument Type */}
          <div>
            <Label className="mb-2 block">Instrument Type</Label>
            <RadioGroup
              value={isForex ? "forex" : "other"} 
              onValueChange={(value) => setIsForex(value === "forex")}
              className="flex"
            >
              <div className="flex items-center space-x-2 mr-4">
                <RadioGroupItem value="forex" id="forex" />
                <Label htmlFor="forex" className="cursor-pointer">Forex</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="cursor-pointer">Other (Stocks, Commodities, etc.)</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Trade Direction */}
          <div>
            <Label className="mb-2 block">Trade Direction</Label>
            <RadioGroup 
              value={tradeDirection} 
              onValueChange={(value) => setTradeDirection(value as "buy" | "sell")}
              className="flex"
            >
              <div className="flex items-center space-x-2 mr-4">
                <RadioGroupItem value="buy" id="buy" />
                <Label htmlFor="buy" className="cursor-pointer text-green-500">Buy/Long</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sell" id="sell" />
                <Label htmlFor="sell" className="cursor-pointer text-red-500">Sell/Short</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Trade Parameters */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="entryPrice">Entry Price</Label>
              <div className="mt-1">
                <Input 
                  id="entryPrice" 
                  type="number" 
                  value={entryPrice} 
                  onChange={handleEntryPriceChange}
                  min={0}
                  step={isForex ? 0.0001 : 0.01}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="stopLossPrice">Stop Loss Price</Label>
              <div className="mt-1">
                <Input 
                  id="stopLossPrice" 
                  type="number" 
                  value={stopLossPrice} 
                  onChange={handleStopLossPriceChange}
                  min={0}
                  step={isForex ? 0.0001 : 0.01}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="pipValue">Pip Value ($)</Label>
              <div className="mt-1">
                <Input 
                  id="pipValue" 
                  type="number" 
                  value={pipValue} 
                  onChange={handlePipValueChange}
                  min={0}
                  step={1}
                />
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="bg-muted/30 p-4 rounded-lg space-y-3">
            <h3 className="font-medium flex items-center">
              <ArrowRightLeft className="h-4 w-4 mr-2" />
              Results
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Risk Amount</div>
                <div className="text-lg font-semibold">${riskAmount.toFixed(2)}</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">Stop Distance</div>
                <div className="text-lg font-semibold">{pipDistance.toFixed(1)} {isForex ? "pips" : "points"}</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">Position Size</div>
                <div className="text-lg font-semibold">{lotSize > 0 ? lotSize.toFixed(2) : 0} {isForex ? "Lots" : "Units"}</div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">Risk-to-Reward (1:2)</div>
                <div className="text-lg font-semibold">${(riskAmount * 2).toFixed(2)}</div>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground">
            Note: This calculator provides estimates for educational purposes only. 
            Always verify calculations before placing actual trades.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskCalculator;