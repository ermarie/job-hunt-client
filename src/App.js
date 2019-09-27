import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import CompaniesList from './containers/CompaniesList'
import Company from './components/Company'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
        <NavBar />

        <Route path="/" exact component={Home} />
        <Route exact path="/companies" component={CompaniesList} />
        <Route path="/companies/:id" component={Company} />

    </Router>
  );
}

export default App


