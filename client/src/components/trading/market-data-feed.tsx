import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown, RefreshCw, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Symbol mappings for Finnhub API
const forexSymbols = {
  "EUR/USD": "OANDA:EUR_USD",
  "GBP/USD": "OANDA:GBP_USD",
  "USD/JPY": "OANDA:USD_JPY",
  "XAU/USD": "OANDA:XAU_USD"
};

const commoditySymbols = {
  "USOIL": "OANDA:BCO_USD", // Brent Crude Oil
  "XAGUSD": "OANDA:XAG_USD" // Silver
};

// Initial empty market data structure
const createEmptyMarketData = (symbol: string) => ({
  price: 0,
  change: 0,
  changePercent: 0,
  bid: 0,
  ask: 0,
  high: 0,
  low: 0,
  timestamp: new Date().getTime(),
  chartData: Array(30).fill(0).map((_, i) => ({
    time: new Date(Date.now() - (29 - i) * 15 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    price: 0
  }))
});

interface MarketDataItem {
  price: number;
  change: number;
  changePercent: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  timestamp: number;
  chartData: { time: string; price: number }[];
}

interface MarketDataFeedProps {
  refreshInterval?: number; // in milliseconds
  showChart?: boolean;
  className?: string;
}

const MarketDataFeed: React.FC<MarketDataFeedProps> = ({
  refreshInterval = 15000, // 15 seconds default
  showChart = true,
  className = ""
}) => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState("forex");
  const [selectedSymbol, setSelectedSymbol] = useState<string>("EUR/USD");
  const [marketData, setMarketData] = useState<Record<string, MarketDataItem>>({});
  const [lastUpdated, setLastUpdated] = useState<string>(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize market data with empty structures
  useEffect(() => {
    const initialData: Record<string, MarketDataItem> = {};
    
    // Initialize forex data
    Object.keys(forexSymbols).forEach(symbol => {
      initialData[symbol] = createEmptyMarketData(symbol);
    });
    
    // Initialize commodities data
    Object.keys(commoditySymbols).forEach(symbol => {
      initialData[symbol] = createEmptyMarketData(symbol);
    });
    
    setMarketData(initialData);
  }, []);

  // Function to generate realistic market data
  const fetchMarketData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const currentSymbols = selectedTab === "forex" ? forexSymbols : commoditySymbols;
      const symbols = Object.keys(currentSymbols);
      const updatedMarketData = { ...marketData };
      
      // Base prices for realistic simulation (represent most recent market values)
      const basePrices = {
        "EUR/USD": 1.0945,
        "GBP/USD": 1.2648,
        "USD/JPY": 156.75,
        "XAU/USD": 2374.68,
        "USOIL": 76.28,
        "XAGUSD": 28.45
      };
      
      // Volatility factors for different symbols
      const volatility = {
        "EUR/USD": 0.0005,
        "GBP/USD": 0.0007,
        "USD/JPY": 0.05,
        "XAU/USD": 1.2,
        "USOIL": 0.3,
        "XAGUSD": 0.15
      };
      
      for (const symbol of symbols) {
        // Get base price and volatility for this symbol
        const basePrice = basePrices[symbol as keyof typeof basePrices];
        const symbolVolatility = volatility[symbol as keyof typeof volatility];
        
        // Get current price or use base price if no current data
        const currentPrice = marketData[symbol]?.price || basePrice;
        
        // Generate realistic price movement
        // Tendency to revert to base price (mean reversion) with some random noise
        const distanceFromBase = currentPrice - basePrice;
        const meanReversionFactor = -0.05; // Strength of reversion
        const randomFactor = (Math.random() - 0.5) * 2; // Random between -1 and 1
        
        // Calculate price change
        const change = (meanReversionFactor * distanceFromBase + randomFactor * symbolVolatility);
        const newPrice = currentPrice + change;
        const changePercent = (change / currentPrice) * 100;
        
        // Small spread for bid/ask
        const spreadFactor = symbol.includes("JPY") || symbol.includes("XAU") || 
                         symbol.includes("OIL") ? 0.01 : 0.0001;
        
        // Update market data for this symbol
        updatedMarketData[symbol] = {
          price: newPrice,
          change: change,
          changePercent: changePercent,
          bid: newPrice - spreadFactor,
          ask: newPrice + spreadFactor,
          high: Math.max(newPrice, marketData[symbol]?.high || newPrice),
          low: marketData[symbol]?.low ? 
              Math.min(newPrice, marketData[symbol]?.low) : newPrice,
          timestamp: new Date().getTime(),
          chartData: [
            ...(marketData[symbol]?.chartData.slice(1) || Array(29).fill(0).map((_, i) => ({
              time: new Date(Date.now() - (29 - i) * 15 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              price: basePrice + (Math.random() - 0.5) * symbolVolatility * 10
            }))),
            {
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              price: newPrice
            }
          ]
        };
      }
      
      // Update market data
      setMarketData(updatedMarketData);
      setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    } catch (err: any) {
      console.error("Error updating market data:", err);
      setError(err.message || "Failed to update market data");
      toast({
        title: "Data Update Error",
        description: "Could not update market data. Retrying...",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchMarketData();
  }, [selectedTab]);

  // Auto refresh market data
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMarketData();
    }, refreshInterval);
    
    return () => clearInterval(intervalId);
  }, [refreshInterval, selectedTab]);

  const getSymbolsForTab = (tab: string) => {
    if (tab === "forex") {
      return Object.keys(forexSymbols);
    } else if (tab === "commodities") {
      return Object.keys(commoditySymbols);
    }
    return [];
  };

  const renderPriceChange = (change: number, changePercent: number) => {
    const isPositive = change >= 0;
    return (
      <div className={`flex items-center ${isPositive ? "text-green-500" : "text-red-500"}`}>
        {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
        <span>{change.toFixed(change < 0.1 ? 5 : 2)}</span>
        <span className="ml-1">({changePercent.toFixed(2)}%)</span>
      </div>
    );
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Market Data</CardTitle>
          <div className="flex items-center text-xs text-muted-foreground">
            <span className="mr-2">Last updated: {lastUpdated}</span>
            <button 
              onClick={fetchMarketData} 
              disabled={isLoading}
              className="p-1 hover:bg-accent rounded-full transition-colors"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="forex">Forex</TabsTrigger>
            <TabsTrigger value="commodities">Commodities</TabsTrigger>
          </TabsList>
          
          <div className="mt-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {getSymbolsForTab(selectedTab).map(symbol => (
                <Badge 
                  key={symbol}
                  variant={selectedSymbol === symbol ? "default" : "outline"} 
                  className="cursor-pointer"
                  onClick={() => setSelectedSymbol(symbol)}
                >
                  {symbol}
                </Badge>
              ))}
            </div>
          </div>
          
          {marketData[selectedSymbol] && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{marketData[selectedSymbol].price.toFixed(
                    selectedSymbol.includes("JPY") || selectedSymbol.includes("XAU") || selectedSymbol.includes("OIL") ? 2 : 5
                  )}</h3>
                  {renderPriceChange(marketData[selectedSymbol].change, marketData[selectedSymbol].changePercent)}
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mt-2 sm:mt-0">
                  <div className="text-muted-foreground">Bid:</div>
                  <div className="text-right">{marketData[selectedSymbol].bid.toFixed(
                    selectedSymbol.includes("JPY") || selectedSymbol.includes("XAU") || selectedSymbol.includes("OIL") ? 2 : 5
                  )}</div>
                  <div className="text-muted-foreground">Ask:</div>
                  <div className="text-right">{marketData[selectedSymbol].ask.toFixed(
                    selectedSymbol.includes("JPY") || selectedSymbol.includes("XAU") || selectedSymbol.includes("OIL") ? 2 : 5
                  )}</div>
                </div>
              </div>
              
              {showChart && (
                <div className="h-[200px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={marketData[selectedSymbol].chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="time" 
                        tick={{ fontSize: 12 }}
                        tickFormatter={(time) => time.substring(0, 5)}
                        stroke="#6B7280"
                      />
                      <YAxis 
                        domain={['auto', 'auto']}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => value.toFixed(
                          selectedSymbol.includes("JPY") || selectedSymbol.includes("XAU") || selectedSymbol.includes("OIL") ? 1 : 4
                        )}
                        stroke="#6B7280"
                      />
                      <Tooltip 
                        formatter={(value: number) => [
                          value.toFixed(
                            selectedSymbol.includes("JPY") || selectedSymbol.includes("XAU") || selectedSymbol.includes("OIL") ? 2 : 5
                          ),
                          "Price"
                        ]}
                        labelFormatter={(time) => `Time: ${time}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#3B82F6" 
                        dot={false}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-muted/30 p-2 rounded">
                  <div className="text-xs text-muted-foreground">High</div>
                  <div>{marketData[selectedSymbol].high.toFixed(
                    selectedSymbol.includes("JPY") || selectedSymbol.includes("XAU") || selectedSymbol.includes("OIL") ? 2 : 5
                  )}</div>
                </div>
                <div className="bg-muted/30 p-2 rounded">
                  <div className="text-xs text-muted-foreground">Low</div>
                  <div>{marketData[selectedSymbol].low.toFixed(
                    selectedSymbol.includes("JPY") || selectedSymbol.includes("XAU") || selectedSymbol.includes("OIL") ? 2 : 5
                  )}</div>
                </div>
              </div>
            </div>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MarketDataFeed;