import "./App.css";
import React from "react";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
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
import { findFalcon, getToken } from "./store/findFalcon";
import { NUMBER_OF_DESTINATIONS } from "./store/constants";

class App extends React.Component {
  static PropTypes = {
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

  findFalcon = async () => {
    await this.props.getToken();
    if (this.props.state.findFalcon.token) {
      let requestBody = {
        token: this.props.state.findFalcon.token.token,
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
          <h1>Finding Falcon!</h1>
          <div className="grid-container">
            <div className="grid-item">
              <div className="paper">
                <Destination></Destination>
              </div>
            </div>
          </div>
          : <CircularProgress />
          <div className="GridContainer">
            <div className="grid-item">
              <div className="card">
                <div className="card-content">
                  <Typography color="textSecondary" gutterBottom>
                    Time Taken
                  </Typography>
                  <div>
                    <button
                      disabled={!this.isAllSelected()}
                      onClick={this.findFalcon}
                    >
                      Find Falcon
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
  findFalcon: (data) => {
    return dispatch(findFalcon(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
