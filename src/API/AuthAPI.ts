import {LoginResponseType, MeResponseType, ResponseGenericType} from "../Types/APITypes";
import {instance, ResultCodeForCaptcha, ResultCodesEnum} from "./API";

export const authAPI = {
    getMe() {
        return instance.get<ResponseGenericType<MeResponseType>>(`auth/me`)
            .then(response => response.data)
    },
    loginMe(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<ResponseGenericType<LoginResponseType, ResultCodeForCaptcha & ResultCodesEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}