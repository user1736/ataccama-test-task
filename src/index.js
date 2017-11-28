import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './components/App';
import normalize from './utils/normalize';
import initialData from './utils/data.json';
import configureStore from './store/configureStore';

const store = configureStore(normalize(initialData));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
