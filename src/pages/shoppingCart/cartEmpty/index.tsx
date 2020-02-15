import * as React from 'react';

import * as style from './style.scss';

export const CartEmpty: React.FC = () => (
    <div className={style.cart_empty}>
        <h2>Shopping cart is empty</h2>
    </div>
);
