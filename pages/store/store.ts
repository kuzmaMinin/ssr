import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import { MakeStore } from "next-redux-wrapper";
import { rootReducer, RootState } from "./reducers"

export const store = configureStore({
        reducer: rootReducer
    }
);

// @ts-ignore
export const makeStore: MakeStore = (_?: RootState): EnhancedStore => store;