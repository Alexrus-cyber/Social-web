import React, {useCallback, useEffect} from "react";
import {FindUsers} from "./Users/FindUsers";
import {useDispatch, useSelector} from "react-redux";
import {getFollow, getUnFollow, getUsers, setCurrentPage,} from "../../Redux/FindUsers-reducer";
import Preloader from "../Common/Preloader";

const UsersContainerFunc = () => {
    const dispatch = useDispatch();
    const {users, currentPage, isFetching, isFollowingInProgress} = useSelector(state => state.findUserPage)


    useEffect(() => {
        dispatch(getUsers(currentPage, 4)); ///Берем данные из BLL, а BLL просит дать данные DAL уровня.
    }, [dispatch,currentPage])

    const onPageChanged = useCallback((pageNumber) => { ///Изменение страцницы
        dispatch(setCurrentPage(pageNumber)); ///Используем thunk, выполняеться асинхронно. Появляеться промежуточный уровень между store и reducer.
    }, [dispatch])                 ///ThunkMiddleWare если приходит dispatch.action(являеться синхронной он пропускает его сразу в reducer)
    ///ThunkMiddleWare если приходит dispatch.thunk(являеться асинхронной он берет из middleWare по 1 action и передает в store.dispatch, а потом уже в reducer)

    const Follow = useCallback((id) => { ///Подписаться на человека
        dispatch(getFollow(id,true));
    }, [dispatch])

    const UnFollow = useCallback((id) => { ///Отписаться от человека
        dispatch(getUnFollow(id,false))
    }, [dispatch])

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