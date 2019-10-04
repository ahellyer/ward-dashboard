import React from 'react';
import styled from 'styled-components';

const Vital = styled.div`
  width: 30%;
  margin: 1em;
  background: white;
  padding: 1em;
  span {
    display: block;
    text-align: center;
    font-size: 14px;
  }
  p {
    font-size: 30px;
  }
`;

const VitalSymbol = styled.h3`
  font-size: 35px;
  margin: 0.5em;
`;

const HousingStats = props => {
  return (
    <Vital>
      <VitalSymbol>🏠</VitalSymbol>
      <p>
        <strong>{props.vitals.percentRenters}%</strong>
        <span>Renters</span>
      </p>
      <p>
        <strong>{props.vitals.percentOwners}%</strong>
        <span>Owners</span>
      </p>
    </Vital>
  );
};

export default HousingStats;
