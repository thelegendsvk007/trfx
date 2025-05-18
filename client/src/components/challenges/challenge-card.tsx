import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { DollarSign, BarChart, TrendingDown, Calendar, Award } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  accountSize: number;
  price: number;
  profitTarget: number;
  maxDrawdown: number;
  duration: number;
  profitSplit: number;
  onPurchase: () => void;
  featured?: boolean;
}

export function ChallengeCard({
  title,
  accountSize,
  price,
  profitTarget,
  maxDrawdown,
  duration,
  profitSplit,
  onPurchase,
  featured = false
}: ChallengeCardProps) {
  return (
    <Card className={`relative overflow-hidden transition-all duration-200 ${
      featured ? 'border-primary-500 shadow-md transform hover:-translate-y-1 hover:shadow-lg' : 'hover:shadow'
    }`}>
      {featured && (
        <div className="absolute top-0 right-0">
          <Badge className="m-2 bg-primary-500">Most Popular</Badge>
        </div>
      )}
      
      <CardContent className="pt-6 pb-4">
        <h3 className="text-lg font-bold mb-4 text-center">{title}</h3>
        
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">{formatCurrency(accountSize)}</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">Account Size</p>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-3 text-primary-500" />
            <div className="text-sm">
              <span className="font-medium">{profitTarget}%</span> Profit Target
            </div>
          </div>
          
          <div className="flex items-center">
            <TrendingDown className="w-4 h-4 mr-3 text-primary-500" />
            <div className="text-sm">
              <span className="font-medium">{maxDrawdown}%</span> Max Drawdown
            </div>
          </div>
          
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-3 text-primary-500" />
            <div className="text-sm">
              <span className="font-medium">{duration}</span> Day Duration
            </div>
          </div>
          
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-3 text-primary-500" />
            <div className="text-sm">
              <span className="font-medium">{profitSplit}%</span> Profit Split
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col border-t bg-gray-50 dark:bg-gray-800 px-6 py-4">
        <div className="mb-3 w-full text-center">
          <span className="text-2xl font-bold">{formatCurrency(price)}</span>
        </div>
        <Button 
          className="w-full" 
          onClick={onPurchase}
          variant={featured ? "default" : "outline"}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
