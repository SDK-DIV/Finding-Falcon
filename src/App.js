import "./AppDesign.css";
import React, { useEffect } from "react";
import Destinations from "./Destinations";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlanets,
  getAvailablePlanets,
  getSelectedPlanets,
} from "./store/planets";
import {
  fetchVehicales,
  getAvailableVehicles,
  getSelectedVehicles,
} from "./store/vehicles";
import { getInitialDestinations, getTimeTaken } from "./store/destinations";
import { findFalcone, getToken } from "./store/findFalcone";
import { NUMBER_OF_DESTINATIONS } from "./store/constants";

function App({ history }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchPlanets());
      dispatch(fetchVehicales());
      dispatch(getInitialDestinations());
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (state.error.error) {
      history.push({
        pathname: "/error",
        state: {
          response: state,
        },
      });
    }
  }, [state.error.error, history, state]);

  const onReset = () => {
    dispatch(getInitialDestinations());
  };

  const isAllSelected = () => {
    const planet_names = getSelectedPlanets(state);
    const vehicle_names = getSelectedVehicles(state);
    return (
      planet_names.length === NUMBER_OF_DESTINATIONS &&
      vehicle_names.length === NUMBER_OF_DESTINATIONS
    );
  };

  const findingFalcone = async () => {
    dispatch(getToken());
    if (state.findFalcone.token) {
      const requestBody = {
        token: state.findFalcone.token.token,
        planet_names: getSelectedPlanets(state),
        vehicle_names: getSelectedVehicles(state),
      };
      dispatch(findFalcone(requestBody));
      goToResult();
    }
  };

  const goToResult = () => {
    history.push({
      pathname: "/result",
      state: {
        response: state.findFalcon,
        timeTaken: getTimeTaken(state),
      },
    });
  };

  return (
    <div className="container">
      <div className="app">
        <header className="header">Finding Falcone!</header>
        {state.planets.length > 0 && state.vehicles.length > 0 ? (
          <div className="grid-container">
            {Object.keys(state.destinations).map((dest) => (
              <div className="grid-item" key={dest}>
                <div className="paper">
                  <Destinations
                    index={dest}
                    planets={getAvailablePlanets(state)}
                    vehicles={getAvailableVehicles(state)}
                  ></Destinations>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="circular-progress"></div>
        )}
        <div className="grid-container1">
          <div className="grid-item1">
            <div className="card">
              <div className="card-content">
                <p className="typography-secondary gutter-bottom">Time Taken</p>
                <h2 className="typography-h5">{getTimeTaken(state)}</h2>
              </div>
              <div className="card-actions">
                <button
                  className="find"
                  disabled={!isAllSelected()}
                  onClick={findingFalcone}
                >
                  Find Falcone
                </button>
                <button className="reset" onClick={onReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  history: PropTypes.object,
};

export default App;
