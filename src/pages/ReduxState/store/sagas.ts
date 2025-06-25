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
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
} from "./reducers";

/**
 * Saga to fetch recipes from the API.
 *
 * This generator function attempts to retrieve a list of recipes by calling the `apiCall` function.
 * On success, it dispatches the `getRecipesSuccess` action with the fetched recipes.
 * On failure, it dispatches the `getRecipesFailure` action with an error message.
 *
 * @yields {PutEffect | CallEffect} Redux-Saga effects for API call and dispatching actions.
 */
function* getRecipesSaga() {
  try {
    const recipes: IRecipe[] = yield call(fetchAPI, API_URL);
    yield put(getRecipesSuccess(recipes));
  } catch {
    yield put(getRecipesFailure("Failed to fetch recipe"));
  }
}

/**
 * Saga to handle adding a new recipe.
 *
 * This generator function listens for actions to add a recipe, performs an API call to add the recipe,
 * and dispatches either a success or failure action based on the result.
 *
 * @param action - The dispatched action containing the recipe to add in its payload.
 * @yields {Recipe} The newly added recipe on success.
 * @yields {void} Dispatches a failure action with an error message on failure.
 */
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

/**
 * Saga to handle removing a recipe.
 *
 * This generator function listens for actions to remove a recipe, performs an API call to remove the recipe,
 * and dispatches either a success or failure action based on the result.
 *
 * @param action - The dispatched action containing the recipe id to remove in its payload.
 * @yields {string} The id of the removed recipe on success.
 * @yields {void} Dispatches a failure action with an error message on failure.
 */
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

export function* recipeSagas() {
  yield takeLatest(getRecipes.type, getRecipesSaga);
  yield takeLatest(addRecipe.type, addRecipeSaga);
  yield takeLatest(removeRecipe.type, removeRecipeSaga);
}
