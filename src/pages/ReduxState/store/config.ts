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

/**
 * Configures and exports the Redux store instance.
 *
 * - Uses the provided `rootReducer` to manage the state.
 * - Disables the default Redux Thunk middleware.
 * - Adds custom `sagaMiddleware` for handling side effects with Redux Saga.
 *
 * @remarks
 * This store setup is intended for applications that use Redux Saga instead of Redux Thunk for asynchronous actions.
 *
 * @see {@link https://redux-toolkit.js.org/api/configureStore | Redux Toolkit configureStore}
 * @see {@link https://redux-saga.js.org/ | Redux Saga Documentation}
 */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
