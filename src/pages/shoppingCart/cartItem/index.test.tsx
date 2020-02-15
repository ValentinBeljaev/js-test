import * as React from 'react';
import {Provider} from 'react-redux';
import createMockStore from 'redux-mock-store';
import {render, fireEvent, screen} from '@testing-library/react';
import {CartItemFixture} from '@/store/cart/fixtures';
import * as actions from '@/store/cart/actions';

import {CartItem} from "./index";

jest.mock('@/store/cart/actions');

const mockStore = createMockStore([]);
const mockedActions = actions as jest.Mocked<typeof actions>;

describe('CartItem', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
        store.dispatch = jest.fn();
        mockedActions.changeCartItemQuantityAction.mockReset();
        render(
            <Provider store={store}>
                <CartItem item={CartItemFixture}/>
            </Provider>
        );
    });

    it('should render title, description, image and price', () => {
        expect(screen.getByText(CartItemFixture.title)).toBeTruthy();
        expect(screen.getByText(CartItemFixture.description)).toBeTruthy();
        expect(screen.getByAltText(CartItemFixture.title)).toBeTruthy();
        expect(screen.getByText(`$ ${CartItemFixture.price * CartItemFixture.quantity}`)).toBeTruthy();
    });

    it('should call action on decrement button click', () => {
        fireEvent.click(screen.getByText('-'));
        expect(mockedActions.changeCartItemQuantityAction).toHaveBeenCalledTimes(1);
        expect(mockedActions.changeCartItemQuantityAction).toHaveBeenCalledWith(CartItemFixture.id, 1);
    });

    it('should call action on increment button click', () => {
        fireEvent.click(screen.getByText('+'));
        expect(mockedActions.changeCartItemQuantityAction).toHaveBeenCalledTimes(1);
        expect(mockedActions.changeCartItemQuantityAction).toHaveBeenCalledWith(CartItemFixture.id, 3);
    });

    it('should call action on remove button click', () => {
        fireEvent.click(screen.getByText('remove'));
        expect(mockedActions.deleteCartItemAction).toHaveBeenCalledTimes(1);
        expect(mockedActions.deleteCartItemAction).toHaveBeenCalledWith(CartItemFixture.id);
    });
});

