import React from 'react';
import PropTypes from 'prop-types';

import { breakfast } from '../../constants/recipes/breakfast';
import { lunch } from '../../constants/recipes/lunch';
import { dinner } from '../../constants/recipes/dinner';
import { snack } from '../../constants/recipes/snack';

export const RecipeHeader = (props) => {
  const {
    recipe,
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

  const imgSrc = genreToMap()[recipe].src
  const defaultImg = require('../../images/RecipeHome/allCollage.jpg')

  return (
    <div className='pb-5'>
      <h1>{ recipe }</h1>
      <img 
        src={ imgSrc ? imgSrc : defaultImg } 
        alt='henlo' 
        width={ 400 }
      />
    </div>
    
  )
};

RecipeHeader.propTypes = {
  recipe: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default RecipeHeader;
