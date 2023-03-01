export type RecipeDetailItemTypes = {
  id: number;
  image: string;
  title: string;
  readyInMinutes: number;
  ingredients: Array<extendedIngredients>;
  instructions: string;
  summary: string;
  likes: number;
  dishTypes: Array<string>;
};

export type extendedIngredients = {
  id: number;
  aisle: string;
  image: string;
  consistency: 'SOLID' | 'LIQUID';
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
};
