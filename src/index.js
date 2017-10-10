import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

const rootEl = document.getElementById('root');
const renderContainer = Component => {
    render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        rootEl
    )
}

renderContainer(App)

if (module.hot) module.hot.accept('./containers/App', () => renderContainer(App));

