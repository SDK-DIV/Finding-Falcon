import { createReducer } from "@reduxjs/toolkit";
import { fetchPlanetsAction } from "../store/Action";

const reducer = createReducer([], {
  [fetchPlanetsAction.type]: (planets, action) => {
    return action.payload;
  },
});

export default reducer;
