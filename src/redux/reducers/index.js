const initialState = {
    jobsStates: {
        favourites: [], // array contenente i preferiti
        searchResult: []
    }
}

const mainReducer = (
    state = initialState, // stato attuale, inizialmente il valore di default è vuoto, verrà aggiornato dai component
    action
) => {
    // descrizione della logica di funzionamento del reducer, ovvero il calcolo dello stato dell'app
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                jobsStates: {
                    ...state.jobsStates,
                    favourites: [...state.jobsStates.favourites, action.payload]
                }
            }
        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                jobsStates: {
                    ...state.jobsStates,
                    favourites: state.jobsStates.favourites.filter((favourite, i) => i !== action.payload)
                }
            }
        case 'UPDATE_SEARCH':
            return {
                ...state,
                jobsStates: {
                    ...state.jobsStates,
                    searchResult: [action.payload]
                }
            }
        default:
            return state
    }
}

export default mainReducer