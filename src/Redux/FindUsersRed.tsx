import {followAPI, userAPI} from "../API/API";
import {updateObjectInArray} from "../Utils/ObjectHelper";

/// action.type
let FOLLOW_UN_FOLLOW = 'FollowUnFollow'
let SET_USERS = 'setUsers'
let SET_CURRENT_PAGE = 'setCurrentPage'
let TOGGLE_IS_FETCHING = 'toggleIsFetching'
let TOGGLE_FOLLOWING_IN_PROGRESS = 'toggleFollowingInProgress'
let SET_INITIALIZED = 'SetInitialized'
///Types
type InitialStateType = typeof initialState;

type SetCurrentPage = (currentPage: number) => {
    type: typeof SET_CURRENT_PAGE
    page: number
}
type FollowUnFollow = (userId: number, followed: boolean) => {
    type: typeof FOLLOW_UN_FOLLOW,
    userId: number
    followed: boolean
}
type SetUsers = (users: Object) =>{
    type: typeof SET_USERS
    users: Object
}
type ToggleIsFetching = (fetch: boolean) => {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}

/// Начальное состояние
let initialState = {
    users: [],
    pageSize: null as number | null,
    totalUsersCounts: null as number | null,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
    init: false,
}


///Reducer
const FindUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UN_FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: action.followed})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId),
            }
        }
        case SET_INITIALIZED: {
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


export const setCurrentPage: SetCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        page: currentPage,
    }
}
export const followUnFollow: FollowUnFollow = (userId, followed) => {
    return {
        type: FOLLOW_UN_FOLLOW,
        userId: userId,
        followed
    }
}
export const setUsers: SetUsers = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}
export const toggleIsFetching: ToggleIsFetching = (fetch) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: fetch,
    }
}
export const toggleFollowingInProgress: ToggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId,
    }
}

///thunks
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
    }
}

const followUnFollowFlow = async (dispatch, id, apiMethod, followed) => {
    dispatch(toggleFollowingInProgress(true, id))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(followUnFollow(id, followed));
    }
    dispatch(toggleFollowingInProgress(false, id))

}

export const getFollow = (id, followed) => {
    return async (dispatch) => {
        await followUnFollowFlow(dispatch, id, followAPI.postFollow.bind(followAPI), followed)
    }
}
export const getUnFollow = (id, followed) => {
    return async (dispatch) => {
        await followUnFollowFlow(dispatch, id, followAPI.deleteUnFollow.bind(followAPI), followed)
    }
}

export default FindUsersReducer;