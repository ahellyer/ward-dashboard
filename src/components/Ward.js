import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Councillor from './Councillor';
import SingleVitalsSet from './SingleVitalsSet';
import TwitterFeed from './TwitterFeed';

const TwoColumn = styled.div`
  /* background: red; */
  border-top: 2px solid darkgrey;
  display: flex;
  min-height: 500px;
  h2 {
    font-size: 2em;
  }

  .councillorContainer {
    width: 25%;
    background: aliceblue;
    /* background: #ffe74c; */
  }
  .vitalsLayout {
    background: #efe9f4;
    background: #35a7ff;
    background: #4f6d7a;
    background: #bbcde5;
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
    color: #222222;
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

  handleSubmit = e => {
    e.preventDefault();
    const compareData = this.props.wards.find(ward => {
      return ward.name === this.state.currentSelection;
    });
    this.setState({
      compareData
    });
  };

  // could use react select package to get key
  handleSelection = e => {
    console.log(e.target.value);
    const currentSelection = e.target.value;
    this.setState({
      currentSelection
    });
  };

  createVitalsObject = vitals => {
    const incomeVitals = {
      symbol: '💰',
      data: [
        {
          label: 'Average Household Income',
          value: vitals.averageHouseholdIncome,
          isCurrency: true
        },
        {
          label: 'Median Household Income',
          value: vitals.medianHouseholdIncome,
          isCurrency: true
        }
      ]
    };

    // could add type value instead of boolean and check w switch statement
    const populationVitals = {
      symbol: '👨‍👨‍👧‍👦',
      data: [
        {
          label: 'Population',
          value: vitals.population,
          isCurrency: false
        },
        {
          label: 'People / Household',
          value: vitals.peoplePerHousehold,
          isCurrency: false
        }
      ]
    };

    const housingVitals = {
      symbol: '🏠',
      data: [
        {
          label: 'Renters',
          value: vitals.percentRenters,
          isCurrency: false,
          isPercentage: true
        },
        {
          label: 'Owners',
          value: vitals.percentOwners,
          isCurrency: false,
          isPercentage: true
        }
      ]
    };

    return [incomeVitals, populationVitals, housingVitals];
  };

  render() {
    // console.log(this.props.wards);
    const councillor = this.props.wards[Number(this.props.match.params.id) - 1]
      .counsillor;

    const vitals = this.createVitalsObject(
      this.props.wards[Number(this.props.match.params.id) - 1].overview
    );

    const compareVitals =
      this.state.compareData &&
      this.createVitalsObject(this.state.compareData.overview);

    const twitterName = /[^/]*$/.exec(councillor.twitter)[0];

    // console.log(this.props.wards);
    return (
      <div>
        <TwoColumn>
          <div className="councillorContainer">
            <Councillor councillor={councillor} extended={true} />
            <TwitterFeed name={twitterName} />
          </div>
          <div className="vitalsLayout">
            <h2>
              Ward {this.props.match.params.id}:
              {this.props.wards[Number(this.props.match.params.id) - 1].name}
            </h2>
            <div className="vitalsContainer">
              {vitals.map(vital => {
                return (
                  <SingleVitalsSet symbol={vital.symbol} vitals={vital.data} />
                );
              })}
            </div>

            <form onSubmit={this.handleSubmit}>
              <select onChange={this.handleSelection}>
                <option>Choose a ward</option>
                {this.props.wards.map((ward, i) => {
                  return <option key={i}>{ward.name}</option>;
                })}
              </select>
              <button>GO!</button>
            </form>

            {this.state.compareData &&
              compareVitals.map(vital => {
                return (
                  <SingleVitalsSet symbol={vital.symbol} vitals={vital.data} />
                );
              })}

            <Pagination>
              {Number(this.props.match.params.id) - 1 !== 0 && (
                <Link
                  className="previousPage"
                  to={`/Wards/${Number(this.props.match.params.id) - 1}`}
                >
                  <span>
                    <i className="fas fa-long-arrow-alt-left"></i>
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
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                  <strong>Next Ward</strong>
                </Link>
              )}
              {/* <Link to="/">Home</Link> */}
            </Pagination>
          </div>
        </TwoColumn>
      </div>
    );
  }
}

// export default withRouter(Ward);
export default Ward;
