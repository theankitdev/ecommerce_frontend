import { configureStore } from "@reduxjs/toolkit";
import productDetailReducer from '../features/productDetailModel/productDetailSlice.js';
import cartReducer from "../features/cart/cartSlice.js"

export const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
        cart: cartReducer,
    }
})