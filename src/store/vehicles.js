import { FETCH_VEHICLES_FAILED_MSG } from "./constants"

const fetchVehicles = () => async (dispatch) => {
    return dispatch({
        type: "apiCallBegan",
        payload: {
            url: "VEHICLE_API",
            onSuccess: fetchVehicleAction.type,
            onError: FETCH_VEHICLES_FAILED_MSG
        }
    });
}

const getAvailableVehicles = state => {
    let vehiObj = {};
    Object.keys(state.destinations).forEach(key => {
        let dest = state.destinations[key];
        if (dest.selectedVehicle) {
            let vehicle = dest.selectedVehicle;
            vehiObj[vehicle] = vehiObj[vehicle] ? vehiObj[vehicle] + 1 : 1;
        }
    });

    let availableVehicles = JSON.parse(JSON.stringify(state.vehicles));
    availableVehicles.forEach(vehicle => {
        if (vehiObj[vehicle.name]) {
            vehicle.total_no -= vehiObj[vehicle.name];
        }
    });
    return availableVehicles;
}

const getSelectedVehicles = state => {
    let selectedVehicles = [];
    let destinations = state.destinations;
    Object.keys(destinations).forEach(key => {
        let dest = destinations[key];
        if (dest.selectedVehicle) {
            selectedVehicles.push(dest.selectedVehicle);
        }
    });
    return selectedVehicles;
}

export default (fetchVehicles, getAvailableVehicles, getSelectedVehicles);

