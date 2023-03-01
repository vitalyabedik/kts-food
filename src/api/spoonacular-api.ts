import { API_ENDPOINTS } from '@configs/api';
import axios from 'axios';

const APIKey = process.env.REACT_APP_API_KEY;
const instance = axios.create({
  baseURL: 'https://api.spoonacular.com',
});

const spoonacularApi = {
  getRecipes() {
    return instance.get(`${API_ENDPOINTS.RECIPE}?apiKey=${APIKey}&${API_ENDPOINTS.ADDNUTRITION}`);
  },
  getMoreRecipes(number: number, offset: number) {
    return instance.get(
      `${API_ENDPOINTS.RECIPE}?apiKey=${APIKey}&${API_ENDPOINTS.ADDNUTRITION}&number=${number}&offset=${offset}`
    );
  },
  getDetailRecipe(id: string) {
    return instance.get(`${API_ENDPOINTS.RECIPES(id)}?apiKey=${APIKey}`);
  },
};

export default spoonacularApi;
