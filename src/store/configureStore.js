import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";
import apiMiddleware from "./apiMiddleware"; // Assuming you've renamed the middleware file

export default function configureAppStore() {
  const customizedMiddleware = getDefaultMiddleware().concat(apiMiddleware);

  const store = configureStore({
    reducer,
    middleware: customizedMiddleware,
  });

  return store;
}
