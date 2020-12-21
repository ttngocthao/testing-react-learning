import  { shallow } from "enzyme";

import Congratulation from "./Congratulation";
import {findByTestAttr} from '../../../test/testUtils'
import { checkProps } from "../../../test/testUtils";


const setup = (props={}) => {
 
  return shallow(<Congratulation {...props}/>)
};

test("renders without error", () => {
  const wrapper = setup({success:false})
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

test('does not throw warning with expected props',()=>{
  const expectedProps = {success: false}
  checkProps(Congratulation,expectedProps)
})