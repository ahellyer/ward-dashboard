import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../utils';

const Vital = styled.div`
  background: white;
  background: #284a69;
  width: 30%;
  margin: 1em;
  padding: 1em;
  color: white;
  border-radius: 8px;
  span {
    display: block;
    text-align: center;
    font-size: 14px;
    color: white;
  }
  p {
    font-size: 30px;
    color: white;
    margin: 0.5em auto;
  }
  h3 {
    background: aliceblue;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0.2em auto;
  }
`;
const VitalSymbol = styled.h3`
  font-size: 35px;
  margin: 0.5em;
`;
const SingleVitalSet = props => {
  //   const formattedAvgIncome = formatNumber(props.vitals.averageHouseholdIncome);
  //   const formattedMedIncome = formatNumber(props.vitals.medianHouseholdIncome);
  return (
    <Vital>
      <VitalSymbol>{props.symbol}</VitalSymbol>
      {props.vitals.map(vital => {
        const formattedValue = formatNumber(vital.value);
        return (
          <p key={vital.label}>
            <strong>
              {vital.isCurrency ? `$${formattedValue}` : formattedValue}
              {vital.isPercentage ? '%' : null}
            </strong>
            <span>{vital.label}</span>
          </p>
        );
      })}
    </Vital>
  );
};

export default SingleVitalSet;
