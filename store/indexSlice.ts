import {createAsyncThunk, createSlice, Reducer} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {IInitialStatePosts, IPost, IState} from "../interfaces";
import axios from "axios";

const initialState: IInitialStatePosts = {
    posts: [],
    error: null
}

export const indexSlice = createSlice({
    name: 'index',

    initialState,

    reducers: {
        setIndex(state, action) {
            console.log(action.payload, 'reducer=-baby')
            state.posts = action.payload;
        },
        addPostItem: (state, action) => {
            console.log(state.posts, action.payload, 'addpost-baby')
            state.posts.push(action.payload);
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', action.payload.index);
            return {
                ...state,
                ...action.payload.index,
            };
        },
    },
});

export default indexSlice.reducer as Reducer<typeof initialState>;

export const {setIndex, addPostItem} = indexSlice.actions;

export const selectValidLastPosts = (state: IState) => state.index.posts.filter(p => p.body && p.title).slice(-10);

export const fetchIndex = createAsyncThunk('index/fetchPosts', async ({}, thunkAPI) => {
    console.log('here')
    try {
        const posts = await axios
            .get('https://simple-blog-api.crew.red/posts')
            .then(res => res.data);

        const result = await Promise.all(
            posts.map(async (post: IPost) => {
                return await axios
                    .get(`https://simple-blog-api.crew.red/posts/${post.id}?_embed=comments`)
                    .then(res => res.data);
            })
        ).then(res => res);
        console.log(result, 'result')

        thunkAPI.dispatch(setIndex(result));

    } catch (e) {
        console.log(e);
    }
});

export const addPost = createAsyncThunk(
    'index/addPost',
    async (data: { title: string, body: string }, thunkAPI
    ) => {
        try {
            return await axios
                .post('https://simple-blog-api.crew.red/posts', data)
                .then(res => res.data)
                .then(item => {
                    thunkAPI.dispatch(addPostItem(item));
                    return item;
                });
        } catch (err) {
            console.log(err);
        }
    });

