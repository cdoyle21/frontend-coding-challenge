import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../tests/testUtils';
import Retry from './Retry';

const defaultProps = { clicked: () => {} };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Retry {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'retry');
  expect(component.length).toBe(1);
});
test('renders p tag without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'something-wrong');
  expect(component.length).toBe(1);
});

test('renders retry button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'retry-button');
  expect(button.length).toBe(1);
});
test('find retry button and click', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'retry-button');
  button.simulate('click');
});
test('should have default retry', () => {
  expect(Retry.propTypes.clicked).toBeDefined();
});
test('does not throw warning with expected props', () => {
  const expectedProps = { clicked: () => {} };
  checkProps(Retry, expectedProps);
});
