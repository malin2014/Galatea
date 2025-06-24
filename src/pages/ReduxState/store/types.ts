export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
}

export interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error?: string;
}
