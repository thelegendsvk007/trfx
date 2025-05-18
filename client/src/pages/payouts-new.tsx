import { useState } from "react";
import { Activity, Calendar, Download, ExternalLink, FileText, FilterX, Plus, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function PayoutsPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bank");
  
  // Sample payout data
  const payouts = [
    {
      id: "P12345",
      date: "May 15, 2025",
      amount: "$1,250.00",
      method: "Bank Transfer",
      accountId: "A1283946",
      accountSize: "$100,000",
      status: "completed",
      processDate: "May 17, 2025"
    },
    {
      id: "P12344",
      date: "May 8, 2025",
      amount: "$875.50",
      method: "PayPal",
      accountId: "A1283946",
      accountSize: "$100,000",
      status: "completed",
      processDate: "May 10, 2025"
    },
    {
      id: "P12343",
      date: "May 2, 2025",
      amount: "$320.75",
      method: "Bank Transfer",
      accountId: "A1254789",
      accountSize: "$25,000",
      status: "completed",
      processDate: "May 4, 2025"
    },
    {
      id: "P12342",
      date: "Apr 25, 2025",
      amount: "$1,580.00",
      method: "Cryptocurrency",
      accountId: "A1275831",
      accountSize: "$50,000",
      status: "completed",
      processDate: "Apr 27, 2025"
    },
    {
      id: "P12346",
      date: "May 17, 2025",
      amount: "$650.25",
      method: "Bank Transfer",
      accountId: "A1283946",
      accountSize: "$100,000",
      status: "pending",
      processDate: null
    }
  ];
  
  // Filter payouts based on status and search query
  const filteredPayouts = payouts
    .filter(payout => statusFilter === "all" || payout.status === statusFilter)
    .filter(payout => {
      if (!searchQuery) return true;
      const searchLower = searchQuery.toLowerCase();
      return (
        payout.id.toLowerCase().includes(searchLower) ||
        payout.accountId.toLowerCase().includes(searchLower) ||
        payout.method.toLowerCase().includes(searchLower)
      );
    });
  
  // Calculate statistics
  const totalCompleted = payouts.filter(p => p.status === "completed").length;
  const totalPending = payouts.filter(p => p.status === "pending").length;
  const totalAmount = payouts
    .filter(p => p.status === "completed")
    .reduce((sum, payout) => sum + parseFloat(payout.amount.replace(/[^0-9.]/g, "")), 0);
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "completed":
        return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">Completed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20">Pending</Badge>;
      case "processing":
        return <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20">Processing</Badge>;
      case "rejected":
        return <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20">Rejected</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TradeFunded</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
            <Button variant="ghost" size="sm">
              Support
            </Button>
            <Button variant="outline" size="sm">
              Log Out
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container py-6 flex flex-1">
        <div className="grid grid-cols-12 gap-6 w-full">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3 xl:col-span-2">
            <Card className="sticky top-20">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Activity className="h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Activity className="h-4 w-4" />
                    <span>Trading Accounts</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                    <Activity className="h-4 w-4" />
                    <span>Trade History</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm bg-primary/10 text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>Payouts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="col-span-12 lg:col-span-9 xl:col-span-10 space-y-6">
            {/* Page title */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">Payouts</h1>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Dialog open={requestDialogOpen} onOpenChange={setRequestDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      <Plus className="h-4 w-4 mr-2" />
                      Request Payout
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                      <DialogTitle>Request Payout</DialogTitle>
                      <DialogDescription>
                        Request a payout from your funded trading account profits.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="account">Trading Account</Label>
                        <Select defaultValue="A1283946">
                          <SelectTrigger id="account">
                            <SelectValue placeholder="Select account" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A1283946">A1283946 - $100,000 (Balance: $103,241.50)</SelectItem>
                            <SelectItem value="A1275831">A1275831 - $50,000 (Balance: $52,892.75)</SelectItem>
                            <SelectItem value="A1254789">A1254789 - $25,000 (Balance: $27,142.30)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="amount">Payout Amount</Label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">$</span>
                          <Input id="amount" type="text" className="pl-8" placeholder="Enter amount" />
                        </div>
                        <p className="text-xs text-muted-foreground">Available for withdrawal: $3,241.50</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
                          <div className={cn(
                            "flex items-center space-x-3 space-y-0 border rounded-md p-4 cursor-pointer",
                            selectedPaymentMethod === "bank" ? "border-primary" : "border-border"
                          )}>
                            <RadioGroupItem value="bank" id="bank" />
                            <Label htmlFor="bank" className="cursor-pointer flex-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="font-medium">Bank Transfer</span>
                                </div>
                                <span className="text-xs text-muted-foreground">2-3 business days</span>
                              </div>
                            </Label>
                          </div>
                          
                          <div className={cn(
                            "flex items-center space-x-3 space-y-0 border rounded-md p-4 cursor-pointer",
                            selectedPaymentMethod === "paypal" ? "border-primary" : "border-border"
                          )}>
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="cursor-pointer flex-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="text-[#0070ba] font-bold mr-0.5">Pay</span>
                                  <span className="text-[#0070ba] font-bold text-xs italic">Pal</span>
                                </div>
                                <span className="text-xs text-muted-foreground">1-2 business days</span>
                              </div>
                            </Label>
                          </div>
                          
                          <div className={cn(
                            "flex items-center space-x-3 space-y-0 border rounded-md p-4 cursor-pointer",
                            selectedPaymentMethod === "crypto" ? "border-primary" : "border-border"
                          )}>
                            <RadioGroupItem value="crypto" id="crypto" />
                            <Label htmlFor="crypto" className="cursor-pointer flex-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="mr-1">₿</span>
                                  <span>Cryptocurrency</span>
                                </div>
                                <span className="text-xs text-muted-foreground">Same day</span>
                              </div>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {selectedPaymentMethod === "bank" && (
                        <div className="space-y-2">
                          <Label htmlFor="bankDetails">Bank Details</Label>
                          <div className="text-sm p-3 bg-muted/50 rounded-md">
                            <p className="mb-2">Bank Account ending in <span className="font-medium">**** 4578</span></p>
                            <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                              Update Bank Details
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {selectedPaymentMethod === "paypal" && (
                        <div className="space-y-2">
                          <Label htmlFor="paypalEmail">PayPal Email</Label>
                          <Input id="paypalEmail" type="email" defaultValue="michael.thompson@example.com" />
                        </div>
                      )}
                      
                      {selectedPaymentMethod === "crypto" && (
                        <div className="space-y-2">
                          <Label htmlFor="cryptoAddress">Wallet Address</Label>
                          <Input id="cryptoAddress" placeholder="Enter your wallet address" />
                          <div className="flex items-center gap-2 mt-1">
                            <Select defaultValue="btc">
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select cryptocurrency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                                <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                                <SelectItem value="usdt">Tether (USDT)</SelectItem>
                                <SelectItem value="usdc">USD Coin (USDC)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      )}
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setRequestDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" onClick={() => setRequestDialogOpen(false)}>
                        Submit Request
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Total Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{payouts.length}</div>
                  <div className="text-sm text-muted-foreground">
                    {totalCompleted} completed, {totalPending} pending
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Total Received</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalAmount.toFixed(2)}</div>
                  <div className="text-sm text-muted-foreground">
                    Lifetime earnings
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Available Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,241.50</div>
                  <div className="text-sm text-muted-foreground">
                    Ready for withdrawal
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Filters */}
            <Card className="border-border/40">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Payouts</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search payouts..." 
                        className="pl-8" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      {searchQuery && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1 h-7 w-7 p-0"
                          onClick={() => setSearchQuery("")}
                        >
                          <FilterX className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Payouts Table */}
            <Card className="border-border/40">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg">Payout History</CardTitle>
                <CardDescription>View all your payout requests and their status</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Account</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayouts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                          No payouts found with the current filters.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredPayouts.map((payout) => (
                        <TableRow key={payout.id}>
                          <TableCell className="font-medium">{payout.id}</TableCell>
                          <TableCell>{payout.date}</TableCell>
                          <TableCell>{payout.amount}</TableCell>
                          <TableCell>{payout.method}</TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span>{payout.accountId}</span>
                              <span className="text-xs text-muted-foreground">{payout.accountSize}</span>
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(payout.status)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">View details</span>
                            </Button>
                            {payout.status === "completed" && (
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ExternalLink className="h-4 w-4" />
                                <span className="sr-only">View receipt</span>
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-4">
                <div className="text-sm text-muted-foreground">
                  Showing <span className="font-medium">{filteredPayouts.length}</span> of <span className="font-medium">{payouts.length}</span> payouts
                </div>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    {/* Add more pages as needed based on data */}
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
            
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="text-lg">Payout Information</CardTitle>
                <CardDescription>Important details about our payout process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Payout Schedule</h3>
                  <p className="text-sm text-muted-foreground">
                    Standard accounts: Monthly payouts<br />
                    Expert & Elite accounts: Weekly payouts (every Friday)
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="font-medium">Minimum Withdrawal</h3>
                  <p className="text-sm text-muted-foreground">
                    The minimum withdrawal amount is $100. Any profit below this threshold will roll over to the next payout period.
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="font-medium">Processing Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Bank transfers: 2-3 business days<br />
                    PayPal: 1-2 business days<br />
                    Cryptocurrency: Same day processing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <footer className="bg-muted/30 backdrop-blur-sm border-t border-border mt-auto py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TradeFunded. All rights reserved.
        </div>
      </footer>
    </div>
  );
}