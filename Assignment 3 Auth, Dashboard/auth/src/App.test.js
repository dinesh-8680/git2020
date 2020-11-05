import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe('Test App', () => {
   
    it("should Exists", () => {
    const component= shallow( <App />);
    expect(component.exists()).toBe(true);
    });

});