import { Action } from "redux";
import {
    FETCH_CART,
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART,
    FETCH_CART_FULFILLED,
    FETCH_CART_PENDING,
    CHANGE_CART_ITEM_QUANTITY_ACTION
} from "./actions";
import {ICartResponse} from "@/types/responses/cart";
import { AxiosPromise, AxiosResponse } from 'axios';
import { IProductItem } from "@/types/models/product";
import {ICartItem} from "@/types/models/cart";

export interface ICartState {
    readonly status: 'fulfilled' | 'pending' | 'rejected' | '';
    readonly items: ICartItem[];
}


export interface IFetchCartAction extends Action<typeof FETCH_CART> {
    readonly payload: AxiosPromise<ICartResponse>;
}

export interface IFetchCartPendingAction
    extends Action<typeof FETCH_CART_PENDING> {}

export interface IFetchCarsFulfilledAction
    extends Action<typeof FETCH_CART_FULFILLED> {
    readonly payload: AxiosResponse<ICartResponse>;
}

export interface IAddProductToCartAction extends Action<typeof ADD_PRODUCT_TO_CART> {
    readonly payload: IProductItem;
}

export interface IDeleteProductFromCartAction extends Action<typeof DELETE_PRODUCT_FROM_CART> {
    readonly payload: number
}

export interface IChangeCartItemQuantityPayload {
    id: number;
    quantity: number;
}

export interface IChangeCartItemQuantityAction extends Action<typeof CHANGE_CART_ITEM_QUANTITY_ACTION> {
    readonly payload: IChangeCartItemQuantityPayload;
}

export type ICarActions =
    | IFetchCartAction
    | IFetchCarsFulfilledAction
    | IFetchCartPendingAction
    | IAddProductToCartAction
    | IDeleteProductFromCartAction
    | IChangeCartItemQuantityAction;
