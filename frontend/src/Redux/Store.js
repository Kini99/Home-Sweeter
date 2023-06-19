import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as BuyReducer } from "./BuyReducer/reducer";
import { adminPropertyReducer } from "./admin/adminProperty/adminPropertyReducer";
import { adminUserReducer } from "./admin/adminUser/adminUserReducer";
const rootReducer = combineReducers({
  BuyReducer,
  adminPropertyReducer,
  adminUserReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
