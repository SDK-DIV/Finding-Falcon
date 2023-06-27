import { combineReducer } from "redux";
import planetsReducer from "./planetsReducer";
import vehiclesReducer from "./vehiclesReducer";
import destinationsReducer from "./destinationsReducer";
import findFalconReducer from "./findFalconReducers";
import errorReducer from "./errorReducers";

export default combineReducer({
  planets: planetsReducer,
  vehicles: vehiclesReducer,
  destinations: destinationsReducer,
  findFalcon: findFalconReducer,
  error: errorReducer,
});
