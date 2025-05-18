import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { AccountStatus } from "@/components/dashboard/account-status";
import { ChallengeProgress } from "@/components/dashboard/challenge-progress";
import { TradingActivity } from "@/components/dashboard/trading-activity";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { RecentTrades } from "@/components/dashboard/recent-trades";
import { TradeDistribution } from "@/components/dashboard/trade-distribution";
import { ChallengeRules } from "@/components/dashboard/challenge-rules";
import { AccountInformation } from "@/components/dashboard/account-information";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/hooks/use-auth";
import { useTradingAccounts } from "@/hooks/use-trading-accounts";
import { formatDate, getDaysLeft, formatCurrency } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// Mock data for the performance chart
const generatePerformanceData = (days: number, startBalance: number, volatility: number = 0.005) => {
  const data = [];
  let balance = startBalance;
  const now = new Date().getTime();
  
  for (let i = days; i >= 0; i--) {
    const time = now - (i * 24 * 60 * 60 * 1000);
    const change = 1 + (Math.random() * volatility * 2 - volatility);
    balance = balance * change;
    data.push({ time, value: balance });
  }
  
  return data;
};

export default function DashboardPage() {
  const { user } = useAuth();
  const { accounts, isLoading } = useTradingAccounts();
  const [, navigate] = useLocation();
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  
  // Set the first account as selected when accounts are loaded
  useEffect(() => {
    if (accounts && accounts.length > 0 && !selectedAccountId) {
      setSelectedAccountId(accounts[0].id.toString());
    }
  }, [accounts, selectedAccountId]);
  
  // Get the selected account
  const selectedAccount = accounts?.find(acc => acc.id.toString() === selectedAccountId);
  
  // Fetch trades for the selected account
  const { data: tradesData } = useQuery({
    queryKey: [selectedAccountId ? `/api/trading-accounts/${selectedAccountId}/trades` : null],
    enabled: !!selectedAccountId,
  });
  
  // Generate mock data for chart
  const performanceData = selectedAccount 
    ? generatePerformanceData(14, parseFloat(selectedAccount.startingBalance.toString()))
    : [];
  
  // Generate trade distribution data
  const tradeDistributionData = [
    { name: "EURUSD", value: 12, color: "#3B82F6" },
    { name: "GBPUSD", value: 8, color: "#10B981" },
    { name: "USDJPY", value: 6, color: "#F59E0B" },
    { name: "XAUUSD", value: 5, color: "#EC4899" },
    { name: "US30", value: 4, color: "#8B5CF6" }
  ];
  
  // Calculate profit percentage
  const calculateProfitPercent = (account: any) => {
    if (!account) return 0;
    const startingBalance = parseFloat(account.startingBalance.toString());
    const currentBalance = parseFloat(account.balance.toString());
    return ((currentBalance - startingBalance) / startingBalance) * 100;
  };
  
  // Challenge rules data
  const challengeRulesData = [
    {
      title: "Profit Targets",
      items: [
        { text: "Phase 1: 8% profit target within 30 days" },
        { text: "Phase 2: 5% profit target within 60 days" },
        { text: "Minimum 10 trading days per phase" }
      ]
    },
    {
      title: "Account Protection",
      items: [
        { text: "Maximum 5% daily drawdown" },
        { text: "Maximum 10% total drawdown" }
      ]
    },
    {
      title: "Trading Requirements",
      items: [
        { text: "Maximum 5% risk per trade" },
        { text: "No overnight positions on Fridays" },
        { text: "No trading during major news events" }
      ]
    },
    {
      title: "Payout Structure",
      items: [
        { text: "80% profit split after passing both phases" },
        { text: "Bi-weekly payout schedule" }
      ]
    }
  ];
  
  // Handle challenge purchase
  const handlePurchaseChallenge = () => {
    navigate("/challenges");
  };
  
  // Handle platform download
  const handleDownloadPlatform = () => {
    window.open("https://www.metatrader5.com/en/download", "_blank");
  };
  
  if (isLoading) {
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
          <Button size="lg" onClick={() => navigate("/challenges")}>
            View Available Challenges
          </Button>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout user={user || undefined}>
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trader Dashboard</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Welcome back, {user?.firstName || user?.username}. Here's an overview of your trading performance.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Select 
            value={selectedAccountId || ''}
            onValueChange={(value) => setSelectedAccountId(value)}
          >
            <SelectTrigger className="w-full sm:w-[200px]">
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
          <Button onClick={handlePurchaseChallenge}>
            Purchase Challenge
          </Button>
        </div>
      </div>

      {selectedAccount && (
        <>
          {/* Account Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <AccountStatus
              balance={parseFloat(selectedAccount.balance.toString())}
              startingBalance={parseFloat(selectedAccount.startingBalance.toString())}
              status={selectedAccount.status}
              profitPercent={calculateProfitPercent(selectedAccount)}
            />
            
            <ChallengeProgress
              phase={selectedAccount.phase}
              daysLeft={selectedAccount.endDate ? getDaysLeft(selectedAccount.endDate) : 30}
              profitTarget={parseFloat(selectedAccount.plan?.profitTarget1.toString() || '8')}
              currentProfit={calculateProfitPercent(selectedAccount)}
              maxDrawdownLimit={parseFloat(selectedAccount.plan?.maxTotalDrawdown.toString() || '5')}
              currentDrawdown={parseFloat(selectedAccount.currentDrawdown.toString())}
            />
            
            <TradingActivity
              winRate={67.5}
              totalTrades={tradesData?.count || 0}
              avgWin={412.80}
              avgLoss={168.45}
              period="This Week"
            />
          </div>

          {/* Charts and Trade Data */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Performance Chart */}
            <div className="lg:col-span-2">
              <PerformanceChart data={performanceData} />
            </div>

            {/* Recent Trades */}
            <div className="lg:row-span-2 h-full">
              <RecentTrades trades={tradesData?.trades || []} />
            </div>

            {/* Trade Distribution */}
            <div className="lg:col-span-2">
              <TradeDistribution data={tradeDistributionData} />
            </div>
          </div>

          {/* Challenge Rules and Account Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ChallengeRules sections={challengeRulesData} />
            </div>

            <div>
              <AccountInformation 
                accountType={`${selectedAccount.plan?.type || 'Standard'} Challenge`}
                accountSize={formatCurrency(selectedAccount.startingBalance.toString())}
                mt5Login={selectedAccount.accountNumber}
                server={selectedAccount.server}
                leverage={selectedAccount.leverage}
                startDate={selectedAccount.startDate}
                endDate={selectedAccount.endDate || ''}
                onDownloadClick={handleDownloadPlatform}
              />
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
