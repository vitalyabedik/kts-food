import React from 'react';

import styles from './Cards.module.scss';
import Card from '../Card';

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card />;
    </div>
  );
};

export default Cards;
