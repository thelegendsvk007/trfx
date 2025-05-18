import { useEffect, useRef } from 'react';

// Define the TradingView widget properties interface
interface TradingViewWidgetProps {
  symbol?: string;
  interval?: string;
  theme?: 'light' | 'dark';
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  timezone?: string;
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  hide_top_toolbar?: boolean;
  withdateranges?: boolean;
  hide_side_toolbar?: boolean;
  allow_symbol_change?: boolean;
  save_image?: boolean;
  studies?: string[];
  show_popup_button?: boolean;
  popup_width?: string | number;
  popup_height?: string | number;
  container_id?: string;
}

export default function TradingViewChart({
  symbol = 'OANDA:XAUUSD', // Default to Gold (XAUUSD)
  interval = '30',
  theme = 'dark',
  width = '100%',
  height = '600',
  autosize = true,
  timezone = 'exchange',
  locale = 'en',
  toolbar_bg = '#f1f3f6',
  enable_publishing = false,
  hide_top_toolbar = false,
  withdateranges = true,
  hide_side_toolbar = false,
  allow_symbol_change = true,
  save_image = true,
  studies = [],
  show_popup_button = false,
  popup_width = '1000',
  popup_height = '650',
  container_id = 'tradingview_chart'
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the script element dynamically
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && containerRef.current) {
        // Clear any existing content
        containerRef.current.innerHTML = '';
        
        // Create and render the widget
        new window.TradingView.widget({
          autosize,
          symbol,
          interval,
          timezone,
          theme,
          style: "1",
          locale,
          toolbar_bg,
          enable_publishing,
          hide_top_toolbar,
          withdateranges,
          hide_side_toolbar,
          allow_symbol_change,
          save_image,
          studies,
          show_popup_button,
          popup_width,
          popup_height,
          container_id,
        });
      }
    };
    
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [
    symbol,
    interval,
    theme,
    timezone,
    locale,
    toolbar_bg,
    enable_publishing,
    hide_top_toolbar,
    withdateranges,
    hide_side_toolbar,
    allow_symbol_change,
    save_image,
    studies,
    show_popup_button,
    popup_width,
    popup_height,
    container_id,
    autosize,
  ]);

  return (
    <div className="trading-chart-container">
      <div id={container_id} ref={containerRef} style={{ width, height }} />
    </div>
  );
}

// Declare the TradingView object on the window
declare global {
  interface Window {
    TradingView: {
      widget: any;
    };
  }
}