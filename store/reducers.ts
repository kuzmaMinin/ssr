import { combineReducers } from "redux"
import postsReducer from './postsSlice';

export const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer;
