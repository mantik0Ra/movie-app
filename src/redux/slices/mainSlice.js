import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostService from "../../API/PostService";

const initialState = {
    nowPlayingResult: [],
    topRatedResult: [],
}

export const getNowPlaying = createAsyncThunk("getNowPlaying", async (_, { rejectWithValue, dispatch, getState }) => {
    const res = await PostService.getNowPlaying();
    dispatch(setNowPlayingResult(res.data.results))
    
})

export const getTopRated = createAsyncThunk("getTopRated", async (_, { rejectWithValue, dispatch, getState }) => {
    const res = await PostService.getTopRated();
    console.log(res.data.results)
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
})

export const { setNowPlayingResult, setTopRatedResult } = mainSlice.actions
export default mainSlice.reducer