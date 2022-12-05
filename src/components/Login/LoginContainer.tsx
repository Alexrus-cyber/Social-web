// @ts-ignore
import Login from "./Login";
import {useCallback, useEffect} from "react";
// @ts-ignore
import {getMe, loginMe} from "../../Redux/Reducers/AuthReducer.ts";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {AuthPageType} from "../../Types/SelectorTypes";


const LoginContainer = () => {
    let dispatch = useAppDispatch();
    let {isAuth, captchaUrl}: AuthPageType = useAppSelector(state => state.auth)

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch, isAuth])

    const LoginMe = useCallback((email: string, password: string, rememberMe: boolean, captcha: string | null) => {
        dispatch(loginMe(email, password, rememberMe, captcha))
    }, [dispatch])


    return (
        <Login captchaUrl={captchaUrl} loginMe={LoginMe}/>
    )

}

export default LoginContainer;