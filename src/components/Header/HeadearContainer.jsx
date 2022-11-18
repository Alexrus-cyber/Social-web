import React, {useEffect} from "react";
import Header from "./Header";
import { useDispatch, useSelector} from "react-redux";
import {getMe} from "../../Redux/Auth-reducer";

const HeaderContainer = () => {
    let dispatch = useDispatch();
    let {login, isAuth} = useSelector(state => state.auth)

    useEffect(()=>{
        dispatch(getMe())
    }, [dispatch])
    return (
        <Header login = {login} isAuth = {isAuth}/>
    );
}

export default HeaderContainer;