import React, { useEffect, useRef } from 'react';

// Carousel component for the continuous banner
function ContinuousBanner({ direction = 'left', speed = 30 }) {
  const items = Array(10).fill(null);
  
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

export function TradingDashboard() {
  // Reference to the floating cards for animation
  const floatingCardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Allow the bubbles to float around
    const container = floatingCardsRef.current;
    if (!container) return;
    
    // Set random starting positions and animations for elements
    const bubbles = container.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
      const el = bubble as HTMLElement;
      const size = 20 + Math.random() * 60;
      
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.animationDuration = `${5 + Math.random() * 10}s`;
      el.style.animationDelay = `${Math.random() * 5}s`;
    });
  }, []);
  
  return (
    <div className="w-full flex flex-col overflow-hidden">
      {/* Top carousel banner */}
      <ContinuousBanner direction="left" speed={25} />
      
      {/* Trading dashboard panel - truly full width */}
      <div className="relative aspect-[21/9] w-screen -mx-[calc(50vw-50%)] rounded-none bg-black/90 backdrop-blur-lg shadow-2xl flex items-center justify-center group overflow-hidden"
        ref={floatingCardsRef}>
        
        {/* Trading information cards - floating with constant animation */}
        <div className="absolute inset-0">
          {/* Phase 2 Card */}
          <div className="absolute top-[10%] right-[10%] animate-float-slow">
            <div className="min-w-44 rounded-lg border border-green-500/40 bg-black/80 backdrop-blur-sm p-4 shadow-lg shadow-green-500/10">
              <h4 className="text-center text-2xl font-bold">Phase<br />2</h4>
              <p className="text-center text-gray-300 mt-1">5% profit<br />target</p>
            </div>
          </div>
          
          {/* Popular Card */}
          <div className="absolute top-[10%] left-[15%] animate-float-delayed">
            <div className="min-w-32 rounded-lg border border-purple-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-purple-500/10">
              <h4 className="text-center text-xl font-bold">Popular</h4>
            </div>
          </div>
          
          {/* Starter Card */}
          <div className="absolute top-[10%] left-[5%] animate-float">
            <div className="min-w-32 rounded-lg border border-gray-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-gray-500/10">
              <h4 className="text-center text-xl font-bold">Starter</h4>
            </div>
          </div>
          
          {/* Advanced Card */}
          <div className="absolute top-[10%] left-[25%] animate-float-slow">
            <div className="min-w-32 rounded-lg border border-blue-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-blue-500/10">
              <h4 className="text-center text-xl font-bold">Advanced</h4>
            </div>
          </div>
          
          {/* Chart and stat cards */}
          <div className="absolute bottom-[10%] left-[5%] animate-float-slow">
            <div className="min-w-52 rounded-lg border border-blue-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-blue-500/10">
              <h4 className="text-sm font-semibold text-blue-400">EURUSD</h4>
              <div className="h-20 bg-gradient-to-t from-blue-500/20 to-transparent rounded mt-1"></div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400">Daily</span>
                <span className="text-xs text-green-400">+0.45%</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[25%] left-[20%] animate-float">
            <div className="min-w-48 rounded-lg border border-purple-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-purple-500/10">
              <h4 className="text-sm font-semibold text-purple-400">Balance</h4>
              <div className="mt-1 text-xl font-bold">$25,450</div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400">Today</span>
                <span className="text-xs text-green-400">+$420</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[15%] right-[10%] animate-float-delayed">
            <div className="min-w-52 rounded-lg border border-green-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-green-500/10">
              <h4 className="text-sm font-semibold text-green-400">XAUUSD</h4>
              <div className="h-20 bg-gradient-to-t from-green-500/20 to-transparent rounded mt-1"></div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400">4H</span>
                <span className="text-xs text-green-400">+1.23%</span>
              </div>
            </div>
          </div>
          
          <div className="absolute top-[30%] right-[20%] animate-float">
            <div className="min-w-44 rounded-lg border border-indigo-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-indigo-500/10">
              <h4 className="text-sm font-semibold text-indigo-400">Today's Stats</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <div className="text-xs text-gray-400">Win Rate</div>
                  <div className="font-semibold">68%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Trades</div>
                  <div className="font-semibold">12</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-[45%] left-[10%] animate-float-slow">
            <div className="min-w-44 rounded-lg border border-yellow-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-yellow-500/10">
              <h4 className="text-sm font-semibold text-yellow-400">Target: 8%</h4>
              <div className="w-full h-2 bg-gray-800 rounded-full mt-2">
                <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"></div>
              </div>
              <div className="text-right text-xs mt-1 text-yellow-300">6% / 8%</div>
            </div>
          </div>
          
          <div className="absolute top-[35%] left-[35%] animate-float-delayed">
            <div className="min-w-44 rounded-lg border border-rose-500/40 bg-black/80 backdrop-blur-sm p-3 shadow-lg shadow-rose-500/10">
              <h4 className="text-sm font-semibold text-rose-400">Drawdown</h4>
              <div className="w-full h-2 bg-gray-800 rounded-full mt-2">
                <div className="h-full w-1/4 bg-gradient-to-r from-rose-500 to-rose-300 rounded-full"></div>
              </div>
              <div className="text-right text-xs mt-1 text-rose-300">2.5% / 10%</div>
            </div>
          </div>
        </div>
        
        {/* Animated background bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="bubble absolute rounded-full bg-gradient-to-br"
              style={{
                opacity: 0.1 + Math.random() * 0.1
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom carousel banner */}
      <ContinuousBanner direction="right" speed={20} />
    </div>
  );
}