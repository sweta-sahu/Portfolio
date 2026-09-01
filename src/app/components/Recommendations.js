'use client';

import { useState } from 'react';
import { a1, mono, display } from '../theme';
import { recommendations } from '../data/portfolio';

const CLAMP = {
  display: '-webkit-box',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

export default function Recommendations() {
  const [expandedRecs, setExpandedRecs] = useState({});

  const toggleRec = (i) =>
    setExpandedRecs((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <div style={{ fontFamily: mono, fontSize: 12.5, color: a1, marginBottom: 10 }}>
        // 06 — recommendations
      </div>
      <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 600, margin: '0 0 28px' }}>
        Recommendations
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 20,
        }}
      >
        {recommendations.map((r, i) => {
          const expanded = !!expandedRecs[i];
          return (
            <div
              key={r.name}
              style={{
                border: '1px solid oklch(28% 0.02 260)',
                borderRadius: 14,
                padding: 24,
                background: 'oklch(18% 0.016 260)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 700, fontFamily: display }}>{r.name}</div>
              <div style={{ fontFamily: mono, fontSize: 11.5, color: a1, marginTop: 4 }}>
                {r.title}
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: a1,
                  fontFamily: display,
                  lineHeight: 1,
                  marginTop: 16,
                }}
              >
                &quot;
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: 'oklch(70% 0.01 260)',
                  marginTop: 4,
                  ...(expanded ? {} : CLAMP),
                }}
              >
                {r.quote}
              </div>
              <div
                onClick={() => toggleRec(i)}
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  fontWeight: 600,
                  color: a1,
                  marginTop: 14,
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}
              >
                {expanded ? 'show less' : 'read more →'}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
