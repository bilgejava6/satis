import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import menuUrl from "../../config/MenuController";
const initMenuState = {
    menuList: [],
    isLoading: false,
    activeMenuId: 0
};

export const fetchMenuEkle = createAsyncThunk(
    'menu/fetchMenuEkle',
   async (payload)=>{
      const result =  fetch(menuUrl.menuEkleme,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(data=>data.json())
      .then(data=>data);
      return result;
   }
);
export const fetchMenuListele = createAsyncThunk(
    'menu/fetchMenuListele',
    async ()=>{
        const result =  fetch(menuUrl.menuListesi).then(data=>data.json()).then(data=>data);
        return result;
     }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState: initMenuState,
    reducers: {
        /**
         * 
         * @param {*} state -> burada yeralan tanımlı değerler
         * @param {*} action -> dispatch edilirken iletilen değerler
         */
        setActiveMenuId(state,action){
            state.activeMenuId = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMenuEkle.pending,()=>{});
        builder.addCase(fetchMenuEkle.fulfilled,()=>{});
        builder.addCase(fetchMenuEkle.rejected,()=>{});

        builder.addCase(fetchMenuListele.pending,(state)=>{state.isLoading = true;});
        builder.addCase(fetchMenuListele.fulfilled,(state,action)=>{
           state.isLoading = false;
           state.menuList = action.payload.data; 
        });
        builder.addCase(fetchMenuListele.rejected,(state)=>{state.isLoading = false;});
        
        
    }
});
export const {setActiveMenuId} = menuSlice.actions;
export default menuSlice.reducer;