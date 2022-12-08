// @ts-ignore
import {getMe} from "./AuthReducer.ts";
// @ts-ignore
import {RootState} from "../ReduxStore.tsx";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

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

export const appReducer = (state = initialState, action: SetInitializedType):InitialStateType => {
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

export const initializeApp = () => (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) =>{
    let promise =  dispatch(getMe());
    Promise.all([promise]).then(() => dispatch(setInitialized()));
}