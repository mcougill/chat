import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import setupSocket from "./sockets";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import handleNewMessage from "./sagas";
import userName from "./utils/name";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

//initialize socket
const socket = setupSocket(store.dispatch, userName);

sagaMiddleware.run(handleNewMessage, { socket, userName});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
