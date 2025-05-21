import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function HexagonLogo({ className }: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for the logo
    const element = logoRef.current;
    if (!element) return;
    
    let rotation = 0;
    let hue = 0;
    let glowIntensity = 0;
    let glowDirection = 1;
    let blinkOpacity = 1;
    let blinkDirection = -0.01;
    let blinkPause = 120; // Frames between blinks
    let blinkCounter = 0;
    
    const animate = () => {
      rotation = (rotation + 0.5) % 360;
      hue = (hue + 0.5) % 360;
      
      // Pulsating glow effect
      glowIntensity += 0.02 * glowDirection;
      if (glowIntensity >= 1) {
        glowIntensity = 1;
        glowDirection = -1;
      } else if (glowIntensity <= 0.4) {
        glowIntensity = 0.4;
        glowDirection = 1;
      }
      
      // Occasional blinking effect
      blinkCounter++;
      if (blinkCounter >= blinkPause) {
        blinkOpacity += blinkDirection * 0.05;
        
        if (blinkOpacity <= 0.7) {
          blinkOpacity = 0.7;
          blinkDirection = 0.01;
        }
        
        if (blinkOpacity >= 1) {
          blinkOpacity = 1;
          blinkDirection = -0.01;
          blinkCounter = 0;
          blinkPause = Math.floor(Math.random() * 180) + 60; // Random pause between blinks
        }
      }
      
      element.style.transform = `perspective(100px) rotateY(${rotation}deg)`;
      element.style.filter = `drop-shadow(0 0 ${5 + glowIntensity * 10}px hsl(${hue}, 100%, 65%))`;
      element.style.borderColor = `hsl(${hue}, 100%, 65%)`;
      element.style.opacity = String(blinkOpacity);
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className={cn("relative flex items-center", className)}>
      {/* Pure hexagon with no text inside */}
      <div 
        ref={logoRef}
        className="w-9 h-9 bg-gradient-to-br from-[#1a1a1a] to-black border-2 transform-gpu transition-all duration-100 ease-linear"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-sm" />
      </div>
      <span className="text-xl font-bold text-white ml-2">TRFX</span>
    </div>
  );
}