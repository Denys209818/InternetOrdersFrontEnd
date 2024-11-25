import { configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./reducers/AuthReducer";
import { reducer as dishReducer } from "./reducers/DishReducer";
import { reducer as ingredientReducer } from "./reducers/IngredientReducer";
import { reducer as orderReducer } from "./reducers/OrderReducer";
import { cartReducer } from "./reducers/CartReducer";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        dish: dishReducer,
        ingredient: ingredientReducer,
        order: orderReducer,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;