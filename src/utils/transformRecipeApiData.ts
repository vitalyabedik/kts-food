import { RecipeItemApi, RecipeCardTypes, Ingredient } from '../typings';

export const transformRecipeApiData = (data: RecipeItemApi[]): RecipeCardTypes[] => {
  return data.map((item: RecipeItemApi) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    types: item.dishTypes.join(', '),
    readyInMinutes: item.readyInMinutes,
    subtitle: item.nutrition.ingredients
      .reduce((acc: string, item: Ingredient) => acc + ` + ${item.name}`, '')
      .slice(2),
    content: `${Math.round(item.nutrition.nutrients[0].amount as number)} ${item.nutrition.nutrients[0].unit}`,
    likes: item.aggregateLikes,
  }));
};
