import { a1, a2, mono, display } from '../theme';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section style={{ maxWidth: 1140, margin: '0 auto', padding: '0 48px 100px' }}>
      <div style={{ fontFamily: mono, fontSize: 12.5, color: a1, marginBottom: 10 }}>
        // 02 — education
      </div>
      <h2 style={{ fontFamily: display, fontSize: 28, fontWeight: 600, margin: '0 0 28px' }}>
        Education
      </h2>

      <div
        style={{
          background: 'oklch(18% 0.016 260)',
          border: '1px solid oklch(28% 0.02 260)',
          borderRadius: 16,
          padding: '30px 34px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: `linear-gradient(135deg,${a1},${a2})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: display,
              fontWeight: 700,
              color: 'oklch(14% 0.02 260)',
              fontSize: 14,
              flex: 'none',
            }}
          >
            {education.degree}
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, fontFamily: display }}>
              {education.school}
            </div>
            <div style={{ fontSize: 14.5, color: 'oklch(70% 0.01 260)', marginTop: 6 }}>
              {education.program}
            </div>
            <div
              style={{
                fontSize: 13,
                color: 'oklch(55% 0.01 260)',
                marginTop: 4,
                fontFamily: mono,
              }}
            >
              {education.location}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 600, color: a1 }}>
            {education.gpa}
          </div>
          <div style={{ fontSize: 13, color: 'oklch(55% 0.01 260)', marginTop: 6 }}>
            {education.dates}
          </div>
        </div>
      </div>
    </section>
  );
}
