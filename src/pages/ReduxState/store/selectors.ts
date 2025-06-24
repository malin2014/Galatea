import { RootState } from "./config";
import { Recipe } from "./types";

/**
 * Selector to retrieve the list of recipes from the Redux state.
 *
 * @param state - The root state of the Redux store.
 * @returns An array of `Recipe` objects from the state.
 */
export const selectRecipes = (state: RootState): Recipe[] =>
  state.recipes.recipes;
