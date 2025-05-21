import { useEffect, useRef } from "react";

interface TradingViewChartProps {
  symbol: string;
  width?: string | number;
  height?: string | number;
  interval?: string;
  theme?: "light" | "dark";
  container?: string;
}

export function TradingViewChart({
  symbol,
  width = "100%",
  height = 300,
  interval = "D",
  theme = "dark",
  container,
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerId = container || `tradingview_${Math.random().toString(36).substring(2, 15)}`;

  useEffect(() => {
    // Create script element for TradingView widget
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== "undefined") {
        new window.TradingView.widget({
          autosize: true,
          symbol,
          interval,
          timezone: "Etc/UTC",
          theme,
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          studies: [
            "BB@tv-basicstudies",
            "MAExp@tv-basicstudies"
          ],
          container_id: containerId,
          news: [
            "headlines",
            "stocktwits"
          ],
          show_popup_button: true,
          withdateranges: true,
          allow_symbol_change: true,
          details: true,
        });
      }
    };
    document.head.appendChild(script);

    // Clean up
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [symbol, interval, theme, containerId]);

  return <div id={containerId} ref={containerRef} style={{ width, height }} />;
}

// Add TradingView to the window object
declare global {
  interface Window {
    TradingView: any;
  }
}