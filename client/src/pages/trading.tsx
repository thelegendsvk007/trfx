import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import PageTemplate from "@/components/page-template";
import TradingViewChart from "@/components/trading-view-chart";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { apiRequest } from "@/lib/queryClient";

export default function TradingPage() {
  const { user, isAuthenticated } = useAuth();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState("XAUUSD");
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");
  
  // Fetch user's trading accounts
  const { data: tradingAccounts, isLoading: isLoadingAccounts } = useQuery({
    queryKey: ['/api/trading-accounts'],
    enabled: isAuthenticated,
    queryFn: async () => {
      if (!user) return [];
      const res = await apiRequest("GET", "/api/trading-accounts");
      const data = await res.json();
      return data.accounts || [];
    }
  });
  
  // Fetch selected account details
  const { data: accountDetails, isLoading: isLoadingDetails } = useQuery({
    queryKey: ['/api/trading-accounts', selectedAccount],
    enabled: !!selectedAccount,
    queryFn: async () => {
      if (!selectedAccount) return null;
      const res = await apiRequest("GET", `/api/trading-accounts/${selectedAccount}`);
      const data = await res.json();
      return data;
    }
  });
  
  // Fetch recent trades for selected account
  const { data: recentTrades, isLoading: isLoadingTrades } = useQuery({
    queryKey: ['/api/trades', selectedAccount],
    enabled: !!selectedAccount,
    queryFn: async () => {
      if (!selectedAccount) return [];
      const res = await apiRequest("GET", `/api/trading-accounts/${selectedAccount}/trades`);
      const data = await res.json();
      return data.trades || [];
    }
  });
  
  // Set the first account as selected when data loads
  useEffect(() => {
    if (tradingAccounts && tradingAccounts.length > 0 && !selectedAccount) {
      setSelectedAccount(tradingAccounts[0].id.toString());
    }
  }, [tradingAccounts, selectedAccount]);
  
  // Symbols for trading
  const symbols = [
    { name: "Gold", symbol: "XAUUSD" },
    { name: "Euro/USD", symbol: "EURUSD" },
    { name: "GBP/USD", symbol: "GBPUSD" },
    { name: "USD/JPY", symbol: "USDJPY" },
    { name: "Bitcoin/USD", symbol: "BTCUSD" },
    { name: "Ethereum/USD", symbol: "ETHUSD" },
  ];
  
  // Timeframes for chart
  const timeframes = [
    { label: "1 Minute", value: "1" },
    { label: "5 Minutes", value: "5" },
    { label: "15 Minutes", value: "15" },
    { label: "1 Hour", value: "60" },
    { label: "4 Hours", value: "240" },
    { label: "1 Day", value: "1D" },
    { label: "1 Week", value: "1W" },
  ];
  
  // Format a percentage with color
  const formatPercentage = (value: number) => {
    const isPositive = value >= 0;
    return (
      <span className={isPositive ? "text-green-500" : "text-red-500"}>
        {isPositive ? "+" : ""}{value.toFixed(2)}%
      </span>
    );
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  // Mock data for demo purposes
  const demoAccount = {
    id: 1,
    accountNumber: "FT123456",
    balance: 53841,
    startingBalance: 50000,
    status: "active",
    profit: 3841,
    profitPercentage: 7.68,
    drawdown: 2.4,
    maxDrawdown: 10,
    phase: "phase1",
    target: 8,
    meetsTargets: true
  };
  
  // Use actual account data if available, otherwise use demo data
  const account = accountDetails || demoAccount;
  
  return (
    <PageTemplate
      title="TRFX - Trading Platform"
      description="Trade with TRFX's advanced trading platform and keep track of your trading account performance."
    >
      <div className="container py-6 space-y-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4 space-y-6">
            {/* Account Selection */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Your Accounts</CardTitle>
                <CardDescription>
                  Select a trading account to view
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select
                  value={selectedAccount || ""}
                  onValueChange={(value) => setSelectedAccount(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    {isLoadingAccounts ? (
                      <SelectItem value="loading" disabled>Loading accounts...</SelectItem>
                    ) : tradingAccounts && tradingAccounts.length > 0 ? (
                      tradingAccounts.map((account: any) => (
                        <SelectItem key={account.id} value={account.id.toString()}>
                          {account.accountNumber} - {account.balance}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="demo" disabled>Demo Account</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
            
            {/* Account Stats */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Account Stats</CardTitle>
                <div className="flex justify-between items-center">
                  <CardDescription>
                    Professional Challenge
                  </CardDescription>
                  <Badge variant={account.status === "active" ? "default" : "secondary"}>
                    {account.status === "active" ? "Active" : account.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground">Account Size</h4>
                    <p className="text-2xl font-bold text-blue-500">
                      {formatCurrency(account.startingBalance)}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground">Current Balance</h4>
                    <p className="text-2xl font-bold">
                      {formatCurrency(account.balance)}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-muted-foreground">Profit</h4>
                    <p className="text-xl font-bold text-green-500">
                      +{formatCurrency(account.profit)} ({formatPercentage(account.profitPercentage)})
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground">Drawdown</h4>
                    <p className="text-xl font-bold">
                      {account.drawdown}% / {account.maxDrawdown}%
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Progress to Phase 2</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${(account.profitPercentage / account.target) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs">
                    <span>0%</span>
                    <span className={account.meetsTargets ? "text-green-500 font-bold" : ""}>
                      {account.target}% Target
                    </span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600">
                  Start Trading Now
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full lg:w-3/4 space-y-6">
            {/* Chart Controls */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <CardTitle>Trading Chart</CardTitle>
                  <div className="flex gap-3">
                    <Select
                      value={selectedSymbol}
                      onValueChange={setSelectedSymbol}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select symbol" />
                      </SelectTrigger>
                      <SelectContent>
                        {symbols.map((item) => (
                          <SelectItem key={item.symbol} value={item.symbol}>
                            {item.name} ({item.symbol})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select
                      value={selectedTimeframe}
                      onValueChange={setSelectedTimeframe}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeframes.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Trading Chart */}
                <div className="w-full h-[500px] bg-card border rounded-md overflow-hidden">
                  <TradingViewChart 
                    symbol={selectedSymbol}
                    interval={selectedTimeframe}
                    height="100%"
                    autosize
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Trades */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
                <CardDescription>
                  View your latest trading activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="open">
                  <TabsList className="mb-4">
                    <TabsTrigger value="open">Open Positions</TabsTrigger>
                    <TabsTrigger value="closed">Closed Positions</TabsTrigger>
                    <TabsTrigger value="pending">Pending Orders</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="open" className="space-y-4">
                    {isLoadingTrades ? (
                      <div className="text-center py-4">Loading trades...</div>
                    ) : recentTrades && recentTrades.length > 0 ? (
                      <div className="border rounded-md">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-muted/50 border-b">
                              <th className="text-left p-3">Symbol</th>
                              <th className="text-left p-3">Type</th>
                              <th className="text-left p-3">Open Price</th>
                              <th className="text-left p-3">Lot Size</th>
                              <th className="text-right p-3">Profit/Loss</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recentTrades.map((trade: any) => (
                              <tr key={trade.id} className="border-b hover:bg-muted/30">
                                <td className="p-3">{trade.symbol}</td>
                                <td className="p-3">
                                  <Badge variant={trade.type === 'buy' ? 'default' : 'destructive'}>
                                    {trade.type === 'buy' ? 'BUY' : 'SELL'}
                                  </Badge>
                                </td>
                                <td className="p-3">{trade.openPrice}</td>
                                <td className="p-3">{trade.lotSize}</td>
                                <td className={`p-3 text-right ${trade.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                  {trade.profit >= 0 ? '+' : ''}{trade.profit}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No open trades found. Start trading to see your positions here.
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="closed" className="text-center py-8 text-muted-foreground">
                    No closed positions yet.
                  </TabsContent>
                  
                  <TabsContent value="pending" className="text-center py-8 text-muted-foreground">
                    No pending orders.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}