import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },

    reducers: {
        //GET All products

        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },

        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        //Delete a product

        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload), 1
            );
        },

        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        //Update a product

        updateProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product;

        },

        updateProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //Add a product

        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload)
        },

        addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }

})

export const { addProductFailure, addProductSuccess, addProductStart, updateProductFailure, updateProductSuccess, updateProductStart, getProductStart, getProductSuccess, getProductFailure, deleteProductFailure, deleteProductSuccess, deleteProductStart } = productSlice.actions
export default productSlice.reducer;