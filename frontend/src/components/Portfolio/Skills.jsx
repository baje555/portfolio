import React from 'react';
import { skills } from '../../data/mockData';
import ScrollAnimations from './ScrollAnimations';

// Map category → color class
const colorMap = {
  offense: '',       // default cyan
  intel:   'green',
  defense: 'blue',
  core:    'blue',
  tool:    'green',
};

// Map category → label
const categoryLabel = {
  offense: 'Offensive',
  intel:   'Intelligence',
  defense: 'Defense',
  core:    'Core',
  tool:    'Tooling',
};

const Skills = () => {
  // Group by category
  const groups = skills.reduce((acc, s) => {
    const cat = s.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(s);
    return acc;
  }, {});

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem', background: 'rgba(7,18,20,0.6)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <ScrollAnimations>
          <span className="section-label">// skills</span>
          <div className="divider" />
          <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>Capabilities</h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: 480 }}>
            Tools and techniques I reach for — no fluff, no enterprise stack.
          </p>
        </ScrollAnimations>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {Object.entries(groups).map(([cat, items], gi) => (
            <ScrollAnimations key={cat} delay={gi * 80}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {categoryLabel[cat] || cat}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map((skill, i) => (
                    <span
                      key={skill.name}
                      className={`skill-tag ${colorMap[cat] || ''}`}
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <span style={{ opacity: 0.5, fontSize: '0.6rem' }}>#</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimations>
          ))}
        </div>

        {/* Platform links row */}
        <ScrollAnimations delay={400}>
          <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>FIND ME ON →</span>
            {[
              { label: 'HackTheBox', color: 'var(--green)' },
              { label: 'TryHackMe',  color: 'var(--cyan)' },
              { label: 'CTFtime',    color: 'var(--blue)' },
            ].map(p => (
              <span
                key={p.label}
                style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: p.color, opacity: 0.8 }}
              >
                {p.label}
              </span>
            ))}
          </div>
        </ScrollAnimations>

      </div>
    </section>
  );
};

export default Skills;
