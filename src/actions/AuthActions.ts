import { createAsyncThunk } from "@reduxjs/toolkit";

type LoginActionType = {
    email: string;
    password: string;
}

type RegisterActionType = {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
}

export const serverUrl = 'http://localhost:8088';

export const LoginAction = createAsyncThunk('auth/loginUser', 
    async (login: LoginActionType) => {
    const response = await fetch(serverUrl + '/auth/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Status Code: ${response.status}; Message: ${response.statusText}`);
    }

    return response.json();
});

export const RegisterAction = createAsyncThunk('auth/registerUser', 
    async (registration: RegisterActionType) => {
        const response = await fetch(serverUrl + '/auth/registration', {
            method: 'POST',
            body: JSON.stringify(registration),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Status Code: ${response.status}; Message: ${response.statusText}`);
        }
    
        return response.json();
});