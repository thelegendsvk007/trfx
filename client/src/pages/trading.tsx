import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTradingAccounts } from "@/hooks/use-trading-accounts";
import { useAuth } from "@/hooks/use-auth";
import PageTemplate from "@/components/page-template";
import TradingViewChart from "@/components/trading-view-chart";
import { Loader2, RefreshCw, Download, ExternalLink, AlertTriangle } from "lucide-react";

// Define the WebSocket connection and status types
type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error';
type AccountType = {
  id: number;
  accountNumber: string;
  balance: string;
  equity?: string;
  status: 'active' | 'breached' | 'qualified' | 'completed' | 'expired';
  phase: 'phase1' | 'phase2' | 'funded';
  server: string;
  profit?: string;
};

export default function TradingPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const { accounts, isLoading } = useTradingAccounts();
  const [selectedAccount, setSelectedAccount] = useState<AccountType | null>(null);
  const [symbols, setSymbols] = useState([
    { value: "OANDA:XAUUSD", label: "Gold (XAUUSD)" },
    { value: "OANDA:EURUSD", label: "EUR/USD" },
    { value: "OANDA:GBPUSD", label: "GBP/USD" },
    { value: "OANDA:USDJPY", label: "USD/JPY" },
    { value: "OANDA:AUDUSD", label: "AUD/USD" },
    { value: "OANDA:USDCAD", label: "USD/CAD" },
    { value: "OANDA:NZDUSD", label: "NZD/USD" },
    { value: "OANDA:USDCHF", label: "USD/CHF" }
  ]);
  const [selectedSymbol, setSelectedSymbol] = useState("OANDA:XAUUSD");
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('disconnected');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [marketData, setMarketData] = useState<{
    price: number;
    change: number;
    timestamp: number;
  } | null>(null);

  // Connect to WebSocket when component mounts
  useEffect(() => {
    if (!user) return;
    
    // Establish WebSocket connection
    connectWebSocket();

    // Cleanup function
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [user]);

  // Connect WebSocket function
  const connectWebSocket = () => {
    if (connectionStatus === 'connecting') return;
    
    setConnectionStatus('connecting');
    
    // Create WebSocket connection
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    const socket = new WebSocket(wsUrl);
    
    socket.onopen = () => {
      setConnectionStatus('connected');
      setWs(socket);
      
      // Authenticate with the server
      if (user?.token) {
        socket.send(JSON.stringify({
          type: 'auth',
          token: user.token
        }));
      }
    };
    
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        // Handle different message types
        switch (data.type) {
          case 'auth_success':
            // Subscribe to account updates
            socket.send(JSON.stringify({
              type: 'subscribe',
              channel: 'accounts'
            }));
            
            // Subscribe to market data
            socket.send(JSON.stringify({
              type: 'subscribe',
              channel: 'market_data',
              symbol: selectedSymbol
            }));
            break;
            
          case 'auth_error':
            toast({
              title: "Authentication Error",
              description: data.message,
              variant: "destructive"
            });
            break;
            
          case 'accounts_update':
            // Update accounts data
            // This will be handled by the useTradingAccounts hook
            break;
            
          case 'market_data':
            setMarketData({
              price: data.price,
              change: data.change || 0,
              timestamp: data.timestamp
            });
            break;
            
          default:
            console.log('Unhandled message type:', data.type);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };
    
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setConnectionStatus('error');
      toast({
        title: "Connection Error",
        description: "Failed to connect to trading server",
        variant: "destructive"
      });
    };
    
    socket.onclose = () => {
      setConnectionStatus('disconnected');
      setWs(null);
    };
  };

  // Change trading symbol
  const changeSymbol = (value: string) => {
    setSelectedSymbol(value);
    
    // Subscribe to new symbol data
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'subscribe',
        channel: 'market_data',
        symbol: value
      }));
    }
  };

  // Download MT4/MT5 platform based on account type
  const downloadMTplatform = (platform: 'mt4' | 'mt5') => {
    const platformName = platform === 'mt4' ? 'MetaTrader 4' : 'MetaTrader 5';
    toast({
      title: `Download ${platformName}`,
      description: `You'll be redirected to download ${platformName} for your trading account`,
    });
    
    // Redirect to appropriate download page
    window.open(platform === 'mt4' 
      ? 'https://www.metatrader4.com/en/download' 
      : 'https://www.metatrader5.com/en/download', '_blank');
  };

  return (
    <PageTemplate
      title="TRFX - Live Trading Dashboard"
      description="Access your trading accounts, analyze the markets, and execute trades from our professional trading platform."
    >
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Trading Dashboard</h1>
            <p className="text-muted-foreground">Analyze markets and manage your trading accounts</p>
          </div>
          
          {/* Connection status */}
          <div className="mt-4 md:mt-0 flex items-center">
            {connectionStatus === 'connected' ? (
              <div className="flex items-center text-green-500">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Connected
              </div>
            ) : connectionStatus === 'connecting' ? (
              <div className="flex items-center text-yellow-500">
                <Loader2 className="h-3 w-3 animate-spin mr-2" />
                Connecting...
              </div>
            ) : connectionStatus === 'error' ? (
              <div className="flex items-center text-red-500">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Connection Error
                <Button variant="ghost" size="sm" className="ml-2" onClick={connectWebSocket}>
                  <RefreshCw className="h-3 w-3 mr-1" /> Reconnect
                </Button>
              </div>
            ) : (
              <div className="flex items-center text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                Disconnected
                <Button variant="ghost" size="sm" className="ml-2" onClick={connectWebSocket}>
                  Connect
                </Button>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content - 75% */}
          <div className="w-full lg:w-3/4">
            <Card className="mb-6">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <CardTitle className="text-xl">Chart Analysis</CardTitle>
                    <CardDescription>Analyze price movements with TradingView</CardDescription>
                  </div>
                  <div className="mt-4 md:mt-0 w-full md:w-64">
                    <Select value={selectedSymbol} onValueChange={changeSymbol}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Symbol" />
                      </SelectTrigger>
                      <SelectContent>
                        {symbols.map((symbol) => (
                          <SelectItem key={symbol.value} value={symbol.value}>
                            {symbol.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* TradingView Chart */}
                <TradingViewChart 
                  symbol={selectedSymbol} 
                  height={600} 
                  theme="dark"
                  allow_symbol_change={true}
                  withdateranges={true}
                />
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar - 25% */}
          <div className="w-full lg:w-1/4">
            <Tabs defaultValue="accounts">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="accounts" className="flex-1">Accounts</TabsTrigger>
                <TabsTrigger value="platforms" className="flex-1">Platforms</TabsTrigger>
              </TabsList>
              
              <TabsContent value="accounts">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Trading Accounts</CardTitle>
                    <CardDescription>Your current trading accounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="flex justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                      </div>
                    ) : accounts && accounts.length > 0 ? (
                      <div className="space-y-4">
                        {accounts.map((account: AccountType) => (
                          <Card key={account.id} className={`hover:border-primary cursor-pointer transition-colors ${selectedAccount?.id === account.id ? 'border-primary' : ''}`} onClick={() => setSelectedAccount(account)}>
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">#{account.accountNumber}</p>
                                  <p className={`text-xs ${account.status === 'active' ? 'text-green-500' : account.status === 'breached' ? 'text-red-500' : 'text-yellow-500'}`}>
                                    {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm text-muted-foreground">Phase</p>
                                  <p className="font-medium">
                                    {account.phase === 'phase1' ? 'Phase 1' : account.phase === 'phase2' ? 'Phase 2' : 'Funded'}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2 pt-2 border-t">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground">Balance:</span>
                                  <span className="font-medium">${parseFloat(account.balance).toLocaleString()}</span>
                                </div>
                                {account.equity && (
                                  <div className="flex justify-between items-center mt-1">
                                    <span className="text-sm text-muted-foreground">Equity:</span>
                                    <span className="font-medium">${parseFloat(account.equity).toLocaleString()}</span>
                                  </div>
                                )}
                                {account.profit && (
                                  <div className="flex justify-between items-center mt-1">
                                    <span className="text-sm text-muted-foreground">Profit:</span>
                                    <span className={`font-medium ${parseFloat(account.profit) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                      ${parseFloat(account.profit).toLocaleString()}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground mb-4">No trading accounts found</p>
                        <Button asChild>
                          <a href="/challenges">Get Started with a Challenge</a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="platforms">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Trading Platforms</CardTitle>
                    <CardDescription>Download and connect platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center mr-3">
                                  <span className="font-bold">MT4</span>
                                </div>
                                <div>
                                  <p className="font-medium">MetaTrader 4</p>
                                  <p className="text-xs text-muted-foreground">Classic platform</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col xs:flex-row gap-2">
                              <Button size="sm" variant="outline" className="flex-1" onClick={() => downloadMTplatform('mt4')}>
                                <Download className="h-4 w-4 mr-2" /> Download
                              </Button>
                              <Button size="sm" className="flex-1" asChild>
                                <a href="https://www.metatrader4.com/en/trading-platform" target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" /> Learn More
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center mr-3">
                                  <span className="font-bold">MT5</span>
                                </div>
                                <div>
                                  <p className="font-medium">MetaTrader 5</p>
                                  <p className="text-xs text-muted-foreground">Advanced platform</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col xs:flex-row gap-2">
                              <Button size="sm" variant="outline" className="flex-1" onClick={() => downloadMTplatform('mt5')}>
                                <Download className="h-4 w-4 mr-2" /> Download
                              </Button>
                              <Button size="sm" className="flex-1" asChild>
                                <a href="https://www.metatrader5.com/en/trading-platform" target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" /> Learn More
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      {selectedAccount && (
                        <div className="mt-4 pt-4 border-t">
                          <h3 className="font-medium mb-2">Trading Account Connection</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Server:</span>
                              <span className="font-medium">{selectedAccount.server}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Login:</span>
                              <span className="font-medium">{selectedAccount.accountNumber}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Password:</span>
                              <span className="font-medium">••••••••</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button size="sm" className="w-full">
                              <Download className="h-4 w-4 mr-2" /> Download Account Details
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            {/* Market data card */}
            {marketData && (
              <Card className="mt-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Market Data</CardTitle>
                  <CardDescription>
                    Last updated: {new Date(marketData.timestamp).toLocaleTimeString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Symbol:</span>
                      <span className="font-medium">
                        {symbols.find(s => s.value === selectedSymbol)?.label || selectedSymbol}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-medium">{marketData.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Change:</span>
                      <span className={`font-medium ${marketData.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {marketData.change >= 0 ? '+' : ''}{marketData.change.toFixed(4)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}