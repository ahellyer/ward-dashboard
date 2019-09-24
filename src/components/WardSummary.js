import React from 'react';
import styled from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Card = styled.div`
  /* width: 25%; */
  /* background: grey; */
  border: 4px solid navy;
  border-radius: 20px;
  min-height: 300px;
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
`;

const Photo = styled.img`
  display: inline-block;
  margin: 0 auto;
  height: 130%;
  width: auto;
`;

const WardSummary = props => {
  const twitterProfile = /[^/]*$/.exec(props.wardData.counsillor.twitter)[0];
  return (
    <Card>
      <h2>{props.wardData.name}</h2>
      <div>
        <div>
          <h3>{props.wardData.counsillor.name}</h3>
          <a>
            <i class="fab fa-twitter"></i>
          </a>

          <a href={`mailto:${props.wardData.counsillor.email}`}>
            <i class="far fa-envelope"></i>
          </a>
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
