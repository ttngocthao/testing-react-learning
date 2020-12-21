import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congratulation from "./Congratulation";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = (props) => {};

test("renders without error", () => {});

test("renders no text when `success` props is false", () => {});

test("renders text when `success` props is true", () => {});
