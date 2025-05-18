// Import the hook from our auth provider
import { useAuth as useAuthFromProvider } from "../providers/AuthProvider";

// Re-export the hook for easy usage throughout the app
export const useAuth = useAuthFromProvider;
export default useAuth;