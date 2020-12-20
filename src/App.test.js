import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

//set up enzyme's react adapter
Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test("renders without errors", () => {});
