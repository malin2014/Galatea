import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import recipesReducer from "./reducers";
import { recipeSagas } from "./sagas";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

function* rootSaga() {
  yield all([recipeSagas()]);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
