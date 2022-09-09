import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostService from "../../API/PostService";


const initialState = {
    result: [],
    page: 1,
    totalPage: 5,
}

export const getTotalPage = createAsyncThunk("getAll", async (_, { dispatch, getState} ) => {
    const resp = await PostService.getAllTopRated(1);
    dispatch(setTotalPage(resp.data.total_pages));
    console.log(resp.data.total_pages)
    
})

export const getAll = createAsyncThunk("getAll", async (page, { dispatch, getState} ) => {
    const resp = await PostService.getAllTopRated(page);
    dispatch(setAllResult(resp.data.results));
    
})



export const allSlice = createSlice({
    name: "all",
    initialState,
    reducers: {
        setAllResult: (state, action) => {
            state.result = action.payload
        },
        setPageCount: (state, action) => {
            state.page = state.page + 1
        },
        setTotalPage: (state, action) => {
            state.totalPage = action.payload
        },
        clearResult: (state, action) => {
            state.result = []
        }
    },
})

export const { setAllResult, setPageCount, setTotalPage, clearResult } = allSlice.actions
export default allSlice.reducer

