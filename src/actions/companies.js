export const getCompanies = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_COMPANIES'})
        return fetch('./companies')
        .then(resp => resp.json())
        .then(companies => dispatch({type: 'FETCH_COMPANIES', payload: companies}))
    }
}

export const addCompany = (company) => {
    return (diapatch) => {
        dispatch({type: 'ADD_COMPANY', company})
        return fetch('/companies', {
            method: 'POST',
            body: JSON.stringify(company),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(company => dispatch({type: 'COMPANY_ADDED', payload: company}))
    }
}