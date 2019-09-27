import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCompanies } from '../actions/companies'
import CompanyForm from './CompanyForm'

class CompaniesList extends Component {

    componentDidMount() {
      this.props.getCompanies()
    }
  
    render() {
      const companies = this.props.companies.map((company, i) => <li key={i}>{company.name} - {company.active ? "ACTIVE" : "inactive"}</li>)
  
      return (
        <div>
          <h2>Create Company</h2>
          <CompanyForm />
          <hr />
          <h2>Companies</h2>
          <ul>
            {this.props.companyLoading ? <h3>Loading...</h3> : companies}
          </ul>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    console.log("I am state", state)
    return {
      companies: state.companyReducer.companies,
      loading: state.companyReducer.loading
    }
  }
  
  export default connect(mapStateToProps, { getCompanies })(CompaniesList);