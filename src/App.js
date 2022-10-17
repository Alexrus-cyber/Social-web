import './App.css';
import  React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";


const App = () => {
  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header/>
              <Nav/>
              <Routes>
                    <Route  path={'/Profile'} element={<Profile/>}></Route>
                    <Route  path={'/'} element={<Profile/>}></Route>
                    <Route  path={'/Alex'} element={<Profile/>}></Route>
                    <Route  path={'/Kira'} element={<Profile/>}></Route>
                    <Route  path={'/Dialogs'} element={<Dialogs/>}></Route>
              </Routes>

          </div>
      </BrowserRouter>

  );
}

export default App;
