import { createReducer } from "@reduxjs/toolkit";
import { fetchPlanetsAction } from "../store/actions";

const reducer = createReducer([], {
  [fetchPlanetsAction.type]: (vehicles, action) => {
    vehicles.length = 0;
    action.payload.forEach((vehi) => {
      vehicles.push(vehi);
    });
  },
});

export default reducer;

// import { createReducer } from "@reduxjs/toolkit";
// import { fetchPlanetsAction } from "../store/actions";

// const initialState = [];

// const reducer = createReducer(initialState, (builder) => {
//   builder.addCase(fetchPlanetsAction.type, (vehicles, action) => {
//     // Return a new array based on the payload
//     vehicles.length = 0;
//     action.payload.forEach((veh) => {
//       vehicles.push(veh);
//     });
//   });
// });

// export default reducer;

// import { createReducer } from "@reduxjs/toolkit";
// import { fetchPlanetsAction } from "../store/actions";

// const initialState = [];

// const reducer = createReducer(initialState, (builder) => {
//   builder.addCase(fetchPlanetsAction.type, (state, action) => {
//     // Return a new array based on the payload
//     return action.payload;
//   });
// });

// export default reducer;
