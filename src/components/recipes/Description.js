import React from 'react';
import PropTypes from 'prop-types';

import { breakfast } from '../../constants/recipes/breakfast';
import { lunch } from '../../constants/recipes/lunch';
import { dinner } from '../../constants/recipes/dinner';
import { snack } from '../../constants/recipes/snack';

export const Description = (props) => {

  const {
    foodToDisplay,
    genre
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
    <p>{ genreToMap()[foodToDisplay].description }</p>
  )

};

Description.propTypes = {
  foodToDisplay: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default Description;