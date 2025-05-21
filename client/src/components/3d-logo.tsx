import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo3D({ className }: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for the logo
    const element = logoRef.current;
    if (!element) return;
    
    let rotation = 0;
    let hue = 0;
    let glowIntensity = 0;
    let glowDirection = 1;
    
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
      
      element.style.transform = `perspective(100px) rotateY(${rotation}deg)`;
      element.style.filter = `drop-shadow(0 0 ${5 + glowIntensity * 10}px hsl(${hue}, 100%, 65%))`;
      element.style.borderColor = `hsl(${hue}, 100%, 65%)`;
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className={cn("relative flex items-center", className)}>
      <div 
        ref={logoRef}
        className="w-8 h-8 bg-black border-2 transform-gpu transition-all duration-100 ease-linear flex items-center justify-center"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="text-white font-bold text-xs">TRFX</div>
      </div>
      <span className="text-xl font-bold text-white ml-2">TRFX</span>
    </div>
  );
}