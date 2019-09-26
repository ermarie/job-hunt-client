import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCompany } from '../actions/companies'

class CompanyForm extends Component {

    state = {
        name: '',
        url: '',
        mission: '',
        active: false,
        job_title: '',
        job_info: '',
        loading: false
    }

    handleOnChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]: value
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
            job_title: '',
            job_info: '',
            loading: false
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                    </label>
                    <label>
                        URL:
                        <input type="text" name="url" value={this.state.url} onChange={this.handleOnChange} />
                        </label>
                    <label>
                        Mission:
                        <input type="text" name="mission" value={this.state.mission} onChange={this.handleOnChange} />
                    </label>
                    <br />
                    <label>
                        ACTIVE:
                        <input type="radio" name="active" value="true" onChange={this.handleOnChange} />
                        Inactive:
                        <input type="radio" name="active" value="false" onChange={this.handleOnChange} checked/>
                    </label>
                    <br />
                    <label>
                        Job Title:
                        <input type="text" name="job_title" value={this.state.job_title} onChange={this.handleOnChange} />
                    </label>
                    <label>
                        Job Info:
                        <input type="text" name="job_info" value={this.state.job_info} onChange={this.handleOnChange} />
                    </label>
                    <button type="submit">Add Company</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addCompany })(CompanyForm)