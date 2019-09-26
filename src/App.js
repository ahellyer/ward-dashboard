import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//components
import WardGrid from './components/WardGrid';

import Ward from './components/Ward';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wards: []
    };
  }

  componentDidMount() {
    //make API call
    fetch('https://city-councillors-api.herokuapp.com/')
      .then(res => res.json())
      .then(res => this.setState({ wards: res[0].data }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/Ward">Ind ward page</Link>
          <header className="App-header">
            <h1>
              Dashb<span className="ward">ward</span>
            </h1>
          </header>
          <Route
            exact
            path="/"
            render={props => <WardGrid wards={this.state.wards} />}
          />
          <Route exact path="/Ward" component={Ward} />
        </div>
      </Router>
    );
  }
}

export default App;
