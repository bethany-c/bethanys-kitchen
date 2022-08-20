import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { contact } from '../constants/contact';

export const ContactMe = () => (
  <div>
    <h1>Let's get in touch!</h1>
    <Row xs={1} md={3} className='pb-3'>
      { contact.map((info) => (
        <Col>
          <Card border='info' className='p-3'>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{ info.title }</Card.Title>
              <Card.Text>
                { info.subtitle }
                <a href={ info.href }>{ info.link }</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )) }
    </Row>
  </div>
  
);

export default ContactMe;
