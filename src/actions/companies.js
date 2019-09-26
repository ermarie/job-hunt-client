export const getCompany = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_COMAPNIES'})
        return fetch('./companies')
        .then(resp => resp.json())
        .then(companies => dispatch({type: 'FETCH_COMPANIES', payload: companies}))
    }
}