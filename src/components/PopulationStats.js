import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../utils';

const Vital = styled.div`
  background: white;
  margin: 1em;
  width: 30%;
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

const PopulationStats = props => {
  const formattedPopulation = formatNumber(props.vitals.population);
  return (
    <Vital>
      <VitalSymbol>👨‍👨‍👧‍👦</VitalSymbol>
      <p>
        <strong>{formattedPopulation}</strong>
        <span>Population</span>
      </p>
      <p>
        <strong>{props.vitals.peoplePerHousehold}</strong>
        <span>People / Household</span>{' '}
      </p>
    </Vital>
  );
};

export default PopulationStats;
