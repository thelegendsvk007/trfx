import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";
import { useTradingAccounts } from "@/hooks/use-trading-accounts";
import { useQuery } from "@tanstack/react-query";
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils";
import { Loader2, DollarSign, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PayoutsPage() {
  const { user } = useAuth();
  const { accounts, isLoading: isLoadingAccounts, requestPayout } = useTradingAccounts();
  const { toast } = useToast();
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [payoutAmount, setPayoutAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  
  // Fetch payout history
  const { 
    data: payouts, 
    isLoading: isLoadingPayouts,
    refetch: refetchPayouts 
  } = useQuery({
    queryKey: ['/api/payouts'],
  });
  
  // Get funded accounts that are eligible for payouts (phase === 'funded')
  const fundedAccounts = accounts?.filter(account => 
    account.phase === 'funded' && 
    account.status !== 'breached' && 
    parseFloat(account.balance.toString()) > parseFloat(account.startingBalance.toString())
  );
  
  // Calculate available balance for the selected account
  const getAvailableBalance = () => {
    if (!selectedAccountId) return 0;
    
    const account = accounts?.find(acc => acc.id.toString() === selectedAccountId);
    if (!account) return 0;
    
    const startingBalance = parseFloat(account.startingBalance.toString());
    const currentBalance = parseFloat(account.balance.toString());
    const profit = currentBalance - startingBalance;
    
    // Check if account has profit
    return Math.max(0, profit);
  };
  
  const availableBalance = getAvailableBalance();
  
  // Handle submission of payout request
  const handleSubmitPayoutRequest = async () => {
    if (!selectedAccountId || !payoutAmount || !paymentMethod) {
      setError("All fields are required");
      return;
    }
    
    const amount = parseFloat(payoutAmount);
    
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    
    if (amount > availableBalance) {
      setError("Amount exceeds available balance");
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError("");
      
      await requestPayout.mutateAsync({
        accountId: parseInt(selectedAccountId),
        amount,
        paymentMethod
      });
      
      // Close dialog and reset form
      setIsRequestDialogOpen(false);
      setSelectedAccountId("");
      setPayoutAmount("");
      setPaymentMethod("bank_transfer");
      
      // Refetch payouts
      refetchPayouts();
      
    } catch (err: any) {
      setError(err.message || "Failed to submit payout request");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get status badge variant based on status
  const getPayoutStatusBadge = (status: string) => {
    return (
      <Badge className={getStatusColor(status)}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };
  
  const isLoading = isLoadingAccounts || isLoadingPayouts;
  
  return (
    <DashboardLayout user={user || undefined}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payouts</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Request and track your profit withdrawals
          </p>
        </div>
        
        {fundedAccounts && fundedAccounts.length > 0 && (
          <div className="mt-4 md:mt-0">
            <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <DollarSign className="mr-2 h-4 w-4" />
                  Request Payout
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Request Payout</DialogTitle>
                  <DialogDescription>
                    Submit a request to withdraw your trading profits.
                  </DialogDescription>
                </DialogHeader>
                
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="account">Select Account</Label>
                    <Select 
                      value={selectedAccountId} 
                      onValueChange={setSelectedAccountId}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select account" />
                      </SelectTrigger>
                      <SelectContent>
                        {fundedAccounts?.map(account => (
                          <SelectItem key={account.id} value={account.id.toString()}>
                            Account #{account.accountNumber} - {formatCurrency(account.balance)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {selectedAccountId && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Available for withdrawal: {formatCurrency(availableBalance)}
                    </div>
                  )}
                  
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.01"
                      min="0"
                      max={availableBalance.toString()}
                      value={payoutAmount}
                      onChange={(e) => setPayoutAmount(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <Select 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="crypto">Cryptocurrency</SelectItem>
                        <SelectItem value="wise">Wise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsRequestDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSubmitPayoutRequest}
                    disabled={isSubmitting || !selectedAccountId || !payoutAmount || availableBalance <= 0}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-12 w-12 animate-spin text-primary-500" />
        </div>
      ) : (
        <>
          {/* Payout Eligibility Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Payout Eligibility</CardTitle>
              <CardDescription>
                You can request payouts from your funded accounts that have generated profits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {fundedAccounts && fundedAccounts.length > 0 ? (
                <div className="grid gap-4">
                  {fundedAccounts.map(account => {
                    const startingBalance = parseFloat(account.startingBalance.toString());
                    const currentBalance = parseFloat(account.balance.toString());
                    const profit = currentBalance - startingBalance;
                    const profitPercent = (profit / startingBalance) * 100;
                    
                    return (
                      <div 
                        key={account.id} 
                        className="p-4 border rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Account #{account.accountNumber}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Balance: {formatCurrency(account.balance)}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Available for withdrawal: {formatCurrency(Math.max(0, profit))}
                          </p>
                          <p className={`text-sm ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            Profit: {formatCurrency(profit)} ({profitPercent.toFixed(2)}%)
                          </p>
                        </div>
                        <div className="sm:text-right">
                          <Badge className={getStatusColor(account.status)}>
                            {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
                          </Badge>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Phase: {account.phase === 'phase1' ? 'Phase 1' : account.phase === 'phase2' ? 'Phase 2' : 'Funded'}
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            disabled={profit <= 0}
                            onClick={() => {
                              setSelectedAccountId(account.id.toString());
                              setIsRequestDialogOpen(true);
                            }}
                          >
                            Request Payout
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                  <p className="mb-2">You don't have any funded accounts yet.</p>
                  <p>Complete a trading challenge to get funded and be eligible for payouts.</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Payout History */}
          <Card>
            <CardHeader>
              <CardTitle>Payout History</CardTitle>
              <CardDescription>
                View the status and details of your previous payout requests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {payouts && payouts.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request Date</TableHead>
                      <TableHead>Account</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Process Date</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payouts.map(payout => (
                      <TableRow key={payout.id}>
                        <TableCell>{formatDate(payout.requestDate)}</TableCell>
                        <TableCell>#{payout.account?.accountNumber || 'N/A'}</TableCell>
                        <TableCell>{formatCurrency(payout.amount)}</TableCell>
                        <TableCell className="capitalize">{payout.paymentMethod.replace('_', ' ')}</TableCell>
                        <TableCell>{getPayoutStatusBadge(payout.status)}</TableCell>
                        <TableCell>{payout.processDate ? formatDate(payout.processDate) : 'Pending'}</TableCell>
                        <TableCell>{payout.notes || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                  <DollarSign className="h-12 w-12 mx-auto mb-3 text-gray-400 dark:text-gray-500" />
                  <p className="text-lg font-medium">No payout history</p>
                  <p className="mt-1">When you request a payout, it will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </DashboardLayout>
  );
}
