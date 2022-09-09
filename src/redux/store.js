import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import mainSlice from "./slices/mainSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice,
        main: mainSlice
        
    },
})