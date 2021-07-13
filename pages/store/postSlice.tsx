import {createAsyncThunk, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import axios from "axios";
import {IInitialStatePost, IState } from "./interfaces";

const initialState: IInitialStatePost = {
    post: {},
    status: 'idle',
    error: null
}

export const fetchPost = createAsyncThunk('post/fetchPost',
    async (id: number) => {
        const response = await axios
            .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
            .then(res => res.data);
        console.log(response);

        return response;
    });

export const postSlice = createSlice<IInitialStatePost, SliceCaseReducers<any>, string>({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: builder => {
        return builder.addCase(fetchPost.pending, (state) => {
            state.status = 'loading';
            state.post = {};
        }),
            builder.addCase(fetchPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.post = action.payload;
            }),
            builder.addCase(fetchPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default postSlice.reducer;

export const selectPost = (state: IState | any) => state.post;