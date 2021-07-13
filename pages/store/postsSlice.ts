import {createAsyncThunk, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import axios from "axios";
import {IInitialStatePosts, IState } from "./interfaces";

const initialState: IInitialStatePosts = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async () => {
        const response = await axios
            .get('https://simple-blog-api.crew.red/posts')
            .then(res => res.data);
        console.log(response);
        
        return response;
    });

export const postsSlice = createSlice<IInitialStatePosts, SliceCaseReducers<any>, string>({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        return builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
            state.posts = [];
        }),
            builder.addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = state.posts.concat(action.payload);
            }),
            builder.addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default postsSlice.reducer;

export const selectAllPosts = (state: IState | any) => state.posts.posts;