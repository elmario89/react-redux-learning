import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './containers/App';

const store = configureStore()
const rootEl = document.getElementById('root');

const renderContainer = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        rootEl
    )
}

renderContainer(App)

if (module.hot) module.hot.accept('./containers/App', () => renderContainer(App));

