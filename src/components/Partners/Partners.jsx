import React from 'react';
import { Container, Row, div } from 'react-bootstrap';
import shopify from '../../assets/shopify.png';
import dropbox from '../../assets/dropbox.png';
import google from '../../assets/google.png';
import atlassian from '../../assets/atlassian.png';
import slack from '../../assets/slack.png';

import './style.css'

const Partners = () => {
  return (
    <>
      <div className='container-div'>

        <div sm>
          <img className='partners-logo' src={shopify} alt="shopify-img" />
        </div>

        <div sm>
          <img className='partners-logo' src={dropbox} alt="dropbox-img" />
        </div>

        <div sm>
          <img className='partners-logo' src={google} alt="google-img" />
        </div>

        <div sm>
          <img className='partners-logo' src={atlassian} alt="atlassian-img" />
        </div>

        <div sm>
          <img className='partners-logo' src={slack} alt="slack-img" />
        </div>

      </div>

    </>
  )
}

export default Partners