export interface IRecipe {
  id: string;
  title: string;
  ingredients: IIngredient[];
  instructions: string;
}

export interface IRecipesState {
  recipes: IRecipe[];
  fetchRecipeLoading: boolean;
  fetchRecipeError?: string;
  addRecipeLoading: boolean;
  addRecipeError?: string;
  removeRecipeLoading: boolean;
  removeRecipeError?: string;
}

export interface IIngredient {
  id: number;
  name: string;
  quantity: string;
}
