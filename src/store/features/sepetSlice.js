import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {sepetUrl} from '../../config/SepetController';
const initSepetState={
    sepetList: [],
    sepetAdedi: 0,
    sepetToplami: 0,
    userSepetList: [], // sunucudan gelen liste
    userSepetAdedi: 0
};

/**
 * fetch işlemleri
 */
export const fetchSepeteEkle= createAsyncThunk(
    'sepet/fetchSepeteEkle',
    async (payload)=>{
        const response = await fetch(sepetUrl.ekle,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data=> data.json()).then(data=>data);
        return response;
    }
);

export const fetchSepetListele = createAsyncThunk(
    'sepet/fetchSepetListele',
    async (payload)=>{
        const response = await fetch(sepetUrl.listele+'?userId='+payload)
        .then(data=> data.json()).then(data=>data);
        return response;
    }
);


const sepetSlice = createSlice({
    name: 'sepet',
    initialState: initSepetState,
    reducers: {
        sepeteEkle(state,action){ // dispatch(sepeteEkle(urun));
            if(state.sepetAdedi<3)
                state.sepetAdedi = state.sepetAdedi + 1;
            state.sepetToplami = state.sepetToplami + action.payload.fiyat;
            state.sepetList.push(action.payload);
        },
        sepettenCikart(state,action){ // dispatch(sepettenCikart(urun));
            if(state.sepetAdedi>0)
                state.sepetAdedi = state.sepetAdedi - 1;
                state.sepetToplami = state.sepetToplami - action.payload.fiyat;
                state.sepetList = state.sepetList.filter(u=> u.id !==action.payload.id);

        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchSepetListele.pending,(state)=>{});
        builder.addCase(fetchSepetListele.fulfilled,(state,action)=>{
                state.userSepetList = action.payload.data;
                state.userSepetAdedi = state.userSepetList.length;
        });
        builder.addCase(fetchSepetListele.rejected,(state)=>{});
        
        builder.addCase(fetchSepeteEkle.pending,(state)=>{});
        builder.addCase(fetchSepeteEkle.fulfilled,(state,action)=>{
            console.log(action.payload);
        });
        builder.addCase(fetchSepeteEkle.rejected,(state)=>{});
        
    }

});

export const {sepeteEkle, sepettenCikart} = sepetSlice.actions;

export default sepetSlice.reducer;