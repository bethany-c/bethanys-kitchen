import React from 'react';
import PropTypes from 'prop-types';
import  Placeholder  from 'react-bootstrap/Placeholder';

export const RecipeHeader = (props) => {
  const {
    recipe
  } = props;

  return (
    <div className='pb-5'>
      <h1>{ recipe }</h1>
      <Placeholder.Button xs={8} aria-hidden="true" />
    </div>
    
  )
};

RecipeHeader.propTypes = {
  recipe: PropTypes.string.isRequired
};

export default RecipeHeader;
