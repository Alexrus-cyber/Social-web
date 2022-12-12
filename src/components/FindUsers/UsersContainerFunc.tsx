import React from "react";
import {FindUsers} from "./Users/FindUsers";
import Preloader from "../Common/Preloader";
import {useAppSelector, useFollow, useGetUsers, usePageChange, useUnFollow} from "../../Hooks/Hooks";


const UsersContainerFunc = () => {
    const {users, currentPage, isFetching, isFollowingInProgress} = useAppSelector(state => state.findUserPage)

    useGetUsers(currentPage, 15);
    const onPageChanged = usePageChange();
    const Follow = useFollow();
    const UnFollow = useUnFollow();

    return (
        <>
            {isFetching ?
                <Preloader/> :
                <FindUsers follow={Follow} UnFollow={UnFollow} users={users}
                           currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           isFollowingInProgress={isFollowingInProgress}
                />}
        </>

    )
}
export default UsersContainerFunc;