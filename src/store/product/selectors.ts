import {StoreType} from "@/store";
import {createSelector} from "reselect";

export const getProduct = (store: StoreType) => store.product;

export const getProductItems = createSelector(getProduct, product => product.items);

export const isProductRejected = createSelector(getProduct, product => product.status === 'rejected');

export const isProductPending = createSelector(getProduct, product => product.status === 'pending');
