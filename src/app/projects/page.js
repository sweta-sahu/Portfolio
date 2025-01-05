'use client'

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { FaPython, FaCss3, FaJs, FaChartPie } from "react-icons/fa";
import { SiMysql, SiTensorflow, SiHtml5, SiKeras, SiFlask, SiScikitlearn, SiPandas, SiOracle } from "react-icons/si";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: "Hospital Recommendation Chatbot",
      description:
        "A web application with a conversational AI chatbot for locating nearby hospitals based on user symptoms and location. Features include hospital management, secure login, and OTP-based registration, powered by Keras, TensorFlow, and MySQL.",
        technologies: [
          { name: "Python", icon: <FaPython />, color: "#3572A5" },
          { name: "Keras", icon: <SiKeras />, color: "#D00000" },
          { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
          { name: "Flask", icon: <SiFlask />, color: "#000000" },
          { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
        ],
      image: "/assets/hospital-chatbot.png",
      github: "https://github.com/sweta-sahu/Hospital-Recommendation-Chatbot",
    },
    {
      title: "COVID19 Analysis and Timeseries Forecast",
      description:
        "A time series forecast project using Python. Data is analyzed and visualized using libraries Matplotlib and Seaborn, and the future is forecast for up to 30 days using Scikit-learn.",
      technologies: [
        { name: "Python", icon: <FaPython />, color: "#3572A5" },
        { name: "Pandas", icon: <SiPandas />, color: "#150458" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F89939" },
        { name: "Matplotlib", icon: <FaChartPie />, color: "#11557C" },
      ],
      image: "/assets/covid19.png",
      github: "https://github.com/sweta-sahu/COVID19-analysis-and-forecast",
    },
    {
      title: "Bakery Website",
      description:
        "A simple bakery website showcasing bakery details and menu items for users to view.",
      technologies: [
        { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      ],
      image: "/assets/bakery-site.png",
      github: "https://github.com/sweta-sahu/Bakery-website",
    },
    {
      title: "Student Marks Management System",
      description:
        "A GUI application for managing student marks records using Python and Oracle. Features include adding, updating, deleting, and viewing data in tabular and graphical formats.",
      technologies: [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Oracle", icon: <SiOracle />, color: "#F80000" },
      ],
      image: "/assets/Python-projects.png",
      github: "https://github.com/sweta-sahu/Student-Marks-Management-System",
    },
  ];

  const handleOpenModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProject(null);
  };

  return (
    <>
      <div className="projects-page py-5" style={{ backgroundColor: "#f8f9fa" }}>
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
            Projects
          </h1>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12"
                onClick={() => handleOpenModal(project)}
                style={{
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "250px",
                    overflow: "hidden",
                    borderRadius: "8px",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    background: "rgba(0, 43, 85, 0.8)",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentProject && (
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{currentProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={currentProject.image}
                alt={currentProject.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
              <div style={{ marginBottom: "15px" }}>{currentProject.description}</div>
              <div>
                <strong>Technologies:</strong>
                <div className="d-flex flex-wrap mt-2">
                  {currentProject.technologies.map((tech, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: tech.color,
                        color: "#fff",
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        margin: "5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {tech.icon} <span style={{ marginLeft: "5px" }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                href={currentProject.github}
                target="_blank"
                style={{
                  backgroundColor: "#00b3b3",
                  border: "none",
                  marginTop: "15px",
                }}
              >
                View on GitHub
              </Button>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Projects;