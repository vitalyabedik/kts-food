import React from 'react';

import Card from '@pages/Recipes/components/Card';

import styles from './Cards.module.scss';
import { RecipeCardTypes } from '../../../../../types';

type CardsProps = {
  items: RecipeCardTypes[] | null;
};

const Cards: React.FC<CardsProps> = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards__wrapper}>
        {items?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
