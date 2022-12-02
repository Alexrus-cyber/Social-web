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
    small: string | null
    large: string | null
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
