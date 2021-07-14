import { combineReducers } from "redux"
import postsReducer from '../store/postsSlice';

export const rootReducer = combineReducers({
    posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>