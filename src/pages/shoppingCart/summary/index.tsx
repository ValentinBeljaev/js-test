import * as React from 'react';
import {useSelector} from 'react-redux';

import {Button} from "@/components/button";
import {getTotalCartPrice} from "@/store/cart/selectors";

import * as style from './style.scss';

export const Summary: React.FC = () => {
    const totalPrice = useSelector(getTotalCartPrice);

    return (
        <div className={style.summary}>
            <div className={style.total}>
                <div> Total:</div>
                <div> ${totalPrice} </div>
            </div>
            <Button size="fullwidth" color="yellow"> CHECKOUT </Button>
        </div>
    )
};
