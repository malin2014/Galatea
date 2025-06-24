"use client";
import { Provider } from "react-redux";
import { store } from "../../pages/ReduxState/store/config";
import { JSX } from "react";

export type IProvider = { children: JSX.Element };

/**
 * Provides the Redux store context to its child components.
 *
 * @param children - The React node(s) that will have access to the Redux store.
 * @returns The children wrapped with the Redux `<Provider>`.
 */
export const StateProvider = ({ children }: IProvider) => {
  return <Provider store={store}>{children}</Provider>;
};
