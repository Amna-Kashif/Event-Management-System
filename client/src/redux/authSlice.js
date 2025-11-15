import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const signupUser = createAsyncThunk('/auth/signup', async (formData, {rejectWithValue}) => {
    try {
        const {data } = await axios.post('http://localhost:3500/api/auth/signup', formData);
    return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Signup Failed");
    }
});

export const loginUser = createAsyncThunk('/auth/login', async (formData, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('http://localhost:3500/api/auth/login', formData)
    return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Signup Failed");
    }
})

const authSlice = createSlice({
    name: 'auth', 
    initialState: {user: null, token: null, loading: false, error: null},
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;              
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.pending, (state) => {state.loading = true})
        .addCase(signupUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        })
        .addCase(signupUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(loginUser.pending, (state) => {state.loading = true;})
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user  = action.payload.user;
            state.token = action.payload.token;  
            localStorage.setItem("token", action.payload.token); 
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;
