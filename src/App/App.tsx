import React from 'react';

import Loader from '@components/Loader';
import DetailRecipe from '@pages/DetailRecipe';
import Recipes from '@pages/Recipes';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Recipes />
      <DetailRecipe />
      <Loader />
    </div>
  );
};

export default App;
