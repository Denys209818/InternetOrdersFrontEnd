import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChangeItemType, DishCart } from "../types/dishTypes";

export type CartType = {
    dishes: DishCart[];
    isOpen: boolean;
};

const initialState: CartType = {
    isOpen: false,
    dishes: [],
};

const cartSlice = createSlice({
    initialState: initialState,
    reducers: {
        setCartItems(state: CartType, action: PayloadAction<DishCart[]>) {
            return {
                ...state,
                dishes: action.payload
            };
        },
        addToCart(state: CartType, action: PayloadAction<DishCart>) {
            state.dishes.push(action.payload);
        },
        changeCartItem(state: CartType, action: PayloadAction<ChangeItemType>) {
            return {
                ...state,
                dishes: state.dishes.map(el => {
                    if (el.id === action.payload.id) {
                        return {
                            ...el,
                            count: el.count + action.payload.payload
                        };
                    }

                    return el;
                })
            };
        },
        removeCartItem(state: CartType, action: PayloadAction<string>) {
            return {
                ...state, 
                dishes: state.dishes.filter(el => el.id !== action.payload),
            };
        },
        changeVisibilityCart(state: CartType, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
    },
    name: 'cart'
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;