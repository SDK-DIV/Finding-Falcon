import { createReducer } from "@reduxjs/toolkit";
import { fetchPlanetsAction } from "../store/Action";
import vehicles from "../store/vehicles";

const reducer = createReducer([], {
  [fetchPlanetsAction.type]: (vehicles, action) => {
    vehicles.length = 0;
    action.payload.forEach((vehi) => {
      vehicles.push(vehi);
    });
  },
});

export default reducer;
