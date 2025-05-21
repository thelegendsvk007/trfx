import { useEffect, useRef, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CandleData {
  c: number; // close
  h: number; // high
  l: number; // low
  o: number; // open
  t: number; // timestamp
  v: number; // volume
}

interface ChartData {
  time: string;
  price: number;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
}

interface FinhubChartProps {
  symbol: string;
  height?: number | string;
  interval?: string;
  className?: string;
}

export function FinhubChart({
  symbol,
  height = 400,
  interval = 'D',
  className = '',
}: FinhubChartProps) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Generate sample data for demonstration
  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // This would be a real API call in production
        // const response = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${interval}&from=${startTime}&to=${endTime}&token=${FINNHUB_API_KEY}`);
        // const data = await response.json();
        
        // For now, generate realistic looking data based on the symbol
        const basePrice = getBasePrice(symbol);
        const volatility = getVolatility(symbol);
        const points = 120;
        const now = new Date();
        
        const sampleData: ChartData[] = [];
        
        for (let i = 0; i < points; i++) {
          const time = new Date(now.getTime() - (points - i) * 15 * 60 * 1000);
          const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          
          // Generate a realistic price movement
          const change = (Math.random() - 0.5) * 2 * volatility;
          const lastPrice = i > 0 ? sampleData[i-1].price : basePrice;
          const price = lastPrice + change;
          
          sampleData.push({
            time: timeStr,
            price: parseFloat(price.toFixed(5)),
          });
        }
        
        setChartData(sampleData);
      } catch (err) {
        console.error('Error fetching chart data:', err);
        setError('Failed to load chart data');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchChartData();
  }, [symbol, interval]);
  
  // Helper function to get a realistic base price for a symbol
  const getBasePrice = (symbol: string) => {
    const symbolMap: Record<string, number> = {
      'EURUSD': 1.09,
      'GBPUSD': 1.26,
      'USDJPY': 154.30,
      'XAUUSD': 2345.80,
      'XAGUSD': 30.45,
      'BCOUSD': 78.92,
      'NATGASUSD': 2.34,
    };
    
    return symbolMap[symbol.replace('FX:', '').replace('OANDA:', '')] || 1.0;
  };
  
  // Helper function to get realistic volatility for a symbol
  const getVolatility = (symbol: string) => {
    const volatilityMap: Record<string, number> = {
      'EURUSD': 0.0005,
      'GBPUSD': 0.0008,
      'USDJPY': 0.02,
      'XAUUSD': 0.5,
      'XAGUSD': 0.1,
      'BCOUSD': 0.2,
      'NATGASUSD': 0.05,
    };
    
    return volatilityMap[symbol.replace('FX:', '').replace('OANDA:', '')] || 0.001;
  };
  
  const formatPrice = (value: number) => {
    if (value > 100) {
      return value.toFixed(2);
    } else if (value > 10) {
      return value.toFixed(3);
    } else {
      return value.toFixed(5);
    }
  };
  
  const formatTooltipValue = (value: number) => {
    return formatPrice(value);
  };
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border/50 rounded-md p-2 shadow-md">
          <p className="text-xs mb-1">{label}</p>
          <p className="text-sm font-medium">{formatTooltipValue(payload[0].value)}</p>
        </div>
      );
    }
    
    return null;
  };
  
  if (isLoading) {
    return (
      <div className={`flex items-center justify-center h-${typeof height === 'number' ? height : 'full'} ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className={`flex items-center justify-center h-${typeof height === 'number' ? height : 'full'} ${className}`}>
        <div className="text-red-500">{error}</div>
      </div>
    );
  }
  
  return (
    <div className={`w-full ${className}`} style={{ height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2e3440" opacity={0.6} />
          <XAxis 
            dataKey="time" 
            stroke="#6B7280" 
            fontSize={10} 
            tickMargin={8}
            minTickGap={15}
          />
          <YAxis 
            stroke="#6B7280" 
            fontSize={10}
            domain={['dataMin - 0.001', 'dataMax + 0.001']}
            tickFormatter={(value) => formatPrice(value)}
            width={60}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#5E81AC" 
            strokeWidth={1.5} 
            dot={false} 
            activeDot={{ r: 4 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}