import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import shopify from '../../assets/shopify.png';
import dropbox from '../../assets/dropbox.png';
import google from '../../assets/google.png';
import atlassian from '../../assets/atlassian.png';
import slack from '../../assets/slack.png';

import './style.css'

const Partners = () => {
  return (
   <>
   <Container className='partners-container'>
    <Row>
      <Col className='partners-logo'>
      <img src={shopify} alt="shopify-img" />
      </Col>

      <Col className='partners-logo'>
      <img src={dropbox} alt="dropbox-img" />
      </Col>

      <Col className='partners-logo'>
      <img src={google} alt="google-img" />
      </Col>

      <Col className='partners-logo'>
      <img src={atlassian} alt="atlassian-img" />
      </Col>
      
      <Col className='partners-logo'> 
      <img src={slack} alt="slack-img" />
      </Col>
    </Row>
   </Container>

   </>
  )
}

export default Partners