import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostService from "../../API/PostService";


const initialState = {
    result: [],
}

export const allSlice = createSlice({
    name: "all",
    initialState,
    reducers: {
        setAllResult: (state, action) => {
            state.result = action.payload
        },
    },
})

export const {setAllResult} = allSlice.actions
export default allSlice.reducer

