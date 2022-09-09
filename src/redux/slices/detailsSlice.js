import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostService from "../../API/PostService";

const initialState = {
    similarMovieResult: [],
    detailsResult: [],
    fullCastResult: [],
}

export const getSimilarMovies = createAsyncThunk("getSimilarMovies", async (id, { rejectWithValue, dispatch, getState }) => {
    const res = await PostService.getSimilarMovies(id)
    dispatch(getSimilarMovie(res.data.results))
    
})

export const getMovieDetails = createAsyncThunk("getMovieDetails", async (id, { rejectWithValue, dispatch, getState }) => {
    const res = await PostService.getDetailsByID(id)
    dispatch(getDetails(res.data))
    
})

export const getMovieFullCast = createAsyncThunk("getMovieFullCast", async (id, { rejectWithValue, dispatch, getState }) => {
    const res = await PostService.getFullCastByID(id)
    dispatch(getFullCast(res.data))
    
})

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        getSimilarMovie: (state, action) => {
            state.similarMovieResult = action.payload
        },
        getDetails: (state, action) => {
            state.detailsResult = action.payload
        },
        getFullCast: (state, action) => {
            state.fullCastResult = action.payload
        }
    }
})

export const { getDetails, getFullCast, getSimilarMovie } = detailsSlice.actions
export default detailsSlice.reducer