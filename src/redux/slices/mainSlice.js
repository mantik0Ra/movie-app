import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostService from "../../API/PostService";

const initialState = {
    nowPlayingResult: [],
    topRatedResult: [],
}

export const getNowPlaying = createAsyncThunk("getNowPlaying", async (_, { dispatch }) => {
    const res = await PostService.getNowPlaying();
    dispatch(setNowPlayingResult(res.data.results))
    
})

export const getTopRated = createAsyncThunk("getTopRated", async (_, { dispatch }) => {
    const res = await PostService.getTopRated();
    dispatch(setTopRatedResult(res.data.results))
    
})

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setNowPlayingResult: (state, action) => {
            state.nowPlayingResult = action.payload
        },
        setTopRatedResult: (state, action) => {
            state.topRatedResult = action.payload
        },
    },
    extraReducers: {
        [getNowPlaying.fulfilled]: () => console.log("fullfiled"),
        [getNowPlaying.pending]: () => console.log("pending"),
        [getNowPlaying.rejected]: () => console.log("rejected"),
    },
})

export const { setNowPlayingResult, setTopRatedResult } = mainSlice.actions
export default mainSlice.reducer