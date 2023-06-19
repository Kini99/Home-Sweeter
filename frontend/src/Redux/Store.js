import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as BuyReducer } from "./BuyReducer/reducer";
import { adminPropertyReducer } from "./admin/adminProperty/adminPropertyReducer";
import { adminUserReducer } from "./admin/adminUser/adminUserReducer";
import { adminDataReducer } from "./admin/adminData/adminDataReducer";
const rootReducer = combineReducers({
  BuyReducer,
  adminPropertyReducer,
  adminUserReducer,
  adminDataReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
