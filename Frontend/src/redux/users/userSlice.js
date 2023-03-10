import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    isLoading: true,
    isSuccess: false,
    user: user ? user : null,
    isError: false,
    message: null,
};

export const login = createAsyncThunk(
    "user/login",
    async (userData, thunkAPI) => {
        return await axios
            .post(`${process.env.REACT_APP_URL}users/login`, {
                email: userData.email,
                password: userData.password,
            })
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data));
                return res.data;
            })
            .catch((error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                return thunkAPI.rejectWithValue(error.response.data);
            });
    }
);

export const editDetails = createAsyncThunk(
    "user/edit",
    async (newData, thunkAPI) => {
        console.log("new Data",newData  )
        return await axios
            .post(`${process.env.REACT_APP_URL}details/edit`, {
                id: 10,
                leetcodeid: newData.leetcodeid,
                position: newData.position,
                institution: newData.institution,
                description: newData.description,
                skills: newData.skills,
            })
            .then((res) => {
                alert(res.data);
                console.log("res", res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
                return res.data;
            })
            .catch((error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                return thunkAPI.rejectWithValue(error.response.data);
            });
    }
);

export const register = createAsyncThunk(
    "user/register",
    async (userData, thunkAPI) => {
        return await axios
            .post(`${process.env.REACT_APP_URL}users/register`, {
                username: userData.username,
                email: userData.email,
                password: userData.password,
            })
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data));
                return res.data;
            })
            .catch((error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                return thunkAPI.rejectWithValue(error.response.data);
            });
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
            state.user = null;
            localStorage.removeItem("user");
        },
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            console.log("payload", action.payload);
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.name = state.user.name;
            console.log("userrrrrr", state.user, action.payload);
            console.log("login success");
        },
        [login.pending]: (state) => {
            state.isLoading = true;
            console.log("login pending");
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.user = null;
            state.message = action.payload;
            console.log("login rejected", action.payload);
        },

        //register
        [register.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            console.log("payload", action.payload);
            console.log(state.user, action.payload);
            state.isSuccess = true;
        },
        [register.pending]: (state, action) => {
            state.isLoading = true;
            console.log("pending");
        },
        [register.rejected]: (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isError = true;
            state.message = action.payload;
            console.log("register error");
        },

        //edit
        [editDetails.fulfilled]: (state, action) => {
            console.log("payload", action.payload);
            state.isLoading = false;
            state.user = action.payload;
            console.log(state.user)
            state.isSuccess = true;
            console.log("edit success");
        },
        [editDetails.pending]: (state, action) => {
            state.isLoading = true;
            console.log("pending");
        },
        [editDetails.rejected]: (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isError = true;
            state.message = action.payload;
            console.log("edit error");
        },
    },
});
export const { logout,editUser } = userSlice.actions;
export default userSlice.reducer;
