import React from "react";
import Vehicle from "./Vehicle";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "./store/destinations";
import { SELECT_DEST_MSG } from "./store/constants";

function Destination({ planets, vehicles, index }) {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);
  const selectedValue = destinations[index]?.selectedPlanet || SELECT_DEST_MSG;

  const onDestinationChange = (event) => {
    dispatch(
      addDestination({
        destination: index,
        value: event.target.value,
      })
    );
  };

  const showVehicle = () => {
    const currentDest = destinations[index];
    return currentDest?.selectedPlanet ? true : false;
  };

  const getClassName = () => {
    const currentDest = destinations[index];
    return currentDest?.selectedPlanet ? "selected" : "unselected";
  };

  const optionItems = planets.map((planet) => (
    <option key={planet.name}>{planet.name}</option>
  ));

  return (
    <div className="destination">
      <div className="destinationSelect">
        <label className={getClassName()} htmlFor="destination">
          {SELECT_DEST_MSG}
        </label>
        <select value={selectedValue} onChange={onDestinationChange}>
          <option value={selectedValue}>{selectedValue}</option>
          {optionItems}
        </select>
      </div>
      {showVehicle() && (
        <div className="radio-group" name={index}>
          <Vehicle vehicles={vehicles} destinationGroup={index}></Vehicle>
        </div>
      )}
    </div>
  );
}

Destination.propTypes = {
  planets: PropTypes.array,
  vehicles: PropTypes.array,
  index: PropTypes.string,
};

export default Destination;
