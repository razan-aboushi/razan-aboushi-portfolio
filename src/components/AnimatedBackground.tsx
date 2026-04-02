import { useState, useEffect } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-gray-900/20"></div>
      
      {/* Mouse-following orb */}
      <div 
        className="absolute w-32 h-32 bg-purple-500/20 rounded-full blur-xl transition-all duration-200 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
      
      {/* Static animated orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500/10 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}
