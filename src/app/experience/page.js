'use client'

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  const experiences = [
    {
      date: "June 2023 - July 2024",
      title: "System Engineer",
      company: "Tata Consultancy Services",
      details: [
        "Led the backend team in developing and integrating 3 microservices, creating REST APIs using Spring Boot.",
        "Containerized applications with Docker and deployed them on AWS for an Energy Platform.",
        "Migrated the database from PostgreSQL to MongoDB, using Python (Pandas) for data cleaning and processing.",
      ],
    },
    {
      date: "June 2022 - May 2023",
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      details: [
        "Designed and implemented a user onboarding microservice using Spring Boot, PostgreSQL, and Keycloak.",
        "Contributed to frontend development using ReactJS, creating various components for a Carbon Platform.",
        "Automated data collection and cleansing with Pandas and web scraping, and implemented a sentence embedding model (LaBSE) for data clustering with K-means.",
      ],
    },
    {
      date: "June 2021 - May 2022",
      title: "Assistant System Engineer - Trainee",
      company: "Tata Consultancy Services",
      details: [
        "Developed RESTful web services using Spring Boot and created database tables using PL/SQL in a PostgreSQL environment.",
        "Secured APIs with Keycloak and managed audit trails using Hibernate Envers.",
        "Containerized microservices with Docker for streamlined deployment across different environments.",
      ],
    },
  ];

  return (
    <>
      <div className="experience py-5" style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
        <div className="container">
          <h1
            className="text-center mb-5"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#002855",
              textTransform: "uppercase",
            }}
          >
            Experience
          </h1>
          <VerticalTimeline lineColor="#00b3b3">
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={exp.date}
                iconStyle={{ background: "#00b3b3", color: "#fff" }}
                icon={<WorkIcon />}
                contentStyle={{
                  background: "#fff",
                  color: "#333",
                  border: "1px solid #ddd",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #ddd" }}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{
                    color: "#002855",
                    marginBottom: "10px",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  {exp.title}
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  style={{
                    color: "#555",
                    marginBottom: "10px",
                    fontSize: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  {exp.company}
                </h4>
                <ul style={{ paddingLeft: "20px", margin: "0" }}>
                  {exp.details.map((detail, i) => (
                    <li
                      key={i}
                      style={{
                        color: "#666",
                        marginBottom: "5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Experience;