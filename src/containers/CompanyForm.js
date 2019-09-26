import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCompany } from '../actions/companies'

class CompanyForm extends Component {

    state = {
        name: '',
        url: '',
        mission: '',
        active: false,
        jobTitle: '',
        jobInfo: '',
        loading: false
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

    handleOnSubmit = e => {
        e.preventDefault()
        const company = {...this.state}
        this.props.addCompany(company)
        this.setState = {
            name: '',
            url: '',
            mission: '',
            active: false,
            jobTitle: '',
            jobInfo: '',
            loading: false
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleOnChange} />
                    </label>
                    <label>
                        URL:
                        <input type="text" value={this.state.url} onChange={this.handleOnChange} />
                        </label>
                    <label>
                        Mission:
                        <input type="text" value={this.state.mission} onChange={this.handleOnChange} />
                    </label>
                    <br />
                    <label>
                        ACTIVE:
                        <input type="radio" value="true" onChange={this.handleOnChange} naem="true" />
                        Inactive:
                        <input type="radio" value="false" onChange={this.handleOnChange} checked/>
                    </label>
                    <br />
                    <label>
                        Job Title:
                        <input type="text" value={this.state.jobTitle} onChange={this.handleOnChange} />
                    </label>
                    <label>
                        Job Info:
                        <input type="text" value={this.state.jobInfo} onChange={this.handleOnChange} />
                    </label>
                    <button type="submit">Add Company</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addCompany })(CompanyForm)