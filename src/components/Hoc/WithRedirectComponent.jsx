import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export function WithRedirect (Component)  {
    function RedirectComponent(props){
        let navigate = useNavigate();
        let {isAuth} = useSelector(state => state.auth)
        useEffect(()=>{
            if (!isAuth) return navigate('/login')
        })
        return (
            <Component />
        )

    }
    return RedirectComponent;
}
