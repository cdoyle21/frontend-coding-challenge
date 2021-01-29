import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import styled from 'styled-components';

const RetryStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  #retry {
    grid-column-start: 2;
  }

  p {
    text-align: center;
  }

  button {
    margin-left: 43%;
    margin-right: 50%;
  }
`;

const Retry = props => {
  return (
    <RetryStyle>
      <div id="retry" data-test="retry">
        <p data-test="something-wrong">Something went wrong!</p>
        <Button data-test="retry-button" onClick={props.clicked}>
          RETRY
        </Button>
      </div>
    </RetryStyle>
  );
};

Retry.propTypes = {
  clicked: PropTypes.func
};

export default Retry;
