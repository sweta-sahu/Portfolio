import { a1, a2, glow, mono, BASE, NAV_HEIGHT } from '../theme';
import { contact } from '../data/portfolio';
import { LinkedInIcon, GitHubIcon } from './icons';

const linkStyle = {
  fontFamily: mono,
  fontSize: 12.5,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'oklch(75% 0.006 260)',
};

const iconBtnStyle = {
  width: 38,
  height: 38,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  border: '1px solid oklch(32% 0.02 260)',
  color: 'oklch(85% 0.006 260)',
};

const SECTIONS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: NAV_HEIGHT,
        zIndex: 50,
        background: 'oklch(14% 0.014 260 / 0.82)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid oklch(28% 0.02 260)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
      }}
    >
      <a
        href="#top"
        style={{ fontFamily: mono, fontWeight: 700, fontSize: 17, color: 'oklch(92% 0.006 260)' }}
      >
        <span style={{ color: a1 }}>&gt;</span> sweta.dev
      </a>

      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {SECTIONS.map((s) => (
          <a key={s.href} href={s.href} className="hv-accent" style={linkStyle}>
            {s.label}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a
          href={`${BASE}/assets/resume.pdf`}
          target="_blank"
          style={{
            fontFamily: mono,
            fontSize: 12.5,
            fontWeight: 600,
            padding: '9px 18px',
            borderRadius: 8,
            background: `linear-gradient(135deg,${a1},${a2})`,
            color: 'oklch(14% 0.02 260)',
            boxShadow: `0 0 22px ${glow}`,
          }}
        >
          resume
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          title="LinkedIn"
          className="hv-outline"
          style={iconBtnStyle}
        >
          <LinkedInIcon size={17} />
        </a>
        <a
          href={contact.github}
          target="_blank"
          aria-label="GitHub"
          title="GitHub"
          className="hv-outline"
          style={iconBtnStyle}
        >
          <GitHubIcon size={17} />
        </a>
      </div>
    </nav>
  );
}
