/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRecipesState, IRecipe } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Initial state for the recipes slice.
 *
 * This state includes:
 * - `recipes`: An array of recipe objects.
 * - `fetchRecipeLoading`: A boolean indicating if a fetch operation is in progress.
 * - `fetchRecipeError`: An optional string for any error that occurs during fetching.
 * - `addRecipeLoading`: A boolean indicating if an add operation is in progress.
 * - `addRecipeError`: An optional string for any error that occurs during adding a recipe.
 * - `removeRecipeLoading`: A boolean indicating if a remove operation is in progress.
 * - `removeRecipeError`: An optional string for any error that occurs during removing a recipe.
 */
const initialState: IRecipesState = {
  recipes: [],
  fetchRecipeLoading: false,
  fetchRecipeError: undefined,
  addRecipeLoading: false,
  addRecipeError: undefined,
  removeRecipeLoading: false,
  removeRecipeError: undefined,
};

/**
 * A Redux slice for managing recipe-related state.
 *
 * This slice handles the following actions:
 * - Fetching recipes (`fetchRecipes`, `fetchRecipesSuccess`, `fetchRecipesFailure`)
 * - Adding a new recipe (`addRecipe`, `addRecipeSuccess`, `addRecipeFailure`)
 * - Removing a recipe (`removeRecipe`, `removeRecipeSuccess`, `removeRecipeFailure`)
 *
 * Each action updates the state accordingly, managing loading and error states.
 *
 * @remarks
 * Uses Redux Toolkit's `createSlice` for concise reducer and action creation.
 *
 * @example
 * // Dispatch an action to fetch recipes
 * dispatch(recipeSlice.actions.fetchRecipes());
 */
export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    fetchRecipes: (state) => ({
      ...state,
      fetchRecipeLoading: true,
      fetchRecipeError: undefined,
    }),
    fetchRecipesSuccess: (state, action: PayloadAction<IRecipe[]>) => ({
      ...state,
      recipes: action.payload,
      fetchRecipeLoading: false,
    }),
    fetchRecipesFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      fetchRecipeError: action.payload,
      fetchRecipeLoading: false,
    }),
    addRecipe: (state, _action: PayloadAction<IRecipe>) => ({
      ...state,
      addRecipeLoading: true,
      addRecipeError: undefined,
    }),
    addRecipeSuccess: (state, action: PayloadAction<IRecipe>) => ({
      ...state,
      recipes: [...state.recipes, action.payload],
      addRecipeLoading: false,
    }),
    addRecipeFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      addRecipeLoading: false,
      addRecipeError: action.payload,
    }),
    removeRecipe: (state, _action: PayloadAction<string>) => ({
      ...state,
      removeRecipeLoading: true,
      removeRecipeError: undefined,
    }),
    removeRecipeSuccess: (state, action: PayloadAction<string>) => ({
      ...state,
      recipes: state.recipes.filter(
        (recipe: IRecipe) => recipe.id !== action.payload
      ),
      removeRecipeLoading: false,
    }),
    removeRecipeFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      removeRecipeLoading: false,
      removeRecipeError: action.payload,
    }),
  },
});

export const {
  fetchRecipes,
  fetchRecipesSuccess,
  fetchRecipesFailure,
  addRecipe,
  addRecipeSuccess,
  addRecipeFailure,
  removeRecipe,
  removeRecipeSuccess,
  removeRecipeFailure,
} = recipeSlice.actions;

export default recipeSlice.reducer;
