import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatTimeAgo } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Link } from "wouter";

interface Trade {
  id: number;
  symbol: string;
  type: "buy" | "sell";
  lots: number;
  profit: number;
  openTime: string;
}

interface RecentTradesProps {
  trades: Trade[];
}

export function RecentTrades({ trades }: RecentTradesProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Recent Trades</CardTitle>
          <Link href="/trade-history">
            <a className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
              View All
            </a>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 overflow-y-auto max-h-[600px] pb-6">
        {trades.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No trades to display
          </div>
        ) : (
          trades.map((trade) => (
            <div key={trade.id} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    trade.type === "buy" 
                      ? "bg-blue-100 dark:bg-blue-900" 
                      : "bg-red-100 dark:bg-red-900"
                  }`}>
                    {trade.type === "buy" ? (
                      <ArrowUpIcon className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{trade.symbol}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {trade.type === "buy" ? "Buy" : "Sell"} • {trade.lots} Lots
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    trade.profit >= 0 ? "text-green-500" : "text-red-500"
                  }`}>
                    {trade.profit >= 0 ? "+" : ""}{formatCurrency(trade.profit)}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatTimeAgo(new Date(trade.openTime))}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
