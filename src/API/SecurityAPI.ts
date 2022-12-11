import {CaptchaResponseType} from "../Types/APITypes";
import {instance} from "./API";

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`).then(response => response.data);
    }
}