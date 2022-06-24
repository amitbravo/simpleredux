import { createStore, combineReducers } from 'redux'
import counterReducer from './counter'
import userReducer from './userReducer'

const reducer = combineReducers({ userReducer, counterReducer })

const store = createStore(reducer)


export default store;
