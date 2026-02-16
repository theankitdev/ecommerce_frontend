import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
    name: "productDetail",
    initialState: {
        open: false,
        product: null,
    },
    reducers: {
        openProductDetail: (state, action) => {
            state.open = true;
            state.product = action.payload;
        },
        closeProductDetail: (state) => {
            state.open = false;
            state.product = null;
        }
    }
})

export const { openProductDetail, closeProductDetail } = productDetailSlice.actions;

export default productDetailSlice.reducer;