import {combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducer"
const RootReducers = combineReducers({
    user: userReducer
})

const store = configureStore({
    reducer: RootReducers
})
export default store
