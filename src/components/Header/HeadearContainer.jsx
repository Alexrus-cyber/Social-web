import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {setUserData, toggleIsAuth} from "../../Redux/Auth-reducer";
import {connect} from "react-redux";

const HeaderContainer = (props) => {

    useEffect(()=>{
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials : true
            })
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id,login,email} = response.data.data
                    setUserData(id,email,login)
                }
            })
    }, [props.setUserData])

    return (
        <Header {...props} />
    );
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }

}

export default connect(mapStateToProps,{setUserData, toggleIsAuth})(HeaderContainer);