import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";


const root = ReactDOM.createRoot(document.getElementById('root'));
function tick() {
    root.render(
        <React.StrictMode>
            <App  dispatch = {store.dispatch.bind(store)}  appState={store.getState()}/>
        </React.StrictMode>
    );
}
tick(store.getState());
store.subscribe(tick)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
