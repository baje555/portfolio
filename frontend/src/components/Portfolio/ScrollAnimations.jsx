import React, { useEffect, useRef } from 'react';

const ScrollAnimations = ({ children, animation = 'fadeInUp', delay = 0, threshold = 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeInUp':
        return 'opacity-0 translate-y-8';
      case 'fadeInLeft':
        return 'opacity-0 -translate-x-8';
      case 'fadeInRight':
        return 'opacity-0 translate-x-8';
      case 'fadeInDown':
        return 'opacity-0 -translate-y-8';
      case 'scaleIn':
        return 'opacity-0 scale-95';
      case 'rotateIn':
        return 'opacity-0 rotate-6';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} transition-all duration-700 ease-out ${
        animation === 'scaleIn' ? 'transform-gpu' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimations;