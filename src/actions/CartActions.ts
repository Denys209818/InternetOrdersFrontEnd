import { cartActions } from "../redux/reducers/CartReducer";
import { AppDispatch } from "../redux/store";
import { ChangeItemType, DishCart } from "../redux/types/dishTypes";
import { addCartItem, editCartItem, removeCartItem } from "../tools/localStorageUtils";

export const SetCartItemsAction = (dishes: DishCart[]) => (dispatch: AppDispatch) => {
    dispatch(cartActions.setCartItems(dishes));
}

export const AddToCartAction = (dish: DishCart) => (dispatch: AppDispatch) => {
    addCartItem(dish);

    dispatch(cartActions.addToCart(dish));
}

export const ChangeCartItemAction = (change: ChangeItemType) => (dispatch: AppDispatch) => {
    editCartItem(change.id, change.payload);

    dispatch(cartActions.changeCartItem(change));
}

export const RemoveCartItemAction = (id: string) => (dispatch: AppDispatch) => {
    removeCartItem(id);

    dispatch(cartActions.removeCartItem(id));
}
