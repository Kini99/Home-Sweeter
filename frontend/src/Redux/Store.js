import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as BuyReducer} from "./BuyReducer/reducer"
const rootReducer = combineReducers({ 
    BuyReducer
 })

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))