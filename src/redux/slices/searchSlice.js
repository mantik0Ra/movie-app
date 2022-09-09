import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostService from "../../API/PostService";


const initialState = {
    searchQuery: "",
    searchResult: [],
}



export const getSearch = createAsyncThunk("getSearch", async (_, { rejectWithValue, dispatch, getState }) => {
    const query = getState().search.searchQuery
    const res = await PostService.getSearch(query);
    dispatch(setSearchResult(res.data.results))
})

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setSearchResult: (state, action) => {
            state.searchResult = action.payload
        },
        clearSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        }
    },
    extraReducers: {
        [getSearch.fulfilled]: () => console.log("fullfiled"),
        [getSearch.pending]: () => console.log("pending"),
        [getSearch.rejected]: () => console.log("rejected"),
    },
})


export const { setSearchQuery, searchResult, setSearchResult, searchQuery, clearSearchQuery } = searchSlice.actions
export default searchSlice.reducer