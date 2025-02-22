'use client'

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Education() {
  const educationDetails = [
    {
      date: "August 2024 - December 2025 (Expected)",
      title: "Master of Science in Computer Science and Engineering",
      institution: "University at Buffalo, The State University of New York",
      details: ["Specialization in AI/ML.", "GPA: 3.83/4.0"],
    },
    {
      date: "August 2017 - June 2021",
      title: "Bachelor of Engineering in Electronics and Telecommunication",
      institution: "Ramrao Adik Institute of Technology, Mumbai University",
      details: ["GPA: 9.31/10.0 (Approx. 3.72/4.0 on US scale)", "Electronics and Telecommunication engineering curriculum."],
    },
  ];

  return (
    <>
      <div className="education py-5" style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
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
            Education
          </h1>
          <VerticalTimeline lineColor="#00b3b3">
            {educationDetails.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                date={edu.date}
                iconStyle={{ background: "#00b3b3", color: "#fff" }}
                icon={<SchoolIcon />}
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
                  {edu.title}
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
                  {edu.institution}
                </h4>
                <ul style={{ paddingLeft: "20px", margin: "0" }}>
                  {edu.details.map((detail, i) => (
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

export default Education;