import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../tests/testUtils';
import { TournamentItem } from './TournamentItem';
import StartDate from '../StartDate';

/*const defaultProps = [{ startDate: '2021-01-27T12:24:10.122Z' }];
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(
    <TournamentItem
      onFetchTournaments={() => {}}
      onEditTournament={() => {}}
      onDeleteTournament={() => {}}
      {...setupProps}
    />
  );
};

describe('<TournamentItem />', () => {
  test('should render <StartDate /> ', () => {
    const wrapper = setup({
      startDate: {
        year: '2020',
        month: '12',
        day: '11',
        hour: '12',
        min: '11',
        sec: '12'
      }
    });
    expect(wrapper.find(StartDate)).toHaveLength(1);
  });
});

describe('items render correctly', () => {
  test('renders article without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'article');
    expect(component.length).toBe(1);
  });
  test('renders content tag without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'content');
    expect(component.length).toBe(1);
  });
  test('renders organizer tag without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'organizer');
    expect(component.length).toBe(1);
  });
  test('renders game tag without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'game');
    expect(component.length).toBe(1);
  });
  test('renders participants tag without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'participants');
    expect(component.length).toBe(1);
  });
  test('renders start-date tag without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'start-date');
    expect(component.length).toBe(1);
  });
});

describe('edit button rendered and prompt box appears on click', () => {
  test('renders edit button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'edit-button');
    expect(button.length).toBe(1);
  });
  test('find edit button and click', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'edit-button');
    button.simulate('click');
    expect(window.prompt).toHaveBeenCalledWith('clicked');
  });
});

describe('delete button rendered and prompt box appears on click', () => {
  test('renders delete button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'delete-button');
    expect(button.length).toBe(1);
  });
  test('find delete button and click', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'delete-button');
    button.simulate('click');
    expect(window.confirm).toHaveBeenCalledWith('clicked');
  });
});*/
