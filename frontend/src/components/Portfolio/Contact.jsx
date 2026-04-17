import React from 'react';
import { personalInfo } from '../../data/mockData';
import ScrollAnimations from './ScrollAnimations';

// SVG icons
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const CTFtimeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const links = [
  { label: 'GitHub',    sub: 'github.com/baje555',    href: (p) => p.github,    Icon: GithubIcon },
  { label: 'CTFtime',   sub: 'ctftime.org/user/baje', href: (p) => p.ctftime,   Icon: CTFtimeIcon },
  { label: 'LinkedIn',  sub: 'linkedin.com/in/pankaj55', href: (p) => p.linkedin, Icon: LinkedinIcon },
  { label: 'Email',     sub: 'kshetripankaj73@gmail.com', href: (p) => `mailto:${p.email}`, Icon: MailIcon },
];

const Contact = () => (
  <section id="contact" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>

      <ScrollAnimations>
        <span className="section-label">// contact</span>
        <div className="divider" />
        <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>Get in Touch</h2>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: 480 }}>
          Open to CTF team invites, security research collabs, and internship opportunities. No cold sales.
        </p>
      </ScrollAnimations>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem', maxWidth: 700 }}>
        {links.map(({ label, sub, href, Icon }, i) => (
          <ScrollAnimations key={label} delay={i * 70}>
            <a
              href={href(personalInfo)}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Icon />
              <div>
                <div style={{ fontWeight: 700, color: '#e8f4f5', marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>{sub}</div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: '0.7rem', opacity: 0.4 }}>↗</span>
            </a>
          </ScrollAnimations>
        ))}
      </div>

    </div>
  </section>
);

export default Contact;
