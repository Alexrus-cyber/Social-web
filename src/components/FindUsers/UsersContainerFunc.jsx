import React, {useEffect} from "react";
import {FindUsers} from "./Users/FindUsers";
import {useDispatch, useSelector} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unFollow} from "../../Redux/FindUsers-reducer";
import Preloader from "../Common/Preloader";
import {userAPI} from "../../API/API";

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

    return (
        <>
            {isFetching ?
                <Preloader/> :
                <FindUsers follow={follow} unFollow={unFollow} users={users}
                           currentPage={currentPage}
                           onPageChangedMinus={onPageChangedMinus}
                           onPageChangedPlus={onPageChangedPlus}
                />}
        </>

    )
}
export default UsersContainerFunc;
