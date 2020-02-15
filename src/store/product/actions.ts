import axios from 'axios';
import {IFetchProductAction} from './types';
import {IProductResponse} from "@/types/responses/product";

export const FETCH_PRODUCT = 'PRODUCT/FETCH_PRODUCT';
export const FETCH_PRODUCT_PENDING = 'PRODUCT/FETCH_PRODUCT_PENDING';
export const FETCH_PRODUCT_FULFILLED = `PRODUCT/FETCH_PRODUCT_FULFILLED`;

export const fetchProductAction = (): IFetchProductAction => ({
    type: FETCH_PRODUCT,
    payload: axios.get<IProductResponse>('/server/product.json')
});

