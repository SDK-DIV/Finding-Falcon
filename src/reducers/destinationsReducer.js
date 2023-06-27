import { createReducer } from "@reduxjs/toolkit";
import {
  getInitialDestinationsAction,
  addDestinationsAction,
  vehicleSelectedAction,
} from "../store/Action";
import destinations from "../store/destinations";

const reducer = createReducer(
  {},
  {
    [getInitialDestinationsAction.type]: (destinations, action) => {
      action.payload.forEach((dest) => {
        destinations[dest] = {};
      });
    },
    [addDestinationsAction.type]: (destinations, action) => {
      destinations[action.payload.destinations] = {
        selectedPlanet: action.payload.value,
        showVehicle: true,
      };
    },
    [vehicleSelectedAction.type]: (destinations, action) => {
      const { timetaken, selectedVehicle, destination } = action.payload;
      destinations[destination].selectedVehicle = selectedVehicle;
      destinations[destination].timetaken = timetaken;
    },
  }
);

export default reducer;
