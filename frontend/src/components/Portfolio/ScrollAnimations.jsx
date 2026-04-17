import React, { useEffect, useRef } from 'react';

// Wraps children in a reveal container; adds .visible when scrolled into view
const ScrollAnimations = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const ref = useRef(null);

  const cls = direction === 'left'  ? 'reveal-left'
            : direction === 'right' ? 'reveal-right'
            : 'reveal';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${cls} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimations;
