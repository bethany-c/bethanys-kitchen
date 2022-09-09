import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import { headerOptions } from '../../constants/headerOptions';
import all from '../../images/RecipeHome/allCollage.jpeg';
import breakfast from '../../images/RecipeHome/breakfastCollage.jpg';
import lunch from '../../images/RecipeHome/lunchCollage.jpg';
import dinner from '../../images/RecipeHome/dinnerCollage.png';
import snacks from '../../images/RecipeHome/snacksCollage.jpg';

export const Home = (props) => {
  const {
    onViewChange
  } = props;

  const getSrc = (title) => {
    switch (title) {
      case 'All': return all;
      case 'Breakfast': return breakfast;
      case 'Lunch': return lunch;
      case 'Dinner': return dinner;
      case 'Snack': return snacks;
      default: return all;
    }
  }

  return (
    <>
    <div className='pt-4 pb-3'>
      <h1>Recipes</h1>
      <p>Choose a time of day to view recipes</p>
    </div>


      { headerOptions.map(i => (
        <div className='d-flex justify-content-evenly pb-5'>
          <Col md={ 4 }>
            <Card>
              <Card.Img variant="top" src={ getSrc(i.title) }/>
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