import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {store, wrapper} from './store/store';
import withRedux from 'next-redux-wrapper';
//import {makeStore} from './store/store';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

//export default withRedux(makeStore, {debug: false})(MyApp);

export default wrapper.withRedux(MyApp);
