import { useState } from 'react';
import { useLocation } from 'wouter';

// Temporary simplified auth hook for the UI demonstration
export function useAuth() {
  const [, navigate] = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<null | { username: string }>(null);

  // Simplified login function for UI demo
  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate login delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes only
      if (password === 'demo') {
        setUser({ username });
        navigate('/dashboard');
        return;
      }
      
      // Mock error for demo
      setError('Invalid username or password');
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // For external providers like Google, Microsoft, etc.
  const loginWithProvider = async (provider: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate provider login delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes only - redirect to dashboard
      setUser({ username: `${provider}_user` });
      navigate('/dashboard');
    } catch (err) {
      setError(`Error authenticating with ${provider}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    navigate('/login');
  };

  return {
    user,
    loading,
    error,
    login,
    loginWithProvider,
    logout,
    isAuthenticated: !!user,
  };
}

export default useAuth;