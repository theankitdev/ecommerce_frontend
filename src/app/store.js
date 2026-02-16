import { configureStore } from "@reduxjs/toolkit";
import productDetailReducer from '../features/productDetailModel/productDetailSlice.js'

export const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
    }
})