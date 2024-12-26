import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand, NavbarToggle, NavbarCollapse, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand href="#">Sweta Sahu</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Education</NavLink>
            <NavLink href="#">Experience</NavLink>
            <NavLink href="#">Projects</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;