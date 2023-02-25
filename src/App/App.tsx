import React from 'react';

import { ROUTES } from '@configs/routes';
import DetailRecipe from '@pages/DetailRecipe';
import Recipes from '@pages/Recipes';
import { transformRecipeApiData } from '@utils/transformRecipeApiData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import spoonacularApi from '../api/spoonacular-api';
import { RecipeCardTypes } from '../types';

type RecipesContextType = {
  recipes: RecipeCardTypes[];
  isLoading: boolean;
  error: string | null;
};
const RecipesContext = React.createContext<RecipesContextType>({
  recipes: [],
  isLoading: false,
  error: null,
});

export const useRecipesContext = () => React.useContext(RecipesContext);
const Provider = RecipesContext.Provider;

const App = () => {
  const [recipes, setRecipes] = React.useState<RecipeCardTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  React.useEffect(() => {
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
    <BrowserRouter>
      <div className={styles.app}>
        <Provider value={{ recipes, isLoading, error }}>
          <Routes>
            <Route path={ROUTES.MAIN} element={<Recipes />} />
            <Route path={ROUTES.DETAILRECIPE} element={<DetailRecipe />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
