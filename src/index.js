import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'src/store/configureStore';
import App from 'src/containers/App';

const store = configureStore()
const rootEl = document.getElementById('root');

const renderContainer = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <div className='app'>
                    <Component />
                </div>
            </Provider>
        </AppContainer>,
        rootEl
    )
}

renderContainer(App)

if (module.hot) module.hot.accept('./containers/App', () => renderContainer(App));

