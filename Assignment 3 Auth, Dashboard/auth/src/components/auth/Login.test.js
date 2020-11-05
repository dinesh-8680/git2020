import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'

describe('Test case for testing login', () => {
	let wrapper;
	it("shallow renders properly", () => {
	wrapper= shallow( <Login />);
    expect(wrapper.exists()).toBe(true);
	expect(wrapper.find("button").text()).toBe("Login");
	});
	it('username check', () => {
		wrapper = shallow(<Login />);
		wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'dineshmelage00@gmail.com' } });
		expect(wrapper.state('email')).toEqual('dineshmelage00@gmail.com');
	})
	it('password check', () => {
		wrapper = shallow(<Login />);
		wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '1234567' } });
		expect(wrapper.state('password')).toEqual('1234567');
	})

})