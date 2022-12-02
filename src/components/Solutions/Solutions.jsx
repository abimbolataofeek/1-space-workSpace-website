import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import solutionsImg from '../../assets/solutionsImg.png'

import './style.css'


const Solutions = () => {
  return (
    <>
      <Container className='solutiosion-container'>
        <Row>
          <Col>
            <p className='vision-txt'> Solutions</p>
            <p className='big-p-txt'>The 1-space all view
              experience technology</p>
            <p className='coworking-txt'>Coworking is an arrangement in which workers
              of different companies share an office space,
              allowing cost savings and convenience through
              the use of common infrastructures, such as equipment,
              utilities, and receptionist and custodial services,
              and in some cases
              refreshments and parcel acceptance services.</p>

            <Button size="lg" className='view-btn'> View Availability</Button>

          </Col>

          <Col className="img-col">
            <img src={solutionsImg} alt="" />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Solutions