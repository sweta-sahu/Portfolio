import Header from '../header/Header';
import Footer from '../footer/Footer';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Header />
      <section id="home" className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="display-4 mb-4">Hi, I'm <span className="text-primary">Sweta Sahu</span></h1>
              <p className="lead mb-4">
                Passionate graduate student in Computer Science Engineering specializing in AI/ML, with 3+ years of software development experience.
              </p>
              <Button variant="primary" className="me-3" href="https://drive.google.com/file/d/1w8LDmNsZyy-4uiVpJWDnvGucwidvmku_/view?usp=drive_link" target="_blank">
                View Resume
              </Button>
              <Button variant="outline-dark" href="mailto:swetasah@buffalo.edu">Contact Me</Button>
            </Col>
            <Col md={6} className="text-center">
              <img src="/assets/developer.png" alt="Sweta Sahu" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-5">About Me</h2>
          <About />
        </Container>
      </section>

      <section id="skills" className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Skills</h2>
          <Skills />
        </Container>
      </section>
      
      <Footer />
    </>
  );
}

export default Home;