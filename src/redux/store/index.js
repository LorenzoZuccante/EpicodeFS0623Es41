import { combineReducers, configureStore } from "@reduxjs/toolkit";
import updateFavouritesReducer from "../reducers/updateFavourites";
import getSearchResultReducer from "../reducers/updateSearch";

const mainReducer = combineReducers({
    favour: updateFavouritesReducer,
    search: getSearchResultReducer,
})

const store = configureStore({
    reducer: mainReducer
})

export default store