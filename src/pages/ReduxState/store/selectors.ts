import { IState } from "@/types";
import { RootState } from "./config";
import { IRecipe } from "./types";

/**
 * Selector to retrieve the list of recipes from the Redux state.
 *
 * @param state - The root state of the Redux store.
 * @returns An array of `Recipe` objects from the state.
 */
export const selectRecipes = (state: RootState): IRecipe[] =>
  state.recipes.recipes;

/**
 * Selector to retrieve the fetch recipe state from the Redux store.
 *
 * @param state - The root state of the Redux store.
 * @returns An object containing the recipe data, loading status, and any fetch error.
 */
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
