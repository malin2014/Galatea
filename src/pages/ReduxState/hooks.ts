/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectFetchRecipeState } from "./store/selectors";
import { fetchRecipes } from "./store/reducers";
import { IState } from "@/types";

/**
 * Custom React hook to access and fetch the recipes state from the Redux store.
 *
 * This hook dispatches the `fetchRecipes` action on mount to ensure the latest
 * recipes are loaded, and returns the current recipes state from the Redux store.
 *
 * @returns {IState} The current state of recipes from the Redux store.
 *
 * @example
 * const recipes = useRecipes();
 */
export const useRecipes = (): IState => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectFetchRecipeState);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return recipes;
};
