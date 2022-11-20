import {authAPI} from "../API/API";

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
    return (dispatch) => {
        authAPI.getMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, email, login,true))
                }
            }
        )
    }
}
export const loginMe = (email,password,rememberMe) => {
    return (dispatch) => {
        authAPI.loginMe(email,password,rememberMe).then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData())
                }
            }
        )
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null,null,null,null))
                }
            }
        )
    }
}