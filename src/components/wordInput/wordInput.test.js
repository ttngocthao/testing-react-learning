import React from "react";
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

describe("state controlled input filed", () => {
  test("state updates with value of input box upon change", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
