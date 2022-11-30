import {followAPI, userAPI} from "../../API/API";
import {updateObjectInArray} from "../../Utils/ObjectHelper";
import {UsersType} from "../../Types/Types";

/// action.type
let FOLLOW_UN_FOLLOW = 'FollowUnFollow'
let SET_USERS = 'setUsers'
let SET_CURRENT_PAGE = 'setCurrentPage'
let TOGGLE_IS_FETCHING = 'toggleIsFetching'
let TOGGLE_FOLLOWING_IN_PROGRESS = 'toggleFollowingInProgress'
///Types
export type InitialStateType = typeof initialState;

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}
type FollowUnFollowType =  {
    type: typeof FOLLOW_UN_FOLLOW,
    userId: number
    followed: boolean
}
type SetUsersType ={
    type: typeof SET_USERS
    users: Array<UsersType>
}
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleFollowingInProgressType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}

/// Начальное состояние
let initialState = {
    users: [] as Array<UsersType>,
    pageSize: null as number | null,
    totalUsersCounts: null as number | null,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [] as Array<number>, // array of users id
    init: false,
}


///Reducer
const FindUsersReducer = (state = initialState, action): InitialStateType => {
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
        default:
            return state;
    }
}

///actionCreators


export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        page: currentPage,
    }
}
export const followUnFollow = (userId: number, followed: boolean): FollowUnFollowType => {
    return {
        type: FOLLOW_UN_FOLLOW,
        userId: userId,
        followed
    }
}
export const setUsers = (users: Array<UsersType>): SetUsersType => {
    return {
        type: SET_USERS,
        users,
    }
}
export const toggleIsFetching = (fetch: boolean): ToggleIsFetchingType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: fetch,
    }
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressType => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId,
    }
}

///thunks
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
    }
}

const followUnFollowFlow = async (dispatch: any, id: number, apiMethod: any, followed: boolean) => {
    dispatch(toggleFollowingInProgress(true, id))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(followUnFollow(id, followed));
    }
    dispatch(toggleFollowingInProgress(false, id))

}

export const getFollow = (id: number, followed: boolean) => {
    return async (dispatch: any) => {
        await followUnFollowFlow(dispatch, id, followAPI.postFollow.bind(followAPI), followed)
    }
}
export const getUnFollow = (id: number, followed: boolean) => {
    return async (dispatch: any) => {
        await followUnFollowFlow(dispatch, id, followAPI.deleteUnFollow.bind(followAPI), followed)
    }
}

export default FindUsersReducer;