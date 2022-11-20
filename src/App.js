import './App.css';
import  React from 'react';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeadearContainer";
import UsersContainerFunc from "./components/FindUsers/UsersContainerFunc";
import ProfileContainerFunc from "./components/Profile/ProfileContainerFunc";
import LoginContainer from "./components/Login/LoginContainer";
import {useSelector} from "react-redux";


const App = () => {
    let {isAuth} = useSelector(state => state.auth);
  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <HeaderContainer/>
              <Nav/>
              <Routes>
                    <Route  path={'/'} element={isAuth ? <ProfileContainerFunc/> : <Navigate to={'/login'}/>}></Route>
                    <Route  path={"/profile"} element={isAuth ? <ProfileContainerFunc/> : <Navigate to={'/login'}/>}>
                        <Route  path={":id"} element={isAuth ? <ProfileContainerFunc/> : <Navigate to={'/login'}/>}></Route>
                    </Route>
                    <Route  path={'/findUsers'} element={isAuth ? <UsersContainerFunc/> : <Navigate to={'/login'}/>}></Route>
                    <Route  path={'/news'} element={<News/>}></Route>
                    <Route  path={'/dialogs'} element={<DialogsContainer />}>
                        <Route path={":id"} element={<DialogsContainer />}></Route>
                    </Route>
                  <Route path={'/login'} element={isAuth ? <Navigate to={'/profile'}/>: <LoginContainer/>}></Route>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
