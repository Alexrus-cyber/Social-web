

let follow = 'follow'
let unFollow = 'unFollow'
let setUsers = 'setUsers'
let setCurrentPage = 'setCurrentPage'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCounts: 20,
    currentPage: 1,
}

const FindUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow: {
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
        case unFollow: {
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
        case setUsers: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case setCurrentPage: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        default:
            return state;
    }
}

export const setCurrentPageAC = (currentPage) => {
    return {
        type: setCurrentPage,
        page: currentPage,
    }
}
export const followAC = (userId) =>{
    return{
        type: follow,
        userId : userId,
    }
}
export const unFollowAC = (userId) =>{
    return{
        type: unFollow,
        userId : userId,
    }
}
export const setUsersAC = (users) => {
    return{
        type: setUsers,
        users: users,
    }
}

export default FindUsersReducer;