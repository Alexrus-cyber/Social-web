import React from "react";
import {FindUsers} from "./FindUsers";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/FindUsers-reducer";



let mapStateToProps = (state) =>{
    return {
        users: state.findUserPage.users,
    }
}

let DispatchStateToProps = (dispatch) =>{
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, DispatchStateToProps)(FindUsers);