import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/common/Header';
import RecipeTab from './components/recipes/RecipeTab';
import RecipeHeader from './components/recipes/RecipeHeader';
import Container from 'react-bootstrap/Container';
import Home from './components/recipes/Home';
import GenreHome from './components/recipes/GenreHome';

import { views } from './constants/views';

function App() {

  const [view, setView] = useState(views.allRecipes);
  const [recipe, setRecipe] = useState('');
  const [genre, setGenre] = useState('');

  const onViewChange = (clickedView) => {
    setRecipe('');
    setGenre(clickedView);
    setView(clickedView);
  };

  const onRecipeView = (clickedRecipe) => {
    setRecipe(clickedRecipe);
  }

  return (
    <div className="App">
      <Header 
        setView={ setView }
      />
      { view === views.allRecipes && (
        <Home 
          // setView={ setView }
          onViewChange={ onViewChange }
        /> // set view later
      )}
      { genre !== '' && recipe === '' && (
        <GenreHome 
          genre={ genre }
          onRecipeView={ onRecipeView }
        />
      )}
      { recipe !== '' && (
        <div className='pt-5'>
          <RecipeHeader
            recipe={ recipe }
          />
          <RecipeTab
            recipe={ recipe }
            genre={ genre }
          />
        </div>
      )}
      {/* <Home/> */}
      
        {/* <Container fluid>
          <TabHeader/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Container> */}

    </div>
  );
}

export default App;
