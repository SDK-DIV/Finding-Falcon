import { FETCH_PLANETS_FAILED_MSG, PLANET_API } from "./constants";

import { fetchPlanetsAction } from "./Action";

//action
const fetchPlanets = () => async (dispatch) => {
  return {
    type: "apiCallBegan",
    payload: {
      url: PLANET_API,
      onSuccess: fetchPlanetsAction.type,
      onError: FETCH_PLANETS_FAILED_MSG,
    },
  };
};

//selector
const getAvailablePlanets = (state) => {
  const selectedPlanets = [];
  Object.keys(state.destinations).forEach((dest) => {
    if (state.destinations[dest].selectedPlanet) {
      selectedPlanets.push(state.destinations[dest].selectedPlanet);
    }
  });
  return state.planets.filter((planet) => {
    const index = selectedPlanets.indexOf(planet.name);
    if (index === -1) {
      return planet;
    }
  });
};

const getSelectedPlanets = (state) => {
  let selectedPlanets = [];
  let destinations = state.destinations;
  Object.keys(destinations).forEach((key) => {
    let dest = destinations[key];
    if (dest.selectedPlanet) {
      selectedPlanets.push(dest.selectedPlanet);
    }
  });
  return selectedPlanets;
};
export { fetchPlanets, getAvailablePlanets, getSelectedPlanets };
