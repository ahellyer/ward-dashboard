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
    border: 4px solid rgba(72, 77, 109, 1);
  }
`;

const WardSummary = props => {
  //   const twitterProfile = /[^/]*$/.exec(props.wardData.counsillor.twitter)[0];
  console.log(props.wardData.counsillor);
  return (
    <Card>
      <Councillor councillor={props.wardData.counsillor} />
      {/* <TwitterTimelineEmbed
        className="twitterEmbed"
        sourceType="profile"
        screenName={twitterProfile}
        options={{ height: 200 }}
      /> */}
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
