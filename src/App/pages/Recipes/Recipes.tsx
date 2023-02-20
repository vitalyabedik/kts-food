import React from 'react';

import Cards from './components/Cards';
import styles from './Recipes.module.scss';

const Recipes = () => {
  return (
    <div className={styles.recipes}>
      <Cards />
    </div>
  );
};

export default Recipes;
