import React from 'react';

import styled from 'styled-components';
import theme from '../theme';

const LoadingSpinnerStyle = styled.div`
  grid-column-start: 2;
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;
`;

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerStyle>
      <div className="loading" data-test="loading-tournaments">
        Loading tournaments ...
      </div>
    </LoadingSpinnerStyle>
  );
};

export default LoadingSpinner;
