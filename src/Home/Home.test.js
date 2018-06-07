import React from 'react';
import { shallow } from 'enzyme';
import Home from './template';

const defaultProps = {
  salutation: 'Morning',
  counter: null,
  bootstrap: jest.fn(),
  increment: jest.fn(),
  decrement: jest.fn(),
};

test('IF we bootstrap,  we see "{salutation}, World!"', () => {
  const app = shallow(<Home {...defaultProps} />);
  expect(app.find('h1').text()).toEqual('Morning, World!');
});

test('IF we see "World", WHEN click, THEN we see "Moon"', () => {
  const app = shallow(<Home {...defaultProps} />);

  const h1 = app.find('h1');
  expect(h1.text()).toEqual('Morning, World!');

  h1.simulate('click');
  app.update(); //to detect change of state we gotta update our shallow copy of component

  const h1New = app.find('h1');
  expect(h1New.text()).toEqual('Morning, Moon!');
});
