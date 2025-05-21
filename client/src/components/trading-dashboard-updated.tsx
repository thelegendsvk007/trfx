import React, { useEffect, useRef } from 'react';

// Continuous banner carousel component for "Our Capital, Your Profits" text
function ContinuousBanner({ direction = 'left', speed = 30 }: { direction?: 'left' | 'right'; speed?: number }) {
  const items = Array(15).fill(null);
  
  return (
    <div className="w-full bg-gradient-to-r from-blue-900/70 via-indigo-900/70 to-purple-900/70 py-1 overflow-hidden">
      <div 
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'left' ? 'normal' : 'reverse'
        }}
      >
        {items.map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-green-400 font-bold mr-2">OUR CAPITAL</span>
            <span className="text-white font-bold mx-2">YOUR PROFITS</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Small trading card component for dashboard
function TradingCard({ 
  title, 
  position = 'center', 
  color = 'blue', 
  content,
  size = 'small'
}: { 
  title: string; 
  position?: 'left' | 'right' | 'center' | 'top' | 'bottom'; 
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'orange' | 'pink';
  content: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}) {
  // Map colors to their CSS classes
  const colorMap = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500'
  };
  
  // Size mapping
  const sizeMap = {
    small: 'w-40',
    medium: 'w-48',
    large: 'w-56'
  };
  
  return (
    <div className={`floating-card ${sizeMap[size]} bg-black/80 backdrop-blur-md rounded-lg border border-border/20 shadow-lg transition-all duration-300 hover:scale-105 hover:border-${color}-500/50 hover:shadow-${color}-500/20 hover:shadow-lg cursor-pointer group`}>
      <div className="p-2">
        <div className="flex items-center mb-1">
          <div className={`h-2 w-2 rounded-full ${colorMap[color]} mr-2 group-hover:animate-pulse`}></div>
          <div className="text-xs text-white/70 group-hover:text-white">{title}</div>
        </div>
        {content}
      </div>
    </div>
  );
}

// Mini chart component
function MiniChart({ type = 'line', color = 'green' }: { type?: 'line' | 'bar' | 'area'; color?: 'green' | 'red' | 'blue' }) {
  const colorClass = color === 'green' ? 'from-green-500/20 to-green-500/40' : 
                    color === 'red' ? 'from-red-500/20 to-red-500/40' : 
                    'from-blue-500/20 to-blue-500/40';
  
  if (type === 'line') {
    // Simple line chart
    return (
      <div className="h-12 w-full relative mt-1">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/10"></div>
        <div className={`h-full w-full bg-gradient-to-r ${colorClass} rounded-sm relative overflow-hidden`}>
          <div className="absolute bottom-0 left-0 right-0 h-[40%] border-t border-white/20"></div>
          <svg viewBox="0 0 100 40" className="w-full h-full">
            <path 
              d={`M0,30 L10,28 L20,25 L30,20 L40,15 L50,25 L60,20 L70,15 L80,10 L90,15 L100,10`}
              fill="none"
              stroke={color === 'green' ? '#10B981' : color === 'red' ? '#EF4444' : '#3B82F6'}
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    );
  }
  
  if (type === 'bar') {
    // Simple bar chart
    return (
      <div className="h-12 w-full flex items-end justify-between space-x-1 mt-1">
        {[...Array(8)].map((_, i) => {
          const height = 30 + Math.random() * 70;
          return (
            <div 
              key={i}
              className={`bg-gradient-to-t ${colorClass} rounded-sm w-full`}
              style={{ height: `${height}%` }}
            ></div>
          );
        })}
      </div>
    );
  }
  
  // Area chart (default)
  return (
    <div className="h-10 w-full relative mt-1">
      <div className={`h-full w-full bg-gradient-to-r ${colorClass} rounded-sm`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

export function TradingDashboard() {
  // Reference to the floating cards container for animation
  const floatingCardsRef = useRef<HTMLDivElement>(null);
  
  // Animation effect for floating cards
  useEffect(() => {
    const cards = floatingCardsRef.current?.querySelectorAll('.floating-card');
    if (!cards) return;
    
    // Set initial random positions and movements for each card
    cards.forEach(card => {
      const element = card as HTMLElement;
      // Random speed between 15-35 seconds for a full animation cycle
      const animDuration = 15 + Math.random() * 20;
      // Random starting position in the animation
      const animDelay = Math.random() * -20;
      // Random movement range - increased for more movement
      const translateX = 10 + Math.random() * 30;
      const translateY = 10 + Math.random() * 30;
      
      // Apply custom properties for animation
      element.style.setProperty('--anim-duration', `${animDuration}s`);
      element.style.setProperty('--anim-delay', `${animDelay}s`);
      element.style.setProperty('--translate-x', `${translateX}px`);
      element.style.setProperty('--translate-y', `${translateY}px`);
      
      // Set a random z-index between 5-20 for card overlapping
      element.style.zIndex = `${5 + Math.floor(Math.random() * 15)}`;
      
      // Random initial positions
      const randomX = Math.random() * 15 - 7.5; // -7.5% to 7.5% from original position
      const randomY = Math.random() * 15 - 7.5; // -7.5% to 7.5% from original position
      
      if (!element.style.transform) {
        element.style.transform = '';
      }
      element.style.transform += ` translate(${randomX}%, ${randomY}%)`;
    });
  }, []);
  
  return (
    <div className="w-full flex flex-col">
      {/* Top carousel banner */}
      <ContinuousBanner direction="left" speed={25} />
      
      {/* Trading dashboard panel - full width */}
      <div 
        className="relative aspect-[21/9] w-full rounded-lg bg-black/70 backdrop-blur-lg shadow-2xl flex items-center justify-center group overflow-hidden"
        ref={floatingCardsRef}
      >
        {/* Animated background bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 animate-float"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${20 + Math.random() * 30}s`,
                animationDelay: `${Math.random() * -30}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Background circles */}
        <div className="absolute left-1/3 top-1/3 w-56 h-56 rounded-full border border-blue-500/20 opacity-30"></div>
        <div className="absolute right-1/3 bottom-0 w-80 h-80 rounded-full border border-purple-500/20 opacity-20"></div>
        <div className="absolute left-2/3 top-1/4 w-40 h-40 rounded-full border border-green-500/20 opacity-25"></div>
        <div className="absolute right-10 top-20 w-5 h-5 rounded-full bg-green-500/20"></div>
        <div className="absolute left-20 bottom-10 w-3 h-3 rounded-full bg-blue-500/30"></div>
        <div className="absolute right-1/4 bottom-1/3 w-2 h-2 rounded-full bg-purple-500/40"></div>
        <div className="absolute left-1/4 top-1/3 w-4 h-4 rounded-full bg-teal-500/20"></div>

        {/* Market Data Cards */}
        <div className="absolute left-[5%] top-[5%]">
          <TradingCard 
            title="Market Data" 
            color="purple"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">EUR/USD</span>
                  <span className="text-[10px] text-green-400">1.0856</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">XAU/USD</span>
                  <span className="text-[10px] text-red-400">1923.45</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* EUR/USD Chart */}
        <div className="absolute left-[25%] top-[15%]">
          <TradingCard 
            title="EUR/USD Chart" 
            color="green"
            size="medium"
            content={<MiniChart type="line" color="green" />}
          />
        </div>
        
        {/* Account Growth Card */}
        <div className="absolute left-[10%] top-[35%]">
          <TradingCard 
            title="Account Growth" 
            color="green"
            size="medium"
            content={<MiniChart type="line" color="green" />}
          />
        </div>
        
        {/* Positions Card */}
        <div className="absolute left-[5%] bottom-[30%]">
          <TradingCard 
            title="Positions" 
            color="pink"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Open</span>
                  <span className="text-[10px] text-white">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">P/L</span>
                  <span className="text-[10px] text-green-400">+$120</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Portfolio Analytics Card */}
        <div className="absolute left-[35%] bottom-[25%]">
          <TradingCard 
            title="Portfolio Analytics" 
            color="purple"
            size="medium"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Drawdown</span>
                  <span className="text-[10px] text-red-400">2.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Profit Factor</span>
                  <span className="text-[10px] text-green-400">1.8</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Certificate Card */}
        <div className="absolute left-1/3 transform -translate-x-1/2 bottom-[8%]">
          <div className="floating-card w-48 bg-black/80 backdrop-blur-md rounded-lg border border-border/20 shadow-lg">
            <div className="p-3">
              <div className="text-xs text-white/70 mb-1">TRFX Certificate</div>
              <div className="h-12 bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded flex items-center justify-center">
                <span className="text-xs text-white font-bold">FUNDED TRADER</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Economic Calendar Card */}
        <div className="absolute right-[25%] top-[5%]">
          <TradingCard 
            title="Economic Calendar" 
            color="yellow"
            size="medium"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">USD CPI</span>
                  <span className="text-[10px] text-yellow-400">30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">ECB Rate</span>
                  <span className="text-[10px] text-yellow-400">45</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* News Feed Card */}
        <div className="absolute right-[40%] top-[15%]">
          <TradingCard 
            title="News Feed" 
            color="blue"
            size="medium"
            content={
              <div className="space-y-1">
                <div className="text-[9px] text-white/70">Fed signals potential rate cut</div>
                <div className="text-[9px] text-white/70">ECB maintains policy stance</div>
                <div className="text-[9px] text-white/70">Oil prices surge on supply concerns</div>
              </div>
            }
          />
        </div>
        
        {/* Price Alerts Card */}
        <div className="absolute right-[5%] top-[20%]">
          <TradingCard 
            title="Price Alerts" 
            color="red"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">EUR/USD</span>
                  <span className="text-[10px] text-red-400">1.0900</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">USD/JPY</span>
                  <span className="text-[10px] text-yellow-400">145.30</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Trading Signals Card */}
        <div className="absolute right-[20%] bottom-[30%]">
          <TradingCard 
            title="Trading Signals" 
            color="blue"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">GBP/USD</span>
                  <span className="text-[10px] text-green-400">BUY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">USD/JPY</span>
                  <span className="text-[10px] text-red-400">SELL</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Risk Manager Card */}
        <div className="absolute right-[30%] bottom-[20%]">
          <TradingCard 
            title="Risk Manager" 
            color="red"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Max DD</span>
                  <span className="text-[10px] text-white">5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Daily Loss</span>
                  <span className="text-[10px] text-white">2%</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Account Balance Card */}
        <div className="absolute right-[45%] bottom-[35%]">
          <TradingCard 
            title="Account Balance" 
            color="green"
            size="medium"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Balance</span>
                  <span className="text-[10px] text-white">$10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Equity</span>
                  <span className="text-[10px] text-white">$10,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Used Margin</span>
                  <span className="text-[10px] text-yellow-400">10%</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Adding 16 more informative floating cards */}
        
        {/* 1. Market Overview Card */}
        <div className="absolute left-[38%] top-[25%]">
          <TradingCard 
            title="Market Overview" 
            color="blue"
            size="medium"
            content={
              <div className="space-y-1">
                <div className="text-[9px] text-white/70">USD getting stronger</div>
                <div className="text-[9px] text-white/70">Gold range-bound</div>
                <div className="text-[9px] text-white/70">Oil volatility increasing</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] text-white/70">Equity</span>
                  <span className="text-[10px] text-white">$10,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Used Margin</span>
                  <span className="text-[10px] text-white">10%</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 2. EUR/USD Chart Card */}
        <div className="absolute right-[55%] top-[15%]">
          <TradingCard 
            title="EUR/USD Chart" 
            color="green"
            content={<MiniChart type="line" color="green" />}
          />
        </div>
        
        {/* 3. Leverage Levels Card */}
        <div className="absolute left-[32%] top-[8%]">
          <TradingCard 
            title="Leverage Levels" 
            color="orange"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Forex</span>
                  <span className="text-[10px] text-white">1:100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Gold</span>
                  <span className="text-[10px] text-white">1:50</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 4. Technical Analysis Card */}
        <div className="absolute left-[15%] top-[12%]">
          <TradingCard 
            title="Technical Analysis" 
            color="yellow"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">EUR/USD</span>
                  <span className="text-[10px] text-green-400">Bullish</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">RSI</span>
                  <span className="text-[10px] text-white">58.2</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 5. Open Orders Card */}
        <div className="absolute left-[20%] bottom-[15%]">
          <TradingCard 
            title="Open Orders" 
            color="blue"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">EUR/USD Buy</span>
                  <span className="text-[10px] text-white">@ 1.0875</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">GBP/JPY Sell</span>
                  <span className="text-[10px] text-white">@ 181.25</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 6. Performance Card */}
        <div className="absolute right-[15%] top-[40%]">
          <TradingCard 
            title="Performance" 
            color="green"
            size="medium"
            content={<MiniChart type="bar" color="green" />}
          />
        </div>
        
        {/* 7. VIX Index Card */}
        <div className="absolute right-[25%] bottom-[15%]">
          <TradingCard 
            title="VIX Index" 
            color="red"
            content={<MiniChart type="bar" color="red" />}
          />
        </div>
        
        {/* 8. Trade History Card */}
        <div className="absolute right-[10%] bottom-[30%]">
          <TradingCard 
            title="Trade History" 
            color="purple"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Win</span>
                  <span className="text-[10px] text-white">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Loss</span>
                  <span className="text-[10px] text-white">5</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 9. Daily Range Card */}
        <div className="absolute left-[42%] bottom-[10%]">
          <TradingCard 
            title="Daily Range" 
            color="blue"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">EUR/USD</span>
                  <span className="text-[10px] text-white">86 pips</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">GBP/USD</span>
                  <span className="text-[10px] text-white">112 pips</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 10. Support/Resistance Card */}
        <div className="absolute left-[48%] top-[6%]">
          <TradingCard 
            title="Support/Resistance" 
            color="purple"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">R1</span>
                  <span className="text-[10px] text-red-400">1.0880</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">S1</span>
                  <span className="text-[10px] text-green-400">1.0830</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 11. Risk/Reward Card */}
        <div className="absolute right-[42%] top-[25%]">
          <TradingCard 
            title="Risk/Reward" 
            color="yellow"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Ratio</span>
                  <span className="text-[10px] text-white">1:2.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Win Rate</span>
                  <span className="text-[10px] text-green-400">67%</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 12. Trading Session Card */}
        <div className="absolute left-[25%] top-[45%]">
          <TradingCard 
            title="Trading Session" 
            color="blue"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Current</span>
                  <span className="text-[10px] text-yellow-400">London</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Next</span>
                  <span className="text-[10px] text-white">New York</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 13. Correlation Card */}
        <div className="absolute right-[20%] top-[6%]">
          <TradingCard 
            title="Correlation" 
            color="green"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">EUR/GBP</span>
                  <span className="text-[10px] text-red-400">-0.82</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">USD/JPY</span>
                  <span className="text-[10px] text-green-400">0.75</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 14. Upcoming Events Card */}
        <div className="absolute right-[5%] bottom-[12%]">
          <TradingCard 
            title="Upcoming Events" 
            color="orange"
            content={
              <div className="space-y-1">
                <div className="text-[9px] text-white/70">NFP - 3d 4h</div>
                <div className="text-[9px] text-white/70">FOMC - 1w 2d</div>
              </div>
            }
          />
        </div>
        
        {/* 15. Profit Target Card */}
        <div className="absolute left-[12%] bottom-[5%]">
          <TradingCard 
            title="Profit Target" 
            color="green"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Daily</span>
                  <span className="text-[10px] text-white">0.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Weekly</span>
                  <span className="text-[10px] text-green-400">2.3%</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* 16. Funding Rate Card */}
        <div className="absolute right-[35%] bottom-[5%]">
          <TradingCard 
            title="Funding Rate" 
            color="green"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">EUR/USD</span>
                  <span className="text-[10px] text-green-400">+0.01%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">BTC/USD</span>
                  <span className="text-[10px] text-red-400">-0.03%</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Performance Card */}
        <div className="absolute right-[10%] top-[50%]">
          <TradingCard 
            title="Performance" 
            color="blue"
            content={<MiniChart type="area" color="blue" />}
          />
        </div>
        
        {/* Market Overview Card */}
        <div className="absolute left-[45%] top-[50%]">
          <TradingCard 
            title="Market Overview" 
            color="blue"
            size="medium"
            content={
              <div className="space-y-1 text-[9px]">
                <div className="text-white/70">USD strengthening</div>
                <div className="text-white/70">Gold range-bound</div>
                <div className="text-white/70">Oil volatility increasing</div>
              </div>
            }
          />
        </div>
        
        {/* VIX Index Card */}
        <div className="absolute right-[15%] bottom-[10%]">
          <TradingCard 
            title="VIX Index" 
            color="purple"
            content={<MiniChart type="bar" color="red" />}
          />
        </div>
        
        {/* Open Orders Card */}
        <div className="absolute left-[20%] bottom-[15%]">
          <TradingCard 
            title="Open Orders" 
            color="green"
            size="medium"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[9px]">
                  <span className="text-white/70">EUR/USD Buy</span>
                  <span className="text-green-400">@ 1.0875</span>
                </div>
                <div className="flex justify-between items-center text-[9px]">
                  <span className="text-white/70">GBP/JPY Sell</span>
                  <span className="text-red-400">@ 181.25</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Leverage Levels Card */}
        <div className="absolute right-[58%] top-[25%]">
          <TradingCard 
            title="Leverage Levels" 
            color="orange"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Forex</span>
                  <span className="text-[10px] text-white">1:100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Gold</span>
                  <span className="text-[10px] text-white">1:50</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Trade History Card */}
        <div className="absolute right-[5%] bottom-[5%]">
          <TradingCard 
            title="Trade History" 
            color="green"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Won</span>
                  <span className="text-[10px] text-green-400">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">Lost</span>
                  <span className="text-[10px] text-red-400">7</span>
                </div>
              </div>
            }
          />
        </div>
        
        {/* Technical Analysis Card */}
        <div className="absolute left-[15%] top-[10%]">
          <TradingCard 
            title="Technical Analysis" 
            color="yellow"
            size="medium"
            content={
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">EUR/USD</span>
                  <span className="text-[10px] text-green-400">Bullish</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/70">RSI</span>
                  <span className="text-[10px] text-white">58.2</span>
                </div>
                <div className="h-4 bg-gradient-to-r from-green-500/20 to-green-500/40 rounded"></div>
              </div>
            }
          />
        </div>
      </div>
      
      {/* Bottom carousel banner */}
      <ContinuousBanner direction="right" speed={28} />
    </div>
  );
}