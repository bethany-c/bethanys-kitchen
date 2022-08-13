import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

import Description from './Description';
import Ingredients from './Ingredients';
import Steps from './Steps';

import { tabOptions, tabKeys } from '../../constants/tabOptions';
import { breakfast } from '../../constants/recipes/breakfast';
import { lunch } from '../../constants/recipes/lunch';
import { dinner } from '../../constants/recipes/dinner';
import { snack } from '../../constants/recipes/snack';

export const RecipeTab = (props) => {
  const {
    recipe,
    genre
  } = props;
  // props to pass in: which food being displayed
  const [key, setKey] = useState('description')


  return (
    <div className='d-flex justify-content-evenly'>
      <Col md={ 8 }>
        <Tabs
          activeKey={ key }
          className='mb-3'
          justify
          onSelect={ (k) => setKey(k) }
        >
          { tabOptions.map(t => (
            <Tab eventKey={ t.title.toLowerCase() } title={ t.title }>
              {/* <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>
                    henlo
                  </Card.Title>
                </Card.Body>
              </Card> */}
              <p>{ key }</p>
              { key === tabKeys[0] && (
                <Description 
                  foodToDisplay={ recipe }
                  genre={ genre }
                />
              ) }

              { key === tabKeys[1] && (
                <Ingredients 
                  foodToDisplay={ recipe }
                  genre={ genre }
                />
              ) }

              { key === tabKeys[2] && (
                <Steps
                  foodToDisplay={ recipe }
                  genre={ genre }
                />
              ) }
          </Tab>
          ))}
        </Tabs>
      </Col>
      
    </div>
    
  )
};

RecipeTab.propTypes = {
  recipe: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default RecipeTab;