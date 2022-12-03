// @ts-ignore
import {followAPI, userAPI} from "../../API/API";
// @ts-ignore
import {updateObjectInArray} from "../../Utils/ObjectHelper";
import {UsersType} from "../../Types/Types";
// @ts-ignore
import {AppThunk, RootState} from "../ReduxStore.tsx";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

/// action.type
let FOLLOW_UN_FOLLOW = 'FollowUnFollow'
let SET_USERS = 'SetUsers'
let SET_CURRENT_PAGE = 'SetCurrentPage'
let TOGGLE_IS_FETCHING = 'ToggleIsFetching'
let TOGGLE_FOLLOWING_IN_PROGRESS = 'ToggleFollowingInProgress'
///Types
export type InitialStateType = typeof initialState;

type ActionsTypes = SetCurrentPageType & FollowUnFollowType & SetUsersType & ToggleIsFetchingType & ToggleFollowingInProgressType;
/*type ActionsTypes = SetCurrentPageType | FollowUnFollowType | SetUsersType | ToggleIsFetchingType | ToggleFollowingInProgressType;*/

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type FollowUnFollowType =  {
    type: typeof FOLLOW_UN_FOLLOW,
    followed: boolean
    userId: number
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
}


///Reducer
const FindUsersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
                currentPage: action.currentPage
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
        currentPage,
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
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
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

//ThunkAction<Promise<void>, RootState, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): AppThunk => {
    return async (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
    };
}

const followUnFollowFlow = async (dispatch: ThunkDispatch<RootState, unknown, Action<string>>, id: number, apiMethod: any, followed: boolean) => {
    dispatch(toggleFollowingInProgress(true, id))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(followUnFollow(id, followed));
    }
    dispatch(toggleFollowingInProgress(false, id))

}

export const getFollow = (id: number, followed: boolean): AppThunk => {
    return async (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) => {
        await followUnFollowFlow(dispatch, id, followAPI.postFollow.bind(followAPI), followed)
    }
}
export const getUnFollow = (id: number, followed: boolean):AppThunk => {
    return async (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) => {
        await followUnFollowFlow(dispatch, id, followAPI.deleteUnFollow.bind(followAPI), followed)
    }
}

export default FindUsersReducer;