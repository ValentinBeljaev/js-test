import * as React from 'react';
import {useDispatch} from 'react-redux';

import {Button} from "@/components/button";
import {addProductCartAction} from "@/store/cart/actions";
import {IProductItem} from "@/types/models/product";

import * as style from './style.scss';

interface IProductItemProps {
    item: IProductItem;
}

export const ProductItem: React.FC<IProductItemProps> = ({item}) => {
    const dispatch = useDispatch();

    const handleProductAdd = React.useCallback(() => {
        dispatch(addProductCartAction(item));
    }, [item]);

    const {image, title, price} = item;

    return (
        <div className={style.product_item}>
            <div className={style.image}>
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className={style.info}>
                <h4>{title}</h4>
                <p>Price: $ {price}</p>
            </div>
            <Button
                color="yellow"
                size="fullwidth"
                onClick={handleProductAdd}
            >
                add to cart
            </Button>
        </div>
    )
};
