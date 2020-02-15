import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Header} from "@/components/header";
import {Container} from "@/components/container";
import {Preloader} from "@/components/preloader";
import {fetchCartAction} from "@/store/cart/actions";
import {fetchProductAction} from "@/store/product/actions";
import {getCartItems, getTotalCartItems, isCartEmpty, isCartPending} from "@/store/cart/selectors";
import {getProductItems, isProductPending} from "@/store/product/selectors";
import {ProductItem} from "@/pages/shoppingCart/productItem";

import {CartItem} from "./cartItem";
import {Summary} from './summary';
import {CartEmpty} from './cartEmpty';
import * as style from './style.scss';

export const ShoppingCart: React.FC = () => {
    const dispatch = useDispatch();

    const isCartLoading = useSelector(isCartPending);
    const isRecommendedLoading = useSelector(isProductPending);
    const cartItems = useSelector(getCartItems);
    const totalCartItems = useSelector(getTotalCartItems);
    const isEmpty = useSelector(isCartEmpty);
    const productItems = useSelector(getProductItems);

    React.useEffect(() => {
        dispatch(fetchCartAction());
        dispatch(fetchProductAction());
    }, []);

    return (
        <div className={style.cart_page}>
            <Header/>
            <Container>
                <div className={style.title_info}>
                    <h1> Shopping Cart </h1>
                    <span> {totalCartItems} item in cart </span>
                </div>

                {isCartLoading ?
                    <Preloader/> :
                    (isEmpty ?
                            <CartEmpty/> :
                            (<div className={style.cart}>
                                <div className={style.cart_items}>
                                    {
                                        cartItems.map(item => (
                                                <CartItem key={item.id} item={item}/>
                                            )
                                        )
                                    }
                                </div>
                                <Summary/>
                            </div>)
                    )
                }

                {
                    isRecommendedLoading ?
                        <Preloader/> :
                        (<div className={style.recommend}>
                            <h2> Recommended for You </h2>
                            <div className={style.container_product}>
                                {
                                    productItems.map(item => {
                                        return (
                                            <ProductItem key={item.id} item={item}/>
                                        )
                                    })
                                }
                            </div>
                        </div>)
                }
            </Container>
        </div>
    )
};
