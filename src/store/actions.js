import { createAction } from "@reduxjs/toolkit";

export const fetchPlanetsAction = createAction("fetchPlanetsAction");

export const fetchVehiclesAction = createAction("fetchVehiclesAction");

export const getInitialDestinationsAction = createAction(
  "getInitialDestinationsAction"
);

export const findFalconeAction = createAction("findFalconeAction");

export const addDestinationsAction = createAction("addDestinationsAction");

export const vehicleSelectedAction = createAction("vehicleSelectedAction");

export const fetchTokenAction = createAction("fetchTokenAction");

export const onErrorAction = createAction("onError");

export const resetErrorAction = createAction("resetErrorAction");
