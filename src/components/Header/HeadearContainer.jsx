import React, {useCallback, useEffect} from "react";
import Header from "./Header";
import { useDispatch, useSelector} from "react-redux";
import {getMe, logout} from "../../Redux/Auth-reducer";

const HeaderContainer = () => {
    let dispatch = useDispatch();
    let {login, isAuth} = useSelector(state => state.auth)


    useEffect(()=>{
        dispatch(getMe())
    }, [dispatch])

    const Logout = useCallback(() => {
        dispatch(logout())
    },[dispatch])



    return (
        <Header logout = {Logout} login = {login} isAuth = {isAuth}/>
    );
}

export default HeaderContainer;