import { createContext, useContext, useState, ReactNode } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Define user type
export interface User {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  role: 'admin' | 'trader';
  status: 'active' | 'inactive' | 'suspended';
}

// Auth context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  loginWithProvider: (provider: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Login function
  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiRequest("POST", "/api/login", { username, password });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
      
      const userData = await response.json();
      setUser(userData);
      // Redirect to dashboard after successful login
      window.location.href = "/dashboard";
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred during login";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Provider login (OAuth)
  const loginWithProvider = async (provider: string) => {
    window.location.href = `/api/login/${provider}`;
  };
  
  // Register function
  const register = async (userData: any) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiRequest("POST", "/api/register", userData);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }
      
      // Successfully registered
      toast({
        title: "Registration successful",
        description: "Your account has been created successfully.",
      });
      
      // Optionally auto login user after registration
      // const userData = await response.json();
      // setUser(userData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred during registration";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Logout function
  const logout = async () => {
    setLoading(true);
    
    try {
      await apiRequest("POST", "/api/logout");
      
      // Clear user data
      setUser(null);
      
      // Redirect to home page after logout
      window.location.href = "/";
    } catch (err) {
      console.error("Logout error:", err);
      toast({
        title: "Logout failed",
        description: "Failed to log out. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Check if user is authenticated on mount
  /*
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await apiRequest("GET", "/api/auth/user");
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (err) {
        // Silent fail - user not logged in
        console.log("Not authenticated");
      }
    };
    
    checkAuth();
  }, []);
  */
  
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isAuthenticated: !!user,
        login,
        loginWithProvider,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook for easy context use
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
}