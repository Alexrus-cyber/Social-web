import React, { useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export function WithRedirect (Component)  {
    function RedirectComponent(props){
        let {isAuth} = useSelector(state => state.auth)
        let navigate = useNavigate();
        useEffect(()=>{
            if (!isAuth){
                return navigate('/login')
            }
        },[isAuth, navigate])

            return (
                <Component />
            )
        }

    return RedirectComponent;
}
