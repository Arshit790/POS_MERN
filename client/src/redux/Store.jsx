import {combineReducers,applyMiddleware} from 'redux'
import { legacy_createStore as createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { RootReducer } from './RootReducer';

const finalReducer = combineReducers({
  RootReducer,
})

const initialState = {
  RootReducer : {
    cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') ) 
    : [],
  },
}

const middleware = [thunk]

const Store = createStore(finalReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default Store