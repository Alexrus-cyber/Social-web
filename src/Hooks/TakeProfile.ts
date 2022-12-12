import {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {actionsCreators, getProfile, getStatus} from "../Redux/Reducers/ProfileReducer";
import {AppDispatch} from "../Redux/ReduxStore";
import { QuizParams } from "../Types/Types";
import { useAppDispatch } from "./Hooks";

const takeDispatch = (dispatch: AppDispatch, userId: number, haveStatus: boolean): void => {
    if (haveStatus) {
        dispatch(actionsCreators.getLoading(true))
        dispatch(getProfile(userId, false));
        dispatch(getStatus(userId));
    } else {
        dispatch(actionsCreators.getLoading(true));
        dispatch(getProfile(userId, false));
    }

}


export const useProfile = (id: number, isAuth: boolean, haveStatus: boolean) => {
    let navigate = useNavigate();
    let dispatch = useAppDispatch();
    let params = useParams<QuizParams>();
    
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