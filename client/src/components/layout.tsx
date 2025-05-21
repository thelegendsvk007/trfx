import React, { useEffect, useRef } from 'react';
import { NewNavbar } from './new-navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const cursorDotOutline = useRef<HTMLDivElement | null>(null);
  const cursorDot = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    // Create custom cursor elements
    const dotOutline = document.createElement('div');
    dotOutline.className = 'cursor-dot-outline';
    document.body.appendChild(dotOutline);
    
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    
    cursorDotOutline.current = dotOutline;
    cursorDot.current = dot;
    
    // Mouse movement tracking
    const moveCursor = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      
      if (cursorDotOutline.current && cursorDot.current) {
        cursorDotOutline.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorDot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        
        // Make cursor visible once it moves
        if (cursorDot.current.style.opacity === '0') {
          cursorDot.current.style.opacity = '1';
          cursorDotOutline.current.style.opacity = '1';
        }
      }
    };
    
    const handleMouseEnter = (e: MouseEvent) => {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.opacity = '1';
        cursorDotOutline.current.style.opacity = '1';
      }
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.opacity = '0';
        cursorDotOutline.current.style.opacity = '0';
      }
    };
    
    // Add hover effect on interactive elements
    const handleLinkHover = () => {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.width = '12px';
        cursorDot.current.style.height = '12px';
        cursorDotOutline.current.style.width = '40px';
        cursorDotOutline.current.style.height = '40px';
      }
    };
    
    const handleLinkHoverOut = () => {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.width = '8px';
        cursorDot.current.style.height = '8px';
        cursorDotOutline.current.style.width = '30px';
        cursorDotOutline.current.style.height = '30px';
      }
    };
    
    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Add hover effect to all links and interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkHoverOut);
    });
    
    // Add background bubbles
    const addBackgroundEffects = () => {
      const bubbleCount = 10;
      const container = document.querySelector('main');
      
      if (container) {
        // Create bubbles
        for (let i = 0; i < bubbleCount; i++) {
          const bubble = document.createElement('div');
          const size = Math.random() * 300 + 100;
          bubble.className = 'bg-bubble';
          bubble.style.width = `${size}px`;
          bubble.style.height = `${size}px`;
          bubble.style.left = `${Math.random() * 100}vw`;
          bubble.style.top = `${Math.random() * 100}vh`;
          bubble.style.opacity = `${Math.random() * 0.05 + 0.02}`;
          container.appendChild(bubble);
        }
        
        // Add ambient lights
        const colors = ['rgba(138, 43, 226, 0.3)', 'rgba(0, 255, 140, 0.2)', 'rgba(0, 149, 255, 0.2)'];
        for (let i = 0; i < 5; i++) {
          const ambient = document.createElement('div');
          const size = Math.random() * 500 + 300;
          ambient.className = 'ambient-light';
          ambient.style.width = `${size}px`;
          ambient.style.height = `${size}px`;
          ambient.style.left = `${Math.random() * 100}vw`;
          ambient.style.top = `${Math.random() * 100}vh`;
          ambient.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          container.appendChild(ambient);
        }
      }
    };
    
    // Add background effects with a slight delay
    setTimeout(addBackgroundEffects, 500);
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkHoverOut);
      });
      
      if (cursorDotOutline.current) {
        document.body.removeChild(cursorDotOutline.current);
      }
      
      if (cursorDot.current) {
        document.body.removeChild(cursorDot.current);
      }
      
      // Remove background effects
      document.querySelectorAll('.bg-bubble, .ambient-light').forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* The NewNavbar already has fixed positioning, no container needed */}
      <NewNavbar />
      <main className="flex-1 relative overflow-hidden">
        {children}
      </main>
      <footer className="border-t py-6 md:py-0 relative z-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} TRFX. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/about/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}