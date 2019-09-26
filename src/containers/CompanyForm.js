import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCompanies } from '../actions/companies'

class CompanyForm extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, { addCompanies })(CompanyForm)