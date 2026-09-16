'use client';

import { useState } from 'react';
import { a1, a2, glow, mono, display, NAV_HEIGHT, BASE } from '../theme';
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

const noteStyle = { fontFamily: mono, fontSize: 11.5, lineHeight: 1.6 };

const endpoint = contact.formEndpoint;
const endpointReady = Boolean(endpoint);
// Without JS the browser posts the form itself, and the /ajax/ endpoint would answer
// with raw JSON — so the no-JS action drops that segment for the redirect flow.
const formAction = endpoint?.replace('/ajax/', '/');

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill the hidden field, humans never see it.
    if (data.get('_honey')) {
      setStatus('sent');
      return;
    }

    if (!endpointReady) {
      setStatus('error');
      setError('the form is not connected to an inbox yet — email me directly instead.');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      const body = await res.json().catch(() => null);

      // FormSubmit answers 200 with { success: "true" | "false", message }.
      if (res.ok && String(body?.success) === 'true') {
        form.reset();
        setStatus('sent');
        return;
      }

      setStatus('error');
      setError(body?.message || 'something went wrong on the way out — please try again.');
    } catch {
      setStatus('error');
      setError('network error — check your connection and try again.');
    }
  }

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
          // 08 — contact
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
          <a href={`${BASE}/assets/Sweta_Sahu.pdf`} target="_blank" style={contactLinkStyle}>
            <span aria-hidden="true" style={{ fontSize: 15, lineHeight: 1 }}>
              📄
            </span>
            resume.pdf
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        action={formAction}
        method="POST"
        style={{
          position: 'relative',
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
          <label htmlFor="cf-name" style={labelStyle}>
            name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="fc-accent"
            style={fieldStyle}
          />
        </div>

        <div>
          <label htmlFor="cf-email" style={labelStyle}>
            email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="fc-accent"
            style={fieldStyle}
          />
        </div>

        <div>
          <label htmlFor="cf-message" style={labelStyle}>
            message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            required
            minLength={10}
            className="fc-accent"
            style={{ ...fieldStyle, resize: 'vertical' }}
          />
        </div>

        {/* Subject line shown in the inbox, then the spam honeypot. */}
        <input type="hidden" name="_subject" value="New message from your portfolio" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            alignSelf: 'flex-start',
            fontSize: 14,
            fontWeight: 600,
            padding: '12px 28px',
            borderRadius: 10,
            background: `linear-gradient(135deg,${a1},${a2})`,
            color: 'oklch(14% 0.02 260)',
            border: 'none',
            cursor: status === 'sending' ? 'progress' : 'pointer',
            opacity: status === 'sending' ? 0.7 : 1,
            boxShadow: `0 0 24px ${glow}`,
          }}
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        <div aria-live="polite" style={{ minHeight: 18 }}>
          {status === 'sent' && (
            <div style={{ ...noteStyle, color: a1 }}>
              // message sent — thanks, I&apos;ll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div style={{ ...noteStyle, color: 'oklch(70% 0.16 25)' }}>// {error}</div>
          )}
          {status === 'idle' && !endpointReady && (
            <div style={{ ...noteStyle, color: 'oklch(50% 0.01 260)' }}>
              // set contact.formEndpoint in src/app/data/portfolio.js to activate
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
