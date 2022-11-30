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

            <div className='schedule-div'>
              <p className='city-icon-text'><span className='city-icon'><CiLocationOn /></span> City</p>
             
              <p className='location-text'>Location</p>

              <Button className='schedule-btn'> Schedule Visit</Button>

            </div>
            <div className='circled-imgs-div'>
              <p className='booked-text'>
                <span><img className='booked-img' src={gropUsers} alt="img" />16 people booked a visit in last 24 hours</span></p>

            </div>

          </Col>

          <Col>

            <img src={herobg} alt="hero-image" />
          </Col>
        </Row>



      </Container>

    </>
  )
}

export default HeroSection;