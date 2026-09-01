import { a1, a2, glow, mono, display, NAV_HEIGHT } from '../theme';
import { contact } from '../data/portfolio';
import { LinkedInIcon, GitHubIcon } from './icons';

const labelStyle = { fontFamily: mono, fontSize: 12, color: 'oklch(65% 0.01 260)' };

const contactLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 9,
  color: 'oklch(85% 0.006 260)',
};

const fieldStyle = {
  width: '100%',
  marginTop: 6,
  padding: '12px 14px',
  borderRadius: 8,
  border: '1px solid oklch(30% 0.02 260)',
  background: 'oklch(20% 0.018 260)',
  color: 'white',
  fontSize: 14,
  fontFamily: 'inherit',
};

export default function Contact() {
  return (
    <div
      id="contact"
      style={{
        scrollMarginTop: NAV_HEIGHT,
        maxWidth: 1140,
        margin: '0 auto',
        padding: '72px 48px 100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: 64,
      }}
    >
      <div>
        <div style={{ fontFamily: mono, fontSize: 12.5, color: a1, marginBottom: 10 }}>
          // 07 — contact
        </div>
        <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 600, margin: '0 0 16px' }}>
          Let&apos;s talk
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: 'oklch(68% 0.01 260)',
            margin: '0 0 28px',
          }}
        >
          Open to SWE, ML/AI, and agentic AI engineer roles — and open to relocation.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            fontFamily: mono,
            fontSize: 13.5,
          }}
        >
          <a href={`mailto:${contact.email}`} style={{ color: 'oklch(85% 0.006 260)' }}>
            {contact.email}
          </a>
          <div style={{ color: 'oklch(85% 0.006 260)' }}>{contact.phone}</div>
          <div style={{ color: 'oklch(85% 0.006 260)' }}>{contact.location}</div>
          <a href={contact.linkedin} target="_blank" style={contactLinkStyle}>
            <LinkedInIcon size={15} />
            {contact.linkedinLabel}
          </a>
          <a href={contact.github} target="_blank" style={contactLinkStyle}>
            <GitHubIcon size={15} />
            {contact.githubLabel}
          </a>
        </div>
      </div>

      <form
        action={contact.formspreeAction}
        method="POST"
        style={{
          background: 'oklch(18% 0.016 260)',
          border: '1px solid oklch(28% 0.02 260)',
          borderRadius: 16,
          padding: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ fontFamily: mono, fontSize: 12, color: 'oklch(55% 0.01 260)' }}>
          $ contact --new-message
        </div>

        <div>
          <label style={labelStyle}>name</label>
          <input name="name" type="text" className="fc-accent" style={fieldStyle} />
        </div>

        <div>
          <label style={labelStyle}>email</label>
          <input name="email" type="email" className="fc-accent" style={fieldStyle} />
        </div>

        <div>
          <label style={labelStyle}>message</label>
          <textarea
            name="message"
            rows={5}
            className="fc-accent"
            style={{ ...fieldStyle, resize: 'vertical' }}
          />
        </div>

        <button
          type="submit"
          style={{
            alignSelf: 'flex-start',
            fontSize: 14,
            fontWeight: 600,
            padding: '12px 28px',
            borderRadius: 10,
            background: `linear-gradient(135deg,${a1},${a2})`,
            color: 'oklch(14% 0.02 260)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: `0 0 24px ${glow}`,
          }}
        >
          Send message
        </button>

        <div style={{ fontFamily: mono, fontSize: 11.5, color: 'oklch(50% 0.01 260)' }}>
          // replace YOUR_FORM_ID with your Formspree ID to activate
        </div>
      </form>
    </div>
  );
}
