import React from 'react';
import styled from 'styled-components';

import WardSummary from './WardSummary';
import { Loader } from './Loader';

const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-top: 2em;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

const WardGrid = props => {
  //   console.log(props.wards);
  return props.isLoading ? (
    <Loader />
  ) : (
    <div>
      <MainGrid>
        {props.wards.map((ward, i) => (
          <WardSummary
            key={i}
            wardID={i + 1}
            wardData={ward}
            allWards={props.wards}
          />
        ))}
      </MainGrid>
    </div>
  );
};

export default WardGrid;
