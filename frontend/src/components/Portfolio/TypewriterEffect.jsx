import React, { useState, useEffect } from 'react';

// Cycles through an array of strings with a typewriter effect
const TypewriterEffect = ({ texts = [], speed = 80, deleteSpeed = 45, pause = 1800, className = '' }) => {
  const [displayed, setDisplayed] = useState('');
  const [idx,       setIdx]       = useState(0);
  const [typing,    setTyping]    = useState(true);

  useEffect(() => {
    if (!texts.length) return;
    const current = texts[idx];

    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
      } else {
        setIdx((idx + 1) % texts.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, idx, texts, speed, deleteSpeed, pause]);

  return (
    <span className={className} style={{ fontFamily: 'var(--mono)' }}>
      {displayed}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
};

export default TypewriterEffect;
