import {getMe} from "../Auth-reducer";

const SET_INITIALIZED = 'SetInitialized'

type SetInitializedType = {
    type: typeof SET_INITIALIZED
}
type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}
///actionCreators
export const setInitialized = (): SetInitializedType => {
    return {
        type: SET_INITIALIZED
    }
}

///Thunk

export const initializeApp = () => (dispatch: any) =>{
    let promise =  dispatch(getMe());
    Promise.all([promise]).then(() => dispatch(setInitialized()));
}