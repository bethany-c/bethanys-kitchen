import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import { headerOptions } from '../../constants/headerOptions';

export const Home = (props) => {
  const {
    onViewChange
  } = props;

  return (
    <>
      <h1>Recipes</h1>
      <p>Choose a time of day to view recipes</p>

      { headerOptions.map(i => (
        <div className='d-flex justify-content-evenly pb-5'>
          <Col md={ 4 }>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>
                  { i.title }
                </Card.Title>
              </Card.Body>
              <div className='d-flex justify-content-evenly pb-3'>
                <Col md={ 3 }>
                  <Button
                    variant="outline-secondary"
                    onClick={ () => onViewChange(i.title) }
                  >
                    Recipes
                  </Button>
                </Col>
              </div>
              
            </Card>
          </Col>
        </div>
      ))}
    </>
    
  )
};

Home.propTypes = {
  onViewChange: PropTypes.func.isRequired
}

export default Home;