import {authAPI} from "../API/API";

const SetUserData = 'SetUserData'
const ToggleIsAuth = 'ToggleIsAuth'
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ToggleIsAuth : {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        case SetUserData: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}
///actionCreators
export const toggleIsAuth = (isAuth) => {
    return {
        type: ToggleIsAuth,
        isAuth
    }
}
export const setUserData = (id, email, login) => {
    return {
        type: SetUserData,
        data: {id, email, login}
    }
}

///thunk
export const getMe = () => {
    return (dispatch) => {
        authAPI.getMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, email, login))
                }
            }
        )
    }
}