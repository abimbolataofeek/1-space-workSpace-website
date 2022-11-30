import React from 'react';

import './Navigation.css';

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar className='navbar'>
        <Container className='nav-container'>

          <Nav className='link-nav'>
            <Nav.Link className='nav-links' href='#home'>Home</Nav.Link>
            <Nav.Link className='nav-links' href='#home'>About</Nav.Link>
            <Nav.Link className='nav-links' href='#home'>Services</Nav.Link>
          </Nav>

          <Navbar.Brand className='nav-brand me-auto' href='#home'>1-Space</Navbar.Brand>

          <Nav className='link-nav'>
            <Nav.Link className='nav-links' href='#home'>Service</Nav.Link>
            <Nav.Link className='nav-links' href='#home'>Space</Nav.Link>
            <Nav.Link className='nav-links' href='#home'>Event</Nav.Link>
          </Nav>
        </Container>

      </Navbar>

    </>

  )
}

export default Navigation;

