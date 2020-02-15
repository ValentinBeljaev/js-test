import {createSelector} from "reselect";
import {StoreType} from '@/store';
import {ICartItem} from '@/types/models/cart';
import {ICartState} from "@/store/cart/types";

export const getCart = (store: StoreType) => store.cart;

export const getCartItems = createSelector(getCart, cart => cart.items);

export const getTotalCartItems = createSelector(getCartItems, items => items.reduce((total: number, item: ICartItem): number => total + item.quantity, 0));

export const getTotalCartPrice = createSelector(getCartItems, items => items.reduce((price: number, item: ICartItem): number => price + (item.price * item.quantity), 0));

export const isCartRejected = createSelector(getCart, (cart: ICartState): boolean => cart.status === 'rejected');

export const isCartPending = createSelector(getCart, (cart: ICartState): boolean => cart.status === 'pending');

export const isCartEmpty = createSelector(getCart, getTotalCartItems, (cart: ICartState, total: number): boolean => cart.status === 'fulfilled' && total === 0);
