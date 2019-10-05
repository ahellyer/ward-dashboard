import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

//components
import WardGrid from './components/WardGrid';
import Map from './components/Map';

import Ward from './components/Ward';
import { fetchWardsAction } from './redux/action-creators.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //get ward data
  componentDidMount() {
    //make API call
    // fetch('https://city-councillors-api.herokuapp.com/')
    //   .then(res => res.json())
    //   .then(res => this.setState({ wards: res[0].data }));
    //make API call using redux action instead of directly fetching in componentDidMount.
    this.props.fetchWards();
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1>
              Dashb<span className="ward">ward</span>
            </h1>
            <p>
              The city of Toronto is governed by the mayor, John Tory, and 25
              city councillors. Each councillor is a member of one committee and
              there are three types of committees that report to City Council.
              The mayor is a member of all committees. Committees propose,
              review and debate policies and recommendations before they are
              debated at council meetings.
            </p>
          </header>
          <Map />

          {/* <Link to="/#/Ward">Ind ward page</Link> */}
          <Route
            exact
            path="/"
            render={props => (
              <WardGrid
                wards={this.props.wards}
                isLoading={this.props.dashboardLoading}
                {...props}
              />
            )}
          />
          {this.props.wards.length > 0 ? (
            <Route
              exact
              path="/Wards/:id"
              render={props => <Ward wards={this.props.wards} {...props} />}
            />
          ) : null}
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = store => {
  return {
    wards: store.wards,
    dashboardLoading: store.dashboardLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWards: () => dispatch(fetchWardsAction())
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
