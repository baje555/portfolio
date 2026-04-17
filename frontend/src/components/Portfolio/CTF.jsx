import React from 'react';
import { ctfEvents, personalInfo } from '../../data/mockData';
import ScrollAnimations from './ScrollAnimations';

const CTF = () => (
  <section id="ctf" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>

      <ScrollAnimations>
        <span className="section-label">// ctf_achievements</span>
        <div className="divider" />
        <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>CTF Events</h2>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: 520 }}>
          Competitions I've participated in. Web exploitation and OSINT are my primary categories.
        </p>
      </ScrollAnimations>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {ctfEvents.map((event, i) => (
          <ScrollAnimations key={event.id} delay={i * 80}>
            <div className="ctf-card">

              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.95rem', color: '#e8f4f5', marginBottom: 3 }}>
                    {event.name}
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-dim)' }}>
                    {event.organizer}
                  </div>
                </div>
                <span className="rank-badge">{event.rank}</span>
              </div>

              {/* Meta row */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.9rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-dim)', marginBottom: 2 }}>DATE</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text)' }}>{event.date}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-dim)', marginBottom: 2 }}>POINTS</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--cyan)' }}>{event.points.toLocaleString()}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-dim)', marginBottom: 2 }}>TYPE</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text)' }}>{event.category}</div>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {event.tags.map(tag => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Writeup button */}
              <a
                href={event.writeupUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.06em',
                  padding: '5px 12px',
                  border: '1px solid rgba(0,245,212,0.2)', borderRadius: 3,
                  color: 'var(--cyan)', background: 'transparent',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,245,212,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,245,212,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Writeup
              </a>
            </div>
          </ScrollAnimations>
        ))}
      </div>

      {/* CTFtime profile link */}
      <ScrollAnimations delay={400}>
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <a
            href={personalInfo.ctftime}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.08em',
              padding: '0.6rem 1.4rem',
              border: '1px solid var(--border)', borderRadius: 4,
              color: 'var(--text-dim)', background: 'transparent',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.boxShadow = '0 0 14px rgba(0,245,212,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            View full profile on CTFtime ↗
          </a>
        </div>
      </ScrollAnimations>

    </div>
  </section>
);

export default CTF;
