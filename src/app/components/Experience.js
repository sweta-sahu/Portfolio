import { a1, mono, display } from '../theme';
import { companies } from '../data/portfolio';

export default function Experience() {
  return (
    <>
      <div style={{ fontFamily: mono, fontSize: 12.5, color: a1, marginBottom: 10 }}>
        // 03 — experience
      </div>
      <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 600, margin: '0 0 36px' }}>
        Experience
      </h2>

      <div>
        {companies.map((co) => (
          <div
            key={co.company}
            style={{
              display: 'grid',
              gridTemplateColumns: '14px 1fr',
              gap: 20,
              paddingBottom: 44,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: a1,
                  marginTop: 6,
                  flex: 'none',
                }}
              />
              <div
                style={{
                  flex: 1,
                  width: 2,
                  background: `linear-gradient(180deg,${a1},transparent)`,
                  marginTop: 8,
                }}
              />
            </div>

            <div>
              <div style={{ fontSize: 18, fontWeight: 700, fontFamily: display }}>{co.company}</div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 12.5,
                  color: 'oklch(58% 0.01 260)',
                  marginTop: 3,
                }}
              >
                {co.location}
              </div>

              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 16 }}
              >
                {co.roles.map((job) => (
                  <div
                    key={job.role}
                    className="hv-panel"
                    style={{
                      background: 'oklch(18% 0.016 260)',
                      border: '1px solid oklch(28% 0.02 260)',
                      borderRadius: 14,
                      padding: '24px 26px',
                      transition: 'box-shadow .2s',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: 10,
                          flexWrap: 'wrap',
                        }}
                      >
                        <div style={{ fontSize: 16.5, fontWeight: 700, fontFamily: display }}>
                          {job.role}
                        </div>
                        {job.partTime && (
                          <span
                            style={{
                              fontFamily: mono,
                              fontSize: 10.5,
                              color: a1,
                              border: '1px solid oklch(32% 0.02 260)',
                              padding: '2px 8px',
                              borderRadius: 100,
                            }}
                          >
                            part-time
                          </span>
                        )}
                      </div>
                      <div
                        style={{ fontFamily: mono, fontSize: 12.5, color: 'oklch(58% 0.01 260)' }}
                      >
                        {job.dates}
                      </div>
                    </div>

                    <ul
                      style={{
                        margin: '14px 0 0',
                        paddingLeft: 20,
                        listStyle: 'disc',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                      }}
                    >
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          style={{ fontSize: 14.5, lineHeight: 1.6, color: 'oklch(72% 0.01 260)' }}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
