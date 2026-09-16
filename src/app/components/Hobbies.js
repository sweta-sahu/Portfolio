import { a1, mono, display } from '../theme';
import { hobbies } from '../data/portfolio';

export default function Hobbies() {
  return (
    <>
      <div style={{ fontFamily: mono, fontSize: 12.5, color: a1, marginBottom: 10 }}>
        // 06 — off the clock
      </div>
      <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 600, margin: '0 0 8px' }}>
        Hobbies
      </h2>
      <p
        style={{
          fontSize: 14.5,
          lineHeight: 1.6,
          color: 'oklch(65% 0.01 260)',
          margin: '0 0 28px',
          maxWidth: 620,
        }}
      >
        What I get up to when I&apos;m not shipping.
      </p>

      <div
        style={{
          background: 'oklch(18% 0.016 260)',
          border: '1px solid oklch(28% 0.02 260)',
          borderRadius: 16,
          padding: '10px 30px',
          marginBottom: 80,
        }}
      >
        {hobbies.map((hobby) => (
          <div key={hobby.title} className="hobby-row">
            <div style={{ fontSize: 26, lineHeight: 1, flex: 'none', paddingTop: 2 }}>
              {hobby.emoji}
            </div>

            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontSize: 15.5, fontWeight: 700, fontFamily: display }}>
                  {hobby.title}
                </span>

                {hobby.badge && (
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: a1,
                      border: '1px solid oklch(32% 0.02 260)',
                      background: 'oklch(21% 0.018 260)',
                      padding: '3px 9px',
                      borderRadius: 100,
                    }}
                  >
                    🔥 {hobby.badge}
                  </span>
                )}

                {hobby.badgeNote && (
                  <span style={{ fontFamily: mono, fontSize: 11, color: 'oklch(52% 0.01 260)' }}>
                    {hobby.badgeNote}
                  </span>
                )}
              </div>

              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: 'oklch(70% 0.01 260)',
                  marginTop: 5,
                }}
              >
                {hobby.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
