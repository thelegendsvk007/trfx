import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export function useTradingAccounts() {
  const { toast } = useToast();
  
  // Get all trading accounts for the logged in user
  const { data: accounts, isLoading, isError, error } = useQuery({
    queryKey: ['/api/trading-accounts'],
    onError: (err: any) => {
      toast({
        title: 'Error',
        description: `Failed to load trading accounts: ${err.message}`,
        variant: 'destructive'
      });
    }
  });
  
  // Get specific account details
  const getAccount = (accountId: number) => {
    return useQuery({
      queryKey: [`/api/trading-accounts/${accountId}`],
      enabled: !!accountId,
      onError: (err: any) => {
        toast({
          title: 'Error',
          description: `Failed to load account details: ${err.message}`,
          variant: 'destructive'
        });
      }
    });
  };
  
  // Get account trades
  const getAccountTrades = (accountId: number, page = 1, limit = 20) => {
    return useQuery({
      queryKey: [`/api/trading-accounts/${accountId}/trades`, { page, limit }],
      enabled: !!accountId,
      onError: (err: any) => {
        toast({
          title: 'Error',
          description: `Failed to load trades: ${err.message}`,
          variant: 'destructive'
        });
      }
    });
  };
  
  // Purchase a challenge
  const purchaseChallenge = useMutation({
    mutationFn: async (data: { planId: number, paymentMethod: string, amount: number }) => {
      const res = await apiRequest('POST', '/api/payments', data);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/trading-accounts'] });
      queryClient.invalidateQueries({ queryKey: ['/api/payments'] });
      
      toast({
        title: 'Success',
        description: 'Challenge purchased successfully',
      });
    },
    onError: (err: any) => {
      toast({
        title: 'Error',
        description: `Failed to purchase challenge: ${err.message}`,
        variant: 'destructive'
      });
    }
  });
  
  // Request a payout
  const requestPayout = useMutation({
    mutationFn: async (data: { accountId: number, amount: number, paymentMethod: string }) => {
      const res = await apiRequest('POST', '/api/payouts', data);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/payouts'] });
      
      toast({
        title: 'Success',
        description: 'Payout requested successfully',
      });
    },
    onError: (err: any) => {
      toast({
        title: 'Error',
        description: `Failed to request payout: ${err.message}`,
        variant: 'destructive'
      });
    }
  });
  
  return {
    accounts,
    isLoading,
    isError,
    error,
    getAccount,
    getAccountTrades,
    purchaseChallenge,
    requestPayout
  };
}
