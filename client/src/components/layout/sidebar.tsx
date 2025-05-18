import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { LucideIcon, Home, BarChart, Wallet, Trophy, History, LineChart, BookOpen, User, Settings, Headphones, LogOut } from "lucide-react";

interface SidebarProps {
  className?: string;
}

interface SidebarItemProps {
  icon: LucideIcon;
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarItem = ({ icon: Icon, href, children, active }: SidebarItemProps) => {
  return (
    <li>
      <Link href={href}>
        <a className={cn(
          "flex items-center px-4 py-2 text-sm font-medium rounded-md",
          active 
            ? "bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-200" 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        )}>
          <Icon className="w-5 h-5 mr-3" />
          {children}
        </a>
      </Link>
    </li>
  );
};

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="px-4 mb-4">
      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {title}
      </span>
      <ul className="mt-2 space-y-1">
        {children}
      </ul>
    </div>
  );
};

export function Sidebar({ className }: SidebarProps) {
  const [location] = useLocation();

  return (
    <div className={cn("hidden lg:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700", className)}>
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-primary-800 dark:text-primary-300">
          <LineChart className="inline-block mr-2" />
          TradeFunded
        </h1>
      </div>
      
      <nav className="flex-1 pt-5 pb-4 overflow-y-auto">
        <SidebarSection title="Main">
          <SidebarItem icon={Home} href="/dashboard" active={location === "/dashboard"}>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={BarChart} href="/trade-history" active={location === "/trade-history"}>
            Trading Accounts
          </SidebarItem>
          <SidebarItem icon={Wallet} href="/payouts" active={location === "/payouts"}>
            Payouts
          </SidebarItem>
          <SidebarItem icon={Trophy} href="/challenges" active={location === "/challenges"}>
            Challenges
          </SidebarItem>
        </SidebarSection>
        
        <SidebarSection title="Trading">
          <SidebarItem icon={History} href="/trade-history" active={location === "/trade-history"}>
            Trade History
          </SidebarItem>
          <SidebarItem icon={BarChart} href="/analytics" active={location === "/analytics"}>
            Analytics
          </SidebarItem>
          <SidebarItem icon={BookOpen} href="#" active={false}>
            Trading Journal
          </SidebarItem>
        </SidebarSection>
        
        <SidebarSection title="Account">
          <SidebarItem icon={User} href="/profile" active={location === "/profile"}>
            Profile
          </SidebarItem>
          <SidebarItem icon={Settings} href="#" active={false}>
            Settings
          </SidebarItem>
          <SidebarItem icon={Headphones} href="#" active={false}>
            Support
          </SidebarItem>
          <SidebarItem icon={LogOut} href="/logout" active={false}>
            Logout
          </SidebarItem>
        </SidebarSection>
      </nav>
    </div>
  );
}

export function AdminSidebar({ className }: SidebarProps) {
  const [location] = useLocation();

  return (
    <div className={cn("hidden lg:flex flex-col w-64 bg-primary-800 text-white", className)}>
      <div className="px-6 py-4 border-b border-primary-700">
        <h1 className="text-2xl font-bold text-white">
          <LineChart className="inline-block mr-2" />
          TradeFunded
        </h1>
        <p className="text-xs text-primary-200 mt-1">Admin Portal</p>
      </div>
      
      <nav className="flex-1 pt-5 pb-4 overflow-y-auto">
        <SidebarSection title="Management">
          <SidebarItem 
            icon={Home} 
            href="/admin" 
            active={location === "/admin"}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem 
            icon={User} 
            href="/admin/traders" 
            active={location === "/admin/traders"}
          >
            Traders
          </SidebarItem>
          <SidebarItem 
            icon={Wallet} 
            href="/admin/accounts" 
            active={location === "/admin/accounts"}
          >
            Accounts
          </SidebarItem>
          <SidebarItem 
            icon={Wallet} 
            href="/admin/payouts" 
            active={location === "/admin/payouts"}
          >
            Payouts
          </SidebarItem>
        </SidebarSection>
        
        <SidebarSection title="Monitoring">
          <SidebarItem 
            icon={Settings} 
            href="#" 
            active={false}
          >
            Risk Management
          </SidebarItem>
          <SidebarItem 
            icon={Settings} 
            href="#" 
            active={false}
          >
            Alerts
          </SidebarItem>
          <SidebarItem 
            icon={LineChart} 
            href="#" 
            active={false}
          >
            Performance
          </SidebarItem>
        </SidebarSection>
        
        <SidebarSection title="System">
          <SidebarItem 
            icon={Settings} 
            href="#" 
            active={false}
          >
            Settings
          </SidebarItem>
          <SidebarItem 
            icon={LogOut} 
            href="/logout" 
            active={false}
          >
            Logout
          </SidebarItem>
        </SidebarSection>
      </nav>
    </div>
  );
}
