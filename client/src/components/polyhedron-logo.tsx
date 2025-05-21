import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function PolyhedronLogo({ className }: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className={cn("relative flex items-center", className)}>
      <div 
        ref={logoRef}
        className="relative w-10 h-10 border-[2px] border-purple-600 bg-black"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          boxShadow: '0 0 10px rgba(138, 43, 226, 0.7)',
          filter: 'drop-shadow(0 0 5px rgba(138, 43, 226, 0.7))'
        }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-1 opacity-30 border-[1px] border-purple-500" 
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
        />
      </div>
      
      <span className="text-xl font-bold text-purple-600 ml-3">TRFX</span>
    </div>
  );
}