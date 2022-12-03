import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter, BsDribbble } from 'react-icons/bs';
import './style.css';


const Footer = () => {
  return (
    <>
      <Container className='footer-container'>
        <Row>
          <Col className='logo-container'>
            <p className='logo-txt'>1-Space</p>
            <p className='p-txt'>Men cannot not live by exchanging articles,
              but producing them.
              They live by work not trade.</p>

          </Col>
          <Col>
            <p className='links-heading'>Company</p>
            <ul className="list-unstyled">
              <li className='footer-links'> <a href="#" > Global Localities</a></li>
              <li className='footer-links'><a href="#"> Mission</a> </li>
              <li className='footer-links'><a href="#">Careers</a> </li>
              <li className='footer-links'><a href="#">Investors</a> </li>
              <li className='footer-links'><a href="#">Newsroom</a> </li>
            </ul>
          </Col>

          <Col>
            <p className='links-heading'>Partnership</p>
            <ul className="list-unstyled">
              <li className='footer-links'><a href="#">Tasks</a> </li>
              <li className='footer-links'><a href="#">Profile</a> </li>
              <li className='footer-links'><a href="#">Events</a> </li>
              <li className='footer-links'><a href="#">Services</a> </li>
            </ul>
          </Col>

          <Col >
            <p className='links-heading'>Follow Us</p>

            <a className='footer-icons' href=""><FaFacebookF /></a>
            <a className='footer-icons' href=""><BsTwitter /></a>
            <a className='footer-icons' href=""><BsDribbble /></a>
            <a className='footer-icons' href=""><FaLinkedinIn /></a>



          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer