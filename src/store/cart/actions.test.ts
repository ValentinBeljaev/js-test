import axios from 'axios';

import * as fixtures from './fixtures';
import * as actions from './actions';

jest.mock('axios');

const mockedAxios = <jest.Mocked<typeof axios>>axios;

describe('Cart Actions', () => {
    test('fetchCartAction', () => {
        const promise = new Promise(resolve => resolve());
        mockedAxios.get.mockReturnValueOnce(promise);
        expect(actions.fetchCartAction()).toEqual({type: actions.FETCH_CART, payload: promise});
        expect(mockedAxios.get).toHaveBeenCalledWith('/server/cart.json');
    });

    test('addProductCartAction', () => {
        expect(actions.addProductCartAction(fixtures.ProductItemFixture)).toEqual({
            type: actions.ADD_PRODUCT_TO_CART,
            payload: fixtures.ProductItemFixture
        });
    });

    test('changeCartItemQuantityAction', () => {
        expect(actions.changeCartItemQuantityAction(10, 100)).toEqual({
            type: actions.CHANGE_CART_ITEM_QUANTITY_ACTION,
            payload: {id: 10, quantity: 100}
        });
    });

    test('deleteCartItemAction', () => {
        expect(actions.deleteCartItemAction(100)).toEqual({type: actions.DELETE_PRODUCT_FROM_CART, payload: 100});
    });
});
