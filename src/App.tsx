import './App.css';
import React, {useEffect} from 'react';
// @ts-ignore
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
// @ts-ignore
import News from "./components/News/News";
import HeaderContainer from "./components/Header/HeadearContainer";
import ProfileContainerFunc from "./components/Profile/ProfileContainerFunc";
import LoginContainer from "./components/Login/LoginContainer";
// @ts-ignore
import Preloader from "./components/Common/Preloader";
import {initializeApp} from "./Redux/Reducers/AppReducer";
import UsersContainerFunc from "./components/FindUsers/UsersContainerFunc";
import {useAppDispatch, useAppSelector} from "./Hooks/Hooks";
import DialogsContainerFunc from "./components/Dialogs/DialogsContainerFunc";


const App = () => {
    let {initialized} = useAppSelector(state => state.app);
    let {isAuth} = useAppSelector(state => state.auth);
    let dispatch = useAppDispatch();
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
                        <Route path={'/dialogs'} element={isAuth ? <DialogsContainerFunc/> : <Navigate to={'/login'}/>}>
                            <Route path={":id"}
                                   element={isAuth ? <DialogsContainerFunc/> : <Navigate to={'/login'}/>}></Route>
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
