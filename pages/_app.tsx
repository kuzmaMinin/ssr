import React from "react";
import '../styles/globals.css';
import {Provider} from 'react-redux';
import store from '../store/store';
import {MyAppProps} from '../interfaces';

export default function MyApp({Component, pageProps}: MyAppProps) {
    const Layout = Component.Layout || React.Fragment;

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
