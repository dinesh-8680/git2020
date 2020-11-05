import React  from "react";
import { shallow} from "enzyme";
import TodoInput from "./TodoInput";
import { render, fireEvent } from '@testing-library/react';

const setup = () => {
  const utils = render(<TodoInput />)
  const input = utils.getByLabelText('cost-input')
  return {
    input,
    ...utils,
  }
}


describe("Test case for testing Todo", () => {
  let wrapperTodoForm;

  it("shallow renders properly", () => {
    wrapperTodoForm = shallow( <TodoInput />);
    expect(wrapperTodoForm.exists()).toBe(true);
    expect(wrapperTodoForm.find("button").text()).toBe("Submit");
  });

  test('It should input is currect', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'something' } })
    expect(input.value).toBe('something')
  });



});
