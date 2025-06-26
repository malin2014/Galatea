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

export function* recipeSagas() {
  yield takeLatest(fetchRecipes.type, getRecipesSaga);
  yield takeLatest(addRecipe.type, addRecipeSaga);
  yield takeLatest(removeRecipe.type, removeRecipeSaga);
}
