import * as React from 'react';
import {ShoppingCart} from "@/pages/shoppingCart";
import {Provider} from 'react-redux';
import {store} from "@/store";

export const Router: React.FC = () => {
    return (
        <Provider store={store}>
            <ShoppingCart/>
        </Provider>
    )
};


