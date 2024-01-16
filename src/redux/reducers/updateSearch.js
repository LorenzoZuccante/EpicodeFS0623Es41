import { GET_SEARCH_RESULT } from "../actions"

const initialState = {
    searchResult: []
}

const getSearchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.payload
            }

        default:
            return state
    }
}

export default getSearchResultReducer