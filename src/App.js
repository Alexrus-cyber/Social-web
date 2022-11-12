import './App.css';
import  React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    console.log(props)
  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header/>
              <Nav/>
              <Routes>

                    <Route  path={'/News'} element={<News/>}></Route>
                    <Route  path={'/'} element={<Profile/>}></Route>
                    <Route  path={'/Alex'} element={<Dialogs/>}></Route>
                    <Route  path={'/Kira'} element={<News/>}></Route>
                    <Route  path={'/Dialogs'} element={<DialogsContainer />}></Route>
                    <Route  path={'/Dialogs/1'} element={<DialogsContainer />}></Route>
                    <Route  path={'/Dialogs/2'} element={<DialogsContainer />}></Route>

              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
