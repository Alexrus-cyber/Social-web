import './App.css';
import  React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    console.log(props)
  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header/>
              <Nav/>
              <Routes>
                    <Route  path={"/profile"} element={<ProfileContainer/>}>
                        <Route  path={":id"} element={<ProfileContainer/>}></Route>
                    </Route>
                    <Route  path={'/'} element={<Profile/>}></Route>
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
