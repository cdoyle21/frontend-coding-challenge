import * as actionTypes from './actionTypes';
import axios from 'axios';

/**
 * Fetch Tournaments
 * Dispatch loading message. Dispatch successful initial data from the API. Catch errors if any are returned
 * @param {array} tournaments - the array of initial tournaments
 * @param {boolean} error - whether error should be returned or not
 * @param {boolean} isLoading - whether isLoading text should be returned or not
 *
 */
export const fetchTournamentsStart = isLoading => {
  return {
    type: actionTypes.FETCH_TOURNAMENTS_START,
    isLoading: isLoading
  };
};

export const fetchTournamentsSuccess = (tournaments, error, isLoading) => {
  return {
    type: actionTypes.FETCH_TOURNAMENTS_SUCCESS,
    tournaments: tournaments,
    error: error,
    isLoading: isLoading
  };
};

export const fetchTournamentsFail = error => {
  return {
    type: actionTypes.FETCH_TOURNAMENTS_FAIL,
    error: error
  };
};

export const fetchTournaments = () => {
  return dispatch => {
    dispatch(fetchTournamentsStart());
    axios
      .get('http://localhost:4000/tournaments')
      .then(response => {
        const tournaments = response.data;
        dispatch(fetchTournamentsSuccess(tournaments));
      })
      .catch(error => {
        dispatch(fetchTournamentsFail(error));
      });
  };
};

/**
 * Create Tournament
 * Dispatch successful new tournament into the API. Catch errors if any are returned
 * @param {string} tournamentId
 * @param {string} newTournament - newTournament name provided by user in prompt
 * @param {string} tournamentOrganizer
 * @param {string} tournamentGame
 * @param {int} tournamentParticipants - to get to current and max participant nodes
 * @param {date} tournamentStartDate
 * @param {boolean} error - whether error should be returned or not
 *
 */
export const addTournamentSuccess = (
  tournamentId,
  newTournament,
  tournamentOrganizer,
  tournamentGame,
  tournamentParticipants,
  tournamentStartDate
) => {
  return {
    type: actionTypes.ADD_TOURNAMENT_SUCCESS,
    id: tournamentId,
    newTournament: newTournament,
    organizer: tournamentOrganizer,
    game: tournamentGame,
    participants: tournamentParticipants,
    startDate: tournamentStartDate
  };
};

export const addTournamentFail = error => {
  return {
    type: actionTypes.ADD_TOURNAMENT_FAIL,
    error: error
  };
};

export const addTournament = () => {
  return dispatch => {
    const newTournament = {
      name: prompt('Tournament name:', '')
    };
    axios
      .post('http://localhost:4000/tournaments', newTournament)
      .then(response => {
        const tournaments = response.data;
        dispatch(
          addTournamentSuccess(
            tournaments.id,
            newTournament,
            tournaments.organizer,
            tournaments.game,
            tournaments.participants,
            tournaments.startDate
          )
        );
      })
      .catch(error => {
        dispatch(addTournamentFail(error));
      });
  };
};

/**
 * Delete Tournament
 * Filter deleted tournament from API which will be deleted on refresh. Catch errors if any are returned
 * @param {string} id - the tournament id of tournament to delete
 * @param {array} tournaments - an array containing only the tournament that is to be deleted
 * @param {boolean} error - whether error should be returned or not
 *
 */
export const deleteTournamentSuccess = (id, tournaments) => {
  return {
    type: actionTypes.DELETE_TOURNAMENT_SUCCESS,
    tournamentId: id,
    tournaments: tournaments
  };
};

export const deleteTournamentFail = error => {
  return {
    type: actionTypes.DELETE_TOURNAMENT_FAIL,
    error: error
  };
};

export const deleteTournament = id => {
  return dispatch => {
    axios
      .delete('http://localhost:4000/tournaments/' + id)
      .then(response => {
        const tournaments = response.data;
        dispatch(deleteTournamentSuccess(id, tournaments));
      })
      .catch(error => {
        dispatch(deleteTournamentFail(error));
      });
  };
};

/**
 * Edit a Tournament Name
 * Edit tournament name in API, create new array to avoid mutation. Catch errors if any are returned
 * @param {string} id - tournament ID of tournament to be edited
 * @param {string} newName - the newName of tournament provided by user in prompt
 * @param {string} name - previous name of tournament which appesrs in prompt initially
 * @param {array} tournaments - an array containing only the tournament that is to be edited
 * @param {boolean} error - whether error should be returned or not
 *
 */
export const editTournamentSuccess = (id, newName, tournaments) => {
  return {
    type: actionTypes.EDIT_TOURNAMENT_SUCCESS,
    tournamentId: id,
    newName: newName,
    tournaments: tournaments
  };
};

export const editTournamentFail = error => {
  return {
    type: actionTypes.EDIT_TOURNAMENT_FAIL,
    error: error
  };
};

export const editTournament = (id, name) => {
  return dispatch => {
    const newName = {
      name: prompt('New Tournament Name', name)
    };
    axios
      .patch('http://localhost:4000/tournaments/' + id, newName)
      .then(response => {
        const tournaments = response.data;
        dispatch(editTournamentSuccess(tournaments.id, newName, tournaments));
      })
      .catch(error => {
        dispatch(editTournamentFail(error));
      });
  };
};

/**
 * Search by Tournament Name
 * Dispatch loading message. Return all tournaments from the API and filter to create a new array each time a character is entered into input field.
 * Catch errors if any are returned
 * @param {array} tournaments - the array of initial tournaments and then subsequent filtered tournaments
 * @param {boolean} error - whether error should be returned or not
 * @param {boolean} isLoading - whether isLoading text should be returned or not
 * @param {string} eventValue - value entered into search input field
 *
 */
export const fetchFilteredTournamentsStart = isLoading => {
  return {
    type: actionTypes.SEARCH_TOURNAMENT_START,
    isLoading: isLoading
  };
};

export const fetchFilteredTournamentsSuccess = tournaments => {
  return {
    type: actionTypes.SEARCH_TOURNAMENT_SUCCESS,
    tournaments: tournaments
  };
};

export const fetchFilteredTournamentsFail = error => {
  return {
    type: actionTypes.SEARCH_TOURNAMENT_FAIL,
    error: error
  };
};

export const fetchFilteredTournaments = eventValue => {
  return dispatch => {
    const targetValue = eventValue.target.value;
    dispatch(fetchFilteredTournamentsStart());
    axios
      .get('http://localhost:4000/tournaments')
      .then(response => {
        const tournaments = response.data;
        const filterTournamentSearch = tournaments.filter(tournament =>
          tournament.name.includes(targetValue)
        );
        dispatch(fetchFilteredTournamentsSuccess(filterTournamentSearch));
      })
      .catch(error => {
        dispatch(fetchFilteredTournamentsFail(error));
      });
  };
};
