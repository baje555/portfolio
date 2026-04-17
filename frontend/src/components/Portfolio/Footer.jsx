import React from 'react';

const Footer = () => (
  <footer style={{
    position: 'relative', zIndex: 1,
    borderTop: '1px solid var(--border)',
    padding: '2rem 1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  }}>
    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
      © {new Date().getFullYear()} Pankaj Kshetri · <span style={{ color: 'var(--cyan)' }}>baje</span>
    </span>
    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
      built with intent, not templates
    </span>
  </footer>
);

export default Footer;
