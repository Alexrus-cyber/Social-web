import {authAPI, securityAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SetUserData = 'SetUserData'
const GetCaptchaUrlData = 'GetCaptchaUrlData'
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

export const authReducer = (state = initialState, action) => {
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
export const setUserData = (id, email, login, isAuth, captchaUrl) => {
    return {
        type: SetUserData,
        payload: {id, email, login, isAuth, captchaUrl}
    }
}
export const getCaptchaUrlData = (captchaUrl) => {
    return {
        type: GetCaptchaUrlData,
        payload: {captchaUrl}
    }
}

///thunk
export const getMe = () => {
    return async (dispatch) => {
        let data = await authAPI.getMe();
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setUserData(id, email, login, true))
        }
    }
}
export const loginMe = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.loginMe(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
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
    return async (dispatch) => {
        let data = await securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlData(captchaUrl))
    }
}
export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, null, null))
        }
    }
}