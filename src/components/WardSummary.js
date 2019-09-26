import React from 'react';
import styled from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Ward from './Ward';

const Card = styled.div`
  /* width: 25%; */
  /* background: grey; */
  border: 4px solid rgba(72, 77, 109, 0.4);
  border-radius: 20px;
  min-height: 300px;
  padding: 2em;
  background: linear-gradient(0deg, #ffffff 60%, #efe9f4 40%);
  transition: all linear 0.1s;
  &:hover {
    border: 4px solid rgba(72, 77, 109, 1);
  }
`;

const PhotoContainer = styled.div`
  /* max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  background-image: url(${props => props.photo});
  background-position: center; */
    width: 150px;
    height: 150px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.3);
`;

const Photo = styled.img`
  display: inline-block;
  margin: 0 auto;
  height: 130%;
  width: auto;
`;

const WardSummary = props => {
  const twitterProfile = /[^/]*$/.exec(props.wardData.counsillor.twitter)[0];
  console.log(props.key);
  return (
    <Card>
      <Link to={`/Ward/${props.wardID}`}>
        <h2>{props.wardData.name}</h2>
      </Link>
      <div>
        <div>
          <h3>{props.wardData.counsillor.name}</h3>
          {/* <a>
            <i class="fab fa-twitter"></i>
          </a>

          <a href={`mailto:${props.wardData.counsillor.email}`}>
            <i class="far fa-envelope"></i>
          </a> */}
        </div>
        <PhotoContainer photo={props.wardData.counsillor.photo}>
          {<Photo src={props.wardData.counsillor.photo} alt="" />}
        </PhotoContainer>
      </div>
      <TwitterTimelineEmbed
        className="twitterEmbed"
        sourceType="profile"
        screenName={twitterProfile}
        options={{ height: 200 }}
      />
    </Card>
  );
};

export default WardSummary;

// on click of ward name:
//navigate to that wards profile page
//include way to get back to the main page

//OR

//modal.
