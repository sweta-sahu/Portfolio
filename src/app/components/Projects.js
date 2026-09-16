import { a1, a2, mono, display } from '../theme';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <>
      <div style={{ fontFamily: mono, fontSize: 12.5, color: a1, margin: '20px 0 10px' }}>
        // 04 — projects
      </div>
      <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 600, margin: '0 0 28px' }}>
        Projects
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))',
          gap: 24,
        }}
      >
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="hv-panel-lg"
            style={{
              background: 'oklch(18% 0.016 260)',
              border: '1px solid oklch(28% 0.02 260)',
              borderRadius: 16,
              overflow: 'hidden',
              transition: 'box-shadow .2s',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 6,
                padding: '12px 16px',
                borderBottom: '1px solid oklch(28% 0.02 260)',
              }}
            >
              <span
                style={{ width: 10, height: 10, borderRadius: '50%', background: 'oklch(65% 0.19 25)' }}
              />
              <span
                style={{ width: 10, height: 10, borderRadius: '50%', background: 'oklch(75% 0.16 90)' }}
              />
              <span
                style={{ width: 10, height: 10, borderRadius: '50%', background: 'oklch(70% 0.17 145)' }}
              />
            </div>

            <div
              style={{
                height: 150,
                background:
                  'repeating-linear-gradient(135deg, oklch(22% 0.018 260) 0 12px, oklch(20% 0.016 260) 12px 24px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: mono, fontSize: 12, color: 'oklch(55% 0.01 260)' }}>
                // {proj.name} — screenshot
              </span>
            </div>

            <div style={{ padding: '22px 24px' }}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
              >
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: display }}>{proj.name}</div>
                <div style={{ fontFamily: mono, fontSize: 11.5, color: 'oklch(58% 0.01 260)' }}>
                  {proj.dates}
                </div>
              </div>

              <div style={{ fontSize: 14, color: 'oklch(72% 0.01 260)', marginTop: 4 }}>
                {proj.subtitle}
              </div>

              {/* Where the project came from — hackathon, demo day, coursework.
                  Accent-2 keeps it distinct from the a1 stack tags below. */}
              {proj.context && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 10,
                    fontFamily: mono,
                    fontSize: 11,
                    color: a2,
                    background: 'oklch(21% 0.018 260)',
                    border: '1px solid oklch(32% 0.02 260)',
                    padding: '4px 10px',
                    borderRadius: 100,
                  }}
                >
                  {proj.context}
                </div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                {proj.stackTags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: a1,
                      border: '1px solid oklch(32% 0.02 260)',
                      padding: '4px 9px',
                      borderRadius: 6,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul
                style={{
                  margin: '16px 0 0',
                  paddingLeft: 18,
                  listStyle: 'disc',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                {proj.bullets.map((b) => (
                  <li
                    key={b}
                    style={{ fontSize: 13.5, lineHeight: 1.55, color: 'oklch(70% 0.01 260)' }}
                  >
                    {b}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 18,
                  marginTop: 16,
                  fontFamily: mono,
                  fontSize: 12.5,
                  fontWeight: 600,
                }}
              >
                {proj.repoUrl ? (
                  <a href={proj.repoUrl} target="_blank" className="hv-a2" style={{ color: a1 }}>
                    gh: view repo →
                  </a>
                ) : (
                  <span style={{ fontWeight: 400, color: 'oklch(55% 0.01 260)' }}>
                    // coursework — repo not public
                  </span>
                )}

                {proj.devpostUrl && (
                  <a href={proj.devpostUrl} target="_blank" className="hv-a2" style={{ color: a1 }}>
                    devpost: submission →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
