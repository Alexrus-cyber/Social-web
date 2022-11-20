import {useDispatch, useSelector} from "react-redux";
import Login from "./Login";
import {useCallback, useEffect} from "react";
import {getMe, loginMe} from "../../Redux/Auth-reducer";


const LoginContainer = () => {
    let dispatch = useDispatch();
    let {isAuth} = useSelector(state => state.auth)
    useEffect(()=>{
        dispatch(getMe())
    }, [dispatch, isAuth])

    const LoginMe = useCallback((email,password,rememberMe) => {
        dispatch(loginMe(email,password,rememberMe))
    },[dispatch])


    return (
        <Login loginMe = {LoginMe}/>
    )

}

export default LoginContainer;