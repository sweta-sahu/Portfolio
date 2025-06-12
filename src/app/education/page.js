'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

export default function Education() {
  const educationDetails = [
    {
      date: 'August 2024 - December 2025 (Expected)',
      title: 'Master of Science in Computer Science and Engineering',
      institution: 'University at Buffalo, The State University of New York',
      details: ['Specialization in AI/ML.', 'GPA: 3.83/4.0'],
    },
    {
      date: 'August 2017 - June 2021',
      title: 'Bachelor of Engineering in Electronics and Telecommunication',
      institution: 'Ramrao Adik Institute of Technology, Mumbai University',
      details: ['GPA: 9.31/10.0 (Approx. 3.72/4.0 on US scale)', 'Electronics and Telecommunication Curriculum'],
    },
  ];

  // Theme colors
  const primaryColor = '#2563eb';
  const bgColor = '#0f172a';
  const fgColor = '#f1f5f9';

  return (
    <section id="education" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary uppercase text-center mb-12">
          Education
        </h2>
        <VerticalTimeline lineColor={primaryColor}>
          {educationDetails.map((edu, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={edu.date}
              iconStyle={{ background: primaryColor, color: fgColor }}
              icon={<SchoolIcon style={{ fontSize: '1.5rem' }} />}
              contentStyle={{ background: bgColor, color: fgColor, border: `1px solid ${primaryColor}` }}
              contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {edu.title}
              </h3>
              <h4 className="text-md text-foreground/80 italic mb-4">
                {edu.institution}
              </h4>
              <ul className="list-disc list-inside space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-foreground/80 text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}