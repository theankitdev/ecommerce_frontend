import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, getProfile, logoutUser } from "./authService";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
            return await registerUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    } 
)

export const login = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
        try {
            return await loginUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            return await logoutUser();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || { message: error.message });
        }
    }
)

export const fetchProfile = createAsyncThunk(
    "auth/profile",
    async (_, thunkAPI) => {
        try {
            return await getProfile();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // Register
        .addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        })
        .addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // Login
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // Fetch Profile
        .addCase(fetchProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(fetchProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        })

        // Logout User
        .addCase(logout.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
        })
        .addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
});

export default authSlice.reducer;