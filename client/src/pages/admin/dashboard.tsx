import { useState } from "react";
import { AdminLayout } from "@/components/layout/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/admin/stats-card";
import { ActivityFeed } from "@/components/admin/activity-feed";
import { TradersTable } from "@/components/admin/traders-table";
import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { formatCurrency } from "@/lib/utils";
import { Loader2, Users, CheckCircle, XCircle, DollarSign, Download, Plus } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Mock data for admin analytics
const generatePerformanceData = (days: number) => {
  const data = [];
  const now = new Date();
  
  for (let i = days; i > 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toISOString().split('T')[0],
      traders: Math.floor(1400 + Math.random() * 200 * Math.sin(i / 5)),
      activeAccounts: Math.floor(700 + Math.random() * 100 * Math.sin(i / 4)),
    });
  }
  
  return data;
};

const generateRiskData = (days: number) => {
  const data = [];
  const now = new Date();
  
  for (let i = days; i > 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    const breaches = Math.floor(Math.random() * 8);
    const nearBreaches = Math.floor(Math.random() * 12) + 5;
    
    data.push({
      date: date.toISOString().split('T')[0],
      breaches,
      nearBreaches,
      riskFactor: (breaches * 10 + nearBreaches * 2) / 10
    });
  }
  
  return data;
};

// Recent activities data
const recentActivities = [
  {
    id: 1,
    type: 'user_registered',
    title: 'New trader registration',
    description: 'david.wilson@example.com created a new account',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 2,
    type: 'challenge_completed',
    title: 'Challenge completed',
    description: 'Michael Chen passed the first phase of $200K challenge',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 3,
    type: 'rule_violation',
    title: 'Rule violation',
    description: 'Sarah Johnson exceeded daily drawdown limit (7.85%)',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 4,
    type: 'payout_processed',
    title: 'Payout processed',
    description: '$4,782 payout to Robert Garcia has been processed',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  }
];

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  
  // Fetch summary statistics
  const { data: stats, isLoading: isLoadingStats } = useQuery({
    queryKey: ['/api/admin/stats'],
    // If the API is not implemented, use mock data
    enabled: false
  });
  
  // Fetch active traders
  const { data: tradersData, isLoading: isLoadingTraders } = useQuery({
    queryKey: ['/api/admin/traders', { page: currentPage, limit: 5 }],
    // If the API is not implemented, use mock data
    enabled: false
  });
  
  // Generate chart data
  const performanceData = generatePerformanceData(30);
  const riskData = generateRiskData(30);
  
  // Mock stats
  const mockStats = {
    totalTraders: 1482,
    activeChallenges: 743,
    failedChallenges: 392,
    pendingPayouts: 48291
  };
  
  // Mock traders
  const mockTraders = [
    {
      user: {
        id: 1,
        username: "john_doe",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        profileImage: "https://images.unsplash.com/photo-1557862921-37829c790f19"
      },
      account: {
        id: 1,
        accountNumber: "2483921",
        startingBalance: "50000",
        balance: "52489.73",
        phase: "phase1",
        status: "active"
      },
      profit: 2489.73,
      profitPercent: 4.98,
      daysLeft: 14
    },
    {
      user: {
        id: 2,
        username: "sarah_j",
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.j@example.com",
        profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
      },
      account: {
        id: 2,
        accountNumber: "6743892",
        startingBalance: "100000",
        balance: "92145.30",
        phase: "phase1",
        status: "warning"
      },
      profit: -7854.70,
      profitPercent: -7.85,
      daysLeft: 8
    },
    {
      user: {
        id: 3,
        username: "m_chen",
        firstName: "Michael",
        lastName: "Chen",
        email: "m.chen@example.com",
        profileImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
      },
      account: {
        id: 3,
        accountNumber: "9274561",
        startingBalance: "200000",
        balance: "219863.45",
        phase: "phase1",
        status: "qualified"
      },
      profit: 19863.45,
      profitPercent: 9.93,
      daysLeft: 2
    }
  ];
  
  const isLoading = isLoadingStats || isLoadingTraders;
  
  return (
    <AdminLayout user={user || undefined}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Manage trading accounts, challenges, and payouts
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Account
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Total Traders"
          value={stats?.totalTraders || mockStats.totalTraders}
          icon={Users}
          iconColor="text-primary-600 dark:text-primary-400"
          iconBgColor="bg-primary-100 dark:bg-primary-900"
          href="/admin/traders"
          linkText="View all"
        />
        
        <StatsCard
          title="Active Challenges"
          value={stats?.activeChallenges || mockStats.activeChallenges}
          icon={CheckCircle}
          iconColor="text-green-600 dark:text-green-400"
          iconBgColor="bg-green-100 dark:bg-green-900"
          href="/admin/accounts?status=active"
          linkText="View all"
        />
        
        <StatsCard
          title="Failed Challenges"
          value={stats?.failedChallenges || mockStats.failedChallenges}
          icon={XCircle}
          iconColor="text-red-600 dark:text-red-400"
          iconBgColor="bg-red-100 dark:bg-red-900"
          href="/admin/accounts?status=breached"
          linkText="View all"
        />
        
        <StatsCard
          title="Pending Payouts"
          value={formatCurrency(stats?.pendingPayouts || mockStats.pendingPayouts)}
          icon={DollarSign}
          iconColor="text-yellow-600 dark:text-yellow-400"
          iconBgColor="bg-yellow-100 dark:bg-yellow-900"
          href="/admin/payouts"
          linkText="Process payouts"
        />
      </div>
      
      {/* Traders Table */}
      <div className="mb-6">
        <TradersTable 
          traders={tradersData?.traders || mockTraders}
          currentPage={currentPage}
          totalTraders={tradersData?.pagination?.total || 97}
          pageSize={5}
          onPageChange={setCurrentPage}
        />
      </div>
      
      {/* Risk Analysis and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Risk Analysis Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskData.slice(-14)} // Last 14 days
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 12]} />
                  <Tooltip formatter={(value) => value} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="breaches" name="Rule Breaches" fill="#EF4444" />
                  <Bar yAxisId="left" dataKey="nearBreaches" name="Near Breaches" fill="#F59E0B" />
                  <Line yAxisId="right" type="monotone" dataKey="riskFactor" name="Risk Factor" stroke="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Performance Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData.slice(-14)} // Last 14 days
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(value) => value} />
                  <Legend />
                  <Area type="monotone" dataKey="traders" name="Total Traders" stroke="#3B82F6" fill="#3B82F666" />
                  <Area type="monotone" dataKey="activeAccounts" name="Active Accounts" stroke="#10B981" fill="#10B98166" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <ActivityFeed activities={recentActivities} />
    </AdminLayout>
  );
}
