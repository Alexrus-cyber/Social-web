import {useEffect} from "react";
// @ts-ignore
import {getLoading, getProfile, getStatus} from "../Redux/Reducers/ProfileReducer.ts";

const takeDispatch = (dispatch: any, userId: number, haveStatus: boolean) => {
    if (haveStatus) {
        dispatch(getLoading(true))
        dispatch(getProfile(userId, false));
        dispatch(getStatus(userId));
    } else {
        dispatch(getLoading(true));
        dispatch(getProfile(userId, false));
    }
}


export const useProfile = (params: any, id: number, isAuth: boolean, dispatch: any, navigate: any, haveStatus: boolean) => {
    return useEffect(() => {
        console.log("Hello")
        let userId = params.id;
        if (!userId) {
            if (isAuth) {
                userId = id;
                takeDispatch(dispatch, userId, haveStatus);
            } else {
                navigate('/login')
            }
        } else {
            if (haveStatus){
                takeDispatch(dispatch, userId, haveStatus);
            }
        }

    }, [dispatch, params.id, id, navigate, isAuth, haveStatus])
}