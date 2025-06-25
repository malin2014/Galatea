export interface IRecipe {
  id: string;
  title: string;
  ingredients: IIngredient[];
  instructions: string;
}

export interface IRecipesState {
  recipes: IRecipe[];
  loading: boolean;
  error?: string;
}

export interface IIngredient {
  id: number;
  name: string;
  quantity: string;
}
