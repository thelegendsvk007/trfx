import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number | string, currency = 'USD'): string {
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numAmount);
}

export function formatPercent(value: number | string): string {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numValue / 100);
}

export function formatDate(date: Date | string | number): string {
  if (!date) return '';
  return format(new Date(date), 'MMM d, yyyy');
}

export function formatDateTime(date: Date | string | number): string {
  if (!date) return '';
  return format(new Date(date), 'MMM d, yyyy h:mm a');
}

export function formatTimeAgo(date: Date | string | number): string {
  if (!date) return '';
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function getDaysLeft(endDate: Date | string | number): number {
  if (!endDate) return 0;
  const end = new Date(endDate);
  const now = new Date();
  
  // Return 0 if date is in the past
  if (end < now) return 0;
  
  const diffTime = end.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function calculateProgressPercentage(current: number, target: number): number {
  if (!current || !target || target === 0) return 0;
  const percentage = (current / target) * 100;
  return Math.min(100, Math.max(0, percentage));
}

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function truncateString(str: string, maxLength: number): string {
  if (!str || str.length <= maxLength) return str;
  return `${str.substring(0, maxLength)}...`;
}

export function getInitials(firstName?: string, lastName?: string): string {
  if (!firstName && !lastName) return 'U';
  
  let initials = '';
  if (firstName) initials += firstName[0].toUpperCase();
  if (lastName) initials += lastName[0].toUpperCase();
  
  return initials;
}

export function getRandomColor(seed: string | number): string {
  let hash = 0;
  const seedStr = seed.toString();
  
  for (let i = 0; i < seedStr.length; i++) {
    hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 70%, 40%)`;
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'breached':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    case 'qualified':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'phase2':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'expired':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'processing':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'success':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'failed':
    case 'rejected':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
}

export function getTradeTypeIcon(type: string): string {
  return type.toLowerCase() === 'buy' ? 'arrow-up' : 'arrow-down';
}

export function getTradeTypeColor(type: string): string {
  return type.toLowerCase() === 'buy' 
    ? 'text-green-500 bg-green-100 dark:bg-green-900' 
    : 'text-red-500 bg-red-100 dark:bg-red-900';
}

export function getProfitColor(profit: number | string): string {
  const numProfit = typeof profit === 'string' ? parseFloat(profit) : profit;
  return numProfit >= 0 ? 'text-green-500' : 'text-red-500';
}

export function generateAccountNumber(): string {
  return Math.floor(1000000 + Math.random() * 9000000).toString();
}
