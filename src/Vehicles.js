import React from "react";
import PropTypes from "prop-types";
import { vehicleSelected } from "./store/destinations";
import { connect } from "react-redux";
import vehicles from "./store/vehicles";

class Vehicle extends React.Component {
    static propTypes = {
        vehicles: PropTypes.array,
        destinationGroup: PropTypes.string
    }
    onVehicleSelect = (event) => {
        let selectedPlanet = this.getCurrentPlanet();
        let distance = selectedPlanet[0].distance;
        let vehicleObj = this.props.vehicles.filter((vehi) => vehi.name === event.target.value);
        let speed = vehicleObj.length ? vehicleObj[0].speed : 1;
        let time = distance / speed;
        this.props.vehicleSelected({
            timetaken: time,
            selectedVehicle: event.target.value,
            destination: this.props.destinationGroup

        });
    };
    getCurrentPlanet = () => {
        let state = this.props.state;
        let currentDest = this.props.destinationGroup;
        let currentPlanet = state.destinations[currentDest].selectedPlanet;
        return state.planets.filter((planet) => planet.name === currentPlanet);
    }
    getIsRangeless = (vehicleMaxDistance) => {
        let planet = this.getCurrentPlanet();
        let distance = planet[0] ? planet[0].distance : 0;
        return distance > vehicleMaxDistance;

    }

    render() {
        const vehicles = this.props.vehicles;
        return (
            <div className="vehicleList">
                {vehicles.map((vehicle) => {
                    let index = vehicles.indexOf(vehicle);
                    let isRangeLess = this.getIsRangeLess(vehicle.max_distance);
                    return (
                        <div key={index}>
                            <div control={<div color="red"></div>}
                                label={`${vehicle.name} (${vehicle.total_no})`}
                                key={vehicles.indexOf(vehicle)}
                                type="radio"
                                value={vehicle.name}
                                onClick={this.onVehicleSelect}
                                speed={vehicle.speed}
                                disabled={vehicle.total_no == 0 || isRangeLess ? true : false} >
                            </div>
                        </div>
                    );
                })}
            </div >
        );
    }
}

const mapStateToProps = (state) => {

}
const mapDispatchToProps = (dispatch) => ({
    vehicleSelected: (data) => {
        dispatch(vehicleSelected(data));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
