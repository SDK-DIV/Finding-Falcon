import { shallow, configure } from "enzyme";
import { Destinations } from "./src/Destinations";
import React from "react";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const getState = () => ({
  destinations: {
    destinations1: { selectedPlanet: "Donlon", selectedVehicle: "Space Pod" },
  },
  planets: [{ distance: 100, name: "Donlon" }],
  vehicles: [{ max_distance: 200, name: "Space Pod", speed: 2, total_no: 2 }],
});

describe("Testing Destination component render correctly", () => {
  it("Test", () => {
    const dest = "destinations1";
    const wrapper = shallow(
      <Destinations
        index={dest}
        planets={getState().planets}
        vehicles={getState().vehicles}
        state={getState()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
