import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishType } from "./DishReducer";

export interface OrderType {
    id: number;
    userId: number;
    expectation: Date;
    dishes: DishType[];
}

export interface AddOrder {
    userId: number;
    expectation: Date;
    dishes: DishType[];
}

const initialDishes: OrderType[] = [];

const ingredientsSlice = createSlice({
    name: 'ingredient',
    initialState: initialDishes,
    reducers: {
        add(state: OrderType[], action: PayloadAction<AddOrder>) {
            
        },
        remove(state: OrderType[], action: PayloadAction<number>) {
            
        },
        update(state: OrderType[], action: PayloadAction<AddOrder>) {

        }
    }
});

export const { actions, reducer } = ingredientsSlice;