import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SetUserData = 'SetUserData'
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetUserData: {
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
export const setUserData = (id, email, login, isAuth) => {
    return {
        type: SetUserData,
        payload: {id, email, login, isAuth}
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
export const loginMe = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.loginMe(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(setUserData())
        } else {
            let message = data.messages.lenght > 0 ? data.messages[0] : "Введите коректный Email или Пароль"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, null))
        }
    }
}