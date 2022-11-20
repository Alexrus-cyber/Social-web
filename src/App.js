import './App.css';
import React, {useEffect} from 'react';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeadearContainer";
import UsersContainerFunc from "./components/FindUsers/UsersContainerFunc";
import ProfileContainerFunc from "./components/Profile/ProfileContainerFunc";
import LoginContainer from "./components/Login/LoginContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./Redux/App-Reducer";
import Preloader from "./components/Common/Preloader";


const App = () => {
    let {initialized} = useSelector(state => state.app);
    let {isAuth} = useSelector(state => state.auth);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    return (
        <BrowserRouter>
            {initialized
                ? <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Nav/>
                    <Routes>
                        <Route path={'/'}
                               element={isAuth ? <ProfileContainerFunc/> : <Navigate to={'/login'}/>}></Route>
                        <Route path={"/profile"} element={<ProfileContainerFunc/>}>
                            <Route path={":id"}
                                   element={isAuth ? <ProfileContainerFunc/> : <Navigate to={'/login'}/>}></Route>
                        </Route>
                        <Route path={'/findUsers'}
                               element={<UsersContainerFunc/>}></Route>
                        <Route path={'/news'} element={isAuth ? <News/> : <Navigate to={'/login'}/>}></Route>
                        <Route path={'/dialogs'} element={isAuth ? <DialogsContainer/> : <Navigate to={'/login'}/>}>
                            <Route path={":id"}
                                   element={isAuth ? <DialogsContainer/> : <Navigate to={'/login'}/>}></Route>
                        </Route>
                        <Route path={'/login'}
                               element={isAuth ? <Navigate to={'/profile'}/> : <LoginContainer/>}></Route>
                    </Routes>
                </div>
                : <Preloader/>
            }
        </BrowserRouter>

    );
}

export default App;
