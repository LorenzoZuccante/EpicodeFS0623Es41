import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import { useEffect } from "react";

const store = configureStore({
    reducer: mainReducer
})

export default store