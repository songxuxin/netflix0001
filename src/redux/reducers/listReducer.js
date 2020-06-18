const initState = { isLoading: false, data: [], error: null};

const listReducer = (state = initState, action) => {
    switch(action.type){
        case 'REQUEST_FETCHING':
            return {
                ...state,
                isLoading: true
            }
        case 'REQUEST_FETCH_SUCCESS':
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        case 'REQUEST_FETCH_FAIL':
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
}

export default listReducer;