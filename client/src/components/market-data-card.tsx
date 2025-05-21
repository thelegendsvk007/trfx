import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";
import { FinhubChart } from "./finhubb-chart";

const forexSymbols = [
  { name: "EUR/USD", symbol: "FX:EURUSD", price: "1.09445", change: "-0.00005", changePercent: "-0.00%" },
  { name: "GBP/USD", symbol: "FX:GBPUSD", price: "1.2675", change: "-0.0022", changePercent: "-0.22%" },
  { name: "USD/JPY", symbol: "FX:USDJPY", price: "153.78", change: "+0.15", changePercent: "+0.10%" },
  { name: "XAU/USD", symbol: "OANDA:XAUUSD", price: "2,345.80", change: "+18.25", changePercent: "+0.78%" }
];

const commoditiesSymbols = [
  { name: "Gold", symbol: "OANDA:XAUUSD", price: "2,345.80", change: "+18.25", changePercent: "+0.78%" },
  { name: "Silver", symbol: "OANDA:XAGUSD", price: "30.45", change: "+0.35", changePercent: "+1.16%" },
  { name: "Oil (WTI)", symbol: "OANDA:BCOUSD", price: "78.92", change: "-0.45", changePercent: "-0.57%" },
  { name: "Natural Gas", symbol: "OANDA:NATGASUSD", price: "2.34", change: "+0.04", changePercent: "+1.74%" }
];

export function MarketDataCard() {
  const [activeTab, setActiveTab] = useState("forex");
  const [selectedSymbol, setSelectedSymbol] = useState(forexSymbols[0]);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const symbols = activeTab === "forex" ? forexSymbols : commoditiesSymbols;

  const updateTime = () => {
    setLastUpdated(new Date());
  };

  useEffect(() => {
    // Set default selected symbol when tab changes
    setSelectedSymbol(activeTab === "forex" ? forexSymbols[0] : commoditiesSymbols[0]);
  }, [activeTab]);

  return (
    <Card className="border-border/50 h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Market Data</CardTitle>
          <div className="flex items-center text-xs text-muted-foreground">
            <span className="mr-2">Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={updateTime}>
              <RefreshCw className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b border-border/50">
            <TabsList className="w-full bg-transparent border-b-0 rounded-none h-auto p-0">
              <TabsTrigger 
                value="forex" 
                className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-2"
              >
                Forex
              </TabsTrigger>
              <TabsTrigger 
                value="commodities" 
                className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-2"
              >
                Commodities
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
            <div className="flex flex-col border-r border-border/50">
              {symbols.map((item) => (
                <Button
                  key={item.symbol}
                  variant="ghost"
                  className={`justify-start rounded-none h-auto py-3 px-4 ${selectedSymbol.symbol === item.symbol ? 'bg-muted' : ''}`}
                  onClick={() => setSelectedSymbol(item)}
                >
                  <div className="flex flex-col items-start w-full">
                    <div className="flex justify-between w-full items-center">
                      <span className={`font-medium ${selectedSymbol.symbol === item.symbol ? 'text-primary' : ''}`}>
                        {item.name}
                      </span>
                      <span className="font-mono">{item.price}</span>
                    </div>
                    <div className="flex justify-between w-full items-center mt-1">
                      <span className="text-xs text-muted-foreground">
                        {activeTab === "forex" ? "FX" : "Commodity"}
                      </span>
                      <span className={`text-xs ${item.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                        {item.change} ({item.changePercent})
                      </span>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
            
            <div className="h-full">
              <div className="flex flex-col h-full">
                <div className="h-full">
                  <FinhubChart
                    symbol={selectedSymbol.symbol}
                    height="100%"
                    interval="60"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}