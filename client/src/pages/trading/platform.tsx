import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Download, LineChart, Smartphone, LayoutDashboard } from "lucide-react";

export default function TradingPlatformPage() {
  return (
    <PageTemplate
      title="Trading Platform"
      description="Explore our powerful trading platforms, tools, and features at TRFX. We support MetaTrader 4, MetaTrader 5, and provide mobile trading options."
    >
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Trading Platform</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access global markets with our advanced trading technology
          </p>
        </div>

        <Tabs defaultValue="mt4" className="w-full">
          <TabsList className="grid w-full md:w-fit grid-cols-2">
            <TabsTrigger value="mt4">MetaTrader 4</TabsTrigger>
            <TabsTrigger value="mt5">MetaTrader 5</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mt4" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>User-Friendly Interface</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>MetaTrader 4 offers an intuitive and easy-to-navigate interface suitable for traders of all experience levels. The platform features customizable charts, one-click trading, and multiple order types.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Advanced Charting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access over 30 built-in technical indicators, 24 analytical objects, and 9 timeframes to perform comprehensive market analysis. Customize charts with your preferred settings and templates.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    <span>Expert Advisors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Automate your trading with MT4's Expert Advisors (EAs). Create, test, and implement automated trading strategies using the MQL4 programming language or use third-party EAs.</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 gap-4">
              <h3 className="text-xl font-medium">Download MetaTrader 4</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>Windows</span>
                </Button>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>macOS</span>
                </Button>
                <Button className="gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>iOS App</span>
                </Button>
                <Button className="gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Android App</span>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mt5" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Enhanced Interface</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>MetaTrader 5 features a modernized interface with improved usability and expanded functionality. The platform offers unlimited charts, 21 timeframes, and a comprehensive Market Depth display.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Superior Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Take advantage of 38 built-in technical indicators and 44 analytical objects for thorough market analysis. MT5 also features an economic calendar directly integrated into the platform.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    <span>Advanced Algorithmic Trading</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Develop and implement complex trading algorithms using the MQL5 language. The MT5 Strategy Tester allows for faster backtesting using multiple cores and supports agent networks.</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 gap-4">
              <h3 className="text-xl font-medium">Download MetaTrader 5</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>Windows</span>
                </Button>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>macOS</span>
                </Button>
                <Button className="gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>iOS App</span>
                </Button>
                <Button className="gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Android App</span>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Platform Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Real-Time Data</CardTitle>
                <CardDescription>Access real-time market data and quotes</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our platforms provide real-time streaming quotes for all available trading instruments. Stay updated with price movements as they happen and make informed trading decisions.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Multiple Order Types</CardTitle>
                <CardDescription>Execute trades with various order types</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Take advantage of different order types including market, limit, stop, and trailing stop orders. Our platform supports OCO (One Cancels Other) and other advanced order types.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Risk Management Tools</CardTitle>
                <CardDescription>Protect your capital with built-in risk controls</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Utilize stop-loss, take-profit, and trailing stop options to manage your risk effectively. Set maximum drawdown alerts and use the built-in risk calculator for position sizing.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Trading Signals</CardTitle>
                <CardDescription>Access professional trading signals</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Subscribe to trading signals from professional traders through the integrated signals marketplace. Copy trades automatically and learn from experienced traders.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>VPS Hosting</CardTitle>
                <CardDescription>Keep your automated strategies running 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We offer Virtual Private Server (VPS) hosting to ensure your Expert Advisors run without interruption, even when your computer is off. Enjoy minimal latency and maximum uptime.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Mobile Trading</CardTitle>
                <CardDescription>Trade on the go with mobile applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our mobile apps for iOS and Android provide full trading functionality, allowing you to manage your positions, analyze markets, and execute trades from anywhere at any time.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <h3 className="text-xl font-medium mb-4">Ready to Start Trading?</h3>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/challenges/compare">Take the Challenge</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/faq">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}