import React, { useState, useEffect } from 'react';
import { navigation } from '../../data/mockData';

const Navigation = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [active,      setActive]      = useState('home');
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const ids = navigation.map(n => n.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(5,13,14,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,245,212,0.08)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{ background: 'none', border: 'none', cursor: 'none', padding: 0 }}
        >
          <span style={{ fontFamily: 'var(--mono)', fontSize: '1rem', color: 'var(--cyan)', letterSpacing: '0.05em' }}>
            &gt; baje<span style={{ animation: 'blink 0.9s step-end infinite', display: 'inline-block', width: 2, height: '1em', background: 'var(--cyan)', marginLeft: 3, verticalAlign: 'text-bottom' }} />
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '2rem', alignItems: 'center' }}>
          {navigation.map(item => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href.slice(1))}
              className={`nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'none' }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cyan)', padding: 4 }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(5,13,14,0.97)', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navigation.map(item => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href.slice(1))}
              className={`nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '0.85rem' }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
