import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  render() {


    return (
      <div className="App">
        <h3>Job Hunt App</h3>
        <h2>Create Company</h2>
        <hr />
        <h2>Company List</h2>
      </div>
    )
  }

  
}

export default connect()(App);
