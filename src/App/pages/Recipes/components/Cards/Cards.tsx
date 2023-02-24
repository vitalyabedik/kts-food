import React from 'react';

import Card from '@pages/Recipes/components/Card';

import styles from './Cards.module.scss';
import { RecipeCardTypes } from '../../../../../types';

type CardsProps = {
  recipes: RecipeCardTypes[] | null;
};

const Cards: React.FC<CardsProps> = ({ recipes }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards__wrapper}>
        {recipes?.map((recipe) => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
