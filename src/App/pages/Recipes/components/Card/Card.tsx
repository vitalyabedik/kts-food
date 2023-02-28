import React from 'react';

import Button from '@components/Button';
import cn from 'classnames';

import styles from './Card.module.scss';
import { RecipeCardTypes } from '../../../../../typings/RecipeCardTypes';

type CardProps = {
  recipe: RecipeCardTypes;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
  className: string;
};

const Card: React.FC<CardProps> = ({ recipe, onClick, className }) => {
  const cardClasses = cn(styles.card, className);

  return (
    <div className={cardClasses} onClick={onClick}>
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
