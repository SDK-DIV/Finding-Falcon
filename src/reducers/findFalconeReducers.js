import { createReducer } from "@reduxjs/toolkit";
import { findFalconeAction, fetchTokenAction } from "../store/actions";

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

// import { createReducer } from "@reduxjs/toolkit";
// import { findFalconeAction, fetchTokenAction } from "../store/actions";

// const initialState = {
//   result: null,
//   token: null,
// };

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(findFalconeAction.type, (state, action) => {
//       state.result = action.payload;
//     })
//     .addCase(fetchTokenAction.type, (state, action) => {
//       state.token = action.payload;
//     });
// });

// export default reducer;
