import './App.css';
import  React from 'react';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeadearContainer";


const App = (props) => {
    console.log(props)
  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <HeaderContainer/>
              <Nav/>
              <Routes>
                    <Route  path={"/profile"} element={<ProfileContainer/>}>
                        <Route  path={":id"} element={<ProfileContainer/>}></Route>
                    </Route>
                    <Route  path={'/'} element={<ProfileContainer/>}></Route>
                    <Route  path={'/findUsers'} element={<UsersContainer/>}></Route>
                    <Route  path={'/news'} element={<News/>}></Route>
                    <Route  path={'/dialogs'} element={<DialogsContainer />}>
                        <Route path={":id"} element={<DialogsContainer />}></Route>
                    </Route>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
