import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";

import { getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middlewareApi";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
