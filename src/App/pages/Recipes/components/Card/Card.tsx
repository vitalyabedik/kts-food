import React from 'react';

import Button from '@components/Button';

import styles from './Card.module.scss';
import { RecipeCardTypes } from '../../../../../types';

const Card: React.FC<RecipeCardTypes> = ({ image, title, subtitle, content }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={image} alt="card-img" />

      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__content}>{subtitle}</p>

      <div className={styles.card__footer}>
        <div className={styles.card__subtitle}>{content}</div>
        <Button className={styles.card__button}>+</Button>
      </div>
    </div>
  );
};

export default Card;
