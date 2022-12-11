import {ProfileType} from "../Types/Types";
import {PhotoResponseType, ResponseGenericType, StatusResponseType} from "../Types/APITypes";
import {instance} from "./API";

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
        return instance.put<ResponseGenericType<StatusResponseType>>(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(file: any) {
        let formData = new FormData();
        formData.append("image", file)

        return instance.put<ResponseGenericType<PhotoResponseType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    updateProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    }
}