import {followAPI, userAPI} from "../../API/API";
import {updateObjectInArray} from "../../Utils/ObjectHelper";
import {UsersType} from "../../Types/Types";
import {AppThunk, InferActionsTypes, RootState} from "../ReduxStore";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

///Types
export type InitialUsersStateType = typeof initialState;

/// Начальное состояние
let initialState = {
    users: [] as Array<UsersType>,
    pageSize: null as number | null,
    totalUsersCounts: null as number | null,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [] as Array<number>, // array of users id
}
type ActionsTypes = InferActionsTypes<typeof actions>;

///Reducer
const FindUsersReducer = (state = initialState, action: ActionsTypes): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW_UN_FOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: action.followed})
            }
        }
        case "SET_USERS": {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "TOGGLE_IS_FETCHING" : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "TOGGLE_FOLLOWING_IN_PROGRESS": {
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
export const actions = {
    setCurrentPage:(currentPage: number) => {
        return {
            type: "SET_CURRENT_PAGE",
            currentPage,
        } as const
    },
    followUnFollow : (userId: number, followed: boolean) => {
        return {
            type: "FOLLOW_UN_FOLLOW",
            userId,
            followed
        }as const
    },
    setUsers : (users: Array<UsersType>) => {
        return {
            type: "SET_USERS",
            users,
        }as const
    },
    toggleIsFetching : (isFetching: boolean) => {
        return {
            type: "TOGGLE_IS_FETCHING",
            isFetching
        }as const
    },
    toggleFollowingInProgress : (isFetching: boolean, userId: number) => {
        return {
            type: "TOGGLE_FOLLOWING_IN_PROGRESS",
            isFetching,
            userId,
        }as const
    },
}



///thunks

//ThunkAction<Promise<void>, RootState, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): AppThunk => {
    return async (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) => {
        dispatch(actions.toggleIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items))
    };
}

const followUnFollowFlow = async (dispatch: ThunkDispatch<RootState, unknown, Action<string>>, id: number, apiMethod: any, followed: boolean) => {
    dispatch(actions.toggleFollowingInProgress(true, id))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actions.followUnFollow(id, followed));
    }
    dispatch(actions.toggleFollowingInProgress(false, id))

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