import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { formatTimeAgo } from "@/lib/utils";
import { Link } from "wouter";
import { 
  UserPlus, 
  CheckCircle, 
  AlertCircle, 
  DollarSign,
  ActivityIcon
} from "lucide-react";

type ActivityType = 'user_registered' | 'challenge_completed' | 'rule_violation' | 'payout_processed' | 'account_created';

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  description: string;
  timestamp: string;
}

interface ActivityFeedProps {
  activities: Activity[];
  title?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export function ActivityFeed({ 
  activities,
  title = "Recent Activity",
  showViewAll = true,
  viewAllHref = "/admin/activity"
}: ActivityFeedProps) {
  
  const getActivityIcon = (type: ActivityType) => {
    switch(type) {
      case 'user_registered':
        return <UserPlus className="text-primary-600 dark:text-primary-400" />;
      case 'challenge_completed':
        return <CheckCircle className="text-green-600 dark:text-green-400" />;
      case 'rule_violation':
        return <AlertCircle className="text-red-600 dark:text-red-400" />;
      case 'payout_processed':
        return <DollarSign className="text-yellow-600 dark:text-yellow-400" />;
      case 'account_created':
        return <ActivityIcon className="text-blue-600 dark:text-blue-400" />;
      default:
        return <ActivityIcon className="text-gray-600 dark:text-gray-400" />;
    }
  };
  
  const getActivityBgColor = (type: ActivityType) => {
    switch(type) {
      case 'user_registered':
        return 'bg-primary-100 dark:bg-primary-900';
      case 'challenge_completed':
        return 'bg-green-100 dark:bg-green-900';
      case 'rule_violation':
        return 'bg-red-100 dark:bg-red-900';
      case 'payout_processed':
        return 'bg-yellow-100 dark:bg-yellow-900';
      case 'account_created':
        return 'bg-blue-100 dark:bg-blue-900';
      default:
        return 'bg-gray-100 dark:bg-gray-900';
    }
  };
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3 border-b border-gray-200 dark:border-gray-700">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="divide-y divide-gray-200 dark:divide-gray-700 px-0">
        {activities.length === 0 ? (
          <div className="py-6 text-center text-gray-500 dark:text-gray-400">
            No recent activity
          </div>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-8 w-8 ${getActivityBgColor(activity.type)} rounded-full flex items-center justify-center`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.description}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {formatTimeAgo(new Date(activity.timestamp))}
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
      {showViewAll && (
        <CardFooter className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <Link href={viewAllHref}>
            <a className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500">
              View all activity
            </a>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
