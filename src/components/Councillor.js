import React from 'react';
import styled from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const PhotoContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto;
  /* box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.3); */
`;

const Photo = styled.img`
  display: inline-block;
  margin: 0 auto;
  height: 130%;
  width: auto;
`;

const Councillor = ({ extended, name, ...props }) => {
  const twitterName = /[^/]*$/.exec(props.councillor.twitter)[0];
  console.log(twitterName);
  return (
    <div>
      <PhotoContainer photo={props.councillor.photo}>
        {<Photo src={props.councillor.photo} alt={props.councillor.name} />}
      </PhotoContainer>
      <div>
        <h3>{props.councillor.name}</h3>
      </div>
      {extended ? (
        <>
          <div>
            <a>
              <i class="fab fa-twitter"></i>
            </a>

            <a href={`mailto:${props.councillor.email}`}>
              <i class="far fa-envelope"></i>
            </a>
          </div>
          {/* <TwitterTimelineEmbed
            className="twitterEmbed"
            sourceType="profile"
            screenName={twitterName}
            options={{ height: 400 }}
          /> */}
          {/* <a
            id="twitter-wjs"
            class="twitter-timeline"
            href={props.councillor.twitter}
            data-height="400"
            data-chrome="nofooter"
            data-link-color="#820bbb"
            data-border-color="#a80000"
          > 
            Tweets by @TwitterDev
          </a> */}
        </>
      ) : null}
    </div>
  );
};

export default Councillor;
