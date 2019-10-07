import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../utils';

const Vital = styled.div`
  background: white;
  background: aliceblue;
  width: 30%;
  margin: 1em;
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
const IncomeStats = props => {
  const formattedAvgIncome = formatNumber(props.vitals.averageHouseholdIncome);
  const formattedMedIncome = formatNumber(props.vitals.medianHouseholdIncome);
  return (
    <Vital>
      <VitalSymbol>💰</VitalSymbol>
      <p>
        <strong>${formattedAvgIncome}</strong>
        <span>Avg Household Income</span>
      </p>
      <p>
        <strong>${formattedMedIncome}</strong>
        <span>Median Household Income</span>
      </p>
    </Vital>
  );
};

export default IncomeStats;
