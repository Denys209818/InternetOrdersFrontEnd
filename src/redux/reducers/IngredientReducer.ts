import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IngredientType {
    id: number;
    title: string;
}

export interface AddIngredient {
    title: string;
}

const initialDishes: IngredientType[] = [];

const ingredientsSlice = createSlice({
    name: 'ingredient',
    initialState: initialDishes,
    reducers: {
        add(state: IngredientType[], action: PayloadAction<AddIngredient>) {
            
        },
        remove(state: IngredientType[], action: PayloadAction<number>) {
            
        },
        update(state: IngredientType[], action: PayloadAction<AddIngredient>) {

        }
    }
});

export const { actions, reducer } = ingredientsSlice;