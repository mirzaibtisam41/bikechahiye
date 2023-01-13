import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    myCreatedBikes: []
}

const UserSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            if (token) state.token = token;
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            state.myCreatedBikes = [];
        },
        setMyUsedBikes: (state, action) => {
            state.myCreatedBikes = action.payload;
        },
    },
});

export const { setUserData, logoutUser, setMyUsedBikes } = UserSlice.actions;

export default UserSlice.reducer;