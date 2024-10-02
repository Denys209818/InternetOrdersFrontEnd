import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DishType {
    id: number;
    title: string;
    description: string;
    images: string[];
    ingredients: string[];
}

export interface AddDish {
    title: string;
    description: string;
    images: string[];
    ingredients: string[];
}

const initialDishes: DishType[] = [];

const dishSlice = createSlice({
    name: 'dish',
    initialState: initialDishes,
    reducers: {
        add(state: DishType[], action: PayloadAction<AddDish>) {
            
        },
        remove(state: DishType[], action: PayloadAction<number>) {
            
        },
        update(state: DishType[], action: PayloadAction<DishType>) {

        }
    }
});

export const { actions, reducer } = dishSlice;