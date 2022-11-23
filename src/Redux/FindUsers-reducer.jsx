import {followAPI, userAPI} from "../API/API";
import {updateObjectInArray} from "../Utils/ObjectHelper";

/// action.type
let FollowUnFollow = 'FollowUnFollow'
let SetUsers = 'setUsers'
let SetCurrentPage = 'setCurrentPage'
let ToggleIsFetching = 'toggleIsFetching'
let ToggleFollowingInProgress = 'toggleFollowingInProgress'
let SetInitialized = 'SetInitialized'


/// Начальное состояние
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCounts: 20,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
    init: false,
}

///Reducer
const FindUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FollowUnFollow: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: action.followed})
            }
        }
        case SetUsers: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SetCurrentPage: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case ToggleIsFetching : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case ToggleFollowingInProgress: {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId),
            }
        }
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
export const setCurrentPage = (currentPage) => {
    return {
        type: SetCurrentPage,
        page: currentPage,
    }
}
export const followUnFollow = (userId, followed) => {
    return {
        type: FollowUnFollow,
        userId: userId,
        followed
    }
}
export const setUsers = (users) => {
    return {
        type: SetUsers,
        users: users,
    }
}
export const toggleIsFetching = (fetch) => {
    return {
        type: ToggleIsFetching,
        isFetching: fetch,
    }
}
export const toggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: ToggleFollowingInProgress,
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

const followUnFollowFlow = async(dispatch, id,apiMethod, followed) =>{
    dispatch(toggleFollowingInProgress(true, id))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(followUnFollow(id, followed));
    }
    dispatch(toggleFollowingInProgress(false, id))

}

export const getFollow = (id, followed) => {
    return async (dispatch) => {
     await  followUnFollowFlow(dispatch, id, followAPI.postFollow.bind(followAPI),followed)
    }
}
export const getUnFollow = (id, followed) => {
    return async (dispatch) => {
      await followUnFollowFlow(dispatch, id, followAPI.deleteUnFollow.bind(followAPI),followed)
    }
}

export default FindUsersReducer;