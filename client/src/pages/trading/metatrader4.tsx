import { useState } from "react";
import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Globe
} from "lucide-react";

export default function MetaTrader4Page() {
  const [loginDetails, setLoginDetails] = useState({
    server: "TRFX-Live",
    login: "",
    password: "",
    showPassword: false
  });
  
  const handleDownload = (platform: string) => {
    // In a real implementation, this would redirect to the actual download link
    alert(`Downloading MetaTrader 4 for ${platform}`);
  };

  return (
    <PageTemplate
      title="TRFX - MetaTrader 4 Platform"
      description="Download and access your MetaTrader 4 trading platform. Trade forex, commodities, and more with our powerful MT4 platform."
    >
      <div className="container py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">MetaTrader 4 Platform</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trade on the world's most popular trading platform. Access your funded account with our MT4 integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Platform Details */}
          <Card>
            <CardHeader>
              <CardTitle>MetaTrader 4 Features</CardTitle>
              <CardDescription>
                The industry-standard platform for forex trading
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <LineChart className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Advanced Charts</h3>
                    <p className="text-sm text-muted-foreground">9 timeframes, 30+ indicators</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Server className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Fast Execution</h3>
                    <p className="text-sm text-muted-foreground">Low latency trading</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Secure Trading</h3>
                    <p className="text-sm text-muted-foreground">128-bit encryption</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">24/5 Trading</h3>
                    <p className="text-sm text-muted-foreground">Access global markets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Multi-Language</h3>
                    <p className="text-sm text-muted-foreground">Available in 30+ languages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Alerts & Notifications</h3>
                    <p className="text-sm text-muted-foreground">Stay updated on market moves</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-3">Supported Instruments</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">EUR/USD</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">GBP/USD</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">USD/JPY</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">Gold (XAU/USD)</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">Silver (XAG/USD)</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">Crude Oil (WTI)</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">US30</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-sm">And more...</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Account Access */}
          <Card>
            <CardHeader>
              <CardTitle>TRFX MT4 Account Access</CardTitle>
              <CardDescription>
                Login to your funded account or download the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="download">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="download" className="flex-1">Download MT4</TabsTrigger>
                  <TabsTrigger value="login" className="flex-1">Login Details</TabsTrigger>
                </TabsList>
                
                <TabsContent value="download" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Laptop className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">Windows</h3>
                          <p className="text-sm text-muted-foreground">MT4 for Windows 7 and newer</p>
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
                          <p className="text-sm text-muted-foreground">MT4 for macOS 10.14 and newer</p>
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
                          <p className="text-sm text-muted-foreground">MT4 for iPhone and iPad</p>
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
                          <p className="text-sm text-muted-foreground">MT4 for Android devices</p>
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
                      Once you pass a challenge phase, you will receive your MT4 login credentials by email.
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
                        placeholder="Your MT4 password"
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
        
        {/* Setup Instructions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Getting Started with MetaTrader 4</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <ArrowDownToLine className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">1. Download & Install</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Download the MetaTrader 4 platform from the options above and follow the installation instructions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">2. Connect to Server</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Open MT4 and go to "File" &gt; "Login to Trade Account" and enter your TRFX server, login ID, and password.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">3. Start Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Once connected, you can view charts, place trades, and monitor your account performance in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}