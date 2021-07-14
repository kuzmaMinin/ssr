import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper';

import postsReducer from './postsSlice';
import indexReducer from './indexSlice';

export const store = configureStore({
    reducer: {
        //posts: postsReducer,
        index: indexReducer
    }
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);