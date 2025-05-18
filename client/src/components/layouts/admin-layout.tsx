import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  BarChart, 
  CreditCard, 
  Users, 
  Settings, 
  AlertTriangle,
  LogOut,
  Menu,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle-fixed";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { name: 'Dashboard', href: '/admin', icon: BarChart },
    { name: 'Traders', href: '/admin/traders', icon: Users },
    { name: 'Trading Accounts', href: '/admin/accounts', icon: CreditCard },
    { name: 'Payouts', href: '/admin/payouts', icon: CreditCard },
    { name: 'Challenge Plans', href: '/admin/plans', icon: BarChart },
    { name: 'System Alerts', href: '/admin/alerts', icon: AlertTriangle },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 transform bg-white dark:bg-gray-800 shadow-lg transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0", 
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <Link href="/admin" className="flex items-center">
            <BarChart className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Admin</span>
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <span className="sr-only">Close sidebar</span>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = location === item.href;
              return (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                        isActive 
                          ? "bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-100" 
                          : "text-gray-700 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                      )}
                    >
                      <item.icon 
                        className={cn(
                          "mr-3 h-5 w-5 flex-shrink-0",
                          isActive ? "text-primary-500 dark:text-primary-400" : "text-gray-400 dark:text-gray-500"
                        )}
                      />
                      <span>{item.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
            >
              <LogOut className="mr-3 h-5 w-5" />
              <span>Log out</span>
            </Button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <ThemeToggle />
            <div className="ml-3 relative">
              {/* User dropdown would go here */}
              <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center">
                <span className="text-primary-700 dark:text-primary-200 font-medium">A</span>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;