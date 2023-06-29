import "./App.css";
import React from "react";
import Destinations from "./Destinations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

class App extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  async componentDidMount() {
    await this.props.fetchPlanets();
    await this.props.fetchVehicales();
    this.props.getInitialDestinations();
  }

  componentDidUpdate() {
    if (this.props.state.error.error) {
      this.props.history.push({
        pathname: "/error",
        state: {
          response: this.props.state,
        },
      });
    }
  }
  onReset() {
    this.props.getInitialDestinations();
  }

  isAllSelected = () => {
    let planet_names = getSelectedPlanets(this.props.state);
    let vehicle_names = getSelectedVehicles(this.state.state);
    return (
      planet_names.length === NUMBER_OF_DESTINATIONS &&
      vehicle_names.length === NUMBER_OF_DESTINATIONS
    );
  };

  findFalcone = async () => {
    await this.props.getToken();
    if (this.props.state.findFalcone.token) {
      let requestBody = {
        token: this.props.state.findFalcone.token.token,
        planet_names: getSelectedPlanets(this.props.state),
        vehicle_names: getSelectedVehicles(this.props.state),
      };
      await this.props.findFalcon(requestBody);
      this.goToTResult();
    }
  };

  goToTResult = () => {
    this.props.history.push({
      pathname: "/result",
      state: {
        response: this.props.state.findFalcon,
        timeTaken: getTimeTaken(this.props.state),
      },
    });
  };

  render() {
    return (
      <div className="Container">
        <div className="App">
          <h1>Finding Falcone!</h1>
          {this.props.state.planets.length > 0 &&
          this.props.state.vehicles.length > 0 ? (
            <div className="grid-container">
              {Object.keys(this.props.state.destinations).map((dest) => {
                <div className="grid-item" key={dest}>
                  <div className="paper">
                    <Destinations
                      index={dest}
                      planets={getAvailablePlanets}
                      vehicles={getAvailableVehicles}
                    ></Destinations>
                  </div>
                </div>;
              })}
            </div>
          ) : (
            <div className="CircularProgress"></div>
          )}
          <div className="GridContainer">
            <div className="grid-item">
              <div className="card">
                <div className="card-content">
                  <div className="Typography">
                    <h1>Time Taken</h1>
                  </div>
                  <div>
                    <button
                      disabled={!this.isAllSelected()}
                      onClick={this.findFalcon}
                    >
                      Find Falcone
                    </button>
                    <button onClick={this.onReset}>Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => {
    dispatch(fetchPlanets());
  },
  fetchVehicales: () => {
    dispatch(fetchVehicales());
  },
  getIntialDestinations: () => {
    dispatch(getInitialDestinations());
  },
  getToken: () => {
    return dispatch(getToken());
  },
  findFalcone: (data) => {
    return dispatch(findFalcone(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
