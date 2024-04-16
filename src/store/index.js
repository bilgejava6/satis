import { configureStore } from "@reduxjs/toolkit";
import {
    personelSlice,
    urunSlice,
    menuSlice
} from './features';

const store = configureStore({
    reducer: {
        personel: personelSlice,
        urun: urunSlice,
        menu: menuSlice
    }
});

export default store;