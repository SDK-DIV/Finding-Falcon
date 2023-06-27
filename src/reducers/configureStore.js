import { ConfigureStore } from "@reduxjs/toolkit";
import reducer from "./store/reducer/reducer";

import { getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/api";

export default function () {
  return ConfigureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
