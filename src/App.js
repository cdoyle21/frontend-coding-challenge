import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/tournaments';

import Container from './components/Container';
import TournamentGrid from './components/Tournaments/TournamentGrid';
import Input from './components/Input';
import LoadingSpinner from './components/LoadingSpinner';
import Button from './components/Button';
import Retry from './components/Retry';
import H4 from './components/H4';

import styled from 'styled-components';
import theme from './theme';

const HeaderStyle = styled.div`
  margin-bottom: ${theme.spacing(3)};

  button {
    float: right;
  }
`;

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${theme.spacing(6)};
  padding: ${theme.spacing(6)} 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.filteredTournamentsHandler = this.filteredTournamentsHandler.bind(
      this
    );
  }

  componentDidMount() {
    this.props.onFetchTournaments();
  }

  filteredTournamentsHandler(eventValue) {
    eventValue.target.value
      ? this.props.onSearchTournament(eventValue)
      : this.props.onFetchTournaments();
  }

  addTournamentHandler = () => {
    this.props.onAddTournaments();
  };

  render() {
    let retry = null;
    if (this.props.error) {
      retry = <Retry clicked={this.props.onFetchTournaments} />;
    }

    let tournaments = <LoadingSpinner />;
    if (!this.props.isLoading) {
      tournaments = this.props.tournaments.map(tournament => (
        <TournamentGrid
          key={tournament.id}
          id={tournament.id}
          name={tournament.name}
          organizer={tournament.organizer}
          game={tournament.game}
          participantsCurrent={tournament.participants.current}
          participantsMax={tournament.participants.max}
          startDate={tournament.startDate}
        />
      ));
    }

    return (
      <Container>
        <HeaderStyle>
          <H4>FACEIT Tournaments</H4>
          <Input
            placeholder={'Search tournament...'}
            onChange={this.filteredTournamentsHandler}
          />
          <Button onClick={this.addTournamentHandler}>Create Tournament</Button>
        </HeaderStyle>
        {retry}
        <AppStyle>{tournaments}</AppStyle>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    tournaments: state.tournaments.tournaments,
    isLoading: state.tournaments.isLoading,
    error: state.tournaments.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTournaments: (error, isLoading) =>
      dispatch(actions.fetchTournaments(error, isLoading)),
    onAddTournaments: () => dispatch(actions.addTournament()),
    onSearchTournament: eventValue =>
      dispatch(actions.fetchFilteredTournaments(eventValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
