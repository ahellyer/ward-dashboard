import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

//components
import WardGrid from './components/WardGrid';
import WardSummary from './components/WardSummary';

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
      <div className="App">
        <header className="App-header">
          <h1>
            Dashb<span className="ward">ward</span>
          </h1>
        </header>

        <WardGrid>
          {/* map through wards and pass data to wardSummary card */}
          {this.state.wards &&
            this.state.wards.map(ward => (
              <WardSummary key={ward.name} wardData={ward} />
            ))}
        </WardGrid>
      </div>
    );
  }
}

export default App;
