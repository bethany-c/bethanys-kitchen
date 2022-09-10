import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import { breakfast } from '../../constants/recipes/breakfast';
import { lunch } from '../../constants/recipes/lunch';
import { dinner } from '../../constants/recipes/dinner';
import { snack } from '../../constants/recipes/snack';

import comingSoon from '../../images/RecipeHome/comingSoon.jpeg';
import marble from '../../images/backgrounds/marble.jpeg';

import '../common/styles.css';

export const GenreHome = (props) => {
  const {
    genre,
    onRecipeView
  } = props;

  const genreToMap = () => {
    switch (genre) {
      case 'All':
        return Object.assign({}, breakfast, lunch, dinner, snack);
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
      <div style={{ backgroundImage: `url(${ marble })`}}>
        <h1 className='p-3'>{ genre } Recipes</h1>

        <Container>
          <Row xs={ 1 } sm={ 1 } md={ 2 } lg={ 3 } className="align-items-center">
            { Object.entries(genreToMap()).map(([key, val]) => (
              <Col className='p-3'>
                <Card>
                  <Card.Img variant="top" src={ val.src ? val.src : comingSoon } alt='henlo'/>
                  <Card.Body>
                    <Card.Title>
                      { key }
                    </Card.Title>
                    <Card.Text>
                      { val.subtitle }
                    </Card.Text>
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
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

GenreHome.propTypes = {
  genre: PropTypes.string.isRequired,
  onRecipeView: PropTypes.func.isRequired
};

export default GenreHome;