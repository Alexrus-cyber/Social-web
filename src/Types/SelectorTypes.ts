import {IdCounterType, MessagesType, MessageUsersType, ProfileType, UsersType} from "./Types";

export type ProfilePageType = {
    profile: ProfileType,
    status: string,
    isLoading: boolean
}
export type DialogsPageType = {
    messages:Array<MessagesType>,
    messageUsers:Array<MessageUsersType>,
    idCounter:Array<IdCounterType>
}
export type AuthPageType = {
    id: number,
    isAuth: boolean
    login: string
}
export type FindUsersPageType = {
    users: Array<UsersType>,
    currentPage: number,
    isFetching: boolean,
    isFollowingInProgress: Array<number>
}