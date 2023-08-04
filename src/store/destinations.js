import {
  getInitialDestinationsAction,
  addDestinationsAction,
  vehicleSelectedAction,
} from "./actions";
import { NUMBER_OF_DESTINATIONS } from "./constants";

//action
const getInitialDestinations = () => (dispatch) => {
  const destinations = [];
  for (var i = 1; i <= NUMBER_OF_DESTINATIONS; i++) {
    destinations.push("destination" + i);
  }

  dispatch(getInitialDestinationsAction(destinations));
};

const addDestination = (data) => (dispatch) => {
  dispatch(addDestinationsAction(data));
};

const vehicleSelected = (data) => (dispatch) => {
  dispatch(vehicleSelectedAction(data));
};

const getTimeTaken = (state) => {
  let timetaken = 0;
  Object.keys(state.destinations).forEach((key) => {
    if (state.destinations[key]) {
      let curr_time = state.destinations[key].timetaken;
      if (curr_time) {
        timetaken += curr_time;
      }
    }
  });
  return timetaken;
};

export {
  getInitialDestinations,
  addDestination,
  vehicleSelected,
  getTimeTaken,
};
