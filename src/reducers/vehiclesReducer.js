import { createReducer } from "@reduxjs/toolkit";
import { fetchVehiclesAction } from "../store/actions";

const reducer = createReducer([], {
  [fetchVehiclesAction.type]: (vehicles, action) => {
    vehicles.length = 0;
    action.payload.forEach((vehi) => {
      vehicles.push(vehi);
    });
  },
});

export default reducer;
