import React from "react";
import '../styles/globals.css';
import {wrapper} from '../store/store';
import {MyAppProps} from '../interfaces';

const MyApp = ({Component, pageProps}: MyAppProps) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);