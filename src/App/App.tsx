import React from 'react';

import { ROUTES } from '@configs/routes';
import DetailRecipe from '@pages/DetailRecipe';
import Recipes from '@pages/Recipes';
import { transformRecipeApiData } from '@utils/transformRecipeApiData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import spoonacularApi from '../api/spoonacular-api';
import { RecipeCardTypes } from '../typings/RecipeCardTypes';

type RecipesContextType = {
  recipes: RecipeCardTypes[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchMoreRecipes: (offset: number) => Promise<void>;
};

const RecipesContext = React.createContext<RecipesContextType>({
  recipes: [],
  isLoading: false,
  error: null,
  hasMore: true,
  fetchMoreRecipes: async () => {},
});

export const useRecipesContext = () => React.useContext(RecipesContext);
const Provider = RecipesContext.Provider;

const App = () => {
  const number = 6;
  const [recipes, setRecipes] = React.useState<RecipeCardTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchMoreRecipes = async (offset: number) => {
    try {
      if (offset === 0) {
        setIsLoading(true);
      }
      const { data } = await spoonacularApi.getMoreRecipes(number, offset);
      setIsLoading(false);
      const totalResult = data.totalResults;
      if (recipes.length >= totalResult) {
        setHasMore(false);
        return;
      }
      if (offset > 0) {
        setRecipes((prevState) => [...prevState, ...transformRecipeApiData(data.results)]);
      } else {
        setRecipes(transformRecipeApiData(data.results));
      }
    } catch (error) {
      setError('Ошибка при отправке запроса!!!');
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    const fetchData = async (): Promise<void> => {
      try {
        const { data } = await spoonacularApi.getRecipes();
        setRecipes(transformRecipeApiData(data.results));
      } catch (error) {
        setError('Ошибка при отправке запроса!!!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Provider value={{ recipes, isLoading, error, hasMore, fetchMoreRecipes }}>
          <Routes>
            <Route path={ROUTES.MAIN} element={<Recipes />} />
            <Route path={ROUTES.DETAILRECIPE} element={<DetailRecipe />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
