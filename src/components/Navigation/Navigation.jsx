import React from 'react';

import './Navigation.css';

import { Container, Nav, Navbar, } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container className='nav-container'>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >

            <Nav className="links-container left-links me-auto">
              <Nav.Link className='links' href="#home">Home</Nav.Link>
              <Nav.Link className='links' href="#link">About</Nav.Link>
              <Nav.Link className='links' href="#link">Services</Nav.Link>
            </Nav>

            <Navbar.Brand className='logo-text' href="#home"><p>1-Space</p></Navbar.Brand>
          </Navbar.Collapse>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links-container right-links me-auto">
              <Nav.Link className='links' href="#home">Service</Nav.Link>
              <Nav.Link className='links' href="#link">Space</Nav.Link>
              <Nav.Link className='links' href="#link">Event</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  )
}

export default Navigation;

