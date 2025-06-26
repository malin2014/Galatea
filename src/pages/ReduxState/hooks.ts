/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectFetchRecipeState } from "./store/selectors";
import { fetchRecipes } from "./store/reducers";
import { IState } from "@/types";

export const useRecipes = (): IState => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectFetchRecipeState);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return recipes;
};
