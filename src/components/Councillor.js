import React from 'react';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 1em auto;
  /* box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.3); */
`;

const Photo = styled.img`
  display: inline-block;
  margin: 0 auto;
  height: 130%;
  width: auto;
`;

const SocialContainer = styled.div`
  margin: 1em auto;
  i {
    font-size: 1.4em;
    padding: 0.5em;
  }
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
          <SocialContainer>
            <a href={`https://www.twitter.com/${twitterName}`}>
              <i className="fab fa-twitter"></i>
            </a>

            <a href={`mailto:${props.councillor.email}`}>
              <i className="far fa-envelope"></i>
            </a>
          </SocialContainer>
        </>
      ) : null}
    </div>
  );
};

export default Councillor;
