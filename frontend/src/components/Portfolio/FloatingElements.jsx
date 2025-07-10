import React from 'react';

const FloatingElements = () => {
  const elements = [
    { id: 1, icon: '☕', size: 'text-3xl', position: 'top-20 left-10', delay: '0s' },
    { id: 2, icon: '🍃', size: 'text-2xl', position: 'top-40 right-20', delay: '1s' },
    { id: 3, icon: '🌐', size: 'text-4xl', position: 'top-60 left-1/4', delay: '2s' },
    { id: 4, icon: '⚙️', size: 'text-2xl', position: 'bottom-40 right-10', delay: '0.5s' },
    { id: 5, icon: '🗄️', size: 'text-3xl', position: 'bottom-20 left-20', delay: '1.5s' },
    { id: 6, icon: '📦', size: 'text-2xl', position: 'top-1/3 right-1/3', delay: '2.5s' },
    { id: 7, icon: '🐙', size: 'text-3xl', position: 'bottom-60 left-1/3', delay: '3s' },
    { id: 8, icon: '🎨', size: 'text-2xl', position: 'top-80 right-1/4', delay: '0.8s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.position} ${element.size} opacity-20 animate-float`}
          style={{
            animationDelay: element.delay,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          {element.icon}
        </div>
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-orange-500/30 rotate-45 animate-spin opacity-30"
           style={{ animationDuration: '12s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-orange-500/40 to-red-500/40 rounded-full animate-pulse opacity-40"
           style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-500/40 to-pink-500/40 transform rotate-45 animate-bounce opacity-30"
           style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-dashed border-orange-500/20 rounded-full animate-spin opacity-25"
           style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-orange-500/30 rounded-full animate-ping opacity-40"
           style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default FloatingElements;