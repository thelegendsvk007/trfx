import * as React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import { useLocation } from 'wouter';

// Define our User type
export interface User {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  role: 'admin' | 'trader';
  status: 'active' | 'inactive' | 'suspended';
}

// Define the authentication context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  loginWithProvider: (provider: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component that wraps the app and makes auth available to any child component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [, navigate] = useLocation();

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, we'd make an API call to check the session
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  // Login user
  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // This is a mock implementation - in a real app, we'd make an API call
      // For demo purposes, we'll simulate a successful login after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate user data returned from API
      const userData: User = {
        id: 1,
        email: `${username}@example.com`,
        username,
        firstName: "Demo",
        lastName: "User",
        role: "trader",
        status: "active"
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Login with a provider
  const loginWithProvider = async (provider: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a sample user based on the provider
      const userData: User = {
        id: 2,
        email: `user@${provider}.com`,
        username: `${provider}User`,
        firstName: `${provider.charAt(0).toUpperCase() + provider.slice(1)}`,
        lastName: "User",
        role: "trader",
        status: "active"
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || `${provider} login failed`);
    } finally {
      setLoading(false);
    }
  };

  // Register user
  const register = async (userData: any) => {
    setLoading(true);
    setError(null);
    
    try {
      // This is a mock implementation - in a real app, we'd make an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, we'll just do the same as login
      const newUser: User = {
        id: 3,
        email: userData.email,
        username: userData.username,
        firstName: userData.firstName || null,
        lastName: userData.lastName || null,
        role: "trader",
        status: "active"
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    try {
      // This is a mock implementation - in a real app, we'd make an API call
      localStorage.removeItem('user');
      setUser(null);
      navigate('/');
    } catch (err: any) {
      console.error("Logout failed", err);
    }
  };
  
  const contextValue = {
    user,
    loading,
    error,
    login,
    loginWithProvider,
    register,
    logout
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}