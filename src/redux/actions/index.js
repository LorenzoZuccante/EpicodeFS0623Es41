export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT'

export const addToFavouritesAction = (data) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: data
    }
}

export const removeFromFavouritesAction = (data) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: data
    }
}

export const getSearchResultAction = (query) => {
    return async dispatch => {
        try {
            const res = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?search=' + query + '&limit=20')
            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: GET_SEARCH_RESULT,
                    payload: data
                })
            } else {
                throw new Error('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log(err)
        }
    }
}