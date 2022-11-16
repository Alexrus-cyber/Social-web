import React, {useEffect} from "react";
import Header from "./Header";
import {setUserData, toggleIsAuth} from "../../Redux/Auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../API/API";

const HeaderContainer = (props) => {


    useEffect(()=>{
        authAPI.getMe().then(
           data => {
                if (data.resultCode === 0){
                    let {id,login,email} = data.data
                    props.setUserData(id,email,login)
                }
            }
        )
    })

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