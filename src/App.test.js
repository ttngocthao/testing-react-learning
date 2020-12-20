import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

//set up enzyme's react adapter
Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

/**
 *Factory func to create a ShallowWrapper for the App component
 *@function setup
 *@returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without errors", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

//need a button to click
test("renders a button", () => {
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper, "increment-button");
  expect(buttonComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

//counter starts at 0, increase one every click
test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking on button,increments counter display", () => {
  const wrapper = setup();

  //find the button
  const button = findByTestAttr(wrapper, "increment-button");

  //click the button
  button.simulate("click");

  //find the display,and check if the number display correctly
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

//need a decrement button
test("renders decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

//decrement on every click
test("clicking on decrement button, counter decrease,counter is larger than 0", () => {
  const wrapper = setup();
  //find increment button and click
  const increment = findByTestAttr(wrapper, "increment-button");
  increment.simulate("click");
  //find the decrement button
  const button = findByTestAttr(wrapper, "decrement-button");

  //click the button
  button.simulate("click");

  //find the display counter text
  const count = findByTestAttr(wrapper, "count").text();

  //check if the display counter is correct
  expect(count).toBe("0");
});

test("errorMsg not show when not needed", () => {
  const wrapper = setup();
  const errorMsg = findByTestAttr(wrapper, "error-msg");
  expect(errorMsg.exists()).toEqual(false);
});

describe("counter is 0 and decrement is clicked", () => {
  let wrapper;
  beforeEach(() => {
    // no need to set counter value here; default value of 0 is good
    wrapper = setup();

    // find decrement button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
  });

  test("show Error", () => {
    const errorMsg = findByTestAttr(wrapper, "error-msg");
    expect(errorMsg.exists()).toEqual(true);
  });

  test("counter should stay at 0", () => {
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toEqual("0");
  });
});

describe("error msg is shown,increment button is clicked", () => {
  //to show error msg
  let wrapper;
  beforeEach(() => {
    // no need to set counter value here; default value of 0 is good
    wrapper = setup();

    // find decrement button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");

    //find increment button and click
    const increment = findByTestAttr(wrapper, "increment-button");
    increment.simulate("click");
  });

  test("clear error message", () => {
    const errorMsg = findByTestAttr(wrapper, "error-msg");
    expect(errorMsg.exists()).toEqual(false);
  });

  test("counter should be increase one", () => {
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
  });
});
