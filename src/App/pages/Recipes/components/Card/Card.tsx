import React from 'react';

import Button from '@components/Button';
import burger from '@images/burger.png';

import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={burger} alt="card-img" />
      <div className={styles.card__description}>
        <h2 className={styles.card__title}>Chicken burger</h2>
        <p className={styles.card__content}>100 gr chicken + tomato + cheese Lettuce</p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__subtitle}>300 kcal</div>
        <Button className={styles.card__button}>+</Button>
      </div>
    </div>
  );
};

export default Card;
