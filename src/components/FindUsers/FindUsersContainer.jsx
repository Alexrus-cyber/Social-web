import React from "react";
import {FindUsers} from "./FindUsers";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC} from "../../Redux/FindUsers-reducer";
import UsersClass from "./UsersClass";



let mapStateToProps = (state) =>{
    return {
        users: state.findUserPage.users,
        pageSize: state.findUserPage.pageSize,
        totalUsersCounts: state.findUserPage.totalUsersCounts,
        currentPage: state.findUserPage.currentPage,
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const FindUsersContainer = connect(mapStateToProps, DispatchStateToProps)(UsersClass);