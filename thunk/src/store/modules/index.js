import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

// também adicionamos o thunk 
import thunk from "redux-thunk";

import { userReducer } from "./user/reducer";

const reducers = combineReducers({ user: userReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
