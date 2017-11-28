import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(applyMiddleware(createLogger()), window.devToolsExtension ? window.devToolsExtension() : f => f)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;
