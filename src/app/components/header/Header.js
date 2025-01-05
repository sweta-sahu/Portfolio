'use client'

import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse} from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function Header() {

  useEffect(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

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
      <Link href="/" passHref style={{textDecoration: 'none'}}>
        <NavbarBrand
          className="fs-3"
          style={{
            color: '#00b3b3',
            fontFamily: '"Pacifico", cursive',
            fontWeight: 'bold',
          }}
        >
          Sweta Sahu
        </NavbarBrand>
      </Link>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <NavLink className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
                Home
              </NavLink>
            </Link>
            <Link href="/#about" passHref legacyBehavior>
              <NavLink className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
                About
              </NavLink>
            </Link>
            <Link href="/#skills" passHref legacyBehavior>
              <NavLink className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
                Skills
              </NavLink>
            </Link>
            <Link href="/education" passHref legacyBehavior>
              <NavLink className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
                Education
              </NavLink>
            </Link>
            <Link href="/experience" passHref legacyBehavior>
              <NavLink className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
                Experience
              </NavLink>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <NavLink className="mx-2" style={{ color: '#fff', fontWeight: '500' }}>
                Projects
              </NavLink>
            </Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Header;