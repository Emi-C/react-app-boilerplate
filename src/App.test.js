import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const defaultProps = {
  salutation: 'Morning',
};

test('IF we bootstrap,  we see "{salutation}, World!"', () => {
  const app = shallow(<App {...defaultProps} />);
  expect(app.find('h1').text()).toEqual('Morning, World!');
});

test('IF we see "World", WHEN click, THEN we see "Moon"', () => {
  const app = shallow(<App {...defaultProps} />);

  const h1 = app.find('h1');
  expect(h1.text()).toEqual('Morning, World!');

  h1.simulate('click');
  app.update(); //to detect change of state we gotta update our shallow copy of component

  const h1New = app.find('h1');
  expect(h1New.text()).toEqual('Morning, Moon!');
});
