import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils";
import AdminLayout from "@/components/layouts/admin-layout";

export default function AdminAccountsPage() {
  const { data: tradingAccounts, isLoading } = useQuery({
    queryKey: ["/api/admin/trading-accounts"],
  });

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Trading Accounts</h1>
        <div className="flex gap-2">
          <Button>Export Data</Button>
        </div>
      </div>

      <Card className="border border-border bg-card/60 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle>All Trading Accounts</CardTitle>
          <CardDescription>
            Manage and monitor all trading accounts on the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Account Number</TableHead>
                    <TableHead>Challenge Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Phase</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tradingAccounts && tradingAccounts.length > 0 ? (
                    tradingAccounts.map((account) => (
                      <TableRow key={account.id}>
                        <TableCell className="font-medium">
                          {account.accountNumber}
                        </TableCell>
                        <TableCell>{account.challengeType}</TableCell>
                        <TableCell>
                          {formatCurrency(account.accountSize)}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${getStatusColor(account.status)}`}
                          >
                            {account.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{account.phase}</TableCell>
                        <TableCell>
                          {formatDate(account.createdAt)}
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="h-24 text-center text-muted-foreground"
                      >
                        No trading accounts found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </AdminLayout>
  );
}