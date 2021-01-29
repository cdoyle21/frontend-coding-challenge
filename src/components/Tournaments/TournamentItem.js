import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/tournaments';

import Button from '../Button';
import StartDate from '../StartDate';
import H6 from '../H6';

import styled from 'styled-components';
import theme from '../../theme';

const TournamentItemStyle = styled.div`
  border-radius: ${theme.spacing(1)};
  background: ${theme.palette.background.base};

  .content {
    padding: 1rem;
  }
`;

export class TournamentItem extends Component {
  editTournamentHandler = () => {
    this.props.onEditTournament(this.props.id, this.props.name);
  };

  deleteTournamentHandler = () => {
    this.props.onDeleteTournament(this.props.id);
  };

  render() {
    return (
      <TournamentItemStyle>
        <article data-test="article">
          <div className="content" data-test="content">
            <H6>{this.props.name}</H6>

            <p data-test="organizer">Organizer: {this.props.organizer}</p>
            <p data-test="game">Game: {this.props.game}</p>
            <p data-test="participants">
              Participants: {this.props.participantsCurrent}/
              {this.props.participantsMax}
            </p>
            <StartDate
              data-test="start-date"
              year={this.props.startDate.slice(0, 4)}
              month={this.props.startDate.slice(5, 7)}
              day={this.props.startDate.slice(8, 10)}
              hour={this.props.startDate.slice(11, 13)}
              min={this.props.startDate.slice(14, 16)}
              sec={this.props.startDate.slice(17, 19)}
            />
            <Button
              data-test="edit-button"
              onClick={this.editTournamentHandler}
            >
              Edit
            </Button>
            <Button
              data-test="delete-button"
              onClick={() => {
                if (
                  window.confirm(
                    'Do you really want to delete this tournament?'
                  )
                ) {
                  this.deleteTournamentHandler();
                }
              }}
            >
              DELETE
            </Button>
          </div>
        </article>
      </TournamentItemStyle>
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
    onDeleteTournament: id => dispatch(actions.deleteTournament(id)),
    onEditTournament: (id, name) => dispatch(actions.editTournament(id, name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentItem);
