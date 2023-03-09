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