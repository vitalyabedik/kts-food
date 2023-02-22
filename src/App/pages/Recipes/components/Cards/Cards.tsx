import React from 'react';

import Card from '@pages/Recipes/components/Card';

import styles from './Cards.module.scss';

const Cards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards__wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
