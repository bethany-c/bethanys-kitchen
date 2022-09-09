import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { AiTwotoneMail, AiFillLinkedin, AiFillGithub, AiFillIeCircle, AiFillPhone } from 'react-icons/ai';
import { Map, Marker, ZoomControl } from 'pigeon-maps';

import { contact } from '../constants/contact';
import '../components/recipes/styles.css';

const getIcon = (num) => {
  switch (num+1) {
    case 1:
      return <AiTwotoneMail style={{fontSize: '50px'}}/>;
    case 2:
      return <AiFillPhone style={{fontSize: '50px'}}/>;
    case 3:
      return <AiFillLinkedin style={{fontSize: '50px'}}/>;
    case 4:
      return <AiFillGithub style={{fontSize: '50px'}}/>;
    case 5:
      return <AiFillGithub style={{fontSize: '50px'}}/>;
    default:
      return <AiFillIeCircle style={{fontSize: '50px'}}/>;
  }
}

export const ContactMe = () => {

  const [center, setCenter] = useState([43.6532, -79.3832]);
  const [zoom, setZoom] = useState(11);

  return(
    <div>
      <h3>Let's get in touch!</h3>
      <div className='contact-spacer'>
        <Row xs={ 2 } sm={ 3 } md={ 5 } style={{ padding: 10 }}>
          { contact.map((info, index) => (
            <Col>
              { getIcon(index) }
              <h5>{ info.title }</h5>
              <a href={ info.href } target='_blank' rel='noopener noreferrer'>{ info.link }</a>
            </Col>
          )) }
        </Row>
      </div>
      <div className='pr-3'>
        <Map 
          height={ 300 } 
          width={ 1300 }
          defaultCenter={ center } 
          defaultZoom={ zoom }
          onBoundsChanged={({ center, zoom }) => { 
            setCenter(center) 
            setZoom(zoom) 
          }}
        >
          <Marker width={50} anchor={[43.6532, -79.3832]} />
          <ZoomControl/>
        </Map>
      </div>
    
    </div>
  
  )
};

export default ContactMe;
