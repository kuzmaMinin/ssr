import {createAsyncThunk, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import axios from "axios";

interface IInitialState {
    posts: any[];
    status?: 'loading' | 'succeeded' | 'failed' | 'idle',
    error?: string | any
}

const initialState: IInitialState = {
    posts: [],
}

export const fetchPosts = createAsyncThunk('subComments/fetchSubComments',
    () => {

    });

export const postsSlice = createSlice<IInitialState, SliceCaseReducers<any>, string>({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        return builder.addCase(fetchPosts.pending, (state: IInitialState) => {
            state.status = 'loading';
            state.posts = [];
        }),
            builder.addCase(fetchPosts.fulfilled, (state: IInitialState, action) => {
                state.status = 'succeeded';
                state.posts = state.posts.concat(action.payload);
            }),
            builder.addCase(fetchPosts.rejected, (state: IInitialState, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default postsSlice.reducer;

export const selectAllPosts = (state: any) => state.posts.posts;