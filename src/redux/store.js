import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import allSlice from "./slices/allSlice"

export const store = configureStore({
    reducer: {
        search: searchSlice,
        all: allSlice
    },
})