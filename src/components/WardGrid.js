import React from 'react';
import styled from 'styled-components';

import WardSummary from './WardSummary';

const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-top: 2em;
  max-width: 1000px;
  margin: 0 auto;
`;

const WardGrid = props => {
  //   console.log(props.wards);
  return (
    <MainGrid>
      {props.wards !== undefined ? (
        props.wards.map((ward, i) => (
          <WardSummary key={i} wardID={i + 1} wardData={ward} />
        ))
      ) : (
        <>
          <h2>loading.....</h2>
        </>
      )}
    </MainGrid>
  );
};

export default WardGrid;
