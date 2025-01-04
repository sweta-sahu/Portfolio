import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FaPython, FaCss3, FaBootstrap, FaJs, FaChartPie } from "react-icons/fa";
import { SiMysql, SiTensorflow, SiHtml5, SiKeras, SiFlask, SiOracle, SiScikitlearn, SiPandas } from "react-icons/si";
import { IoIosAnalytics } from "react-icons/io";
import Loader from "../loader/Loader";
import { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Recommendation Chatbot",
      description:
        "A web application with a conversational AI chatbot for locating nearby hospitals based on user symptoms and location. Features include hospital management, secure login, and OTP-based registration, powered by Keras, TensorFlow, and MySQL.",
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "Tensorflow", icon: <SiTensorflow /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
      image: "/assets/hospital-chatbot.png",
      github: "https://github.com/sweta-sahu/Hospital-Recommendation-Chatbot",
    },
    {
      title: "COVID19 Analysis and Timeseries Forecast",
      description:
        "A time series forecast project using Python. Data is analyzed and visualized using libraries Matplotlib and Seaborn, and the future is forecast for up to 30 days using Scikit-learn.",
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Matplotlib", icon: <FaChartPie /> },
        { name: "Seaborn", icon: <IoIosAnalytics /> },
      ],
      image: "/assets/covid19.png",
      github: "https://github.com/sweta-sahu/COVID19-analysis-and-forecast",
    },
    {
      title: "Bakery Website",
      description:
        "A simple bakery website showcasing bakery details and menu items for users to view.",
      technologies: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
      image: "/assets/bakery-site.png",
      github: "https://github.com/sweta-sahu/Bakery-website",
    },
    {
      title: "Student Marks Management System",
      description:
        "A GUI application for managing student marks records using Python and Oracle. Features include adding, updating, deleting, and viewing data in tabular and graphical formats.",
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Oracle", icon: <SiOracle /> },
        { name: "Tkinter", icon: <FaPython /> },
      ],
      image: "/assets/Python-projects.png",
      github: "https://github.com/sweta-sahu/Student-Marks-Management-System",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className="projects-page py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h1
            className="text-center mb-5"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#333",
              textTransform: "uppercase",
            }}
          >
            Projects
          </h1>
          {projects.map((project, index) => (
            <div
              className="row align-items-center mb-5"
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "20px",
              }}
            >
              {/* Project Image */}
              <div className="col-md-4">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
              {/* Project Details */}
              <div className="col-md-8" style={{ color: "#444" }}>
                <h3 style={{ color: "#000", fontWeight: "bold" }}>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        marginRight: "10px",
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "0.9rem",
                        color: "#444",
                      }}
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </p>
                <Button
                  variant="primary"
                  href={project.github}
                  target="_blank"
                  style={{ marginTop: "10px" }}
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

    </>
  );
};

export default Projects;