import { a1, mono, display } from '../theme';
import { skillGroups } from '../data/portfolio';

export default function Skills() {
  return (
    <section style={{ maxWidth: 1140, margin: '0 auto', padding: '20px 48px 80px' }}>
      <div style={{ fontFamily: mono, fontSize: 12.5, color: a1, marginBottom: 10 }}>
        // 01 — skills
      </div>
      <h2 style={{ fontFamily: display, fontSize: 28, fontWeight: 600, margin: '0 0 28px' }}>
        Toolbox
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
          gap: 18,
        }}
      >
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="hv-card"
            style={{
              background: 'oklch(18% 0.016 260)',
              border: '1px solid oklch(28% 0.02 260)',
              borderRadius: 14,
              padding: 22,
              transition: 'transform .2s, box-shadow .2s',
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                fontWeight: 600,
                color: a1,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: 14,
              }}
            >
              {group.name}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {group.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    background: 'oklch(22% 0.018 260)',
                    border: '1px solid oklch(30% 0.02 260)',
                    padding: '6px 11px',
                    borderRadius: 7,
                    color: 'oklch(85% 0.006 260)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
