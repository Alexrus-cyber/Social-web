import image from "../components/Dialogs/Users/img/icon.jpg";
import Ivan from "../components/Dialogs/Users/img/Ivan.jpg";
import Andrey from "../components/Dialogs/Users/img/Andrey.jpg";

let follow = 'follow'
let unFollow = 'unFollow'
let setUsers = 'setUsers'

let initialState = {
    users: []

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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
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