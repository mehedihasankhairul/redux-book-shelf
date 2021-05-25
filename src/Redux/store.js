

import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    
    books: bookReducer,
})

export const store = createStore(combinedReducer, composeWithDevTools())