import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { useAuth } from "@/hooks/use-auth";
import { useTradingAccounts } from "@/hooks/use-trading-accounts";
import { useQuery } from "@tanstack/react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate, getProfitColor, getTradeTypeColor } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Loader2, ArrowUp, ArrowDown } from "lucide-react";
import { Trade } from "@/types";

export default function TradeHistoryPage() {
  const { user } = useAuth();
  const { accounts, isLoading: isLoadingAccounts } = useTradingAccounts();
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  
  // Set the first account as selected when accounts are loaded
  useEffect(() => {
    if (accounts && accounts.length > 0 && !selectedAccountId) {
      setSelectedAccountId(accounts[0].id.toString());
    }
  }, [accounts, selectedAccountId]);
  
  // Fetch trades for the selected account
  const { data: tradesData, isLoading: isLoadingTrades } = useQuery({
    queryKey: [selectedAccountId ? `/api/trading-accounts/${selectedAccountId}/trades` : null, { page, limit }],
    enabled: !!selectedAccountId,
  });
  
  const isLoading = isLoadingAccounts || isLoadingTrades;
  
  // Pagination controls
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  
  const handleNextPage = () => {
    if (tradesData && tradesData.pagination && page < tradesData.pagination.pages) {
      setPage(page + 1);
    }
  };
  
  // Calculate trade metrics
  const calculateTradeMetrics = (trades: Trade[]) => {
    if (!trades || trades.length === 0) return { winCount: 0, lossCount: 0, totalProfit: 0 };
    
    const winCount = trades.filter(trade => Number(trade.profit) > 0).length;
    const lossCount = trades.filter(trade => Number(trade.profit) < 0).length;
    const totalProfit = trades.reduce((sum, trade) => sum + Number(trade.profit || 0), 0);
    
    return { winCount, lossCount, totalProfit };
  };
  
  const metrics = tradesData?.trades ? calculateTradeMetrics(tradesData.trades) : { winCount: 0, lossCount: 0, totalProfit: 0 };
  
  if (isLoadingAccounts) {
    return (
      <DashboardLayout user={user || undefined}>
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-12 w-12 animate-spin text-primary-500" />
        </div>
      </DashboardLayout>
    );
  }
  
  if (!accounts || accounts.length === 0) {
    return (
      <DashboardLayout user={user || undefined}>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            You don't have any trading accounts yet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Purchase a challenge to get started with TradeFunded
          </p>
          <Button size="lg" onClick={() => window.location.href = "/challenges"}>
            View Available Challenges
          </Button>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout user={user || undefined}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trade History</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Review your past trades and analyze your performance
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Select 
            value={selectedAccountId || ''}
            onValueChange={(value) => {
              setSelectedAccountId(value);
              setPage(1); // Reset to first page when changing account
            }}
          >
            <SelectTrigger className="w-full sm:w-[240px]">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              {accounts?.map(account => (
                <SelectItem key={account.id} value={account.id.toString()}>
                  Account #{account.accountNumber}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {selectedAccountId && (
        <>
          {/* Trade Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Trades
                </div>
                <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {tradesData?.pagination?.total || 0}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Win/Loss Ratio
                </div>
                <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {tradesData?.trades && tradesData.trades.length > 0
                    ? `${metrics.winCount}/${metrics.lossCount}`
                    : "0/0"}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Profit/Loss
                </div>
                <div className={`mt-2 text-3xl font-bold ${getProfitColor(metrics.totalProfit)}`}>
                  {formatCurrency(metrics.totalProfit)}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Trades Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingTrades ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary-500" />
                </div>
              ) : tradesData?.trades && tradesData.trades.length > 0 ? (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Open Time</TableHead>
                        <TableHead>Close Time</TableHead>
                        <TableHead>Lots</TableHead>
                        <TableHead>Entry Price</TableHead>
                        <TableHead>Exit Price</TableHead>
                        <TableHead className="text-right">Profit/Loss</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tradesData.trades.map((trade) => (
                        <TableRow key={trade.id}>
                          <TableCell className="font-medium">{trade.symbol}</TableCell>
                          <TableCell>
                            <Badge className={getTradeTypeColor(trade.type)}>
                              {trade.type === "buy" ? (
                                <ArrowUp className="h-3 w-3 mr-1" />
                              ) : (
                                <ArrowDown className="h-3 w-3 mr-1" />
                              )}
                              {trade.type === "buy" ? "Buy" : "Sell"}
                            </Badge>
                          </TableCell>
                          <TableCell>{formatDate(trade.openTime)}</TableCell>
                          <TableCell>{trade.closeTime ? formatDate(trade.closeTime) : "Open"}</TableCell>
                          <TableCell>{trade.lots}</TableCell>
                          <TableCell>{Number(trade.entryPrice).toFixed(5)}</TableCell>
                          <TableCell>
                            {trade.exitPrice ? Number(trade.exitPrice).toFixed(5) : "-"}
                          </TableCell>
                          <TableCell className={`text-right ${getProfitColor(trade.profit || 0)}`}>
                            {trade.profit ? formatCurrency(trade.profit) : "-"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  {/* Pagination */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Showing <span className="font-medium">{((page - 1) * limit) + 1}</span> to <span className="font-medium">
                        {Math.min(page * limit, tradesData.pagination.total)}
                      </span> of <span className="font-medium">{tradesData.pagination.total}</span> trades
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handlePrevPage}
                        disabled={page === 1}
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleNextPage}
                        disabled={page >= (tradesData.pagination?.pages || 1)}
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  No trades found for this account
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </DashboardLayout>
  );
}
