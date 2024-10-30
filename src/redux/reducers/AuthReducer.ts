import { createSlice } from "@reduxjs/toolkit";
import { LoginAction, RegisterAction } from "../../actions/AuthActions";

export interface UserType {
    id: number;
    firstName: string;
    secondName: string;
    email: string;
    token: string;
    isLoading: boolean;
    error: string;
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
    isLoading: false,
    error: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialUser,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoginAction.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(LoginAction.fulfilled, (state, action) => {
            const body = action.payload as Omit<UserType, 'isLoading' | 'error'>;

            state = {
                ...body,
                isLoading: false,
                error: '',
            }
        });

        builder.addCase(LoginAction.rejected, (state, action) => {
            state.error = 'Error happened when data was receiving! Text: ' + action.error.message;
        });

        builder.addCase(RegisterAction.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(RegisterAction.fulfilled, (state, action) => {
            const body = action.payload as Omit<UserType, 'isLoading' | 'error'>;

            state = {
                ...body,
                isLoading: false,
                error: '',
            }
        });

        builder.addCase(RegisterAction.rejected, (state, action) => {
            state.error = 'Error happened when data was receiving! Text: ' + action.error.message;
        });
    },
});

export const { actions, reducer  } = authSlice;