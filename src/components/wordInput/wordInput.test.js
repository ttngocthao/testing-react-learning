import { shallow } from "enzyme";
import WordInput from "./WordInput";
import { findByTestAttr } from "../../../test/testUtils";
const setup = () => {
  return shallow(<WordInput />);
};

test("renders word input without error", () => {
  const wrapper = setup();
  const componentInput = findByTestAttr(wrapper, "component-input");
  expect(componentInput.length).toBe(1);
});
