import { configureStore } from "@reduxjs/toolkit";
import {
    personelSlice,
    urunSlice
} from './features';

const store = configureStore({
    reducer: {
        personel: personelSlice,
        urun: urunSlice
    }
});

export default store;