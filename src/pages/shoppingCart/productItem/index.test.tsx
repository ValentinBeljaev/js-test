import * as React from 'react';
import {Provider} from 'react-redux';
import createMockStore from 'redux-mock-store';
import {render, fireEvent, screen} from '@testing-library/react';
import {ProductItemFixture} from '@/store/cart/fixtures';
import * as actions from '@/store/cart/actions';

import {ProductItem} from "./index";

jest.mock('@/store/cart/actions');

const mockStore = createMockStore([]);
const mockedActions = actions as jest.Mocked<typeof actions>;

describe('ProductItem', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
        store.dispatch = jest.fn();
        mockedActions.changeCartItemQuantityAction.mockReset();
        render(
            <Provider store={store}>
                <ProductItem item={ProductItemFixture}/>
            </Provider>
        );
    });

    it('should render image, title and price', () => {
        expect(screen.getByText(ProductItemFixture.title)).toBeTruthy();
        expect(screen.getByAltText(ProductItemFixture.title)).toBeTruthy();
        expect(screen.getByText(`Price: $ ${ProductItemFixture.price}`)).toBeTruthy();
    });

    it('should call action on add to cart button click', () => {
        fireEvent.click(screen.getByText('add to cart'));
        expect(mockedActions.addProductCartAction).toHaveBeenCalledTimes(1);
        expect(mockedActions.addProductCartAction).toHaveBeenCalledWith(ProductItemFixture);
    });
});

