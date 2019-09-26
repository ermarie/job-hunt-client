import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCompanies } from '../actions/companies'

class CompanyForm extends Component {

    state= {
        name: '',
        url: '',
        mission: '',
        active: false,
        jobTitle: '',
        jobInfo: '',
        loadingCompanies: false
    }

    handleOnChange = e => {
        const {value} = e.target
        this.setState({
            name: value.name,
            url: value.url,
            mission: value.mission,
            active: value.active,
            jobTitle: value.jobTitle,
            jobInfo: value.jobInfo
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, set{ addCompanies })(CompanyForm)