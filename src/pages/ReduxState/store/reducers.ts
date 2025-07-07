/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRecipesState, IRecipe } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
 * A Redux slice for managing recipe-related state and actions.
 *
 * This slice handles the following actions:
 * - Fetching recipes (with loading and error states)
 * - Adding a new recipe (with loading and error states)
 * - Removing a recipe (with loading and error states)
 *
 * State fields managed include:
 * - `recipes`: The list of recipe objects.
 * - `fetchRecipeLoading`, `addRecipeLoading`, `removeRecipeLoading`: Booleans indicating loading states for each operation.
 * - `fetchRecipeError`, `addRecipeError`, `removeRecipeError`: Error messages for each operation.
 *
 * Actions:
 * - `fetchRecipes`: Initiates fetching recipes.
 * - `fetchRecipesSuccess`: Sets the fetched recipes on success.
 * - `fetchRecipesFailure`: Sets an error message on fetch failure.
 * - `addRecipe`: Initiates adding a new recipe.
 * - `addRecipeSuccess`: Adds the new recipe to the list on success.
 * - `addRecipeFailure`: Sets an error message on add failure.
 * - `removeRecipe`: Initiates removing a recipe.
 * - `removeRecipeSuccess`: Removes the recipe from the list on success.
 * - `removeRecipeFailure`: Sets an error message on remove failure.
 *
 * @see {@link https://redux-toolkit.js.org/api/createSlice|Redux Toolkit createSlice}
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
