// @ts-ignore
import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../../API/API";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../ReduxStore";
// action.type
const SetUserData = 'SetUserData'
const GetCaptchaUrlData = 'GetCaptchaUrlData'

//types
export type InitialStateType = typeof  initialState;

type ActionsType = SetUserDataType | GetCaptchaUrlDataType


type SetUserDataType = {
    type: typeof SetUserData;
    payload: PayloadDataType;
}
type GetCaptchaUrlDataType = {
    type: typeof GetCaptchaUrlData;
    payload: { captchaUrl : string | null };
}
type PayloadDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
//state
let initialState = {
    id: null as number | null,
    email: null as  string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export const authReducer = (state = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case SetUserData:
        case GetCaptchaUrlData: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}
///actionCreators


export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null): SetUserDataType => {
    return {
        type: SetUserData,
        payload: {id, email, login, isAuth, captchaUrl}
    }
}


export const getCaptchaUrlData = (captchaUrl: string | null):GetCaptchaUrlDataType => {
    return {
        type: GetCaptchaUrlData,
        payload: {captchaUrl}
    }
}

///thunk
export const getMe = (): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await authAPI.getMe();
        if (data.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = data.data
            // @ts-ignore
            dispatch(setUserData(id, email, login, true))
        }
    }
}
export const loginMe = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await authAPI.loginMe(email, password, rememberMe, captcha);
        if (data.resultCode === ResultCodesEnum.Success) {
            // @ts-ignore
            dispatch(setUserData())
        } else {
            if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                await dispatch(getCaptchaUrl());
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Введите коректный Email или Пароль"
            // @ts-ignore
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}
export const getCaptchaUrl = (): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlData(captchaUrl))
    }
}
export const logout = ():ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false, null))
        }
    }
}