import React from 'react';
import { personalInfo, roles } from '../../data/mockData';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => (
  <section
    id="home"
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      padding: '0 1.5rem',
    }}
  >
    <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', paddingTop: '5rem', paddingBottom: '4rem' }}>

      {/* Pre-label */}
      <div className="reveal" style={{ transitionDelay: '0ms' }}>
        <span className="section-label">// whoami</span>
      </div>

      {/* Glitch name */}
      <div className="reveal" style={{ transitionDelay: '80ms', margin: '0.5rem 0 0.25rem' }}>
        <h1
          className="glitch"
          data-text={personalInfo.name}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: '#e8f4f5',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {personalInfo.name}
        </h1>
      </div>

      {/* Handle */}
      <div className="reveal" style={{ transitionDelay: '140ms' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: 'var(--cyan)', letterSpacing: '0.04em' }}>
          @{personalInfo.handle}
        </span>
      </div>

      {/* Typewriter roles */}
      <div className="reveal" style={{ transitionDelay: '220ms', margin: '1.2rem 0 1rem' }}>
        <TypewriterEffect
          texts={roles}
          speed={75}
          deleteSpeed={40}
          pause={1600}
          className=""
        />
        {/* inline style applied via TypewriterEffect's fontFamily */}
        <style>{`.typewriter-role { font-family: var(--mono); font-size: clamp(0.9rem, 2vw, 1.1rem); color: var(--green); }`}</style>
      </div>

      {/* Tagline */}
      <div className="reveal" style={{ transitionDelay: '300ms', marginBottom: '2.5rem' }}>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(1rem, 2.2vw, 1.25rem)', color: 'var(--text-dim)', maxWidth: 480, lineHeight: 1.6 }}>
          {personalInfo.tagline}
        </p>
      </div>

      {/* CTA row */}
      <div className="reveal" style={{ transitionDelay: '380ms', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <a
          href="#ctf"
          onClick={e => { e.preventDefault(); document.getElementById('ctf')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            fontFamily: 'var(--mono)', fontSize: '0.78rem', letterSpacing: '0.08em',
            padding: '0.65rem 1.4rem',
            border: '1px solid var(--cyan)', borderRadius: 4,
            color: 'var(--bg)', background: 'var(--cyan)',
            textDecoration: 'none',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,212,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          CTF Achievements
        </a>
        <a
          href="#contact"
          onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            fontFamily: 'var(--mono)', fontSize: '0.78rem', letterSpacing: '0.08em',
            padding: '0.65rem 1.4rem',
            border: '1px solid var(--border)', borderRadius: 4,
            color: 'var(--cyan)', background: 'transparent',
            textDecoration: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.boxShadow = '0 0 14px rgba(0,245,212,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          Get in touch
        </a>
      </div>

      {/* Platform badges */}
      <div className="reveal" style={{ transitionDelay: '460ms', marginTop: '3rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {[
          { label: 'CTFtime',    href: personalInfo.ctftime },
          { label: 'HackTheBox', href: personalInfo.hackthebox },
          { label: 'TryHackMe',  href: personalInfo.tryhackme },
        ].map(p => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.06em',
              padding: '3px 10px',
              border: '1px solid rgba(26,140,255,0.25)', borderRadius: 3,
              color: 'var(--blue)', background: 'rgba(26,140,255,0.06)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(26,140,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,140,255,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {p.label} ↗
          </a>
        ))}
      </div>
    </div>

    {/* Scroll hint */}
    <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '0.12em' }}>SCROLL</span>
      <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--cyan), transparent)', animation: 'pulse 2s ease-in-out infinite' }} />
    </div>
  </section>
);

export default Hero;
