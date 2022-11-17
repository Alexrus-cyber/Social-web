import React, {useCallback, useEffect} from "react";
import {FindUsers} from "./Users/FindUsers";
import {useDispatch, useSelector} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unFollow} from "../../Redux/FindUsers-reducer";
import Preloader from "../Common/Preloader";
import {userAPI} from "../../API/API";
import axios from "axios";

const UsersContainerFunc = (props) => {
    const dispatch = useDispatch();
    const {users, pageSize, currentPage, isFetching} = useSelector(state => state.findUserPage)

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items))
            })
    }, [currentPage, pageSize, dispatch])

    const onPageChangedPlus = () => {
        let pageNumber = currentPage + 1;
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));

        userAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetching(false));
        })
    }
    const onPageChangedMinus = () => {
        let pageNumber = currentPage - 1;
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));

        userAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetching(false));
        })
    }
    const Follow = useCallback((id) => {
        axios
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},{withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(follow(id));
                }
            })
    }, [dispatch])

    const UnFollow = useCallback((id) => {
        axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(unFollow(id));
                }
            })
    },[dispatch])


    return (
        <>
            {isFetching ?
                <Preloader/> :
                <FindUsers follow={Follow} UnFollow={UnFollow} users={users}
                           currentPage={currentPage}
                           onPageChangedMinus={onPageChangedMinus}
                           onPageChangedPlus={onPageChangedPlus}
                />}
        </>

    )
}
export default UsersContainerFunc;