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
