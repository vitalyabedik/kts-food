import React from 'react';

import Button from '@components/Button';
import ReturnIcon from '@components/ReturnIcon';
import likeImg from '@images/like.svg';
import menuPhoto from '@images/menuPhoto.png';
import timeIcon from '@images/time.svg';

import RecipeInfoItem from './components/RecipeInfoItem';
import styles from './DetailRecipe.module.scss';

const DetailRecipe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.detailRecipe}>
        <Button className={styles.button__return}>
          <ReturnIcon />
        </Button>
        <img className={styles.detailRecipe__img} src={menuPhoto} alt="menu__img" />
        <div className={styles['detailRecipe__wrapper-mask']}>
          <div className={styles['detailRecipe__wrapper-content']}>
            <div className={styles.detailRecipe__line}></div>
            <h1 className={styles.detailRecipe__title}>Chicken Burger Promo Pack</h1>
            <div className={styles['detailRecipe__recipe-info']}>
              <RecipeInfoItem img={timeIcon} value={4.8} infoType="minutes" />
              <RecipeInfoItem img={likeImg} value={4.8} infoType="Rating" />
            </div>
            <div className={styles.detailRecipe__recipe}>
              <div className={styles.detailRecipe__summary}>
                Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit
                excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis
                eu laborum. Chicken Tomatoa Lettuse Nulla occaecat velit laborum exercitation ullamco. Elit labore eu
                aute elit nostrud culpa velit excepteur deserunt sunt.
              </div>
              <div className={styles.detailRecipe__ingredients}>
                <ul>
                  <li>Chicken</li>
                  <li>Tomatoa</li>
                  <li>Lettuse</li>
                </ul>
              </div>
              <div className={styles.detailRecipe__instructions}>
                Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit
                excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis
                eu laborum. Chicken Tomatoa Lettuse Nulla occaecat velit laborum exercitation ullamco. Elit labore eu
                aute elit nostrud culpa velit excepteur deserunt sunt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipe;
