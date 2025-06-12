'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';

export default function Experience() {
  const experiences = [
    {
      date: 'June 2023 - July 2024',
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      details: [
        'Led the backend team in developing and integrating 3 microservices, creating REST APIs using Spring Boot.',
        'Containerized applications with Docker and deployed them on AWS for an Energy Platform.',
        'Migrated the database from PostgreSQL to MongoDB, using Python (Pandas) for data cleaning and processing.',
      ],
    },
    {
      date: 'June 2022 - May 2023',
      title: 'Assistant System Engineer',
      company: 'Tata Consultancy Services',
      details: [
        'Designed and implemented a user onboarding microservice using Spring Boot, PostgreSQL, and Keycloak.',
        'Contributed to frontend development using ReactJS, creating various components for a Carbon Platform.',
        'Automated data collection and cleansing with Pandas and web scraping, and implemented a sentence embedding model (LaBSE) for data clustering with K-means.',
      ],
    },
    {
      date: 'June 2021 - May 2022',
      title: 'Assistant System Engineer - Trainee',
      company: 'Tata Consultancy Services',
      details: [
        'Developed RESTful web services using Spring Boot and created database tables using PL/SQL in a PostgreSQL environment.',
        'Secured APIs with Keycloak and managed audit trails using Hibernate Envers.',
        'Containerized microservices with Docker for streamlined deployment across different environments.',
      ],
    },
  ];

  const primaryColor = '#2563eb';
  const bgColor = '#0f172a';
  const fgColor = '#f1f5f9';

  return (
    <section id="experience" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary uppercase text-center mb-12">
          Experience
        </h2>
        <VerticalTimeline lineColor={primaryColor}>
          {experiences.map((exp, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={exp.date}
              iconStyle={{ background: primaryColor, color: fgColor }}
              icon={<WorkIcon style={{ fontSize: '1.5rem' }} />}
              contentStyle={{ background: bgColor, color: fgColor, border: `1px solid ${primaryColor}` }}
              contentArrowStyle={{ borderRight: `7px solid ${bgColor}` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
              <h4 className="text-md text-foreground/80 italic mb-4">{exp.company}</h4>
              <ul className="list-disc list-inside space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-foreground/80 text-sm">{detail}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
