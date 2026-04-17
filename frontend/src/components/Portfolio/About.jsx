import React from 'react';
import ScrollAnimations from './ScrollAnimations';

// ASCII art block — tasteful, one instance only
const ASCII = `
  ██████╗  █████╗      ██╗███████╗
  ██╔══██╗██╔══██╗     ██║██╔════╝
  ██████╔╝███████║     ██║█████╗  
  ██╔══██╗██╔══██║██   ██║██╔══╝  
  ██████╔╝██║  ██║╚█████╔╝███████╗
  ╚═════╝ ╚═╝  ╚═╝ ╚════╝ ╚══════╝
`.trim();

const About = () => (
  <section id="about" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>

      <ScrollAnimations>
        <span className="section-label">// about</span>
        <div className="divider" />
        <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Who is baje?</h2>
      </ScrollAnimations>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

        {/* Left — bio */}
        <ScrollAnimations direction="left">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.8 }}>
              I'm <span style={{ color: 'var(--cyan)', fontFamily: 'var(--mono)' }}>Pankaj Kshetri</span>, a cybersecurity student pursuing a Bachelor's degree, with a focus on offensive security and intelligence gathering.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.8 }}>
              I compete in CTF competitions under the handle <span style={{ color: 'var(--cyan)', fontFamily: 'var(--mono)' }}>baje</span>, specialising in <span style={{ color: 'var(--green)' }}>web exploitation</span> and <span style={{ color: 'var(--green)' }}>OSINT</span>. I enjoy finding the edge cases that developers miss and tracing digital footprints that others overlook.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.8 }}>
              Outside of CTFs, I build tooling to automate reconnaissance workflows and document my methodologies through writeups — because understanding the attack surface is the first step to defending it.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { val: 'Web + OSINT', label: 'Specialisation' },
                { val: 'B.Sc.',       label: 'Cybersecurity' },
                { val: 'CTF',         label: 'Active Player' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '1rem', color: 'var(--cyan)', fontWeight: 700 }}>{s.val}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimations>

        {/* Right — terminal ASCII block */}
        <ScrollAnimations direction="right">
          <div className="terminal-block" style={{ lineHeight: 1.5 }}>
            <pre style={{ fontSize: '0.55rem', color: 'var(--cyan)', opacity: 0.6, overflow: 'auto', marginBottom: '1rem' }}>{ASCII}</pre>
            <div style={{ color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
              <span style={{ color: 'var(--green)' }}>pankaj@kali</span>
              <span style={{ color: 'var(--text-dim)' }}>:</span>
              <span style={{ color: 'var(--blue)' }}>~</span>
              <span style={{ color: 'var(--text-dim)' }}>$ </span>
              <span style={{ color: '#e8f4f5' }}>cat profile.txt</span>
            </div>
            <div style={{ color: 'var(--text)', lineHeight: 1.7, fontSize: '0.78rem' }}>
              <div><span style={{ color: 'var(--cyan)' }}>name</span>     : Pankaj Kshetri</div>
              <div><span style={{ color: 'var(--cyan)' }}>alias</span>    : baje</div>
              <div><span style={{ color: 'var(--cyan)' }}>degree</span>   : B.Sc. Cybersecurity</div>
              <div><span style={{ color: 'var(--cyan)' }}>focus</span>    : Web Exploitation, OSINT</div>
              <div><span style={{ color: 'var(--cyan)' }}>status</span>   : <span style={{ color: 'var(--green)' }}>active</span></div>
              <div><span style={{ color: 'var(--cyan)' }}>location</span> : [REDACTED]</div>
            </div>
            <div style={{ marginTop: '0.8rem', color: 'var(--text-dim)' }}>
              <span style={{ color: 'var(--green)' }}>pankaj@kali</span>
              <span>:</span>
              <span style={{ color: 'var(--blue)' }}>~</span>
              <span>$ </span>
              <span className="typewriter-cursor" />
            </div>
          </div>
        </ScrollAnimations>

      </div>
    </div>
  </section>
);

export default About;
