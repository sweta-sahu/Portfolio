import dynamic from 'next/dynamic';
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3, FaDocker, FaGitAlt, FaAws, FaLaptopCode, FaChartPie, FaBrain, FaDatabase, FaInfinity } from 'react-icons/fa';
import { SiFlask, SiSpringboot, SiFastapi, SiApachehadoop, SiApachespark, SiPostgresql, SiMongodb, SiReact, SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn, SiNumpy, SiPandas, SiMysql, SiKeras } from 'react-icons/si';
import { IoIosAnalytics } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from 'react-bootstrap';

function Skills() {
  const iconSize = 25;

  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col lg={4} md={6} sm={12}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <Card.Title><FaLaptopCode size={iconSize} /> Programming Languages</Card.Title>
              <hr />
              <Card.Text>
                <FaPython size={iconSize} /> Python <FaJava size={iconSize} /> Java <FaJs size={iconSize} /> JavaScript <FaHtml5 size={iconSize} /> HTML <FaCss3 size={iconSize} /> CSS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <Card.Title><FaBrain size={iconSize} /> Machine Learning & Data Science</Card.Title>
              <hr />
              <Card.Text>
                <SiPandas size={iconSize} /> Pandas <SiNumpy size={iconSize} /> NumPy <SiScikitlearn size={iconSize} /> Scikit-Learn <SiTensorflow size={iconSize} /> TensorFlow <SiPytorch size={iconSize} /> PyTorch <FaPython size={iconSize} /> NLTK <FaPython size={iconSize} /> SpaCy <SiOpencv size={iconSize} /> OpenCV <FaChartPie size={iconSize} /> Matplotlib <IoIosAnalytics size={iconSize} /> Seaborn
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <Card.Title><FaLaptopCode size={iconSize} /> Web Development</Card.Title>
              <hr />
              <Card.Text>
                <SiReact size={iconSize} /> ReactJS <SiFlask size={iconSize} /> Flask <SiFastapi size={iconSize} /> FastAPI <SiSpringboot size={iconSize} /> Spring Boot
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <Card.Title><FaDatabase size={iconSize} /> Database Management</Card.Title>
              <hr />
              <Card.Text>
                <SiPostgresql size={iconSize} /> PostgreSQL <SiMysql size={iconSize} /> MySQL <SiMongodb size={iconSize} /> MongoDB
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <Card.Title><FaInfinity size={iconSize} /> DevOps & Deployment</Card.Title>
              <hr />
              <Card.Text>
                <FaDocker size={iconSize} /> Docker <FaGitAlt size={iconSize} /> Git <FaAws size={iconSize} /> AWS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Body>
              <Card.Title><FaDatabase size={iconSize} /> Big Data Tools</Card.Title>
              <hr />
              <Card.Text>
                <SiApachehadoop size={iconSize} /> Hadoop <SiApachespark size={iconSize} /> Spark
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false });