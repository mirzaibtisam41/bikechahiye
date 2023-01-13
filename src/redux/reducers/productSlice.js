import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cart: [],
    brands: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setAllBrands: (state, action) => {
            state.brands = action.payload;
        },
        setAllProducts: (state, action) => {
            state.products = action.payload;
        },
        setCartProducts: (state, action) => {
            state.cart.push(action.payload);
        },
        removeCartProducts: (state, action) => {
            state.cart = state.cart.filter(item => item.product._id !== action.payload._id);
        },
        updateCartProduct: (state, action) => {
            const { id, op } = action.payload;
            state.cart.forEach(item => {
                if (item.product._id === id) {
                    if (op === '+') {
                        item.count += 1;
                    }
                    else if (op === "-" && item.count >= 2) {
                        item.count -= 1;
                    }
                }
            });
        }
    },
});

export const { setAllProducts, setCartProducts, removeCartProducts, updateCartProduct, setAllBrands } = productSlice.actions;

export default productSlice.reducer;