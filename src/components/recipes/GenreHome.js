import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import { breakfast } from '../../constants/recipes/breakfast';
import { lunch } from '../../constants/recipes/lunch';
import { dinner } from '../../constants/recipes/dinner';
import { snack } from '../../constants/recipes/snack';

export const GenreHome = (props) => {
  const {
    genre,
    onRecipeView
  } = props;

  const genreToMap = () => {
    switch (genre) {
      case 'Breakfast':
        return breakfast;
      case 'Lunch':
        return lunch;
      case 'Dinner':
        return dinner;
      case 'Snack':
        return snack;
      default:
        return null;
    }
  }

  return (
    <>
      <h1>{ genre } Recipes</h1>
      { genre !== 'All' && (
        Object.entries(genreToMap()).map(([key, val]) => (
          <div className='d-flex justify-content-evenly pb-5'>
            <Col md={ 4 }>
              <Card>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>
                    { key }
                  </Card.Title>
                  <Card.Subtitle>
                    { val.subtitle }
                  </Card.Subtitle>
                </Card.Body>
                <div className='d-flex justify-content-evenly pb-3'>
                <Col md={ 3 }>
                  <Button
                    variant="outline-secondary"
                    onClick={ () => onRecipeView(key) }
                  >
                    Recipes
                  </Button>
                </Col>
              </div>
              </Card>
            </Col>
          </div>
        ))
      )}

    </>
  );
};

GenreHome.propTypes = {
  genre: PropTypes.string.isRequired,
  onRecipeView: PropTypes.func.isRequired
};

export default GenreHome;