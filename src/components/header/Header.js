import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark text-light py-3" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="text-light fs-3">
          &lt;Sweta Sahu&gt;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-light mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="text-light mx-2">About</Nav.Link>
            <Nav.Link href="#skills" className="text-light mx-2">Skills</Nav.Link>
            <Nav.Link href="/education" className="text-light mx-2">Education</Nav.Link>
            <Nav.Link href="/experience" className="text-light mx-2">Experience</Nav.Link>
            <Nav.Link href="/projects" className="text-light mx-2">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;