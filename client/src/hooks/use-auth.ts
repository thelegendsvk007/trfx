import { useAuth as useAuthContext } from '@/components/auth-provider';

// Re-export the auth hook for ease of use throughout the app
export const useAuth = useAuthContext;
