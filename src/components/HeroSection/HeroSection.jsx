import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import herobg from '../../assets/herobg.png';
import gropUsers from '../../assets/gropUsers.png'
import orangeArt from '../../assets/orangeArt.png';
import { CiLocationOn } from 'react-icons/ci'
import './style.css';

const HeroSection = () => {
  return (
    <>
      <Container className='hero-container'>
        
        <Row>
          <Col>
            <img className='orangArt' src={orangeArt} alt="img" />
            <h1 className='heroH1Text'>A new way to revolutionise you workspace to yourself</h1>
            <Row>
              <Col lg={5} md={6} sm={12} xs={12}>
                <Col className='schedule-div' >
                  <p className='city-icon-text'><span className='city-icon'><CiLocationOn /></span> City</p>

                  <p className='location-text'>Location</p>

                  <Button className='hero-schedule-btn'> Schedule Visit</Button>

                </Col>
              </Col>
              <Col lg={5} md={6} sm={12} xs={12}>
              <div className='circled-imgs-div'>
                <p className='booked-text'>
                  <span>
                    <img className='booked-img' src={gropUsers} alt="img" />16 people booked
                    a visit in last 24 hours</span>
                </p>

              </div></Col>
            </Row>



          </Col >
          <Col className='workspace-img-col' lg={5} md={6} sm={12} xs={12}>

            <img className='workspace-img' src={herobg} alt="hero-photo" />
          </Col>
        </Row>



      </Container>

    </>
  )
}

export default HeroSection;