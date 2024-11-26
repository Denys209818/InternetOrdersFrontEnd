import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishType } from "./DishReducer";

export interface AdditionalProp {
    id: number;
    title: string;
    price: number;
}

export interface OrderType {
    expectationTimeType: string;
    expectHour?: number;
    expectMinute?: number;
    day?: string;
    paymentType: string;
    additionalsList: AdditionalProp[];
}

export interface OrderTypeClear {
    expectHour: number;
    expectMinute: number;
    day: number;
}

export interface AddOrder {
    userId: number;
    expectation: Date;
    dishes: DishType[];
}

const initialDishes: OrderType = {
    expectationTimeType: '',
    expectHour: undefined,
    expectMinute: undefined,
    day: undefined,
    paymentType: '',
    additionalsList: []
};

const orderSlice = createSlice({
    name: 'order',
    initialState: initialDishes,
    reducers: {
        setExpectationTimeClear(state: OrderType) {
            state.expectationTimeType = 'clear';
        },
        setExpectationTimeFree(state: OrderType) {
            state.expectationTimeType = 'free';
            state.day = undefined;
            state.expectHour = undefined;
            state.expectMinute = undefined;
        },
        setExpectationTimeDay(state: OrderType, action: PayloadAction<'today'|'tomorrow'>) {
            state.day = action.payload;
        },
        setExpectationTimeHour(state: OrderType, action: PayloadAction<number>) {
            state.expectHour = action.payload;
        },
        setExpectationTimeMinute(state: OrderType, action: PayloadAction<number>) {
            state.expectMinute = action.payload;
        },
        setPaymentType(state: OrderType, payload: PayloadAction<string>) {
            state.paymentType = payload.payload;
        },
        clear(state: OrderType) {
            state.day = undefined;
            state.expectHour = undefined;
            state.expectMinute = undefined;
            state.expectationTimeType = '';
            state.paymentType = '';
        },
        addAdditionalsList(state: OrderType, payload: PayloadAction<AdditionalProp>) {
            state.additionalsList.push(payload.payload);
        },
        removeAdditionalsList(state: OrderType, payload: PayloadAction<number>) {
            return {
                ...state,
                additionalsList: state.additionalsList.filter(el => el.id !== payload.payload)
            };
        }
    }
});

export const { actions: orderActions, reducer } = orderSlice;