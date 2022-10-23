import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import image from "./components/Dialogs/Users/img/icon.jpg";
import Ivan from "./components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "./components/Dialogs/Users/img/Andrey.jpg";
import {state} from "./Redux/State";

let userData = [
    {id: '1', name: 'Даниил Громыко' , img :image,},
    {id: '2', name: 'Яван Миллер' ,img :Ivan, },
    {id: '3', name: 'Андрей Солодышкин', img :Andrey,},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App appState = {state}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
