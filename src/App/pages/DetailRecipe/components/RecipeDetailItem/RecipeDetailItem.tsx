import React from 'react';

import likeImg from '@images/like.svg';
import timeIcon from '@images/time.svg';
import { extendedIngredients } from '@typings/RecipeDetailItemTypes';

import RecipeInfoItem from './components/RecipeInfoItem';
import styles from './RecipeDetailItem.module.scss';

export type RecipeDetailItemProps = {
  title: string;
  readyInMinutes: number;
  likes: number;
  summary: string;
  ingredients: Array<extendedIngredients>;
  instructions: string;
};

const RecipeDetailItem: React.FC<RecipeDetailItemProps> = ({
  title,
  readyInMinutes,
  likes,
  summary,
  ingredients,
  instructions,
}) => {
  return (
    <>
      <h1 className={styles.recipeDetailItem__title}>{title}</h1>
      <div className={styles['recipeDetailItem__recipe-info']}>
        <RecipeInfoItem img={timeIcon} value={readyInMinutes} infoType="minutes" />
        <RecipeInfoItem img={likeImg} value={likes} infoType="Rating" />
      </div>
      <div className={styles.recipeDetailItem__recipe}>
        <div className={styles.recipeDetailItem__summary} dangerouslySetInnerHTML={{ __html: summary }}></div>
        <div className={styles.recipeDetailItem__ingredients}>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={`${ingredient.id + ingredient.name}`}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.recipeDetailItem__instructions} dangerouslySetInnerHTML={{ __html: instructions }}></div>
      </div>
    </>
  );
};

export default RecipeDetailItem;
