import { combineReducers } from "redux";
import planetsReducer from "./planetsReducer";
import vehiclesReducer from "./vehiclesReducer";
import destinationsReducer from "./destinationsReducer";
import findFalconeReducer from "./findFalconeReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  planets: planetsReducer,
  vehicles: vehiclesReducer,
  destinations: destinationsReducer,
  findFalcone: findFalconeReducer,
  error: errorReducer,
});
