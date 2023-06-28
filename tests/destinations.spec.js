import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { addDestination, vehicleSelected } from "../src/store/destinations";
import configureStore from "../src/store/configureStore";

describe("Test for Destinations", () => {
  let store;
  const createState = () => ({
    destinations: {},
  });

  const destinations = () => store.getState().destinations;

  beforeEach(() => {
    store = configureStore();
  });

  it("Should add destination to the store if planet is selected", async () => {
    const selectedObj = { destination: "destination1", value: "Donlon" };
    const expectedResult = {
      destination1: { selectedPlanet: "Donlon", showVehicle: true },
    };

    await store.dispatch(addDestination(selectedObj));

    expect(destinations()).toEqual(expectedResult);
  });

  it("Should add Vehicle to the store if vehicle is selected", async () => {
    const selectedObj = {
      selectedVehicle: "Space Rocket",
      destination: "destination1",
    };

    await store.dispatch(addDestination(selectedObj));

    await store.dispatch(vehicleSelected(selectedObj));

    expect(destinations()["destination1"].selectedVehicle).toEqual(
      selectedObj.selectedVehicle
    );
  });
});
