import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styled from 'styled-components';

const TwitterContainer = styled.div`
  min-height: 400px;
`;

class TwitterFeed extends Component {
  constructor() {
    super();
    this.state = {
      twitterName: '',
      isLoading: true
    };
  }

  componentDidMount() {
    console.log('mounted');
    this.setState({
      twitterName: this.props.name
      //   isLoading: false
    });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.name !== prevProps.name) {
      //toggle loader
      this.setState({
        isLoading: false,
        twitterName: this.props.name
      });
    }
  }

  render() {
    return (
      <TwitterContainer>
        <TwitterTimelineEmbed
          key={this.state.twitterName}
          className="twitterEmbed"
          sourceType="profile"
          screenName={this.state.twitterName}
          options={{ height: 400 }}
        />
      </TwitterContainer>
    );
  }
}

export default TwitterFeed;
