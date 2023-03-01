import React from 'react';

import LineHorizontal from '@components/LineHorizontal';
import Loader from '@components/Loader';
import { useParams } from 'react-router-dom';

import HeaderPhoto from './components/HeaderPhoto';
import RecipeDetailItem from './components/RecipeDetailItem';
import styles from './DetailRecipe.module.scss';
import spoonacularApi from '../../../api/spoonacular-api';
import { RecipeDetailItemTypes } from '../../../typings/RecipeDetailItemTypes';

const DetailRecipe: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);
  const { id } = useParams();

  const [recipeDetail, setRecipeDetail] = React.useState<RecipeDetailItemTypes | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    const fetchData = async (): Promise<void> => {
      try {
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
      } catch (error) {
        setError('Ошибка при отправке запроса!!!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.detailRecipe}>
        {!isLoading && recipeDetail !== null ? (
          <>
            <HeaderPhoto image={recipeDetail.image} />
            <div className={styles['detailRecipe__wrapper-mask']}>
              <div className={styles['detailRecipe__wrapper-content']}>
                <LineHorizontal />
                <RecipeDetailItem
                  title={recipeDetail.title}
                  readyInMinutes={recipeDetail.readyInMinutes}
                  likes={recipeDetail.likes}
                  summary={recipeDetail.summary}
                  ingredients={recipeDetail.ingredients}
                  instructions={recipeDetail.instructions}
                />
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default DetailRecipe;
