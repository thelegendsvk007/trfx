import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ChallengeProgressProps {
  phase: string;
  daysLeft: number;
  profitTarget: number;
  currentProfit: number;
  maxDrawdownLimit: number;
  currentDrawdown: number;
}

export function ChallengeProgress({
  phase,
  daysLeft,
  profitTarget,
  currentProfit,
  maxDrawdownLimit,
  currentDrawdown,
}: ChallengeProgressProps) {
  const profitProgress = (currentProfit / profitTarget) * 100;
  const drawdownProgress = (currentDrawdown / maxDrawdownLimit) * 100;
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Challenge Progress
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {phase === 'phase1' ? 'Phase 1' : phase === 'phase2' ? 'Phase 2' : 'Funded'} <span className="mx-1">•</span> {daysLeft} days left
          </div>
        </div>
        
        {/* Profit Target Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Profit Target ({profitTarget}%)
            </span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {currentProfit.toFixed(2)}% / {profitTarget}%
            </span>
          </div>
          <Progress value={profitProgress} className="h-2 bg-gray-200 dark:bg-gray-700">
            <div 
              className="h-full bg-green-500 rounded-full" 
              style={{ width: `${Math.min(100, Math.max(0, profitProgress))}%` }}
            ></div>
          </Progress>
        </div>
        
        {/* Max Drawdown Limit */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Max Drawdown Limit ({maxDrawdownLimit}%)
            </span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {currentDrawdown.toFixed(2)}% / {maxDrawdownLimit}%
            </span>
          </div>
          <Progress value={drawdownProgress} className="h-2 bg-gray-200 dark:bg-gray-700">
            <div 
              className="h-full bg-red-500 rounded-full" 
              style={{ width: `${Math.min(100, Math.max(0, drawdownProgress))}%` }}
            ></div>
          </Progress>
        </div>
      </CardContent>
    </Card>
  );
}
