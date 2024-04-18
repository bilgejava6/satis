import { createSlice } from "@reduxjs/toolkit";

const initSepetState={
    sepetList: [],
    sepetAdedi: 0,
    sepetToplami: 0
};

/**
 * fetch işlemleri
 */

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
    extraReducers: ()=>{}

});

export const {sepeteEkle, sepettenCikart} = sepetSlice.actions;

export default sepetSlice.reducer;