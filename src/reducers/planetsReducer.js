// import { createReducer } from "@reduxjs/toolkit";
// import { fetchPlanetsAction } from "../store/Action";

// const reducer = createReducer([], {
//   [fetchPlanetsAction.type]: (planets, action) => {
//     return action.payload;
//   },
// });

// export default reducer;
import { createReducer } from "@reduxjs/toolkit";
import { fetchPlanetsAction } from "../store/actions";

const initialState = [];

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPlanetsAction, (state, action) => {
    return action.payload;
  });
});

export default reducer;
