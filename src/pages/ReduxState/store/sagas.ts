import { put, takeLatest, call } from "redux-saga/effects";
import { IRecipe } from "./types";
import { API_URL, fetchAPI } from "@/utils";
import {
  addRecipe,
  addRecipeFailure,
  addRecipeSuccess,
  removeRecipe,
  removeRecipeFailure,
  removeRecipeSuccess,
  fetchRecipes,
  fetchRecipesSuccess,
  fetchRecipesFailure,
} from "./reducers";

/**
 * Saga to fetch recipes from the API.
 *
 * This generator function attempts to retrieve a list of recipes by calling the `fetchAPI` function
 * with the specified `API_URL`. On success, it dispatches the `fetchRecipesSuccess` action with the
 * retrieved recipes. If an error occurs during the fetch operation, it dispatches the
 * `fetchRecipesFailure` action with an error message.
 *
 * @yields {PutEffect | CallEffect} Yields Redux-Saga effects for API call and dispatching actions.
 */
function* getRecipesSaga() {
  try {
    const recipes: IRecipe[] = yield call(fetchAPI, API_URL);
    yield put(fetchRecipesSuccess(recipes));
  } catch {
    yield put(fetchRecipesFailure("Failed to fetch recipe"));
  }
}

function* addRecipeSaga(action: { type: string; payload: IRecipe }): Generator {
  try {
    const newRecipe: IRecipe = yield call(fetchAPI, API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    });
    yield put(addRecipeSuccess(newRecipe));
  } catch {
    yield put(addRecipeFailure("Failed to add recipe"));
  }
}

function* removeRecipeSaga(action: {
  type: string;
  payload: string;
}): Generator {
  try {
    yield fetchAPI(`${API_URL}/${action.payload}`, { method: "DELETE" });
    yield put(removeRecipeSuccess(action.payload));
  } catch {
    yield put(removeRecipeFailure("Failed to remove recipe"));
  }
}

/**
 * Root saga for recipe-related actions.
 *
 * Listens for the latest occurrences of specific recipe actions and delegates
 * them to their respective saga handlers:
 * - `fetchRecipes.type`: Triggers `getRecipesSaga` to handle fetching recipes.
 * - `addRecipe.type`: Triggers `addRecipeSaga` to handle adding a new recipe.
 * - `removeRecipe.type`: Triggers `removeRecipeSaga` to handle removing a recipe.
 *
 * Uses `takeLatest` to ensure only the latest action of each type is processed,
 * cancelling any ongoing saga for the same action type if a new one is dispatched.
 */
export function* recipeSagas() {
  yield takeLatest(fetchRecipes.type, getRecipesSaga);
  yield takeLatest(addRecipe.type, addRecipeSaga);
  yield takeLatest(removeRecipe.type, removeRecipeSaga);
}
