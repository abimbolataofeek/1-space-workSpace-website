import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import visionImg from '../../assets/visionImg.png'
import visionIcon1 from '../../assets/visionIcon1.png'
import visionIcon2 from '../../assets/visionIcon2.png'
import visionIcon3 from '../../assets/visionIcon3.png'

import './style.css'
const Vision = () => {
  return (
    <>
      <Container className='vision-container'>
        <Row>
          <Col>
            <p className='vision-txt'>Visions</p>

            <p className='coworking-txt'>
              Coworking is an arrangement
              in which workers of different companies share an office space,
              allowing cost savings and convenience
              through the use of common infrastructures services.
            </p>
            <Container className='items-container'>

              <div className='Twocontainer'>
                <Row className='icons-div'>
                  <Col className='icons'>
                    <img src={visionIcon1} alt="" />
                  </Col>

                  <Col>
                    <p className='header-txt'> High quality co-living spaces</p>
                    <p className='txt'>Coworking is an arrangement in which workers of different companies.</p>
                  </Col>

                </Row>

                <Row>
                  <Col className='icons'>
                    <img src={visionIcon2} alt="" />
                  </Col>

                  <Col>
                    <p className='header-txt' >Equipped for productivity</p>

                    <p className='txt'>Coworking is an arrangement in which workers of different companies.</p>
                  </Col>

                </Row>


              </div>



              <Col className='icons'>
                <img src={visionIcon3} alt='' />
              </Col>
              <p className='header-txt' >Simple and inclusive</p>
              <p className='txt'>Coworking is an arrangement in which workers of different companies.</p>

            </Container>
            <Button size="lg" className='view-btn'> View Availability</Button>
          </Col>

          <Col className='img-col'>
            <img src={visionImg} alt="bg-img" />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Vision