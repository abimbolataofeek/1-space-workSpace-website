import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import galleryside from '../../assets/galleryside.png'
import gallery1 from '../../assets/gallery1.png'; 
import gallery2 from '../../assets/gallery2.png'; 
import gallery3 from '../../assets/gallery3.png'; 
import gallery4 from '../../assets/gallery4.png'; 

import "./style.css"

const Gallery = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className='gallery-txt'>Gallery</p>

            <p className='immersive-txt'> Immersive beautiful
              co-working space gallery</p>
              <Col>
              <img className='gallery-img1' src={gallery1} alt="" />
              <img className='gallery-img2' src={gallery2} alt="" />
              <img src={gallery3} alt="" />
              <img className='gallery-img1' src={gallery4} alt="" />
              
              </Col>
          </Col>

<Col>
<img src={galleryside} alt="" />

</Col>
        </Row>

      </Container>
    </>
  )
}

export default Gallery