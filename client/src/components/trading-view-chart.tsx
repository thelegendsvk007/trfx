import { useEffect, useRef } from 'react';

interface TradingViewChartProps {
  symbol?: string;
  interval?: string;
  theme?: 'light' | 'dark';
  container?: string;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  studies?: string[];
}

export default function TradingViewChart({
  symbol = 'XAUUSD',
  interval = '1D',
  theme = 'dark',
  container = 'tradingview_chart',
  width = '100%',
  height = 400,
  autosize = false,
  studies = []
}: TradingViewChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing scripts to avoid duplications
    const existingScript = document.getElementById('tradingview-widget-script');
    if (existingScript) existingScript.remove();

    // Create script element
    const script = document.createElement('script');
    script.id = 'tradingview-widget-script';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && chartContainerRef.current) {
        new window.TradingView.widget({
          autosize,
          symbol,
          interval,
          container_id: container,
          library_path: 'https://s3.tradingview.com/charting_library/',
          locale: 'en',
          timezone: 'exchange',
          theme,
          style: '1',
          toolbar_bg: theme === 'dark' ? '#1E1E1E' : '#F5F5F5',
          enable_publishing: false,
          allow_symbol_change: true,
          save_image: false,
          studies,
          hide_top_toolbar: false,
          hide_side_toolbar: false,
          withdateranges: true,
          width,
          height
        });
      }
    };

    // Append script to document
    document.head.appendChild(script);

    return () => {
      // Clean up
      if (existingScript) existingScript.remove();
    };
  }, [symbol, interval, theme, container, width, height, autosize, studies]);

  return <div id={container} ref={chartContainerRef} style={{ width, height }} />;
}

// Declare TradingView in global window object
declare global {
  interface Window {
    TradingView: any;
  }
}