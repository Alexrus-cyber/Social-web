import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/ReduxStore";


const root = ReactDOM.createRoot(document.getElementById('root'));
function tick(state) {
    root.render(
        <React.StrictMode>
            <App  dispatch = {store.dispatch.bind(store)} store = {store} appState={state}/>
        </React.StrictMode>
    );
}
tick(store.getState());
store.subscribe(() => {
    let state = store.getState();
    tick(state);
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
