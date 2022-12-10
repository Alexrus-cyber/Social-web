import React, {useCallback} from "react";
import Header from "./Header";
import { logout} from "../../Redux/Reducers/AuthReducer";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";

const HeaderContainer = () => {
    let dispatch = useAppDispatch();
    let {login, isAuth} = useAppSelector(state => state.auth)

    const Logout = useCallback(() => {
        dispatch(logout());
    },[dispatch])



    return (
        <Header logout = {Logout} login = {login} isAuth = {isAuth}/>
    );
}

export default HeaderContainer;