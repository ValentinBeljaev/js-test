import {CartItemFixture, ProductItemFixture} from "@/store/cart/fixtures";

import {reducer, defaultState} from './reducer';
import * as actions from './actions';

describe('Cart Reducer', () => {
    test('should handle FETCH_CART_PENDING action', () => {
        const state = reducer({status: 'fulfilled', items: [CartItemFixture]}, {type: actions.FETCH_CART_PENDING});
        expect(state).toEqual({...defaultState, status: 'pending'});
    });

    test('should handle FETCH_CART_FULFILLED action', () => {
        const state = reducer({status: 'pending', items: [CartItemFixture]}, {
            type: actions.FETCH_CART_FULFILLED,
            payload: {
                data: {
                    items: [
                        CartItemFixture
                    ]
                },
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
                request: {}
            }
        });
        expect(state).toEqual({
            status: 'fulfilled', items: [
                CartItemFixture
            ]
        });
    });

    test('should handle ADD_PRODUCT_TO_CART action (adds an item)', () => {
        expect(reducer(defaultState, {type: actions.ADD_PRODUCT_TO_CART, payload: ProductItemFixture})).toEqual({
            ...defaultState,
            items: [{...ProductItemFixture, quantity: 1}]
        });
    });

    test('should handle ADD_PRODUCT_TO_CART action (updates quantity)', () => {
        expect(reducer({...defaultState, items: [{...ProductItemFixture, quantity: 1}]},
            {
                type: actions.ADD_PRODUCT_TO_CART, payload:
                ProductItemFixture
            }
        )).toEqual({
            ...defaultState,
            items: [{...ProductItemFixture, quantity: 2}]
        });
    });

    test('should handle ADD_PRODUCT_TO_CART action (adds on top)', () => {
        expect(reducer({...defaultState, items: [{...ProductItemFixture, quantity: 1, id: ProductItemFixture.id + 1}]},
            {
                type: actions.ADD_PRODUCT_TO_CART, payload:
                ProductItemFixture
            }
        )).toEqual({
            ...defaultState,
            items: [{...ProductItemFixture, quantity: 1}, {
                ...ProductItemFixture,
                quantity: 1,
                id: ProductItemFixture.id + 1
            }]
        });
    });

    test('should handle DELETE_PRODUCT_FROM_CART action', () => {
        expect(reducer({...defaultState, items: [CartItemFixture]}, {
            type: actions.DELETE_PRODUCT_FROM_CART,
            payload: CartItemFixture.id
        })).toEqual({
            ...defaultState,
            items: []
        });
    });

    test('should handle CHANGE_CART_ITEM_QUANTITY_ACTION action', () => {
        expect(reducer({...defaultState, items: [CartItemFixture]}, {
            type: actions.CHANGE_CART_ITEM_QUANTITY_ACTION,
            payload: {id: CartItemFixture.id, quantity: CartItemFixture.quantity + 1}
        })).toEqual({
            ...defaultState,
            items: [{...CartItemFixture, quantity: CartItemFixture.quantity + 1}]
        })
    });
});
