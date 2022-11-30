import {authAPI, securityAPI} from "../../API/API";
import {stopSubmit} from "redux-form";
// action.type
const SetUserData = 'SetUserData'
const GetCaptchaUrlData = 'GetCaptchaUrlData'

//types
export type InitialStateType = typeof  initialState;

type PayloadDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
type SetUserDataType = {
    type: typeof SetUserData;
    payload: PayloadDataType;
}
type GetCaptchaUrlDataType = {
    type: typeof GetCaptchaUrlData;
    payload: { captchaUrl : string | null };
}

//state
let initialState = {
    id: null as number | null,
    email: null as  string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export const authReducer = (state = initialState, action: any):InitialStateType => {
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
export const getMe = () => {
    return async (dispatch: any) => {
        let data = await authAPI.getMe();
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            // @ts-ignore
            dispatch(setUserData(id, email, login, true))
        }
    }
}
export const loginMe = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        let data = await authAPI.loginMe(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            // @ts-ignore
            dispatch(setUserData())
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = data.messages.lenght > 0 ? data.messages[0] : "Введите коректный Email или Пароль"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}
export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        let data = await securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlData(captchaUrl))
    }
}
export const logout = () => {
    return async (dispatch: any) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false, null))
        }
    }
}