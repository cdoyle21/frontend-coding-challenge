import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tournaments: [],
  isLoading: true,
  error: false
};

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

const fetchTournamentsStart = (state, action) => {
  return updateObject(state, {});
};

const fetchTournamentsSuccess = (state, action) => {
  return updateObject(state, {
    tournaments: action.tournaments.reverse(),
    isLoading: false
  });
};

const fetchTournamentsFail = (state, action) => {
  return updateObject(state, {
    error: true,
    isLoading: false
  });
};

const addTournamentSuccess = (state, action) => {
  const newTournament = updateObject(action.newTournament, {
    id: action.id,
    organizer: action.organizer,
    game: action.game,
    participants: action.participants,
    current: action.participants.current,
    max: action.participants.max,
    startDate: action.startDate
  });
  return updateObject(state, {
    tournaments: [newTournament].concat(state.tournaments),
    isLoading: false
  });
};

const addTournamentFail = (state, action) => {
  return updateObject(state, {
    error: true,
    isLoading: false
  });
};

const deleteTournamentSuccess = (state, action) => {
  const deleteTournamentIndex = state.tournaments.filter(
    i => i.id !== action.tournamentId
  );
  return updateObject(state, {
    tournaments: deleteTournamentIndex,
    isLoading: false
  });
};

const deleteTournamentFail = (state, action) => {
  return updateObject(state, {
    error: true,
    isLoading: false
  });
};

const editTournamentSuccess = (state, action) => {
  const editTournamentIndex = state.tournaments.findIndex(
    i => i.id === action.tournamentId
  );
  const updatedTournament = {
    ...state.tournaments[editTournamentIndex],
    ...action.tournaments
  };
  const updatedTournaments = [...state.tournaments];
  updatedTournaments[editTournamentIndex] = updatedTournament;

  return updateObject(state, {
    tournaments: updatedTournaments,
    isLoading: false
  });
};

const editTournamentFail = (state, action) => {
  return updateObject(state, {
    error: true,
    isLoading: false
  });
};

const fetchFilteredTournamentsStart = (state, action) => {
  return updateObject(state, {});
};

const fetchFilteredTournamentsSuccess = (state, action) => {
  return updateObject(state, {
    tournaments: action.tournaments.reverse(),
    isLoading: false
  });
};

const fetchFilteredTournamentsFail = (state, action) => {
  return updateObject(state, {
    error: true,
    isLoading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOURNAMENTS_START:
      return fetchTournamentsStart(state, action);
    case actionTypes.FETCH_TOURNAMENTS_SUCCESS:
      return fetchTournamentsSuccess(state, action);
    case actionTypes.FETCH_TOURNAMENTS_FAIL:
      return fetchTournamentsFail(state, action);
    case actionTypes.ADD_TOURNAMENT_SUCCESS:
      return addTournamentSuccess(state, action);
    case actionTypes.ADD_TOURNAMENT_FAIL:
      return addTournamentFail(state, action);
    case actionTypes.DELETE_TOURNAMENT_SUCCESS:
      return deleteTournamentSuccess(state, action);
    case actionTypes.DELETE_TOURNAMENT_FAIL:
      return deleteTournamentFail(state, action);
    case actionTypes.EDIT_TOURNAMENT_SUCCESS:
      return editTournamentSuccess(state, action);
    case actionTypes.EDIT_TOURNAMENT_FAIL:
      return editTournamentFail(state, action);
    case actionTypes.SEARCH_TOURNAMENT_START:
      return fetchFilteredTournamentsStart(state, action);
    case actionTypes.SEARCH_TOURNAMENT_SUCCESS:
      return fetchFilteredTournamentsSuccess(state, action);
    case actionTypes.SEARCH_TOURNAMENT_FAIL:
      return fetchFilteredTournamentsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
