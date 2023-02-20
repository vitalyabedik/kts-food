import React from 'react';

import './App.css';

import DetailRecipe from './pages/DetailRecipe';
import Recipes from './pages/Recipes';

const App = () => {
  return (
    <div className="App">
      <Recipes />
      <DetailRecipe />
    </div>
  );
};

export default App;
