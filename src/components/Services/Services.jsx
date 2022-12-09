import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import serviceImg from '../../assets/serviceImg.png'
import calenderImg from '../../assets/calenderImg.png'
import {BsPlayCircle} from 'react-icons/bs';


import './style.css'


const Services = () => {
  return (
    <>
      <Container className='services-container'>
        <Row>
          <Col className='img-container' lg={true} >
            <img src={serviceImg} alt="bg-img" />
            <img className='calender-img' src={calenderImg} alt="calender-img" />
          </Col>

          <Col className='text-container' lg={true} >
            <div className='text-div'>
              <p className='service-text'>Services</p>

              <p className='solutions-txt'>Solutions designed for all your needs</p>

              <p className='coworking-txt'>Coworking is an arrangement in which
                workers of different companies share an office space,
                common infrastructures, such as equipment, utilities, and 
                receptionist and custodial services, and in some
                cases refreshments and parcel acceptance services.</p>
            </div>
            <Button size="lg" className='view-btn'> View Availability</Button>
            
            <Button variant="link" size="lg" className='tour-btn'><BsPlayCircle /> 3D 
            Tour of Space</Button>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Services