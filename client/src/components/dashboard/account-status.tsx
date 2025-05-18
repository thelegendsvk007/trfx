import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

interface AccountStatusProps {
  balance: number;
  startingBalance: number;
  status: string;
  profitPercent: number;
}

export function AccountStatus({ balance, startingBalance, status, profitPercent }: AccountStatusProps) {
  const isProfitable = profitPercent > 0;
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Account Balance
          </h3>
          <Badge 
            variant="outline" 
            className={
              status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
              status === 'breached' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
              status === 'qualified' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
              'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {formatCurrency(balance)}
          </span>
          <span className={`ml-2 text-sm font-medium ${isProfitable ? 'text-green-500' : 'text-red-500'}`}>
            {isProfitable ? '+' : ''}{profitPercent.toFixed(2)}%
          </span>
        </div>
        <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Starting: {formatCurrency(startingBalance)}
        </div>
      </CardContent>
    </Card>
  );
}
