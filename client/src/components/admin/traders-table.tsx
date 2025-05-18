import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, TradingAccount } from "@/types";
import { formatCurrency, getInitials, getStatusColor, getProfitColor } from "@/lib/utils";
import { Link } from "wouter";

interface TraderWithAccount {
  user: User;
  account: TradingAccount;
  profit: number;
  profitPercent: number;
  daysLeft: number;
}

interface TradersTableProps {
  traders: TraderWithAccount[];
  currentPage: number;
  totalTraders: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export function TradersTable({
  traders,
  currentPage,
  totalTraders,
  pageSize,
  onPageChange
}: TradersTableProps) {
  const totalPages = Math.ceil(totalTraders / pageSize);
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="text-lg font-medium">Active Traders</CardTitle>
        <CardDescription>
          A list of all traders with active accounts and their current performance.
        </CardDescription>
      </CardHeader>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Trader
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Account
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Balance
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Profit/Loss
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Days Left
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {traders.map((trader) => (
              <tr key={trader.account.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={trader.user.profileImage} alt={trader.user.username} />
                        <AvatarFallback>
                          {getInitials(trader.user.firstName, trader.user.lastName)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {trader.user.firstName} {trader.user.lastName || ""}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {trader.user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white font-mono">
                    #{trader.account.accountNumber}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    ${parseInt(trader.account.startingBalance.toString()).toLocaleString()} Challenge
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {formatCurrency(trader.account.balance)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm ${getProfitColor(trader.profit)}`}>
                    {trader.profit >= 0 ? "+" : ""}{formatCurrency(trader.profit)} ({trader.profitPercent >= 0 ? "+" : ""}{trader.profitPercent.toFixed(2)}%)
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className={getStatusColor(trader.account.status)}>
                    {trader.account.status.charAt(0).toUpperCase() + trader.account.status.slice(1)}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {trader.daysLeft}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/admin/accounts/${trader.account.id}`}>
                    <a className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300 mr-3">
                      View
                    </a>
                  </Link>
                  <Link href={`/admin/accounts/${trader.account.id}/edit`}>
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                      Edit
                    </a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CardFooter className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between w-full">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(currentPage * pageSize, totalTraders)}
            </span>{" "}
            of <span className="font-medium">{totalTraders}</span> traders
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
