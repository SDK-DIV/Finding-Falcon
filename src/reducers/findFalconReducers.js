import { createReducer } from "@reduxjs/toolkit";
import { findFalconAction, fetchTokenAction } from "../action";

const reducer = createReducer(
  {},
  {
    [findFalconAction.type]: (findFalcon, action) => {
      findFalcon.result = action.payload;
    },

    [fetchTokenAction.type]: (findFalcon, action) => {
      findFalcon.token = action.payload;
    },
  }
);

export default reducer;
