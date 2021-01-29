import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const DateGridStyle = styled.div``;

const StartDate = props => {
  const year = props.year;
  const month = props.month;
  const day = props.day;
  const hour = props.hour;
  const min = props.min;
  const sec = props.sec;
  const date = new Date(year, month - 1, day, hour, min, sec);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  };
  return (
    <DateGridStyle>
      <p data-test="start-date">
        Start: {new Intl.DateTimeFormat('en-GB', options).format(date)}
      </p>
    </DateGridStyle>
  );
};

StartDate.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  sec: PropTypes.string.isRequired
};

export default StartDate;
