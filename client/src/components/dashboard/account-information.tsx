import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface AccountInformationProps {
  accountType: string;
  accountSize: string;
  mt5Login: string;
  server: string;
  leverage: string;
  startDate: string;
  endDate: string;
  onDownloadClick?: () => void;
}

export function AccountInformation({
  accountType,
  accountSize,
  mt5Login,
  server,
  leverage,
  startDate,
  endDate,
  onDownloadClick
}: AccountInformationProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle>Account Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Account Type</p>
          <p className="mt-1 text-sm text-gray-900 dark:text-white">{accountType} - {accountSize}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">MT5 Login</p>
          <p className="mt-1 text-sm text-gray-900 dark:text-white font-mono">{mt5Login}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Server</p>
          <p className="mt-1 text-sm text-gray-900 dark:text-white font-mono">{server}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Leverage</p>
          <p className="mt-1 text-sm text-gray-900 dark:text-white">{leverage}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Challenge Started</p>
          <p className="mt-1 text-sm text-gray-900 dark:text-white">{formatDate(startDate)}</p>
        </div>
        
        {endDate && (
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Challenge Deadline</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{formatDate(endDate)}</p>
          </div>
        )}
        
        <div className="mt-6">
          <Button 
            className="w-full"
            onClick={onDownloadClick}
          >
            <Download className="mr-2 h-4 w-4" />
            Download MT5 Platform
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
