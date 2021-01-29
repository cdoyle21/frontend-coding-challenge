import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../tests/testUtils';
import StartDate from './StartDate';

const defaultProps = {
  year: '2021',
  month: '02',
  day: '23',
  hour: '04',
  min: '06',
  sec: '01'
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<StartDate {...setupProps} />);
};

test('renders p tag without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'start-date');
  expect(component.length).toBe(1);
});
test('does not throw warning with expected props', () => {
  const expectedProps = {
    year: '2021',
    month: '02',
    day: '23',
    hour: '04',
    min: '06',
    sec: '01'
  };
  checkProps(StartDate, expectedProps);
});
