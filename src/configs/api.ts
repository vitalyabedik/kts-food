export const API_ENDPOINTS = (id: number) => {
  return {
    RECIPE: '/recipes/complexSearch&addRecipeNutrition=true',
    RECIPES: `/recipes/${id}/information`,
  };
};
