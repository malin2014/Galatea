/* eslint-disable @typescript-eslint/no-unused-vars */
import { RecipesState, Recipe } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * The initial state for the recipes reducer.
 *
 * @property recipes - An array holding the list of recipe objects.
 * @property loading - A boolean indicating whether recipes are currently being loaded.
 * @property error - An optional error message if loading fails.
 */
const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: undefined,
};

/**
 * A Redux slice for managing recipe-related state.
 *
 * This slice handles the following actions:
 * - Fetching recipes (`getRecipes`, `getRecipesSuccess`, `getRecipesFailure`)
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
 * dispatch(recipeSlice.actions.getRecipes());
 */
export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes: (state) => ({
      ...state,
      loading: true,
      error: undefined,
    }),
    getRecipesSuccess: (state, action: PayloadAction<Recipe[]>) => ({
      ...state,
      recipes: action.payload,
      loading: false,
    }),
    getRecipesFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    addRecipe: (state, _action: PayloadAction<Recipe>) => ({
      ...state,
      loading: true,
      error: undefined,
    }),
    addRecipeSuccess: (state, action: PayloadAction<Recipe>) => ({
      ...state,
      recipes: [...state.recipes, action.payload],
      loading: false,
    }),
    addRecipeFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    removeRecipe: (state, _action: PayloadAction<string>) => ({
      ...state,
      loading: true,
      error: undefined,
    }),
    removeRecipeSuccess: (state, action: PayloadAction<string>) => ({
      ...state,
      recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      loading: false,
    }),
    removeRecipeFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
  addRecipe,
  addRecipeSuccess,
  addRecipeFailure,
  removeRecipe,
  removeRecipeSuccess,
  removeRecipeFailure,
} = recipeSlice.actions;

export default recipeSlice.reducer;
