import { createReducer } from "@reduxjs/toolkit";
import {
  getInitialDestinationsAction,
  addDestinationsAction,
  vehicleSelectedAction,
} from "../store/actions";

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

// import { createReducer } from "@reduxjs/toolkit";
// import {
//   getInitialDestinationsAction,
//   addDestinationsAction,
//   vehicleSelectedAction,
// } from "../store/actions";

// const initialState = {};

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(getInitialDestinationsAction.type, (state, action) => {
//       action.payload.forEach((dest) => {
//         state[dest] = {};
//       });
//     })
//     .addCase(addDestinationsAction.type, (state, action) => {
//       state[action.payload.destinations] = {
//         selectedPlanet: action.payload.value,
//         showVehicle: true,
//       };
//     })
//     .addCase(vehicleSelectedAction.type, (state, action) => {
//       const { timetaken, selectedVehicle, destination } = action.payload;
//       state[destination].selectedVehicle = selectedVehicle;
//       state[destination].timetaken = timetaken;
//     });
// });

// export default reducer;
