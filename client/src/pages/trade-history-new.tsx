import { useState } from "react";
import { Activity, Calendar, ChevronDown, Download, Filter, Search, SlidersHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
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
import { cn } from "@/lib/utils";

export default function TradeHistoryPage() {
  const [selectedAccount, setSelectedAccount] = useState("all");
  const [dateRange, setDateRange] = useState("all");
  
  // Sample accounts data
  const accounts = [
    { id: "a1", name: "A1283946 - $100,000 Phase 1" },
    { id: "a2", name: "A1275831 - $50,000 Phase 2" },
    { id: "a3", name: "A1254789 - $25,000 Funded" },
  ];
  
  // Sample trades data
  const trades = [
    {
      id: "t1",
      accountId: "a1",
      symbol: "EUR/USD",
      type: "buy",
      entryPrice: 1.08642,
      exitPrice: 1.09128,
      profit: "+$243.20",
      status: "positive",
      lots: 2.50,
      openTime: "2025-05-18T10:45:00",
      closeTime: "2025-05-18T14:20:00",
    },
    {
      id: "t2",
      accountId: "a1",
      symbol: "GOLD",
      type: "sell",
      entryPrice: 2304.75,
      exitPrice: 2289.50,
      profit: "+$327.80",
      status: "positive",
      lots: 1.20,
      openTime: "2025-05-18T09:12:00",
      closeTime: "2025-05-18T11:45:00",
    },
    {
      id: "t3",
      accountId: "a2",
      symbol: "NAS100",
      type: "buy",
      entryPrice: 17245.75,
      exitPrice: 17189.25,
      profit: "-$168.40",
      status: "negative",
      lots: 0.50,
      openTime: "2025-05-17T15:45:00",
      closeTime: "2025-05-17T17:20:00",
    },
    {
      id: "t4",
      accountId: "a3",
      symbol: "GBP/JPY",
      type: "sell",
      entryPrice: 186.425,
      exitPrice: 185.870,
      profit: "+$178.60",
      status: "positive",
      lots: 1.00,
      openTime: "2025-05-17T14:30:00",
      closeTime: "2025-05-17T16:45:00",
    },
    {
      id: "t5",
      accountId: "a1",
      symbol: "SILVER",
      type: "buy",
      entryPrice: 28.543,
      exitPrice: 28.792,
      profit: "+$124.50",
      status: "positive",
      lots: 2.00,
      openTime: "2025-05-16T09:20:00",
      closeTime: "2025-05-16T12:15:00",
    },
    {
      id: "t6",
      accountId: "a2",
      symbol: "USD/CAD",
      type: "sell",
      entryPrice: 1.36452,
      exitPrice: 1.36824,
      profit: "-$92.80",
      status: "negative",
      lots: 1.50,
      openTime: "2025-05-16T11:05:00",
      closeTime: "2025-05-16T15:30:00",
    },
    {
      id: "t7",
      accountId: "a3",
      symbol: "US30",
      type: "buy",
      entryPrice: 39584.5,
      exitPrice: 39672.0,
      profit: "+$215.30",
      status: "positive",
      lots: 0.25,
      openTime: "2025-05-15T13:45:00",
      closeTime: "2025-05-15T17:10:00",
    },
    {
      id: "t8",
      accountId: "a1",
      symbol: "EUR/GBP",
      type: "sell",
      entryPrice: 0.85632,
      exitPrice: 0.85412,
      profit: "+$142.70",
      status: "positive",
      lots: 3.00,
      openTime: "2025-05-15T10:00:00",
      closeTime: "2025-05-15T12:25:00",
    },
  ];
  
  // Filter trades based on account selection
  const filteredTrades = selectedAccount === "all"
    ? trades
    : trades.filter(trade => trade.accountId === selectedAccount);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };
  
  // Calculate statistics
  const totalTrades = filteredTrades.length;
  const winningTrades = filteredTrades.filter(trade => trade.status === "positive").length;
  const losingTrades = filteredTrades.filter(trade => trade.status === "negative").length;
  const winRate = totalTrades > 0 ? (winningTrades / totalTrades * 100).toFixed(1) : "0.0";
  
  // Calculate total profit/loss
  const totalProfit = filteredTrades.reduce((acc, trade) => {
    const profitValue = parseFloat(trade.profit.replace(/[^0-9.-]+/g, ""));
    return trade.status === "positive" ? acc + profitValue : acc - profitValue;
  }, 0);
  
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
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm bg-primary/10 text-primary">
                    <Activity className="h-4 w-4" />
                    <span>Trade History</span>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted cursor-pointer">
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
              <h1 className="text-2xl md:text-3xl font-bold">Trade History</h1>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Total Trades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalTrades}</div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Win Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{winRate}%</div>
                  <div className="text-sm text-muted-foreground">
                    {winningTrades} wins / {losingTrades} losses
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Total Profit/Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={cn(
                    "text-2xl font-bold",
                    totalProfit >= 0 ? "text-green-500" : "text-red-500"
                  )}>
                    {totalProfit >= 0 ? "+" : ""}{totalProfit.toFixed(2)}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 hover:border-border/80 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Avg. Trade Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2h 45m</div>
                </CardContent>
              </Card>
            </div>
            
            {/* Filters */}
            <Card className="border-border/40">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Account" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Accounts</SelectItem>
                        {accounts.map(account => (
                          <SelectItem key={account.id} value={account.id}>{account.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex-1">
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Date Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Time</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search trades..." className="pl-8" />
                    </div>
                  </div>
                  
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="flex items-center">
                          <Filter className="h-4 w-4 mr-2" />
                          More Filters
                          <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>By Symbol</DropdownMenuItem>
                        <DropdownMenuItem>By Trade Type</DropdownMenuItem>
                        <DropdownMenuItem>By Profit/Loss</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Trades Table */}
            <Card className="border-border/40">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg">Trade List</CardTitle>
                <CardDescription>View and analyze your trading history</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Lots</TableHead>
                      <TableHead>Entry Price</TableHead>
                      <TableHead>Exit Price</TableHead>
                      <TableHead>Open Time</TableHead>
                      <TableHead>Close Time</TableHead>
                      <TableHead>Profit/Loss</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTrades.map((trade) => (
                      <TableRow key={trade.id}>
                        <TableCell className="font-medium">{trade.symbol}</TableCell>
                        <TableCell>
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            trade.type === "buy" 
                              ? "bg-green-500/10 text-green-500" 
                              : "bg-red-500/10 text-red-500"
                          )}>
                            {trade.type.toUpperCase()}
                          </span>
                        </TableCell>
                        <TableCell>{trade.lots}</TableCell>
                        <TableCell>{trade.entryPrice}</TableCell>
                        <TableCell>{trade.exitPrice}</TableCell>
                        <TableCell>{formatDate(trade.openTime)}</TableCell>
                        <TableCell>{formatDate(trade.closeTime)}</TableCell>
                        <TableCell className={cn(
                          "font-medium",
                          trade.status === "positive" ? "text-green-500" : "text-red-500"
                        )}>
                          {trade.profit}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* Pagination */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
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