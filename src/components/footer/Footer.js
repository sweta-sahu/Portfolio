import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact</h5>
            <p>Email: <a href="mailto:swetasah@buffalo.edu" className="text-light">swetasah@buffalo.edu</a></p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Follow Me</h5>
            <div className="d-flex justify-content-md-end gap-3">
              <a href="https://www.linkedin.com/in/23-sweta-sahu/" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaLinkedin />
              </a>
              <a href="https://github.com/sweta-sahu" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="border-light my-3" />
        <Row>
          <Col className="text-center">
            <p>© {new Date().getFullYear()} Sweta Sahu. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;