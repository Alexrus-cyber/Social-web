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
            <App addLike = {store.addLike.bind(store)} countPost = {store.postsCount.bind(store)} appState={store.getState()} addPost={store.addPost.bind(store)}/>
        </React.StrictMode>
    );
}
setInterval(tick, 1);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
