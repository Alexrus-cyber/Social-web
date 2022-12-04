import React, {useCallback} from "react";
// @ts-ignore
import Header from "./Header";
// @ts-ignore
import { logout} from "../../Redux/Reducers/AuthReducer.ts";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {AuthPageType} from "../../Types/SelectorTypes";

const HeaderContainer = () => {
    let dispatch = useAppDispatch();
    let {login, isAuth}: AuthPageType = useAppSelector(state => state.auth)

    const Logout = useCallback(() => {
        dispatch(logout());
    },[dispatch])



    return (
        <Header logout = {Logout} login = {login} isAuth = {isAuth}/>
    );
}

export default HeaderContainer;