/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectFetchRecipeState } from "./store/selectors";
import { fetchRecipes } from "./store/reducers";
import { IState } from "@/types";

/**
 * Custom React hook that retrieves the current recipes state from the Redux store.
 * On mount, it dispatches an action to fetch recipes.
 *
 * @returns {IState} The current state of recipes from the Redux store.
 *
 * @remarks
 * - Uses `useDispatch` to dispatch the `fetchRecipes` action when the component mounts.
 * - Uses `useSelector` to select the recipes state via `selectFetchRecipeState`.
 * - Intended to be used within React components to access and trigger recipe fetching logic.
 */
export const useRecipes = (): IState => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectFetchRecipeState);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return recipes;
};
