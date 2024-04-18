import { configureStore } from "@reduxjs/toolkit";
import {
    personelSlice,
    urunSlice,
    menuSlice,
    sepetSlice
} from './features';

const store = configureStore({
    reducer: {
        personel: personelSlice,
        urun: urunSlice,
        menu: menuSlice,
        sepet: sepetSlice
    }
});

export default store;