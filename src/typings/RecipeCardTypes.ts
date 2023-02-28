export type RecipeCardTypes = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  content?: string;
  likes: number;
  types: string;
  readyInMinutes: number;
};
