import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import memberimage from '../../assets/memberimage.png';

import './style.css';

const Member = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className='member-txt'>Become A Member</p>

            <p className='ready-txt'> Ready to try different work
              environment now?</p>

              <p className='coworking-txt'>Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some
                 cases refreshments and parcel acceptance services.</p>

                 <Button className='sign-up-btn' size="lg">Sign Up Now</Button>
                 <Button size="lg" className='schedule-btn' variant="outline-warning">Schedule Visit</Button>
                 

          </Col>
          <Col>
<img src={memberimage} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Member