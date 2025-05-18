import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createChart, ColorType, LineStyle, UTCTimestamp } from "lightweight-charts";
import { formatCurrency } from "@/lib/utils";

interface PerformanceChartProps {
  data: {
    time: number; // Timestamp in milliseconds
    value: number; // Account balance
  }[];
  title?: string;
}

type TimeRange = "1D" | "1W" | "1M" | "ALL";

export function PerformanceChart({ data, title = "Performance" }: PerformanceChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);
  const [activeRange, setActiveRange] = useState<TimeRange>("1W");
  const [filteredData, setFilteredData] = useState(data);
  
  // Filter data based on selected time range
  useEffect(() => {
    const now = new Date().getTime();
    let filtered;
    
    switch (activeRange) {
      case "1D":
        filtered = data.filter(item => (now - item.time) <= 24 * 60 * 60 * 1000);
        break;
      case "1W":
        filtered = data.filter(item => (now - item.time) <= 7 * 24 * 60 * 60 * 1000);
        break;
      case "1M":
        filtered = data.filter(item => (now - item.time) <= 30 * 24 * 60 * 60 * 1000);
        break;
      default:
        filtered = data;
    }
    
    setFilteredData(filtered.length > 0 ? filtered : data);
  }, [activeRange, data]);
  
  // Initialize chart
  useEffect(() => {
    if (chartContainerRef.current) {
      // Clean up previous chart if it exists
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
        seriesRef.current = null;
      }
      
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: "transparent" },
          textColor: "rgba(100, 116, 139, 0.9)",
        },
        grid: {
          vertLines: { color: "rgba(226, 232, 240, 0.5)" },
          horzLines: { color: "rgba(226, 232, 240, 0.5)" },
        },
        rightPriceScale: {
          borderColor: "rgba(226, 232, 240, 0.5)",
        },
        timeScale: {
          borderColor: "rgba(226, 232, 240, 0.5)",
          timeVisible: true,
          secondsVisible: false,
        },
        crosshair: {
          mode: 0,
          vertLine: {
            width: 1,
            color: "#60A5FA",
            style: LineStyle.Solid,
          },
          horzLine: {
            width: 1,
            color: "#60A5FA",
            style: LineStyle.Solid,
          },
        },
        localization: {
          priceFormatter: (price: number) => formatCurrency(price),
        },
        handleScroll: true,
        handleScale: true,
      });
      
      // Apply different styling for dark mode
      if (document.documentElement.classList.contains("dark")) {
        chart.applyOptions({
          layout: {
            textColor: "rgba(226, 232, 240, 0.9)",
          },
          grid: {
            vertLines: { color: "rgba(51, 65, 85, 0.5)" },
            horzLines: { color: "rgba(51, 65, 85, 0.5)" },
          },
          rightPriceScale: {
            borderColor: "rgba(51, 65, 85, 0.5)",
          },
          timeScale: {
            borderColor: "rgba(51, 65, 85, 0.5)",
          },
        });
      }
      
      const areaSeries = chart.addAreaSeries({
        topColor: "rgba(59, 130, 246, 0.4)",
        bottomColor: "rgba(59, 130, 246, 0.0)",
        lineColor: "rgba(59, 130, 246, 1)",
        lineWidth: 2,
      });
      
      const formattedData = filteredData.map(item => ({
        time: (item.time / 1000) as UTCTimestamp,
        value: item.value
      }));
      
      areaSeries.setData(formattedData);
      
      // Set up tooltip
      const toolTip = document.createElement("div");
      toolTip.className = "tooltip absolute bg-gray-800 text-white p-2 rounded text-xs pointer-events-none opacity-0 transition-opacity duration-300 z-10";
      tooltipRef.current = toolTip;
      chartContainerRef.current.appendChild(toolTip);
      
      chart.subscribeCrosshairMove((param) => {
        if (!tooltipRef.current) return;
        
        if (
          param.point === undefined ||
          !param.time ||
          param.point.x < 0 ||
          param.point.y < 0
        ) {
          tooltipRef.current.style.opacity = "0";
          return;
        }
        
        const data = param.seriesData.get(areaSeries) as any;
        if (!data) return;
        
        const date = new Date(data.time * 1000);
        const formattedDate = date.toLocaleDateString();
        const formattedValue = formatCurrency(data.value);
        
        tooltipRef.current.innerHTML = `
          <div class="font-bold">${formattedDate}</div>
          <div>Balance: ${formattedValue}</div>
        `;
        
        const coordinate = areaSeries.priceToCoordinate(data.value);
        const shiftX = chartContainerRef.current?.clientWidth && param.point.x > chartContainerRef.current.clientWidth / 2 
          ? -100 
          : 10;
        const shiftY = coordinate && coordinate > 100 ? -50 : 10;
        
        tooltipRef.current.style.left = `${param.point.x + shiftX}px`;
        tooltipRef.current.style.top = `${param.point.y + shiftY}px`;
        tooltipRef.current.style.opacity = "1";
      });
      
      // Store references
      chartRef.current = chart;
      seriesRef.current = areaSeries;
      
      // Handle resize
      const handleResize = () => {
        if (chartContainerRef.current && chartRef.current) {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
          });
        }
      };
      
      window.addEventListener("resize", handleResize);
      
      // Initial size
      handleResize();
      
      // Return cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
        if (chartRef.current) {
          chartRef.current.remove();
          chartRef.current = null;
          seriesRef.current = null;
        }
        if (tooltipRef.current) {
          tooltipRef.current.remove();
          tooltipRef.current = null;
        }
      };
    }
  }, [filteredData]);
  
  // Update chart data when filtered data changes
  useEffect(() => {
    if (seriesRef.current) {
      const formattedData = filteredData.map(item => ({
        time: (item.time / 1000) as UTCTimestamp,
        value: item.value
      }));
      
      seriesRef.current.setData(formattedData);
      
      // Fit content if there's data
      if (formattedData.length > 0 && chartRef.current) {
        chartRef.current.timeScale().fitContent();
      }
    }
  }, [filteredData]);
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-base font-medium text-gray-900 dark:text-white">{title}</h3>
          <div className="mt-2 sm:mt-0 flex items-center space-x-2">
            <Button 
              variant={activeRange === "1D" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveRange("1D")}
              className="px-3 py-1 text-xs font-medium"
            >
              1D
            </Button>
            <Button 
              variant={activeRange === "1W" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveRange("1W")}
              className="px-3 py-1 text-xs font-medium"
            >
              1W
            </Button>
            <Button 
              variant={activeRange === "1M" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveRange("1M")}
              className="px-3 py-1 text-xs font-medium"
            >
              1M
            </Button>
            <Button 
              variant={activeRange === "ALL" ? "default" : "outline"} 
              size="sm"
              onClick={() => setActiveRange("ALL")}
              className="px-3 py-1 text-xs font-medium"
            >
              ALL
            </Button>
          </div>
        </div>
        <div className="relative h-64 w-full" ref={chartContainerRef}></div>
      </CardContent>
    </Card>
  );
}
