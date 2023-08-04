import { FETCH_PLANETS_FAILED_MSG, PLANET_API } from "./constants";
import { fetchPlanetsAction } from "./actions";

// Action
const fetchPlanets = () => ({
  type: "apiCallBegan",
  payload: {
    url: PLANET_API,
    onSuccess: fetchPlanetsAction.type,
    onError: FETCH_PLANETS_FAILED_MSG,
  },
});

// Selectors
const getAvailablePlanets = (state) => {
  const selectedPlanets = Object.values(state.destinations)
    .filter((dest) => dest.selectedPlanet)
    .map((dest) => dest.selectedPlanet);

  return state.planets.filter(
    (planet) => !selectedPlanets.includes(planet.name)
  );
};

const getSelectedPlanets = (state) => {
  const selectedPlanets = Object.values(state.destinations)
    .filter((dest) => dest.selectedPlanet)
    .map((dest) => dest.selectedPlanet);
  return selectedPlanets;
};

export { fetchPlanets, getAvailablePlanets, getSelectedPlanets };
