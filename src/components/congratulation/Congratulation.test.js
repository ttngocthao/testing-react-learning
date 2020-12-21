import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congratulation from "./Congratulation";
import {findByTestAttr} from '../../../test/testUtils'

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = (props={}) => {
  return shallow(<Congratulation {...props}/>)
};

test("renders without error", () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper,'component-congrats')
  expect(component.length).toBe(1)
});

test("renders no text when `success` props is false", () => {
  const wrapper = setup({success:false})
  const component = findByTestAttr(wrapper,'component-congrats')
  expect(component.text()).toBe('')
});

test("renders text when `success` props is true", () => {
  const wrapper = setup({success:true})
  const congratsMsg = findByTestAttr(wrapper,'congrats-msg')
  expect(congratsMsg.text().length).not.toBe(0)
});
