import React from "react";
import Vehicle from "./Vehicle";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addDestination } from "./store/destinations";
import { SELECT_DEST_MSG } from "./store/constants";

class Destination extends React.Component {
  static propTypes = {
    planets: PropTypes.array,
    vehicle: PropTypes.array,
    index: PropTypes.array,
  };
  onDestinationChange = (event) => {
    this.props.addDestination({
      destination: this.props.index,
      value: event.currentTarget.value,
    });
  };
  showVehicle = () => {
    let destinations = this.props.state.destinations;
    let curresntDest = destinations[this.props.index];
    return curresntDest.seleectedPlanet ? true : false;
  };

  getClassName = () => {
    let destinations = this.props.state.destinations;
    let curresntDest = destinations[this.props.index];
    return curresntDest.seleectedPlanet ? "selected" : "unselected";
  };

  render() {
    let planets = this.props.planets;
    let optionItems = planets.map((planet) => (
      <option key={planet.name}>{planet.name}</option>
    ));
    let selectedValue =
      this.props.state.destinations[this.props.index].seleectedPlanet ||
      SELECT_DEST_MSG;
    return (
      <div className="destination">
        <div className="destinationSelect">
          <label
            className={this.getClassName()}
            htmlFor="outlined-age-native-simple"
          >
            {SELECT_DEST_MSG}
          </label>
          <div
            value={selectedValue}
            onChange={this.onDestinationChange}
            label="Destination"
          >
            <option value={selectedValue}>{selectedValue}</option>
            {optionItems}
          </div>
        </div>
        {this.showVehicle() && (
          <div name={this.props.index}>
            <Vehicle
              vehicles={this.props.vehicles}
              destinationGroup={this.props.index}
            ></Vehicle>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  addDestination: (data) => {
    dispatch(addDestination(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
