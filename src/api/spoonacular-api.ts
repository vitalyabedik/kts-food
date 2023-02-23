import axios from 'axios';

const APIKey = process.env.REACT_APP_API_KEY;
const instance = axios.create({
  baseURL: 'https://api.spoonacular.com',
});

const spoonacularApi = {
  getRecipes() {
    return instance.get(`/recipes/complexSearch?apiKey=${APIKey}&addRecipeNutrition=true`);
  },
  getDetailRecipe(id: number) {
    return instance.get(`/recipes/${id}/information?apiKey=${APIKey}`);
  },
};

export default spoonacularApi;
