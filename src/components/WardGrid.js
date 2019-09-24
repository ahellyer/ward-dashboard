import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-top: 2em;
  max-width: 1000px;
  margin: 0 auto;
`;

const WardGrid = props => {
  return (
    <MainGrid>
      {/* <h2> ward grid</h2> */}
      {props.children}
    </MainGrid>
  );
};

export default WardGrid;
