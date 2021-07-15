import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper';

import indexReducer from './indexSlice';

export const store = configureStore({
    reducer: {
        index: indexReducer
    }
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);