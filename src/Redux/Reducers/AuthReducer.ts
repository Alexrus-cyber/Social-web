// @ts-ignore
import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../../API/API";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {InferActionsTypes, RootState} from "../ReduxStore";
import {ActionsTypes} from "./ProfileReducer";
// action.type
const SetUserData = 'SetUserData'
const GetCaptchaUrlData = 'GetCaptchaUrlData'

//types
export type InitialAuthStateType = typeof  initialState;

type ActionsType = InferActionsTypes<typeof action>
export const action = {
    setUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null) => {
        return {
            type: SetUserData,
            payload: {id, email, login, isAuth, captchaUrl}
        }
    },
    getCaptchaUrlData: (captchaUrl: string | null) => {
        return {
            type: GetCaptchaUrlData,
            captcha: captchaUrl
        }
    }
}


//state
let initialState = {
    id: null as number | null,
    email: null as  string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export const authReducer = (state = initialState, action: ActionsTypes):InitialAuthStateType => {
    switch (action.type) {
        case SetUserData: {
            return  {
                ...state,
                ...action.payload
            }
        }
        case GetCaptchaUrlData: {
            return {
                ...state,
                ...action.captchaUrl
            }
        }
        default:
            return state;
    }
}
///actionCreators




///thunk
export const getMe = (): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await authAPI.getMe();
        if (data.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = data.data

            // @ts-ignore
            dispatch(action.setUserData(id, email, login, true))
        }
    }
}
export const loginMe = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await authAPI.loginMe(email, password, rememberMe, captcha);
        if (data.resultCode === ResultCodesEnum.Success) {
            // @ts-ignore
            dispatch(action.setUserData())
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
        dispatch(action.getCaptchaUrlData(captchaUrl))
    }
}
export const logout = ():ThunkAction<Promise<void>, RootState, unknown, ActionsType> => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(action.setUserData(null, null, null, false, null))
        }
    }
}