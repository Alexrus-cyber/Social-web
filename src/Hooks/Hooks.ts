import {useCallback, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import {actions, getFollow, getUnFollow, getUsers } from '../Redux/Reducers/FindUsersReducer';
import {savePhoto, setProfile, updateStatus } from '../Redux/Reducers/ProfileReducer';
import type { RootState, AppDispatch } from '../Redux/ReduxStore'
import { ProfileType, QuizParams } from '../Types/Types';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <Return>(callback: (state: RootState) => Return) => {
   return useSelector((state: RootState) => callback(state));
}


export const useGetUsers = (currentPage: number, pageSize: number) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize)); /// Получение юзеров для страницы пользователи
    }, [dispatch,currentPage, pageSize])
}
///FindUsersHooks
export const useFollow = () => {
    const dispatch = useAppDispatch();

    return useCallback((id: number) => { ///Подписаться на человека
        dispatch(getFollow(id,true));
        }, [dispatch])
}

export const useUnFollow = () => {
    const dispatch = useAppDispatch();

    return useCallback((id: number) => { ///Отписаться от человека
        dispatch(getUnFollow(id,false))
    }, [dispatch])
}

export const usePageChange = () => {
    const dispatch = useAppDispatch();

    return useCallback((pageNumber: number) => { ///Изменение страцницы
        dispatch(actions.setCurrentPage(pageNumber));
        }, [dispatch])
}


///ProfileHooks
export const useUpdateStatus = () => {
    const dispatch = useAppDispatch();

    return useCallback((status: string) => {
        dispatch(updateStatus(status));
        }, [dispatch])
}

export const useUpdateProfile = () => {
    const dispatch = useAppDispatch();

    return useCallback((profile: ProfileType) => {
        dispatch(setProfile(profile))
    }, [dispatch])
}
export const useSavePhoto = () => {
    const dispatch = useAppDispatch();

    return useCallback((file: File) => {
        dispatch(savePhoto(file));
        }, [dispatch])
}

export const useUserID = (id: number) => { /// Проверка на себя или другого пользователя
    let params = useParams<QuizParams>();
    let userId = params.id;

    if (userId === undefined) {userId = String(id)}
    return userId
}