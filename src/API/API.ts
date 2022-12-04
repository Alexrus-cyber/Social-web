import axios from "axios";
import {ProfileType} from "../Types/Types";
import {
    CaptchaResponseType,
    DeleteResponseType,
    GetUsersResponseType,
    LoginResponseType,
    MeResponseType,
    PhotoResponseType,
    PostFollowResponseType,
    StatusResponseType,
    UpdateProfileResponseType
} from "../Types/APITypes";

//Enums
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

//Requests
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})


export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}


export const authAPI = {
    getMe() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(response => response.data)
    },
    loginMe(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<DeleteResponseType>(`auth/login`)
            .then(response => response.data)
    }
}

export const followAPI = {
    postFollow(id: number) {
        return instance.post<PostFollowResponseType>(`follow/${id}`)
            .then((response) => response.data)
    },
    deleteUnFollow(id: number) {
        return instance.delete<DeleteResponseType>(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id: number) {
        return instance.get<ProfileType>(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id: number) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<StatusResponseType>(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(file: any) {
        let formData = new FormData();
        formData.append("image", file)

        return instance.put<PhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    updateProfile(profile: ProfileType) {
        return instance.put<UpdateProfileResponseType>(`profile`, profile)
            .then(response => response.data)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`).then(response => response.data);
    }
}
