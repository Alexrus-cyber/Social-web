// @ts-ignore
import React, {useCallback, useEffect} from "react";
// @ts-ignore
import {FindUsers} from "./Users/FindUsers.tsx";
// @ts-ignore
import {getFollow, getUnFollow, getUsers, InitialStateType, setCurrentPage} from "../../Redux/Reducers/FindUsersReducer.ts";
import Preloader from "../Common/Preloader";
// @ts-ignore
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks.ts";


const UsersContainerFunc = () => {
    const dispatch = useAppDispatch();
    const {users, currentPage, isFetching, isFollowingInProgress} = useAppSelector((state: InitialStateType) => state.findUserPage)

    useEffect(() => {
        dispatch(getUsers(currentPage, 12)); ///Берем данные из BLL, а BLL просит дать данные DAL уровня.
    }, [dispatch,currentPage])

    const onPageChanged = useCallback((pageNumber: number) => { ///Изменение страцницы
        dispatch(setCurrentPage(pageNumber)); ///Используем thunk, выполняеться асинхронно. Появляеться промежуточный уровень между store и reducer.
    }, [dispatch])                 ///ThunkMiddleWare если приходит dispatch.action(являеться синхронной он пропускает его сразу в reducer)
    ///ThunkMiddleWare если приходит dispatch.thunk(являеться асинхронной он берет из middleWare по 1 action и передает в store.dispatch, а потом уже в reducer)

    const Follow = useCallback((id: number) => { ///Подписаться на человека
        dispatch(getFollow(id,true));
    }, [dispatch])

    const UnFollow = useCallback((id: number) => { ///Отписаться от человека
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