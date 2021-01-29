import React from 'react';
import PropTypes from 'prop-types';

import TournamentItem from './TournamentItem';

import styled from 'styled-components';

const TournamentGridStyle = styled.div`
  width: 100%;
  display: grid;
`;

const TournamentGrid = props => {
  const tournamentItem = (
    <TournamentItem
      id={props.id}
      name={props.name}
      organizer={props.organizer}
      game={props.game}
      participantsCurrent={props.participantsCurrent}
      participantsMax={props.participantsMax}
      startDate={props.startDate}
    />
  );

  return <TournamentGridStyle>{tournamentItem}</TournamentGridStyle>;
};

TournamentGrid.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  organizer: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
  participantsCurrent: PropTypes.number.isRequired,
  participantsMax: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired
};

export default TournamentGrid;
