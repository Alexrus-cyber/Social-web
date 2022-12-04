import {PhotosType, UsersType} from "./Types";
import {ResultCodeForCaptcha, ResultCodesEnum} from "../API/API";

export type DataType = {
    id: number,
    email: string,
    login: string
}
export type MeResponseType = {
    data: DataType,
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
export type LoginResponseType = {
    data: { userId: number },
    resultCode: ResultCodesEnum | ResultCodeForCaptcha,
    messages: Array<string>
}
export type DeleteResponseType = {
    data: {},
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
export type PostFollowResponseType = {
    data: {},
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
export type GetUsersResponseType = {
    items: Array<UsersType>,
    totalCount: number,
    error: string
}
export type StatusResponseType = {
    data: {status: string},
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
export type PhotoResponseType = {
    data: {photos: PhotosType},
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
export type UpdateProfileResponseType = {
    data: {},
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
export type CaptchaResponseType = {
    url: string
}

