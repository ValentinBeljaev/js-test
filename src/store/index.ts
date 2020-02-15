import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import {reducer as cart} from './cart/reducer';
import {reducer as product} from './product/reducer';

export const reducer = combineReducers({
    cart,
    product
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(promise)));

export type StoreType = ReturnType<typeof reducer>;
