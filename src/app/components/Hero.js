import { a1, a2, glow, mono, display, BASE } from '../theme';
import { contact } from '../data/portfolio';
import { LinkedInIcon, GitHubIcon } from './icons';

const outlineBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 9,
  fontSize: 14,
  fontWeight: 600,
  padding: '13px 26px',
  borderRadius: 10,
  border: '1px solid oklch(32% 0.02 260)',
  color: 'oklch(90% 0.006 260)',
};

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: 1140,
        margin: '0 auto',
        padding: '100px 48px 80px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -60,
          left: -120,
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: a1,
          opacity: 0.16,
          filter: 'blur(90px)',
          animation: 'float1 10s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 120,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: a2,
          opacity: 0.16,
          filter: 'blur(90px)',
          animation: 'float2 12s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: 64,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: mono,
              fontSize: 12.5,
              color: 'oklch(85% 0.006 260)',
              background: 'oklch(20% 0.018 260)',
              border: '1px solid oklch(30% 0.02 260)',
              padding: '7px 14px',
              borderRadius: 100,
              marginBottom: 22,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'oklch(78% 0.19 145)',
                animation: 'pulseDot 2s infinite',
              }}
            />
            open_to_work: true
          </div>

          <h1
            style={{
              fontFamily: display,
              fontSize: 54,
              lineHeight: 1.1,
              margin: '0 0 22px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Building reliable{' '}
            <span
              style={{
                background: `linear-gradient(135deg,${a1},${a2})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              AI systems
            </span>
            , end to end.
          </h1>

          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.65,
              color: 'oklch(72% 0.01 260)',
              maxWidth: 540,
              margin: '0 0 32px',
            }}
          >
            Software engineer with 3+ years shipping production backend, ML and agentic AI systems —
            from Spring Boot microservices at TCS to AI agent orchestration for research platforms at
            SUNY Buffalo. Fresh off an M.S. in Computer Science (AI/ML), hunting for SWE, SDE, ML/AI
            and Agentic AI Engineer roles.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={`${BASE}/assets/resume.pdf`}
              target="_blank"
              style={{
                fontSize: 14,
                fontWeight: 600,
                padding: '13px 26px',
                borderRadius: 10,
                background: `linear-gradient(135deg,${a1},${a2})`,
                color: 'oklch(14% 0.02 260)',
                boxShadow: `0 0 26px ${glow}`,
              }}
            >
              View Resume
            </a>
            <a href={contact.linkedin} target="_blank" className="hv-outline" style={outlineBtn}>
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" className="hv-outline" style={outlineBtn}>
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a href="#contact" style={{ fontFamily: mono, fontSize: 13.5, color: a1 }}>
              contact_me() →
            </a>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: 26,
              padding: 4,
              background: `linear-gradient(135deg,${a1},${a2})`,
              boxShadow: `0 0 50px ${glow}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/assets/sweta-sahu.jpg`}
              alt="Sweta Sahu"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 22,
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: -38,
              left: -40,
              background: 'oklch(18% 0.018 260)',
              border: '1px solid oklch(30% 0.02 260)',
              borderRadius: 12,
              padding: '14px 18px',
              fontFamily: mono,
              fontSize: 11.5,
              lineHeight: 1.7,
              boxShadow: '0 10px 40px oklch(0% 0 0 / 0.5)',
              minWidth: 210,
            }}
          >
            <div style={{ color: 'oklch(60% 0.01 260)' }}>$ whoami</div>
            <div style={{ color: a1 }}>sweta_sahu.role</div>
            <div style={{ color: 'oklch(80% 0.006 260)' }}>
              swe · ml/ai engineer
              <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
