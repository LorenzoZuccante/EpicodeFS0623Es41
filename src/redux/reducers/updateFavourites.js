import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions"

const initialState = {
    favourites: []
}

const updateFavouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(favourite => favourite !== action.payload)
            }

        default:
            return state
    }
}

export default updateFavouritesReducer