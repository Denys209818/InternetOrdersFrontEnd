import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
    id: number;
    firstName: string;
    secondName: string;
    email: string;
    token: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserRegister {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
}

const initialUser: UserType = {
    id: 0,
    firstName: '',
    secondName: '',
    email: '',
    token: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialUser,
    reducers: {
        login(state: UserType, action: PayloadAction<UserLogin>) {

        },

        register(state: UserType, action: PayloadAction<UserRegister>) {

        }
    }
});

export const { actions, reducer  } = authSlice;