import {Action} from "redux";
import {AxiosPromise, AxiosResponse} from "axios";
import {IProductResponse} from "@/types/responses/product";
import {
    FETCH_PRODUCT,
    FETCH_PRODUCT_PENDING,
    FETCH_PRODUCT_FULFILLED
} from "./actions";
import {IProductItem} from "@/types/models/product";

export interface IProductState {
    readonly status: 'fulfilled' | 'pending' | 'rejected' | '';
    readonly items: IProductItem[];
}

export interface IFetchProductAction extends Action<typeof FETCH_PRODUCT> {
    readonly payload: AxiosPromise<IProductResponse>;
}

export interface IFetchProductPendingAction
    extends Action<typeof FETCH_PRODUCT_PENDING> {}

export interface IFetchProductFulfilledAction
    extends Action<typeof FETCH_PRODUCT_FULFILLED> {
    readonly payload: AxiosResponse<IProductResponse>;
}

export type IProductActions =
    | IFetchProductAction
    | IFetchProductPendingAction
    | IFetchProductFulfilledAction;
