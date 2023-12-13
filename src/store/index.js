import { applyMiddleware, combineReducers, createStore } from 'redux'
import { categoriesReducer } from './categoriesReducer'
import {thunk} from 'redux-thunk'
import { productsListReducer } from './productsListReducer'

const rootReducer = combineReducers({
    productsList: productsListReducer,
    categories: categoriesReducer,
})
 
export const store = createStore(rootReducer, applyMiddleware(thunk))