import axios from 'axios';
import {
    IFetchCartAction,
    IAddProductToCartAction,
    IChangeCartItemQuantityAction,
    IDeleteProductFromCartAction
} from './types';
import {ICartResponse} from "@/types/responses/cart";
import {IProductItem} from "@/types/models/product";

export const FETCH_CART = 'CART/FETCH_CART';
export const FETCH_CART_PENDING = 'CART/FETCH_CART_PENDING';
export const FETCH_CART_FULFILLED = `CART/FETCH_CART_FULFILLED`;

export const ADD_PRODUCT_TO_CART = 'CART/ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'CART/DELETE_PRODUCT_FROM_CART';
export const CHANGE_CART_ITEM_QUANTITY_ACTION = 'CART/CHANGE_QUANTITY';

export const fetchCartAction = (): IFetchCartAction => ({
    type: FETCH_CART,
    payload: axios.get<ICartResponse>('/server/cart.json')
});

export const addProductCartAction = (payload: IProductItem): IAddProductToCartAction => ({
    type: ADD_PRODUCT_TO_CART,
    payload
});

export const changeCartItemQuantityAction = (id: number, quantity: number): IChangeCartItemQuantityAction => ({
    type: CHANGE_CART_ITEM_QUANTITY_ACTION,
    payload: { id, quantity }
});

export const deleteCartItemAction = (id: number): IDeleteProductFromCartAction => ({
    type: DELETE_PRODUCT_FROM_CART,
    payload: id
});

