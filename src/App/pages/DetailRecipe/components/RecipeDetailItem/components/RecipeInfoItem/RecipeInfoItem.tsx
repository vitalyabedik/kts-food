import React from 'react';

import styles from './RecipeInfoItem.module.scss';

export type RecipeInfoItemProps = {
  img: string;
  value: number;
  infoType: string;
};

const RecipeInfoItem: React.FC<RecipeInfoItemProps> = ({ img, value, infoType }) => {
  return (
    <div className={styles.recipeInfoItem}>
      <img className={styles.recipeInfoItem__img} src={img} alt="info_img" />
      <p className={styles.recipeInfoItem__text}>
        {value} {infoType}{' '}
      </p>
    </div>
  );
};

export default RecipeInfoItem;
