/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { RootState } from "./config";
import { Recipe } from "./types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./reducers";

/**
 * Selector to retrieve the list of recipes from the Redux state.
 *
 * @param state - The root state of the Redux store.
 * @returns An array of `Recipe` objects from the state.
 */
export const selectRecipes = (state: RootState): Recipe[] =>
  state.recipes.recipes;

/**
 * Custom React hook to retrieve the list of recipes from the Redux store.
 *
 * This hook dispatches the `getRecipes` action on mount to fetch recipes,
 * and returns the current list of recipes from the Redux state.
 *
 * @returns {Recipe[]} The array of recipes from the Redux store.
 *
 * @remarks
 * - Relies on the `selectRecipes` selector to access recipes from the state.
 * - Automatically triggers a fetch for recipes when the component mounts.
 */
export const useRecipes = (): Recipe[] => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return recipes;
};
