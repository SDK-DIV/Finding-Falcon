import { createReducer } from "@reduxjs/toolkit";
import { findFalconeAction, fetchTokenAction } from "../store/Action";

const reducer = createReducer(
  {},
  {
    [findFalconeAction.type]: (findFalcone, action) => {
      findFalcone.result = action.payload;
    },

    [fetchTokenAction.type]: (findFalcone, action) => {
      findFalcone.token = action.payload;
    },
  }
);

export default reducer;
