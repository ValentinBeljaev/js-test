import {
    FETCH_PRODUCT_PENDING,
    FETCH_PRODUCT_FULFILLED
} from './actions';
import {IProductActions, IProductState} from "@/store/product/types";


export const defaultState: IProductState = {
    status: '',
    items: []
};

export function reducer(
    state: IProductState = defaultState,
    action: IProductActions
): IProductState {
    switch (action.type) {
        default:
            return state;
        case FETCH_PRODUCT_PENDING:
            return {...defaultState, status: 'pending'};
        case FETCH_PRODUCT_FULFILLED:
            return {...state, status: 'fulfilled', ...action.payload.data};
    }
}
