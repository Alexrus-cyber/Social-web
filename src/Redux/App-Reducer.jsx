import {getMe} from "./Auth-reducer";

const SetInitialized = 'SetInitialized'
let initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetInitialized: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}
///actionCreators
export const setInitialized = () => {
    return {
        type: SetInitialized,
    }
}

///Thunk

export const initializeApp = () => (dispatch) =>{
    let promise =  dispatch(getMe());
    Promise.all([promise]).then(() => dispatch(setInitialized()));
}