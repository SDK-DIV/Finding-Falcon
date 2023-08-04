import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { vehicleSelected } from "./store/destinations";

function Vehicle({ vehicles, destinationGroup }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const onVehicleSelect = (event) => {
    let selectedPlanet = getCurrentPlanet();
    let distance = selectedPlanet[0].distance;
    let vehicleObj = vehicles.find((vehi) => vehi.name === event.target.value);
    let speed = vehicleObj ? vehicleObj.speed : 1;
    let time = distance / speed;
    dispatch(
      vehicleSelected({
        timetaken: time,
        selectedVehicle: event.target.value,
        destination: destinationGroup,
      })
    );
  };

  const getCurrentPlanet = () => {
    let currentDest = destinationGroup;
    let currentPlanet = state.destinations[currentDest].selectedPlanet;
    return state.planets.filter((planet) => planet.name === currentPlanet);
  };

  const getIsRangeLess = (vehicleMaxDistance) => {
    let planet = getCurrentPlanet();
    let distance = planet[0] ? planet[0].distance : 0;
    return distance > vehicleMaxDistance;
  };

  return (
    <div className="vehicleList">
      {vehicles.map((vehicle) => {
        let index = vehicles.indexOf(vehicle);
        let isRangeLess = getIsRangeLess(vehicle.max_distance);
        return (
          <div key={index}>
            <label className="radio-label">
              <input
                type="radio"
                name="vehicle"
                className="radio-input"
                value={vehicle.name}
                onClick={onVehicleSelect}
                speed={vehicle.speed}
                disabled={vehicle.total_no === 0 || isRangeLess}
              />
              {vehicle.name} ({vehicle.total_no})
            </label>
          </div>
        );
      })}
    </div>
  );
}

Vehicle.propTypes = {
  vehicles: PropTypes.array,
  destinationGroup: PropTypes.string,
};

export default Vehicle;

// import React from "react";
// import PropTypes from "prop-types";
// import { vehicleSelected } from "./store/destinations";
// import { connect } from "react-redux";

// class Vehicle extends React.Component {
//   static propTypes = {
//     vehicles: PropTypes.array,
//     destinationGroup: PropTypes.string,
//   };
//   onVehicleSelect = (event) => {
//     let selectedPlanet = this.getCurrentPlanet();
//     let distance = selectedPlanet[0].distance;
//     let vehicleObj = this.props.vehicles.filter(
//       (vehi) => vehi.name === event.target.value
//     );
//     let speed = vehicleObj.length ? vehicleObj[0].speed : 1;
//     let time = distance / speed;
//     this.props.vehicleSelected({
//       timetaken: time,
//       selectedVehicle: event.target.value,
//       destination: this.props.destinationGroup,
//     });
//   };
//   getCurrentPlanet = () => {
//     let state = this.props.state;
//     let currentDest = this.props.destinationGroup;
//     let currentPlanet = state.destinations[currentDest].selectedPlanet;
//     return state.planets.filter((planet) => planet.name === currentPlanet);
//   };
//   getIsRangeless = (vehicleMaxDistance) => {
//     let planet = this.getCurrentPlanet();
//     let distance = planet[0] ? planet[0].distance : 0;
//     return distance > vehicleMaxDistance;
//   };

//   render() {
//     const vehicles = this.props.vehicles;
//     return (
//       <div className="vehicleList">
//         {vehicles.map((vehicle) => {
//           let index = vehicles.indexOf(vehicle);
//           let isRangeLess = this.getIsRangeLess(vehicle.max_distance);
//           return (
//             <div key={index}>
//               <label class="radio-label">
//                 <input
//                   type="radio"
//                   name="vehicle"
//                   class="radio-input"
//                   value={vehicle.name}
//                   onclick={this.onVehicleSelect}
//                   speed={vehicle.speed}
//                   disabled={
//                     vehicle.total_no === 0 || isRangeLess ? true : false
//                   }
//                 />
//                 ${vehicle.name} (${vehicle.total_no})
//               </label>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {};
// const mapDispatchToProps = (dispatch) => ({
//   vehicleSelected: (data) => {
//     dispatch(vehicleSelected(data));
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
