import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getCompanies } from './actions/companies'

class App extends Component {

  componentDidMount() {
    this.props.getCompanies()
  }

  render() {
    const companies = this.props.companies.map((company, i) => <li key={i}>{company.name} - {company.active ? "ACTIVE" : "inactive"})</li>)

    return (
      <div className="App">
        <h3>Job Hunt App</h3>
        <h2>Create Company</h2>
        <hr />
        <h2>Company List</h2>
        {this.props.companyLoading ? <h3>Loading...</h3> : companies}
      </div>
    )
  }

  
}

const mapStateToProps = (state) => {
  console.log("I am state", state)
  return {
    companies: state.companyReducer.companies,
    companyLoading: state.companyReducer.loading
  }
}

export default connect(mapStateToProps, { getCompanies })(App);
