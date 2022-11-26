import {useDispatch, useSelector} from "react-redux";
import Login from "./Login";
import {useCallback, useEffect} from "react";
import {getMe, loginMe} from "../../Redux/Auth-reducer";


const LoginContainer = () => {
    let dispatch = useDispatch();
    let {isAuth, captchaUrl} = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(getMe())
    }, [dispatch, isAuth])

    const LoginMe = useCallback((email, password, rememberMe, captcha) => {
        dispatch(loginMe(email, password, rememberMe, captcha))
    }, [dispatch])


    return (
        <Login captchaUrl={captchaUrl} loginMe={LoginMe}/>
    )

}

export default LoginContainer;