import {useEffect} from "react";
// @ts-ignore
import {getLoading, getProfile, getStatus} from "../Redux/Reducers/ProfileReducer.ts";
import {AppDispatch} from "../Redux/ReduxStore";

const takeDispatch = (dispatch: AppDispatch, userId: number, haveStatus: boolean): void => {
    if (haveStatus) {
        dispatch(getLoading(true))
        dispatch(getProfile(userId, false));
        dispatch(getStatus(userId));
    } else {
        dispatch(getLoading(true));
        dispatch(getProfile(userId, false));
    }

}


export const useProfile = (params: any, id: number, isAuth: boolean, dispatch: AppDispatch, navigate: any, haveStatus: boolean) => {
    useEffect(() => {
        console.log("Hello")
        let userId = Number(params.id);
        if (!userId) {
            if (isAuth) {
                userId = id;
                takeDispatch(dispatch, userId, haveStatus);
            } else {
                navigate('/login')
            }
        } else {
            if (haveStatus) {
                takeDispatch(dispatch, userId, haveStatus);
            }
        }

    }, [dispatch, params.id, id, navigate, isAuth, haveStatus])
}