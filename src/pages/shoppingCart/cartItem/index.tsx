import * as React from 'react';
import {useDispatch} from "react-redux";

import {Button} from "@/components/button";
import {ICartItem} from "@/types/models/cart";
import {changeCartItemQuantityAction, deleteCartItemAction} from "@/store/cart/actions";
import {Input} from "@/components/input";

import * as style from './style.scss';

interface ICartItemProps {
    item: ICartItem;
}

export const CartItem: React.FC<ICartItemProps> = ({item: {id, image, title, description, price, quantity}}) => {
    const dispatch = useDispatch();

    const handleQuantityIncrement = React.useCallback(() => {
        dispatch(changeCartItemQuantityAction(id, quantity + 1));
    }, [id, quantity]);

    const handleQuantityDecrement = React.useCallback(() => {
        dispatch(changeCartItemQuantityAction(id, quantity - 1));
    }, [id, quantity]);

    const handleRemove = React.useCallback(() => {
        dispatch(deleteCartItemAction(id));
    }, [id]);

    return (
        <div className={style.cart_item} data-testid={`cartItem${id}`}>
            <div className={style.image}>
                <img src={image} alt={title}/>
            </div>
            <div className={style.info}>
                <h4> {title} </h4>
                <p> {description} </p>
                <Button size="small" onClick={handleRemove}> remove </Button>
            </div>
            <div className={style.quantity}>
                <Button disabled={quantity === 1} onClick={handleQuantityDecrement}>
                    -
                </Button>
                <Input
                    disabled
                    value={`${quantity}`}
                />
                <Button onClick={handleQuantityIncrement}>
                    +
                </Button>
            </div>
            <div className={style.total_price}>
                $ {price * quantity}
            </div>
        </div>
    );
};
