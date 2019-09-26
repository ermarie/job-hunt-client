export default (state = {companies: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_COMPANIES':
            return {
                ...state, 
                loadingCompanies:true
            }
        case 'FETCH_COMPANIES':
            return {
                companies: action.payload,
                loadingCompanies: false
            }
        default: 
            return state
    }
}