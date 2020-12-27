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
  let wrapper;
  let mockSetCurrentGuess = jest.fn();

  beforeEach(() => {
    mockSetCurrentGuess.mockClear(); //reset all information stored in this function
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("clear input box when submit button is clicked", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
