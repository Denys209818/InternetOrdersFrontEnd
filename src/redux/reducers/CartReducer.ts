import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChangeItemType, DishCart } from "../types/dishTypes";

const initialState: DishCart[] = [];

const cartSlice = createSlice({
    initialState: initialState,
    reducers: {
        setCartItems(state: DishCart[], action: PayloadAction<DishCart[]>) {
            return action.payload;
        },
        addToCart(state: DishCart[], action: PayloadAction<DishCart>) {
            state.push(action.payload);
        },
        changeCartItem(state: DishCart[], action: PayloadAction<ChangeItemType>) {
            return state.map(el => {
                if (el.id === action.payload.id) {
                    return {
                        ...el,
                        count: el.count + action.payload.payload
                    };
                }

                return el;
            });
        },
        removeCartItem(state: DishCart[], action: PayloadAction<string>) {
            return state.filter(el => el.id !== action.payload);
        },
    },
    name: 'cart'
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;