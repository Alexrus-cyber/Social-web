import {ResultCodeForCaptcha, ResultCodesEnum} from "../../API/API";
import {stopSubmit} from "redux-form";
import {AppThunk, InferActionsTypes} from "../ReduxStore";
import {authAPI} from "../../API/AuthAPI";
import {securityAPI} from "../../API/SecurityAPI";

//types
export type InitialAuthStateType = typeof initialState;

//state
let initialState = {
    id: 0 as number,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

export const action = {
    setUserData: (id: number, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null) => {
        return {
            type: "SetUserData",
            payload: {id, email, login, isAuth, captchaUrl}
        } as const
    },
    getCaptchaUrlData: (captchaUrl: string | null) => {
        return {
            type: "GetCaptchaUrlData",
            captchaUrl
        } as const
    },
}

type ActionsType = InferActionsTypes<typeof action>
export const authReducer = (state = initialState, action: ActionsType): InitialAuthStateType => {
    switch (action.type) {
        case "SetUserData": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "GetCaptchaUrlData": {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state;
    }
}

///thunk
export const getMe = (): AppThunk<ActionsType>  => {
    return async (dispatch) => {
        let data = await authAPI.getMe();
        if (data.resultCode === ResultCodesEnum.Success) {
            let {id, login, email} = data.data

            // @ts-ignore
            dispatch(action.setUserData(id, email, login, true))
        }
    }
}
export const loginMe = (email: string, password: string, rememberMe: boolean, captchaUrl: string | null):  AppThunk<ActionsType | ReturnType<typeof stopSubmit>>  => {
    return async (dispatch) => {
        let data = await authAPI.loginMe(email, password, rememberMe, captchaUrl);
        if (data.resultCode === ResultCodesEnum.Success) {
            // @ts-ignore
            dispatch(action.setUserData())
        } else {
            if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                await dispatch(getCaptchaUrl());
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Введите коректный Email или Пароль"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}
export const getCaptchaUrl = ():  AppThunk<ActionsType>  => {
    return async (dispatch) => {
        let data = await securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(action.getCaptchaUrlData(captchaUrl))
    }
}
export const logout = ():  AppThunk<ActionsType>  => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(action.setUserData(0, null, null, false, null))
        }
    }
}