import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <Row>
          <Col>
            <h2
              className="text-center mb-5"
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#002855",
                textTransform: "uppercase",
              }}
            >
              About Me
            </h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={12} lg={8} className="mx-auto">
            <p className="lead" style={{ color: "#333", fontSize: "1.2rem" }}>
              Hi! I'm a passionate Computer Science and Engineering graduate student at the University at Buffalo, specializing in Artificial Intelligence and Machine Learning. With 3+ years of professional experience as a software developer, I've honed my skills in creating innovative solutions through backend development, full-stack engineering, and cutting-edge AI/ML applications.
            </p>
            <p style={{ color: "#555" }}>
              Throughout my career, I've had the opportunity to:
            </p>
            <ul style={{ color: "#555", marginLeft: "20px" }}>
              <li>Lead backend teams to design scalable microservices and REST APIs using Spring Boot and ReactJS.</li>
              <li>Deploy applications on AWS, manage database migrations, and build intelligent systems for data clustering and video analytics.</li>
              <li>Collaborate on impactful projects, including customer churn analysis and high-accuracy chatbot development using LSTMs.</li>
            </ul>
            <p style={{ color: "#555" }}>
              My curiosity drives me to explore the intersections of data analysis, software engineering, and machine learning to create solutions that transform real-world challenges into success stories.
            </p>
            <p style={{ color: "#555" }}>
              I thrive in fast-paced, collaborative environments where innovation and adaptability are key. Whether it's building APIs for seamless communication, diving into complex datasets for actionable insights, or optimizing code for scalability, I am committed to delivering quality and value.
            </p>
            <p style={{ fontWeight: "bold", color: "#002855" }}>
              Looking for opportunities: AI/ML Engineer, Data Scientist, Data Engineer, or Software Developer.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}