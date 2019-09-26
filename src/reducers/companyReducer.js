export default (state = {companies: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_COMPANIES':
            return {
                ...state, 
                loading:true
            }

        case 'FETCH_COMPANIES':
            return {
                companies: action.payload,
                loading: false
            }

        case 'ADD_COMPANY':
            console.log("Got a company to add")
            return {
                ...state, 
                loading:true
            }

        case 'COMPANY_ADDED':
            console.log("Added the company")
            return {
                companies: [...state.companies, action.payload],
                loading: false
            }

        default: 
            return state
    }
}