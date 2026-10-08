import React from 'react';

/**
 * Achievements Section — Phase 8 Redesign
 * Streamlined milestone layout emphasizing key accomplishments without oversized cards.
 */
export const Achievements = () => {
  const achievements = [
    {
      index: "01",
      title: "Full-Stack System Delivery",
      subtitle: "HMS - OPD Module",
      description: "Successfully prepared and delivered the Hospital Management System Outpatient Department module during intensive Oracle APEX full-stack training."
    },
    {
      index: "02",
      title: "Academic Curriculum Excellence",
      subtitle: "B.Voc. Software Development",
      description: "Maintaining strong technical performance across core computer science, relational database modeling, and software engineering coursework at National P.G. College."
    },
    {
      index: "03",
      title: "Industry Program Fellow",
      subtitle: "Samsung Innovation Campus",
      description: "Selected participant in Samsung R&D Institute's corporate emerging technologies and practical programming curriculum."
    }
  ];

  return (
    <section id="achievements" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Key Milestones</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Honors & Recognitions
        </span>
      </div>

      {/* Structured Milestone Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(270px, 100%), 1fr))',
          gap: '1rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '1.25rem 1.4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem',
              position: 'relative'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-family-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: 'var(--color-accent-bright)'
                  }}
                >
                  {item.index}
                </span>

                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-text-accent)'
                  }}
                >
                  {item.subtitle}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.35rem',
                  lineHeight: 1.35
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
