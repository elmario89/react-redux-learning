import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import { createLogger } from 'redux-logger'

export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger)
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
