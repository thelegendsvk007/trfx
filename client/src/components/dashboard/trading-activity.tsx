import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface TradingActivityProps {
  winRate: number;
  totalTrades: number;
  avgWin: number;
  avgLoss: number;
  period?: string;
}

export function TradingActivity({
  winRate,
  totalTrades,
  avgWin,
  avgLoss,
  period = "This Week"
}: TradingActivityProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Trading Activity
          </h3>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {period}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Win Rate
            </div>
            <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              {winRate.toFixed(1)}%
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Trades
            </div>
            <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              {totalTrades}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Avg Win
            </div>
            <div className="mt-1 text-2xl font-bold text-green-500">
              {formatCurrency(avgWin)}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Avg Loss
            </div>
            <div className="mt-1 text-2xl font-bold text-red-500">
              {formatCurrency(avgLoss)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
