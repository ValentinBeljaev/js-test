import {ICarActions, ICartState} from './types';
import {ICartItem} from "@/types/models/cart";
import {
    ADD_PRODUCT_TO_CART,
    CHANGE_CART_ITEM_QUANTITY_ACTION,
    DELETE_PRODUCT_FROM_CART,
    FETCH_CART_FULFILLED,
    FETCH_CART_PENDING,
} from './actions';


export const defaultState: ICartState = {
    status: '',
    items: []
};

export function reducer(
    state: ICartState = defaultState,
    action: ICarActions
): ICartState {
    switch (action.type) {
        default:
            return state;
        case FETCH_CART_PENDING:
            return {...defaultState, status: 'pending'};
        case FETCH_CART_FULFILLED:
            return {...state, status: 'fulfilled', ...action.payload.data};
        case ADD_PRODUCT_TO_CART:
            const {id} = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            return {
                ...state,
                items: index === -1 ?
                    [{...action.payload, quantity: 1}, ...state.items] :
                    state.items.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
            };
        case DELETE_PRODUCT_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item: ICartItem) => item.id !== action.payload),
            };
        case CHANGE_CART_ITEM_QUANTITY_ACTION:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? {
                    ...item,
                    quantity: action.payload.quantity
                } : item)
            };
    }
}
