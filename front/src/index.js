import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

const defaultState = {
    id: 0
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                id: action.id
            };

        default:
            return state;
    }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot( document.getElementById('root'))

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

);

reportWebVitals();
