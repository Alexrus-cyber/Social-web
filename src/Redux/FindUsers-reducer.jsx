import {followAPI, userAPI} from "../API/API";

/// action.type
let Follow = 'follow'
let UnFollow = 'unFollow'
let SetUsers = 'setUsers'
let SetCurrentPage = 'setCurrentPage'
let ToggleIsFetching = 'toggleIsFetching'
let ToggleFollowingInProgress = 'toggleFollowingInProgress'

/// Начальное состояние
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCounts: 20,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
}

///Reducer
const FindUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UnFollow: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
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
        case ToggleIsFetching :{
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case ToggleFollowingInProgress: {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress,action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId),
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
export const follow = (userId) =>{
    return{
        type: Follow,
        userId : userId,
    }
}
export const unFollow = (userId) =>{
    return{
        type: UnFollow,
        userId : userId,
    }
}
export const setUsers = (users) => {
    return{
        type: SetUsers,
        users: users,
    }
}
export const toggleIsFetching = (fetch) => {
    return{
        type: ToggleIsFetching,
        isFetching: fetch,
    }
}
export const toggleFollowingInProgress = ( isFetching , userId) => {
    return{
        type: ToggleFollowingInProgress,
        isFetching,
        userId,
    }
}

///thunks
export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items))
            })
    }
}
export const getFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        followAPI.postFollow(id)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(follow(id));
                    }
                    dispatch(toggleFollowingInProgress(false, id))
                }
            )
    }
}
export const getUnFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        followAPI.deleteUnFollow(id)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(unFollow(id));
                    }
                    dispatch(toggleFollowingInProgress(false, id))
                }
            )
    }
}

export default FindUsersReducer;