import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initMenuState = {
    menuList: []
};

export const fetchMenuEkle = createAsyncThunk({});
export const fetchMenuListele = createAsyncThunk({});

const menuSlice = createSlice({

});

export default menuSlice.reducer;