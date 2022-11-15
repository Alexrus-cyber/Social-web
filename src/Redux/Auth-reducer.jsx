const SetUserData = 'SetUserData'
const ToggleIsAuth = 'ToggleIsAuth'
let initialState = {
    id:null,
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

export const toggleIsAuth = (isAuth) => {
    return{
        type: ToggleIsAuth,
        isAuth
    }
}
export const setUserData = (id, email, login) =>{
    return {
        type: SetUserData,
        data: {id,email,login}
    }
}