import {createAsyncThunk, createSlice, Reducer, SliceCaseReducers} from "@reduxjs/toolkit";
import axios from "axios";
import {IInitialStatePosts, IPost, IState} from "../../interfaces";

const initialState: IInitialStatePosts = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const posts = await axios
            .get('https://simple-blog-api.crew.red/posts')
            .then(res => res.data);

        return await Promise.all(
            posts.map(async (post: IPost) => {
                return await axios
                    .get(`https://simple-blog-api.crew.red/posts/${post.id}?_embed=comments`)
                    .then(res => res.data);
            })
        ).then(res => res);

    } catch (e) {
        console.log(e);
    }
});

export const addPost = createAsyncThunk('posts/addPost', async (data: { title: string, body: string }, thunkAPI ) => {
    console.log(thunkAPI, 'api');

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


export const postsSlice = createSlice<IInitialStatePosts, SliceCaseReducers<any>, string>({
    name: 'posts',
    initialState,
    reducers: {
        addPostItem: (state, action) => {
            console.log(state.posts);
            state.posts.push(action.payload);
        }
    },
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

export default postsSlice.reducer as Reducer<typeof initialState>;

export const {addPostItem} = postsSlice.actions;

export const selectAllPosts = (state: IState) => state.posts.posts;
export const selectValidLastPosts = (state: IState) => state.posts.posts.filter(p => p.body && p.title).slice(-10);


