import React from 'react';

import Loader from '@components/Loader';
import DetailRecipe from '@pages/DetailRecipe';
import Recipes from '@pages/Recipes';
import { transformRecipeApiData } from '@utils/transformRecipeApiData';

import styles from './App.module.scss';
import spoonacularApi from '../api/spoonacular-api';
import { RecipeCardTypes } from '../types';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [recipes, setRecipes] = React.useState<RecipeCardTypes[] | null>(null);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const { data } = await spoonacularApi.getRecipes();
      setRecipes(transformRecipeApiData(data.results));
    };

    fetchData();
  }, []);

  // eslint-disable-next-line no-console
  console.log(recipes);

  return (
    <div className={styles.app}>
      <Recipes recipes={recipes} />
      {/* <DetailRecipe /> */}
    </div>
  );
};

export default App;
