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
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: 18,
          marginBottom: 80,
        }}
      >
        {extracurricular.map((item) => (
          <div
            key={item.title}
            className="hv-panel"
            style={{
              background: 'oklch(18% 0.016 260)',
              border: '1px solid oklch(28% 0.02 260)',
              borderRadius: 14,
              padding: 22,
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              transition: 'box-shadow .2s',
            }}
          >
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
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, fontFamily: display }}>{item.title}</div>
              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: 'oklch(70% 0.01 260)',
                  marginTop: 6,
                }}
              >
                {item.desc}
              </div>
              <a
                href={item.certUrl}
                target="_blank"
                className="hv-a2"
                style={{
                  display: 'inline-flex',
                  fontFamily: mono,
                  fontSize: 12,
                  fontWeight: 600,
                  color: a1,
                  marginTop: 10,
                }}
              >
                view certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
