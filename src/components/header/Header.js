import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: '#002855',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderBottom: '3px solid #00b3b3',
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="fs-3"
          style={{
            color: '#00b3b3',
            fontFamily: '"Pacifico", cursive',
            fontWeight: 'bold',
          }}
        >
          Sweta Sahu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
              Skills
            </Nav.Link>
            <Nav.Link href="/education" className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
              Education
            </Nav.Link>
            <Nav.Link href="/experience" className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
              Experience
            </Nav.Link>
            <Nav.Link href="/projects" className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;