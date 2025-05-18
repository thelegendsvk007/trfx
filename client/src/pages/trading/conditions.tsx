import PageTemplate from "@/components/page-template";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, Globe, TrendingUp } from "lucide-react";

export default function TradingConditionsPage() {
  return (
    <PageTemplate
      title="Trading Conditions"
      description="Learn about TRFX trading hours, available instruments, leverage, and commission structures."
    >
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Trading Conditions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Review our comprehensive trading conditions for all funded accounts
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Trading Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Our platform operates during standard market hours for each instrument type:</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Forex:</span>
                  <span>24/5 (Sun 22:00 - Fri 22:00 GMT)</span>
                </li>
                <li className="flex justify-between">
                  <span>Indices:</span>
                  <span>According to exchange hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Commodities:</span>
                  <span>Based on market hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Crypto:</span>
                  <span>24/7</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>Leverage Options</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">We offer flexible leverage options for different account sizes:</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>$10,000-$25,000:</span>
                  <span>Up to 1:100</span>
                </li>
                <li className="flex justify-between">
                  <span>$50,000-$100,000:</span>
                  <span>Up to 1:50</span>
                </li>
                <li className="flex justify-between">
                  <span>$150,000-$200,000:</span>
                  <span>Up to 1:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Scaled accounts:</span>
                  <span>Based on original size</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>Trading Platforms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Access markets through industry-leading platforms:</p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>MetaTrader 4 (MT4)</span>
                  <span>Available</span>
                </li>
                <li className="flex justify-between">
                  <span>MetaTrader 5 (MT5)</span>
                  <span>Available</span>
                </li>
                <li className="flex justify-between">
                  <span>Mobile Trading</span>
                  <span>iOS & Android</span>
                </li>
                <li className="flex justify-between">
                  <span>Web Platform</span>
                  <span>Available</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Available Instruments</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Instrument Type</TableHead>
                      <TableHead>Examples</TableHead>
                      <TableHead>Typical Spread</TableHead>
                      <TableHead>Typical Swap</TableHead>
                      <TableHead>Commission</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Major Forex Pairs</TableCell>
                      <TableCell>EUR/USD, GBP/USD, USD/JPY</TableCell>
                      <TableCell>0.1-1.0 pips</TableCell>
                      <TableCell>Variable by currency</TableCell>
                      <TableCell>$3.50 per lot</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Minor Forex Pairs</TableCell>
                      <TableCell>EUR/GBP, AUD/CAD, NZD/CHF</TableCell>
                      <TableCell>0.5-2.0 pips</TableCell>
                      <TableCell>Variable by currency</TableCell>
                      <TableCell>$4.00 per lot</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Exotic Forex Pairs</TableCell>
                      <TableCell>USD/TRY, EUR/ZAR, USD/MXN</TableCell>
                      <TableCell>1.5-5.0 pips</TableCell>
                      <TableCell>Higher than majors</TableCell>
                      <TableCell>$5.00 per lot</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Indices</TableCell>
                      <TableCell>S&P 500, NASDAQ, DAX</TableCell>
                      <TableCell>0.5-2.0 points</TableCell>
                      <TableCell>Fixed rate</TableCell>
                      <TableCell>$5.00 per lot</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Commodities</TableCell>
                      <TableCell>Gold, Silver, Oil</TableCell>
                      <TableCell>1.0-3.0 points</TableCell>
                      <TableCell>Fixed rate</TableCell>
                      <TableCell>$5.00 per lot</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cryptocurrencies</TableCell>
                      <TableCell>BTC/USD, ETH/USD, XRP/USD</TableCell>
                      <TableCell>20-50 points</TableCell>
                      <TableCell>No swap</TableCell>
                      <TableCell>0.1% of trade volume</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Risk Management Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Challenge Phase Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Maximum Daily Drawdown:</span>
                    <span className="font-medium">5% of account balance</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Maximum Total Drawdown:</span>
                    <span className="font-medium">10% of account balance</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Profit Target:</span>
                    <span className="font-medium">8% within 30 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minimum Trading Days:</span>
                    <span className="font-medium">5 trading days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Maximum Lot Size:</span>
                    <span className="font-medium">Varies by account size</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funded Account Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Maximum Daily Drawdown:</span>
                    <span className="font-medium">5% of account balance</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Maximum Total Drawdown:</span>
                    <span className="font-medium">10% of account balance</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Profit Split:</span>
                    <span className="font-medium">70-80% to trader</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Payout Frequency:</span>
                    <span className="font-medium">Monthly (standard accounts)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Maximum Lot Size:</span>
                    <span className="font-medium">Varies by account size</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}