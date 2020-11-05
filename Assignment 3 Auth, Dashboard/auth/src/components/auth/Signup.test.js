import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';
describe('Test case for testing signup', () => {
	let wrapper;
	it("shallow renders properly", () => {
	wrapper= shallow( <Signup />);
    expect(wrapper.exists()).toBe(true);
	expect(wrapper.find("button").text()).toBe("Signup");
	});
    it('name check', () => {
		wrapper = shallow(<Signup/>);
		wrapper.find('#name').simulate('change', { target: { name: 'name', value: 'dinesh' } });
		expect(wrapper.state('name')).toEqual('dinesh');
	});

	it('email check', () => {
		wrapper = shallow(<Signup/>);
		wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'dineshmelage00@gmail.com' } });
		expect(wrapper.state('email')).toEqual('dineshmelage00@gmail.com');
	});

	it('password check', () => {
		wrapper = shallow(<Signup/>);
		wrapper.find('#password').simulate('change', { target: { name: 'password', value: '1234567' } });
		expect(wrapper.state('password')).toEqual('1234567');
	});
	
	
})