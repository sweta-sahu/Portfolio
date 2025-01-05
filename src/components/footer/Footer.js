import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#002855",
        color: "#f8f9fa",
        padding: "20px 0",
        borderTop: '3px solid #00b3b3',
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <h5 style={{ color: "#00b3b3", fontWeight: "bold" }}>Contact</h5>
            <p>
              Email:{" "}
              <a href="mailto:swetasah@buffalo.edu" className="text-light">
                swetasah@buffalo.edu
              </a>
            </p>
            <p>Phone: +1 (716) 446-6484</p>
          </Col>

          <Col md={6} className="text-md-end">
            <h5 style={{ color: "#00b3b3", fontWeight: "bold" }}>Follow Me</h5>
            <div className="d-flex justify-content-md-end gap-3">
              <a
                href="https://www.linkedin.com/in/23-sweta-sahu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                style={{
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00b3b3")}
                onMouseLeave={(e) => (e.target.style.color = "#f8f9fa")}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/sweta-sahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                style={{
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00b3b3")}
                onMouseLeave={(e) => (e.target.style.color = "#f8f9fa")}
              >
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>

        <hr
          style={{
            borderTop: "1px solid #00b3b3",
          }}
        />
        <Row>
          <Col className="text-center">
            <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
              © {new Date().getFullYear()} Sweta Sahu. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;