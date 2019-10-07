import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Councillor from './Councillor';

const Card = styled.div`
  border: 4px solid rgba(72, 77, 109, 0.4);
  border: 2px solid #222222;

  border-radius: 20px;
  /* background: #f1e8b8; */
  background: white;
  background: #c5d5ea;
  background: #4f6d7a;
  background: aliceblue;
  color: #222222;
  h2 {
    color: #222222;
  }
  padding: 1em;
  transition: all linear 0.1s;
  &:hover {
    /* border: 4px solid rgba(72, 77, 109, 1); */
    background: #bbcde5;
  }
`;

const WardSummary = props => {
  const toggleHover = () => {
    console.log('toggle hover');
  };
  return (
    <Card onMouseEnter={toggleHover}>
      <Councillor councillor={props.wardData.counsillor} />
      <Link to={`/Wards/${props.wardID}`}>
        <h2>{props.wardData.name}</h2>
      </Link>
    </Card>
  );
};

export default WardSummary;

// on click of ward name:
//navigate to that wards profile page
//include way to get back to the main page

//OR

//modal.
