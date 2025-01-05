import dynamic from 'next/dynamic';
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3, FaDocker, FaGitAlt, FaAws, FaLaptopCode, FaChartPie, FaBrain, FaDatabase, FaInfinity } from 'react-icons/fa';
import { SiFlask, SiSpringboot, SiFastapi, SiApachehadoop, SiApachespark, SiPostgresql, SiMongodb, SiReact, SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn, SiNumpy, SiPandas, SiMysql, SiKeras } from 'react-icons/si';
import { IoIosAnalytics } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from 'react-bootstrap';

function Skills() {
  const iconSize = 25;

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#002855",
            textTransform: "uppercase",
          }}
        >
          Skills
        </h2>
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <Card className="text-center h-100 shadow-sm" style={{ border: "1px solid #ddd" }}>
              <Card.Body>
                <Card.Title style={{ color: "#002855", fontWeight: "bold" }}>
                  <FaLaptopCode size={iconSize} /> Programming Languages
                </Card.Title>
                <hr />
                <Card.Text style={{ color: "#555" }}>
                  <FaPython size={iconSize} /> Python <FaJava size={iconSize} /> Java <FaJs size={iconSize} /> JavaScript <FaHtml5 size={iconSize} /> HTML <FaCss3 size={iconSize} /> CSS
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="text-center h-100 shadow-sm" style={{ border: "1px solid #ddd" }}>
              <Card.Body>
                <Card.Title style={{ color: "#002855", fontWeight: "bold" }}>
                  <FaBrain size={iconSize} /> Machine Learning & Data Science
                </Card.Title>
                <hr />
                <Card.Text style={{ color: "#555" }}>
                  <SiPandas size={iconSize} /> Pandas <SiNumpy size={iconSize} /> NumPy <SiScikitlearn size={iconSize} /> Scikit-Learn <SiTensorflow size={iconSize} /> TensorFlow <SiPytorch size={iconSize} /> PyTorch <FaPython size={iconSize} /> NLTK <FaPython size={iconSize} /> SpaCy <SiOpencv size={iconSize} /> OpenCV <FaChartPie size={iconSize} /> Matplotlib <IoIosAnalytics size={iconSize} /> Seaborn
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="text-center h-100 shadow-sm" style={{ border: "1px solid #ddd" }}>
              <Card.Body>
                <Card.Title style={{ color: "#002855", fontWeight: "bold" }}>
                  <FaLaptopCode size={iconSize} /> Web Development
                </Card.Title>
                <hr />
                <Card.Text style={{ color: "#555" }}>
                  <SiReact size={iconSize} /> ReactJS <SiFlask size={iconSize} /> Flask <SiFastapi size={iconSize} /> FastAPI <SiSpringboot size={iconSize} /> Spring Boot
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="text-center h-100 shadow-sm" style={{ border: "1px solid #ddd" }}>
              <Card.Body>
                <Card.Title style={{ color: "#002855", fontWeight: "bold" }}>
                  <FaDatabase size={iconSize} /> Database Management
                </Card.Title>
                <hr />
                <Card.Text style={{ color: "#555" }}>
                  <SiPostgresql size={iconSize} /> PostgreSQL <SiMysql size={iconSize} /> MySQL <SiMongodb size={iconSize} /> MongoDB
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="text-center h-100 shadow-sm" style={{ border: "1px solid #ddd" }}>
              <Card.Body>
                <Card.Title style={{ color: "#002855", fontWeight: "bold" }}>
                  <FaInfinity size={iconSize} /> DevOps & Deployment
                </Card.Title>
                <hr />
                <Card.Text style={{ color: "#555" }}>
                  <FaDocker size={iconSize} /> Docker <FaGitAlt size={iconSize} /> Git <FaAws size={iconSize} /> AWS
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="text-center h-100 shadow-sm" style={{ border: "1px solid #ddd" }}>
              <Card.Body>
                <Card.Title style={{ color: "#002855", fontWeight: "bold" }}>
                  <FaDatabase size={iconSize} /> Big Data Tools
                </Card.Title>
                <hr />
                <Card.Text style={{ color: "#555" }}>
                  <SiApachehadoop size={iconSize} /> Hadoop <SiApachespark size={iconSize} /> Spark
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false });