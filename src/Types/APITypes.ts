import {PhotosType, UsersType} from "./Types";
import {ResultCodesEnum} from "../API/API";


export type MeResponseType = {
    id: number,
    email: string,
    login: string
}
export type LoginResponseType = {
    userId: number
}

export type GetUsersResponseType = {
    items: Array<UsersType>,
    totalCount: number,
    error: string
}
export type StatusResponseType = {
   status: string

}
export type PhotoResponseType = {
   photos: PhotosType

}

export type CaptchaResponseType = {
    url: string
}

export type ResponseGenericType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages:Array<string>
    resultCode: RC
}