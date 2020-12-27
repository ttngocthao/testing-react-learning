import { shallow } from "enzyme";
import WordInput from "./WordInput";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const setup = (secretWord = "party") => {
  return shallow(<WordInput secretWord={secretWord} />);
};

test("renders word input without error", () => {
  const wrapper = setup();
  const componentInput = findByTestAttr(wrapper, "component-input");
  expect(componentInput.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(WordInput, { secretWord: "party" });
});
