import React from 'react';

import Button from '@components/Button';

import styles from './Card.module.scss';
import { RecipeCardTypes } from '../../../../../types/RecipeCardTypes';

type CardProps = {
  recipe: RecipeCardTypes;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

const Card: React.FC<CardProps> = ({ recipe, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.card__image} src={recipe.image} alt="card-img" />

      <h2 className={styles.card__title}>{recipe.title}</h2>
      <p className={styles.card__content}>{recipe.subtitle}</p>

      <div className={styles.card__footer}>
        <div className={styles.card__subtitle}>{recipe.content}</div>
        <Button className={styles.card__button}>+</Button>
      </div>
    </div>
  );
};

export default Card;
