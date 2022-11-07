import './App.css';
import  React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Messages} from "./components/Dialogs/Message/Messages";
import News from "./components/News/News";


const App = (props) => {

  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header/>
              <Nav/>
              <Routes>
                    <Route  path={'/News'} element={<News/>}></Route>
                    <Route  path={'/'} element={<Profile addLike = {props.addLike} countPost = {props.countPost} postData = {props.appState.profilePage.posts} postCountData = {props.appState.profilePage.countPosts} addPost={props.addPost}/>}></Route>
                    <Route  path={'/Alex'} element={<Dialogs/>}></Route>
                    <Route  path={'/Kira'} element={<News/>}></Route>
                    <Route  exact path={'/Dialogs/1'} element={<Dialogs userData = {props.appState.dialogsPage.users} x = {0}/>}>
                    </Route>
                    <Route  exact path={'/Dialogs/2'} element={<Dialogs userData = {props.appState.dialogsPage.users} x = {1} />}></Route>
                    <Route  path={'/Dialogs'} element={<Dialogs userData = {props.appState.dialogsPage.users}/>}></Route>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
