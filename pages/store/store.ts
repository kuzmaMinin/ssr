import {configureStore, EnhancedStore, Store, createStore} from "@reduxjs/toolkit";
import {createWrapper, MakeStore } from "next-redux-wrapper";
import { IState } from "../../interfaces";
import { rootReducer, RootState } from "./reducers"

export const store = configureStore({
        reducer: rootReducer
    }
);

// @ts-ignore
//export const makeStore: MakeStore = (_?: RootState): EnhancedStore => store;

const makeStore = (context: Context) => createStore(rootReducer);

// @ts-ignore
export const wrapper = createWrapper<Store<IState>>(makeStore, {debug: true});