import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FaPython, FaCss3, FaBootstrap, FaJs, FaChartPie } from "react-icons/fa";
import { SiMysql, SiTensorflow, SiHtml5, SiKeras, SiFlask, SiOracle, SiScikitlearn, SiPandas} from "react-icons/si";
import { IoIosAnalytics } from "react-icons/io";

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
        { name: "JavaScript", icon: <FaJs /> }
      ],
      image: "/assets/hospital-chatbot.png",
      github: "https://github.com/sweta-sahu/Hospital-Recommendation-Chatbot",
    },
    {
      title: "COVID19 Analysis and Timeseries Forecast",
      description:
        "This is a time series forecast project using python. Firstly the data is imported using pandas and is analyzed and visualized using libraries matplotlib and seaborn. Secondly, the future upto 30 days is forecast using sklearn library.",
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Matplotlib", icon: <FaChartPie /> },
        { name: "Seaborn", icon: <IoIosAnalytics /> }
      ],
      image: "/assets/covid19.png",
      github: "https://github.com/sweta-sahu/COVID19-analysis-and-forecast",
    },
    {
      title: "Bakery website",
      description:
        "A simple bakery website which gives basic details of bakery and the menu for users to view items.",
      technologies: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> }
      ],
      image: "/assets/bakery-site.png",
      github: "https://github.com/sweta-sahu/Bakery-website",
    },
    {
      title: "Student Marks Management System",
      description:
        "This is a GUI project for managing Student marks records using Python and Oracle. The user can add new data, update, delete the data, or can view the entire data. The user can also view the data in a graphical format. The Python libraries matplotlib and tkinter are used.",
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Oracle", icon: <SiOracle /> },
        { name: "Tkinter", icon: <FaPython /> }
      ],
      image: "/assets/Python-projects.png",
      github: "https://github.com/sweta-sahu/Student-Marks-Management-System",
    },
  ];

  return (
    <div className="projects-page" style={{ padding: "20px"}}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Projects</h1>
      <div className="container">
        {projects.map((project, index) => (
          <div
            className="row align-items-center mb-4"
            key={index}
            style={{ borderBottom: "1px solid #aaa", paddingBottom: "20px" }}
          >
            <div className="col-md-4">
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", borderRadius: "8px", border: "1px solid #ccc" }}
              />
            </div>
            <div className="col-md-8" style={{ color: "#444" }}>
              <h3 style={{ color: "#000" }}>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies.map((tech, i) => (
                  <span key={i} style={{ marginRight: "10px", display: "inline-flex", alignItems: "center" }}>
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </p>
              <Button variant="dark" href={project.github} target="_blank">
                View on GitHub
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
