import * as actionTypes from '../actions/actionTypes';
import fetchTournamentsStart from './tournaments';
import fetchTournamentsSuccess from './tournaments';
import fetchTournamentsFail from './tournaments';
import addTournamentSuccess from './tournaments';
import addTournamentFail from './tournaments';
import deleteTournamentSuccess from './tournaments';
import deleteTournamentFail from './tournaments';
import editTournamentSuccess from './tournaments';
import editTournamentFail from './tournaments';
import fetchFilteredTournamentsStart from './tournaments';
import fetchFilteredTournamentsSuccess from './tournaments';
import fetchFilteredTournamentsFail from './tournaments';

const tournaments = [
  {
    id: '38b9dceb-4c33-41dc-9d42-398403f0b8c3',
    name: 'Test2',
    organizer: 'Et Provident',
    game: 'Battalion 1944',
    participants: {
      current: 194,
      max: 256
    },
    startDate: '2021-01-27T12:24:10.122Z'
  }
];

test('returns default initial state when no action is taken', () => {
  const newState = fetchTournamentsStart(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of isLoading: true upon receiving action of type FETCH_TOURNAMENTS_START', () => {
  const newState = fetchTournamentsStart(undefined, {
    type: actionTypes.FETCH_TOURNAMENTS_START
  });
  expect(newState).toEqual({
    error: false,
    isLoading: true,
    tournaments: []
  });
});

test('returns default initial state when no action is taken', () => {
  const newState = fetchTournamentsSuccess(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of isLoading: false upon receiving action of type FETCH_TOURNAMENTS_SUCCESS', () => {
  const newState = fetchTournamentsSuccess(undefined, {
    type: actionTypes.FETCH_TOURNAMENTS_SUCCESS,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: false,
    isLoading: false,
    tournaments: tournaments
  });
});

test('returns default initial state when no action is taken', () => {
  const newState = fetchTournamentsFail(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of error: true upon receiving action of type FETCH_TOURNAMENTS_FAIL', () => {
  const newState = fetchTournamentsFail(undefined, {
    type: actionTypes.FETCH_TOURNAMENTS_FAIL,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: true,
    isLoading: false,
    tournaments: []
  });
});

/*test('returns default initial state when no action is taken', () => {
  const newState = addTournamentSuccess(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of isLoading: false upon receiving action of type ADD_TOURNAMENT_SUCCESS', () => {
  const newState = addTournamentSuccess(undefined, {
    type: actionTypes.ADD_TOURNAMENT_SUCCESS,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: false,
    isLoading: false,
    tournaments: tournaments
  });
});*/

test('returns default initial state when no action is taken', () => {
  const newState = addTournamentFail(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of error: true upon receiving action of type ADD_TOURNAMENT_FAIL', () => {
  const newState = addTournamentFail(undefined, {
    type: actionTypes.ADD_TOURNAMENT_FAIL,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: true,
    isLoading: false,
    tournaments: []
  });
});

test('returns default initial state when no action is taken', () => {
  const newState = deleteTournamentSuccess(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of isLoading: false upon receiving action of type DELETE_TOURNAMENT_SUCCESS', () => {
  const newState = deleteTournamentSuccess(undefined, {
    type: actionTypes.DELETE_TOURNAMENT_SUCCESS,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: false,
    isLoading: false,
    tournaments: []
  });
});

test('returns default initial state when no action is taken', () => {
  const newState = deleteTournamentFail(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of error: true upon receiving action of type DELETE_TOURNAMENT_FAIL', () => {
  const newState = deleteTournamentFail(undefined, {
    type: actionTypes.DELETE_TOURNAMENT_FAIL,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: true,
    isLoading: false,
    tournaments: []
  });
});

test('returns default initial state when no action is taken', () => {
  const newState = editTournamentSuccess(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of isLoading: false upon receiving action of type EDIT_TOURNAMENT_SUCCESS', () => {
  const newState = editTournamentSuccess(undefined, {
    type: actionTypes.EDIT_TOURNAMENT_SUCCESS,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(JSON.stringify(newState)).toEqual(
    JSON.stringify({ tournaments: [], isLoading: false, error: false })
  );
});

test('returns default initial state when no action is taken', () => {
  const newState = editTournamentFail(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of error: true upon receiving action of type EDIT_TOURNAMENT_FAIL', () => {
  const newState = editTournamentFail(undefined, {
    type: actionTypes.EDIT_TOURNAMENT_FAIL,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: true,
    isLoading: false,
    tournaments: []
  });
});

test('returns default initial state when no action is taken', () => {
  const newState = fetchFilteredTournamentsStart(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of isLoading: true upon receiving action of type SEARCH_TOURNAMENT_START', () => {
  const newState = fetchFilteredTournamentsStart(undefined, {
    type: actionTypes.SEARCH_TOURNAMENT_START
  });
  expect(newState).toEqual({
    error: false,
    isLoading: true,
    tournaments: []
  });
});

test('returns default initial state when no action is taken', () => {
  const newState = fetchFilteredTournamentsSuccess(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of isLoading: false upon receiving action of type SEARCH_TOURNAMENT_SUCCESS', () => {
  const newState = fetchFilteredTournamentsSuccess(undefined, {
    type: actionTypes.SEARCH_TOURNAMENT_SUCCESS,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: false,
    isLoading: false,
    tournaments: tournaments
  });
});

test('returns default initial state when no action is taken', () => {
  const newState = fetchFilteredTournamentsFail(undefined, {});
  expect(newState).toEqual({ error: false, isLoading: true, tournaments: [] });
});
test('returns state of error: true upon receiving action of type SEARCH_TOURNAMENT_FAIL', () => {
  const newState = fetchFilteredTournamentsFail(undefined, {
    type: actionTypes.SEARCH_TOURNAMENT_FAIL,
    error: false,
    isLoading: false,
    tournaments
  });
  expect(newState).toEqual({
    error: true,
    isLoading: false,
    tournaments: []
  });
});
