import Header from '../header/Header';
import Footer from '../footer/Footer';
import About from './About';
import Skills from './Skills';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Loader from '../loader/Loader';
import {useEffect, useState} from 'react';

function Home() {

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
      <section
        id="home"
        style={{
          background: 'linear-gradient(180deg, #001f3f, #002855)',
          color: '#fff',
          padding: '80px 0',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="display-4 mb-4">
                Hi, I'm <span style={{ color: '#00b3b3' }}>Sweta Sahu</span>
              </h1>
              <p className="lead mb-4">
                Passionate graduate student in Computer Science Engineering specializing in AI/ML, with 3+ years of software development experience.
              </p>
              <Button
                variant="light"
                className="me-3"
                href="https://drive.google.com/file/d/1w8LDmNsZyy-4uiVpJWDnvGucwidvmku_/view?usp=drive_link"
                target="_blank"
                style={{
                  color: '#002855',
                  backgroundColor: '#00b3b3',
                  borderColor: '#00b3b3',
                }}
              >
                View Resume
              </Button>
              <Button variant="outline-light" href="mailto:swetasah@buffalo.edu">
                Contact Me
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="/assets/developer.png"
                alt="Sweta Sahu"
                className="img-fluid rounded shadow"
                style={{
                  border: '2px solid #00b3b3',
                  maxWidth: '80%',
                  height: 'auto',
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" style={{ backgroundColor: '#f4f4f4', padding: '80px 0' }}>
        <Container>
          <About />
        </Container>
      </section>

      <section id="skills" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <Container>
          <Skills />
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Home;