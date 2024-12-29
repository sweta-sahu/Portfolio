import {Row, Col, Container, Button} from "react-bootstrap"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import dynamic from 'next/dynamic';

function Home() {
  return (
    <>
      <Container className="pt-5 p-100">
        <Row>
          <Col>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px', height: '100%' }}>
              <h1 style={{textAlign: 'center'}}>Hi I'm Sweta Sahu</h1>
              <p>Passionate graduate student in Computer Science Engineering with a specialization in AI/ML, blending academic excellence with 3 years of professional experience in software development. Dedicated to leveraging Machine Learning, Data Analysis, and API design to create innovative solutions and drive meaningful impact in the tech landscape.</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <a href="https://www.linkedin.com/in/23-sweta-sahu/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      <FaLinkedin size={30} />
                  </a>
                  <a href="https://github.com/sweta-sahu" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      <FaGithub size={30} />
                  </a>
              </div>
              <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <a href="https://drive.google.com/file/d/1w8LDmNsZyy-4uiVpJWDnvGucwidvmku_/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', backgroundColor: 'black', color: 'white', padding: '10px 20px', borderRadius: '5px', fontSize: '16px',textAlign: 'center'}}>
                  Resume
                </a>
                <a href="mailto:swetasah@buffalo.edu"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: 'grey',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    textAlign: 'center',
                  }}
                  >
                  Contact Me
                  </a>
                </div>
              </div>
          </Col>
          <Col>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
              <Image
                  src="/assets/developer.png"
                  alt="Sweta Sahu"
                  width={500}
                  height={500}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });