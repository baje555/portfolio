import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let animId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.14);
      ry = lerp(ry, my, 0.14);

      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';

      animId = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener('mousemove', onMove);

    // Hover effect on interactive elements
    const addHover = () => ring.classList.add('hovered');
    const rmHover  = () => ring.classList.remove('hovered');

    const targets = document.querySelectorAll('a, button, [data-cursor]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', rmHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
