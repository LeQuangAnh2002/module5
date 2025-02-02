import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import {createStore,applyMiddleware} from "redux";


const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)
console.log(store.getState().cart)
store.dispatch(getAllProducts())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
