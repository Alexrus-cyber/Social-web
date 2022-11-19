import './App.css';
import  React from 'react';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeadearContainer";
import UsersContainerFunc from "./components/FindUsers/UsersContainerFunc";
import ProfileContainerFunc from "./components/Profile/ProfileContainerFunc";
import Login from "./components/Login/Login";


const App = (props) => {
    console.log(props)
  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <HeaderContainer/>
              <Nav/>
              <Routes>
                    <Route  path={'/'} element={<ProfileContainerFunc/>}></Route>
                    <Route  path={"/profile"} element={<ProfileContainerFunc/>}>
                        <Route  path={":id"} element={<ProfileContainerFunc/>}></Route>
                    </Route>
                    <Route  path={'/findUsers'} element={<UsersContainerFunc/>}></Route>
                    <Route  path={'/news'} element={<News/>}></Route>
                    <Route  path={'/dialogs'} element={<DialogsContainer />}>
                        <Route path={":id"} element={<DialogsContainer />}></Route>
                    </Route>
                  <Route path={'/login'} element={<Login/>}></Route>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
