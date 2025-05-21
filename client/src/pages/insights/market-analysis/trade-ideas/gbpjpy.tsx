import { ArrowLeft, Share2, Download, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TradingViewChart } from "@/components/tradingview-chart";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GbpJpyTradeIdeaPage() {
  return (
    <PageTemplate
      title="GBP/JPY Bullish Breakout Opportunity | TRFX Market Analysis"
      description="Detailed analysis of the GBP/JPY bullish breakout trading opportunity with key levels, risk management, and trade strategy."
    >
      <div className="container py-10">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/insights/market-analysis">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Market Analysis
            </Link>
          </Button>
        </div>
        
        {/* Trade Idea Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-green-500 hover:bg-green-600">Buy Setup</Badge>
              <span className="text-sm text-muted-foreground">Posted May 21, 2025</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">GBP/JPY Bullish Breakout Opportunity</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart and Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* Chart */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">GBP/JPY Price Chart</CardTitle>
                <CardDescription>Daily timeframe with key levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ height: "500px" }}>
                  <TradingViewChart 
                    symbol="FX:GBPJPY" 
                    interval="D" 
                    height={500}
                    theme="dark"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Analysis Tabs */}
            <Card>
              <Tabs defaultValue="analysis">
                <CardHeader className="pb-0">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                    <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
                    <TabsTrigger value="technicals">Technicals</TabsTrigger>
                  </TabsList>
                </CardHeader>
                <CardContent className="pt-6">
                  <TabsContent value="analysis" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Market Context</h3>
                      <p className="text-muted-foreground">
                        GBP/JPY has been in a strong uptrend since early April, gaining momentum as the Bank of England maintained a hawkish stance while the Bank of Japan continues its ultra-accommodative policy. The pair has recently broken above a key resistance level at 192.50, which had capped upside moves several times in the past month.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Trade Rationale</h3>
                      <p className="text-muted-foreground">
                        The breakout above 192.50 signals a potential continuation of the uptrend, supported by strong momentum indicators and positive divergence in the RSI. The breakout is further validated by increased trading volume during the most recent rally, indicating genuine buyer interest rather than a false breakout.
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Recent UK economic data has shown resilience in the services sector and stable inflation, which supports sterling strength. Meanwhile, the Japanese yen remains under pressure due to the wide interest rate differential between Japan and other major economies.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="fundamentals" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">UK Economic Outlook</h3>
                      <p className="text-muted-foreground">
                        The UK economy has shown signs of recovery with the services PMI remaining in expansion territory (above 50) for the last three months. Inflation has moderated but remains above the Bank of England's 2% target, leading markets to expect the BoE to maintain higher rates for longer compared to other central banks.
                      </p>
                      <p className="text-muted-foreground mt-2">
                        The labor market remains tight with unemployment at 4.2%, supporting consumer spending and economic activity. The recent budget announcement included measures to boost investment, which could further support sterling in the medium term.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Japan Economic Factors</h3>
                      <p className="text-muted-foreground">
                        The Bank of Japan continues its yield curve control policy despite making small adjustments, maintaining an accommodative stance that keeps the yen under pressure. Inflation in Japan has risen above the 2% target, but officials view this as transitory and driven by external factors rather than sustainable domestic demand.
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Japanese officials have recently expressed concern about rapid yen depreciation, suggesting potential for verbal intervention if the currency weakens further. However, actual market intervention typically occurs at more extreme levels, giving room for continued yen weakness in the medium term.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="technicals" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Technical Indicators</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><span className="font-medium">RSI (14):</span> 62.8 - Showing positive momentum without being overbought</li>
                        <li><span className="font-medium">MACD:</span> Positive and above signal line, indicating bullish momentum</li>
                        <li><span className="font-medium">Moving Averages:</span> Price above 20, 50, and 100-day EMAs, confirming uptrend</li>
                        <li><span className="font-medium">Bollinger Bands:</span> Price breaking upper band, suggesting strong momentum</li>
                        <li><span className="font-medium">Volume:</span> Increasing on up days, decreasing on down days, supporting bullish bias</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Chart Patterns</h3>
                      <p className="text-muted-foreground">
                        The daily chart shows a breakout from a bullish ascending triangle pattern, which typically signals continuation of the prevailing uptrend. The measured move target from this pattern projects to around 194.20, calculated by adding the height of the triangle to the breakout point.
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Prior to the breakout, the pair formed a series of higher lows, establishing a clear uptrend structure. The 192.50 resistance level was tested three times before the successful breakout, increasing the significance of this technical development.
                      </p>
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
          
          {/* Trade Details Sidebar */}
          <div className="space-y-6">
            {/* Trade Setup Card */}
            <Card>
              <CardHeader>
                <CardTitle>Trade Setup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Trade Direction</h3>
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Buy (Long)</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Entry Point</h3>
                    <p className="font-semibold">192.85</p>
                    <p className="text-xs text-muted-foreground">Current market price</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Stop Loss</h3>
                    <p className="font-semibold text-red-500">192.20</p>
                    <p className="text-xs text-muted-foreground">Below recent support</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Take Profit 1</h3>
                    <p className="font-semibold text-green-500">193.50</p>
                    <p className="text-xs text-muted-foreground">Previous resistance</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Take Profit 2</h3>
                    <p className="font-semibold text-green-500">194.20</p>
                    <p className="text-xs text-muted-foreground">Measured move target</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Risk-Reward Ratio</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">1:1.5</p>
                      <p className="text-xs text-muted-foreground">To first target</p>
                    </div>
                    <div>
                      <p className="font-semibold">1:2.1</p>
                      <p className="text-xs text-muted-foreground">To second target</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Trade Duration</h3>
                  <p className="font-semibold">Medium-term (1-2 weeks)</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Trade Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Consider moving stop loss to breakeven after price reaches 193.20. Take partial profits at TP1 (193.50) and let the remainder run to TP2 (194.20) with a trailing stop.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Risk Factors</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Potential verbal intervention from Japanese officials</li>
                    <li>• Weaker-than-expected UK economic data releases</li>
                    <li>• Shift in Bank of England policy expectations</li>
                    <li>• Global risk sentiment deterioration</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Download Trade Plan PDF
                </Button>
              </CardFooter>
            </Card>
            
            {/* Related Trade Ideas */}
            <Card>
              <CardHeader>
                <CardTitle>Related Trade Ideas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://placehold.co/100x100/1f2937/e5e7eb?text=EUR/USD" 
                      alt="EUR/USD" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link href="/insights/market-analysis/trade-ideas/eurusd">
                      <h3 className="font-medium hover:text-primary transition-colors">EUR/USD: Potential Reversal at Key Support</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">May 18, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://placehold.co/100x100/1f2937/e5e7eb?text=USD/JPY" 
                      alt="USD/JPY" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link href="/insights/market-analysis/trade-ideas/usdjpy">
                      <h3 className="font-medium hover:text-primary transition-colors">USD/JPY: Range Trading Opportunity</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">May 15, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://placehold.co/100x100/1f2937/e5e7eb?text=XAU/USD" 
                      alt="Gold" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link href="/insights/market-analysis/trade-ideas/xauusd">
                      <h3 className="font-medium hover:text-primary transition-colors">Gold: Bullish Breakout After Consolidation</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">May 12, 2025</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/insights/market-analysis/trade-ideas">
                    View All Trade Ideas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}