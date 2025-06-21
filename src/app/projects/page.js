'use client';

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { FaPython, FaCss3, FaJs, FaChartPie } from "react-icons/fa";
import { SiMysql, SiTensorflow, SiHtml5, SiKeras, SiFlask, SiScikitlearn, SiPandas, SiOracle } from "react-icons/si";

// const Projects = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [currentProject, setCurrentProject] = useState(null);
//   const basePath = "https://sweta-sahu.github.io/Portfolio"

//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   const projects = [
//     {
//       title: "Hospital Recommendation Chatbot",
//       description:
//         "A web application with a conversational AI chatbot for locating nearby hospitals based on user symptoms and location. Features include hospital management, secure login, and OTP-based registration, powered by Keras, TensorFlow, and MySQL.",
//         technologies: [
//           { name: "Python", icon: <FaPython />, color: "#3572A5" },
//           { name: "Keras", icon: <SiKeras />, color: "#D00000" },
//           { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
//           { name: "Flask", icon: <SiFlask />, color: "#000000" },
//           { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
//         ],
//       image: `${basePath}/assets/hospital-chatbot.png`,
//       github: "https://github.com/sweta-sahu/Hospital-Recommendation-Chatbot",
//     },
//     {
//       title: "COVID19 Analysis and Timeseries Forecast",
//       description:
//         "A time series forecast project using Python. Data is analyzed and visualized using libraries Matplotlib and Seaborn, and the future is forecast for up to 30 days using Scikit-learn.",
//       technologies: [
//         { name: "Python", icon: <FaPython />, color: "#3572A5" },
//         { name: "Pandas", icon: <SiPandas />, color: "#150458" },
//         { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F89939" },
//         { name: "Matplotlib", icon: <FaChartPie />, color: "#11557C" },
//       ],
//       image: `${basePath}/assets/covid19.png`,
//       github: "https://github.com/sweta-sahu/COVID19-analysis-and-forecast",
//     },
//     {
//       title: "Bakery Website",
//       description:
//         "A simple bakery website showcasing bakery details and menu items for users to view.",
//       technologies: [
//         { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
//         { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
//         { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
//       ],
//       image: `${basePath}/assets/bakery-site.png`,
//       github: "https://github.com/sweta-sahu/Bakery-website",
//     },
//     {
//       title: "Student Marks Management System",
//       description:
//         "A GUI application for managing student marks records using Python and Oracle. Features include adding, updating, deleting, and viewing data in tabular and graphical formats.",
//       technologies: [
//         { name: "Python", icon: <FaPython />, color: "#3776AB" },
//         { name: "Oracle", icon: <SiOracle />, color: "#F80000" },
//       ],
//       image: `${basePath}/assets/Python-projects.png`,
//       github: "https://github.com/sweta-sahu/Student-Marks-Management-System",
//     },
//   ];

//   const handleOpenModal = (project) => {
//     setCurrentProject(project);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setCurrentProject(null);
//   };
import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { FaPython, FaCss3, FaJs, FaChartPie } from 'react-icons/fa';
import {
  SiMysql,
  SiTensorflow,
  SiHtml5,
  SiKeras,
  SiFlask,
  SiScikitlearn,
  SiPandas,
  SiOracle,
} from 'react-icons/si';

const basePath = "https://sweta-sahu.github.io/Portfolio"

const projects = [
  {
    title: 'Hospital Recommendation Chatbot',
    description:
      'A web application with a conversational AI chatbot for locating nearby hospitals based on user symptoms and location. Features include hospital management, secure login, and OTP-based registration, powered by Keras, TensorFlow, and MySQL.',
    technologies: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Keras', icon: <SiKeras /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
    image: `${basePath}/assets/hospital-chatbot.png`,
    github: 'https://github.com/sweta-sahu/Hospital-Recommendation-Chatbot',
  },
  {
    title: 'COVID19 Analysis and Timeseries Forecast',
    description:
      'A time series forecast project using Python. Data is analyzed and visualized using libraries Matplotlib and Seaborn, and the future is forecast for up to 30 days using Scikit-learn.',
    technologies: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Matplotlib', icon: <FaChartPie /> },
    ],
    image: `${basePath}/assets/covid19.png`,
    github: 'https://github.com/sweta-sahu/COVID19-analysis-and-forecast',
  },
  {
    title: 'Bakery Website',
    description:
      'A simple bakery website showcasing bakery details and menu items for users to view.',
    technologies: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <FaCss3 /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    image: `${basePath}/assets/bakery-site.png`,
    github: 'https://github.com/sweta-sahu/Bakery-website',
  },
  {
    title: 'Student Marks Management System',
    description:
      'A GUI application for managing student marks records using Python and Oracle. Features include adding, updating, deleting, and viewing data in tabular and graphical formats.',
    technologies: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Oracle', icon: <SiOracle /> },
    ],
    image: `${basePath}/assets/Python-projects.png`,
    github: 'https://github.com/sweta-sahu/Student-Marks-Management-System',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary uppercase text-center mb-12">
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer group"
              onClick={() => setSelected(project)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-background/80 text-foreground px-3 py-1 rounded-md font-semibold">
                {project.title}
              </div>
            </div>
          ))}
        </div>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-background text-foreground rounded-lg max-w-lg w-full mx-4 p-6 relative">
              <button
                className="absolute top-4 right-4 text-2xl text-foreground hover:text-primary"
                onClick={() => setSelected(null)}
                aria-label="Close modal"
              >
                <HiX />
              </button>
              <h3 className="text-2xl font-bold text-primary mb-4">{selected.title}</h3>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full rounded-md mb-4"
              />
              <p className="mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center bg-primary text-background px-2 py-1 rounded-full text-sm"
                  >
                    {tech.icon}
                    <span className="ml-2">{tech.name}</span>
                  </span>
                ))}
              </div>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-background font-semibold px-4 py-2 rounded-md hover:bg-primary-light transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
