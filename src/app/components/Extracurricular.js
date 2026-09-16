import { a1, a2, mono, display } from '../theme';
import { extracurricular } from '../data/portfolio';

export default function Extracurricular() {
  return (
    <>
      <div style={{ fontFamily: mono, fontSize: 12.5, color: a1, marginBottom: 10 }}>
        // 05 — beyond the code
      </div>
      <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 600, margin: '0 0 32px' }}>
        Extracurricular
      </h2>

      <div
        style={{
          background: 'oklch(18% 0.016 260)',
          border: '1px solid oklch(28% 0.02 260)',
          borderRadius: 16,
          padding: '6px 30px',
          marginBottom: 80,
        }}
      >
        {extracurricular.map((item) => (
          <div key={`${item.title}-${item.date}`} className="extra-row">
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: `linear-gradient(135deg,${a1},${a2})`,
                color: 'oklch(14% 0.02 260)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: display,
                fontWeight: 700,
                fontSize: 15,
                flex: 'none',
              }}
            >
              {item.initial}
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 16,
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ fontSize: 15.5, fontWeight: 700, fontFamily: display }}>
                  {item.title}
                </div>
                <div style={{ fontFamily: mono, fontSize: 12, color: 'oklch(58% 0.01 260)' }}>
                  {item.date}
                </div>
              </div>

              {item.subtitle && (
                <div style={{ fontSize: 14, color: 'oklch(78% 0.01 260)', marginTop: 4 }}>
                  {item.subtitle}
                </div>
              )}

              <div
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  color: 'oklch(58% 0.01 260)',
                  marginTop: 4,
                }}
              >
                {item.org}
              </div>

              {item.desc && (
                <div
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    color: 'oklch(70% 0.01 260)',
                    marginTop: 8,
                  }}
                >
                  {item.desc}
                </div>
              )}

              {item.bullets && (
                <ul
                  style={{
                    margin: '8px 0 0',
                    paddingLeft: 18,
                    listStyle: 'disc',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      style={{ fontSize: 13.5, lineHeight: 1.55, color: 'oklch(70% 0.01 260)' }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {item.links && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 10 }}>
                  {item.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      className="hv-a2"
                      style={{
                        fontFamily: mono,
                        fontSize: 12,
                        fontWeight: 600,
                        color: a1,
                      }}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
