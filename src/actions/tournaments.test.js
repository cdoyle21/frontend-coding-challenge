import * as actions from './tournaments';
import * as actionTypes from './actionTypes';
import axios from 'axios';

describe('fetchTournamentStart', () => {
  test('returns an action with type FETCH_TOURNAMENTS_START', () => {
    const action = actions.fetchTournamentsStart();
    expect(action).toEqual({ type: actionTypes.FETCH_TOURNAMENTS_START });
  });
});

/*describe('listUsers', () => {
  test('calls initial tournament list', () => {
    const mockListUsers = jest.fn();
    axios.get = mockListUsers;
    actions.fetchTournamentsSuccess();
    expect(mockListUsers).toBeCalledWith('http://localhost:4000/tournaments');
  });
});*/

describe('fetchTournamentsSuccess', () => {
  test('returns an action with type FETCH_TOURNAMENTS_SUCCESS', () => {
    const action = actions.fetchTournamentsSuccess();
    expect(action).toEqual({ type: actionTypes.FETCH_TOURNAMENTS_SUCCESS });
  });
});

describe('fetchTournamentFail', () => {
  test('returns an action with type FETCH_TOURNAMENTS_FAIL', () => {
    const action = actions.fetchTournamentsFail();
    expect(action).toEqual({ type: actionTypes.FETCH_TOURNAMENTS_FAIL });
  });
});

describe('addTournamentSuccess', () => {
  test('returns an action with type ADD_TOURNAMENT_SUCCESS', () => {
    const action = actions.addTournamentSuccess();
    expect(action).toEqual({ type: actionTypes.ADD_TOURNAMENT_SUCCESS });
  });
});

describe('addTournamentFail', () => {
  test('returns an action with type ADD_TOURNAMENT_FAIL', () => {
    const action = actions.addTournamentFail();
    expect(action).toEqual({ type: actionTypes.ADD_TOURNAMENT_FAIL });
  });
});

describe('deleteTournamentSuccess', () => {
  test('returns an action with type DELETE_TOURNAMENT_SUCCESS', () => {
    const action = actions.deleteTournamentSuccess();
    expect(action).toEqual({ type: actionTypes.DELETE_TOURNAMENT_SUCCESS });
  });
});

describe('deleteTournamentFail', () => {
  test('returns an action with type DELETE_TOURNAMENT_FAIL', () => {
    const action = actions.deleteTournamentFail();
    expect(action).toEqual({ type: actionTypes.DELETE_TOURNAMENT_FAIL });
  });
});

describe('editTournamentSuccess', () => {
  test('returns an action with type EDIT_TOURNAMENT_SUCCESS', () => {
    const action = actions.editTournamentSuccess();
    expect(action).toEqual({ type: actionTypes.EDIT_TOURNAMENT_SUCCESS });
  });
});

describe('editTournamentFail', () => {
  test('returns an action with type EDIT_TOURNAMENT_FAIL', () => {
    const action = actions.editTournamentFail();
    expect(action).toEqual({ type: actionTypes.EDIT_TOURNAMENT_FAIL });
  });
});

describe('fetchFilteredTournamentsStart', () => {
  test('returns an action with type SEARCH_TOURNAMENT_START', () => {
    const action = actions.fetchFilteredTournamentsStart();
    expect(action).toEqual({ type: actionTypes.SEARCH_TOURNAMENT_START });
  });
});

describe('fetchFilteredTournamentsSuccess', () => {
  test('returns an action with type SEARCH_TOURNAMENT_SUCCESS', () => {
    const action = actions.fetchFilteredTournamentsSuccess();
    expect(action).toEqual({ type: actionTypes.SEARCH_TOURNAMENT_SUCCESS });
  });
});

describe('fetchFilteredTournamentsFail', () => {
  test('returns an action with type SEARCH_TOURNAMENT_FAIL', () => {
    const action = actions.fetchFilteredTournamentsFail();
    expect(action).toEqual({ type: actionTypes.SEARCH_TOURNAMENT_FAIL });
  });
});
