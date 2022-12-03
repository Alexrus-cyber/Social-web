// @ts-ignore
import {AppDispatch} from "../Redux/ReduxStore";

export type PostType = {
    id: number
    likesCount: number
    message: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null | undefined
    large: string | null | undefined
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type QuizParams = {
    id: string;
};
export type UseProfileType = {
    params: QuizParams
    id: number
    isAuth: boolean
    dispatch: AppDispatch
    navigate: any
    haveStatus: boolean
}
