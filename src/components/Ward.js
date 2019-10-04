import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import styled from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Councillor from './Councillor';
import IncomeStats from './IncomeStats';
import HousingStats from './HousingStats';
import PopulationStats from './PopulationStats';

const TwoColumn = styled.div`
  /* background: red; */
  border-top: 2px solid darkgrey;
  display: flex;
  min-height: 500px;

  /* height: 50vh; */
  .councillorContainer {
    width: 25%;
    background: aliceblue;
    background: #ffe74c;
  }
  .vitalsLayout {
    background: #efe9f4;
    background: #35a7ff;
    width: 75%;
    position: relative;
    .vitalsContainer {
      display: flex;
    }
  }
`;
const Pagination = styled.div`
  border-top: solid 1px black;
  border-bottom: solid 1px black;
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 0;
  left: 0;
  a {
    display: block;
    padding: 10px;
    text-align: left;
    font-size: 1.4em;
    span {
      display: block;
      font-size: 1.5em;
    }
  }
  a.previousPage {
    border-right: solid 1px black;
    width: 25%;
  }
`;

class Ward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      currentWard: this.props.match.params.id
    };
  }

  handleRedirect = () => {
    console.log('handling redirect!');
    this.setState({ redirect: true });
  };

  render() {
    const councillor = this.props.wards[Number(this.props.match.params.id) - 1]
      .counsillor;

    const vitals = this.props.wards[Number(this.props.match.params.id) - 1]
      .overview;

    return (
      <div>
        <TwoColumn>
          <div className="councillorContainer">
            <Councillor councillor={councillor} extended={true} />
            {/* <div>
              
            </div> */}
          </div>
          <div className="vitalsLayout">
            <h2>
              Ward {this.props.match.params.id}:
              {this.props.wards[Number(this.props.match.params.id) - 1].name}
            </h2>
            <div class="vitalsContainer">
              <IncomeStats vitals={vitals} />
              <PopulationStats vitals={vitals} />
              <HousingStats vitals={vitals} />
            </div>
            <Pagination>
              {Number(this.props.match.params.id) - 1 !== 0 && (
                <Link
                  className="previousPage"
                  to={`/Wards/${Number(this.props.match.params.id) - 1}`}
                >
                  <span>
                    <i class="fas fa-long-arrow-alt-left"></i>
                  </span>
                  <strong>Previous Ward</strong>
                </Link>
              )}
              {/* disable next link if it's the last ward */}
              {Number(this.props.match.params.id) - 1 !== 24 && (
                <Link
                  className="nextPage"
                  to={`/Wards/${Number(this.props.match.params.id) + 1}`}
                >
                  <span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </span>
                  <strong>Next Ward</strong>
                </Link>
              )}
              {/* <Link to="/">Home</Link> */}
            </Pagination>
          </div>
        </TwoColumn>

        {/* disable previous link if its the first ward */}
      </div>
    );
  }
}

export default withRouter(Ward);
