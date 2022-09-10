import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { GiWorld, GiLaptop, GiCook, GiRotaryPhone } from 'react-icons/gi';
import me from '../images/me.jpg';
import './common/styles.css';

export const AboutMe = () => {

  const [centerA, setCenterA] = useState([43.6628, -79.3956]);
  const [zoomA, setZoomA] = useState(16);
  const [centerB, setCenterB] = useState([51.0486, -114.0708]);
  const [zoomB, setZoomB] = useState(11);

  return (
    <div className='p-3'>
      <h5>Hi! I'm Bethany</h5>
      <div className='pb-5 pt-3'>
        <img className='circular_image' alt='me' src={ me }/>
      </div>
      <GiWorld/><p>I was born and raised in Calgary, but I moved to Toronto to pursue a computer engineering degree at the University of Toronto.</p>

      <Row md={ 2 } className='p-3'>
        <Col className='pl-4'>
          <Map 
            height={ 300 } 
            width={ 650 }
            defaultCenter={ centerB } 
            defaultZoom={ zoomB }
            onBoundsChanged={({ centerB, zoomB }) => { 
              setCenterB(centerB) 
              setZoomB(zoomB) 
            }}
          >
            <Marker width={50} anchor={[51.0486, -114.0708]} />
            <ZoomControl/>
          </Map>
        </Col>
        <Col className='pr-4'>
          <Map 
            height={ 300 } 
            width={ 650 }
            defaultCenter={ centerA } 
            defaultZoom={ zoomA }
            onBoundsChanged={({ centerA, zoomA }) => { 
              setCenterA(centerA) 
              setZoomA(zoomA) 
            }}
          >
            <Marker width={50} anchor={[43.6628, -79.3956]} />
            <ZoomControl/>
          </Map>
        </Col>
      </Row>


      <GiLaptop/><p>I have experience in front end, back end, and full stack development</p>

      <GiCook/><p>Asides from school, I love cooking. I have created this website to combine my passion for cooking with my interest in web development so that I can connect with fellow foodies.</p>

      <GiRotaryPhone/><p>Feel free to <a href='mailto:bethanylyc@gmail.com' target='_blank' rel='noopener noreferrer'>email</a> me if you want to chat or go to my <a href='https://github.com/bethany-c' target='_blank' rel='noopener noreferrer'>website</a> to learn more about me!</p>
    </div>
  )

}

  



export default AboutMe;
