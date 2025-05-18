import { useState } from "react";
import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowDownToLine, 
  CheckCircle, 
  Laptop, 
  Smartphone, 
  AlertCircle,
  Server,
  ShieldCheck,
  LineChart,
  Clock,
  Globe,
  Cpu,
  Zap
} from "lucide-react";

export default function MetaTrader5Page() {
  const [loginDetails, setLoginDetails] = useState({
    server: "TRFX-MT5-Live",
    login: "",
    password: "",
    showPassword: false
  });
  
  const handleDownload = (platform: string) => {
    // In a real implementation, this would redirect to the actual download link
    alert(`Downloading MetaTrader 5 for ${platform}`);
  };

  return (
    <PageTemplate
      title="TRFX - MetaTrader 5 Platform"
      description="Download and access your MetaTrader 5 trading platform. Trade forex, commodities, and more with our advanced MT5 platform with improved features over MT4."
    >
      <div className="container py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">MetaTrader 5 Platform</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation trading platform with enhanced features and improved performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Platform Details */}
          <Card>
            <CardHeader>
              <CardTitle>MetaTrader 5 Advantages</CardTitle>
              <CardDescription>
                Upgraded trading technology for professional traders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <LineChart className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Enhanced Charts</h3>
                    <p className="text-sm text-muted-foreground">21 timeframes, 80+ indicators</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Cpu className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">MQL5 Language</h3>
                    <p className="text-sm text-muted-foreground">Advanced algorithmic trading</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Advanced Security</h3>
                    <p className="text-sm text-muted-foreground">256-bit encryption</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">High Performance</h3>
                    <p className="text-sm text-muted-foreground">Optimized execution speed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Economic Calendar</h3>
                    <p className="text-sm text-muted-foreground">Built-in market news</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Market Depth</h3>
                    <p className="text-sm text-muted-foreground">View order book data</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-3">MT5 vs MT4 Comparison</h3>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-medium">Feature</div>
                    <div className="font-medium">MT5</div>
                    <div className="font-medium">MT4</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t pt-2">
                    <div>Timeframes</div>
                    <div className="text-green-500">21</div>
                    <div>9</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t pt-2">
                    <div>Order Types</div>
                    <div className="text-green-500">6</div>
                    <div>4</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t pt-2">
                    <div>Technical Indicators</div>
                    <div className="text-green-500">80+</div>
                    <div>30+</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t pt-2">
                    <div>Chart Objects</div>
                    <div className="text-green-500">44</div>
                    <div>31</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t pt-2">
                    <div>Economic Calendar</div>
                    <div className="text-green-500">Yes</div>
                    <div>No</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Account Access */}
          <Card>
            <CardHeader>
              <CardTitle>TRFX MT5 Account Access</CardTitle>
              <CardDescription>
                Login to your funded account or download the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="download">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="download" className="flex-1">Download MT5</TabsTrigger>
                  <TabsTrigger value="login" className="flex-1">Login Details</TabsTrigger>
                </TabsList>
                
                <TabsContent value="download" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Laptop className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">Windows</h3>
                          <p className="text-sm text-muted-foreground">MT5 for Windows 7 and newer</p>
                        </div>
                      </div>
                      <Button onClick={() => handleDownload("Windows")} variant="outline">
                        <ArrowDownToLine className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Laptop className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">macOS</h3>
                          <p className="text-sm text-muted-foreground">MT5 for macOS 10.14 and newer</p>
                        </div>
                      </div>
                      <Button onClick={() => handleDownload("macOS")} variant="outline">
                        <ArrowDownToLine className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Smartphone className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">iOS</h3>
                          <p className="text-sm text-muted-foreground">MT5 for iPhone and iPad</p>
                        </div>
                      </div>
                      <Button onClick={() => handleDownload("iOS")} variant="outline">
                        <ArrowDownToLine className="mr-2 h-4 w-4" />
                        App Store
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Smartphone className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">Android</h3>
                          <p className="text-sm text-muted-foreground">MT5 for Android devices</p>
                        </div>
                      </div>
                      <Button onClick={() => handleDownload("Android")} variant="outline">
                        <ArrowDownToLine className="mr-2 h-4 w-4" />
                        Google Play
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="login" className="space-y-6">
                  <div className="border rounded-lg p-4 bg-accent/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <p className="text-sm font-medium">Your account details are provided upon successful completion of a challenge</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Once you pass a challenge phase, you will receive your MT5 login credentials by email.
                      Use the details below for reference.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="server">Server</Label>
                      <Input
                        id="server"
                        value={loginDetails.server}
                        readOnly
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="login">Login ID</Label>
                      <Input
                        id="login"
                        placeholder="1234567"
                        value={loginDetails.login}
                        onChange={(e) => setLoginDetails({...loginDetails, login: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type={loginDetails.showPassword ? "text" : "password"}
                        placeholder="Your MT5 password"
                        value={loginDetails.password}
                        onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Access Account
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Advanced MT5 Features</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Market Depth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  View the order book with buy and sell volumes at different price levels, helping you make more informed trading decisions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Economic Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access the built-in economic calendar to track important economic events and news releases that might impact your trading.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">MQL5 Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore thousands of trading robots, indicators, and scripts to automate your trading strategies and improve performance.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}