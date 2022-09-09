import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

import Description from './Description';
import Ingredients from './Ingredients';
import Steps from './Steps';

import { tabOptions, tabKeys } from '../../constants/tabOptions';


export const RecipeTab = (props) => {
  const {
    recipe,
    genre
  } = props;
  const [key, setKey] = useState('description')

  return (
    <div className='d-flex justify-content-evenly pb-5'>
      <Col md={ 8 }>
        <Tabs
          activeKey={ key }
          className='mb-3'
          justify
          onSelect={ (k) => setKey(k) }
        >
          { tabOptions.map(t => (
            <Tab eventKey={ t.title.toLowerCase() } title={ t.title }>
              <div className='p-3'>
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
              </div>
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