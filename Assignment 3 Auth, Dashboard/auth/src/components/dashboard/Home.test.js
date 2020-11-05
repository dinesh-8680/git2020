import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
describe('Test case for testing signup', () => {
   
    it("shallow renders properly", () => {
    const component= shallow( <Home/>);
    const wrapper = component.find('.navigation');
    expect(wrapper.length).toBe(1);
    });


});