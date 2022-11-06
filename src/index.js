import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {AddPost, subscribe} from "./Redux/State";
import * as ReactDom from 'react-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
function tick() {
    root.render(
        <React.StrictMode>
            <App appState={state} addPost={AddPost}/>
        </React.StrictMode>
    );
}
setInterval(tick, 1);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
