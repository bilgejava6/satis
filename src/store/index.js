import { configureStore } from "@reduxjs/toolkit";
import {
    personelSlice
} from './features';

const store = configureStore({
    reducer: {
        personel: personelSlice
    }
});

export default store;