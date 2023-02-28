import React from 'react';

import ReturnButton from '@components/ReturnButton';
import likeImg from '@images/like.svg';
import timeIcon from '@images/time.svg';
import { useParams } from 'react-router-dom';

import RecipeInfoItem from './components/RecipeInfoItem';
import styles from './DetailRecipe.module.scss';
import spoonacularApi from '../../../api/spoonacular-api';
import { RecipeDetailItemTypes } from '../../../typings/RecipeDetailItemTypes';

const DetailRecipe = () => {
  const { id } = useParams();

  const [recipeDetail, setRecipeDetail] = React.useState<RecipeDetailItemTypes | null>(null);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const { data } = await spoonacularApi.getDetailRecipe(id!);

      setRecipeDetail({
        id: data.id,
        image: data.image,
        title: data.title,
        likes: data.aggregateLikes,
        readyInMinutes: data.readyInMinutes,
        ingredients: data.extendedIngredients,
        summary: data.summary,
        instructions: data.instructions,
        dishTypes: data.dishTypes,
      });
    };

    fetchData();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.detailRecipe}>
        {recipeDetail && (
          <>
            <ReturnButton />

            <img className={styles.detailRecipe__img} src={recipeDetail.image} alt="menu__img" />
            <div className={styles['detailRecipe__wrapper-mask']}>
              <div className={styles['detailRecipe__wrapper-content']}>
                <div className={styles.detailRecipe__line}></div>
                <h1 className={styles.detailRecipe__title}>{recipeDetail.title}</h1>
                <div className={styles['detailRecipe__recipe-info']}>
                  <RecipeInfoItem img={timeIcon} value={recipeDetail.readyInMinutes} infoType="minutes" />
                  <RecipeInfoItem img={likeImg} value={recipeDetail.likes} infoType="Rating" />
                </div>
                <div className={styles.detailRecipe__recipe}>
                  <div
                    className={styles.detailRecipe__summary}
                    dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}
                  ></div>
                  <div className={styles.detailRecipe__ingredients}>
                    <ul>
                      {recipeDetail.ingredients.map((ingredient) => (
                        <li key={`${ingredient}${recipeDetail.title}`}>{ingredient.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={styles.detailRecipe__instructions}
                    dangerouslySetInnerHTML={{ __html: recipeDetail.instructions }}
                  ></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailRecipe;
