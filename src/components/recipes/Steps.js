import React from 'react';
import PropTypes from 'prop-types';

import { breakfast } from '../../constants/recipes/breakfast';
import { lunch } from '../../constants/recipes/lunch';
import { dinner } from '../../constants/recipes/dinner';
import { snack } from '../../constants/recipes/snack';

export const Steps = (props) => {
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

  const list = genreToMap()[foodToDisplay].steps

  const listItems = list.map((d) => 
    <li key={d}>{d}</li>
  );

  return (
    <div>
      { listItems }
    </div>
  );
};

Steps.propTypes = {
  foodToDisplay: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default Steps;