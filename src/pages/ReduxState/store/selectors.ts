import { IState } from "@/types";
import { RootState } from "./config";
import { IRecipe } from "./types";

export const selectRecipes = (state: RootState): IRecipe[] =>
  state.recipes.recipes;

export const selectFetchRecipeState = (state: RootState): IState => {
  const data = state.recipes.recipes;
  const isLoading = state.recipes.fetchRecipeLoading;
  const error = state.recipes.fetchRecipeError;
  return { data, isLoading, error };
};

export const selectAddRecipeState = (state: RootState): IState => {
  const isLoading = state.recipes.addRecipeLoading;
  const error = state.recipes.addRecipeError;
  return { isLoading, error };
};

export const selectRemoveRecipeState = (state: RootState): IState => {
  const isLoading = state.recipes.removeRecipeLoading;
  const error = state.recipes.removeRecipeError;
  return { isLoading, error };
};
