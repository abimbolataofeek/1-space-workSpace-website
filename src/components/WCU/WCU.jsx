import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BiCalendarEdit } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { BsWifi } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdOutlineChair } from 'react-icons/md';



import './style.css'

const WCU = () => {
  return (
    <>
      <Container className='wcu-container'>
        <p className='why-txt'>Why Choose Us?</p>
        <p className='benefits-txt'>The benefits that will
          make you comfort</p>

        <Row className='row-container'>
          <Col>
          <p className='wcu-icons'><BiCalendarEdit /></p>
          <p className='header'>Community Events</p>
          <p className='p-txt'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </Col>
          <Col>
          <p className='wcu-icons'><CgGym /></p>
          <p className='header'>Exercise Facilities</p>
          <p className='p-txt'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </Col>
          <Col>
          <p className='wcu-icons'><BsWifi /></p>
          <p className='header'>High-Speed Wireless</p>
          <p className='p-txt'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </Col>
          <Col>
          <p className='wcu-icons'><AiOutlineGlobal /></p>
          <p className='header'>Global Availability</p>
          <p className='p-txt'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </Col>
          <Col>
          <p className='wcu-icons'><MdOutlineChair /></p>
          <p className='header'>Comfort Lounges</p>
          <p className='p-txt'>Allowing cost savings and convenience through the use of common infrastructures.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WCU