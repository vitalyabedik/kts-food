import React from 'react';

import { useRecipesContext } from '@App/App';
import Card from '@pages/Recipes/components/Card';
import { useNavigate } from 'react-router-dom';

import styles from './Cards.module.scss';

const Cards: React.FC = () => {
  let navigate = useNavigate();
  const { recipes, error } = useRecipesContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.cards__wrapper}>
        {error && <div>{error}</div>}
        {recipes &&
          recipes.map((recipe) => (
            <div key={recipe.id} className={styles.cards__item}>
              <Card recipe={recipe} onClick={() => navigate(`${recipe.id}`)} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
