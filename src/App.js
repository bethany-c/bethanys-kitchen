import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/common/Header';
import RecipeTab from './components/recipes/RecipeTab';
import RecipeHeader from './components/recipes/RecipeHeader';
import Home from './components/recipes/Home';
import GenreHome from './components/recipes/GenreHome';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

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

  const onLinkChange = (clickedView) => {
    setRecipe('');
    setGenre('');
    setView(clickedView);
  }

  return (
    <div className="App">
      <Header 
        setView={ setView }
      />
      { view === views.allRecipes && (
        <Home 
          onViewChange={ onViewChange }
        />
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
            genre={ genre }
          />
          <RecipeTab
            recipe={ recipe }
            genre={ genre }
          />
        </div>
      )}
      { recipe === '' && genre === '' && view === 'about' && (
        <div className='pt-5'>
          <AboutMe />
        </div>
      )}
            { recipe === '' && genre === '' && view === 'contact' && (
        <div className='pt-5'>
          <ContactMe />
        </div>
      )}
    </div>
  );
}

export default App;
