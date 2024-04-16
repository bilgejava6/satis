import urunUrl from "../../config/UrunController";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")

const initUrunState={
    urunList: []
}

export const fetchUrunEkleme = createAsyncThunk(
    'urun/fetchUrunEkleme',
    async (payload)=>{
        try {
         const result =  fetch(urunUrl.urunEkle,{
            
         });

         return result;
        } catch (error) {
            console.log('HATA fetchUrunEkleme....: ', error);
        }
    }
);
export const fetchUrunListele = createAsyncThunk('urun/fetchUrunListele',{});

const urunSlice = createSlice({
    name: 'urun',
    initialState: initUrunState,
    reducers: {},
    extraReducers: (build)=>{

    }
});

export default urunSlice.reducer;
