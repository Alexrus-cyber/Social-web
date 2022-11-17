import React, {useCallback, useEffect} from "react";
import {FindUsers} from "./Users/FindUsers";
import {useDispatch, useSelector} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unFollow
} from "../../Redux/FindUsers-reducer";
import Preloader from "../Common/Preloader";
import {followAPI, userAPI} from "../../API/API";

const UsersContainerFunc = () => {
    const dispatch = useDispatch();
    const {users, pageSize, currentPage, isFetching ,isFollowingInProgress} = useSelector(state => state.findUserPage)

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
        dispatch(toggleFollowingInProgress(true, id));
        followAPI.postFollow(id)
            .then(data =>{
                if (data.resultCode === 0){
                    dispatch(follow(id));
                }
                dispatch(toggleFollowingInProgress(false, id))
            }
            )

    }, [dispatch])

    const UnFollow = useCallback((id) => {
        dispatch(toggleFollowingInProgress(true, id))
        followAPI.deleteUnFollow(id)
            .then(data =>{
                if (data.resultCode === 0){
                    dispatch(unFollow(id));
                }
                    dispatch(toggleFollowingInProgress(false, id))
                }
            )
    },[dispatch])


    return (
        <>
            {isFetching ?
                <Preloader/> :
                <FindUsers follow={Follow} UnFollow={UnFollow} users={users}
                           currentPage={currentPage}
                           onPageChangedMinus={onPageChangedMinus}
                           onPageChangedPlus={onPageChangedPlus}
                           isFollowingInProgress = {isFollowingInProgress}
                />}
        </>

    )
}
export default UsersContainerFunc;