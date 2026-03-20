import { configureStore } from "@reduxjs/toolkit";
import productDetailReducer from '../features/productDetailModel/productDetailSlice.js';
import cartReducer from "../features/cart/cartSlice.js";
import authReducer from "../features/auth/authSlice.js";

export const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
        cart: cartReducer,
        auth: authReducer,
    }
})