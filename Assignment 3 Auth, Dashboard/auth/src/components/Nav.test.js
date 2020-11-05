import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
describe('Test case for testing signup', () => {
   
    it("shallow renders properly", () => {
    const component= shallow( <Nav />);
    const wrapper = component.find('button');
    expect(wrapper.length).toBe(2);
    });


});