import { createReducer } from "@reduxjs/toolkit";
import { resetErrorAction } from "../store/actions";

const reducer = createReducer(
  {},
  {
    onError: (error, action) => ({
      error: action.error,
    }),
    [resetErrorAction.type]: (error, action) => ({}),
  }
);

export default reducer;

// import { createReducer } from "@reduxjs/toolkit";
// import { resetErrorAction } from "../store/actions";

// const initialState = {};

// const reducer = createReducer(initialState, (builder) => {
//   builder.addDefaultCase((state, action) => {
//     if (action.type === resetErrorAction.type) {
//       return {};
//     } else if (action.error) {
//       return { error: action.error };
//     }
//   });
// });

// export default reducer;
